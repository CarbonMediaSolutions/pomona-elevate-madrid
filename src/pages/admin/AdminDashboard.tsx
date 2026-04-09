import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Link } from "react-router-dom";
import { FileText, Image, Settings } from "lucide-react";

const AdminDashboard = () => {
  const { data: pages } = useQuery({
    queryKey: ["admin-pages"],
    queryFn: async () => {
      const { data } = await supabase.from("pages").select("*").order("slug");
      return data ?? [];
    },
  });

  const { data: mediaCount } = useQuery({
    queryKey: ["admin-media-count"],
    queryFn: async () => {
      const { count } = await supabase.from("media_library").select("*", { count: "exact", head: true });
      return count ?? 0;
    },
  });

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="bg-white rounded-lg border border-gray-200 p-5">
          <div className="flex items-center gap-3 mb-2">
            <FileText className="w-5 h-5 text-gray-500" />
            <h3 className="font-semibold text-gray-900">Pages</h3>
          </div>
          <p className="text-3xl font-bold text-gray-900">{pages?.length ?? 0}</p>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-5">
          <div className="flex items-center gap-3 mb-2">
            <Image className="w-5 h-5 text-gray-500" />
            <h3 className="font-semibold text-gray-900">Media Files</h3>
          </div>
          <p className="text-3xl font-bold text-gray-900">{mediaCount}</p>
        </div>
        <Link to="/admin/settings" className="bg-white rounded-lg border border-gray-200 p-5 hover:border-gray-400 transition-colors">
          <div className="flex items-center gap-3 mb-2">
            <Settings className="w-5 h-5 text-gray-500" />
            <h3 className="font-semibold text-gray-900">Site Settings</h3>
          </div>
          <p className="text-sm text-gray-500">WhatsApp, social links, contact info</p>
        </Link>
      </div>

      <h3 className="text-lg font-semibold text-gray-900 mb-3">All Pages</h3>
      <div className="bg-white rounded-lg border border-gray-200 divide-y divide-gray-100">
        {pages?.map((page) => (
          <Link
            key={page.slug}
            to={`/admin/pages/${page.slug}`}
            className="flex items-center justify-between px-4 py-3 hover:bg-gray-50 transition-colors"
          >
            <div>
              <p className="font-medium text-gray-900">{page.title}</p>
              <p className="text-sm text-gray-500">/{page.slug === "home" ? "" : page.slug}</p>
            </div>
            <span className={`text-xs px-2 py-1 rounded-full ${page.is_published ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-500"}`}>
              {page.is_published ? "Published" : "Draft"}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;

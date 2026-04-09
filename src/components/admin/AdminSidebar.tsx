import { NavLink } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { FileText, Image, Settings, LayoutDashboard } from "lucide-react";

const linkClass = ({ isActive }: { isActive: boolean }) =>
  `flex items-center gap-2 px-3 py-2 rounded-md text-sm transition-colors ${
    isActive
      ? "bg-gray-900 text-white"
      : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
  }`;

const AdminSidebar = () => {
  const { data: pages = [] } = useQuery({
    queryKey: ["sidebar-pages"],
    queryFn: async () => {
      const { data } = await supabase.from("pages").select("slug, title").order("slug");
      return data ?? [];
    },
  });

  return (
  <aside className="w-60 bg-white border-r border-gray-200 min-h-screen flex flex-col">
    <div className="p-4 border-b border-gray-200">
      <h2 className="font-bold text-gray-900 text-sm uppercase tracking-wider">CMS</h2>
    </div>
    <nav className="flex-1 p-3 space-y-1">
      <NavLink to="/admin" end className={linkClass}>
        <LayoutDashboard className="w-4 h-4" /> Dashboard
      </NavLink>

      <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mt-4 mb-2 px-3">
        Pages
      </p>
      {pages.map((p) => (
        <NavLink key={p.slug} to={`/admin/pages/${p.slug}`} className={linkClass}>
          <FileText className="w-4 h-4" /> {p.title}
        </NavLink>
      ))}

      <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mt-4 mb-2 px-3">
        Tools
      </p>
      <NavLink to="/admin/media" className={linkClass}>
        <Image className="w-4 h-4" /> Media Library
      </NavLink>
      <NavLink to="/admin/settings" className={linkClass}>
        <Settings className="w-4 h-4" /> Site Settings
      </NavLink>
    </nav>
  </aside>
  );
};

export default AdminSidebar;

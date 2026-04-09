import { useState, useEffect } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { Save } from "lucide-react";

const SETTINGS_FIELDS = [
  { key: "whatsapp_number", label: "WhatsApp Number", placeholder: "34639810887" },
  { key: "instagram_url", label: "Instagram URL", placeholder: "https://instagram.com/..." },
  { key: "tiktok_url", label: "TikTok URL", placeholder: "https://tiktok.com/..." },
  { key: "email", label: "Contact Email", placeholder: "info@pomonaclub.es" },
  { key: "address", label: "Address", placeholder: "Calle de Claudio Coello 99..." },
  { key: "phone", label: "Phone", placeholder: "+34 639 810 887" },
];

const AdminSettings = () => {
  const queryClient = useQueryClient();
  const [values, setValues] = useState<Record<string, string>>({});
  const [dirty, setDirty] = useState(false);

  const { data: settings, isLoading } = useQuery({
    queryKey: ["admin-settings"],
    queryFn: async () => {
      const { data } = await supabase.from("site_settings").select("*");
      const map: Record<string, string> = {};
      data?.forEach((row) => {
        if (row.key) map[row.key] = row.value ?? "";
      });
      return map;
    },
  });

  useEffect(() => {
    if (settings) setValues(settings);
  }, [settings]);

  const saveMutation = useMutation({
    mutationFn: async () => {
      for (const field of SETTINGS_FIELDS) {
        const val = values[field.key] ?? "";
        await supabase
          .from("site_settings")
          .upsert({ key: field.key, value: val }, { onConflict: "key" });
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin-settings"] });
      queryClient.invalidateQueries({ queryKey: ["site-settings"] });
      setDirty(false);
      toast.success("Settings saved");
    },
    onError: (err: any) => toast.error(err.message),
  });

  if (isLoading) return <p className="text-gray-500">Loading...</p>;

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Site Settings</h2>
        {dirty && (
          <Button onClick={() => saveMutation.mutate()} disabled={saveMutation.isPending}>
            <Save className="w-4 h-4 mr-1" /> Save Changes
          </Button>
        )}
      </div>

      <div className="bg-white rounded-lg border border-gray-200 p-6 space-y-4 max-w-lg">
        {SETTINGS_FIELDS.map((field) => (
          <div key={field.key}>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {field.label}
            </label>
            <Input
              value={values[field.key] ?? ""}
              onChange={(e) => {
                setValues((prev) => ({ ...prev, [field.key]: e.target.value }));
                setDirty(true);
              }}
              placeholder={field.placeholder}
              className="border-gray-200"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminSettings;

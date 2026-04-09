import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

export interface PageSection {
  id: string;
  page_slug: string;
  section_key: string;
  section_type: string;
  order_index: number;
  content: Record<string, any>;
  updated_at: string;
}

export function usePageContent(pageSlug: string) {
  return useQuery({
    queryKey: ["page-sections", pageSlug],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("page_sections")
        .select("*")
        .eq("page_slug", pageSlug)
        .order("order_index");
      if (error) throw error;
      return (data ?? []) as PageSection[];
    },
    staleTime: 5 * 60 * 1000,
  });
}

export function useSiteSettings() {
  return useQuery({
    queryKey: ["site-settings"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("site_settings")
        .select("*");
      if (error) throw error;
      const map: Record<string, string> = {};
      data?.forEach((row) => {
        if (row.key && row.value) map[row.key] = row.value;
      });
      return map;
    },
    staleTime: 5 * 60 * 1000,
  });
}

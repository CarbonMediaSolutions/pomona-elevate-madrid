import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { usePageContent } from "@/hooks/usePageContent";
import Layout from "@/components/layout/Layout";
import SectionRenderer from "@/components/dynamic/SectionRenderer";
import NotFound from "./NotFound";

const DynamicPage = () => {
  const { slug } = useParams<{ slug: string }>();

  const { data: page, isLoading: pageLoading } = useQuery({
    queryKey: ["dynamic-page", slug],
    queryFn: async () => {
      const { data } = await supabase
        .from("pages")
        .select("*")
        .eq("slug", slug!)
        .eq("is_published", true)
        .single();
      return data;
    },
    enabled: !!slug,
  });

  const { data: sections = [], isLoading: sectionsLoading } = usePageContent(slug || "");

  if (pageLoading || sectionsLoading) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="w-6 h-6 border-2 border-primary border-t-transparent rounded-full animate-spin" />
        </div>
      </Layout>
    );
  }

  if (!page) return <NotFound />;

  return (
    <Layout>
      {sections.map((section) => (
        <SectionRenderer
          key={section.id}
          section={{
            section_type: section.section_type,
            section_key: section.section_key,
            content: section.content as Record<string, any>,
          }}
        />
      ))}
      {sections.length === 0 && (
        <div className="min-h-[50vh] flex items-center justify-center text-muted-foreground">
          <p>This page has no content yet.</p>
        </div>
      )}
    </Layout>
  );
};

export default DynamicPage;

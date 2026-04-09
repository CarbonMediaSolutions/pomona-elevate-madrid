import { usePageContent } from "./usePageContent";

export function useCmsSection(pageSlug: string, sectionKey: string): Record<string, any> | null {
  const { data: sections } = usePageContent(pageSlug);
  if (!sections) return null;
  const section = sections.find(s => s.section_key === sectionKey);
  return (section?.content as Record<string, any>) ?? null;
}

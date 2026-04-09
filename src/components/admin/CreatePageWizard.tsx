import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { toast } from "sonner";
import {
  ChevronUp,
  ChevronDown,
  Trash2,
  Sparkles,
  ArrowRight,
  ArrowLeft,
} from "lucide-react";
import { Progress } from "@/components/ui/progress";

interface Section {
  section_type: string;
  section_key: string;
  content: Record<string, any>;
}

const TYPE_LABELS: Record<string, string> = {
  hero: "Hero",
  "text-image": "Text + Image",
  "cards-grid": "Cards Grid",
  "cta-banner": "CTA Banner",
  testimonials: "Testimonials",
  gallery: "Gallery",
  embed: "Embed / iFrame",
};

export default function CreatePageWizard({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (v: boolean) => void;
}) {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [step, setStep] = useState(1);
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [description, setDescription] = useState("");
  const [sections, setSections] = useState<Section[]>([]);
  const [loading, setLoading] = useState(false);
  const [creating, setCreating] = useState(false);
  const [progress, setProgress] = useState(0);
  const [progressMessage, setProgressMessage] = useState("");
  const progressRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const { data: existingSlugs = [] } = useQuery({
    queryKey: ["all-page-slugs"],
    queryFn: async () => {
      const { data } = await supabase.from("pages").select("slug");
      return (data ?? []).map((p) => p.slug);
    },
  });

  const slugify = (s: string) =>
    s
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");

  const handleTitleChange = (v: string) => {
    setTitle(v);
    setSlug(slugify(v));
  };

  const slugValid = slug.length > 0 && !existingSlugs.includes(slug);

  const generateLayout = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke("ai-page-gen", {
        body: { description },
      });
      if (error) throw error;
      if (data?.error) throw new Error(data.error);
      setSections(data.sections ?? []);
      setStep(4);
    } catch (e: any) {
      toast.error(e.message || "Failed to generate layout");
    } finally {
      setLoading(false);
    }
  };

  const moveSection = (idx: number, dir: -1 | 1) => {
    const target = idx + dir;
    if (target < 0 || target >= sections.length) return;
    const copy = [...sections];
    [copy[idx], copy[target]] = [copy[target], copy[idx]];
    setSections(copy);
  };

  const removeSection = (idx: number) => {
    setSections((prev) => prev.filter((_, i) => i !== idx));
  };

  const createPage = async () => {
    setCreating(true);
    try {
      const { error: pageErr } = await supabase.from("pages").insert({
        title,
        slug,
        is_published: true,
      });
      if (pageErr) throw pageErr;

      if (sections.length > 0) {
        const rows = sections.map((s, i) => ({
          page_slug: slug,
          section_key: s.section_key,
          section_type: s.section_type,
          order_index: i,
          content: s.content,
        }));
        const { error: secErr } = await supabase.from("page_sections").insert(rows);
        if (secErr) throw secErr;
      }

      queryClient.invalidateQueries({ queryKey: ["admin-pages"] });
      queryClient.invalidateQueries({ queryKey: ["sidebar-pages"] });
      toast.success("Page created!");
      onOpenChange(false);
      resetState();
      navigate(`/admin/pages/${slug}`);
    } catch (e: any) {
      toast.error(e.message || "Failed to create page");
    } finally {
      setCreating(false);
    }
  };

  const resetState = () => {
    setStep(1);
    setTitle("");
    setSlug("");
    setDescription("");
    setSections([]);
  };

  const contentSummary = (s: Section) => {
    const c = s.content;
    return c.headline || c.heading || c.tag || (c.cards?.length ? `${c.cards.length} cards` : "") || "—";
  };

  return (
    <Dialog
      open={open}
      onOpenChange={(v) => {
        if (!v) resetState();
        onOpenChange(v);
      }}
    >
      <DialogContent className="max-w-lg bg-white text-gray-900 [&_input]:bg-white [&_input]:text-gray-900 [&_input]:border-gray-300 [&_textarea]:bg-white [&_textarea]:text-gray-900 [&_textarea]:border-gray-300 [&_input::placeholder]:text-gray-400 [&_textarea::placeholder]:text-gray-400">
        <DialogHeader>
          <DialogTitle>
            {step === 1 && "Create New Page"}
            {step === 2 && "Describe Your Page"}
            {step === 3 && "Generating Layout..."}
            {step === 4 && "Review Layout"}
            {step === 5 && "Creating Page..."}
          </DialogTitle>
          <DialogDescription>
            Step {Math.min(step, 4)} of 4
          </DialogDescription>
        </DialogHeader>

        {step === 1 && (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Page Title</label>
              <Input value={title} onChange={(e) => handleTitleChange(e.target.value)} placeholder="e.g. Yoga Program" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">URL Slug</label>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-500">/</span>
                <Input value={slug} onChange={(e) => setSlug(slugify(e.target.value))} />
              </div>
              {slug && !slugValid && (
                <p className="text-xs text-red-500 mt-1">This slug already exists</p>
              )}
            </div>
            <Button onClick={() => setStep(2)} disabled={!slugValid || !title.trim()} className="w-full">
              Next <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                Describe what this page should look like
              </label>
              <Textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="e.g. A page showcasing our new yoga program with a hero image, 3 benefit cards, member testimonials, and a CTA to book a class."
                rows={5}
              />
            </div>
            <div className="flex gap-2">
              <Button variant="outline" onClick={() => setStep(1)}>
                <ArrowLeft className="w-4 h-4 mr-1" /> Back
              </Button>
              <Button onClick={() => { setStep(3); generateLayout(); }} disabled={!description.trim()} className="flex-1">
                <Sparkles className="w-4 h-4 mr-1" /> Generate Layout
              </Button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="flex flex-col items-center py-8 gap-4">
            <Loader2 className="w-8 h-8 animate-spin text-gray-400" />
            <p className="text-sm text-gray-500">AI is designing your page layout...</p>
          </div>
        )}

        {step === 4 && (
          <div className="space-y-3 max-h-[50vh] overflow-y-auto">
            {sections.map((s, i) => (
              <div key={i} className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg border">
                <div className="flex flex-col gap-0.5">
                  <button onClick={() => moveSection(i, -1)} disabled={i === 0} className="text-gray-400 hover:text-gray-700 disabled:opacity-30">
                    <ChevronUp className="w-4 h-4" />
                  </button>
                  <button onClick={() => moveSection(i, 1)} disabled={i === sections.length - 1} className="text-gray-400 hover:text-gray-700 disabled:opacity-30">
                    <ChevronDown className="w-4 h-4" />
                  </button>
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-xs font-semibold uppercase text-gray-400 tracking-wider">
                    {TYPE_LABELS[s.section_type] || s.section_type}
                  </span>
                  <p className="text-sm text-gray-700 truncate">{contentSummary(s)}</p>
                </div>
                <button onClick={() => removeSection(i)} className="text-gray-400 hover:text-red-500">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))}
            {sections.length === 0 && (
              <p className="text-sm text-gray-500 text-center py-4">No sections. Go back and try a different description.</p>
            )}
            <div className="flex gap-2 pt-2">
              <Button variant="outline" onClick={() => setStep(2)}>
                <ArrowLeft className="w-4 h-4 mr-1" /> Back
              </Button>
              <Button onClick={createPage} disabled={creating || sections.length === 0} className="flex-1">
                {creating ? <Loader2 className="w-4 h-4 animate-spin mr-1" /> : null}
                Create Page
              </Button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}

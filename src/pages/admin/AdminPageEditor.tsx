import { useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import {
  ChevronUp,
  ChevronDown,
  Trash2,
  Plus,
  Save,
  GripVertical,
  Image as ImageIcon,
} from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const SECTION_TYPES = [
  { value: "hero", label: "Hero" },
  { value: "text-image", label: "Text + Image" },
  { value: "cards-grid", label: "Cards Grid" },
  { value: "cta-banner", label: "CTA Banner" },
  { value: "testimonials", label: "Testimonials" },
  { value: "gallery", label: "Gallery" },
  { value: "embed", label: "Embed / iFrame" },
];

const defaultContent: Record<string, Record<string, any>> = {
  hero: { image: "", tag: "", headline: "", body: "" },
  "text-image": { heading: "", body: "", image: "", imagePosition: "right" },
  "cards-grid": { heading: "", cards: [] },
  "cta-banner": { headline: "", body: "", cta1Text: "", cta1Link: "", cta2Text: "", cta2Link: "" },
  testimonials: { heading: "", items: [] },
  gallery: { heading: "", images: [] },
  embed: { heading: "", src: "", height: 600 },
};

const AdminPageEditor = () => {
  const { slug } = useParams<{ slug: string }>();
  const queryClient = useQueryClient();
  const [addType, setAddType] = useState("");

  const { data: page } = useQuery({
    queryKey: ["admin-page", slug],
    queryFn: async () => {
      const { data } = await supabase.from("pages").select("*").eq("slug", slug!).single();
      return data;
    },
    enabled: !!slug,
  });

  const { data: sections = [], isLoading } = useQuery({
    queryKey: ["admin-sections", slug],
    queryFn: async () => {
      const { data } = await supabase
        .from("page_sections")
        .select("*")
        .eq("page_slug", slug!)
        .order("order_index");
      return data ?? [];
    },
    enabled: !!slug,
  });

  const updateSection = useMutation({
    mutationFn: async ({ id, content }: { id: string; content: any }) => {
      const { error } = await supabase
        .from("page_sections")
        .update({ content })
        .eq("id", id);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin-sections", slug] });
      queryClient.invalidateQueries({ queryKey: ["page-sections", slug] });
      toast.success("Section saved");
    },
  });

  const deleteSection = useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase.from("page_sections").delete().eq("id", id);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin-sections", slug] });
      toast.success("Section deleted");
    },
  });

  const reorderSection = useMutation({
    mutationFn: async ({ id, newIndex }: { id: string; newIndex: number }) => {
      const { error } = await supabase
        .from("page_sections")
        .update({ order_index: newIndex })
        .eq("id", id);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin-sections", slug] });
    },
  });

  const addSection = useMutation({
    mutationFn: async (type: string) => {
      const maxOrder = sections.length > 0 ? Math.max(...sections.map((s) => s.order_index)) : -1;
      const { error } = await supabase.from("page_sections").insert({
        page_slug: slug!,
        section_key: `${type}-${Date.now()}`,
        section_type: type,
        order_index: maxOrder + 1,
        content: defaultContent[type] || {},
      });
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin-sections", slug] });
      setAddType("");
      toast.success("Section added");
    },
  });

  const handleMoveUp = (index: number) => {
    if (index <= 0) return;
    const current = sections[index];
    const above = sections[index - 1];
    reorderSection.mutate({ id: current.id, newIndex: above.order_index });
    reorderSection.mutate({ id: above.id, newIndex: current.order_index });
  };

  const handleMoveDown = (index: number) => {
    if (index >= sections.length - 1) return;
    const current = sections[index];
    const below = sections[index + 1];
    reorderSection.mutate({ id: current.id, newIndex: below.order_index });
    reorderSection.mutate({ id: below.id, newIndex: current.order_index });
  };

  const handleImageUpload = async (
    sectionId: string,
    content: Record<string, any>,
    field: string,
    file: File
  ) => {
    const path = `sections/${slug}/${Date.now()}-${file.name}`;
    const { error: uploadError } = await supabase.storage
      .from("media")
      .upload(path, file);
    if (uploadError) {
      toast.error("Upload failed: " + uploadError.message);
      return;
    }
    const { data: urlData } = supabase.storage.from("media").getPublicUrl(path);
    const newContent = { ...content, [field]: urlData.publicUrl };
    updateSection.mutate({ id: sectionId, content: newContent });
  };

  if (isLoading) {
    return <div className="text-gray-500">Loading...</div>;
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">{page?.title ?? slug}</h2>
          <p className="text-sm text-gray-500">/{slug === "home" ? "" : slug}</p>
        </div>
      </div>

      <div className="space-y-4">
        {sections.map((section, index) => {
          const content = (section.content ?? {}) as Record<string, any>;
          return (
            <div
              key={section.id}
              className="bg-white rounded-lg border border-gray-200 p-4"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <GripVertical className="w-4 h-4 text-gray-400" />
                  <span className="text-xs font-semibold uppercase text-gray-400 tracking-wider">
                    {section.section_type}
                  </span>
                  <span className="text-xs text-gray-300">#{index + 1}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => handleMoveUp(index)}
                    disabled={index === 0}
                  >
                    <ChevronUp className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => handleMoveDown(index)}
                    disabled={index === sections.length - 1}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </Button>
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <Trash2 className="w-4 h-4 text-red-500" />
                      </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>Delete section?</AlertDialogTitle>
                        <AlertDialogDescription>
                          This will permanently remove this section from the page.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction onClick={() => deleteSection.mutate(section.id)}>
                          Delete
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </div>
              </div>

              <SectionContentEditor
                sectionId={section.id}
                sectionType={section.section_type}
                content={content}
                onSave={(newContent) =>
                  updateSection.mutate({ id: section.id, content: newContent })
                }
                onImageUpload={(field, file) =>
                  handleImageUpload(section.id, content, field, file)
                }
              />
            </div>
          );
        })}
      </div>

      <div className="mt-6 bg-white rounded-lg border border-dashed border-gray-300 p-4 flex items-center gap-3">
        <Select value={addType} onValueChange={setAddType}>
          <SelectTrigger className="w-48">
            <SelectValue placeholder="Section type..." />
          </SelectTrigger>
          <SelectContent>
            {SECTION_TYPES.map((t) => (
              <SelectItem key={t.value} value={t.value}>
                {t.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Button
          onClick={() => addType && addSection.mutate(addType)}
          disabled={!addType || addSection.isPending}
        >
          <Plus className="w-4 h-4 mr-1" /> Add Section
        </Button>
      </div>
    </div>
  );
};

// --- Sub-component for editing section content ---

function SectionContentEditor({
  sectionId,
  sectionType,
  content,
  onSave,
  onImageUpload,
}: {
  sectionId: string;
  sectionType: string;
  content: Record<string, any>;
  onSave: (content: Record<string, any>) => void;
  onImageUpload: (field: string, file: File) => void;
}) {
  const [local, setLocal] = useState(content);
  const [dirty, setDirty] = useState(false);

  const set = (key: string, value: any) => {
    setLocal((prev) => ({ ...prev, [key]: value }));
    setDirty(true);
  };

  const renderTextField = (key: string, label: string, multiline = false) => (
    <div key={key}>
      <label className="block text-xs font-medium text-gray-500 mb-1">{label}</label>
      {multiline ? (
         <Textarea
          value={local[key] ?? ""}
          onChange={(e) => set(key, e.target.value)}
          className="bg-white text-gray-900 border-gray-300 placeholder:text-gray-400"
          rows={3}
        />
      ) : (
         <Input
          value={local[key] ?? ""}
          onChange={(e) => set(key, e.target.value)}
          className="bg-white text-gray-900 border-gray-300 placeholder:text-gray-400"
        />
      )}
    </div>
  );

  const renderImageField = (key: string, label: string) => (
    <div key={key}>
      <label className="block text-xs font-medium text-gray-500 mb-1">{label}</label>
      <div className="flex items-center gap-3">
        {local[key] && (
          <img src={local[key]} alt="" className="w-20 h-14 object-cover rounded border" />
        )}
        <label className="cursor-pointer inline-flex items-center gap-1 text-sm text-blue-600 hover:text-blue-700">
          <ImageIcon className="w-4 h-4" />
          Upload
          <input
            type="file"
            className="hidden"
            accept="image/*"
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) onImageUpload(key, file);
            }}
          />
        </label>
         <Input
          value={local[key] ?? ""}
          onChange={(e) => set(key, e.target.value)}
          placeholder="Or paste URL"
          className="bg-white text-gray-900 border-gray-300 placeholder:text-gray-400 flex-1"
        />
      </div>
    </div>
  );

  const fields: React.ReactNode[] = [];

  if (sectionType === "hero") {
    fields.push(renderImageField("image", "Background Image"));
    fields.push(renderTextField("tag", "Tag"));
    fields.push(renderTextField("headline", "Headline"));
    fields.push(renderTextField("body", "Body", true));
  } else if (sectionType === "text-image") {
    fields.push(renderTextField("heading", "Heading"));
    fields.push(renderTextField("body", "Body", true));
    fields.push(renderImageField("image", "Image"));
    fields.push(renderTextField("imagePosition", "Image Position (left/right)"));
  } else if (sectionType === "cta-banner") {
    fields.push(renderTextField("headline", "Headline"));
    fields.push(renderTextField("body", "Body", true));
    fields.push(renderTextField("cta1Text", "Button 1 Text"));
    fields.push(renderTextField("cta1Link", "Button 1 Link"));
    fields.push(renderTextField("cta2Text", "Button 2 Text"));
    fields.push(renderTextField("cta2Link", "Button 2 Link"));
  } else if (sectionType === "embed") {
    fields.push(renderTextField("heading", "Heading"));
    fields.push(renderTextField("src", "iFrame Source URL"));
    fields.push(renderTextField("height", "Height (px)"));
  } else {
    // Generic JSON editor for cards-grid, testimonials, gallery, etc.
    fields.push(
      <div key="json">
        <label className="block text-xs font-medium text-gray-500 mb-1">
          Content (JSON)
        </label>
         <Textarea
          value={JSON.stringify(local, null, 2)}
          onChange={(e) => {
            try {
              const parsed = JSON.parse(e.target.value);
              setLocal(parsed);
              setDirty(true);
            } catch {
              // invalid JSON, don't update
            }
          }}
          className="bg-white text-gray-900 border-gray-300 font-mono text-xs"
          rows={10}
        />
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {fields}
      {dirty && (
        <Button size="sm" onClick={() => { onSave(local); setDirty(false); }}>
          <Save className="w-4 h-4 mr-1" /> Save Changes
        </Button>
      )}
    </div>
  );
}

export default AdminPageEditor;

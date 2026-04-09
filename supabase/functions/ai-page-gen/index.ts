import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  try {
    const { description } = await req.json();
    if (!description || typeof description !== "string") {
      return new Response(JSON.stringify({ error: "description is required" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) throw new Error("LOVABLE_API_KEY is not configured");

    const systemPrompt = `You are a page layout generator for Pomona Club, a premium luxury fitness club in Madrid. 
The brand voice is refined, warm, and aspirational. Use elegant language.

Available section types and their content schemas:
1. "hero" — { image: "", tag: "short tag", headline: "Main headline", body: "Supporting text" }
2. "text-image" — { heading: "Section heading", body: "Paragraph text", image: "", imagePosition: "right" or "left" }
3. "cards-grid" — { heading: "Section heading", cards: [{ title: "Card title", body: "Card description", image: "" }] } (2-4 cards)
4. "cta-banner" — { headline: "CTA headline", body: "Supporting text", cta1Text: "Primary button", cta1Link: "/link", cta2Text: "Secondary button", cta2Link: "/link" }
5. "testimonials" — { heading: "Section heading", items: [{ quote: "Testimonial text", author: "Name", role: "Title" }] } (2-3 items)
6. "gallery" — { heading: "Section heading", images: [{ url: "", alt: "Description" }] } (4-6 items)
7. "embed" — { heading: "Section heading", src: "https://example.com", height: 600 }

Generate content that fits the Pomona Club brand. Leave image URLs empty (admin will upload). 
Generate realistic, high-quality Spanish/English text that sounds like premium fitness marketing.`;

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-3-flash-preview",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: `Create a page layout for: ${description}` },
        ],
        tools: [
          {
            type: "function",
            function: {
              name: "generate_page_layout",
              description: "Generate an ordered list of page sections for a new CMS page",
              parameters: {
                type: "object",
                properties: {
                  sections: {
                    type: "array",
                    items: {
                      type: "object",
                      properties: {
                        section_type: {
                          type: "string",
                          enum: ["hero", "text-image", "cards-grid", "cta-banner", "testimonials", "gallery", "embed"],
                        },
                        section_key: { type: "string", description: "Unique key like hero-main, cards-benefits" },
                        content: { type: "object", description: "Content matching the section type schema" },
                      },
                      required: ["section_type", "section_key", "content"],
                    },
                  },
                },
                required: ["sections"],
              },
            },
          },
        ],
        tool_choice: { type: "function", function: { name: "generate_page_layout" } },
      }),
    });

    if (!response.ok) {
      const status = response.status;
      if (status === 429) {
        return new Response(JSON.stringify({ error: "Rate limited. Please try again in a moment." }), {
          status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      if (status === 402) {
        return new Response(JSON.stringify({ error: "AI credits exhausted. Please add funds." }), {
          status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      const t = await response.text();
      console.error("AI gateway error:", status, t);
      throw new Error(`AI gateway error: ${status}`);
    }

    const data = await response.json();
    const toolCall = data.choices?.[0]?.message?.tool_calls?.[0];
    if (!toolCall) throw new Error("No tool call in AI response");

    const args = JSON.parse(toolCall.function.arguments);

    return new Response(JSON.stringify({ sections: args.sections }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (e) {
    console.error("ai-page-gen error:", e);
    return new Response(JSON.stringify({ error: e instanceof Error ? e.message : "Unknown error" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});

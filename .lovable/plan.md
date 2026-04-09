

# Phase 3: AI-Assisted Page Creator + Dynamic Page Renderer

## Overview

Add a multi-step "Create New Page" wizard to the admin panel that uses Lovable AI to suggest page layouts from a plain-language description. Created pages render on the frontend using the site's existing design system (dark premium theme, Playfair Display headings, terracotta/brass accents, motion animations). The client can iterate on content after creation via the existing page editor.

---

## Architecture

```text
Admin Dashboard                    Edge Function                 Frontend
┌─────────────┐    description    ┌──────────────┐
│ Create Page  │ ──────────────▶  │ ai-page-gen  │
│   Wizard     │ ◀────────────── │ (Lovable AI)  │
│ (5 steps)    │  suggested       └──────────────┘
└──────┬───────┘  sections
       │ confirm
       ▼
  Insert into                     ┌──────────────┐
  pages +                         │ DynamicPage   │
  page_sections                   │ renders from  │
  tables                          │ page_sections │
                                  └──────────────┘
```

---

## Steps

### 1. Create edge function `supabase/functions/ai-page-gen/index.ts`

Receives a page description string, calls Lovable AI (Gemini) with a system prompt that knows the available section types (hero, text-image, cards-grid, cta-banner, testimonials, gallery, embed) and the site's brand voice. Uses tool calling to return structured JSON: an ordered array of sections, each with `section_type`, `section_key`, and pre-filled `content` JSONB matching the existing `defaultContent` shapes from the page editor. The AI generates real placeholder text that fits the Pomona Club luxury fitness brand.

### 2. Create `src/components/admin/CreatePageWizard.tsx`

A Dialog-based multi-step component:

- **Step 1 — Name & Slug**: Input for page title + auto-generated slug (editable). Validates slug uniqueness against existing pages.
- **Step 2 — Describe**: Textarea where admin describes the page in plain language (e.g. "A page showcasing our new yoga program with a hero image, 3 benefit cards, testimonials, and a CTA to book").
- **Step 3 — AI Generates**: Loading state while calling the edge function. Shows the suggested layout as an ordered list of section cards.
- **Step 4 — Review & Adjust**: Admin can reorder sections (drag or up/down arrows), remove unwanted sections, or add more from the standard types. Each section shows its type label and a summary of the AI-generated content.
- **Step 5 — Create**: Inserts the page into `pages` table and all sections into `page_sections`. Navigates to `/admin/pages/{slug}` for immediate editing/iteration.

### 3. Add "Create New Page" button to `AdminDashboard.tsx`

A prominent button at the top of the dashboard that opens the wizard dialog.

### 4. Make `AdminSidebar.tsx` dynamic

Replace the hardcoded `pages` array with a query to the `pages` table. This way new pages appear in the sidebar immediately after creation.

### 5. Create `src/pages/DynamicPage.tsx`

A generic page renderer that:
- Takes a `slug` from the URL params
- Fetches page data and sections via `usePageContent(slug)`
- Renders each section using the site's existing components: `PageHero`, `Section`, plus new lightweight renderers for each `section_type` (text-image, cards-grid, cta-banner, testimonials, gallery, embed)
- Uses the same Pomona design tokens: `card-premium`, `pill-tag`, `text-editorial-xl`, `font-serif`, motion animations
- Falls back to a 404 if the page doesn't exist or isn't published

### 6. Add catch-all route in `App.tsx`

Add a route `/:slug` before the `*` NotFound route that renders `DynamicPage`. This handles any CMS-created page. The 9 existing hardcoded routes take priority since they're listed first.

### 7. Create `src/components/dynamic/SectionRenderer.tsx`

Maps each `section_type` to a themed component:
- **hero** → `PageHero` (existing)
- **text-image** → Split layout with image + text, using `Section` wrapper
- **cards-grid** → Grid of `card-premium` styled cards
- **cta-banner** → Full-width banner with buttons using existing `Button` variants
- **testimonials** → Styled quote cards
- **gallery** → Image grid with lightbox
- **embed** → iframe in a `card-premium` container (same pattern as Schedule page)

All renderers use the site's existing CSS classes and design system so new pages look native.

---

## Files

| Action | File |
|--------|------|
| Create | `supabase/functions/ai-page-gen/index.ts` |
| Create | `src/components/admin/CreatePageWizard.tsx` |
| Create | `src/pages/DynamicPage.tsx` |
| Create | `src/components/dynamic/SectionRenderer.tsx` |
| Edit | `src/pages/admin/AdminDashboard.tsx` — add Create Page button |
| Edit | `src/components/admin/AdminSidebar.tsx` — fetch pages dynamically |
| Edit | `src/App.tsx` — add `/:slug` route |

---

## Iteration Support

After page creation, the admin lands on the standard page editor (`/admin/pages/{slug}`) where they can edit any section's content, reorder, add/remove sections, and upload images — the same workflow as for existing pages. This is already built and functional.


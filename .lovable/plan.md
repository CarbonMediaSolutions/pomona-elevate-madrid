

# Fix AI Page Creator — Readability Issues

## Issues Found

1. **Admin page editor inputs** — All input/textarea fields on `/admin/pages/{slug}` inherit the site's dark theme (`bg-background` = near-black). The AI-generated text is dark on dark, invisible.
2. **Frontend dynamic sections** — The `SectionRenderer` components for cards-grid, testimonials, and CTA banner render content that's barely visible because text blends into the dark background.

## Fixes

### 1. Admin Page Editor — `src/pages/admin/AdminPageEditor.tsx`
Add explicit light-theme overrides to all input, textarea, and select elements in the editor. Apply `bg-white text-gray-900 border-gray-300` classes to the editor container or individual form fields, same pattern used in the CreatePageWizard fix.

### 2. Frontend Section Renderers — `src/components/dynamic/SectionRenderer.tsx`
Review each section renderer (cards-grid, testimonials, cta-banner, text-image, gallery) and ensure:
- Cards use `card-premium` class with proper text colors (`text-foreground`)
- Testimonial quotes have visible text (cream/white on dark)
- CTA banner text and buttons are visible
- Headings use `text-editorial-lg` or similar with proper contrast

### Files Changed
- `src/pages/admin/AdminPageEditor.tsx` — add light-theme input styling
- `src/components/dynamic/SectionRenderer.tsx` — fix text visibility in all section types


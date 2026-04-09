

# Phase 1: Core CMS — Supabase Setup, Admin Auth, Content Editor, Media Library

This plan covers the foundation needed to give the client content management independence. Phase 2 (AI page builder, navigation management) will follow once this is stable.

---

## Prerequisites

**Lovable Cloud must be enabled first.** The project currently has no Supabase connection. Before any implementation can begin, you need to enable Lovable Cloud from the Cloud tab in Lovable. This will provision the database, auth, and storage.

---

## What Phase 1 Includes

### 1. Database Schema (4 tables + storage bucket)

**Tables:**
- `pages` — id, slug (unique), title, meta_description, is_published, created_at
- `page_sections` — id, page_slug, section_key, section_type, order_index, content (JSONB), updated_at
- `media_library` — id, filename, storage_url, alt_text, created_at
- `site_settings` — id, key (unique), value

**User roles table** (required for admin access control):
- `user_roles` — id, user_id (FK to auth.users), role (enum: admin, user)
- Security-definer `has_role()` function to prevent RLS recursion

**RLS policies:**
- Public SELECT on pages/page_sections/site_settings (for frontend reads)
- Admin-only INSERT/UPDATE/DELETE via `has_role()` check
- Media library: admin-only full access

**Storage bucket:** `media` (public) for image uploads

**Seed data:** All current hardcoded content from 9 pages (Index, About, Classes, Wellness, HealthyBar, Memberships, Schedule, Journal, Contact) inserted as page_sections rows with JSONB content matching each component's data structure.

### 2. Admin Authentication

- `/admin/login` — email + password login page (clean white UI, separate from Pomona brand)
- `/admin` and all `/admin/*` routes protected — redirect to login if not authenticated
- Admin role check against `user_roles` table
- Logout button in admin header
- The first admin user will need to be created manually via Supabase Auth dashboard

### 3. Admin Dashboard (`/admin`)

- Clean white sidebar layout with:
  - Page list (Home, About, Classes, Wellness, Healthy Bar, Memberships, Schedule, Journal, Contact)
  - Media Library link
  - Site Settings link
- Each page links to its section editor

### 4. Page Section Editor (`/admin/pages/:slug`)

For the selected page, display all its sections from `page_sections` in order:
- **Inline text editing** — click any text field to edit, with a Save button
- **Image replacement** — click an image field to upload a new one via Supabase Storage
- **Add section** — choose from preset types (Hero, Text+Image, Cards Grid, CTA Banner, Testimonials, Gallery, Embed)
- **Reorder sections** — move up/down buttons (drag-and-drop deferred to Phase 2)
- **Delete section** — with confirmation dialog
- **Publish Changes** button — saves all edits to Supabase

Each section type has a defined JSONB schema:
- Hero: `{ image, tag, headline, body }`
- Text+Image: `{ heading, body, image, imagePosition }`
- Cards Grid: `{ heading, cards: [{ title, desc, image, link }] }`
- CTA Banner: `{ headline, body, cta1Text, cta1Link, cta2Text, cta2Link }`
- etc.

### 5. Media Library (`/admin/media`)

- Grid view of all uploaded images
- Upload new images (drag-and-drop + file picker)
- Copy URL to clipboard
- Delete with confirmation
- Alt text editing

### 6. Frontend Changes

Update all page components to:
1. Fetch content from `page_sections` via React Query
2. Fall back to current hardcoded defaults if no data found
3. Show loading skeleton while fetching

This means each page component gets a custom hook like `usePageContent("home")` that returns sections, and the component renders from that data with i18n fallbacks.

### 7. Site Settings (`/admin/settings`)

Editable fields for:
- WhatsApp number (used by WhatsAppButton component)
- Social media links (Instagram, TikTok, email)
- Contact details (address, phone, hours)

---

## File Structure (estimated ~25-30 new files)

```text
supabase/
  migrations/
    001_create_cms_tables.sql
    002_seed_content.sql
    003_create_storage_bucket.sql

src/
  integrations/supabase/
    client.ts
    types.ts
  hooks/
    usePageContent.ts
    useAdminAuth.ts
    useSiteSettings.ts
  pages/admin/
    AdminLogin.tsx
    AdminDashboard.tsx
    AdminPageEditor.tsx
    AdminMedia.tsx
    AdminSettings.tsx
  components/admin/
    AdminLayout.tsx
    AdminSidebar.tsx
    SectionEditor.tsx
    SectionTypeSelector.tsx
    ImageUploader.tsx
    InlineTextEditor.tsx
```

---

## What Phase 1 Does NOT Include

- AI-assisted page creator (Phase 2)
- Navigation management (Phase 2)
- "Create New Page" with dynamic routing (Phase 2)
- Drag-and-drop section reordering (uses up/down arrows instead)

---

## Technical Notes

- Admin panel uses a completely separate layout (white, clean) — no Pomona brand styling
- All admin routes are lazy-loaded
- Supabase client created via Lovable Cloud auto-generated integration
- React Query for all data fetching (already installed)
- No new dependencies needed beyond what Lovable Cloud provides (`@supabase/supabase-js`)
- Content JSONB structure is flexible — each section_type defines its own shape
- i18n content (en.json/es.json) remains as the fallback; Supabase content takes priority when available


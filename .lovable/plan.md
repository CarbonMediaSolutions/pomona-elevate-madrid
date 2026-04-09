

# Phase 2: Connect Frontend Pages to CMS

## Current State
- `page_sections` table exists but is **empty** — no seed data
- `usePageContent` and `useSiteSettings` hooks exist and work
- All 9 pages use i18n translations (`useTranslation`) for content
- Admin page editor is functional for CRUD on sections

## Approach

A **helper pattern** where each page calls `usePageContent(slug)` and a utility function extracts a section by key, falling back to i18n defaults.

### 1. Seed Migration — Insert all current content into `page_sections`

One migration inserts ~40-50 rows covering every section of every page. Each row's `content` JSONB mirrors what the component currently renders. Example for home page:

- `home / hero` → `{ headline, subtitle, cta1, cta2, tags }`
- `home / brand-positioning` → `{ tag, headline, body, pillars: [...] }`
- `home / experience-pillars` → `{ tag, headline, pillars: [...] }`
- `home / signature-experiences` → `{ tag, headline, body, experiences: [...] }`
- `home / social-proof` → `{ tag, headline, stats, testimonials }`
- `home / membership-teaser` → `{ tag, headline, body, plans: [...] }`
- `home / healthy-bar-preview` → `{ tag, headline, body, body2, tags }`
- `home / location` → `{ tag, headline, body, address, hours, metro }`
- `home / final-cta` → `{ headline, body, cta1Text, cta1Link, cta2Text, cta2Link }`

Similarly for about, classes, wellness, healthy-bar, memberships, schedule, journal, contact — each with their respective sections.

### 2. Create `useSectionContent` helper

```ts
// src/hooks/useSectionContent.ts
function useSectionContent(sections, sectionKey) {
  return sections?.find(s => s.section_key === sectionKey)?.content ?? null;
}
```

### 3. Update each page component

Each page gets `usePageContent("slug")` at the top level, then passes CMS content to child components (or uses it inline). Pattern per component:

```tsx
const { data: sections } = usePageContent("home");
const cmsHero = sections?.find(s => s.section_key === "hero")?.content;

// In render, use CMS values with i18n fallback:
const headline = cmsHero?.headline || t("hero.headline");
```

**Pages to update (9 pages, ~15 components):**

| Page | Components affected |
|---|---|
| Index | Hero, BrandPositioning, ExperiencePillars, SignatureExperiences, SocialProof, MembershipTeaser, HealthyBarPreview, LocationSection, FinalCTA |
| About | Inline content (values, CTAs) |
| Classes | Inline class data |
| Wellness | Inline service data |
| HealthyBar | Inline menu data |
| Memberships | Inline plan/FAQ data |
| Schedule | PageHero + CTA text |
| Journal | Article listing |
| Contact | Contact info + form labels |

For each: the component receives an optional `cms` prop or calls `usePageContent` directly. CMS values override i18n when present.

### 4. Site settings integration

Update `WhatsAppButton`, `Footer`, and `Contact` page to read from `useSiteSettings()` for WhatsApp number, social links, address, hours — falling back to current hardcoded values.

### 5. Files changed

- **1 new migration** — seed ~45 rows into `page_sections` + ~8 rows into `site_settings`
- **1 new file** — `src/hooks/useSectionContent.ts`
- **~18 component files updated** — each page + home sub-components get CMS data wiring
- **2-3 layout files** — Footer, WhatsAppButton for site settings

No visual changes — the site looks identical. CMS edits in `/admin` now flow to the live site.


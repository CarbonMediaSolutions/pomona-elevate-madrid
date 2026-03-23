

# Phase 1 Updates — Based on Client Feedback

From Ana Lucia's email, two key structural changes are needed:

## What needs to change

### 1. Remove Trainers entirely
The client explicitly said: *"We don't need a trainers section on the website, as we have different external trainers from Madrid."*

**Files to update:**
- **`src/App.tsx`** — Remove `/trainers` route and lazy import
- **`src/pages/Index.tsx`** — Remove `<TrainersPreview />` from homepage
- **`src/components/layout/Header.tsx`** — Remove "Trainers" from the "The Club" dropdown nav (line 29)
- **`src/components/layout/Footer.tsx`** — Remove "Our Trainers" link (line 70)
- **`src/i18n/en.json`** and **`src/i18n/es.json`** — Remove or leave trainer-related keys (no harm leaving them, but cleaner to remove)
- Files that can be deleted: `src/pages/Trainers.tsx`, `src/components/home/TrainersPreview.tsx`
- Assets to remove: `trainer-1.jpg`, `trainer-2.jpg`, `trainer-3.jpg`

### 2. Wellness & Healthy Bar are already in Phase 1 ✅
Recovery (`/recovery`) and Healthy Bar (`/healthy-bar`) pages are already fully built and integrated into the homepage, navigation, and footer. **No changes needed here** — they're already prioritized.

---

## Summary

The only real work is **removing all Trainers references** from the site. The Wellness and Healthy Bar sections are already complete and prominent. Everything else in Phase 1 (Home, Classes, Memberships, Contact/Visit, mobile optimization, SEO foundations) is already built.

**Scope:** ~6 files edited, 2 files deleted, 3 asset files removed.


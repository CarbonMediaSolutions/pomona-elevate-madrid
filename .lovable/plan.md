

# Pomona Club — Premium Elevation Plan

After a thorough review of every page and component, here are the key areas to elevate this from a strong site to a truly world-class luxury fitness brand website.

---

## 1. Hero Section — More Cinematic Impact

**Current issues:** No scroll-down indicator, no ken-burns or subtle zoom on the video, content appears all at once.

**Improvements:**
- Add a subtle animated scroll indicator (chevron or thin line) at the bottom of the hero
- Stagger the headline, subtitle, CTAs, and trust tags with sequential fade-in delays
- Add a very subtle vignette/darkening at the edges for more cinematic depth
- Increase the gradient overlay strength slightly so text always reads perfectly

## 2. Testimonials — Auto-Rotating Carousel with Transitions

**Current issues:** Static testimonial card with manual dot navigation, no auto-play, no transition animation between quotes. Testimonials are hardcoded in English only.

**Improvements:**
- Add auto-rotation (5-second interval) with smooth crossfade between testimonials
- Move testimonial content to i18n files for Spanish translation
- Add subtle slide/fade transition when switching quotes

## 3. Social Proof Stats — Animated Counters

**Current issues:** Stats are static text, no animation when they scroll into view.

**Improvements:**
- Add animated count-up effect when the stats section enters the viewport (e.g. "0 → 2,500+" over ~1.5s)
- Use framer-motion `useInView` to trigger

## 4. Inner Page Heroes — Cinematic Headers

**Current issues:** All inner pages (Classes, Recovery, About, etc.) start with plain text on a dark background — no hero image, no atmosphere. This feels flat compared to the homepage.

**Improvements:**
- Add cinematic hero banners to each inner page using existing imagery with gradient overlays
- Match the editorial mood of the homepage hero

## 5. Membership Cards — More Premium Feel

**Current issues:** Cards are functional but lack visual luxury. The featured card only has a subtle ring.

**Improvements:**
- Add a subtle gradient border or glow effect on the featured "Club Plus" card
- Add a "Best Value" or "Most Popular" badge with an accent gradient background instead of just a pill tag
- Add hover micro-animation (subtle scale + shadow lift)

## 6. Smooth Page Transitions

**Current issues:** No transition between pages — feels abrupt when navigating.

**Improvements:**
- Wrap route content in `framer-motion` `AnimatePresence` with a subtle fade transition (opacity 0→1, ~300ms)

## 7. Footer — Add Social Links & Polish

**Current issues:** Only Instagram and email. Missing key social platforms.

**Improvements:**
- Add Twitter/X, LinkedIn, and TikTok icons
- Add a newsletter signup input in the footer ("Stay in the loop")

## 8. Mobile Bottom CTA — Visual Polish

**Current issues:** The floating mobile CTA bar works but feels basic.

**Improvements:**
- Add subtle top shadow/blur for depth
- Slightly larger padding and a more premium button styling

## 9. Hardcoded English Content

**Current issues:** Several components still have English-only hardcoded strings:
- `SocialProof.tsx` — testimonials array (names, roles, quotes)
- `Memberships.tsx` — FAQ questions/answers, plan descriptions, ideal user text
- `Classes.tsx` — all class descriptions, benefits, coaches, tags
- `Recovery.tsx` — service names, descriptions, benefits, durations
- `HealthyBar.tsx` — menu category names and all item descriptions
- `Trainers.tsx` — all trainer data (roles, expertise, certifications, philosophy, quotes)
- `Contact.tsx` — FAQ questions/answers
- `Schedule.tsx` — class names and coach names in schedule data

**Improvement:** Move all hardcoded content to the i18n JSON files so the entire site translates properly.

## 10. Missing Visual Details

- **Dividers between homepage sections:** Add subtle gradient dividers between major sections for visual breathing room
- **Back-to-top button:** Add a subtle floating back-to-top button that appears after scrolling
- **Cursor effects:** Consider a custom cursor on desktop for premium feel (optional, if performance allows)

---

## Priority Order for Implementation

1. **i18n completeness** — Move all hardcoded English to translation files (biggest functional gap)
2. **Inner page hero banners** — Biggest visual impact upgrade
3. **Testimonial auto-rotation + transitions**
4. **Animated stat counters**
5. **Page transitions (AnimatePresence fade)**
6. **Hero scroll indicator + staggered animations**
7. **Membership card premium polish**
8. **Footer newsletter + social links**
9. **Mobile CTA polish**
10. **Back-to-top button**

---

## Technical Approach

- All animation work uses existing `framer-motion` dependency
- i18n work involves updating `en.json` and `es.json` with new keys, then replacing hardcoded strings with `t()` calls
- Inner page heroes reuse existing image assets with gradient overlays
- No new dependencies needed
- All changes are purely additive — no breaking changes to existing structure


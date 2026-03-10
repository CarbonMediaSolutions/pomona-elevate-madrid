

# Pomona Club Madrid — Website Build Scope Document

## Project Overview

A premium, multi-page website for Pomona Club, a luxury boutique fitness and wellness club in Madrid. The site positions the brand at the intersection of elite performance training, high-end hospitality, and wellness lifestyle — comparable to Soho House x Equinox x a modern Madrid wellness destination.

---

## Technology Stack

- **Framework:** React 18 + TypeScript + Vite
- **Styling:** Tailwind CSS with custom design tokens (CSS variables)
- **Animation:** Framer Motion (scroll reveals, page transitions, animated counters, carousel crossfades)
- **Routing:** React Router v6 with lazy-loaded pages and scroll restoration
- **Internationalization:** react-i18next with full English/Spanish support
- **Typography:** Playfair Display (editorial serif headlines) + DM Sans (clean UI/body)

---

## Design System

A fully tokenized, reusable design system including:

- **Color palette:** Warm dark neutrals (charcoal, espresso, deep olive), terracotta primary, brushed brass accent, wellness green
- **Typography classes:** `.text-editorial-xl`, `.text-editorial-lg`, `.text-editorial-md`, `.text-body-lg`, `.text-body`
- **Component primitives:** `.card-premium` (gradient background, hover glow/lift), `.pill-tag` (uppercase tracking labels), `.divider-elegant` (accent gradient line), `.section-container` / `.section-padding`
- **Shadow system:** `--shadow-sm`, `--shadow-md`, `--shadow-lg`, `--shadow-glow`
- **Gradient system:** `--gradient-hero`, `--gradient-card`, `--gradient-accent`
- **Button variants:** `hero` (gradient accent fill), `hero-outline` (ghost with border)

---

## Pages Built (11 total)

### 1. Homepage
10 distinct sections in sequence:
- **Hero:** Full-screen looping video background with staggered text animations, dual CTAs ("Book your first session" / "Explore memberships"), trust tags, and animated scroll indicator
- **Brand Positioning:** "More than a gym. A daily ritual." — 4 icon pillars (Train, Recover, Refuel, Connect) in premium cards
- **Experience Pillars:** 4 large image cards with hover zoom, overlay tags, and editorial descriptions linking to inner pages
- **Signature Experiences:** 8-item grid (3:4 aspect ratio cards) covering HIIT, HYROX, Pilates, Running Club, Open Gym, Recovery Suite, Nutrition, Healthy Bar
- **Social Proof:** Animated count-up stats (2,500+ members, 40+ weekly classes, 12 expert coaches, 4.9 rating) + auto-rotating testimonial carousel with crossfade transitions
- **Membership Teaser:** 3-tier pricing cards (Essentials €89, Club Plus €139, Signature €199) with "Most Popular" gradient badge
- **Healthy Bar Preview:** Split layout — editorial image + menu tag pills + CTA
- **Trainers Preview:** 3 coach cards with 3:4 portrait images, name, role, specialty
- **Location Section:** Address, hours, transport details + embedded Google Map (desaturated/moody filter)
- **Final CTA:** Emotional close — "Join the club that changes how fitness feels"

### 2. Memberships
- Cinematic hero banner with gradient overlay
- 3-tier pricing cards with feature checklists, ideal user descriptions, and strong CTAs
- Trial session promotion section
- FAQ accordion (membership-specific questions)

### 3. Classes
- Cinematic hero banner
- Category filter pills (All, Performance, Mind & Body, Endurance, Recovery)
- 7 class type cards in editorial layout: HIIT, Strength, HYROX, Pilates, Hot Pilates, Running Club, Mobility & Recovery
- Each card includes: image with overlay tags, description, intensity, duration, coach, and Book/Schedule CTAs

### 4. Recovery & Wellness
- Cinematic hero banner
- 5 service cards: Infrared Sauna, Traditional Sauna, Physiotherapy, Mobility & Restoration, Nutrition Guidance
- Each with benefit summary, duration, and booking CTA
- Bottom CTA section for memberships and booking

### 5. Healthy Bar
- Cinematic hero banner
- 3 menu category sections (Smoothies & Juices, Coffee & Drinks, Bowls & Bites)
- Each item displayed as a premium card with name, description, and functional tag (e.g., "Post-workout", "High protein", "Anti-inflammatory")
- CTA to plan a visit

### 6. About
- Cinematic hero banner
- Long-form editorial narrative: Why Pomona exists, what makes it different, design philosophy of the space
- Brand values grid (4 cards): Intentional Movement, Holistic Recovery, Nourished Living, Genuine Connection
- CTA section for trial booking and visit planning

### 7. Trainers
- Cinematic hero banner
- Discipline filter pills (All, Performance, Mind & Body, Endurance)
- 3 detailed trainer profiles: Marco Delgado, Laura Vega, Andrés Ruiz
- Each includes: portrait, role, signature quote, coaching philosophy, expertise, certifications, classes taught, "Book with..." CTA

### 8. Schedule / Book
- Cinematic hero banner
- Trial session promotion card
- Day-of-week filter (Monday through Sunday)
- Time-slot schedule cards showing: class name, coach, duration, remaining spots
- Waitlist support for full sessions
- Membership upsell CTA at bottom

### 9. Journal (Editorial Blog)
- Cinematic hero banner
- 6 article cards in responsive grid (1/2/3 columns)
- Each card: hero image, category tag, title, preview text, read time
- Categories: Training, Recovery, Nutrition, Lifestyle, HYROX, Culture

### 10. Journal Article (Dynamic)
- Dynamic route `/journal/:slug` — 6 fully written articles
- Cinematic article hero with gradient overlay
- Full long-form editorial content with multiple sections per article
- Back-to-journal navigation
- Bottom CTA to book a session
- Articles written in both English and Spanish

### 11. Contact / Visit
- Cinematic hero banner
- Split layout: contact details + contact form
- Details: address, hours, phone/WhatsApp, email, transport/parking
- Embedded Google Map (moody filter)
- Contact form: name, email, interest dropdown, message, submit
- "First visit" info card (what to bring, what to expect)
- FAQ accordion (general questions)

---

## Global UX Features

- **Sticky header:** Transparent on hero, solid with backdrop blur on scroll
- **Dropdown navigation:** "Experience" (Classes, Recovery, Healthy Bar) and "The Club" (Memberships, Trainers, About) groupings
- **Mobile navigation drawer:** Full-screen overlay with staggered entrance animations
- **Floating mobile CTA:** Persistent bottom bar with "Book Your Session" button
- **Back-to-top button:** Appears after 600px scroll, smooth scroll to top
- **Scroll-to-top on navigation:** Automatic scroll reset on every route change
- **Page fade transitions:** Framer Motion opacity transition on layout mount
- **Lazy-loaded routes:** All inner pages use `React.lazy` with a branded spinner fallback
- **Language toggle:** Globe icon in header switches entire site between English and Spanish

---

## Internationalization

Full bilingual support (English / Spanish) via `react-i18next`:
- All UI labels, navigation, buttons, and CTAs
- All homepage section copy
- Membership plan names, descriptions, and features
- Testimonials and social proof
- FAQ questions and answers
- Page hero headlines and body text
- Journal article titles, intros, categories, and read times
- 6 full-length journal articles (5+ sections each) in both languages
- Footer content, newsletter label, legal links
- Form labels and placeholders

---

## Content Delivered

- **Homepage copy:** 10 sections of premium brand copy
- **Membership copy:** 3 plan descriptions with feature lists, trial promotion, and 6 FAQs
- **Class descriptions:** 7 detailed class write-ups with intensity, benefits, and coaching info
- **Recovery services:** 5 service descriptions with benefits and durations
- **Healthy bar menu:** 12 items across 3 categories with functional tags
- **About page:** Full brand narrative across 4 editorial sections + 4 value statements
- **Trainer profiles:** 3 complete bios with philosophy, credentials, and quotes
- **Journal articles:** 6 long-form pieces (each 5-6 sections)
- **Contact FAQs:** 6 Q&A pairs
- **All copy duplicated in Spanish**

---

## Component Library (Reusable)

| Component | Purpose |
|---|---|
| `Layout` | Page wrapper with Header, Footer, BackToTop |
| `Header` | Sticky nav with dropdowns, mobile drawer, language toggle |
| `Footer` | 4-column footer with newsletter, social links, site nav |
| `PageHero` | Cinematic hero banner for inner pages |
| `Hero` | Full-screen video hero for homepage |
| `Section` | Scroll-reveal animated section wrapper |
| `BackToTop` | Floating scroll-to-top button |
| `ScrollToTop` | Route-change scroll restoration |
| `BrandPositioning` | 4-pillar icon grid |
| `ExperiencePillars` | 4 image cards with hover effects |
| `SignatureExperiences` | 8-item visual grid |
| `SocialProof` | Animated counters + auto-rotating testimonial carousel |
| `MembershipTeaser` | 3-tier pricing cards |
| `HealthyBarPreview` | Split editorial layout |
| `TrainersPreview` | 3-card coach grid |
| `LocationSection` | Map + contact details |
| `FinalCTA` | Emotional closing section |
| `Button` | Custom variants: `hero`, `hero-outline` with sizes `sm`–`xl` |
| `Accordion` | FAQ component |
| Pill filter system | Reusable category filter buttons |

---

## Visual Assets

10 curated images used across the site:
- `hero-gym.jpg` — Moody gym interior
- `hiit-training.jpg` — High-intensity training scene
- `pilates-studio.jpg` — Pilates/movement studio
- `recovery-room.jpg` — Recovery/sauna atmosphere
- `running-club.jpg` — Outdoor running in Madrid
- `open-gym.jpg` — Strength/open gym floor
- `healthy-bar.jpg` — Café/bar lifestyle moment
- `trainer-1.jpg`, `trainer-2.jpg`, `trainer-3.jpg` — Coach portraits
- `hero-video.mp4` — Looping cinematic hero background video
- `pomona-club.svg` — Brand logo

---

## Animation & Motion Design

- Staggered hero text entrance (headline → subtitle → CTAs → tags → scroll indicator)
- Scroll-triggered section reveals (fade up, 700ms, cubic-bezier easing)
- Animated stat counters with eased count-up on viewport entry
- Auto-rotating testimonial carousel (5s interval) with crossfade
- Image hover zoom (scale 1.05–1.10, 700ms)
- Card hover lift + glow shadow
- Dropdown menu entrance/exit (opacity + translateY)
- Mobile menu staggered item entrance
- Back-to-top button scale entrance/exit
- Scroll indicator bounce animation (infinite loop)

---

## Performance & Accessibility

- Route-based code splitting via `React.lazy`
- All non-hero images use `loading="lazy"`
- Semantic HTML (`article`, `nav`, `section`, `footer`, `main`)
- ARIA labels on interactive elements (menu buttons, testimonial dots, social links)
- Keyboard-navigable accordion and form components
- High-contrast text on dark backgrounds
- Responsive design tested at mobile (640px), tablet, and desktop breakpoints
- Passive scroll event listeners


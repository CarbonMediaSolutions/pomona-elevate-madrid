

# Rebrand Recovery → Wellness + Real Content & Images

## Overview

Rename the entire "Recovery" section to "Wellness" across the site, replace the generic service list with the three actual Pomona Club wellness services (from the uploaded screenshot), and use the uploaded real photos.

## Image Mapping

| Uploaded Image | Service |
|---|---|
| `sauna.png` | Finnish Sauna (Harvia thermometer/hygrometer) — PageHero + Finnish Sauna card |
| `sauna_2.png` | Infrared Sauna (woman in red-lit sauna) — Infrared Sauna card |
| `ducha.png` | Chromotherapy Shower (close-up in red light) — Chromotherapy card |

## Content (from current site screenshot)

Replace the 5 generic services with 3 real ones:

1. **Sauna Finlandesa** — 80°C, deep relaxation ritual, eliminates toxins, releases muscle tension, stimulates immune system. Ideal post-workout for recovery, stress reduction, inner calm.
2. **Sauna Infrarroja** — 50°C, heat penetrates from within to muscle tissues, accelerates recovery, improves circulation, skin care. Ideal for relieving muscle pain, reducing inflammation.
3. **Ducha de Cromoterapia** — Thermal contrast + light therapy, cold water activates circulation, tones muscles, provides energy and mental clarity. Colour therapy enhances sensory effect, balances nervous system.

Each service gets its own image + two-paragraph description (matching the editorial layout from the screenshot).

## Files to Change

### 1. Copy 3 images to `src/assets/`
- `sauna.png` → `src/assets/sauna-finnish.png`
- `sauna_2.png` → `src/assets/sauna-infrared.png`
- `ducha.png` → `src/assets/chromotherapy.png`

### 2. `src/pages/Recovery.tsx` → Rename to `src/pages/Wellness.tsx`
- Replace the card-list layout with an editorial image-text alternating layout (image left + text right, then swap) matching the premium feel of the current site
- Three services with real descriptions, each with its own imported image
- Update all i18n keys from `recoveryPage.*` to `wellnessPage.*`
- Keep bottom CTA section

### 3. `src/App.tsx`
- Change import from `Recovery` to `Wellness`
- Change route from `/recovery` to `/wellness`

### 4. `src/components/layout/Header.tsx`
- Change nav link href from `/recovery` to `/wellness`
- Change nav label key from `nav.recovery` to `nav.wellness`

### 5. `src/components/layout/Footer.tsx`
- Change link href from `/recovery` to `/wellness`

### 6. `src/components/home/ExperiencePillars.tsx`
- Change pillar link from `/recovery` to `/wellness`
- Update image to use one of the new sauna images

### 7. `src/i18n/en.json` + `src/i18n/es.json`
- Rename `nav.recovery` → `nav.wellness` ("Wellness" / "Bienestar")
- Replace `recoveryPage.*` keys with `wellnessPage.*` keys containing the real service descriptions
- Update `footer.recoveryWellness` to reflect "Wellness" naming
- Spanish text taken directly from the current site screenshot (already in Castilian)


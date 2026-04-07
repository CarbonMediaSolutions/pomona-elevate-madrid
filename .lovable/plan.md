

# Replace Classes Page Images with Real Pomona Club Photos

## Image Mapping

Based on the uploaded photos and the current Pomona Club website screenshot:

| Uploaded Image | Class Match | Used In |
|---|---|---|
| `hiit.jpg` | HIIT Circuit (stairmaster/cardio machines) | HIIT & Performance card + PageHero |
| `STRENGTH-1.jpg` | Strength & Conditioning (floor work with dumbbells) | Strength & Conditioning card |
| `Hirox-1.jpg` | HYROX Training (intense bike/erg work, purple lighting) | HYROX Training card |
| `pilates.jpg` | Pilates (mat pilates class with weights) | Pilates + Hot Pilates cards |
| `runing.jpg` | Running Club (group run past Puerta de Alcala) | Running Club card |
| `abs.jpg` | Abs & Stretching / Mobility & Recovery (mat work) | Mobility & Recovery card |
| `personal-1.jpg` | Personal Training (coach guiding dumbbell squats) | Not currently a class — see below |

## Additional Change: Add Missing Classes

The current website shows **Abs & Stretching** and **Personal Training** as class types, but our site doesn't have them. Based on the screenshot and the uploaded images:

- **Add "Abs & Stretching"** class card (using `abs.jpg`) — category: `mindBody`
- **Add "Personal Training"** class card (using `personal-1.jpg`) — category: `performance`
- **Update "Mobility & Recovery"** image from pilates placeholder to `abs.jpg` (or keep abs as its own class and use pilates for recovery)

## Also Update: SignatureExperiences Homepage Component

Replace stock images with the same real photos for HIIT, HYROX, Pilates, Running, and Strength tiles on the homepage.

## Files to Change

1. **Copy 7 images** to `src/assets/` — `hiit.jpg`, `STRENGTH-1.jpg`, `Hirox-1.jpg`, `pilates.jpg`, `runing.jpg`, `abs.jpg`, `personal-1.jpg`
2. **`src/pages/Classes.tsx`** — Update imports to use new images, add Abs & Stretching + Personal Training class entries, update image assignments per mapping above
3. **`src/components/home/SignatureExperiences.tsx`** — Update image imports to use the new real photos for matching tiles
4. **`src/i18n/en.json` + `src/i18n/es.json`** — Add translation keys for the two new class types (Abs & Stretching, Personal Training) if needed

## Class Data Updates

From the current site screenshot, descriptions for the new classes:

- **Abs & Stretching**: Targeted core and flexibility work combining abdominal strengthening with guided stretching to improve mobility and body awareness
- **Personal Training**: One-on-one coaching tailored to your goals — strength, body composition, flexibility, and athletic performance


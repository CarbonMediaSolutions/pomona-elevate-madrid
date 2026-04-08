

# Update Experience Pillars with Real Images

## What changes

Replace 3 stock images in the Experience Pillars homepage section with the uploaded real Pomona Club photos:

| Pillar | Current Image | New Image |
|---|---|---|
| Train with intent | `hiit-training.jpg` (stock) | `Screenshot_2026-04-08_at_17.53.30.png` (gym training shot) |
| Refuel beautifully | `healthy-bar.jpg` (stock) | `image-2.png` (poke bowls) |
| Belong to the club | `hero-gym.jpg` (stock) | `image-3.png` (running club) |

The Wellness pillar already uses the real `sauna-finnish.png` — no change needed.

## Steps

1. **Copy 3 images** to `src/assets/`:
   - `user-uploads://Screenshot_2026-04-08_at_17.53.30.png` → `src/assets/pillar-train.png`
   - `user-uploads://image-2.png` → `src/assets/pillar-bar.png`
   - `user-uploads://image-3.png` → `src/assets/pillar-belong.png`

2. **Update `src/components/home/ExperiencePillars.tsx`**:
   - Replace imports: `hiitImg` → `pillar-train.png`, `barImg` → `pillar-bar.png`, `heroImg` → `pillar-belong.png`
   - Remove unused old imports


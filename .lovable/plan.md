

# Healthy Bar Page — Full Menu Rebuild

Replace the current placeholder menu with the real Pomona Club Healthy Bar menu from the uploaded images, add delivery ordering links (Glovo, Uber Eats), and match the existing site's premium aesthetic.

---

## Content Structure (from menu images)

The page will have these sections in order:

1. **PageHero** — Keep existing hero with updated copy: "Where Fitness Meets Flavour"
2. **Intro section** — "Producto fresco y de temporada" text block with the existing bar image, plus @pomonahealthybar Instagram handle
3. **Order Now** — Glovo + Uber Eats delivery buttons
4. **Juices & Smoothies** — BE HEALTHY, BE FIT, BE VEGGIE, BE ENERGY subcategories (all at €6,90)
5. **Healthy Shots** — Wake Me Up, Adrenaline Blast (€3,00)
6. **Build Your Own Juice or Smoothie** — pricing table (1-5 fruits/base/topping, €6,90)
7. **Healthy Snacks** — Overnight Oats, Açaí Pomaçaí, Yogurt Greek Honey + Pomonitos (Banana Bread, Bananis, Martas, Brownie, Olivias, Belenes)
8. **Café Especialidad & Matcha Cerimonial** — Espresso drinks + Matcha drinks with prices, baïa partnership
9. **Ensaladas & Pokes** — Full salad menu with Build Your Own option + pricing
10. **Tostadas & Paninis** — Clásicas (€5,50), Medium (€7,90), Large (€11,90) with all items
11. **Menús** — Desayuno (Pomona Rise €7,50, Pomona Boost €11,50), Comida (Pomona Roots €13,90, Pomona Fuel €13,90), Merienda (Sweet & Fit €9,50, Snack Balance €9,50)
12. **Healthy Brunch** — First Drink + Smoothie + Toast + Snack + Dessert = €24
13. **CTA** — Visit us / Plan your visit + delivery links

---

## Files to Update

### `src/pages/HealthyBar.tsx`
- Replace the 3-category mock data with the full real menu structured as above
- Each category rendered as a `Section` with `card-premium` styled items showing name, description, and price
- Add delivery buttons section with external links to Glovo and Uber Eats (open in new tab)
- Add "Build Your Own" pricing tables for juices and salads
- Add Healthy Brunch visual breakdown
- Keep existing PageHero and bottom CTA

### `src/i18n/en.json` and `src/i18n/es.json`
- Add new keys under `healthyBarPage` for section headers, intro text, delivery labels, and brunch section
- Spanish text taken directly from the menu images (already in Spanish); English will be translated equivalents

### `src/components/home/HealthyBarPreview.tsx`
- Update pill tags to reflect actual offerings (Juices, Coffee, Salads & Pokes, Tostadas, Healthy Snacks)

---

## Design Approach

- Menu categories use `card-premium` containers with items in 2-column grids
- Prices right-aligned in each item row, using `font-serif` styling
- Subcategory headers (BE HEALTHY, BE FIT, etc.) as pill tags or uppercase small headers
- "Build Your Own" sections use a visual step layout (horizontal flow)
- Delivery buttons styled as outlined buttons with brand colours
- All text translatable via i18n
- Pomonitos section uses a 3-column grid for the small bites


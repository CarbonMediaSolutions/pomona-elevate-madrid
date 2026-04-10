

# Two-Location Gym Selector (Serrano + Retiro)

Same plan as before, but the second location is **Retiro** (not El Tiro). Here's the updated summary:

## What gets built

### 1. Location Chooser Modal (`src/components/LocationChooserModal.tsx`)
- Triggered by all "Book a Session" buttons (header, mobile CTA, mobile menu)
- Two side-by-side image cards: **Serrano** and **Retiro**
- Each card: gym photo, name, address snippet
- Clicking navigates to `/schedule/serrano` or `/schedule/retiro`

### 2. Schedule page with location routing
- Add `/schedule/:location` route in `App.tsx`
- `Schedule.tsx` reads the param and loads the correct Glofox iframe per location
- `/schedule` without a param redirects to the modal or shows both options

### 3. Homepage Location Section update
- `LocationSection.tsx` → two side-by-side cards (Serrano + Retiro) with images, name, address, and CTA
- Replace current single-location layout

### 4. Header updates
- All "Book a Session" links (desktop, mobile menu, floating CTA) open the modal instead of linking directly to `/schedule`

### 5. Assets
- Placeholder images for both locations (can be swapped for real photos later)
- Placeholder Glofox branch ID for Retiro

No database changes required — purely frontend.


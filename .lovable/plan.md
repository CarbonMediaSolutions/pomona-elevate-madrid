

# Embed Glofox Booking into /schedule Page

## What changes

Replace the static mock schedule (day tabs, class cards, spots counters) with the live Glofox booking iframe, while keeping the page's premium styling — the PageHero, trial CTA card, and membership upsell section all stay.

## Plan

### 1. Update `src/pages/Schedule.tsx`

- Remove the static `schedule` array, `activeDay` state, day tabs, and class card list
- Replace that middle section with the Glofox iframe wrapped in the site's `Section` component with a `card-premium` container and rounded corners + overflow hidden for polish
- Keep: Layout, PageHero, trial CTA banner, and bottom membership upsell section
- Remove unused imports (`useState`)

The iframe section will look like:

```tsx
<Section>
  <div className="card-premium overflow-hidden rounded-xl">
    <iframe
      src="https://app.glofox.com/portal/#/branch/660d6658f351bda23f05d487/classes-week-view?header=classes,courses,memberships"
      frameBorder="0"
      width="100%"
      height="1200"
      title="Book a Class"
      className="w-full border-0"
    />
  </div>
</Section>
```

This keeps the hero, trial banner, iframe booking, and upsell CTA — all wrapped in the site's existing premium styling.


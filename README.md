# Purdy & Figg — Christmas Member Offer Landing Page

Production-quality, mobile-first, fully responsive landing page built in **vanilla HTML5, CSS3, and ES6+ JavaScript** with zero frameworks, zero build step, and full accessibility support.

---

## Quick Start / Local Preview

No build tools or package installations are required.

1. Open `index.html` directly in any modern browser, **or**
2. Serve locally for optimal font/WebP behavior:
   ```bash
   npx serve .
   # or
   python -m http.server 8000
   ```
   Then visit `http://localhost:8000`.

---

## Project Structure

```text
├── index.html                  # Semantic HTML5 document (9 sections + video modal)
├── css/
│   ├── variables.css           # Design tokens (colors, typography, spacing, motion)
│   ├── base.css                # Reset, fluid typography scale, a11y utilities
│   ├── components.css          # Reusable BEM UI components (buttons, cards, roundels, carousel, accordion, modal)
│   └── sections.css            # Mobile-first section layouts & min-width media queries (768, 1024, 1440px)
├── js/
│   └── main.js                 # Modular ES6+ interactions initialized on DOMContentLoaded
├── assets/
│   ├── images/                 # Compressed WebP + JPG fallback assets at exact aspect ratios
│   └── icons/                  # Reusable SVG icon symbol reference
├── AI_LOG.md                   # Documentation of AI tool usage, review & corrections
└── README.md
```

---

## Design & Architecture Decisions

### 1. Mobile-First Responsive Grid System
- Base styles target **375px**, scaling cleanly via `min-width` media queries at `48em` (**768px**), `64em` (**1024px**), and `90em` (**1440px**).
- Uses `rem`, `em`, `%`, and `clamp()` throughout (only hairlines/1px borders and 0.5px roundel inner rings use `px`).
- Content aligns to a **1216px** (`76rem`) inner container at 1440px (`112px` horizontal padding), matching the exact Figma layout math (`3 × 384px + 2 × 32px = 1216px` for Scents, `592px + 32px + 592px = 1216px` for About).

### 2. Zero-Duplication Layout Reordering
- In the **Member Offer** section, CSS Grid `grid-template-areas` cleanly places the header (`Christmas Member Offer` + reviews) above the mobile carousel and moves it beside the 610×610 desktop carousel without duplicating DOM nodes.
- The desktop-only H2 (`Member offer: FREE Bottle for Life & cloth`) uses visually hidden (`.sr-only`) styling on mobile rather than `display: none`, preserving valid `h1 → h2 → h3` heading hierarchy across every viewport.

### 3. Typography & Swappable Proprietary Font Tokens
- Proprietary brand typefaces (`GT Super Display` and `TWK Lausanne`) are defined first in `--font-display` and `--font-body` inside `css/variables.css`, falling back cleanly to Google Fonts (`Playfair Display` 400 and `Inter` 300/400/600, mapping Figma weight 200 → 300 for legibility). Dropping in licensed `@font-face` files requires zero changes to component CSS.

### 4. Interactive Features (`js/main.js`)
- **Bundle Selector**: Real `<input type="radio">` elements inside `role="radiogroup"` dynamically expand/collapse the active bundle checklist, update the CTA compare/live price, toggle the `x2` / `x3` pill, and swap the carousel product photography to match `1x`, `2x`, or `3x`.
- **Accessible Carousels**: Native CSS `scroll-snap-type: x mandatory` paired with synchronized dot indicators, prev/next buttons, touch swipe support, and keyboard Left/Right arrow navigation.
- **Accessible Accordions**: Smooth height transitions respecting `prefers-reduced-motion` for both single-open FAQs (item 1 open by default) and multi-open Scent Blend Details panels.
- **Accessible Video Modal**: Full focus trap (`Tab` / `Shift+Tab`), `Escape` and backdrop dismissal, scroll locking, and focus restoration.
- **Cart State & Feedback**: All Add-to-Cart buttons display a brief confirmation state, increment the header cart count badge, and trigger an `aria-live="polite"` toast announcement.

### 5. Performance & Accessibility
- All images use `<picture>` with compressed **WebP** + **JPG** fallbacks, explicit `width`/`height` + `aspect-ratio` to prevent CLS, `fetchpriority="high"` on the hero LCP image, and `loading="lazy"` on below-the-fold media.
- Full keyboard navigation, visible `:focus-visible` outlines, skip-to-content link, semantic landmarks, and WCAG AA contrast.

---

## Deviations & Notes vs. Brief / Figma

1. **Hero H1 & Seasonal Scents H2 Copy**: Matched the exact copy inside the provided Figma mobile & desktop frames (`"Give Your Home a Christmas Spruce"` on both viewports, and `"Natural blends of the finest essential oils"` for Seasonal Scents).
2. **Upsell Card 2 CTA Label**: Used `"ADD 90-DAY PLAN"` on *Bathroom Bliss Starter Kit* to match the exact Figma button copy across mobile and desktop frames.
3. **Member Offer Roundel Deduplication**: Because the official Figma `1x` Slide 1 asset already has the `"FREE Bottle & Cloth"` roundel baked into the artwork, the HTML roundel overlay hides automatically on `1x` Slide 1 and renders dynamically on all other slides and `2x`/`3x` bundle views so the badge is never duplicated.
4. **Placeholder Imagery**: Official Figma product exports were used for all Member Offer carousel slides and the Frankincense & Myrrh scent flatlay. Bespoke generated/royalty-free photography was prepared in matching aspect ratios and compressed to WebP + JPG for the Hero, Upsell cards, Autumn/Signature scent cards, and About founder story poster.
5. **About Video Modal**: Since no hosted `.mp4` video file was provided, clicking the About poster opens an accessible brand story modal dialog with focus trapping and a smooth-scroll CTA to the offer.


# AI Usage Log (`AI_LOG.md`)

This document records how AI-assisted tools were used during the creation of the **Purdy & Figg — Christmas Member Offer** landing page, where they accelerated delivery, and where manual review, visual auditing, and engineering corrections were required.

---

## Tools Used

| Tool | Role in Workflow |
| --- | --- |
| **Antigravity (AI Coding Assistant)** | Design-token extraction, modular HTML5/CSS3/ES6+ authoring, accessibility auditing, automated Chrome headless screenshot/DOM verification scripting |
| **AI Image Generation** | Generating bespoke Christmas hero photography (`hero-christmas-desktop`) and matching apothecary product imagery (`upsell-bathroom-bliss`) where Figma source assets were not exported |
| **FFmpeg CLI (scripted via AI)** | Batch resizing, aspect-ratio cropping, and WebP + JPG compression of official Figma exports and supplementary assets |

---

## Where AI Helped

1. **Design Token & Modular CSS Architecture**
   - Translated the Figma color system, radii, shadows, fluid type scale, and breakpoints (`375px` base → `768px`, `1024px`, `1440px`) directly into [css/variables.css](css/variables.css), [css/base.css](css/base.css), [css/components.css](css/components.css), and [css/sections.css](css/sections.css) using strict BEM naming and `rem`/`em`/`%` units.
   - Structured the **Member Offer** section with CSS Grid `grid-template-areas` so mobile and desktop layouts reorder cleanly without duplicating HTML markup.

2. **Accessible Vanilla JavaScript Modules**
   - Accelerated implementation of [js/main.js](js/main.js) with zero dependencies: reusable scroll-snap carousels (prev/next, dots, swipe, keyboard arrows), bundle radio selector synced with carousel images and CTA pricing, height-animated ARIA accordions (`prefers-reduced-motion` aware), focus-trapped video modal, and live cart toast/badge updates.

3. **Asset Preparation & Automated Verification**
   - Generated high-aesthetic hero and starter-kit imagery consistent with the Purdy & Figg amber-glass apothecary brand palette.
   - Automated `ffmpeg` conversion of all 24 image slots into compressed `.webp` + `.jpg` pairs (10–126 KB WebP) at exact container aspect ratios.
   - Built a headless Chrome CDP verification script to test horizontal overflow across `320px–1920px`, assert all interactive states, check console/network cleanliness, and capture full-page screenshots at `375px`, `768px`, `1024px`, and `1440px`.

---

## Where Review & Corrections Were Required

AI output was never accepted uncritically. Visual inspection of screenshots across all 4 breakpoints and manual code/accessibility review caught and resolved the following issues:

1. **`<picture>` Height Bug Inside `aspect-ratio` Containers**
   - **Issue found:** In the first `375px` and `1440px` screenshots, `.scent-card__media` showed a dark-green band beneath the photos and the mobile Member Offer carousel had empty vertical space above its dots.
   - **Cause & Fix:** The generated CSS applied `height: 100%; object-fit: cover;` to `<img>`, but omitted `display: block; width: 100%; height: 100%;` on the wrapping `<picture>` element. Adding explicit dimensions to `<picture>` inside media containers resolved all four sections immediately.

2. **Duplicate Roundel Badge on Official `1x` Figma Export**
   - **Issue found:** Inspecting the exported Figma images revealed that `Member Offer 1x - Desktop 6.jpg` already had the `"FREE Bottle & Cloth"` roundel baked into the photography, whereas `2x` and `3x` product lineups did not.
   - **Cause & Fix:** Rendering the HTML `.roundel--offer` unconditionally would have produced two overlapping badges on `1x` Slide 1. Added per-slide `hasBakedRoundel` metadata in `js/main.js` so the dynamic HTML roundel hides cleanly on `1x` Slide 1 and appears on slides 2–5 and all `2x`/`3x` views.

3. **Add-to-Cart Button State Race Condition**
   - **Issue found:** The initial cart feedback handler cached `btn.innerHTML` into `dataset.originalHtml` and restored it after 1.5 seconds. If a user clicked **Add to Cart** and immediately switched from the `1x` bundle to `2x` or `3x`, restoring cached HTML would overwrite the newly updated bundle price.
   - **Cause & Fix:** Refactored buttons to use separate `.btn__default` and `.btn__feedback` spans toggled via `.btn--added` CSS state, allowing live price spans inside `.btn__default` to update safely at any time.

4. **Sequential Heading Hierarchy on Mobile (`h1 → h2 → h3`)**
   - **Issue found:** Hiding the desktop-only Member Offer `<h2>` (`"Member offer: FREE Bottle for Life & cloth"`) with `display: none` on mobile caused mobile heading order to skip from `<h1>` straight to `<h3>` (`"Christmas Member Offer"`), which fails strict accessibility audits.
   - **Cause & Fix:** Replaced `display: none` with visually hidden (`.sr-only`) rules on mobile while restoring full visual styling at `min-width: 64em`, preserving valid landmark heading order on every device.

5. **About Section Grid Ordering & Hero Roundel Placement at `1440px`**
   - **Issue found:** First-pass `1440px` screenshot showed the About video and copy columns inconsistently ordered and the hero roundel offset off-target.
   - **Cause & Fix:** Replaced `order: -1` with explicit `grid-template-areas: "video copy"` at `min-width: 64em`, simplified the `1440px` hero roundel `left` offset to `27.43%` (~`395px` at `1440px`), and added a consistent `min-height` to `.scent-card__desc` on tablet/desktop so all three scent divider lines align horizontally.

6. **Off-Brand Fallback Stock Images Replaced After Visual Review**
   - **Issue found:** Automated fallback downloads for non-exported slots pulled mismatched stock photos (a pink perfume bottle for *Autumn Refill Booster*, a bright blue fruit photo for *Signature Scents*, and a watermelon thumbnail on retry).
   - **Cause & Fix:** Visually reviewed every rendered card in headless Chrome screenshots and replaced mismatched images with art-directed studio crops of the official Purdy & Figg amber bottle and apothecary box photography so visual cohesion holds across the entire page.

7. **Brief vs. Live Figma Copy Reconciliation**
   - **Issue found:** Minor copy differences existed between the written brief and the actual Figma file frames (e.g., Desktop Hero H1, Seasonal Scents H2, and *Bathroom Bliss Starter Kit* CTA text `"ADD 90-DAY PLAN"`).
   - **Decision:** Prioritized the exact copy in the Figma mobile and desktop frames and documented every reconciliation transparently in [README.md](README.md).

---

## Summary

AI tools significantly sped up boilerplate setup, token mapping, responsive CSS structure, and multi-viewport test automation. However, achieving pixel accuracy, cohesive art direction, race-free interactive state, and strict accessibility required hands-on visual inspection of screenshots at every breakpoint and targeted manual engineering fixes.

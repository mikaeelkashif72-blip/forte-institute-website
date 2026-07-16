---
name: Forte Institute
description: Cambridge O Level / A Level tuition site — unified light surface, single yellow accent
colors:
  void: "#0D1147"
  void-100: "#0A0E38"
  void-200: "#080B2A"
  glass: "rgba(255, 255, 255, 0.06)"
  glass-border: "rgba(255, 255, 255, 0.12)"
  mist: "#9BA8D4"
  mist-bright: "#C8D0EC"
  paper: "#F8F6F0"
  ink: "#0E1F4B"
  ink-60: "rgba(14, 31, 75, 0.6)"
  ink-10: "rgba(14, 31, 75, 0.1)"
  yellow: "#E8A020"
  yellow-deep: "#1B5A6B"
  navy-pill: "#10204A"
  # --- Bright/pastel theme tokens (added; see Section 2a) ---
  cream: "#FAF4EC"
  gold: "#F7E6C3"
  gold-deep: "#714100"
  sky: "#CAEEFF"
  sky-deep: "#004270"
  violet: "#E9DEFF"
  violet-deep: "#522288"
  sage: "#C8E8CD"
  sage-deep: "#09471F"
  coral: "#FED6DA"
  coral-deep: "#8B173A"
typography:
  display:
    fontFamily: "Clash Display, sans-serif"
    fontSize: "clamp(2.25rem, 5vw, 4.5rem)"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.01em"
  headline:
    fontFamily: "Clash Display, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 600
    lineHeight: 1.2
  body:
    fontFamily: "General Sans, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "General Sans, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 600
rounded:
  md: "8px"
  lg: "16px"
  full: "9999px"
spacing:
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "40px"
components:
  button-primary:
    backgroundColor: "{colors.yellow}"
    textColor: "{colors.ink}"
    rounded: "{rounded.full}"
    padding: "12px 28px"
  button-primary-hover:
    backgroundColor: "{colors.yellow-deep}"
    textColor: "{colors.paper}"
---

# Design System: Forte Institute

## 1. Overview

**Creative North Star: "One Signal on Paper"**

The real Forte Institute logo (a black-and-yellow heraldic lion crest) arrived after the initial visual system was built, and it overrode the system rather than the other way around — per this project's own identity-preservation rule, a real brand asset always wins over a speculative palette. The logo ships in two official variants (a black lockup for light surfaces, a white lockup for dark surfaces). The site briefly ran the dark variant across header and hero; the explicit direction is now a light surface instead, using the black lockup, which is its native presentation.

This still rejects the generic EdTech SaaS look (no pastel gradients, no stock-photo smiling students, no identical icon+heading+text card grids) and the stuffy traditional-institution look (no serif display type, no formal prospectus layout). The earlier violet/cyan "Glass Observatory" direction (3D glass cluster, aurora gradient) has been fully retired — every trace of that palette was removed from the active header/hero surfaces. (`Footer.tsx` still contains violet/cyan classes; it is currently unused and excluded from this lock until it's reintroduced.)

**Key Characteristics:**
- One locked accent (yellow) across header and hero — no second accent color competing for attention
- One unified light surface (`paper`) from the top of the header through the hero — no seam; the `void`/`mist` dark-surface tokens remain defined for any future dark context but are not in active use
- **Yellow is reserved for fills, never for text on the light surface** — `#F5C518` against white measures ~1.6:1 contrast, far below the 3:1 minimum for large/bold text. Any place yellow previously appeared as text color (the eyebrow) now uses `yellow-deep` (~3.3:1, clears the bold/large-text threshold) instead. This was a deliberate correction, not an oversight — recheck contrast any time an accent color moves from a dark fill onto a light text role.
- Motion is real and motivated: word-level text reveal on first paint (`TextEffect`), tactile press feedback on every primary CTA (header and hero), a custom smooth easing scroll cue (never `animate-bounce` — see Section 6's Named Rule)
- `framer-motion` has been fully migrated to `motion/react`; no legacy import path remains in the codebase

## 2. Colors

A Restrained strategy: one neutral base (paper) carries the entire surface, top to bottom, and yellow is the single signal spent on identity, action, and proof.

### Primary
- **Gold** (#E8B72E): the one locked accent, reserved for **fills** — CTA backgrounds, glow orbs, decorative accents. Not used as a text color on the light surface (contrast ~2.1:1 on cream, fails WCAG).
- **Teal-Navy** (#1B5A6B): the accent's text-safe form — eyebrow text, focus rings, hover/pressed state for gold-filled elements, particle dots. ~4.5:1 on cream.

### Neutral — Active Surface
- **Cream / Paper** (#F8F6F0): header and hero background, unified top to bottom. Warm off-white with a parchment quality that reinforces the collegiate register.
- **Navy / Ink** (#0E1F4B): headline and primary text, icons, strokes. Navy on Cream is ~13:1 contrast.
- **Navy-Pill** (#10204A): reserved for navy-filled button variants and dark pill elements.

### Neutral — Defined but Dormant
- **Void** (#0A0B12) / **Mist** (#A8AEC2) / **Mist Bright** (#E7E9F2) / **Glass** family: not used on any active surface. Kept defined for a possible future dark context (a dark-mode toggle) and for the logo's white variant, which is used wherever the brand mark needs to sit on a dark background outside this site's current pages.

### Named Rules
**The One Accent Rule.** Yellow (in its fill or text-safe form) is the only color carrying meaning (identity, action, focus) anywhere on the header or hero. If a future component wants a second accent, that is a deliberate decision requiring a documented reason, not a default reach.
**The Fill-Not-Text Rule.** `yellow` (#F5C518) is for backgrounds/fills only. Any time the brand accent needs to be a text color, line, or icon stroke against a light background, use `yellow-deep` instead — the base yellow fails contrast as text on Paper.

## 2a. Bright/Pastel Theme Tokens (in progress — additive migration)

**Status:** client-approved pivot away from the dark "void" homepage theme toward a bright, cream-based, multi-pastel theme (reference: altacademy.org). This is a **migration in progress** — the tokens below are additive. The dark tokens (`void`, `mist`, `glass`, `cyan`) documented above and in CLAUDE.md remain fully active and must not be removed until every page that references them has been migrated. As of this write-up, only the Header and homepage hero have flipped to the new tokens; every section below the hero (Why Forte, Testimonials, Teachers, Footer, and all secondary pages) is still on the dark theme and looks unchanged.

**Base surface / text:**
- `cream` (`#FAF4EC`) — the new warm off-white page background, replacing `void` wherever a page migrates. Distinct from the older `paper` (`#F8F6F0`) token, which stays untouched since many components still reference it.
- `ink` (`#0E1F4B`) — already existed as the primary dark text color (a deep navy, not literal black); reused as-is for the new theme rather than introducing a colliding second "ink" with a different hue, since 27+ files already reference `ink`/`ink-60`/`ink-10`. Contrast against `cream`: 14.6:1.
- `ink-60` (`rgba(14,31,75,0.65)`) — secondary/body text on light surfaces. The alpha was nudged from the pre-existing 0.6 to 0.65 specifically because 0.6 measured 4.25:1 against the new `cream` (fails WCAG AA's 4.5:1 for normal text); 0.65 measures 4.96:1. Same hue, negligible visual change on pages still using the old value.
- `ink-40` (`rgba(14,31,75,0.4)`) — new, lighter tertiary tone (~2.4:1 against cream). Decorative/large-text use only, not body copy.

**Five pastel surface/deep-text pairs** — each `{name}` is a full pastel section/card background (not just an accent stripe), and `{name}-deep` is a same-hue, saturated, text-safe color for headings/body copy sitting on that pastel surface:

| Role | Surface | Deep (text-safe) | Contrast (deep-on-surface) |
|---|---|---|---|
| Gold | `#F7E6C3` | `#714100` | 6.94:1 |
| Sky | `#CAEEFF` | `#004270` | 8.54:1 |
| Violet | `#E9DEFF` | `#522288` | 8.42:1 |
| Sage | `#C8E8CD` | `#09471F` | 8.22:1 |
| Coral | `#FED6DA` | `#8B173A` | 6.95:1 |

All five pairs clear the 4.5:1 WCAG AA floor for body text with comfortable margin. All values were derived directly from OKLCH (same hue kept between a pastel surface and its deep text partner) and converted to sRGB hex — not eyeballed.

**Deviations from the original brief, and why:**
- **Gold-deep is not the literal old "yellow-deep" hex.** The brief asked to reuse the existing `yellow-deep` value verbatim. Neither candidate for that value works as text here: CLAUDE.md's documented `#B98A00` measures 2.55:1 against the gold pastel surface and 2.87:1 against cream; the value actually live in `tailwind.config.ts` before this change, `#F5C518`, is worse (1.49:1 against cream). Both fail WCAG AA. Gold-deep was re-derived at the same hue (oklch H=85, matching the gold surface) and darkened to oklch(42% 0.15 85) = `#714100`, which passes both checks with margin.
- **`violet` was repurposed, not left alone.** The pre-existing `violet` token (`#8B5CF6` / `bright: #A78BFA`) was the retired dark "Glass Observatory" accent. A repo-wide search turned up zero live references to it — even `Footer.tsx`, which CLAUDE.md's notes suggested still used it, had already been migrated to the `void`/`mist`/`glass` set. Since it was dead, `violet` now holds the new pastel surface/deep pair instead of introducing a synonym key. `cyan` had the same retired-and-dead status but isn't needed by the new 5-pair palette, so it was left completely untouched.
- **`ink` was not redefined with a new near-black value.** The brief's spec (oklch 22% near-black) assumed `ink` didn't already exist as a light-surface token; in fact it's used across 27+ files as a dark navy. Redefining its hue would have visually changed every one of those files, which is out of scope for this pass. The existing navy `ink` already clears 14.6:1 against `cream`, so it was reused unchanged; only the `-60` alpha was nudged (see above) and a new `-40` shade was added.

## 3. Typography

**Display Font:** Clash Display (Fontshare, with sans-serif fallback)
**Body Font:** General Sans (Fontshare, with sans-serif fallback)

Both chosen specifically to avoid the reflex-reject font list (no Space Grotesk, no Inter). Unchanged from the prior system — the palette change didn't require a type change.

### Hierarchy
- **Display** (700, `clamp(2.25rem, 5vw, 4.5rem)`, 1.1 line-height, -0.01em tracking): hero headline only. Ceiling raised slightly from the previous spec (was 3rem max) since the current headline is short enough (5 words) to afford it at `md:text-7xl`.
- **Headline** (600, 1.5rem, 1.2 line-height): reserved for any section heading reintroduced below the hero.
- **Body** (400, 1rem, 1.6 line-height): supporting copy. Cap prose blocks at 65–75ch.
- **Label** (600, 0.875rem): nav links, eyebrow text, button labels.

### Named Rules
**The No-Serif Rule (carried forward).** No serif typeface anywhere.

## 4. Elevation

The header is the only "lifted" surface currently in use: `bg-paper/90` with `backdrop-blur-xl` and a 1px `ink-10` bottom border, reading as a thin glass bar above the hero without a drop shadow or a color change. The hero itself is flat — no cards, no panels, just type and the animated grid background.

### Named Rules
**The Glass-Not-Shadow Rule (carried forward).** Any future "lifted" surface (a reintroduced card, a modal, a dropdown) uses translucency + blur + hairline border, never an opaque panel with a drop shadow.

## 5. Components

### Buttons
- **Shape:** fully rounded (`rounded-full`)
- **Primary:** yellow fill, ink text, hover shifts to yellow-deep fill with paper text, `active:scale-[0.97]` for tactile press feedback (header "Register Now", hero "Book a Free Session")
- **Focus:** `focus-visible:ring-2 ring-yellow-deep ring-offset-2 ring-offset-paper` — yellow-deep, not yellow, since the ring must clear the same 3:1 contrast floor as text

### Navigation (Header)
- **Style:** sticky, `bg-paper/90` + `backdrop-blur-xl`, `ink-10` bottom border, height well under the 80px cap
- **Mobile:** hamburger (44px touch target) opens a full-width `bg-paper/95` drawer with all nav links plus the CTA, each link sized for a 44px+ touch target

### Signature Component: Hero Text Reveal
The eyebrow, headline, and subhead each mount via `TextEffect` (`per="word"`, `preset="fade-in-blur"`), staggered by an increasing `delay` and `speedReveal` per element so the eyebrow finishes before the headline starts and the subhead before the button. The CTA itself fades up on a plain `motion.div` rather than `TextEffect` (it's not text being revealed, it's an element arriving). Every animated element respects `prefers-reduced-motion` — `TextEffect` degrades gracefully since its animation is opacity/blur only, and the CTA's entrance explicitly checks the media query before applying `initial`.

### Signature Component: Asymmetric Hero with Contained Crest
The hero (`the-infinite-grid.tsx`) is left-aligned text against a large, static brand-art element, not a centered stack — a deliberate departure from the generic centered-eyebrow-headline-subtext-CTA template, per the brand register's anti-center-bias guidance. Text (eyebrow, headline, subhead, CTA) sits left, constrained to `max-w-2xl`, never competing with the visual for center stage.

The crest (`public/crest-lion.png` — the lion figure only, isolated via connected-component analysis from the logo lockup to exclude the card border and accent dot, then upscaled 900px wide) sits in its own fixed-width column (`w-[260px]`/`lg:w-[320px]`) to the right of the text, with real margin on both sides via the flex row's `justify-between gap-12` — not bled off the viewport edge. Within that column it's anchored toward the top (`top-[4%]`, `object-top`) so the head, cap, and forepaws stay fully visible, with a `mask-image` gradient fading the legs to transparent toward the bottom rather than a hard crop. Rendered at very low opacity (0.1) as art direction, not a UI element. **It does not move.** Two earlier iterations are worth recording so the reasoning doesn't get re-litigated: first it had cursor-parallax (read as a UI toy, removed); then it bled off the screen edge (read as ungrounded/floating rather than placed, pulled back into a contained column with deliberate spacing). Hidden below `lg` — at this scale it needs real room on both sides to read as placed rather than cramped, so it drops out earlier than the previous full-bleed version did (which only needed to hide below `md`).

Behind it: a mouse-reactive SVG grid with a radial mask that brightens near the cursor (this is the page's one remaining interactive effect), plus two static yellow glow orbs (yellow/35 and yellow-deep/25) for depth. Grid lines render in `ink` at low opacity rather than `mist`, so the texture is a soft graphite grid on white instead of disappearing. Grid scroll animation is disabled under `prefers-reduced-motion`.

### Named Rules
**The Asymmetry Rule.** The hero is left-text against an off-center visual, not a centered stack. Reverting to dead-center symmetry needs a deliberate reason, not a default reach.
**The Static-Brand-Art Rule.** Large brand-identity elements (the crest, and anything like it added later) are placed with confidence and held still. Motion on an identity element reads as a toy; stillness at scale reads as a statement. Reserve cursor-driven motion for genuinely interactive affordances (the grid reveal), not for the logo/crest itself.

## 6. Do's and Don'ts

### Do:
- **Do** use yellow as the only accent color on the header and hero. If glow, focus rings, or any future accent is needed, reach for yellow or a neutral first.
- **Do** give every primary CTA a tactile `active:scale` press state, not just a hover color change.
- **Do** use smooth easing (`cubic-bezier` ease-in-out or ease-out-quart/quint, see the `scroll-cue` keyframe) for any looping/ambient animation. Never Tailwind's `animate-bounce` or `animate-ping` defaults — they read as bounce/elastic easing, which is explicitly banned.
- **Do** keep Clash Display for headings and General Sans for body.

### Don't:
- **Don't** reintroduce violet, cyan, or the aurora gradient anywhere on the header or hero — that system is retired. (`Footer.tsx` is the one exception, currently dormant and out of scope until it's brought back.)
- **Don't** use pastel gradients, stock-photo smiling-student imagery, or identical icon+heading+text card grids.
- **Don't** introduce heavy serif typography or a formal-prospectus layout.
- **Don't** add a second hue as an accent without a documented reason — see the One Accent Rule.
- **Don't** use base `yellow` as a text, ring, or stroke color on the light surface — see the Fill-Not-Text Rule. Always use `yellow-deep` instead.
- **Don't** reintroduce a dark header (or any dark surface) without using the logo's white variant (`/logo-white.png`) and re-deriving header text colors from the `mist` family — never put the black logo (`/logo.png`) on a dark background or vice versa.

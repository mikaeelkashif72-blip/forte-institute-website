---
name: Forte Institute
description: Cambridge O Level / A Level tuition site — unified light surface, single yellow accent
colors:
  void: "#0A0B12"
  void-100: "#10111C"
  void-200: "#171928"
  glass: "rgba(255, 255, 255, 0.06)"
  glass-border: "rgba(255, 255, 255, 0.12)"
  mist: "#A8AEC2"
  mist-bright: "#E7E9F2"
  paper: "#FFFFFF"
  ink: "#111111"
  ink-60: "rgba(17, 17, 17, 0.6)"
  ink-10: "rgba(17, 17, 17, 0.1)"
  yellow: "#F5C518"
  yellow-deep: "#B98A00"
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
- **Yellow** (#F5C518): the one locked accent, reserved for **fills** — logo color, primary CTA background, glow orbs. Not used as a text color on the light surface (see contrast note above).
- **Yellow Deep** (#B98A00): the accent's text-safe form — eyebrow text, focus rings, hover/pressed state for yellow-filled elements. Also the darker member of the hero's two glow orbs.

### Neutral — Active Surface
- **Paper** (#FFFFFF): header and hero background, the same value in both. No seam at the header/hero boundary. Matches the logo's native white-card presentation.
- **Ink** (#111111) / **Ink 60** / **Ink 10**: headline and primary text, secondary text (subhead, nav links at rest), hairline borders. Ink on Paper is ~18:1 contrast.

### Neutral — Defined but Dormant
- **Void** (#0A0B12) / **Mist** (#A8AEC2) / **Mist Bright** (#E7E9F2) / **Glass** family: not used on any active surface. Kept defined for a possible future dark context (a dark-mode toggle) and for the logo's white variant, which is used wherever the brand mark needs to sit on a dark background outside this site's current pages.

### Named Rules
**The One Accent Rule.** Yellow (in its fill or text-safe form) is the only color carrying meaning (identity, action, focus) anywhere on the header or hero. If a future component wants a second accent, that is a deliberate decision requiring a documented reason, not a default reach.
**The Fill-Not-Text Rule.** `yellow` (#F5C518) is for backgrounds/fills only. Any time the brand accent needs to be a text color, line, or icon stroke against a light background, use `yellow-deep` instead — the base yellow fails contrast as text on Paper.

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

### Signature Component: Infinite Grid (Hero Background)
A mouse-reactive SVG grid (`the-infinite-grid.tsx`) with a radial mask that brightens the grid near the cursor, plus two static yellow glow orbs (yellow/35 and yellow-deep/25 — bumped up from the dark-surface values, since light-on-light glows need more strength to read) for depth. Grid lines render in `ink` at low opacity rather than `mist`, so the texture is a soft graphite grid on white instead of disappearing. Grid scroll animation is disabled under `prefers-reduced-motion`.

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

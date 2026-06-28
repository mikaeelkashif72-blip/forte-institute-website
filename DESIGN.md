---
name: Forte Institute
description: Cambridge O Level / A Level tuition site — confident, modern, sharp
colors:
  ink: "#16213E"
  ink-deep: "#10182E"
  ink-muted: "#4B5C82"
  ink-hairline: "#D5DAE6"
  ink-wash: "#EEF0F5"
  paper: "#F8F4EC"
  paper-bright: "#FBF9F4"
  signal-gold: "#C8932A"
  signal-gold-deep: "#A6781E"
typography:
  display:
    fontFamily: "Space Grotesk, sans-serif"
    fontSize: "clamp(2.25rem, 5vw, 3rem)"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "normal"
  headline:
    fontFamily: "Space Grotesk, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 700
    lineHeight: 1.2
  body:
    fontFamily: "Inter, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: "Inter, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 600
rounded:
  sm: "6px"
  md: "8px"
spacing:
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "40px"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.md}"
    padding: "8px 16px"
  button-primary-hover:
    backgroundColor: "{colors.ink-deep}"
  card-choice:
    backgroundColor: "{colors.paper-bright}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
    padding: "24px"
  card-choice-hover:
    backgroundColor: "{colors.paper-bright}"
---

# Design System: Forte Institute

## 1. Overview

**Creative North Star: "The Exam Room Clock"**

Forte Institute's site reads like the clock on the wall of an exam hall: precise, unornamented, and entirely confident in what it's there to do. Nothing on the page is decorative for its own sake — every stat, every card, every press of a button earns its place by being either proof (results, grades, pass rates) or a path forward (pick a level, book a trial). The palette is deliberately restrained — deep ink and warm paper, with a single signal-gold accent reserved for the moments that matter (CTAs, the numbers that prove results) — so confidence comes from precision, not noise.

This system explicitly rejects the generic EdTech SaaS look: no pastel gradients, no stock-photo smiling students, no identical icon+heading+text card grids, no hero-metric-with-gradient-accent cliché. It equally rejects the stuffy traditional-school look: no heavy serif display type, no formal prospectus layout, nothing that reads as dated. Confident and modern means sharp typography and decisive color, not soft reassurance.

**Key Characteristics:**
- Flat, decisive surfaces — no ambient shadows, no glassmorphism
- One signal color (gold) used sparingly and only with intent
- Interaction is the system's personality: presses and hovers carry a distinctive "circuit" micro-animation rather than a generic lift/shadow
- Type does the hierarchy work; color is for proof and action, not decoration

## 2. Colors

A two-neutral, one-signal palette: deep ink and warm paper carry the whole surface, gold is spent only on proof and action.

### Primary
- **Ink** (#16213E): primary text color, header background, primary button fill. The institute's voice — used everywhere confidence needs to be stated plainly.
- **Ink Deep** (#10182E): hover/pressed state for ink-filled elements (header CTA hover).
- **Ink Muted** (#4B5C82): secondary text — subheadings, card descriptions, nav labels at rest.

### Secondary
- **Signal Gold** (#C8932A): the one accent. Reserved for CTAs' link-style text ("Browse subjects →"), card hover borders, and the hero's wireframe geometry. Never used as a body-text color or background fill at any scale.
- **Signal Gold Deep** (#A6781E): rest-state of gold text links, so the brighter gold reads as an active/hover state.

### Neutral
- **Paper** (#F8F4EC): page background. Warm, not stark white — but deliberately not the cream-as-AI-default trap; it's paired with decisive ink and gold rather than pastel everything-else, which is what keeps it from reading generic.
- **Paper Bright** (#FBF9F4): card/header surface — one step lighter than the page background, used to lift content blocks without a shadow.
- **Ink Hairline** (#D5DAE6): borders — card edges, header bottom border, divider rules.
- **Ink Wash** (#EEF0F5): reserved for the lightest tonal fills if a component needs a subtle background distinct from Paper (not yet used in a live component).

### Named Rules
**The One Signal Rule.** Gold appears only on proof (stat numbers' implicit emphasis via position, not color) and action (links, hover borders, hero geometry). It is never a background fill and never used for more than one element type per view.

## 3. Typography

**Display Font:** Space Grotesk (with sans-serif fallback)
**Body Font:** Inter (with sans-serif fallback)

**Character:** Space Grotesk's geometric, slightly squared letterforms carry the "sharp" half of the brand for headings; Inter stays out of the way for body copy and data-heavy content (stats, grade tables) where legibility matters more than character.

### Hierarchy
- **Display** (700, `clamp(2.25rem, 5vw, 3rem)`, 1.1 line-height): hero headline only, e.g. "Cambridge O Level & A Level tuition that gets results."
- **Headline** (700, 1.5rem, 1.2 line-height): section and card headings — "O Level", "A Level", subject names.
- **Body** (400, 1rem, 1.5 line-height): supporting copy, card descriptions. Cap prose blocks at 65–75ch.
- **Label** (600, 0.875rem): nav links, stat labels, button text.

### Named Rules
**The No-Serif Rule.** No serif typeface anywhere in this system, including for quotes/testimonials — serif accents would pull toward the rejected "stuffy institution" anti-reference. Emphasis in quotes comes from size/weight, not a typeface switch.

## 4. Elevation

Flat by default — no ambient drop shadows anywhere in the current build. Depth and separation come from a 1px ink-hairline border (cards, header bottom edge) or a one-step background shift (Paper → Paper Bright), never from blur or shadow. This matches the "exam room clock" character: depth through precision and structure, not through soft visual cues.

### Named Rules
**The Flat-By-Default Rule.** Surfaces sit at the same visual depth at rest. The only response to interaction is a border-color shift (ink-hairline → gold) or the signature circuit-press animation (see Components) — never a shadow appearing on hover.

## 5. Components

Components should feel "very interactive" — pressing or hovering is a small event, not a passive color fade. The signature pattern is a circuit-trace animation that runs outward from the point of interaction.

### Buttons
- **Shape:** 8px radius (`rounded-md`)
- **Primary:** ink background, paper text, 8px/16px padding (header "Book Free Trial")
- **Hover / Focus:** background shifts to Ink Deep; on press, a thin gold circuit-trace line animates outward from the press point along the button edge and fades — the signature "circuit bleeding out" moment described as this brand's interactive personality. Not yet implemented in code; documented here so future button work builds toward it intentionally rather than defaulting to a plain color fade.
- **Secondary / Ghost:** gold text link style (`text-accent-dark`, hover `text-accent`) for low-emphasis actions like "Browse subjects →"

### Cards (Choice Cards)
- **Corner Style:** 6px radius (`rounded-sm`/`rounded-lg` in current Tailwind usage — standardize to `rounded-sm` going forward)
- **Background:** Paper Bright
- **Shadow Strategy:** none — see Elevation
- **Border:** 1px Ink Hairline at rest, shifts to Signal Gold on hover
- **Internal Padding:** 24px (`p-6`)

### Navigation
- **Style:** sticky header, Paper Bright at 90% opacity with backdrop blur, 1px Ink Hairline bottom border
- **Typography:** Label scale, Ink Muted at rest, Ink on hover/active
- **Mobile:** nav links currently hidden below `md`; needs a mobile menu treatment (not yet built — flag for `audit`/`harden` pass)

## 6. Do's and Don'ts

### Do:
- **Do** use Signal Gold only for action (links, hover borders) and the hero's wireframe geometry — never as a fill or background.
- **Do** keep all depth flat: borders and background-shift only, no box-shadow.
- **Do** treat interaction as the brand's personality — buttons and cards should feel like pressing something precise, not like hovering over a generic SaaS card.
- **Do** cap body text at 65–75ch and keep Inter as the only body typeface.

### Don't:
- **Don't** use pastel gradients, stock-photo smiling-student imagery, or identical icon+heading+text card grids — the generic EdTech SaaS look this system explicitly rejects.
- **Don't** introduce heavy serif typography or a formal-prospectus layout — the stuffy traditional-institution look this system explicitly rejects.
- **Don't** add drop shadows or glassmorphism anywhere; depth comes from borders and tone shifts only.
- **Don't** use `background-clip: text` gradient headlines or a tiny uppercase tracked eyebrow above every section — both are AI-design tells, not this brand's voice.
- **Don't** let Signal Gold creep past a single accent role; if a screen needs more than one emphasis color, that's a sign the hierarchy needs rework, not a second accent.

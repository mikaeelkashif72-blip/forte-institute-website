---
name: Forte Institute
description: Cambridge O Level / A Level tuition site — glassy, futuristic, premium
colors:
  void: "#0A0B12"
  void-100: "#10111C"
  void-200: "#171928"
  glass: "rgba(255, 255, 255, 0.06)"
  glass-border: "rgba(255, 255, 255, 0.12)"
  mist: "#A8AEC2"
  mist-bright: "#E7E9F2"
  violet: "#8B5CF6"
  violet-bright: "#A78BFA"
  cyan: "#22D3EE"
  cyan-bright: "#67E8F9"
typography:
  display:
    fontFamily: "Clash Display, sans-serif"
    fontSize: "clamp(2.25rem, 5vw, 3rem)"
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
    backgroundColor: "{colors.violet}"
    textColor: "{colors.void}"
    rounded: "{rounded.full}"
    padding: "8px 20px"
  card-choice:
    backgroundColor: "{colors.glass}"
    textColor: "{colors.mist-bright}"
    rounded: "{rounded.lg}"
    padding: "24px"
---

# Design System: Forte Institute

## 1. Overview

**Creative North Star: "The Glass Observatory"**

Forte Institute's site now reads like looking through the glass dome of an observatory at night: a near-black void, faceted glass forms catching colored light, precise but alive. This replaces the earlier "Exam Room Clock" restrained ink/cream system — the client explicitly asked for something different that speaks to a younger audience, and a flat, paper-toned marketing site wasn't doing that. The new system keeps the same underlying confidence (nothing decorative for its own sake — proof and action still drive the page) but trades restraint for a Committed/Full-palette glass-and-gradient language: a near-black base, translucent glass panels, and a violet→cyan gradient that carries energy without tipping into noise.

This still rejects the generic EdTech SaaS look (no pastel gradients, no stock-photo smiling students, no identical icon+heading+text card grids) and the stuffy traditional-institution look (no serif display type, no formal prospectus layout). It adds a new rejection: flat, light, "safe" marketing-site default — the brief now explicitly wants something that feels closer to a premium tech product launch than a tutoring brochure.

**Key Characteristics:**
- Near-black void base; light only where it's earned (glass panels, gradient accents, the 3D glass cluster)
- A single named gradient (violet → cyan) carries the brand's energy — used on the primary CTA and as accent glow, never as body text (gradient text remains an absolute ban regardless of register)
- Glassmorphism is intentional and central here, not decorative — the brief is explicitly "glassy, futuristic, premium," so panels use backdrop-blur + translucent fill + soft border rather than flat fills
- The 3D hero is a cluster of faceted glass shapes (icosahedron, torus, octahedron) that drift and respond to cursor position — premium and alive, not a generic single spinning wireframe

## 2. Colors

A Committed strategy: near-black void carries the surface, glass panels lift content, and a violet→cyan gradient is the one named energy signature.

### Primary
- **Void** (#0A0B12): page background, header background. The dark stage everything else sits on.
- **Void 100 / Void 200** (#10111C / #171928): subtle background layering where a section needs to read one step "up" from the page without a hard edge.

### Secondary
- **Violet** (#8B5CF6) / **Violet Bright** (#A78BFA): primary gradient stop, used for CTA fills (via the gradient), hover-state glow on glass cards, and one of the 3D cluster's glass shapes.
- **Cyan** (#22D3EE) / **Cyan Bright** (#67E8F9): secondary gradient stop, used for link-style text ("Browse subjects →"), the other glass shapes' glow.
- **Aurora Gradient** (`linear-gradient(135deg, #8B5CF6 0%, #22D3EE 100%)`): the named gradient. Reserved for the primary CTA fill only — not for text, not for backgrounds, not repeated elsewhere on the same screen.

### Neutral
- **Mist** (#A8AEC2): secondary text — card descriptions, nav labels at rest. ~8.9:1 contrast against Void; comfortably exceeds WCAG AA.
- **Mist Bright** (#E7E9F2): primary text — headlines, card titles, nav active state.
- **Glass / Glass Border** (rgba(255,255,255,0.06) / rgba(255,255,255,0.12)): the translucent panel fill and hairline border for every glass card, the header, and the mobile nav drawer.

### Named Rules
**The One Gradient Rule.** The aurora violet→cyan gradient appears as a fill exactly once per view (the primary CTA). Everywhere else, violet and cyan are used as flat solid accents, never repeated as a second gradient on the same screen.
**The No-Gradient-Text Rule.** Never apply the aurora gradient (or any gradient) via `background-clip: text`. This is an absolute ban regardless of how "futuristic" the brief is — emphasis comes from the gradient CTA fill and the glass cluster's color, not from gradient typography.

## 3. Typography

**Display Font:** Clash Display (Fontshare, with sans-serif fallback)
**Body Font:** General Sans (Fontshare, with sans-serif fallback)

**Character:** Clash Display's sharp, slightly futuristic geometric cuts carry the "premium tech" half of the brand for headings; General Sans is a clean, warm-neutral grotesque for body copy that doesn't compete with the headline. Neither family is on the reflex-reject list (replacing the previous Space Grotesk/Inter pairing, both of which were named reflex defaults).

### Hierarchy
- **Display** (700, `clamp(2.25rem, 5vw, 3rem)`, 1.1 line-height, -0.01em tracking): hero headline only.
- **Headline** (600, 1.5rem, 1.2 line-height): card and section headings — "O Level", "A Level", subject names.
- **Body** (400, 1rem, 1.6 line-height): supporting copy. Cap prose blocks at 65–75ch.
- **Label** (600, 0.875rem): nav links, stat labels, button text.

### Named Rules
**The No-Serif Rule (carried forward).** No serif typeface anywhere — still true under the new direction; serif would pull toward the rejected "stuffy institution" anti-reference.

## 4. Elevation

Depth comes from glass, not shadow: translucent panels with `backdrop-blur` and a soft 1px border read as "lifted" against the void without an ambient drop shadow. The header and mobile nav drawer use a stronger blur (`backdrop-blur-xl`) since they sit above scrolling content; cards use the same glass treatment at rest, with the border brightening toward violet on hover instead of a shadow appearing.

### Named Rules
**The Glass-Not-Shadow Rule.** Every "lifted" surface (header, cards, nav drawer) is glass (translucent fill + blur + hairline border), never a flat opaque panel with a drop shadow. If a new component needs to read as elevated, reach for glass first.

## 5. Components

### Buttons
- **Shape:** fully rounded (`rounded-full`)
- **Primary:** aurora gradient fill, void text, 8px/20px padding (header and mobile-nav "Book Free Trial")
- **Hover / Focus:** opacity softens slightly (90%) rather than a color swap — the gradient itself is already the maximum-energy state
- **Secondary / Ghost:** cyan-bright text link for low-emphasis actions ("Browse subjects →"), hover shifts to violet-bright

### Cards (Choice Cards)
- **Corner Style:** 16px radius (`rounded-2xl`)
- **Background:** Glass fill with `backdrop-blur-xl`
- **Border:** Glass Border at rest, brightens toward violet-bright/60 on hover
- **Internal Padding:** 24px (`p-6`)

### Navigation
- **Style:** sticky header, Void at 80% opacity with `backdrop-blur-xl`, Glass Border bottom edge
- **Mobile:** hamburger button (Glass Border outline) opens a full-width glass drawer with all nav links plus the gradient CTA — built specifically so the primary (mobile, student) audience never loses access to navigation

### Signature Component: Glass Cluster (3D Hero)
A cluster of three faceted glass shapes (icosahedron, torus, octahedron) rendered with `MeshTransmissionMaterial`, lit by a violet and a cyan point light plus a `night` environment map for realistic refraction. The cluster drifts gently (via `Float`) and eases toward the cursor position — cursor-reactive only, no scroll choreography, per the brief. Every animated property (the float drift and the cursor-ease rotation) is disabled under `prefers-reduced-motion: reduce`, leaving the cluster static but still visible.

## 6. Do's and Don'ts

### Do:
- **Do** use the aurora gradient exactly once per view, as a fill, on the primary CTA only.
- **Do** build every "lifted" surface as glass (blur + translucent fill + hairline border), never a flat panel with a drop shadow.
- **Do** keep Clash Display for headings and General Sans for body — both were chosen specifically to avoid the reflex-reject font list.
- **Do** disable all hero-scene motion (float drift, cursor-ease) under `prefers-reduced-motion: reduce`.

### Don't:
- **Don't** apply the aurora gradient (or any gradient) via `background-clip: text` — this is an absolute ban, not a register-specific judgment call.
- **Don't** use pastel gradients, stock-photo smiling-student imagery, or identical icon+heading+text card grids — the generic EdTech SaaS look this system has always rejected.
- **Don't** introduce heavy serif typography or a formal-prospectus layout.
- **Don't** default back to a flat, safe, restrained palette — the client explicitly asked for something different from the original ink/cream system; if a future surface drifts back toward beige-and-muted-slate, that's a regression, not a simplification.
- **Don't** add a second gradient or a second glow color to the same screen — one aurora gradient, one glass system, no competing accents.

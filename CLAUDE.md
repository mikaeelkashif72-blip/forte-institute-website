# CLAUDE.md

This file provides guidance to Claude Code when working with this repository.
Last updated: 2026-06-30. Read this fully before touching any file.

---

## Commands

- `npm run dev` — start the Next.js dev server (http://localhost:3000)
- `npm run build` — production build
- `npm run start` — run production build
- `npm run lint` — ESLint (`next/core-web-vitals`, `next/typescript`)

No test suite is configured yet.

**Cache corruption fix (recurring issue):** After rapid edits the webpack cache sometimes corrupts (`Cannot find module './948.js'`). Fix: kill the dev server process, delete `.next/`, then restart `npm run dev`. This affects the browser too — the user must also restart their local server if they see an unstyled page.

---

## Project Overview

**Client:** Forte Institute — a Cambridge O Level / A Level / IGCSE tutoring center in Pakistan.

**Audience:** Primarily students (young, tech-savvy), not parents. Students use the site to access notes, buy recorded classes, and book live sessions. Design should appeal to the 15–22 age range.

**Deployment target:** Vercel (not yet deployed; currently local dev only).

**Business model (future work, not yet built):**
- Recorded classes: pay-to-access, gated behind login
- Live classes: booking form
- Notes: downloadable, gated
- Payment: JazzCash / Easypaisa integration (future)
- Auth: Supabase (future)

---

## Architecture

Next.js 14 App Router, TypeScript, Tailwind CSS.

**Path alias:** `@/*` → `src/*` (configured in `tsconfig.json`).

**Content lives in `src/lib/*.ts`, not in components.** Page data is typed arrays/objects exported from dedicated lib files: `about.ts`, `programs.ts`, `results.ts`, `subjects.ts`, `teachers.ts`. Page components under `src/app/**/page.tsx` import from these files. No CMS. When updating copy or adding entries (new teacher, subject, program), edit the relevant `src/lib` file — never hardcode into a page component.

**Subject pages are level-scoped with static params.** `src/lib/subjects.ts` defines `Level = "o-level" | "a-level"` plus separate `oLevelSubjects` / `aLevelSubjects` arrays (same `SubjectSummary` shape). The routes `src/app/subjects/o-level/[subject]/page.tsx` and `src/app/subjects/a-level/[subject]/page.tsx` are parallel implementations — each calls `generateStaticParams()` against its own list and calls `notFound()` on a missing slug. Add a subject to the right array in `subjects.ts`; static params pick it up automatically.

---

## Installed Dependencies

### Production
| Package | Version | Status |
|---|---|---|
| `next` | 14.2.35 | Core framework |
| `react` / `react-dom` | ^18 | — |
| `motion` | ^12.42.0 | **Primary animation library** — import as `motion/react` |
| `framer-motion` | ^12.42.0 | **Still in package.json — do not use.** Legacy alias kept by accident; always import from `motion/react` instead. Remove this entry when next touching `package.json`. |
| `clsx` + `tailwind-merge` | latest | Used via `cn()` in `src/lib/utils.ts` |
| `@splinetool/react-spline` | ^4.1.0 | **IN USE** — the 3D hero scene (`splite.tsx` → `spline-hero.tsx`). Lazy-loaded, desktop-only. |
| `@splinetool/runtime` | ^1.12.98 | Spline runtime + WASM (loaded from unpkg CDN at runtime) |
| `lucide-react` | latest | Installed for shadcn Button; magnet icon was removed, currently unused |
| `@radix-ui/react-slot` | latest | `asChild` support in `button.tsx` |
| `class-variance-authority` | latest | `buttonVariants` in `button.tsx` |
| `gsap` | ^3.15.0 | Installed, **unused** — aspirational for future scroll-driven sections |
| `three` | ^0.184.0 | Installed, **unused** |
| `@react-three/fiber` | ^8.18.0 | Installed, **unused** |
| `@react-three/drei` | ^9.122.0 | Installed, **unused** |
| `@react-three/postprocessing` | ^2.19.1 | Installed, **unused** |
| `postprocessing` | ^6.39.1 | Peer dep for above, **unused** |

### Dev
TypeScript ^5, Tailwind CSS ^3.4.1, ESLint 8 with `eslint-config-next`.

---

## Installed Claude Code Skills

| Skill | Scope | Notes |
|---|---|---|
| `impeccable` | **Project-local** — `.claude/skills/impeccable/` | Frontend design/polish skill. Was used during the hero design exploration phase. Now that the hero is finalized, use it for future page builds (contact, footer, subject pages). Invoke with `/impeccable`. |
| All other skills (design-taste-frontend, code-review, etc.) | **Global** — installed to user's global Claude config | Not project-specific. |

The `21st.dev` magic component MCP server is also connected (`mcp__magic__*` tools). It was tried during hero exploration; it's available for building future UI components.

---

## Fonts

Two font systems coexist — use the Fontshare ones (they're what's actually rendered):

| Role | Font | How loaded |
|---|---|---|
| Display / headings | **Clash Display** (600, 700) | `@import` in `globals.css` from Fontshare API |
| Body / UI | **General Sans** (400, 500, 600) | Same Fontshare import |
| Heading CSS var | `--font-heading` | `next/font/google` Space Grotesk in `layout.tsx` (fallback only) |
| Body CSS var | `--font-body` | `next/font/google` Inter in `layout.tsx` (fallback only) |

`globals.css` sets `h1–h6` to `var(--font-heading), "Clash Display", sans-serif` and `body` to `var(--font-body), "General Sans", sans-serif`. The Fontshare fonts load first so they win in practice. Space Grotesk only renders if Fontshare CDN fails.

**The No-Serif Rule:** No serif typeface anywhere, ever.

---

## Design System

See `DESIGN.md` for the full spec with rationale. Summary below.

### Color Palette (Tailwind tokens — `tailwind.config.ts`)

**Active tokens (in use on header + hero):**

| Token | Value | Role |
|---|---|---|
| `paper` | `#FFFFFF` | Background — header and hero share this; no seam |
| `ink` | `#111111` | Primary text, icons, strokes |
| `ink-60` | `rgba(17,17,17,0.6)` | Secondary text, nav links at rest |
| `ink-10` | `rgba(17,17,17,0.1)` | Hairline borders |
| `yellow` | `#F5C518` | **Fill only** — CTA background, glow orbs, logo accent. NEVER use as text color on light surface (contrast ~1.6:1, fails WCAG) |
| `yellow-deep` | `#B98A00` | Accent's text-safe form (~3.3:1) — eyebrow text, focus rings, hover fills |

**Defined but dormant (do not use on active pages yet):**
`void` (#0A0B12), `mist` (#A8AEC2), `mist-bright` (#E7E9F2), `glass` / `glass-border` (rgba), `violet`, `cyan` — these are from the retired dark "Glass Observatory" design direction. `Footer.tsx` still references some; it's excluded from active design scope until rebuilt.

### Typography Scale

- **Display** (Clash Display 700, `clamp(2.25rem, 5vw, 4.5rem)`, leading-tight, -0.01em tracking): hero headline only
- **Headline** (Clash Display 600, 1.5rem): section headings below hero
- **Body** (General Sans 400, 1rem, 1.6 leading): supporting copy, max 65–75ch
- **Label** (General Sans 600, 0.875rem): nav, eyebrow, button labels

### Named Design Rules (do not violate without documenting why)

1. **The One Accent Rule** — yellow (or yellow-deep) is the only accent color on header and hero. No second hue without a written reason.
2. **The Fill-Not-Text Rule** — `yellow` is for backgrounds/fills only. Text, rings, and strokes on light surface must use `yellow-deep`.
3. **The Asymmetry Rule** — the hero is left-aligned text against an off-center visual, not a centered stack. Don't revert to dead-center without a reason.
4. **The Static-Brand-Art Rule** — the crest/lion does not move. Cursor-parallax on an identity element reads as a toy; stillness at scale reads as a statement.
5. **The Glass-Not-Shadow Rule** — lifted surfaces use translucency + blur + hairline border, never a drop shadow.
6. **Anti-Bounce Rule** — never use `animate-bounce` or `animate-ping`. Any looping ambient animation must use smooth `cubic-bezier` easing (ease-in-out or ease-out-quart/quint).
7. **No-Serif Rule** — no serif typeface anywhere.

---

## Motion / Animation Stack

**Primary library: `motion/react`** (the `motion` package, v12). This is the new package name for Framer Motion. Import exclusively from `motion/react` — the legacy `framer-motion` import path must not be used anywhere.

```ts
import { motion, AnimatePresence, useMotionValue, useMotionTemplate, useAnimationFrame, useReducedMotion } from "motion/react";
```

**Also installed but not yet wired up:**
- `gsap` (v3) — installed, unused
- `three` + `@react-three/fiber` + `@react-three/drei` + `@react-three/postprocessing` — installed, unused. 3D is aspirational for later sections; do not add it to the hero.

**`prefers-reduced-motion` pattern used throughout:**
```ts
function prefersReducedMotion() {
  return typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
```
Pass `initial={prefersReducedMotion() ? false : { opacity: 0, y: 12 }}` on entrance motions. `TextEffect` degrades gracefully on its own.

**Installed motion-primitives components** (all in `src/components/ui/`):
- `text-effect.tsx` — word/char-level text reveal with presets (`fade-in-blur`, `fade`, etc.)
- `spotlight.tsx` — radial spotlight effect
- `in-view.tsx` — scroll-triggered entrance
- `dock.tsx` — macOS-style dock (not in active use yet)

---

## Hero: Design History and What Was Tried

The hero went through several distinct directions before landing on the current finalized state. Recording this so the reasoning doesn't get re-litigated.

### Direction 1: Dark "Glass Observatory" (retired)
Initial hero used `void` (#0A0B12) backgrounds, violet/cyan accents, a glass-morphism card cluster with aurora gradients. Fully scrapped when the real Forte Institute brand assets (black-and-yellow heraldic crest) arrived — the brand identity overruled the speculative palette.

### Direction 2: Centered light hero with crest bled off-screen edge (retired)
After switching to a light theme, the first iteration bled the crest off the right edge of the viewport. Felt ungrounded/floating rather than placed. Removed.

### Direction 3: Cursor-parallax on the crest (retired)
The crest had cursor-driven parallax movement. Felt like a UI toy on an identity element. The Static-Brand-Art Rule was written to capture why it was removed: stillness at scale reads as a statement.

### Direction 4: 3D hero element (tried and explicitly rejected for the hero)
Three separate approaches to a 3D hero were explored and abandoned:
- **GSAP ScrollTrigger** — attempted to drive a 3D scene with scroll. Not wired up; the hero doesn't scroll in the traditional sense (it's full-viewport), so ScrollTrigger didn't add value here.
- **Spline** — Spline embeds were trialled as a 3D background. Performance overhead on first paint was unacceptable for a tutoring site targeting mid-range mobile.
- **21st.dev magic components** (`mcp__magic__*`) — trialled for generating animated 3D-adjacent hero components. Output didn't fit the brand register (too generic/SaaS-y).
- **`/impeccable` skill** — used to audit and polish the hero at various stages; it's what surfaced the asymmetry issue and the crest-containment improvement, not a failed attempt.

**Decision (since reversed — see Direction 5):** 3D on the hero was shelved at this point. The `three`/`@react-three/fiber` packages remain installed but unused.

### Direction 5: Spline 3D hero, reinstated and shipped (CURRENT)
The client later explicitly reversed the no-3D decision and asked for the Spline interactive hero. It is now live (`src/components/ui/spline-hero.tsx`). The earlier performance objection is mitigated by: (1) `Spline` is `lazy()` + `Suspense`-wrapped in `splite.tsx`, (2) the scene column is `hidden md:block` — the heavy WASM runtime never loads layout-blocking on mobile, which was the original objection. The 2D `InfiniteGrid` is no longer rendered on the homepage but the file remains in the repo.

This pivot also flipped the homepage to a **dark theme**: black header (`void`), dark hero (`bg-void`), white logo. The Navy & Gold cream/navy palette still governs the light interior pages; the homepage hero is the one dark surface.

---

## Sitemap and Page Build Status

| Route | Status | Priority | Notes |
|---|---|---|---|
| `/` | **COMPLETE** | — | Black header + Spline 3D hero (`spline-hero.tsx`). Dark surface. InfiniteGrid retired but file kept. |
| `/contact` | Scaffold | **High** | Hero CTA + header CTA both link here; unbuilt = broken CTAs |
| `/subjects/o-level` | Scaffold | Medium | Needs subject list UI; data in `subjects.ts` |
| `/subjects/a-level` | Scaffold | Medium | Same |
| `/subjects/o-level/[subject]` | Scaffold | Medium | Static params wired, page body empty |
| `/subjects/a-level/[subject]` | Scaffold | Medium | Same |
| `/recorded-classes` | Scaffold | Medium | Core monetization surface; needs video card UI |
| `/live-classes` | Scaffold | Medium | Needs booking form |
| `/results` | Scaffold | Low | Needs results data + display; data goes in `results.ts` |
| `/about` | Scaffold | Low | — |

---

## Current File Structure

```
forte-institute-website/
├── public/
│   ├── logo.png              # Black lockup — for light surfaces (paper bg)
│   ├── logo-white.png        # White lockup — for dark surfaces (if ever used)
│   └── crest-lion.png        # Lion silhouette only (no card border, no yellow dot)
│                               Isolated via connected-component analysis + chroma-key
│                               from logo.png. 900px wide, transparent background.
├── src/
│   ├── app/
│   │   ├── layout.tsx        # Root layout: fonts, metadata, ErrorBoundary
│   │   ├── globals.css       # Fontshare imports, body/heading font-family, scroll-cue keyframe
│   │   ├── page.tsx          # Home: Header + InfiniteGrid hero + scroll cue only
│   │   ├── about/page.tsx    # Scaffold only ("Coming soon.")
│   │   ├── contact/page.tsx  # Scaffold only
│   │   ├── live-classes/page.tsx    # Scaffold only
│   │   ├── recorded-classes/page.tsx # Scaffold only
│   │   ├── results/page.tsx  # Scaffold only
│   │   └── subjects/
│   │       ├── page.tsx      # Subjects index scaffold
│   │       ├── o-level/
│   │       │   ├── page.tsx                  # O Level subject list
│   │       │   └── [subject]/page.tsx        # Dynamic subject detail
│   │       └── a-level/
│   │           ├── page.tsx                  # A Level subject list
│   │           └── [subject]/page.tsx        # Dynamic subject detail
│   ├── components/
│   │   ├── Header.tsx        # COMPLETE — sticky light header, animated mobile menu
│   │   ├── Footer.tsx        # EXISTS but uses retired dark/violet tokens — do not deploy yet
│   │   ├── ErrorBoundary.tsx # Class-based client error boundary for risky subtrees
│   │   └── ui/
│   │       ├── the-infinite-grid.tsx  # COMPLETE — the hero component (see below)
│   │       ├── text-effect.tsx        # motion-primitives word/char reveal
│   │       ├── spotlight.tsx          # motion-primitives spotlight
│   │       ├── in-view.tsx            # motion-primitives scroll trigger
│   │       └── dock.tsx               # motion-primitives dock (unused)
│   └── lib/
│       ├── utils.ts          # cn() utility (clsx + tailwind-merge)
│       ├── subjects.ts       # oLevelSubjects, aLevelSubjects, Level type
│       ├── about.ts          # placeholder
│       ├── programs.ts       # placeholder
│       ├── results.ts        # placeholder
│       └── teachers.ts       # placeholder
├── .claude/
│   ├── skills/impeccable/    # Project-local Impeccable skill (invoke with /impeccable)
│   ├── settings.local.json   # Local Claude Code settings (not committed)
│   └── launch.json           # Dev server launch config for Claude Code preview tools
├── CLAUDE.md                 # This file
├── DESIGN.md                 # Full design system spec with rationale and named rules
├── tailwind.config.ts        # Color tokens, font families
├── tsconfig.json             # Path alias @/* → src/*
└── package.json
```

---

## Completed Components

### `src/components/Header.tsx` — COMPLETE

**Now a dark header** (changed with the Spline hero pivot): `bg-void/90 backdrop-blur-xl border-b border-glass-border`, logo `src="/logo-white.png"`, nav links `text-mist` → hover `text-paper`, focus rings `ring-yellow ring-offset-void`. The gold "Register Now" CTA (`bg-yellow text-ink`) is unchanged. The bullets below describe the original light header and are kept for reference — the structure (mobile drawer, hamburger morph, reduced-motion handling) is identical; only the color tokens flipped to the dark set.

Original light-header spec (structure still accurate):
- `bg-paper/90 backdrop-blur-xl border-b border-ink-10` — glass-bar effect, no shadow
- Logo: `src="/logo.png"` (black variant), `h-9 w-auto sm:h-10`
- Nav links: `text-ink-60`, hover `text-ink`, hidden below `md`
- CTA "Register Now": `bg-yellow text-ink hover:bg-yellow-deep hover:text-paper active:scale-[0.97]`, hidden below `sm`
- Focus rings everywhere: `ring-yellow-deep ring-offset-paper`
- Mobile hamburger: 44×44px touch target, `border-ink-10`, hidden above `md`
- Hamburger → X morphing via `motion.path` variants with SVG path interpolation
- Mobile drawer: `AnimatePresence` height+opacity entrance/exit, `bg-paper/95 backdrop-blur-xl`
- Nav links stagger in with `delay: 0.05 + index * 0.04`
- All motion respects `useReducedMotion()` hook

Nav links defined at top of file as `navLinks` array — edit there to add/remove items:
```ts
{ href: "/subjects/o-level", label: "O Level" }
{ href: "/subjects/a-level", label: "A Level" }
{ href: "/live-classes", label: "Live Classes" }
{ href: "/recorded-classes", label: "Recorded Classes" }
{ href: "/results", label: "Results" }
```

### `src/components/ui/the-infinite-grid.tsx` — COMPLETE

The hero component. Asymmetric layout: left-aligned text block + contained right crest column.

**Hero copy (finalized):**
- Eyebrow: `"Empowering Minds. Shaping Futures."` — yellow-deep, label size
- Headline (h1): `"Results that speak for themselves."` — ink, display size
- Subhead: institute description copy — ink-60, lg
- CTA: `"Book a Free Session"` → `/contact`

**Layout structure:**
```
Outer div: relative h-full w-full overflow-hidden bg-paper, onMouseMove
  Layer z0-a: static SVG grid at opacity-[0.07] (base texture)
  Layer z0-b: motion.div with radial maskImage reveal (cursor-reactive, brightens near cursor)
  Layer z0-c: two glow orbs (yellow/35 top-right, yellow-deep/25 bottom-left), blur-[120px]
  Layer z10: flex row, max-w-6xl, justify-between gap-12 px-6
    Left: max-w-xl md:max-w-2xl, text-left
      TextEffect eyebrow → TextEffect h1 → TextEffect subhead → motion.div CTA
    Right: hidden lg:block, w-[260px] lg:w-[320px], relative h-full (flex-shrink-0)
      Image: /crest-lion.png, absolute, top-[4%], h-[120%], -translate-x-1/2
             opacity-[0.1], mask-image fading legs bottom 70%→96%
```

**Crest asset (`public/crest-lion.png`):**
- Lion silhouette isolated from logo.png via Node.js + sharp connected-component analysis (bbox 99,93→286,390) + chroma-key yellow removal (R>200 && G>130 && B<110 → alpha=0) + Lanczos3 upscale to 900px
- Does NOT include card border or yellow accent dot from original lockup
- Rendered at opacity 0.1 — art direction, not UI element
- **Does not move.** Cursor-parallax was tried and explicitly removed (see Hero Design History above).
- Fades out toward bottom via `maskImage: "linear-gradient(to bottom, black 70%, transparent 96%)"`
- Visible only at `lg` and above

**Grid animation:**
- `useAnimationFrame` scrolls grid offset at 0.5px/frame on both axes (infinite scroll illusion)
- Skipped when `prefersReducedMotion()` returns true
- Mouse-reactive second grid layer uses `useMotionTemplate` radial gradient as maskImage

**`src/app/page.tsx` — home route:**
```tsx
<Header />
<main className="bg-paper">
  <section className="relative min-h-[calc(100vh-73px)]">
    <div className="absolute inset-0"><InfiniteGrid /></div>
    <div aria-hidden="true" className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-scroll-cue text-xs uppercase tracking-widest text-ink-60 motion-reduce:animate-none">
      Scroll
    </div>
  </section>
</main>
```

`animate-scroll-cue` is a custom keyframe in `globals.css` — smooth cubic-bezier ease-in-out vertical bob, no bounce. Never replace with `animate-bounce`.

---

## Git History (recent)

| Hash | Description |
|---|---|
| `8130242` | Contain crest in right column with proper spacing; replace crest asset (`crest-lion.png` — isolated lion only, no card border) |
| `7d97aeb` | Break centered hero template with asymmetric crest-parallax layout |
| `4ded3c2` | Flip header and hero to a unified light theme |
| `3f8d8eb` | Unify header to dark theme and animate mobile menu |
| `9dce2d3` | Lock hero accent to yellow, add entrance motion, fix bounce easing |
| `498568f` | Strip home page down to header and hero only |
| `932d636` | Add motion library and motion-primitives components |
| `44929fd` | Update hero: brand tagline and single CTA |

---

## Outstanding Tasks (in priority order)

1. **Contact page** — the hero CTA ("Book a Free Session") and header CTA ("Register Now") both link to `/contact`. This page is currently a scaffold. Build a simple contact/booking form. Until this exists, every primary CTA on the site is a dead link.

2. **Footer** — `Footer.tsx` exists but uses retired `void`/`mist`/`violet` dark tokens from the scrapped design direction. Either rebuild it with `paper`/`ink`/`yellow` tokens or delete and start fresh. Add YouTube and Instagram social icon links (explicitly requested by user).

3. **Recorded Classes page** — core monetization surface. Students browse and purchase access to recorded class videos. Needs: subject/level filtering, video cards, purchase gate. Auth (Supabase) and payment (JazzCash/Easypaisa) are future work; for now scaffold the UI.

4. **Live Classes page** — booking form for live sessions.

5. **Results page** — display student results/achievements. Data goes in `src/lib/results.ts`.

6. **Subject pages** — O Level and A Level subject listing and detail pages. Data lives in `src/lib/subjects.ts`.

---

## Known Gotchas

- **`motion/react` not `framer-motion`** — the package is `motion` (v12), imported as `motion/react`. Do not use the old `framer-motion` import path anywhere. Note: `framer-motion` is still listed in `package.json` as a leftover; it should be removed but hasn't been yet.
- **Yellow contrast** — `#F5C518` (yellow) against white is ~1.6:1. It fails WCAG as a text or ring color. Only use it for fills. Use `yellow-deep` (#B98A00, ~3.3:1) wherever the accent becomes a text color, border, or focus ring.
- **Logo variants** — `logo.png` is the black lockup (for light/paper backgrounds). `logo-white.png` is the white lockup (for any future dark surface). Never put the black logo on a dark background or vice versa.
- **Footer.tsx is broken** — it references retired dark-palette tokens and is not rendered anywhere. Do not import it until it's redesigned.
- **`void`/`mist`/`glass-border` are ACTIVE again** — previously documented as retired dark tokens. The Spline hero pivot reactivated them for the black header and dark hero surface. They are no longer dormant. `violet`/`cyan`/`void-100`/`void-200` remain unused.
- **Spline is desktop-only by design** — the scene column in `spline-hero.tsx` is `hidden md:block`. This is deliberate (mobile performance was the original reason 3D was shelved). Do not remove the `hidden md:block` guard. The Spline runtime + WASM stream from `prod.spline.design` and `unpkg.com` at runtime, so the hero needs network on first paint.
- **`@react-three/*` libraries installed but unused** — `three`, `@react-three/fiber`, `@react-three/drei`, `@react-three/postprocessing`, `gsap` are in `package.json` but unused. The 3D hero uses Spline, not react-three-fiber.
- **`crest.png` is deleted** — the file was the old lion crop that included the card border. It's gone. The replacement is `crest-lion.png`. Don't reference `crest.png` anywhere.
- **ESLint: unused `_` destructure** — if destructuring to exclude a prop, use `// eslint-disable-next-line @typescript-eslint/no-unused-vars` on the line above, not a rename trick.
- **`framer-motion` in package.json** — still listed as a dependency alongside `motion`. Not imported anywhere in the codebase, but its presence could confuse bundler tree-shaking. Remove it from `package.json` when next touching dependencies.

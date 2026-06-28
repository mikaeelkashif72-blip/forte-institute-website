# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — start the Next.js dev server (http://localhost:3000)
- `npm run build` — production build
- `npm run start` — run the production build
- `npm run lint` — ESLint (`next/core-web-vitals`, `next/typescript`)

There is no test suite configured in this repo yet.

## Architecture

This is a Next.js 14 App Router site (TypeScript, Tailwind) for "Forte Institute," an O Level / A Level tuition provider. Content is currently placeholder copy throughout — real copy/data has not been written yet.

**Content lives in `src/lib/*.ts`, not in components.** Each page's data is a typed array/object exported from a dedicated lib file (`about.ts`, `programs.ts`, `results.ts`, `subjects.ts`, `teachers.ts`). Page components under `src/app/**/page.tsx` import from these files and render them — there is no CMS or external data source. When updating site copy or adding entries (a new teacher, subject, program), edit the relevant `src/lib` file rather than hardcoding into a page.

**Subject pages are level-scoped and use static params.** `src/lib/subjects.ts` defines a shared `Level` type (`"o-level" | "a-level"`) plus separate `oLevelSubjects` and `aLevelSubjects` arrays of the same `SubjectSummary` shape. The dynamic routes `src/app/subjects/o-level/[subject]/page.tsx` and `src/app/subjects/a-level/[subject]/page.tsx` are parallel implementations (not parameterized by level) — each calls `generateStaticParams()` against its own subject list and looks up the matching slug, calling `notFound()` if absent. Adding a subject means adding it to the right array in `subjects.ts`; the route picks it up automatically via static params.

**Path alias:** `@/*` maps to `src/*` (configured in `tsconfig.json`).

**Fonts:** Loaded once in `src/app/layout.tsx` via `next/font/google` (Space Grotesk for headings, Inter for body) and exposed as CSS variables (`--font-heading`, `--font-body`), consumed in `tailwind.config.ts` under `fontFamily.heading` / `fontFamily.body`.

**3D/animation stack:** `three`, `@react-three/fiber`, `@react-three/drei`, `@react-three/postprocessing`, and `gsap` are installed dependencies but not yet wired into any page — the site is being built out toward immersive 3D/scroll-driven sections. `src/components/ErrorBoundary.tsx` is a class-based client error boundary intended to wrap risky/interactive subtrees (e.g. 3D canvases) with a fallback.

Most pages currently render only a placeholder heading + "Coming soon." — treat existing page bodies as scaffolding to replace, not as a pattern to preserve.

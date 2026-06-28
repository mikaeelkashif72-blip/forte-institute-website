---
target: src/app/page.tsx (home page)
total_score: 27
p0_count: 0
p1_count: 2
timestamp: 2026-06-28T16-17-32Z
slug: src-app-page-tsx
---
## Design Health Score
Total: 27/40 (Acceptable, up from 25/40)
Weak heuristics: Visibility of System Status (2), Flexibility and Efficiency (2), Help and Documentation (2)

## Anti-Patterns Verdict
Previous AI-default tells (cream bg, Space Grotesk+Inter) resolved. detect.mjs still returns zero findings (not tuned for perf/accessibility-focus issues).

## Priority Issues
- [P1] No styled focus-visible states on cards/header/CTAs — violates PRODUCT.md's explicit full-keyboard-navigation requirement.
- [P1] MeshTransmissionMaterial cluster (3 shapes, samples=6, res=512, backside) has no lighter fallback for low-end mobile — primary audience is students on phones.
- [P2] No loading state for hero (dynamic ssr:false canvas + external Fontshare import) — possible blank/unstyled flash.
- [P2] Still zero real imagery anywhere on the page (carried over).

## Persona Red Flags
Casey (mobile): real budget-Android performance risk from transmission material, untested.
Sam (accessibility): default unstyled focus ring against dark background, likely hard to see.

## Minor Observations
H1 dropped explicit "O Level & A Level" wording (now only in subhead). prefers-reduced-motion checked once at mount, not reactive to OS toggle mid-session.

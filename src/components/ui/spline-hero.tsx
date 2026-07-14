"use client";

import { useEffect, useRef, useState } from "react";
import type { Application } from "@splinetool/runtime";
import { useOpenRegistration } from "@/components/RegistrationModalProvider";
import { motion, useReducedMotion } from "motion/react";
import { GraduationCap, Award } from "lucide-react";
import { Card } from "@/components/ui/card";
import { SplineScene } from "@/components/ui/splite";
import { TextEffect } from "@/components/ui/text-effect";
import { MathBg } from "@/components/ui/math-bg";

const HERO_STATS = [
  { icon: GraduationCap, stat: "3,500+", label: "Students Taught" },
  { icon: Award,         stat: "950+",   label: "A* Grades" },
];

const SPLINE_SCENE = "https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode";

// Cap the Spline renderer to 1x device-pixel-ratio. On high-DPI/retina screens
// the scene otherwise renders 4x+ the pixels, which is the dominant GPU cost and
// what makes scroll, nav hover and cursor tracking stutter while the hero is on
// screen. This does NOT touch the render frame rate, so the robot stays fully
// responsive to the cursor (unlike a framerate throttle, which felt sluggish).
// Overriding _getPixelRatio keeps the cap in place across ResizeObserver resizes.
// Must be re-applied after app.play(); all access is wrapped in try/catch.
function capSplineResolution(app: Application) {
  try {
    const internal = app as unknown as {
      dpr?: number;
      _resize?: () => void;
      _getPixelRatio?: () => number;
      _renderer?: { setPixelRatio: (n: number) => void };
    };
    internal._getPixelRatio = () => 1;
    internal.dpr = 1;
    internal._renderer?.setPixelRatio(1);
    internal._resize?.();
  } catch {
    /* runtime internals unavailable — fall back to default rendering */
  }
}

export function SplineHero() {
  const reduce = useReducedMotion();
  const heroRef = useRef<HTMLDivElement>(null);
  const openRegistration = useOpenRegistration();

  // The Spline WebGL scene runs a continuous render loop on the main thread and
  // does not fully stop when scrolled off-screen — which drags the frame rate of
  // the entire page (the O/A Level sections and everything below). Rather than
  // unmounting it (which forces a full reload on scroll-back), we keep the scene
  // mounted and PAUSE its render loop when the hero leaves the viewport via the
  // Spline app's stop()/play() (stop() calls setAnimationLoop(null), fully
  // freeing the main thread → 60fps below the fold). The scene loads exactly once
  // and never reloads. The same observer pauses the MathBg CSS animations.
  const splineApp = useRef<Application | null>(null);
  const heroVisible = useRef(true);
  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        const visible = entry.isIntersecting;
        heroVisible.current = visible;
        const rows = el.querySelectorAll<HTMLElement>(".math-row");
        rows.forEach((row) => {
          row.style.animationPlayState = visible ? "running" : "paused";
        });
        const app = splineApp.current;
        if (app) {
          if (visible) { app.play(); capSplineResolution(app); }
          else app.stop();
        }
      },
      { threshold: 0, rootMargin: "200px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // If the scene finishes loading while the hero is already scrolled off-screen,
  // pause it immediately so it never renders unseen.
  const handleSplineLoad = (app: Application) => {
    splineApp.current = app;
    capSplineResolution(app);
    if (!heroVisible.current) app.stop();
  };

  // The Spline scene column is CSS-hidden on mobile (`hidden md:block`), but CSS
  // display:none does NOT stop React from mounting it — the WebGL runtime would
  // still download and run its render loop on phones, tanking mobile FPS and
  // burning mobile data. Gate the actual mount on a desktop media query so Spline
  // never loads on mobile at all. Defaults to false so SSR/mobile skip it.
  const [isDesktop, setIsDesktop] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const update = () => setIsDesktop(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return (
    <Card ref={heroRef} className="relative h-full w-full overflow-hidden rounded-none border-0 bg-void">
      <MathBg />

      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col-reverse items-center gap-6 px-6 py-10 md:flex-row md:gap-12 md:py-0">
        <div className="flex flex-1 flex-col justify-center text-left">
          <TextEffect
            as="p"
            per="line"
            preset="fade"
            speedReveal={4}
            speedSegment={3}
            className="font-heading text-sm font-bold tracking-wide text-yellow md:text-base"
          >
            O Level, IGCSE & A Level Tuition in Pakistan
          </TextEffect>
          <TextEffect
            as="h1"
            per="line"
            preset="fade"
            delay={0.1}
            speedReveal={4}
            speedSegment={3}
            className="mt-4 text-balance font-heading text-[2rem] font-bold leading-tight tracking-[-0.01em] text-paper sm:text-5xl md:text-6xl"
          >
            O Level & A Level results that speak for themselves.
          </TextEffect>
          <TextEffect
            as="p"
            per="line"
            preset="fade"
            delay={0.22}
            speedReveal={3}
            speedSegment={2}
            className="mt-6 text-balance text-base sm:text-lg text-mist"
          >
            Forte Institute prepares students across Pakistan for Cambridge O Level,
            IGCSE and A Level exams — with live classes, recorded lessons, notes and
            past papers, taught by expert tutors who focus on rigor, not shortcuts.
          </TextEffect>
          <motion.div
            className="mt-9"
            initial={reduce ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            <button
              onClick={() => openRegistration()}
              className="inline-block rounded-xl bg-yellow px-7 py-3.5 text-base font-bold text-ink transition-all duration-200 hover:bg-[#F5C518] hover:scale-[1.03] active:scale-[0.97]"
            >
              Register for Class
            </button>
          </motion.div>

          <motion.div
            className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3"
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            {HERO_STATS.map(({ icon: Icon, stat, label }, i) => (
              <div key={i} className="flex items-center gap-2">
                <Icon className="h-4 w-4 shrink-0 text-yellow" strokeWidth={2} />
                <span className="text-sm font-semibold text-paper">{stat}</span>
                <span className="text-sm text-mist">{label}</span>
                {i < HERO_STATS.length - 1 && (
                  <span className="ml-2 hidden text-glass-border text-mist/30 select-none sm:inline">|</span>
                )}
              </div>
            ))}
          </motion.div>
        </div>

        <div className="hidden h-full min-h-[420px] flex-1 md:block">
          {isDesktop && <SplineScene scene={SPLINE_SCENE} className="h-full w-full" onLoad={handleSplineLoad} />}
        </div>
      </div>
    </Card>
  );
}

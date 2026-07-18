"use client";

import { useEffect, useRef } from "react";
import { useOpenRegistration } from "@/components/RegistrationModalProvider";
import { motion, useReducedMotion } from "motion/react";
import { GraduationCap, Award } from "lucide-react";
import { Card } from "@/components/ui/card";
import { TextEffect } from "@/components/ui/text-effect";
import { MathBg } from "@/components/ui/math-bg";

const HERO_STATS = [
  { icon: GraduationCap, stat: "3,500+", label: "Students Taught" },
  { icon: Award,         stat: "950+",   label: "A* Grades" },
];

export function SplineHero() {
  const reduce = useReducedMotion();
  const heroRef = useRef<HTMLDivElement>(null);
  const openRegistration = useOpenRegistration();

  // Pause the MathBg CSS animations while the hero is off-screen, freeing the
  // compositor for the rest of the page. (The Spline 3D scene that used to
  // live here was removed entirely — it capped scroll at ~33fps site-wide
  // even far below the fold, and every attempt to make it pause/resume
  // cheaply without a visible reset-on-scroll-back glitch failed.)
  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        const rows = el.querySelectorAll<HTMLElement>(".math-row");
        rows.forEach((row) => {
          row.style.animationPlayState = entry.isIntersecting ? "running" : "paused";
        });
      },
      { threshold: 0, rootMargin: "200px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Card ref={heroRef} className="relative h-full w-full overflow-hidden rounded-none border-0 bg-cream">
      <MathBg />

      <div className="relative z-10 mx-auto flex h-full max-w-3xl flex-col justify-center px-6 py-10 text-left md:py-0">
        <TextEffect
          as="p"
          per="line"
          preset="fade"
          speedReveal={4}
          speedSegment={3}
          className="font-heading text-sm font-bold tracking-wide text-gold-deep md:text-base"
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
          className="mt-4 text-balance font-heading text-[2rem] font-bold leading-tight tracking-[-0.01em] text-ink sm:text-5xl md:text-6xl"
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
          className="mt-6 max-w-xl text-balance text-base sm:text-lg text-ink-60"
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
            className="inline-block rounded-xl bg-ink px-7 py-3.5 text-base font-bold text-cream transition-all duration-200 hover:bg-ink/90 hover:scale-[1.03] active:scale-[0.97]"
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
              <Icon className="h-4 w-4 shrink-0 text-gold-deep" strokeWidth={2} />
              <span className="text-sm font-semibold text-ink">{stat}</span>
              <span className="text-sm text-ink-60">{label}</span>
              {i < HERO_STATS.length - 1 && (
                <span className="ml-2 hidden text-ink/20 select-none sm:inline">|</span>
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </Card>
  );
}

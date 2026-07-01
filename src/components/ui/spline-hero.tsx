"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { GraduationCap, Award, Star } from "lucide-react";
import { Card } from "@/components/ui/card";
import { SplineScene } from "@/components/ui/splite";
import { TextEffect } from "@/components/ui/text-effect";
import { MathBg } from "@/components/ui/math-bg";

const HERO_STATS = [
  { icon: GraduationCap, stat: "3,500+", label: "Students Taught" },
  { icon: Award,         stat: "950+",   label: "A* Grades" },
];

const SPLINE_SCENE = "https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode";

export function SplineHero() {
  const reduce = useReducedMotion();

  return (
    <Card className="relative h-full w-full overflow-hidden rounded-none border-0 bg-void">
      <MathBg />

      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col-reverse items-center gap-6 px-6 py-10 md:flex-row md:gap-12 md:py-0">
        {/* Left: copy (gold eyebrow + cream headline read with strong contrast on void) */}
        <div className="flex flex-1 flex-col justify-center text-left">
          <TextEffect
            as="p"
            per="word"
            preset="fade-in-blur"
            className="font-heading text-sm font-bold tracking-wide text-yellow md:text-base"
          >
            O Level, IGCSE &amp; A Level Tuition in Pakistan
          </TextEffect>
          <TextEffect
            as="h1"
            per="word"
            preset="fade-in-blur"
            delay={0.08}
            speedReveal={2.2}
            className="mt-4 text-balance font-heading text-5xl font-bold leading-tight tracking-[-0.01em] text-paper md:text-6xl"
          >
            O Level &amp; A Level results that speak for themselves.
          </TextEffect>
          <TextEffect
            as="p"
            per="word"
            preset="fade"
            delay={0.3}
            speedReveal={3}
            className="mt-6 text-balance text-lg text-mist"
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
            <Link
              href="/contact"
              className="inline-block rounded-full bg-yellow px-7 py-3.5 text-base font-bold text-ink transition-all duration-200 hover:bg-[#F5C518] hover:scale-[1.03] active:scale-[0.97]"
            >
              Book a Free Session
            </Link>
          </motion.div>

          {/* Inline achievement stats */}
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
                  <span className="ml-2 text-glass-border text-mist/30 select-none">|</span>
                )}
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right: interactive 3D scene. Hidden below md — keeps the heavy Spline
            runtime off mid-range mobile, which is why 3D was shelved before. */}
        <div className="hidden h-full min-h-[420px] flex-1 md:block">
          <SplineScene scene={SPLINE_SCENE} className="h-full w-full" />
        </div>
      </div>
    </Card>
  );
}

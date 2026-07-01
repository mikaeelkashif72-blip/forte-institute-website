"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { Card } from "@/components/ui/card";
import { SplineScene } from "@/components/ui/splite";
import { TextEffect } from "@/components/ui/text-effect";
import { MathBg } from "@/components/ui/math-bg";

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
            delay={0.15}
            speedReveal={1.4}
            className="mt-4 text-balance font-heading text-5xl font-bold leading-tight tracking-[-0.01em] text-paper md:text-6xl"
          >
            O Level &amp; A Level results that speak for themselves.
          </TextEffect>
          <TextEffect
            as="p"
            per="word"
            preset="fade"
            delay={0.5}
            speedReveal={2}
            className="mt-6 text-balance text-lg text-mist"
          >
            Forte Institute prepares students across Pakistan for Cambridge O Level,
            IGCSE and A Level exams — with live classes, recorded lessons, notes and
            past papers, taught by expert tutors who focus on rigor, not shortcuts.
          </TextEffect>
          <motion.div
            className="mt-9"
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link
              href="/contact"
              className="inline-block rounded-full bg-yellow px-7 py-3.5 text-base font-bold text-ink transition-all duration-200 hover:bg-[#F5C518] hover:scale-[1.03] active:scale-[0.97]"
            >
              Book a Free Session
            </Link>
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

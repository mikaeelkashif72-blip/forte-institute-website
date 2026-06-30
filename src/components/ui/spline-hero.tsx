"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { Card } from "@/components/ui/card";
import { Spotlight } from "@/components/ui/spotlight-svg";
import { SplineScene } from "@/components/ui/splite";
import { MagnetizeButton } from "@/components/ui/magnetize-button";
import { TextEffect } from "@/components/ui/text-effect";

const SPLINE_SCENE = "https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode";

export function SplineHero() {
  const reduce = useReducedMotion();

  return (
    <Card className="relative h-full w-full overflow-hidden rounded-none border-0 bg-void">
      {/* warm collegiate glow that drifts in on mount */}
      <Spotlight className="-top-40 left-0 md:-top-20 md:left-60" fill="#E8B72E" />

      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col-reverse items-center gap-6 px-6 py-10 md:flex-row md:gap-12 md:py-0">
        {/* Left: copy (gold eyebrow + cream headline read with strong contrast on void) */}
        <div className="flex-1 text-left">
          <TextEffect
            as="p"
            per="word"
            preset="fade-in-blur"
            className="font-heading text-sm font-bold tracking-wide text-yellow md:text-base"
          >
            Empowering Minds. Shaping Futures.
          </TextEffect>
          <TextEffect
            as="h1"
            per="word"
            preset="fade-in-blur"
            delay={0.15}
            speedReveal={1.4}
            className="mt-4 text-balance font-heading text-5xl font-bold leading-tight tracking-[-0.01em] text-paper md:text-6xl"
          >
            Results that speak for themselves.
          </TextEffect>
          <TextEffect
            as="p"
            per="word"
            preset="fade"
            delay={0.5}
            speedReveal={2}
            className="mt-6 max-w-xl text-balance text-lg text-mist"
          >
            Forte Institute prepares students for O and A Level examinations through
            focused, expert-led instruction, built on rigor, not shortcuts.
          </TextEffect>
          <motion.div
            className="mt-9"
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link href="/contact" tabIndex={-1}>
              <MagnetizeButton particleCount={14} attractRadius={50}>
                Book a Free Session
              </MagnetizeButton>
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

"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { motion, useMotionValue, useMotionTemplate, useAnimationFrame } from "motion/react";
import { TextEffect } from "@/components/ui/text-effect";

function prefersReducedMotion() {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

export const InfiniteGrid = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top } = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - left);
    mouseY.set(e.clientY - top);
  };

  const gridOffsetX = useMotionValue(0);
  const gridOffsetY = useMotionValue(0);

  const speedX = 0.5;
  const speedY = 0.5;

  useAnimationFrame(() => {
    if (prefersReducedMotion()) return;
    const currentX = gridOffsetX.get();
    const currentY = gridOffsetY.get();
    gridOffsetX.set((currentX + speedX) % 40);
    gridOffsetY.set((currentY + speedY) % 40);
  });

  const maskImage = useMotionTemplate`radial-gradient(300px circle at ${mouseX}px ${mouseY}px, black, transparent)`;

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className={cn("relative h-full w-full overflow-hidden bg-paper")}
    >
      <div aria-hidden="true" className="absolute inset-0 z-0 opacity-[0.07]">
        <GridPattern offsetX={gridOffsetX} offsetY={gridOffsetY} />
      </div>
      <motion.div
        aria-hidden="true"
        className="absolute inset-0 z-0 opacity-60"
        style={{ maskImage, WebkitMaskImage: maskImage }}
      >
        <GridPattern offsetX={gridOffsetX} offsetY={gridOffsetY} />
      </motion.div>

      <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute right-[-10%] top-[-20%] h-[40%] w-[40%] rounded-full bg-yellow/35 blur-[120px]" />
        <div className="absolute left-[-10%] bottom-[-20%] h-[40%] w-[40%] rounded-full bg-yellow-deep/25 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto flex h-full w-full max-w-6xl items-center justify-between gap-12 px-6">
        <div className="max-w-xl text-left md:max-w-2xl">
          <TextEffect
            as="p"
            per="word"
            preset="fade-in-blur"
            className="font-heading text-sm font-bold tracking-wide text-yellow-deep md:text-base"
          >
            Empowering Minds. Shaping Futures.
          </TextEffect>
          <TextEffect
            as="h1"
            per="word"
            preset="fade-in-blur"
            delay={0.15}
            speedReveal={1.4}
            className="mt-4 text-balance font-heading text-5xl font-bold leading-tight tracking-[-0.01em] text-ink md:text-7xl"
          >
            Results that speak for themselves.
          </TextEffect>
          <TextEffect
            as="p"
            per="word"
            preset="fade"
            delay={0.5}
            speedReveal={2}
            className="mt-6 max-w-xl text-balance text-lg text-ink-60"
          >
            Forte Institute prepares students for O and A Level examinations
            through focused, expert-led instruction, built on rigor, not
            shortcuts.
          </TextEffect>
          <motion.div
            className="mt-9"
            initial={prefersReducedMotion() ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link
              href="/contact"
              className="inline-block rounded-full bg-yellow px-7 py-3 text-sm font-bold text-ink transition-all hover:bg-yellow-deep hover:text-paper active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-deep focus-visible:ring-offset-2 focus-visible:ring-offset-paper"
            >
              Book a Free Session
            </Link>
          </motion.div>
        </div>

        {/* The crest: contained in its own column with real margin on both
            sides, not bled off the edge — head and forepaws stay fully in
            view near the top, legs fade out toward the bottom. Static
            brand art, not a UI element, so it doesn't move. */}
        <div
          aria-hidden="true"
          className="relative hidden h-full w-[260px] flex-shrink-0 lg:block lg:w-[320px]"
        >
          <Image
            src="/crest-lion.png"
            alt=""
            width={900}
            height={1432}
            className="absolute left-1/2 top-[4%] h-[120%] w-auto -translate-x-1/2 object-contain object-top opacity-[0.1]"
            style={{
              maskImage: "linear-gradient(to bottom, black 70%, transparent 96%)",
              WebkitMaskImage: "linear-gradient(to bottom, black 70%, transparent 96%)",
            }}
            priority
          />
        </div>
      </div>
    </div>
  );
};

const GridPattern = ({
  offsetX,
  offsetY,
}: {
  offsetX: ReturnType<typeof useMotionValue<number>>;
  offsetY: ReturnType<typeof useMotionValue<number>>;
}) => {
  return (
    <svg className="h-full w-full">
      <defs>
        <motion.pattern
          id="grid-pattern"
          width="40"
          height="40"
          patternUnits="userSpaceOnUse"
          x={offsetX}
          y={offsetY}
        >
          <path
            d="M 40 0 L 0 0 0 40"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            className="text-ink"
          />
        </motion.pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid-pattern)" />
    </svg>
  );
};

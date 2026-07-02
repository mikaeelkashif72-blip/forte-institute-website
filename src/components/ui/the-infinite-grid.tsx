"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { MagnetizeButton } from "@/components/ui/magnetize-button";
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

      <div className="relative z-10 mx-auto flex h-full w-full max-w-6xl items-center px-6">
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
            <Link href="/contact" tabIndex={-1}>
              <MagnetizeButton particleCount={14} attractRadius={50}>
                Register for Class
              </MagnetizeButton>
            </Link>
          </motion.div>
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

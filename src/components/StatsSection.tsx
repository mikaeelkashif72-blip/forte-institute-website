"use client";

import { useEffect, useRef, useState } from "react";

const STATS = [
  { value: 3500, suffix: "+", label: "Students Taught" },
  { value: 950,  suffix: "+", label: "A* Grades" },
  { value: 98,   suffix: "%", label: "Pass Rate" },
  { value: 25,   suffix: "+", label: "Subjects Covered" },
];

function prefersReducedMotion() {
  return typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function AnimatedStat({ value, suffix, label, index }: {
  value: number;
  suffix: string;
  label: string;
  index: number;
}) {
  const [display, setDisplay] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;

          if (prefersReducedMotion()) {
            setDisplay(value);
            return;
          }

          const duration = 1400;
          const delay = index * 120;
          const startTime = performance.now() + delay;

          const tick = (now: number) => {
            if (now < startTime) { requestAnimationFrame(tick); return; }
            const elapsed = Math.min((now - startTime) / duration, 1);
            // ease-out-quart
            const eased = 1 - Math.pow(1 - elapsed, 4);
            setDisplay(Math.round(eased * value));
            if (elapsed < 1) requestAnimationFrame(tick);
          };

          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [value, index]);

  return (
    <div ref={ref} className="flex flex-col items-center text-center">
      <p className="font-heading text-5xl font-bold text-paper md:text-6xl lg:text-7xl">
        {display.toLocaleString()}
        <span className="text-yellow">{suffix}</span>
      </p>
      <p className="mt-3 text-sm font-medium tracking-wide text-mist md:text-base">
        {label}
      </p>
    </div>
  );
}

export function StatsSection() {
  return (
    <section
      aria-label="Forte Institute achievements"
      className="border-t border-glass-border py-16 md:py-24"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4 md:gap-0">
          {STATS.map((stat, i) => (
            <div key={stat.label} className="flex items-stretch">
              <AnimatedStat
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
                index={i}
              />
              {i < STATS.length - 1 && (
                <div className="mx-auto hidden w-px self-stretch bg-glass-border md:block" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

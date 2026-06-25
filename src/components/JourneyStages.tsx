"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export interface JourneyStage {
  step: string;
  title: string;
  description: string;
}

interface JourneyStagesProps {
  stages: JourneyStage[];
}

export default function JourneyStages({ stages }: JourneyStagesProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const activeIndexRef = useRef(0);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    if (!section) return;

    const total = stages.length;
    const trigger = ScrollTrigger.create({
      trigger: section,
      start: "top top",
      end: `+=${total * 500}`,
      pin: true,
      scrub: true,
      onUpdate: (self) => {
        const idx = Math.min(total - 1, Math.floor(self.progress * total));
        if (idx !== activeIndexRef.current) {
          activeIndexRef.current = idx;
          setActiveIndex(idx);
        }
      },
    });

    return () => trigger.kill();
  }, [stages.length]);

  return (
    <div ref={sectionRef} className="relative mt-12 flex h-screen items-center justify-center px-6">
      {stages.map((stage, index) => (
        <div
          key={stage.step}
          className={`absolute mx-auto max-w-2xl text-center transition-opacity duration-700 ${
            index === activeIndex ? "opacity-100" : "pointer-events-none opacity-0"
          }`}
        >
          <p className="font-heading text-sm font-semibold text-accent-gold">{stage.step}</p>
          <h3 className="mt-3 font-heading text-3xl font-bold text-ink sm:text-4xl">
            {stage.title}
          </h3>
          <p className="mt-4 text-lg text-ink-muted">{stage.description}</p>
        </div>
      ))}
    </div>
  );
}

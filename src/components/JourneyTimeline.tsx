"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollReveal from "./ScrollReveal";

export interface JourneyStage {
  step: string;
  title: string;
  description: string;
}

interface JourneyTimelineProps {
  stages: JourneyStage[];
}

export default function JourneyTimeline({ stages }: JourneyTimelineProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const fillRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const track = trackRef.current;
    const fill = fillRef.current;
    if (!track || !fill) return;

    const trigger = ScrollTrigger.create({
      trigger: track,
      start: "top 70%",
      end: "bottom 60%",
      scrub: true,
      onUpdate: (self) => {
        fill.style.height = `${self.progress * 100}%`;
      },
    });

    return () => trigger.kill();
  }, []);

  return (
    <div ref={trackRef} className="relative mt-12 mx-auto max-w-2xl">
      <div className="absolute left-4 top-0 h-full w-px bg-border" />
      <div
        ref={fillRef}
        className="absolute left-4 top-0 w-px bg-accent"
        style={{ height: "0%" }}
      />
      <div className="flex flex-col gap-12">
        {stages.map((stage, index) => (
          <ScrollReveal key={stage.step} className="relative pl-12">
            <span className="absolute left-4 top-0 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full bg-accent-gold font-heading text-sm font-bold text-background">
              {index + 1}
            </span>
            <h3 className="font-heading text-2xl font-bold text-ink sm:text-3xl">
              {stage.title}
            </h3>
            <p className="mt-2 text-base text-ink-muted">{stage.description}</p>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
}

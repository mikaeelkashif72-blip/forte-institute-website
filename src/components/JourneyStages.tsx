"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Card from "./Card";

export interface JourneyStage {
  step: string;
  title: string;
  description: string;
}

interface JourneyStagesProps {
  stages: JourneyStage[];
}

export default function JourneyStages({ stages }: JourneyStagesProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const cards = containerRef.current?.querySelectorAll<HTMLElement>("[data-journey-card]");
    if (!cards || cards.length === 0) return;

    const triggers = Array.from(cards).map((card, index) =>
      gsap.fromTo(
        card,
        { autoAlpha: 0, y: 32 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.6,
          delay: index * 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        },
      ),
    );

    return () => {
      triggers.forEach((tween) => tween.scrollTrigger?.kill());
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
    >
      {stages.map((stage) => (
        <div key={stage.step} data-journey-card>
          <Card>
            <p className="font-heading text-sm font-semibold text-accent-teal">
              {stage.step}
            </p>
            <h3 className="mt-3 font-heading text-xl font-bold text-ink">
              {stage.title}
            </h3>
            <p className="mt-2 text-sm text-ink-muted">{stage.description}</p>
          </Card>
        </div>
      ))}
    </div>
  );
}

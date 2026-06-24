"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface CountUpProps {
  value: string;
  className?: string;
}

function parseValue(value: string) {
  const match = value.match(/^(\D*)([\d,]+)(\D*)$/);
  if (!match) return null;

  const [, prefix, numStr, suffix] = match;
  return {
    prefix,
    suffix,
    target: parseInt(numStr.replace(/,/g, ""), 10),
    hasComma: numStr.includes(","),
  };
}

export default function CountUp({ value, className = "" }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const el = ref.current;
    const parsed = parseValue(value);
    if (!el || !parsed) return;

    const { prefix, suffix, target, hasComma } = parsed;
    const counter = { val: 0 };

    const tween = gsap.to(counter, {
      val: target,
      duration: 1.4,
      ease: "power1.out",
      scrollTrigger: {
        trigger: el,
        start: "top 85%",
        once: true,
      },
      onUpdate: () => {
        const current = Math.round(counter.val);
        const formatted = hasComma ? current.toLocaleString("en-US") : String(current);
        el.textContent = `${prefix}${formatted}${suffix}`;
      },
    });

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [value]);

  return (
    <span ref={ref} className={className}>
      {value.replace(/[\d,]+/, "0")}
    </span>
  );
}

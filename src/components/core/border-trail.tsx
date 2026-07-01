"use client";

import { CSSProperties } from "react";
import { cn } from "@/lib/utils";

interface BorderTrailProps {
  className?: string;
  size?: number;
  duration?: number;
  delay?: number;
  style?: CSSProperties;
  color?: string;
}

export function BorderTrail({
  className,
  duration = 4,
  delay = 0,
  color = "#F5C518",
}: BorderTrailProps) {
  return (
    <div
        aria-hidden="true"
        className={cn("pointer-events-none absolute inset-[-1px] rounded-[inherit] opacity-0 transition-opacity duration-500 group-hover:opacity-100", className)}
        style={{
          background: `conic-gradient(from var(--border-trail-angle), transparent 75%, ${color} 90%, transparent 100%)`,
          animation: `border-trail-rotate ${duration}s linear ${delay}s infinite`,
          WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
          padding: "1px",
        }}
      />
  );
}

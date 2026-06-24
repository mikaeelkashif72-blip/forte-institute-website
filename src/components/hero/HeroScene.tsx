"use client";

import dynamic from "next/dynamic";
import { Suspense } from "react";
import ErrorBoundary from "@/components/ErrorBoundary";

const ParticleField = dynamic(() => import("./ParticleField"), {
  ssr: false,
});

export default function HeroScene() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10">
      <ErrorBoundary>
        <Suspense fallback={null}>
          <ParticleField />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}

"use client";

import dynamic from "next/dynamic";
import { Suspense, useEffect, useState } from "react";
import ErrorBoundary from "@/components/ErrorBoundary";
import HeroFallback from "./HeroFallback";

const ParticleField = dynamic(() => import("./ParticleField"), {
  ssr: false,
});

const MOBILE_QUERY = "(max-width: 767px)";

export default function HeroScene() {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia(MOBILE_QUERY);
    setIsMobile(mediaQuery.matches);

    const onChange = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mediaQuery.addEventListener("change", onChange);
    return () => mediaQuery.removeEventListener("change", onChange);
  }, []);

  if (isMobile === null) return null;

  if (isMobile) {
    return <HeroFallback />;
  }

  return (
    <div className="pointer-events-none absolute inset-0 -z-10">
      <ErrorBoundary fallback={<HeroFallback />}>
        <Suspense fallback={null}>
          <ParticleField />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}

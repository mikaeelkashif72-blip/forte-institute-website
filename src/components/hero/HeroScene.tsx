"use client";

import dynamic from "next/dynamic";
import { Suspense, useEffect, useState } from "react";
import ErrorBoundary from "@/components/ErrorBoundary";

const GrowthScene = dynamic(() => import("./GrowthScene"), {
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

  if (isMobile) return null;

  return (
    <div className="relative z-0 hidden h-[320px] w-full pointer-events-none sm:h-[380px] md:block md:h-[440px]">
      <ErrorBoundary>
        <Suspense fallback={null}>{isMobile === null ? null : <GrowthScene />}</Suspense>
      </ErrorBoundary>
    </div>
  );
}

"use client";

import dynamic from "next/dynamic";
import { Suspense, useEffect, useState } from "react";
import ErrorBoundary from "@/components/ErrorBoundary";
import HeroFallback from "./HeroFallback";

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

  if (isMobile === null) return null;

  return (
    <>
      <HeroFallback />
      {!isMobile && (
        <div className="pointer-events-none absolute inset-0 -z-10">
          <ErrorBoundary>
            <Suspense fallback={null}>
              <GrowthScene />
            </Suspense>
          </ErrorBoundary>
        </div>
      )}
    </>
  );
}

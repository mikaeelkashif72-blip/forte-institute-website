import Header from "@/components/Header";
import { SplineHero } from "@/components/ui/spline-hero";

export default function Home() {
  return (
    <>
      <Header />
      <main className="bg-void">
        {/* Section 1: immersive 3D hero — one idea, nothing competing for attention */}
        <section className="relative min-h-[640px] h-[calc(100dvh-65px)]">
          <SplineHero />
        </section>
      </main>
    </>
  );
}

import Header from "@/components/Header";
import { SplineHero } from "@/components/ui/spline-hero";
import { OLevelSection } from "@/components/OLevelSection";
import { ALevelSection } from "@/components/ALevelSection";
import { WhyForteSection } from "@/components/WhyForteSection";
import { TeacherSpotlight } from "@/components/TeacherSpotlight";
import { Testimonials } from "@/components/ui/testimonials";

export default function Home() {
  return (
    <>
      {/* Tell the browser to start fetching the Spline scene as early as possible */}
      <link
        rel="preload"
        href="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
        as="fetch"
        crossOrigin="anonymous"
      />
      <Header />
      <main className="bg-void">
        <section className="relative min-h-[640px] h-[calc(100dvh-65px)]">
          <SplineHero />
        </section>
        <OLevelSection />
        <ALevelSection />
        <WhyForteSection />
        <Testimonials />
        <TeacherSpotlight />
      </main>
    </>
  );
}

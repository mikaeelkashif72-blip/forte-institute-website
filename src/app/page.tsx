import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SplineHero } from "@/components/ui/spline-hero";
import { OLevelSection } from "@/components/OLevelSection";
import { ALevelSection } from "@/components/ALevelSection";
import { WhyForteSection } from "@/components/WhyForteSection";
import { TeacherSpotlight } from "@/components/TeacherSpotlight";
import { Testimonials } from "@/components/ui/testimonials";

export default function Home() {
  return (
    <>
      <Header />
      <main className="bg-cream">
        <section className="relative min-h-[640px] h-[calc(100dvh-65px)]">
          <SplineHero />
        </section>
        <OLevelSection />
        <ALevelSection />
        <WhyForteSection />
        <Testimonials />
        <TeacherSpotlight />
      </main>
      <Footer />
    </>
  );
}

import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { OLevelSubjectsGrid } from "@/components/OLevelSubjectsGrid";
import { WhyForteFeaturesSection } from "@/components/WhyForteFeaturesSection";
import { MathBg } from "@/components/ui/math-bg";

export const metadata: Metadata = {
  title: "O Level Classes in Pakistan | Forte Institute",
  description:
    "Cambridge O Level tuition for Physics, Chemistry, Mathematics, Islamiyat, Pakistan Studies and more. In-class and online classes taught by expert tutors. Enrol now.",
};

export default function OLevelSubjectsPage() {
  return (
    <>
      <Header />
      <main className="bg-cream min-h-screen">
        {/* Page hero */}
        <section className="relative border-b border-ink-10 px-6 py-16 md:py-24">
          <MathBg />
          <div className="relative z-10 mx-auto max-w-6xl">
            <p className="mb-3 font-mono text-xs font-semibold uppercase tracking-widest text-sky-deep">
              Cambridge O Level
            </p>
            <h1 className="font-heading text-4xl font-bold text-ink md:text-5xl lg:text-6xl">
              O Level Classes
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-ink-60">
              Expert-led O Level tuition across all Cambridge subjects — available in class and online.
              Small batches, past-paper focus, and tutors who know exactly what examiners look for.
            </p>
            <div className="mt-6 flex flex-wrap gap-4 text-sm text-ink-60">
              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-sky-deep" />
                In-Class (Karachi)
              </span>
              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-sky-deep" />
                Online via Zoom
              </span>
              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-sky-deep" />
                Oct/Nov &amp; May/Jun sessions
              </span>
            </div>
          </div>
        </section>

        {/* Subject grid */}
        <section className="px-6 py-16 md:py-20">
          <div className="mx-auto max-w-6xl">
            <OLevelSubjectsGrid />
          </div>
        </section>

        <WhyForteFeaturesSection level="O Level" />
      </main>
      <Footer />
    </>
  );
}

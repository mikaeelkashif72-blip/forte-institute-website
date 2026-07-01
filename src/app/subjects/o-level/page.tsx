import type { Metadata } from "next";
import Header from "@/components/Header";
import { OLevelSubjectsGrid } from "@/components/OLevelSubjectsGrid";

export const metadata: Metadata = {
  title: "O Level Classes in Pakistan | Forte Institute",
  description:
    "Cambridge O Level tuition for Physics, Chemistry, Mathematics, Islamiyat, Pakistan Studies and more. In-class and online classes taught by expert tutors. Enrol now.",
};

export default function OLevelSubjectsPage() {
  return (
    <>
      <Header />
      <main className="bg-void min-h-screen">
        {/* Page hero */}
        <section className="border-b border-glass-border px-6 py-16 md:py-24">
          <div className="mx-auto max-w-6xl">
            <p className="mb-3 font-mono text-xs font-semibold uppercase tracking-widest text-yellow">
              Cambridge O Level
            </p>
            <h1 className="font-heading text-4xl font-bold text-paper md:text-5xl lg:text-6xl">
              O Level Classes
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-mist">
              Expert-led O Level tuition across all Cambridge subjects — available in class and online.
              Small batches, past-paper focus, and tutors who know exactly what examiners look for.
            </p>
            <div className="mt-6 flex flex-wrap gap-4 text-sm text-mist">
              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-yellow" />
                In-Class (Karachi)
              </span>
              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-yellow" />
                Online via Zoom
              </span>
              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-yellow" />
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
      </main>
    </>
  );
}

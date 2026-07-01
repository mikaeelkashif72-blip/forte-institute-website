import type { Metadata } from "next";
import Header from "@/components/Header";
import { ALevelSubjectsGrid } from "@/components/ALevelSubjectsGrid";
import { MathBg } from "@/components/ui/math-bg";

export const metadata: Metadata = {
  title: "A Level Classes in Pakistan | Forte Institute",
  description:
    "Cambridge A Level tuition in Pakistan for Physics, Chemistry, Mathematics, Economics and more. Expert-led in-class and online lessons in Karachi with a proven track record of A* results.",
};

export default function ALevelSubjectsPage() {
  return (
    <>
      <Header />
      <main className="bg-void min-h-screen">
        {/* Page hero */}
        <section className="relative border-b border-glass-border px-6 py-16 md:py-24">
          <MathBg />
          <div className="relative z-10 mx-auto max-w-6xl">
            <p className="mb-3 font-mono text-xs font-semibold uppercase tracking-widest text-yellow">
              Cambridge A Level
            </p>
            <h1 className="font-heading text-4xl font-bold text-paper md:text-5xl lg:text-6xl">
              A Level Classes
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-mist">
              Rigorous A Level tuition across all Cambridge subjects — taught by
              specialist tutors who understand exactly what top grades require.
              Small groups, structured past-paper practice, and full syllabus coverage.
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
            <ALevelSubjectsGrid />
          </div>
        </section>
      </main>
    </>
  );
}

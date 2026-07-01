import type { Metadata } from "next";
import Header from "@/components/Header";
import { RecordedClassesGrid } from "@/components/RecordedClassesGrid";
import { MathBg } from "@/components/ui/math-bg";

export const metadata: Metadata = {
  title: "Recorded Classes | Cambridge O Level & IGCSE | Forte Institute",
  description:
    "Buy Cambridge O Level and IGCSE recorded video lectures in Pakistan. Complete courses for Urdu, Islamiyat and Pakistan Studies — lifetime access, past paper walkthroughs, and expert tuition.",
};

export default function RecordedClassesPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-void">
        {/* Hero */}
        <section className="relative border-b border-glass-border px-6 py-16 md:py-24">
          <MathBg />
          <div className="relative z-10 mx-auto max-w-6xl">
            <p className="mb-3 font-mono text-xs font-semibold uppercase tracking-widest text-yellow">
              Recorded Lectures
            </p>
            <h1 className="font-heading text-4xl font-bold text-paper md:text-5xl lg:text-6xl">
              Learn at your own pace.
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-mist">
              Expert-taught Cambridge O Level and IGCSE video lectures — available
              instantly, watch as many times as you need, and keep access forever.
              Structured topic by topic, with full past paper walkthroughs.
            </p>
            <div className="mt-6 flex flex-wrap gap-4 text-sm text-mist">
              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-yellow" />
                Lifetime access
              </span>
              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-yellow" />
                Past paper walkthroughs included
              </span>
              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-yellow" />
                O Level &amp; IGCSE syllabus
              </span>
            </div>
          </div>
        </section>

        {/* Course grid */}
        <section className="px-6 py-16 md:py-20">
          <div className="mx-auto max-w-6xl">
            <RecordedClassesGrid />
          </div>
        </section>
      </main>
    </>
  );
}

import dynamic from "next/dynamic";
import Link from "next/link";
import Header from "@/components/Header";
import ErrorBoundary from "@/components/ErrorBoundary";
import { resultStats } from "@/lib/results";

const HeroScene = dynamic(() => import("@/components/HeroScene"), { ssr: false });

const levelChoices = [
  {
    href: "/subjects/o-level",
    title: "O Level",
    description: "Cambridge O Level subjects, notes, and structured teaching.",
  },
  {
    href: "/subjects/a-level",
    title: "A Level",
    description: "Cambridge A Level subjects, notes, and structured teaching.",
  },
];

export default function Home() {
  return (
    <>
      <Header />
      <main className="bg-void">
        {/* Section 1: immersive hero — one idea, nothing competing for attention */}
        <section className="relative flex min-h-[calc(100vh-73px)] items-center overflow-hidden">
          <div className="absolute inset-0">
            <ErrorBoundary fallback={null}>
              <HeroScene />
            </ErrorBoundary>
          </div>

          <div className="relative mx-auto w-full max-w-4xl px-6 text-center">
            <h1 className="font-heading text-5xl font-bold leading-tight text-mist-bright md:text-7xl">
              Cambridge tuition built for results.
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-lg text-mist">
              Notes, past papers, and structured teaching for every O Level and
              A Level subject.
            </p>
          </div>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-xs uppercase tracking-widest text-mist">
            Scroll
          </div>
        </section>

        {/* Section 2: the one decision that matters — pick a level */}
        <section className="border-t border-glass-border px-6 py-24">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-center font-heading text-3xl font-bold text-mist-bright md:text-4xl">
              Pick your level
            </h2>

            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {levelChoices.map((choice) => (
                <Link
                  key={choice.href}
                  href={choice.href}
                  className="group relative overflow-hidden rounded-2xl border border-glass-border bg-glass p-10 backdrop-blur-xl transition-all hover:border-violet-bright/60 hover:bg-white/[0.08] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-bright"
                >
                  <h3 className="font-heading text-4xl font-bold text-mist-bright">
                    {choice.title}
                  </h3>
                  <p className="mt-3 max-w-sm text-mist">{choice.description}</p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-cyan-bright group-hover:text-violet-bright">
                    Browse subjects
                    <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3: proof */}
        <section className="border-t border-glass-border px-6 py-20">
          <div className="mx-auto flex max-w-5xl flex-wrap justify-center gap-12 text-center">
            {resultStats.map((stat) => (
              <div key={stat.label}>
                <p className="font-heading text-4xl font-bold text-mist-bright">{stat.value}</p>
                <p className="mt-1 text-sm text-mist">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}

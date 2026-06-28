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
    description: "Browse O Level subjects, notes, and resources.",
  },
  {
    href: "/subjects/a-level",
    title: "A Level",
    description: "Browse A Level subjects, notes, and resources.",
  },
];

export default function Home() {
  return (
    <>
      <Header />
      <main className="relative overflow-hidden bg-void">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-72 opacity-50 sm:right-0 sm:left-auto sm:h-full sm:w-3/5 sm:opacity-90">
          <ErrorBoundary fallback={null}>
            <HeroScene />
          </ErrorBoundary>
        </div>

        <div className="relative mx-auto max-w-6xl px-6 py-20">
          <h1 className="max-w-2xl font-heading text-4xl font-bold text-mist-bright md:text-5xl">
            Cambridge O Level &amp; A Level tuition that gets results.
          </h1>
          <p className="mt-4 max-w-xl text-mist">
            Notes, past papers, and structured teaching for every subject &mdash;
            pick your level to get started.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 sm:max-w-xl">
            {levelChoices.map((choice) => (
              <Link
                key={choice.href}
                href={choice.href}
                className="group rounded-2xl border border-glass-border bg-glass p-6 backdrop-blur-xl transition-colors hover:border-violet-bright/60"
              >
                <h2 className="font-heading text-2xl font-bold text-mist-bright">
                  {choice.title}
                </h2>
                <p className="mt-2 text-sm text-mist">{choice.description}</p>
                <span className="mt-4 inline-block text-sm font-semibold text-cyan-bright group-hover:text-violet-bright">
                  Browse subjects &rarr;
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-14 flex flex-wrap gap-8 border-t border-glass-border pt-8">
            {resultStats.map((stat) => (
              <div key={stat.label}>
                <p className="font-heading text-3xl font-bold text-mist-bright">{stat.value}</p>
                <p className="text-sm text-mist">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}

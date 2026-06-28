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
      <main className="relative overflow-hidden bg-cream">
        <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/2 opacity-70 lg:block">
          <ErrorBoundary fallback={null}>
            <HeroScene />
          </ErrorBoundary>
        </div>

        <div className="relative mx-auto max-w-6xl px-6 py-20">
          <h1 className="max-w-2xl font-heading text-4xl font-bold text-ink md:text-5xl">
            Cambridge O Level &amp; A Level tuition that gets results.
          </h1>
          <p className="mt-4 max-w-xl text-ink-400">
            Notes, past papers, and structured teaching for every subject &mdash;
            pick your level to get started.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 sm:max-w-xl">
            {levelChoices.map((choice) => (
              <Link
                key={choice.href}
                href={choice.href}
                className="group rounded-lg border border-ink-100 bg-cream-100 p-6 transition-colors hover:border-accent"
              >
                <h2 className="font-heading text-2xl font-bold text-ink">
                  {choice.title}
                </h2>
                <p className="mt-2 text-sm text-ink-400">{choice.description}</p>
                <span className="mt-4 inline-block text-sm font-semibold text-accent-dark group-hover:text-accent">
                  Browse subjects &rarr;
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-14 flex flex-wrap gap-8 border-t border-ink-100 pt-8">
            {resultStats.map((stat) => (
              <div key={stat.label}>
                <p className="font-heading text-3xl font-bold text-ink">{stat.value}</p>
                <p className="text-sm text-ink-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}

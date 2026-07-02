"use client";

import Link from "next/link";
import { FadeUp } from "@/components/ui/fade-up";

const FEATURED = [
  { slug: "islamiyat",        name: "Islamiyat",             code: "2058"        },
  { slug: "pakistan-studies", name: "Pakistan Studies",      code: "2059"        },
  { slug: "urdu",             name: "Urdu",                  code: "3247 / 3248" },
  { slug: "mathematics",      name: "Mathematics",           code: "4024"        },
  { slug: "english",          name: "English Language",      code: "1123"        },
  { slug: "physics",          name: "Physics",               code: "5054"        },
];

function SubjectCard({ name, slug, code }: { name: string; slug: string; code: string }) {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-white/10 p-[1px] transition-all duration-200 hover:-translate-y-1.5 hover:bg-white/40 hover:shadow-[0_0_28px_rgba(255,255,255,0.12)]">
      <div className="relative flex flex-col rounded-[15px] bg-void p-6">
        <h3 className="font-heading text-lg font-bold text-paper">
          {name} <span className="font-mono text-sm font-normal text-mist">({code})</span>
        </h3>
        <p className="mt-1 text-sm font-semibold text-yellow">In Class &amp; Online</p>
        <div className="my-4 border-t border-glass-border" />
        <Link
          href="/contact"
          className="mt-auto block rounded-xl bg-yellow py-2.5 text-center text-sm font-bold text-ink transition-all duration-200 hover:bg-[#F5C518] hover:scale-[1.03] active:scale-[0.97]"
        >
          Register for Class →
        </Link>
      </div>
    </div>
  );
}

export function OLevelSection() {
  return (
    <section className="border-t border-glass-border pt-20 pb-10 md:pt-28 md:pb-12">
      <div className="mx-auto max-w-6xl px-6">
        <FadeUp className="mb-12">
          <h2 className="font-heading text-4xl font-bold text-paper md:text-5xl">
            O Level Classes
          </h2>
          <p className="mt-3 max-w-xl text-base text-mist">
            Expert-led classes for every Cambridge O Level subject — available in class
            and online, taught by tutors who know exactly what examiners look for.
          </p>
        </FadeUp>

        <FadeUp delay={0.1}>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {FEATURED.map((subject) => (
            <SubjectCard key={subject.slug} {...subject} />
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/subjects/o-level"
            className="inline-flex items-center gap-2 rounded-full border border-glass-border px-6 py-2.5 text-sm font-semibold text-mist transition-all duration-200 hover:border-white/30 hover:text-paper"
          >
            Explore All O Level Classes →
          </Link>
        </div>
        </FadeUp>
      </div>
    </section>
  );
}

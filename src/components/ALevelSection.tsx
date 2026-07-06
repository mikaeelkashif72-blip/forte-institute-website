"use client";

import Link from "next/link";
import { FadeUp } from "@/components/ui/fade-up";
import { useOpenRegistration } from "@/components/RegistrationModalProvider";

const FEATURED = [
  { slug: "mathematics",         name: "Mathematics",        code: "9709" },
  { slug: "physics",             name: "Physics",            code: "9702" },
  { slug: "computer-science",    name: "Computer Science",   code: "9618" },
  { slug: "chemistry",           name: "Chemistry",          code: "9701" },
  { slug: "economics",           name: "Economics",          code: "9708" },
  { slug: "business-studies",    name: "Business",           code: "9609" },
];

function SubjectCard({ name, slug, code }: { name: string; slug: string; code: string }) {
  const openRegistration = useOpenRegistration();
  return (
    <div className="relative overflow-hidden rounded-2xl bg-white/10 p-[1px] transition-all duration-200 hover:-translate-y-1.5 hover:bg-white/40 hover:shadow-[0_0_28px_rgba(255,255,255,0.12)]">
      <div className="relative flex flex-col rounded-[15px] bg-void p-6">
        <h3 className="font-heading text-lg font-bold text-paper">
          {name} <span className="font-mono text-sm font-normal text-mist">({code})</span>
        </h3>
        <p className="mt-1 text-sm font-semibold text-yellow">In Class &amp; Online</p>
        <div className="my-4 border-t border-glass-border" />
        <button
          onClick={() => openRegistration()}
          className="mt-auto block w-full rounded-xl bg-yellow py-2.5 text-center text-sm font-bold text-ink transition-all duration-200 hover:bg-[#F5C518] hover:scale-[1.03] active:scale-[0.97]"
        >
          Register for Class →
        </button>
      </div>
    </div>
  );
}

export function ALevelSection() {
  return (
    <section className="pt-10 pb-16 md:pt-12 md:pb-28">
      <div className="mx-auto max-w-6xl px-6">
        <FadeUp className="mb-10 md:mb-12">
          <h2 className="font-heading text-3xl font-bold text-paper sm:text-4xl md:text-5xl">
            A Level Classes
          </h2>
          <p className="mt-3 max-w-xl text-base text-mist">
            Specialist A Level tuition for every Cambridge subject — rigorous,
            exam-focused, and taught by tutors who know exactly what top grades require.
          </p>
        </FadeUp>

        <FadeUp delay={0.1}>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          {FEATURED.map((subject, idx) => (
            <div key={subject.slug} className={idx >= 3 ? "hidden sm:block" : ""}>
              <SubjectCard {...subject} />
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/subjects/a-level"
            className="inline-flex items-center gap-2 rounded-full border border-glass-border px-6 py-2.5 text-sm font-semibold text-mist transition-all duration-200 hover:border-white/30 hover:text-paper"
          >
            Explore All A Level Classes →
          </Link>
        </div>
        </FadeUp>
      </div>
    </section>
  );
}

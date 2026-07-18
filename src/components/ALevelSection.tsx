"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { FadeUp } from "@/components/ui/fade-up";
import { useOpenRegistration } from "@/components/RegistrationModalProvider";
import { getSubjectColor, type SubjectColor } from "@/lib/subjects";

// Literal class strings (not template-composed) so Tailwind's content
// scanner picks them up.
const PILL_THEME: Record<SubjectColor, { pill: string; text: string; ring: string }> = {
  gold: { pill: "bg-gold text-gold-deep", text: "text-gold-deep", ring: "focus-within:ring-gold-deep" },
  sky: { pill: "bg-sky text-sky-deep", text: "text-sky-deep", ring: "focus-within:ring-sky-deep" },
  violet: { pill: "bg-violet text-violet-deep", text: "text-violet-deep", ring: "focus-within:ring-violet-deep" },
  sage: { pill: "bg-sage text-sage-deep", text: "text-sage-deep", ring: "focus-within:ring-sage-deep" },
  coral: { pill: "bg-coral text-coral-deep", text: "text-coral-deep", ring: "focus-within:ring-coral-deep" },
};

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
  const href = `/subjects/a-level/${slug}`;
  const theme = PILL_THEME[getSubjectColor(slug)];

  return (
    <motion.div
      whileHover={{ y: -6, transition: { duration: 0.2, ease: [0.16, 1, 0.3, 1] } }}
      className={`group relative overflow-hidden rounded-2xl bg-white border border-ink-10 hover:shadow-[0_8px_30px_rgba(14,31,75,0.10)] focus-within:ring-2 ${theme.ring} focus-within:ring-offset-2 focus-within:ring-offset-violet`}
    >
      <div className="relative flex flex-col p-6">
        <span className={`mb-3 inline-flex w-fit items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-bold ${theme.pill}`}>
          <span className="h-1.5 w-1.5 rounded-full bg-current" aria-hidden="true" />
          A Level
        </span>
        <h3 className="font-heading text-lg font-bold text-ink">
          {name} <span className="font-mono text-sm font-normal text-ink-60">({code})</span>
        </h3>
        <p className={`mt-1 text-sm font-semibold ${theme.text}`}>In Class &amp; Online</p>
        <div className="my-4 border-t border-ink-10" />
        {/* Stretched link — navigates on the first tap/click across the whole card */}
        <Link
          href={href}
          aria-label={`View ${name} details`}
          className="absolute inset-0 z-0 rounded-2xl focus:outline-none"
        />
        <button
          onClick={() => openRegistration()}
          className="relative z-10 mt-auto block w-full rounded-xl bg-ink py-2.5 text-center text-sm font-bold text-cream transition-all duration-200 hover:bg-ink/90 hover:scale-[1.03] active:scale-[0.97]"
        >
          Register for Class →
        </button>
      </div>
    </motion.div>
  );
}

export function ALevelSection() {
  return (
    <section className="bg-violet pt-14 pb-20 md:pt-12 md:pb-28">
      <div className="mx-auto max-w-6xl px-6">
        <FadeUp className="mb-12 md:mb-12">
          <h2 className="font-heading text-3xl font-bold text-ink sm:text-4xl md:text-5xl">
            A Level Classes
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-ink/70">
            Specialist A Level tuition for every Cambridge subject — rigorous,
            exam-focused, and taught by tutors who know exactly what top grades require.
          </p>
        </FadeUp>

        <FadeUp delay={0.1}>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
          {FEATURED.map((subject, idx) => (
            <div key={subject.slug} className={idx >= 3 ? "hidden sm:block" : ""}>
              <SubjectCard {...subject} />
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/subjects/a-level"
            className="inline-flex items-center gap-2 rounded-full border border-ink-10 px-6 py-2.5 text-sm font-semibold text-ink-60 transition-all duration-200 hover:border-ink/30 hover:text-ink"
          >
            Explore All A Level Classes →
          </Link>
        </div>
        </FadeUp>
      </div>
    </section>
  );
}

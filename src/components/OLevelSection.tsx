"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { FadeUp } from "@/components/ui/fade-up";
import { useOpenRegistration } from "@/components/RegistrationModalProvider";

const FEATURED = [
  { slug: "islamiyat",        name: "Islamiyat",             code: "2058"        },
  { slug: "pakistan-studies", name: "Pakistan Studies",      code: "2059"        },
  { slug: "urdu",             name: "Urdu",                  code: "3247 / 3248" },
  { slug: "mathematics",      name: "Mathematics",           code: "4024"        },
  { slug: "english",          name: "English Language",      code: "1123"        },
  { slug: "physics",          name: "Physics",               code: "5054"        },
];

function SubjectCard({ name, slug, code }: { name: string; slug: string; code: string }) {
  const openRegistration = useOpenRegistration();
  const href = `/subjects/o-level/${slug}`;

  return (
    <motion.div
      whileHover={{ y: -6, transition: { duration: 0.2, ease: [0.16, 1, 0.3, 1] } }}
      className="group relative overflow-hidden rounded-2xl bg-white border border-ink-10 transition-shadow duration-200 hover:shadow-[0_8px_30px_rgba(14,31,75,0.10)] focus-within:ring-2 focus-within:ring-sky-deep focus-within:ring-offset-2 focus-within:ring-offset-sky"
    >
      <div className="relative flex flex-col p-6">
        <h3 className="font-heading text-lg font-bold text-ink">
          {name} <span className="font-mono text-sm font-normal text-ink-60">({code})</span>
        </h3>
        <p className="mt-1 text-sm font-semibold text-sky-deep">In Class &amp; Online</p>
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

export function OLevelSection() {
  return (
    <section className="bg-sky pt-20 pb-14 md:pt-28 md:pb-12">
      <div className="mx-auto max-w-6xl px-6">
        <FadeUp className="mb-12 md:mb-12">
          <h2 className="font-heading text-3xl font-bold text-ink sm:text-4xl md:text-5xl">
            O Level Classes
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-ink/70">
            Expert-led classes for every Cambridge O Level subject — available in class
            and online, taught by tutors who know exactly what examiners look for.
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
            href="/subjects/o-level"
            className="inline-flex items-center gap-2 rounded-full border border-ink-10 px-6 py-2.5 text-sm font-semibold text-ink-60 transition-all duration-200 hover:border-ink/30 hover:text-ink"
          >
            Explore All O Level Classes →
          </Link>
        </div>
        </FadeUp>
      </div>
    </section>
  );
}

"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { aLevelSubjects } from "@/lib/subjects";
import { useOpenRegistration } from "@/components/RegistrationModalProvider";

function SubjectCard({
  name,
  slug,
  code,
  index,
}: {
  name: string;
  slug: string;
  code?: string;
  index: number;
}) {
  const openRegistration = useOpenRegistration();
  const href = `/subjects/a-level/${slug}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -6, transition: { duration: 0.2, ease: [0.16, 1, 0.3, 1] } }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.3, delay: index * 0.03, ease: [0.16, 1, 0.3, 1] }}
      className="group relative overflow-hidden rounded-2xl bg-white border border-ink-10 transition-shadow duration-200 hover:shadow-[0_8px_30px_rgba(14,31,75,0.10)] focus-within:ring-2 focus-within:ring-violet-deep focus-within:ring-offset-2 focus-within:ring-offset-cream"
    >
      <div className="relative flex flex-col gap-4 p-6">
        <h2 className="font-heading text-xl font-bold text-ink">
          {name}
        </h2>
        {code && (
          <p className="font-mono text-xs text-ink-60">A Level: {code}</p>
        )}
        <p className="text-sm font-semibold text-violet-deep">In Class &amp; Online</p>
        <div className="border-t border-ink-10" />
        {/* Stretched link — navigates on the first tap/click across the whole card */}
        <Link
          href={href}
          aria-label={`View ${name} details`}
          className="absolute inset-0 z-0 rounded-2xl focus:outline-none"
        />
        <button
          onClick={() => openRegistration()}
          className="relative z-10 block w-full rounded-xl bg-ink py-3 text-center text-sm font-bold text-cream transition-all duration-200 hover:bg-ink/90 hover:scale-[1.03] active:scale-[0.97]"
        >
          Register for Class →
        </button>
      </div>
    </motion.div>
  );
}

export function ALevelSubjectsGrid() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {aLevelSubjects.map((subject, i) => (
        <SubjectCard
          key={subject.slug}
          name={subject.name}
          slug={subject.slug}
          code={subject.code}
          index={i}
        />
      ))}
    </div>
  );
}

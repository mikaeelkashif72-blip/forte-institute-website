"use client";

import { useRouter } from "next/navigation";
import { motion } from "motion/react";
import { oLevelSubjects } from "@/lib/subjects";
import { useOpenRegistration } from "@/components/RegistrationModalProvider";

function SubjectCard({
  name,
  slug,
  code,
  igcseCode,
  index,
}: {
  name: string;
  slug: string;
  code?: string;
  igcseCode?: string;
  index: number;
}) {
  const openRegistration = useOpenRegistration();
  const router = useRouter();
  const href = `/subjects/o-level/${slug}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -6, transition: { duration: 0.2, ease: [0.16, 1, 0.3, 1] } }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.3, delay: index * 0.03, ease: [0.16, 1, 0.3, 1] }}
      onClick={() => router.push(href)}
      role="link"
      tabIndex={0}
      onKeyDown={(e) => { if (e.key === "Enter") router.push(href); }}
      className="relative cursor-pointer overflow-hidden rounded-2xl bg-white/10 p-[1px] transition-colors duration-200 hover:bg-white/40 hover:shadow-[0_0_28px_rgba(255,255,255,0.12)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow focus-visible:ring-offset-2 focus-visible:ring-offset-void"
    >
      <div className="relative flex flex-col gap-4 rounded-[15px] bg-void p-6">
        {/* Subject name + codes */}
        <h2 className="font-heading text-xl font-bold text-paper">
          {name}
        </h2>
        <div className="flex flex-wrap gap-2">
          {code && (
            <span className="font-mono text-xs text-mist">O Level: {code}</span>
          )}
          {igcseCode && (
            <span className="font-mono text-xs text-mist/60">· IGCSE: {igcseCode}</span>
          )}
        </div>

        {/* Format */}
        <p className="text-sm font-semibold text-yellow">In Class &amp; Online</p>

        {/* Divider */}
        <div className="border-t border-glass-border" />

        {/* CTA */}
        <button
          onClick={(e) => { e.stopPropagation(); openRegistration(); }}
          className="block w-full rounded-xl bg-yellow py-3 text-center text-sm font-bold text-ink transition-all duration-200 hover:bg-[#F5C518] hover:scale-[1.03] active:scale-[0.97]"
        >
          Register for Class →
        </button>
      </div>
    </motion.div>
  );
}

export function OLevelSubjectsGrid() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {oLevelSubjects.map((subject, i) => (
        <SubjectCard
          key={subject.slug}
          name={subject.name}
          slug={subject.slug}
          code={subject.code}
          igcseCode={subject.igcseCode}
          index={i}
        />
      ))}
    </div>
  );
}

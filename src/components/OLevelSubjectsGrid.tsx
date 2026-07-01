"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { oLevelSubjects } from "@/lib/subjects";

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
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.3, delay: index * 0.03, ease: [0.16, 1, 0.3, 1] }}
      className="relative overflow-hidden rounded-2xl bg-white/10 p-[1px] transition-all duration-300 hover:bg-yellow/50 hover:shadow-[0_0_28px_rgba(245,197,24,0.18)]"
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
        <Link
          href="/contact"
          className="block rounded-xl bg-yellow py-3 text-center text-sm font-bold text-ink transition-all duration-200 hover:bg-[#F5C518] hover:scale-[1.02] active:scale-[0.97]"
        >
          Register for Class →
        </Link>
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

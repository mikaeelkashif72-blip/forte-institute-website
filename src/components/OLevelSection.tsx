"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { Spotlight } from "@/components/core/spotlight";
const FEATURED = [
  { slug: "islamiyat",        name: "Islamiyat",             code: "2058"        },
  { slug: "pakistan-studies", name: "Pakistan Studies",      code: "2059"        },
  { slug: "urdu",             name: "Urdu",                  code: "3247 / 3248" },
  { slug: "mathematics",      name: "Mathematics",           code: "4024"        },
  { slug: "english",          name: "English Language",      code: "1123"        },
  { slug: "physics",          name: "Physics",               code: "5054"        },
];

function SubjectCard({
  name, slug, code, index,
}: { name: string; slug: string; code: string; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.4, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      // Outer wrapper: p-[1px] creates the border; Spotlight illuminates it from behind
      className="relative overflow-hidden rounded-2xl bg-white/10 p-[1px]"
    >
      <Spotlight
        className="from-yellow via-yellow/60 to-transparent blur-2xl"
        size={200}
      />
      {/* Inner card — covers all but the 1px border */}
      <div className="relative flex flex-col rounded-[15px] bg-void p-6">
        {/* Subject name + code */}
        <h3 className="font-heading text-lg font-bold text-paper">
          {name} <span className="font-mono text-sm font-normal text-mist">({code})</span>
        </h3>

        {/* Format */}
        <p className="mt-1 text-sm font-semibold text-yellow">In Class &amp; Online</p>

        {/* Divider */}
        <div className="my-4 border-t border-glass-border" />

        {/* CTA */}
        <Link
          href="/contact"
          className="mt-auto block rounded-xl bg-yellow py-2.5 text-center text-sm font-bold text-ink transition-all duration-200 hover:scale-[1.02] active:scale-[0.97]"
        >
          Register for Class →
        </Link>
      </div>
    </motion.div>
  );
}

export function OLevelSection() {
  return (
    <section className="border-t border-glass-border py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12"
        >
          <h2 className="font-heading text-4xl font-bold text-paper md:text-5xl">
            O Level Classes
          </h2>
          <p className="mt-3 max-w-xl text-base text-mist">
            Expert-led classes for every Cambridge O Level subject — available in class
            and online, taught by tutors who know exactly what examiners look for.
          </p>
        </motion.div>

        {/* 3 featured subject cards */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {FEATURED.map((subject, i) => (
            <SubjectCard key={subject.slug} {...subject} index={i} />
          ))}
        </div>

        {/* Explore all */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="mt-10 text-center"
        >
          <Link
            href="/subjects/o-level"
            className="inline-flex items-center gap-2 rounded-full border border-glass-border px-6 py-2.5 text-sm font-semibold text-mist transition-all duration-200 hover:border-white/30 hover:text-paper"
          >
            Explore All O Level Classes →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

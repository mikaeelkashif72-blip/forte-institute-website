"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "motion/react";
import { teachers, type Teacher } from "@/lib/teachers";
import { FadeUp } from "@/components/ui/fade-up";

const ASPECT = "aspect-[3/4]";

function TeacherCard({ teacher }: { teacher: Teacher }) {
  const [imgError, setImgError] = useState(false);
  const initials = teacher.name
    .split(" ")
    .filter((w) => /^[A-Za-z]/.test(w))
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  const aspect = ASPECT;

  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
      className={`group relative overflow-hidden rounded-2xl transition-colors duration-200 hover:shadow-[0_0_28px_rgba(255,255,255,0.12)] ${aspect}`}
    >
      {/* Placeholder bg — visible when photo missing */}
      <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-b from-white/[0.06] via-white/[0.03] to-void">
        {imgError && (
          <span className="font-heading text-5xl font-bold text-white/15">
            {initials}
          </span>
        )}
      </div>

      {/* Photo */}
      {!imgError && (
        <Image
          src={teacher.photo}
          alt={`${teacher.name} — ${teacher.subject} tutor at Forte Institute`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
          onError={() => setImgError(true)}
        />
      )}

      {/* Brand tint — ties faces to the yellow palette */}
      <div className="pointer-events-none absolute inset-0 bg-yellow/[0.07] mix-blend-overlay" />

      {/* Hover glow ring */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/10 transition-all duration-300 group-hover:ring-yellow/35 group-hover:shadow-[inset_0_0_0_1px_rgba(245,197,24,0.35),0_0_36px_rgba(245,197,24,0.12)]" />

      {/* Bottom gradient + name */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent px-5 pb-6 pt-20">
        <p className="font-heading text-lg font-bold leading-tight text-paper">
          {teacher.name}
        </p>
        <p className="mt-1 text-sm text-mist">{teacher.subject}</p>
      </div>
    </motion.div>
  );
}

export function TeacherSpotlight() {
  return (
    <section className="border-t border-glass-border px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <FadeUp>
          <h2 className="font-heading mb-10 text-3xl font-bold text-paper md:mb-14 md:text-4xl lg:text-5xl">
            The people behind the results.
          </h2>
        </FadeUp>

        <div className="grid grid-cols-1 items-end gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {teachers.map((teacher) => (
            <TeacherCard key={teacher.name} teacher={teacher} />
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import { useState } from "react";
import { teachers, type Teacher } from "@/lib/teachers";
import { FadeUp } from "@/components/ui/fade-up";

const ASPECT = "aspect-[3/4]";

// Pastel rotation for photo-missing placeholders/avatars, cycling per teacher index.
const PASTELS = [
  { bg: "bg-gold", deep: "text-gold-deep" },
  { bg: "bg-sky", deep: "text-sky-deep" },
  { bg: "bg-violet", deep: "text-violet-deep" },
];

function useInitials(name: string) {
  return name
    .split(" ")
    .filter((w) => /^[A-Za-z]/.test(w))
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

// Compact horizontal row for mobile — a full-width 3:4 portrait card per
// teacher was oversized for a phone screen (huge card, lots of scroll for
// just 3 people). A small-photo + name/subject row is the native mobile
// pattern here and lets all three teachers sit in view with minimal scroll.
function TeacherRow({ teacher, index }: { teacher: Teacher; index: number }) {
  const [imgError, setImgError] = useState(false);
  const initials = useInitials(teacher.name);
  const pastel = PASTELS[index % PASTELS.length];

  return (
    <div className="flex items-center gap-4 rounded-xl border border-ink-10 bg-white p-3 transition-colors duration-150 active:bg-cream">
      <div className={`relative h-14 w-14 shrink-0 overflow-hidden rounded-full ${pastel.bg}`}>
        {imgError ? (
          <div className="flex h-full w-full items-center justify-center">
            <span className={`font-heading text-sm font-bold ${pastel.deep}`}>{initials}</span>
          </div>
        ) : (
          <Image
            src={teacher.photo}
            alt={`${teacher.name} — ${teacher.subject} tutor at Forte Institute`}
            fill
            sizes="56px"
            className="object-cover"
            onError={() => setImgError(true)}
          />
        )}
      </div>
      <div className="min-w-0">
        <p className="truncate font-heading text-sm font-bold text-ink">{teacher.name}</p>
        <p className="mt-0.5 truncate text-xs text-ink-60">{teacher.subject}</p>
      </div>
    </div>
  );
}

function TeacherCard({ teacher, index }: { teacher: Teacher; index: number }) {
  const [imgError, setImgError] = useState(false);
  const initials = useInitials(teacher.name);
  const pastel = PASTELS[index % PASTELS.length];

  const aspect = ASPECT;

  return (
    <div
      className={`group relative overflow-hidden rounded-2xl transition-transform duration-200 [transform:translateZ(0)] hover:-translate-y-1.5 hover:shadow-[0_8px_30px_rgba(14,31,75,0.10)] ${aspect}`}
    >
      {/* Placeholder bg — visible when photo missing */}
      <div className={`absolute inset-0 flex items-center justify-center ${pastel.bg}`}>
        {imgError && (
          <span className={`font-heading text-5xl font-bold ${pastel.deep}`}>
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

      {/* Bottom gradient + name — photos are dark, so the scrim + white text stays */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent px-5 pb-6 pt-20">
        <p className="font-heading text-lg font-bold leading-tight text-white">
          {teacher.name}
        </p>
        <p className="mt-1 text-sm text-white/70">{teacher.subject}</p>
      </div>
    </div>
  );
}

export function TeacherSpotlight() {
  return (
    <section className="bg-cream px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <FadeUp>
          <h2 className="font-heading mb-4 text-3xl font-bold text-ink md:text-4xl lg:text-5xl">
            The people behind the results.
          </h2>
          <p className="mb-10 max-w-2xl text-base leading-relaxed text-ink-60 md:mb-14">
            Every tutor at Forte Institute is a Cambridge specialist — not a generalist who covers everything. Our Islamiyat, Pakistan Studies and Urdu teachers bring subject-level depth and a proven track record of A* grades across O Level and IGCSE examinations in Pakistan.
          </p>
        </FadeUp>

        {/* Mobile: compact rows */}
        <div className="flex flex-col gap-2.5 sm:hidden">
          {teachers.map((teacher, i) => (
            <TeacherRow key={teacher.name} teacher={teacher} index={i} />
          ))}
        </div>

        {/* Tablet/desktop: portrait card grid */}
        <div className="hidden sm:grid sm:grid-cols-2 sm:items-end sm:gap-4 lg:grid-cols-3">
          {teachers.map((teacher, i) => (
            <TeacherCard key={teacher.name} teacher={teacher} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

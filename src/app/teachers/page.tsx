"use client";

import { useState } from "react";
import Section from "@/components/Section";
import TeacherCard from "@/components/TeacherCard";
import Modal from "@/components/Modal";
import ScrollReveal from "@/components/ScrollReveal";
import { teachers, type Teacher } from "@/lib/teachers";

function getInitials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

export default function TeachersPage() {
  const [selected, setSelected] = useState<Teacher | null>(null);

  return (
    <>
      <Section className="pt-24 sm:pt-32">
        <h1 className="text-4xl font-bold text-ink sm:text-5xl">Our Teachers</h1>
        <p className="mt-4 max-w-2xl text-ink-muted">
          Placeholder text introducing the experienced teachers at Forte
          Institute. Click on a teacher to read their full bio.
        </p>
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {teachers.map((teacher, index) => (
            <ScrollReveal key={teacher.slug} delay={(index % 6) * 0.08}>
              <TeacherCard teacher={teacher} onSelect={setSelected} />
            </ScrollReveal>
          ))}
        </div>
      </Section>

      <Modal open={selected !== null} onClose={() => setSelected(null)}>
        {selected && (
          <>
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-background font-heading text-xl font-bold text-accent">
              {getInitials(selected.name)}
            </div>
            <h2 className="mt-5 font-heading text-2xl font-bold text-ink">
              {selected.name}
            </h2>
            <p className="mt-1 text-sm text-ink-muted">{selected.qualification}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {selected.subjects.map((subject) => (
                <span
                  key={subject}
                  className="rounded-full border border-accent-gold/40 px-3 py-1 text-xs font-medium text-accent-gold"
                >
                  {subject}
                </span>
              ))}
            </div>
            <p className="mt-6 text-sm text-ink-muted">{selected.bio}</p>
          </>
        )}
      </Modal>
    </>
  );
}

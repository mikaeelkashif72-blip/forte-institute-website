"use client";

import Card from "./Card";
import type { Teacher } from "@/lib/teachers";

function getInitials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

interface TeacherCardProps {
  teacher: Teacher;
  onSelect: (teacher: Teacher) => void;
}

export default function TeacherCard({ teacher, onSelect }: TeacherCardProps) {
  return (
    <button
      type="button"
      onClick={() => onSelect(teacher)}
      className="block w-full text-left"
    >
      <Card className="h-full hover:border-accent-terracotta/40">
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-background font-heading text-xl font-bold text-accent">
          {getInitials(teacher.name)}
        </div>
        <h3 className="mt-5 font-heading text-xl font-bold text-ink">{teacher.name}</h3>
        <p className="mt-1 text-sm text-ink-muted">{teacher.qualification}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {teacher.subjects.map((subject) => (
            <span
              key={subject}
              className="rounded-full border border-accent-terracotta/30 px-3 py-1 text-xs font-medium text-accent-terracotta"
            >
              {subject}
            </span>
          ))}
        </div>
      </Card>
    </button>
  );
}

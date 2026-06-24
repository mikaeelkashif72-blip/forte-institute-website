import Link from "next/link";
import Card from "./Card";
import ScrollReveal from "./ScrollReveal";
import type { Level, SubjectSummary } from "@/lib/subjects";

interface SubjectGridProps {
  level: Level;
  subjects: SubjectSummary[];
}

export default function SubjectGrid({ level, subjects }: SubjectGridProps) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {subjects.map((subject, index) => (
        <ScrollReveal key={subject.slug} delay={(index % 6) * 0.06}>
          <Link href={`/subjects/${level}/${subject.slug}`} className="block">
            <Card className="h-full hover:border-accent/40">
              <h3 className="font-heading text-xl font-bold text-ink">{subject.name}</h3>
              <span className="mt-4 inline-block text-sm font-semibold text-accent">
                View details &rarr;
              </span>
            </Card>
          </Link>
        </ScrollReveal>
      ))}
    </div>
  );
}

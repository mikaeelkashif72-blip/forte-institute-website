import Link from "next/link";
import Section from "@/components/Section";
import Card from "@/components/Card";

const levels = [
  {
    href: "/subjects/o-level",
    title: "O Level",
    description:
      "Placeholder text describing our comprehensive O Level subject offerings and approach.",
  },
  {
    href: "/subjects/a-level",
    title: "A Level",
    description:
      "Placeholder text describing our in-depth A Level subject offerings and approach.",
  },
];

export default function SubjectsPage() {
  return (
    <Section className="pt-24 sm:pt-32">
      <h1 className="text-4xl font-bold text-ink sm:text-5xl">Subjects</h1>
      <p className="mt-4 max-w-2xl text-ink-muted">
        Placeholder text inviting students to choose their level and explore
        the subjects we teach.
      </p>
      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
        {levels.map((level) => (
          <Link key={level.href} href={level.href} className="block">
            <Card className="h-full p-10 hover:border-accent/40">
              <h2 className="font-heading text-3xl font-bold text-ink">
                {level.title}
              </h2>
              <p className="mt-4 text-ink-muted">{level.description}</p>
              <span className="mt-6 inline-block text-sm font-semibold text-accent-teal">
                View subjects &rarr;
              </span>
            </Card>
          </Link>
        ))}
      </div>
    </Section>
  );
}

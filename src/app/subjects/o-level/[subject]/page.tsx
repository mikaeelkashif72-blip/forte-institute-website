import { notFound } from "next/navigation";
import Section from "@/components/Section";
import Card from "@/components/Card";
import Button from "@/components/Button";
import ScrollReveal from "@/components/ScrollReveal";
import { getSubjectDetail, oLevelSubjects, levelLabels } from "@/lib/subjects";

export function generateStaticParams() {
  return oLevelSubjects.map((subject) => ({ subject: subject.slug }));
}

export default function OLevelSubjectDetailPage({
  params,
}: {
  params: { subject: string };
}) {
  const exists = oLevelSubjects.some((s) => s.slug === params.subject);
  if (!exists) notFound();

  const subject = getSubjectDetail("o-level", params.subject);

  return (
    <>
      <Section className="pt-24 sm:pt-32">
        <ScrollReveal>
          <p className="font-heading text-sm font-semibold text-accent-terracotta">
            {levelLabels["o-level"]}
          </p>
          <h1 className="mt-2 text-4xl font-bold text-ink sm:text-5xl">{subject.name}</h1>
          <p className="mt-2 text-sm text-ink-muted">Syllabus: {subject.syllabusCode}</p>
          <p className="mt-6 max-w-2xl text-ink-muted">{subject.overview}</p>
          <div className="mt-10">
            <Button href="/contact" variant="primary">
              Enroll Now
            </Button>
          </div>
        </ScrollReveal>
      </Section>

      <Section surface>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <ScrollReveal className="lg:col-span-2">
            <Card>
              <h2 className="font-heading text-xl font-bold text-ink">Syllabus Topics</h2>
              <ul className="mt-4 space-y-2 text-sm text-ink-muted">
                {subject.topics.map((topic) => (
                  <li key={topic} className="flex gap-2">
                    <span className="text-accent">&bull;</span>
                    {topic}
                  </li>
                ))}
              </ul>
            </Card>
          </ScrollReveal>
          <div className="flex flex-col gap-6">
            <ScrollReveal delay={0.08}>
              <Card>
                <h2 className="font-heading text-xl font-bold text-ink">Teacher</h2>
                <p className="mt-3 text-sm text-ink-muted">{subject.teacher}</p>
              </Card>
            </ScrollReveal>
            <ScrollReveal delay={0.16}>
              <Card>
                <h2 className="font-heading text-xl font-bold text-ink">Format</h2>
                <p className="mt-3 text-sm text-ink-muted">{subject.format}</p>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </Section>
    </>
  );
}

import Section from "@/components/Section";
import Card from "@/components/Card";
import Button from "@/components/Button";
import ScrollReveal from "@/components/ScrollReveal";
import { programs } from "@/lib/programs";

export default function ProgramsPage() {
  return (
    <Section className="pt-24 sm:pt-32">
      <h1 className="text-4xl font-bold text-ink sm:text-5xl">Programs</h1>
      <p className="mt-4 max-w-2xl text-ink-muted">
        Placeholder text introducing the different ways students can learn
        with Forte Institute.
      </p>
      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
        {programs.map((program, index) => (
          <ScrollReveal key={program.slug} delay={index * 0.08} className="h-full">
            <Card className="flex h-full flex-col">
              <h2 className="font-heading text-2xl font-bold text-ink">{program.title}</h2>
              <p className="mt-3 text-sm text-ink-muted">{program.description}</p>
              <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-accent">
                {program.format}
              </p>
              <div className="mt-6 flex flex-1 items-end justify-between gap-4">
                <p className="text-sm text-ink-muted">{program.pricing}</p>
                <Button href="/contact" variant="primary">
                  Enquire Now
                </Button>
              </div>
            </Card>
          </ScrollReveal>
        ))}
      </div>
    </Section>
  );
}

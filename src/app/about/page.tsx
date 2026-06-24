import Section from "@/components/Section";
import Card from "@/components/Card";
import ScrollReveal from "@/components/ScrollReveal";
import { whyForteReasons } from "@/lib/about";

export default function AboutPage() {
  return (
    <>
      <Section className="pt-24 sm:pt-32">
        <ScrollReveal>
          <h1 className="text-4xl font-bold text-ink sm:text-5xl">Our Story</h1>
          <p className="mt-6 max-w-2xl text-ink-muted">
            Placeholder text telling the founding story of Forte Institute —
            why it was started, the gap in academic support it set out to fill,
            and how it has grown into the institute it is today.
          </p>
          <p className="mt-4 max-w-2xl text-ink-muted">
            Placeholder text continuing the founding story with a focus on the
            founders&apos; background and the values they built the institute
            around.
          </p>
        </ScrollReveal>
      </Section>

      <Section surface>
        <ScrollReveal>
          <h2 className="text-3xl font-bold text-ink sm:text-4xl">Our Mission</h2>
          <p className="mt-6 max-w-2xl text-lg text-ink-muted">
            Placeholder mission statement describing Forte Institute&apos;s
            commitment to helping every O Level and A Level student reach their
            full academic potential through personalized, results-driven
            tuition.
          </p>
        </ScrollReveal>
      </Section>

      <Section>
        <ScrollReveal>
          <h2 className="text-3xl font-bold text-ink sm:text-4xl">Why Forte</h2>
          <p className="mt-4 max-w-2xl text-ink-muted">
            Placeholder text introducing the reasons students and parents
            choose Forte Institute.
          </p>
        </ScrollReveal>
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {whyForteReasons.map((reason, index) => (
            <ScrollReveal key={reason.title} delay={index * 0.08}>
              <Card>
                <span className="text-3xl">{reason.icon}</span>
                <h3 className="mt-4 font-heading text-lg font-bold text-ink">
                  {reason.title}
                </h3>
                <p className="mt-2 text-sm text-ink-muted">{reason.description}</p>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </Section>
    </>
  );
}

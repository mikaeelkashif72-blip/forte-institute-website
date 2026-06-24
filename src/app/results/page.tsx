import Section from "@/components/Section";
import Card from "@/components/Card";
import ScrollReveal from "@/components/ScrollReveal";
import CountUp from "@/components/CountUp";
import { resultStats, gradeDistribution, successStories } from "@/lib/results";

export default function ResultsPage() {
  return (
    <>
      <Section className="pt-24 sm:pt-32">
        <h1 className="text-4xl font-bold text-ink sm:text-5xl">Results</h1>
        <p className="mt-4 max-w-2xl text-ink-muted">
          Placeholder text introducing Forte Institute&apos;s track record of
          academic results across O Level and A Level subjects.
        </p>
        <div className="mt-12 grid grid-cols-1 gap-8 text-center sm:grid-cols-3">
          {resultStats.map((stat, index) => (
            <ScrollReveal key={stat.label} delay={index * 0.08}>
              <CountUp
                value={stat.value}
                className="block font-heading text-3xl font-bold text-accent sm:text-4xl"
              />
              <p className="mt-2 text-sm text-ink-muted">{stat.label}</p>
            </ScrollReveal>
          ))}
        </div>
      </Section>

      <Section surface>
        <ScrollReveal>
          <h2 className="text-3xl font-bold text-ink sm:text-4xl">Grade Distribution</h2>
          <p className="mt-4 max-w-2xl text-ink-muted">
            Placeholder text describing the spread of final grades achieved by
            our students last year.
          </p>
        </ScrollReveal>
        <div className="mt-12 space-y-5">
          {gradeDistribution.map((item, index) => (
            <ScrollReveal key={item.grade} delay={index * 0.06}>
              <div className="flex items-baseline justify-between text-sm">
                <span className="font-heading font-semibold text-ink">{item.grade}</span>
                <span className="text-ink-muted">{item.percentage}%</span>
              </div>
              <div className="mt-2 h-3 w-full overflow-hidden rounded-full bg-background">
                <div
                  className="h-full rounded-full bg-accent"
                  style={{ width: `${item.percentage}%` }}
                />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Section>

      <Section>
        <ScrollReveal>
          <h2 className="text-3xl font-bold text-ink sm:text-4xl">Success Stories</h2>
          <p className="mt-4 max-w-2xl text-ink-muted">
            Placeholder text introducing a few of the students who improved
            their grades with Forte Institute.
          </p>
        </ScrollReveal>
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {successStories.map((story, index) => (
            <ScrollReveal key={story.name} delay={(index % 4) * 0.08}>
              <Card>
                <div className="flex items-center justify-between">
                  <h3 className="font-heading text-lg font-bold text-ink">{story.name}</h3>
                  <div className="flex items-center gap-2 text-sm font-semibold">
                    <span className="text-ink-muted">{story.before}</span>
                    <span className="text-accent-terracotta">&rarr;</span>
                    <span className="text-accent">{story.after}</span>
                  </div>
                </div>
                <p className="mt-1 text-xs text-ink-muted">{story.subject}</p>
                <p className="mt-4 text-sm text-ink-muted">&ldquo;{story.quote}&rdquo;</p>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </Section>
    </>
  );
}

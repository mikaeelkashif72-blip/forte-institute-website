import Section from "@/components/Section";
import Card from "@/components/Card";
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
          {resultStats.map((stat) => (
            <div key={stat.label}>
              <p className="font-heading text-3xl font-bold text-accent sm:text-4xl">
                {stat.value}
              </p>
              <p className="mt-2 text-sm text-ink-muted">{stat.label}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section surface>
        <h2 className="text-3xl font-bold text-ink sm:text-4xl">Grade Distribution</h2>
        <p className="mt-4 max-w-2xl text-ink-muted">
          Placeholder text describing the spread of final grades achieved by
          our students last year.
        </p>
        <div className="mt-12 space-y-5">
          {gradeDistribution.map((item) => (
            <div key={item.grade}>
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
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <h2 className="text-3xl font-bold text-ink sm:text-4xl">Success Stories</h2>
        <p className="mt-4 max-w-2xl text-ink-muted">
          Placeholder text introducing a few of the students who improved
          their grades with Forte Institute.
        </p>
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {successStories.map((story) => (
            <Card key={story.name}>
              <div className="flex items-center justify-between">
                <h3 className="font-heading text-lg font-bold text-ink">{story.name}</h3>
                <div className="flex items-center gap-2 text-sm font-semibold">
                  <span className="text-ink-muted">{story.before}</span>
                  <span className="text-accent-teal">&rarr;</span>
                  <span className="text-accent">{story.after}</span>
                </div>
              </div>
              <p className="mt-1 text-xs text-ink-muted">{story.subject}</p>
              <p className="mt-4 text-sm text-ink-muted">&ldquo;{story.quote}&rdquo;</p>
            </Card>
          ))}
        </div>
      </Section>
    </>
  );
}

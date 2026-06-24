import Card from "./Card";
import ScrollReveal from "./ScrollReveal";

export interface JourneyStage {
  step: string;
  title: string;
  description: string;
}

interface JourneyStagesProps {
  stages: JourneyStage[];
}

export default function JourneyStages({ stages }: JourneyStagesProps) {
  return (
    <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {stages.map((stage, index) => (
        <ScrollReveal key={stage.step} delay={index * 0.08}>
          <Card>
            <p className="font-heading text-sm font-semibold text-accent-terracotta">
              {stage.step}
            </p>
            <h3 className="mt-3 font-heading text-xl font-bold text-ink">
              {stage.title}
            </h3>
            <p className="mt-2 text-sm text-ink-muted">{stage.description}</p>
          </Card>
        </ScrollReveal>
      ))}
    </div>
  );
}

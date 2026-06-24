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
    <div className="mt-12 flex flex-col gap-16 sm:gap-24">
      {stages.map((stage) => (
        <ScrollReveal key={stage.step} className="mx-auto max-w-2xl text-center">
          <p className="font-heading text-sm font-semibold text-accent-gold">{stage.step}</p>
          <h3 className="mt-3 font-heading text-3xl font-bold text-ink sm:text-4xl">
            {stage.title}
          </h3>
          <p className="mt-4 text-lg text-ink-muted">{stage.description}</p>
        </ScrollReveal>
      ))}
    </div>
  );
}

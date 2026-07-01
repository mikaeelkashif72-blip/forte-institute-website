import { GraduationCap, Users, BookOpen } from "lucide-react";

const FEATURES = [
  {
    icon: GraduationCap,
    title: "Expert Cambridge Faculty",
    body: "Every tutor teaches exclusively Cambridge O Level, IGCSE and A Level — no generalists. Our faculty combines deep subject knowledge with a clear understanding of what Cambridge examiners actually reward.",
  },
  {
    icon: Users,
    title: "Small Batches, Real Attention",
    body: "Batches are kept deliberately small so every student gets direct feedback, targeted practice, and the kind of individual attention that large coaching centres simply cannot offer.",
  },
  {
    icon: BookOpen,
    title: "Exam-Focused from Day One",
    body: "Every session is built around the Cambridge syllabus — key concepts, examiner expectations, and structured past-paper practice. Students leave each class knowing exactly how to answer, not just what to study.",
  },
];

interface Props {
  level: "O Level" | "A Level";
}

export function WhyForteFeaturesSection({ level }: Props) {
  return (
    <section className="border-t border-glass-border px-6 py-16 md:py-24">
      <div className="mx-auto max-w-6xl">

        {/* Heading */}
        <div className="mb-12 text-center">
          <h2 className="font-heading text-3xl font-bold text-paper md:text-4xl">
            Why students choose Forte for {level}
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-base text-mist">
            Cambridge-qualified tutors, small groups, and a proven record of A* results —
            everything you expect from Pakistan&apos;s most dedicated {level} institute.
          </p>
        </div>

        {/* 3-column feature cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {FEATURES.map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="relative overflow-hidden rounded-2xl bg-white/5 p-[1px]"
            >
              <div className="flex h-full flex-col rounded-[15px] bg-void p-7">
                {/* Icon in a subtle yellow-tinted circle */}
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-yellow/10">
                  <Icon className="h-6 w-6 text-yellow" strokeWidth={1.5} />
                </div>
                <h3 className="font-heading text-lg font-bold text-paper">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-mist">{body}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

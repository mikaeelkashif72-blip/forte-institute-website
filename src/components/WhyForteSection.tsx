import { FadeUp } from "@/components/ui/fade-up";

const REASONS = [
  {
    number: "01",
    title: "Cambridge-Specialist Tutors",
    body: "Every tutor at Forte Institute teaches exclusively O Level, IGCSE and A Level subjects. No generalists — just deep Cambridge syllabus expertise and examiners who know exactly what top grades require.",
  },
  {
    number: "02",
    title: "Consistent A* Results",
    body: "Over 950 A* grades and counting. Our students consistently outperform national averages across Mathematics, Sciences, Business and Humanities at both O Level and A Level.",
  },
  {
    number: "03",
    title: "In-Class & Online Across Pakistan",
    body: "Whether you're in Karachi, Lahore, Islamabad or anywhere else, you can join live sessions in-class or online with the same experienced faculty — no compromise on quality.",
  },
  {
    number: "04",
    title: "Complete Cambridge Resources",
    body: "Past papers, topic notes, model answers and recorded lessons — everything a Cambridge O Level, IGCSE or A Level student needs to walk into their exam fully prepared.",
  },
];

export function WhyForteSection() {
  return (
    <section className="border-t border-glass-border py-16 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <FadeUp className="mb-12 md:mb-16 max-w-2xl">
          <p className="mb-3 text-sm font-bold tracking-wide text-yellow">
            Why Forte Institute
          </p>
          <h2 className="font-heading text-3xl font-bold leading-tight text-paper sm:text-4xl md:text-5xl">
            The best choice for O Level &amp; A Level in Pakistan.
          </h2>
          <p className="mt-4 text-base text-mist">
            Thousands of students across Pakistan trust Forte Institute to prepare
            them for Cambridge exams — here&apos;s why.
          </p>
        </FadeUp>

        <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:gap-x-12 sm:gap-y-12">
          {REASONS.map(({ number, title, body }, i) => (
            <FadeUp key={number} delay={i * 0.08}>
              <div className="flex flex-col gap-2 sm:flex-row sm:gap-5">
                <span className="select-none font-mono text-xl font-bold leading-none text-yellow/30 sm:text-3xl">
                  {number}
                </span>
                <div>
                  <h3 className="font-heading text-sm font-bold text-paper sm:text-lg md:text-xl">{title}</h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-mist sm:mt-2 sm:text-base">{body}</p>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

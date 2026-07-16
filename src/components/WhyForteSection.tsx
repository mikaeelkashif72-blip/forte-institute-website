import { FadeUp } from "@/components/ui/fade-up";

const REASONS = [
  {
    number: "01",
    title: "Cambridge-Specialist Tutors",
    body: "Every tutor at Forte Institute teaches exclusively O Level, IGCSE and A Level subjects. No generalists — just deep Cambridge syllabus expertise and examiners who know exactly what top grades require.",
    bg: "bg-gold",
    deep: "text-gold-deep",
  },
  {
    number: "02",
    title: "Consistent A* Results",
    body: "Over 950 A* grades and counting. Our students consistently outperform national averages across Mathematics, Sciences, Business and Humanities at both O Level and A Level.",
    bg: "bg-sky",
    deep: "text-sky-deep",
  },
  {
    number: "03",
    title: "In-Class & Online Across Pakistan",
    body: "Whether you're in Karachi, Lahore, Islamabad or anywhere else, you can join live sessions in-class or online with the same experienced faculty — no compromise on quality.",
    bg: "bg-violet",
    deep: "text-violet-deep",
  },
  {
    number: "04",
    title: "Complete Cambridge Resources",
    body: "Past papers, topic notes, model answers and recorded lessons — everything a Cambridge O Level, IGCSE or A Level student needs to walk into their exam fully prepared.",
    bg: "bg-sage",
    deep: "text-sage-deep",
  },
];

export function WhyForteSection() {
  return (
    <section className="bg-cream py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <FadeUp className="mb-14 md:mb-16 max-w-2xl">
          <p className="mb-3 text-sm font-bold tracking-wide text-gold-deep">
            Why Forte Institute
          </p>
          <h2 className="font-heading text-3xl font-bold leading-tight text-ink sm:text-4xl md:text-5xl">
            The best choice for O Level &amp; A Level in Pakistan.
          </h2>
          <p className="mt-4 text-base text-ink-60">
            Thousands of students across Pakistan trust Forte Institute to prepare
            them for Cambridge exams — here&apos;s why.
          </p>
        </FadeUp>

        <div className="grid grid-cols-2 gap-4 sm:gap-6">
          {REASONS.map(({ number, title, body, bg, deep }, i) => (
            <FadeUp key={number} delay={i * 0.08}>
              <div className={`flex h-full flex-col gap-2.5 rounded-2xl p-6 sm:p-7 ${bg}`}>
                <span className={`select-none font-mono text-xl font-bold leading-none sm:text-3xl ${deep}`}>
                  {number}
                </span>
                <div>
                  <h3 className={`font-heading text-sm font-bold sm:text-lg md:text-xl ${deep}`}>{title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-ink/75 sm:mt-2 sm:text-base">{body}</p>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

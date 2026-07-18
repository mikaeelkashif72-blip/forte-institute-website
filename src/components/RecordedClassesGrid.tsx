"use client";

import { FadeUp } from "@/components/ui/fade-up";
import { useOpenRegistration } from "@/components/RegistrationModalProvider";

const COURSES = [
  {
    slug: "islamiyat",
    name: "Islamiyat",
    syllabus: null,
    code: "2058 / 0493",
    level: "O Level & IGCSE",
    originalPrice: 40000,
    price: 30000,
    includes: [
      "Full syllabus video lecture series",
      "Source-based & essay question guides",
      "Past paper walkthroughs",
      "Lifetime access to all recordings",
    ],
  },
  {
    slug: "pakistan-studies",
    name: "Pakistan Studies",
    syllabus: null,
    code: "2059 / 0448",
    level: "O Level & IGCSE",
    originalPrice: 40000,
    price: 30000,
    includes: [
      "Full syllabus video lecture series",
      "Geography & History topic breakdowns",
      "Past paper walkthroughs",
      "Lifetime access to all recordings",
    ],
  },
  {
    slug: "urdu-o-level",
    name: "Urdu",
    syllabus: "O Level",
    code: "3247",
    level: "O Level",
    originalPrice: 25000,
    price: 20000,
    includes: [
      "Complete topic-by-topic video lectures",
      "Essay & comprehension frameworks",
      "Past paper walkthroughs",
      "Lifetime access to all recordings",
    ],
  },
  {
    slug: "urdu-igcse",
    name: "Urdu",
    syllabus: "IGCSE",
    code: "0539",
    level: "IGCSE",
    originalPrice: 25000,
    price: 20000,
    includes: [
      "Complete topic-by-topic video lectures",
      "Essay & comprehension frameworks",
      "Past paper walkthroughs",
      "Lifetime access to all recordings",
    ],
  },
];

function formatPrice(n: number) {
  return "Rs. " + n.toLocaleString("en-PK");
}

export function RecordedClassesGrid() {
  const openRegistration = useOpenRegistration();
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
      {COURSES.map((course, i) => {
        const saving = course.originalPrice - course.price;
        const pct = Math.round((saving / course.originalPrice) * 100);

        return (
          <FadeUp key={course.slug} delay={i * 0.08}>
          <div
            className="relative overflow-hidden rounded-2xl border border-ink-10 bg-white transition-transform duration-200 [transform:translateZ(0)] hover:-translate-y-1.5 hover:shadow-[0_8px_30px_rgba(14,31,75,0.10)]"
          >
            <div className="flex h-full flex-col p-7">
              {/* Discount badge */}
              <div className="mb-5 flex items-start justify-between gap-3">
                <div>
                  <p className="font-mono text-xs text-ink-60">{course.level} · {course.code}</p>
                  <h2 className="mt-1 font-heading text-2xl font-bold text-ink">
                    {course.name}
                    {course.syllabus && (
                      <span className="ml-2 text-lg font-semibold text-ink-60">
                        {course.syllabus}
                      </span>
                    )}
                  </h2>
                </div>
                <span className="shrink-0 rounded-full bg-coral px-3 py-1 text-xs font-bold text-coral-deep">
                  {pct}% OFF
                </span>
              </div>

              {/* What's included */}
              <ul className="mb-6 flex flex-col gap-2">
                {course.includes.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-ink-60">
                    <span className="mt-0.5 h-4 w-4 shrink-0 text-gold-deep">✓</span>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-auto border-t border-ink-10 pt-5">
                {/* Pricing */}
                <div className="mb-4 flex items-end gap-3">
                  <span className="font-heading text-3xl font-bold text-ink">
                    {formatPrice(course.price)}
                  </span>
                  <span className="mb-0.5 text-sm text-ink-40 line-through">
                    {formatPrice(course.originalPrice)}
                  </span>
                  <span className="mb-0.5 text-xs font-semibold text-coral-deep">
                    Save {formatPrice(saving)}
                  </span>
                </div>

                {/* CTA */}
                <button
                  onClick={() => openRegistration()}
                  className="block w-full rounded-xl bg-ink py-3 text-center text-sm font-bold text-cream transition-all duration-200 hover:bg-ink/90 hover:scale-[1.03] active:scale-[0.97]"
                >
                  Enrol Now →
                </button>
              </div>
            </div>
          </div>
          </FadeUp>
        );
      })}
    </div>
  );
}

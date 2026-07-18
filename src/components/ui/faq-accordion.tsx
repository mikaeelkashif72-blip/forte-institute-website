import type { Faq } from "@/lib/faqs";

// Native <details>/<summary> — zero JS animation cost (no height-measuring,
// no per-item React state), fully keyboard/screen-reader accessible out of
// the box, and immune to the box-shadow/height-animation jank this project
// has hit before. Only the chevron rotates, via a compositor-only transform.
export function FaqAccordion({ items }: { items: Faq[] }) {
  return (
    <div className="flex flex-col gap-3">
      {items.map((item, i) => (
        <details
          key={i}
          className="group rounded-2xl border border-ink-10 bg-white px-6 py-1 open:pb-5"
        >
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 [&::-webkit-details-marker]:hidden">
            <span className="font-heading text-base font-bold text-ink sm:text-lg">
              {item.question}
            </span>
            <svg
              className="h-5 w-5 shrink-0 text-gold-deep transition-transform duration-200 group-open:rotate-180"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </summary>
          <p className="max-w-3xl text-sm leading-relaxed text-ink-60 sm:text-base">
            {item.answer}
          </p>
        </details>
      ))}
    </div>
  );
}

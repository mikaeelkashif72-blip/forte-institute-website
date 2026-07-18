import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FadeUp } from "@/components/ui/fade-up";
import { FaqAccordion } from "@/components/ui/faq-accordion";
import { faqs } from "@/lib/faqs";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Forte Institute",
  description:
    "Answers to common questions about Forte Institute's Cambridge O Level, IGCSE and A Level classes — fees, sessions, online vs in-class, registration, and more.",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: f.answer,
    },
  })),
};

export default function FaqPage() {
  return (
    <>
      {/* Structured data for Google rich results / AI answer engines */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <Header />
      <main className="bg-cream">
        {/* Hero */}
        <section className="border-b border-ink-10 px-6 pt-20 pb-16">
          <div className="mx-auto max-w-6xl">
            <FadeUp>
              <p className="mb-3 text-sm font-bold tracking-wide text-gold-deep">
                Frequently Asked Questions
              </p>
              <h1 className="font-heading text-4xl font-bold leading-tight text-ink md:text-5xl lg:text-6xl">
                Got questions? We&apos;ve got answers.
              </h1>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-ink-60">
                Everything you need to know about classes, fees, and registration.
                Still not sure? Message us on WhatsApp and we&apos;ll help directly.
              </p>
            </FadeUp>
          </div>
        </section>

        {/* Accordion */}
        <section className="px-6 py-16 md:py-24">
          <div className="mx-auto max-w-3xl">
            <FadeUp>
              <FaqAccordion items={faqs} />
            </FadeUp>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="border-t border-ink-10 px-6 py-16 md:py-20">
          <div className="mx-auto max-w-6xl text-center">
            <FadeUp>
              <h2 className="font-heading text-2xl font-bold text-ink md:text-3xl">
                Still have a question?
              </h2>
              <p className="mx-auto mt-3 max-w-md text-base leading-relaxed text-ink-60">
                Our team typically replies on WhatsApp within a few hours.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <a
                  href="https://wa.me/923253025031"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block rounded-xl bg-ink px-7 py-3.5 text-base font-bold text-cream transition-all duration-200 hover:bg-ink/90 hover:scale-[1.03] active:scale-[0.97]"
                >
                  Message on WhatsApp
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full border border-ink-10 px-6 py-3 text-sm font-semibold text-ink-60 transition-all duration-200 hover:border-ink/30 hover:text-ink"
                >
                  Contact Page →
                </a>
              </div>
            </FadeUp>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

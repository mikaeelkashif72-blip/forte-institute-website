"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FadeUp } from "@/components/ui/fade-up";

interface Testimonial {
  text: string;
  initials: string;
  name: string;
  role: string;
}

const testimonials: Testimonial[] = [
  {
    text: "Forte Institute's O Level Islamiyat classes completely changed how I approach the subject. The teacher breaks down every source and essay question exactly the way Cambridge expects. Got an A* in my May/June session.",
    initials: "AR",
    name: "Ayesha Raza",
    role: "O Level Student · A*",
  },
  {
    text: "I was struggling with O Level Pakistan Studies until I joined Forte. The past paper sessions are incredibly focused — I finally understood what the examiner wants. Highly recommend to every student in Pakistan.",
    initials: "HK",
    name: "Hassan Khan",
    role: "O Level Student · A",
  },
  {
    text: "The recorded classes for Urdu IGCSE are outstanding. I could re-watch every lecture before the exam and the essay frameworks saved me. Cleared my IGCSE Urdu with an A grade from home.",
    initials: "ZF",
    name: "Zara Farooq",
    role: "IGCSE Student · A",
  },
  {
    text: "As an A Level student, I needed a tutor who really knew the Cambridge syllabus. Forte's Economics classes are structured perfectly — theory, case studies, and past papers all in one place.",
    initials: "OB",
    name: "Omar Baig",
    role: "A Level Student · A*",
  },
  {
    text: "I joined Forte's live online classes from Lahore and the quality is exactly the same as in-class. Small batches mean the teacher actually knows your weak points and fixes them before the exam.",
    initials: "SM",
    name: "Sara Mirza",
    role: "O Level Student · A*",
  },
  {
    text: "Best Islamiyat teacher I have ever had. He knows exactly which topics Cambridge tests every year and how to write answers that score full marks. Got A* in both papers.",
    initials: "FN",
    name: "Fatima Nawaz",
    role: "O Level Student · A*",
  },
  {
    text: "Forte's A Level Computer Science classes are brilliant. Complex topics explained simply, regular coding practice, and the teacher is always available for doubts. Could not have cracked A Level CS without them.",
    initials: "AM",
    name: "Ali Mahmood",
    role: "A Level Student · A",
  },
  {
    text: "The Urdu O Level course gave me a systematic approach to composition and comprehension that I never had before. Results improved from a C to a clear A in one year of tuition at Forte.",
    initials: "NQ",
    name: "Nadia Qureshi",
    role: "O Level Student · A",
  },
  {
    text: "I cleared IGCSE Pakistan Studies with an A* after joining Forte six months before my exam. The notes are concise, the practice is intense, and the teachers genuinely care about your grade.",
    initials: "IH",
    name: "Ibrahim Hussain",
    role: "IGCSE Student · A*",
  },
];

const TOTAL = testimonials.length;

function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <div className="flex h-full min-h-[280px] min-w-0 flex-col rounded-2xl border border-ink-10 bg-white p-6 transition-shadow duration-200 hover:shadow-[0_8px_30px_rgba(14,31,75,0.10)]">
      <blockquote className="m-0 p-0 flex flex-col h-full">
        <span className="mb-2 block font-heading text-xl font-bold leading-none text-coral-deep/50" aria-hidden="true">&ldquo;</span>
        <p className="text-sm leading-relaxed text-ink/80 flex-1">{t.text}</p>
        <footer className="mt-4 flex items-center gap-3">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-coral">
            <span className="font-heading text-xs font-bold text-coral-deep">{t.initials}</span>
          </div>
          <div className="flex flex-col">
            <cite className="font-heading text-sm font-bold not-italic text-ink">{t.name}</cite>
            <span className="mt-0.5 text-xs text-ink-60">{t.role}</span>
          </div>
        </footer>
      </blockquote>
    </div>
  );
}

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState(1);

  const go = useCallback((next: number) => {
    setDir(next > index ? 1 : -1);
    setIndex(next);
  }, [index]);

  const prev = () => go((index - 1 + TOTAL) % TOTAL);
  const next = () => go((index + 1) % TOTAL);

  // Auto-advance every 5.5s (enough time to read a review before it moves)
  useEffect(() => {
    const id = setInterval(() => {
      setDir(1);
      setIndex((i) => (i + 1) % TOTAL);
    }, 5500);
    return () => clearInterval(id);
  }, []);

  // Get 3 cards starting from index (wrapping)
  const visible = [0, 1, 2].map((offset) => testimonials[(index + offset) % TOTAL]);

  return (
    <section
      aria-labelledby="testimonials-heading"
      className="bg-coral py-20 md:py-24"
    >
      <div className="mx-auto max-w-6xl px-6">
        {/* Heading */}
        <FadeUp className="mb-12 max-w-xl">
          <p className="mb-3 text-sm font-bold tracking-wide text-coral-deep">Student Reviews</p>
          <h2 id="testimonials-heading" className="font-heading text-3xl font-bold leading-tight text-ink sm:text-4xl md:text-5xl">
            Thousands of A* grades across Pakistan.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink/70">
            O Level, IGCSE and A Level students from Karachi, Lahore and across Pakistan share what they say about studying at Forte Institute.
          </p>
          <a
            href="https://share.google/CN3nEGt8iF3Y0T4dB"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2.5 rounded-xl border border-ink-10 bg-white px-4 py-2.5 transition-shadow duration-200 hover:shadow-[0_8px_30px_rgba(14,31,75,0.10)]"
            aria-label="See Forte Institute reviews on Google"
          >
            <svg className="h-4 w-4 shrink-0" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            <span className="flex items-center gap-1.5 text-sm font-semibold text-ink">
              <span className="text-gold-deep">★★★★★</span>
              <span>5.0</span>
              <span className="text-ink-60 font-normal">on Google</span>
            </span>
            <svg className="h-3.5 w-3.5 text-ink-60" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </FadeUp>

        {/* Cards — a single-cell grid so the outgoing and incoming sets occupy
            the SAME cell and cross-fade/slide over each other, instead of
            stacking vertically in normal flow (which caused the height-jump
            glitch on transition). */}
        <div className="grid overflow-hidden">
          <AnimatePresence mode="sync" initial={false} custom={dir}>
            <motion.div
              key={index}
              custom={dir}
              variants={{
                enter: (d: number) => ({ x: d * 40, opacity: 0 }),
                center: { x: 0, opacity: 1 },
                exit: (d: number) => ({ x: d * -40, opacity: 0 }),
              }}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="col-start-1 row-start-1 grid grid-cols-1 gap-5 md:grid-cols-3"
            >
              {visible.map((t, i) => (
                <div key={i} className={i > 0 ? "hidden md:block" : ""}>
                  <TestimonialCard t={t} />
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Controls */}
        <div className="mt-8 flex items-center justify-between">
          {/* Dot indicators */}
          <div className="flex gap-1.5">
            {Array.from({ length: TOTAL }).map((_, i) => (
              <button
                key={i}
                onClick={() => go(i)}
                aria-label={`Go to review ${i + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === index ? "w-6 bg-ink" : "w-1.5 bg-ink/20 hover:bg-ink/40"
                }`}
              />
            ))}
          </div>

          {/* Prev / Next */}
          <div className="flex gap-2">
            <button
              onClick={prev}
              aria-label="Previous reviews"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-ink-10 text-ink-60 transition-colors duration-200 hover:border-ink/30 hover:text-ink"
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={next}
              aria-label="Next reviews"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-ink-10 text-ink-60 transition-colors duration-200 hover:border-ink/30 hover:text-ink"
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

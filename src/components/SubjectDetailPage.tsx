"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { useReducedMotion } from "motion/react";
import { type SubjectDetail, type Level, type SubjectColor, levelLabels, getSubjectColor } from "@/lib/subjects";
import { useOpenRegistration } from "@/components/RegistrationModalProvider";
import { MathBg } from "@/components/ui/math-bg";

const EXPECT_ITEMS = [
  {
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
      </svg>
    ),
    title: "Cambridge Specialist",
    body: "Every tutor teaches exclusively Cambridge syllabuses — no generalists. Deep syllabus knowledge and examiner insight in every session.",
  },
  {
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
    title: "Past Paper Intensive",
    body: "Structured past paper practice for every topic. You learn what the examiner wants and how to give it — by the time it counts.",
  },
  {
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
    title: "Small Batches",
    body: "Classes are kept small so the tutor knows your weak points. Every session has space for questions — not just lectures.",
  },
];

function FadeUp({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface Props {
  subject: SubjectDetail;
  level: Level;
}

// Per-subject accent theme: each subject carries its own color identity
// (assigned in src/lib/subjects.ts) regardless of level — e.g. Chemistry is
// always coral whether it's O Level or A Level. Written as literal class
// strings (not template-composed) so Tailwind's content scanner picks them up.
const SUBJECT_THEME: Record<SubjectColor, {
  dot: string;
  text: string;
  ring: string;
  wash: string;
  washBorder: string;
  numberDim: string;
}> = {
  gold: {
    dot: "bg-gold-deep",
    text: "text-gold-deep",
    ring: "focus-within:ring-gold-deep",
    wash: "bg-gold",
    washBorder: "border-gold-deep/15",
    numberDim: "text-gold-deep/60",
  },
  sky: {
    dot: "bg-sky-deep",
    text: "text-sky-deep",
    ring: "focus-within:ring-sky-deep",
    wash: "bg-sky",
    washBorder: "border-sky-deep/15",
    numberDim: "text-sky-deep/60",
  },
  violet: {
    dot: "bg-violet-deep",
    text: "text-violet-deep",
    ring: "focus-within:ring-violet-deep",
    wash: "bg-violet",
    washBorder: "border-violet-deep/15",
    numberDim: "text-violet-deep/60",
  },
  sage: {
    dot: "bg-sage-deep",
    text: "text-sage-deep",
    ring: "focus-within:ring-sage-deep",
    wash: "bg-sage",
    washBorder: "border-sage-deep/15",
    numberDim: "text-sage-deep/60",
  },
  coral: {
    dot: "bg-coral-deep",
    text: "text-coral-deep",
    ring: "focus-within:ring-coral-deep",
    wash: "bg-coral",
    washBorder: "border-coral-deep/15",
    numberDim: "text-coral-deep/60",
  },
};

export function SubjectDetailPage({ subject, level }: Props) {
  const openRegistration = useOpenRegistration();
  const reduce = useReducedMotion();
  const levelLabel = levelLabels[level];
  const theme = SUBJECT_THEME[getSubjectColor(subject.slug)];
  const codeDisplay = subject.igcseCode
    ? `${levelLabel} · ${subject.code} / IGCSE ${subject.igcseCode}`
    : `${levelLabel} · ${subject.code}`;

  return (
    <main className="min-h-screen bg-cream">
      {/* ── HERO ── */}
      <section className="relative overflow-hidden border-b border-ink-10 px-6 pb-16 pt-14 md:pb-20 md:pt-16">
        <MathBg />

        <div className="relative mx-auto max-w-6xl">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs text-ink-40">
            <Link href="/" className="transition-colors hover:text-ink-60">Home</Link>
            <span aria-hidden="true">/</span>
            <Link href={`/subjects/${level}`} className="transition-colors hover:text-ink-60">
              {levelLabel}
            </Link>
            <span aria-hidden="true">/</span>
            <span className="text-ink-60">{subject.name}</span>
          </nav>

          <div className="max-w-2xl">
            {/* Code badge */}
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="mb-4 inline-flex items-center gap-2 rounded-full border border-ink-10 bg-white px-3.5 py-1.5"
            >
              <span className={`h-1.5 w-1.5 rounded-full ${theme.dot}`} aria-hidden="true" />
              <span className="text-xs font-semibold text-ink-60">{codeDisplay}</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={reduce ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="font-heading text-balance text-4xl font-bold leading-tight text-ink sm:text-5xl md:text-6xl"
            >
              Cambridge {levelLabel}{" "}
              <span className={theme.text}>{subject.name}</span>
            </motion.h1>

            {/* Overview */}
            <motion.p
              initial={reduce ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
              className="mt-5 max-w-xl text-base leading-relaxed text-ink-60 sm:text-lg"
            >
              {subject.overview}
            </motion.p>

            {/* Tags row */}
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.26, ease: [0.16, 1, 0.3, 1] }}
              className="mt-6 flex flex-wrap items-center gap-2"
            >
              <span className="rounded-full border border-ink-10 bg-white px-3 py-1 text-xs font-semibold text-ink-60">
                In Class &amp; Online
              </span>
              <span className="rounded-full border border-ink-10 bg-white px-3 py-1 text-xs font-semibold text-ink-60">
                Oct/Nov &amp; May/Jun Sessions
              </span>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.34, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <button
                onClick={() => openRegistration()}
                className="rounded-xl bg-ink px-6 py-3 text-sm font-bold text-cream transition-all duration-200 hover:bg-ink/90 active:scale-[0.97]"
              >
                Register for Class →
              </button>
              <a
                href="#topics"
                className="rounded-xl border border-ink-10 px-6 py-3 text-sm font-semibold text-ink-60 transition-colors duration-200 hover:border-ink/30 hover:text-ink"
              >
                See Topics
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── HIGHLIGHTS ── */}
      <section className="border-b border-ink-10 px-6 py-12 md:py-16">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {subject.highlights.map((point, i) => (
              <FadeUp key={i} delay={i * 0.07}>
                <div className="flex items-start gap-3 rounded-2xl border border-ink-10 bg-white p-5">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center">
                    <svg className={`h-4 w-4 ${theme.text}`} fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </span>
                  <p className="text-sm leading-relaxed text-ink-60">{point}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── TOPICS ── */}
      <section id="topics" className="border-b border-ink-10 px-6 py-14 md:py-20">
        <div className="mx-auto max-w-6xl">
          <FadeUp>
            <h2 className="font-heading mb-2 text-2xl font-bold text-ink sm:text-3xl">
              What You&apos;ll Study
            </h2>
            <p className="mb-10 text-sm text-ink-60">
              Full Cambridge {levelLabel} {subject.name} syllabus — every topic covered.
            </p>
          </FadeUp>

          <FadeUp delay={0.08}>
            <ul className="columns-1 gap-4 sm:columns-2 lg:columns-3" role="list">
              {subject.topics.map((topic, i) => (
                <li
                  key={i}
                  className="mb-2 flex items-center gap-3 break-inside-avoid rounded-xl border border-ink-10 bg-white px-4 py-3 text-sm text-ink-60 transition-colors duration-150 hover:border-ink/30 hover:text-ink"
                >
                  <span className={`shrink-0 font-mono text-[10px] font-bold ${theme.numberDim}`}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {topic}
                </li>
              ))}
            </ul>
          </FadeUp>
        </div>
      </section>

      {/* ── WHAT TO EXPECT ── */}
      <section className="border-b border-ink-10 px-6 py-14 md:py-20">
        <div className="mx-auto max-w-6xl">
          <FadeUp>
            <h2 className="font-heading mb-10 text-2xl font-bold text-ink sm:text-3xl">
              What to Expect at Forte
            </h2>
          </FadeUp>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            {EXPECT_ITEMS.map((item, i) => (
              <FadeUp key={i} delay={i * 0.08}>
                <div className="flex flex-col gap-4">
                  <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${theme.wash} ${theme.text}`}>
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-heading mb-1.5 text-base font-bold text-ink">{item.title}</h3>
                    <p className="text-sm leading-relaxed text-ink-60">{item.body}</p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ── */}
      <section className="px-6 py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <FadeUp>
            <div className={`rounded-2xl border ${theme.washBorder} ${theme.wash} px-8 py-12 text-center`}>
              <p className="font-heading mb-2 text-2xl font-bold text-ink sm:text-3xl">
                Ready to achieve an A* in {levelLabel} {subject.name}?
              </p>
              <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-ink-60">
                Oct/Nov &apos;26 registrations are open. Spots are limited — secure yours now.
              </p>
              <button
                onClick={() => openRegistration()}
                className="mt-8 rounded-xl bg-ink px-8 py-3.5 text-sm font-bold text-cream transition-all duration-200 hover:bg-ink/90 active:scale-[0.97]"
              >
                Register for Class →
              </button>
            </div>
          </FadeUp>
        </div>
      </section>
    </main>
  );
}

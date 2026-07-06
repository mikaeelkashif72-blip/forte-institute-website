"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { useReducedMotion } from "motion/react";
import { type SubjectDetail, type Level, levelLabels } from "@/lib/subjects";
import { useOpenRegistration } from "@/components/RegistrationModalProvider";

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

export function SubjectDetailPage({ subject, level }: Props) {
  const openRegistration = useOpenRegistration();
  const reduce = useReducedMotion();
  const levelLabel = levelLabels[level];
  const codeDisplay = subject.igcseCode
    ? `${levelLabel} · ${subject.code} / IGCSE ${subject.igcseCode}`
    : `${levelLabel} · ${subject.code}`;

  return (
    <main className="min-h-screen bg-void">
      {/* ── HERO ── */}
      <section className="relative overflow-hidden border-b border-glass-border px-6 pb-16 pt-14 md:pb-20 md:pt-16">
        {/* Subtle glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-32 left-1/2 h-[480px] w-[700px] -translate-x-1/2 rounded-full bg-yellow/10 blur-[120px]"
        />

        <div className="relative mx-auto max-w-6xl">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs text-mist/50">
            <Link href="/" className="transition-colors hover:text-mist">Home</Link>
            <span aria-hidden="true">/</span>
            <Link href={`/subjects/${level}`} className="transition-colors hover:text-mist">
              {levelLabel}
            </Link>
            <span aria-hidden="true">/</span>
            <span className="text-mist/70">{subject.name}</span>
          </nav>

          <div className="max-w-2xl">
            {/* Code badge */}
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="mb-4 inline-flex items-center gap-2 rounded-full border border-glass-border bg-white/5 px-3.5 py-1.5"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-yellow" aria-hidden="true" />
              <span className="text-xs font-semibold text-mist">{codeDisplay}</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={reduce ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="font-heading text-balance text-4xl font-bold leading-tight text-paper sm:text-5xl md:text-6xl"
            >
              Cambridge {levelLabel}{" "}
              <span className="text-yellow">{subject.name}</span>
            </motion.h1>

            {/* Overview */}
            <motion.p
              initial={reduce ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
              className="mt-5 max-w-xl text-base leading-relaxed text-mist sm:text-lg"
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
              <span className="rounded-full border border-glass-border bg-white/5 px-3 py-1 text-xs font-semibold text-mist">
                In Class &amp; Online
              </span>
              <span className="rounded-full border border-glass-border bg-white/5 px-3 py-1 text-xs font-semibold text-mist">
                Pakistan
              </span>
              <span className="rounded-full border border-glass-border bg-white/5 px-3 py-1 text-xs font-semibold text-mist">
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
                className="rounded-xl bg-yellow px-6 py-3 text-sm font-bold text-ink transition-all duration-200 hover:bg-yellow-deep hover:text-paper active:scale-[0.97]"
              >
                Register for Class →
              </button>
              <a
                href="#topics"
                className="rounded-xl border border-glass-border px-6 py-3 text-sm font-semibold text-mist transition-colors duration-200 hover:border-white/30 hover:text-paper"
              >
                See Topics
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── HIGHLIGHTS ── */}
      <section className="border-b border-glass-border px-6 py-12 md:py-16">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {subject.highlights.map((point, i) => (
              <FadeUp key={i} delay={i * 0.07}>
                <div className="flex items-start gap-3 rounded-2xl border border-glass-border bg-white/[0.03] p-5">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center">
                    <svg className="h-4 w-4 text-yellow" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </span>
                  <p className="text-sm leading-relaxed text-mist">{point}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── TOPICS ── */}
      <section id="topics" className="border-b border-glass-border px-6 py-14 md:py-20">
        <div className="mx-auto max-w-6xl">
          <FadeUp>
            <h2 className="font-heading mb-2 text-2xl font-bold text-paper sm:text-3xl">
              What You'll Study
            </h2>
            <p className="mb-10 text-sm text-mist/70">
              Full Cambridge {levelLabel} {subject.name} syllabus — every topic covered.
            </p>
          </FadeUp>

          <FadeUp delay={0.08}>
            <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3" role="list">
              {subject.topics.map((topic, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 rounded-xl border border-glass-border bg-white/[0.03] px-4 py-3 text-sm text-mist transition-colors duration-150 hover:border-white/20 hover:text-paper"
                >
                  <span className="shrink-0 font-mono text-[10px] font-bold text-yellow/60">
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
      <section className="border-b border-glass-border px-6 py-14 md:py-20">
        <div className="mx-auto max-w-6xl">
          <FadeUp>
            <h2 className="font-heading mb-10 text-2xl font-bold text-paper sm:text-3xl">
              What to Expect at Forte
            </h2>
          </FadeUp>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            {EXPECT_ITEMS.map((item, i) => (
              <FadeUp key={i} delay={i * 0.08}>
                <div className="flex flex-col gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-yellow/10 text-yellow">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-heading mb-1.5 text-base font-bold text-paper">{item.title}</h3>
                    <p className="text-sm leading-relaxed text-mist">{item.body}</p>
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
            <div className="rounded-2xl border border-yellow/20 bg-yellow/[0.06] px-8 py-12 text-center">
              <p className="font-heading mb-2 text-2xl font-bold text-paper sm:text-3xl">
                Ready to achieve an A* in {levelLabel} {subject.name}?
              </p>
              <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-mist">
                Oct/Nov &apos;26 registrations are open. Spots are limited — secure yours now.
              </p>
              <button
                onClick={() => openRegistration()}
                className="mt-8 rounded-xl bg-yellow px-8 py-3.5 text-sm font-bold text-ink transition-all duration-200 hover:bg-yellow-deep hover:text-paper active:scale-[0.97]"
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

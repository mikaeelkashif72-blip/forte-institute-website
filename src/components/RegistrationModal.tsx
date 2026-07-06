"use client";

import { useState, useEffect, useCallback } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ChevronLeft, ChevronRight, Check, Send } from "lucide-react";

interface Props {
  open: boolean;
  onClose: () => void;
}

const HEAR_OPTIONS = [
  "Instagram",
  "YouTube",
  "Facebook",
  "Friend / Word of mouth",
  "Google Search",
  "Other",
];

const YEAR = new Date().getFullYear();
const SESSION_OPTIONS = [
  { id: "octnov", label: `Oct / Nov ${YEAR}` },
  { id: "mayjun", label: `May / Jun ${YEAR + 1}` },
];

const PROGRAM_OPTIONS = [
  { id: "olevel", label: "O Level" },
  { id: "alevel", label: "A Level" },
];

const steps = [
  { id: "personal", title: "Personal Info" },
  { id: "classes", title: "Classes" },
];

const ease = [0.16, 1, 0.3, 1] as const;

// Fast fade — no x-slide to avoid compositing lag
const fadeVariants = {
  enter: { opacity: 0 },
  center: { opacity: 1, transition: { duration: 0.12 } },
  exit: { opacity: 0, transition: { duration: 0.08 } },
};

const inputCls =
  "w-full rounded-xl border border-glass-border bg-white/5 px-4 py-3 text-sm text-paper placeholder:text-mist/70 outline-none transition-colors duration-150 focus:border-yellow/50 focus:bg-white/[0.08]";

const labelCls =
  "mb-1.5 block text-xs font-semibold uppercase tracking-widest text-mist/70";

interface OptionCardProps {
  selected: boolean;
  onClick: () => void;
  children: React.ReactNode;
}

function OptionCard({ selected, onClick, children }: OptionCardProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={
        "w-full flex items-center gap-3 rounded-xl border px-4 py-3 text-left text-sm transition-colors duration-150 " +
        (selected
          ? "border-yellow/60 bg-yellow/10 text-paper"
          : "border-glass-border bg-white/5 text-mist hover:border-white/20 hover:bg-white/[0.07] hover:text-paper")
      }
    >
      <div
        className={
          "flex h-4 w-4 shrink-0 items-center justify-center rounded-full border-2 transition-colors duration-150 " +
          (selected ? "border-yellow" : "border-mist/40")
        }
        aria-hidden="true"
      >
        {selected && <div className="h-2 w-2 rounded-full bg-yellow" />}
      </div>
      {children}
    </button>
  );
}

export function RegistrationModal({ open, onClose }: Props) {
  const [step, setStep] = useState(0);

  // Step 1
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [parentPhone, setParentPhone] = useState("");
  const [school, setSchool] = useState("");
  const [hearAbout, setHearAbout] = useState("");

  // Step 2
  const [program, setProgram] = useState("");
  const [session, setSession] = useState("");
  const [subject, setSubject] = useState("");
  const [agreed, setAgreed] = useState(false);

  const handleKey = useCallback(
    (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); },
    [onClose]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [handleKey]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  useEffect(() => {
    if (open) {
      setStep(0);
      setFirstName(""); setLastName(""); setEmail("");
      setWhatsapp(""); setParentPhone(""); setSchool("");
      setHearAbout(""); setProgram(""); setSession("");
      setSubject(""); setAgreed(false);
    }
  }, [open]);

  function goNext() { setStep(1); }
  function goPrev() { setStep(0); }

  function handleSubmit() {
    const text = encodeURIComponent(
      `*New Registration — Forte Institute*\n\n` +
      `*Name:* ${firstName} ${lastName}\n` +
      `*Email:* ${email}\n` +
      `*WhatsApp:* ${whatsapp}\n` +
      `*Parent Phone:* ${parentPhone}\n` +
      `*School/Org:* ${school}\n` +
      `*Heard via:* ${hearAbout}\n\n` +
      `*Program:* ${PROGRAM_OPTIONS.find((p) => p.id === program)?.label ?? program}\n` +
      `*Session:* ${SESSION_OPTIONS.find((s) => s.id === session)?.label ?? session}\n` +
      `*Subject(s):* ${subject}`
    );
    window.open(`https://wa.me/923253025031?text=${text}`, "_blank");
    onClose();
  }

  const step1Valid = firstName && lastName && email && whatsapp && parentPhone && school;
  const step2Valid = program && session && subject && agreed;

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 px-4 py-10 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            key="modal"
            initial={{ opacity: 0, y: 12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.98 }}
            transition={{ duration: 0.18, ease }}
            className="flex w-full max-w-lg flex-col rounded-2xl border border-glass-border bg-void shadow-2xl overflow-hidden max-h-[min(80vh,680px)]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="shrink-0 px-6 pt-6 pb-0">
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="font-heading text-xl font-bold text-paper">
                    Student Registration
                  </h2>
                  <p className="mt-0.5 text-xs text-mist/60">
                    Step {step + 1} of {steps.length} — {steps[step].title}
                  </p>
                </div>
                <button
                  onClick={onClose}
                  aria-label="Close registration form"
                  className="-mt-1 -mr-2 flex h-11 w-11 items-center justify-center rounded-full text-mist transition-colors hover:bg-white/10 hover:text-paper focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow/50"
                >
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Progress dots + bar */}
              <div className="mt-5 mb-4">
                <div className="flex items-center justify-between mb-3">
                  {steps.map((s, i) => (
                    <div key={s.id} className="flex flex-col items-center gap-1.5">
                      <button
                        type="button"
                        onClick={() => { if (i < step) setStep(i); }}
                        disabled={i > step}
                        aria-label={`Go to step ${i + 1}`}
                        className={
                          "h-3 w-3 rounded-full transition-all duration-200 " +
                          (i < step
                            ? "bg-yellow cursor-pointer hover:scale-110"
                            : i === step
                            ? "bg-yellow ring-4 ring-yellow/20"
                            : "bg-white/20 cursor-default")
                        }
                      />
                      <span className={
                        "text-[10px] font-semibold uppercase tracking-widest transition-colors duration-200 " +
                        (i === step ? "text-yellow" : "text-mist/40")
                      }>
                        {s.title}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="h-1 w-full overflow-hidden rounded-full bg-white/10">
                  <motion.div
                    className="h-full bg-yellow"
                    animate={{ width: step === 0 ? "0%" : "100%" }}
                    transition={{ duration: 0.2, ease }}
                  />
                </div>
              </div>
            </div>

            {/* Step content */}
            <div className="flex-1 overflow-y-auto overscroll-contain">
              <AnimatePresence mode="sync" initial={false}>
                {step === 0 ? (
                  <motion.div
                    key="step1"
                    variants={fadeVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                  >
                    <div className="px-6 py-5 flex flex-col gap-5">
                      {/* Name */}
                      <div>
                        <p className={labelCls}>
                          Name <span className="text-yellow" aria-label="required">*</span>
                        </p>
                        <div className="mt-1.5 grid grid-cols-2 gap-3">
                          <div>
                            <label htmlFor="reg-first-name" className="sr-only">First name</label>
                            <input
                              id="reg-first-name"
                              value={firstName}
                              onChange={(e) => setFirstName(e.target.value)}
                              placeholder="First name"
                              autoComplete="given-name"
                              className={inputCls}
                            />
                          </div>
                          <div>
                            <label htmlFor="reg-last-name" className="sr-only">Last name</label>
                            <input
                              id="reg-last-name"
                              value={lastName}
                              onChange={(e) => setLastName(e.target.value)}
                              placeholder="Last name"
                              autoComplete="family-name"
                              className={inputCls}
                            />
                          </div>
                        </div>
                      </div>

                      {/* Email */}
                      <div>
                        <label htmlFor="reg-email" className={labelCls}>
                          Email <span className="text-yellow" aria-label="required">*</span>
                        </label>
                        <input
                          id="reg-email"
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="you@example.com"
                          autoComplete="email"
                          className={inputCls}
                        />
                      </div>

                      {/* Phones */}
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label htmlFor="reg-whatsapp" className={labelCls}>
                            WhatsApp <span className="text-yellow" aria-label="required">*</span>
                          </label>
                          <input
                            id="reg-whatsapp"
                            value={whatsapp}
                            onChange={(e) => setWhatsapp(e.target.value)}
                            placeholder="03XXXXXXXXX"
                            autoComplete="tel"
                            className={inputCls}
                          />
                        </div>
                        <div>
                          <label htmlFor="reg-parent-phone" className={labelCls}>
                            Parent Phone <span className="text-yellow" aria-label="required">*</span>
                          </label>
                          <input
                            id="reg-parent-phone"
                            value={parentPhone}
                            onChange={(e) => setParentPhone(e.target.value)}
                            placeholder="03XXXXXXXXX"
                            className={inputCls}
                          />
                        </div>
                      </div>

                      {/* School */}
                      <div>
                        <label htmlFor="reg-school" className={labelCls}>
                          School / Organization <span className="text-yellow" aria-label="required">*</span>
                        </label>
                        <input
                          id="reg-school"
                          value={school}
                          onChange={(e) => setSchool(e.target.value)}
                          placeholder="e.g. Karachi Grammar School"
                          className={inputCls}
                        />
                      </div>

                      {/* Hear about */}
                      <div>
                        <label htmlFor="reg-hear" className={labelCls}>
                          How did you hear about us?
                        </label>
                        <select
                          id="reg-hear"
                          value={hearAbout}
                          onChange={(e) => setHearAbout(e.target.value)}
                          className="w-full rounded-xl border border-glass-border bg-void px-4 py-3 text-sm text-paper outline-none transition-colors duration-150 focus:border-yellow/50"
                        >
                          <option value="">Select…</option>
                          {HEAR_OPTIONS.map((o) => (
                            <option key={o} value={o}>{o}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="step2"
                    variants={fadeVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                  >
                    <div className="px-6 py-5 flex flex-col gap-6">
                      {/* Program */}
                      <fieldset>
                        <legend className={labelCls}>
                          Program Applying For <span className="text-yellow" aria-label="required">*</span>
                        </legend>
                        <div className="mt-2 flex flex-col gap-2">
                          {PROGRAM_OPTIONS.map((p) => (
                            <OptionCard
                              key={p.id}
                              selected={program === p.id}
                              onClick={() => setProgram(p.id)}
                            >
                              <span className="font-semibold">{p.label}</span>
                            </OptionCard>
                          ))}
                        </div>
                      </fieldset>

                      {/* Session */}
                      <fieldset>
                        <legend className={labelCls}>
                          Choose Session <span className="text-yellow" aria-label="required">*</span>
                        </legend>
                        <div className="mt-2 flex flex-col gap-2">
                          {SESSION_OPTIONS.map((s) => (
                            <OptionCard
                              key={s.id}
                              selected={session === s.id}
                              onClick={() => setSession(s.id)}
                            >
                              <span className="font-semibold">{s.label}</span>
                            </OptionCard>
                          ))}
                        </div>
                      </fieldset>

                      {/* Subject */}
                      <div>
                        <label htmlFor="reg-subject" className={labelCls}>
                          Subject(s) <span className="text-yellow" aria-label="required">*</span>
                        </label>
                        <input
                          id="reg-subject"
                          value={subject}
                          onChange={(e) => setSubject(e.target.value)}
                          placeholder="e.g. Mathematics, Physics, Chemistry"
                          className={inputCls}
                        />
                      </div>

                      {/* Agreement */}
                      <label className="flex cursor-pointer items-start gap-3">
                        <input
                          type="checkbox"
                          checked={agreed}
                          onChange={(e) => setAgreed(e.target.checked)}
                          className="sr-only"
                        />
                        <div
                          aria-hidden="true"
                          className={
                            "mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded border transition-colors duration-150 " +
                            (agreed ? "border-yellow bg-yellow" : "border-mist/40 bg-white/5")
                          }
                        >
                          {agreed && <Check className="h-2.5 w-2.5 text-ink" strokeWidth={3} />}
                        </div>
                        <span className="text-xs text-mist/70">
                          I confirm that I have read, understood, and agree to Forte Institute&apos;s Fee &amp; Payments Policy.{" "}
                          <span className="text-yellow" aria-label="required">*</span>
                        </span>
                      </label>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Footer */}
            <div className="shrink-0 flex justify-center border-t border-glass-border px-6 py-4">
              {step === 0 ? (
                <motion.button
                  type="button"
                  whileTap={{ scale: 0.97 }}
                  onClick={goNext}
                  disabled={!step1Valid}
                  className="flex w-48 items-center justify-center gap-2 rounded-xl bg-yellow py-3 text-sm font-bold text-ink transition-colors duration-150 hover:bg-yellow-deep hover:text-paper disabled:cursor-not-allowed disabled:opacity-40"
                >
                  Next
                  <ChevronRight className="h-4 w-4" />
                </motion.button>
              ) : (
                <motion.button
                  type="button"
                  whileTap={{ scale: 0.97 }}
                  onClick={handleSubmit}
                  disabled={!step2Valid}
                  className="flex w-56 items-center justify-center gap-2 rounded-xl bg-yellow py-3 text-sm font-bold text-ink transition-colors duration-150 hover:bg-yellow-deep hover:text-paper disabled:cursor-not-allowed disabled:opacity-40"
                >
                  Submit via WhatsApp
                  <Send className="h-4 w-4" />
                </motion.button>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

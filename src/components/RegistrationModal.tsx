"use client";

import { useState, useEffect, useCallback } from "react";
import { AnimatePresence, motion } from "motion/react";

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

const PAYMENT_OPTIONS = [
  { id: "bank", label: "Bank Transfer\n(Online)" },
  { id: "office", label: "Physical Payment\nat office" },
  { id: "later", label: "I'll Pay Later" },
];

const YEAR = new Date().getFullYear();
const SESSION_OPTIONS = [
  { id: "octnov", label: `Oct/Nov (${YEAR})` },
  { id: "mayjun", label: `May/June (${YEAR + 1})` },
];

const PROGRAM_OPTIONS = ["O Level", "A Level"];

const ease = [0.16, 1, 0.3, 1] as const;

// Shared input style — placeholder at mist/70 for ≥4.5:1 contrast on void bg
const inputClass =
  "w-full rounded-xl border border-glass-border bg-white/5 px-4 py-3 text-sm text-paper placeholder:text-mist/70 outline-none transition-colors duration-200 focus:border-yellow/50 focus:bg-white/[0.08]";
const labelClass =
  "mb-1.5 block text-xs font-semibold uppercase tracking-widest text-mist/70";

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
  const [payment, setPayment] = useState("");
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
      setPayment(""); setAgreed(false);
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
      `*Program:* ${program}\n` +
      `*Session:* ${SESSION_OPTIONS.find(s => s.id === session)?.label ?? session}\n` +
      `*Payment:* ${PAYMENT_OPTIONS.find(p => p.id === payment)?.label.replace("\n", " ") ?? payment}`
    );
    window.open(`https://wa.me/923253025031?text=${text}`, "_blank");
    onClose();
  }

  const step1Valid = firstName && lastName && email && whatsapp && parentPhone && school;
  const step2Valid = program && session && payment && agreed;

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop + centering wrapper */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
            onClick={onClose}
          >
            {/* Modal — overflow-hidden clips progress bar within rounded corners */}
            <motion.div
              key="modal"
              initial={{ opacity: 0, y: 24, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.97 }}
              transition={{ duration: 0.35, ease }}
              className="flex w-full max-w-lg flex-col max-h-[90vh] rounded-2xl border border-glass-border bg-void shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Progress bar */}
              <div className="relative h-1 w-full shrink-0 bg-white/10">
                <motion.div
                  className="absolute inset-y-0 left-0 bg-yellow"
                  animate={{ width: step === 0 ? "50%" : "100%" }}
                  transition={{ duration: 0.4, ease }}
                />
              </div>

              {/* Header */}
              <div className="shrink-0 border-b border-glass-border px-6 pt-5 pb-0">
                <div className="flex items-center justify-between">
                  <h2 className="font-heading text-xl font-bold text-paper">
                    Student Registration Form
                  </h2>
                  {/* 44×44px touch target wrapping the visible 28px circle */}
                  <button
                    onClick={onClose}
                    className="-mr-2 flex h-11 w-11 items-center justify-center rounded-full text-mist transition-colors hover:bg-white/10 hover:text-paper focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow/50"
                    aria-label="Close registration form"
                  >
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                {/* Step tabs */}
                <div className="mt-4 flex" role="tablist">
                  <button
                    role="tab"
                    aria-selected={step === 0}
                    className={`relative flex-1 pb-3 text-sm font-semibold transition-colors duration-200 ${
                      step === 0 ? "text-paper" : "text-mist/50"
                    }`}
                    onClick={() => step === 1 && goPrev()}
                  >
                    Personal Information
                    {step === 0 && (
                      <motion.div
                        layoutId="tab-indicator"
                        className="absolute inset-x-0 bottom-0 h-0.5 bg-yellow"
                      />
                    )}
                  </button>
                  <button
                    role="tab"
                    aria-selected={step === 1}
                    disabled={step === 0}
                    className={`relative flex-1 pb-3 text-sm font-semibold transition-colors duration-200 ${
                      step === 1 ? "text-paper" : "text-mist/50"
                    }`}
                  >
                    Classes Selection
                    {step === 1 && (
                      <motion.div
                        layoutId="tab-indicator"
                        className="absolute inset-x-0 bottom-0 h-0.5 bg-yellow"
                      />
                    )}
                  </button>
                </div>
              </div>

              {/* Steps — animated wrapper is separate from scroll container to avoid compositing conflict */}
              <div className="overflow-hidden">
                <AnimatePresence mode="wait" initial={false}>
                  {step === 0 ? (
                    <motion.div
                      key="step1"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.22, ease: [0.25, 0.46, 0.45, 0.94] }}
                    >
                    <div className="px-6 py-6">
                      <div className="flex flex-col gap-5">
                        {/* Name row — separate labels per input for screen readers */}
                        <div>
                          <p className={labelClass} id="label-name">
                            Name <span className="text-yellow" aria-label="required">*</span>
                          </p>
                          <div className="mt-1.5 grid grid-cols-2 gap-3">
                            <div>
                              <label htmlFor="reg-first-name" className="sr-only">First name</label>
                              <input
                                id="reg-first-name"
                                value={firstName}
                                onChange={e => setFirstName(e.target.value)}
                                placeholder="First name"
                                autoComplete="given-name"
                                className={inputClass}
                              />
                            </div>
                            <div>
                              <label htmlFor="reg-last-name" className="sr-only">Last name</label>
                              <input
                                id="reg-last-name"
                                value={lastName}
                                onChange={e => setLastName(e.target.value)}
                                placeholder="Last name"
                                autoComplete="family-name"
                                className={inputClass}
                              />
                            </div>
                          </div>
                        </div>

                        {/* Email */}
                        <div>
                          <label htmlFor="reg-email" className={labelClass}>
                            Email <span className="text-yellow" aria-label="required">*</span>
                          </label>
                          <input
                            id="reg-email"
                            type="email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            placeholder="you@example.com"
                            autoComplete="email"
                            className={inputClass}
                          />
                        </div>

                        {/* Phone row */}
                        <div className="grid grid-cols-2 gap-3">
                          <div>
                            <label htmlFor="reg-whatsapp" className={labelClass}>
                              WhatsApp <span className="text-yellow" aria-label="required">*</span>
                            </label>
                            <input
                              id="reg-whatsapp"
                              value={whatsapp}
                              onChange={e => setWhatsapp(e.target.value)}
                              placeholder="03XXXXXXXXX"
                              autoComplete="tel"
                              className={inputClass}
                            />
                          </div>
                          <div>
                            <label htmlFor="reg-parent-phone" className={labelClass}>
                              Parent Phone <span className="text-yellow" aria-label="required">*</span>
                            </label>
                            <input
                              id="reg-parent-phone"
                              value={parentPhone}
                              onChange={e => setParentPhone(e.target.value)}
                              placeholder="03XXXXXXXXX"
                              className={inputClass}
                            />
                          </div>
                        </div>

                        {/* School */}
                        <div>
                          <label htmlFor="reg-school" className={labelClass}>
                            School / Organization <span className="text-yellow" aria-label="required">*</span>
                          </label>
                          <input
                            id="reg-school"
                            value={school}
                            onChange={e => setSchool(e.target.value)}
                            placeholder="e.g. Karachi Grammar School or Private"
                            className={inputClass}
                          />
                        </div>

                        {/* Hear about */}
                        <div>
                          <label htmlFor="reg-hear" className={labelClass}>How did you hear about us?</label>
                          <select
                            id="reg-hear"
                            value={hearAbout}
                            onChange={e => setHearAbout(e.target.value)}
                            className="w-full rounded-xl border border-glass-border bg-void px-4 py-3 text-sm text-paper outline-none transition-colors duration-200 focus:border-yellow/50"
                          >
                            <option value="">Select…</option>
                            {HEAR_OPTIONS.map(o => (
                              <option key={o} value={o}>{o}</option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="step2"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.22, ease: [0.25, 0.46, 0.45, 0.94] }}
                    >
                    <div className="px-6 py-6">
                      <div className="flex flex-col gap-6">
                        {/* Program — real radio inputs, keyboard-navigable */}
                        <fieldset>
                          <legend className={labelClass}>
                            Program Applying For <span className="text-yellow" aria-label="required">*</span>
                          </legend>
                          <div className="mt-2 flex flex-wrap gap-4">
                            {PROGRAM_OPTIONS.map(p => (
                              <label key={p} className="flex cursor-pointer items-center gap-2.5">
                                <input
                                  type="radio"
                                  name="program"
                                  value={p}
                                  checked={program === p}
                                  onChange={() => setProgram(p)}
                                  className="sr-only"
                                />
                                <div
                                  aria-hidden="true"
                                  className={`flex h-4 w-4 items-center justify-center rounded-full border-2 transition-colors duration-200 ${
                                    program === p ? "border-yellow" : "border-mist/40"
                                  }`}
                                >
                                  {program === p && <div className="h-2 w-2 rounded-full bg-yellow" />}
                                </div>
                                <span className="text-sm text-paper">{p}</span>
                              </label>
                            ))}
                          </div>
                        </fieldset>

                        {/* Session — real radio inputs */}
                        <fieldset>
                          <legend className={labelClass}>
                            Choose Session <span className="text-yellow" aria-label="required">*</span>
                          </legend>
                          <div className="mt-2 flex flex-wrap gap-4">
                            {SESSION_OPTIONS.map(s => (
                              <label key={s.id} className="flex cursor-pointer items-center gap-2.5">
                                <input
                                  type="radio"
                                  name="session"
                                  value={s.id}
                                  checked={session === s.id}
                                  onChange={() => setSession(s.id)}
                                  className="sr-only"
                                />
                                <div
                                  aria-hidden="true"
                                  className={`flex h-4 w-4 items-center justify-center rounded-full border-2 transition-colors duration-200 ${
                                    session === s.id ? "border-yellow" : "border-mist/40"
                                  }`}
                                >
                                  {session === s.id && <div className="h-2 w-2 rounded-full bg-yellow" />}
                                </div>
                                <span className="text-sm text-paper">{s.label}</span>
                              </label>
                            ))}
                          </div>
                        </fieldset>

                        {/* Payment method — real radio inputs */}
                        <fieldset>
                          <legend className={labelClass}>
                            Payment Method <span className="text-yellow" aria-label="required">*</span>
                          </legend>
                          <div className="mt-2 flex flex-wrap gap-4">
                            {PAYMENT_OPTIONS.map(p => (
                              <label key={p.id} className="flex cursor-pointer items-start gap-2.5">
                                <input
                                  type="radio"
                                  name="payment"
                                  value={p.id}
                                  checked={payment === p.id}
                                  onChange={() => setPayment(p.id)}
                                  className="sr-only"
                                />
                                <div
                                  aria-hidden="true"
                                  className={`mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full border-2 transition-colors duration-200 ${
                                    payment === p.id ? "border-yellow" : "border-mist/40"
                                  }`}
                                >
                                  {payment === p.id && <div className="h-2 w-2 rounded-full bg-yellow" />}
                                </div>
                                <span className="text-sm text-paper whitespace-pre-line">{p.label}</span>
                              </label>
                            ))}
                          </div>
                        </fieldset>

                        {/* Agreement */}
                        <label className="flex cursor-pointer items-start gap-3">
                          <input
                            type="checkbox"
                            checked={agreed}
                            onChange={e => setAgreed(e.target.checked)}
                            className="sr-only"
                          />
                          <div
                            aria-hidden="true"
                            className={`mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded border transition-colors duration-200 ${
                              agreed ? "border-yellow bg-yellow" : "border-mist/40 bg-white/5"
                            }`}
                          >
                            {agreed && (
                              <svg className="h-2.5 w-2.5 text-ink" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                              </svg>
                            )}
                          </div>
                          <span className="text-xs text-mist/70">
                            I confirm that I have read, understood, and agree to Forte Institute&apos;s Fee &amp; Payments Policy.{" "}
                            <span className="text-yellow" aria-label="required">*</span>
                          </span>
                        </label>
                      </div>
                    </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Footer buttons */}
              <div className="shrink-0 flex gap-3 border-t border-glass-border px-6 py-4">
                {step === 1 && (
                  <button
                    onClick={goPrev}
                    className="flex-1 rounded-xl border border-glass-border py-3 text-sm font-bold text-mist transition-colors duration-200 hover:border-white/30 hover:text-paper"
                  >
                    ← Previous
                  </button>
                )}
                {step === 0 ? (
                  <motion.button
                    whileTap={{ scale: 0.97 }}
                    onClick={goNext}
                    disabled={!step1Valid}
                    className="flex-1 rounded-xl bg-yellow py-3 text-sm font-bold text-ink transition-colors duration-200 hover:bg-yellow-deep hover:text-paper disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    Next →
                  </motion.button>
                ) : (
                  <motion.button
                    whileTap={{ scale: 0.97 }}
                    onClick={handleSubmit}
                    disabled={!step2Valid}
                    className="flex-1 rounded-xl bg-yellow py-3 text-sm font-bold text-ink transition-colors duration-200 hover:bg-yellow-deep hover:text-paper disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    Submit Registration
                  </motion.button>
                )}
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

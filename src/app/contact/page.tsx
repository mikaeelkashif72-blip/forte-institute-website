"use client";

import { useState, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FadeUp } from "@/components/ui/fade-up";
import { motion } from "motion/react";

// Replace with your real site key from https://www.google.com/recaptcha/admin
const RECAPTCHA_SITE_KEY = "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI";

const CONTACT_ITEMS = [
  {
    label: "Phone",
    value: "+92 325 302 5031",
    href: "tel:+923253025031",
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
    ),
  },
  {
    label: "Email",
    value: "connectwithforte@gmail.com",
    href: "mailto:connectwithforte@gmail.com",
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    value: "@forte.institute",
    href: "https://www.instagram.com/forte.institute",
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
      </svg>
    ),
  },
  {
    label: "Facebook",
    value: "Muhammad Yousuf Memon",
    href: "https://www.facebook.com/mym.muhammadyousufmemon",
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    ),
  },
];


export default function ContactPage() {
  const [form, setForm] = useState({ name: "", contact: "", message: "" });
  const [captchaDone, setCaptchaDone] = useState(false);
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const [sent, setSent] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!captchaDone) return;
    const text = encodeURIComponent(
      `Hi Forte Institute,\n\nName: ${form.name}\nContact: ${form.contact}\n\n${form.message}`
    );
    window.open(`https://wa.me/923253025031?text=${text}`, "_blank");
    setSent(true);
    recaptchaRef.current?.reset();
    setCaptchaDone(false);
  }

  return (
    <>
      <Header />
      <main className="bg-void">

        {/* Page hero */}
        <section className="border-b border-glass-border px-6 pt-20 pb-16">
          <div className="mx-auto max-w-6xl">
            <FadeUp>
              <p className="mb-3 text-sm font-bold tracking-wide text-yellow">Get in Touch</p>
              <h1 className="font-heading text-4xl font-bold leading-tight text-paper md:text-5xl lg:text-6xl">
                Register for Cambridge<br className="hidden sm:block" /> O&nbsp;Level &amp; A&nbsp;Level classes.
              </h1>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-mist">
                Whether you have questions about O Level admissions, IGCSE subjects, or recorded class access — message us and we&apos;ll respond within a few hours. Students across Pakistan enrol online every session.
              </p>
            </FadeUp>
          </div>
        </section>

        {/* Two-column layout */}
        <section className="px-6 py-16 md:py-24">
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-16 lg:grid-cols-2">

            {/* Left — contact info */}
            <FadeUp>
              <h2 className="font-heading text-2xl font-bold text-paper md:text-3xl">
                Reach us directly.
              </h2>
              <p className="mt-3 max-w-sm text-base leading-relaxed text-mist">
                For the fastest response, message us on WhatsApp. We teach Cambridge O Level, IGCSE and A Level in Karachi and online across Pakistan.
              </p>

              <ul className="mt-10 flex flex-col gap-4">
                {CONTACT_ITEMS.map((item) => (
                  <motion.li key={item.label} whileHover={{ x: 4 }} transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}>
                    <a
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="group flex items-center gap-4"
                    >
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-glass-border bg-white/5 text-yellow transition-colors duration-200 group-hover:border-yellow/30 group-hover:bg-yellow/10">
                        {item.icon}
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-widest text-mist/60">{item.label}</p>
                        <p className="text-sm font-semibold text-paper transition-colors duration-200 group-hover:text-yellow">
                          {item.value}
                        </p>
                      </div>
                    </a>
                  </motion.li>
                ))}
              </ul>

              <div className="mt-12 border-t border-glass-border pt-10">
                <p className="text-sm font-bold text-paper">Response time</p>
                <p className="mt-2 text-sm leading-relaxed text-mist">
                  WhatsApp messages are typically answered within 24 hours.
                </p>
                <p className="mt-2 text-sm leading-relaxed text-mist">
                  For urgent enquiries, call directly on{" "}
                  <a href="tel:+923253025031" className="text-yellow transition-colors hover:text-paper">
                    +92 325 302 5031
                  </a>
                  .
                </p>
              </div>
            </FadeUp>

            {/* Right — form */}
            <FadeUp delay={0.1}>
              <div className="rounded-2xl border border-glass-border bg-white/[0.03] p-8">
                <h2 className="font-heading text-xl font-bold text-paper">Send a message</h2>
                <p className="mt-1 text-sm text-mist">We&apos;ll get back to you within a few hours.</p>

                {sent ? (
                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="mt-8 rounded-xl border border-yellow/20 bg-yellow/10 p-8 text-center"
                  >
                    <p className="font-heading text-2xl font-bold text-yellow">Opening WhatsApp</p>
                    <p className="mt-2 text-sm text-mist">Your message is pre-filled — just tap Send in WhatsApp.</p>
                    <button
                      onClick={() => setSent(false)}
                      className="mt-5 text-xs text-mist/60 underline transition-colors hover:text-mist"
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-5">
                    <div>
                      <label htmlFor="name" className="mb-1.5 block text-xs font-semibold uppercase tracking-widest text-mist/70">
                        Your Name <span className="text-yellow">*</span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="e.g. Ali Hassan"
                        className="w-full rounded-xl border border-glass-border bg-white/5 px-4 py-3 text-sm text-paper placeholder:text-mist/40 outline-none transition-colors duration-200 focus:border-yellow/40 focus:bg-white/[0.08]"
                      />
                    </div>

                    <div>
                      <label htmlFor="contact" className="mb-1.5 block text-xs font-semibold uppercase tracking-widest text-mist/70">
                        Phone or Email <span className="text-yellow">*</span>
                      </label>
                      <input
                        id="contact"
                        name="contact"
                        type="text"
                        required
                        value={form.contact}
                        onChange={handleChange}
                        placeholder="+92 3XX XXXXXXX or email@example.com"
                        className="w-full rounded-xl border border-glass-border bg-white/5 px-4 py-3 text-sm text-paper placeholder:text-mist/40 outline-none transition-colors duration-200 focus:border-yellow/40 focus:bg-white/[0.08]"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="mb-1.5 block text-xs font-semibold uppercase tracking-widest text-mist/70">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Tell us which subject, your current level, and when you'd like to start…"
                        className="w-full resize-none rounded-xl border border-glass-border bg-white/5 px-4 py-3 text-sm text-paper placeholder:text-mist/40 outline-none transition-colors duration-200 focus:border-yellow/40 focus:bg-white/[0.08]"
                      />
                    </div>

                    {/* reCAPTCHA */}
                    <div>
                      <ReCAPTCHA
                        ref={recaptchaRef}
                        sitekey={RECAPTCHA_SITE_KEY}
                        theme="dark"
                        onChange={(token) => setCaptchaDone(!!token)}
                        onExpired={() => setCaptchaDone(false)}
                      />
                    </div>

                    <motion.button
                      type="submit"
                      whileTap={{ scale: 0.97 }}
                      disabled={!captchaDone}
                      className="mt-1 flex w-full items-center justify-center gap-2 rounded-xl bg-yellow py-3.5 text-sm font-bold text-ink transition-colors duration-200 hover:bg-yellow-deep hover:text-paper disabled:cursor-not-allowed disabled:opacity-40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow focus-visible:ring-offset-2 focus-visible:ring-offset-void"
                    >
                      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                      </svg>
                      Send via WhatsApp
                    </motion.button>
                  </form>
                )}
              </div>
            </FadeUp>

          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}

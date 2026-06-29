"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

const navLinks = [
  { href: "/subjects/o-level", label: "O Level" },
  { href: "/subjects/a-level", label: "A Level" },
  { href: "/live-classes", label: "Live Classes" },
  { href: "/recorded-classes", label: "Recorded Classes" },
  { href: "/results", label: "Results" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const reducedMotion = useReducedMotion();

  return (
    <header className="sticky top-0 z-50 border-b border-glass-border bg-void/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <Link
          href="/"
          className="rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow focus-visible:ring-offset-2 focus-visible:ring-offset-void"
        >
          <Image
            src="/logo-white.png"
            alt="Forte Institute"
            width={1080}
            height={478}
            className="h-9 w-auto sm:h-10"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-semibold text-mist md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-sm transition-colors hover:text-mist-bright focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow focus-visible:ring-offset-2 focus-visible:ring-offset-void"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden rounded-full bg-yellow px-5 py-2 text-sm font-bold text-ink transition-all hover:bg-yellow-deep hover:text-paper active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow focus-visible:ring-offset-2 focus-visible:ring-offset-void sm:block"
          >
            Register Now
          </Link>
          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            onClick={() => setMenuOpen((open) => !open)}
            className="flex h-11 w-11 items-center justify-center rounded-md border border-glass-border text-mist-bright focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow focus-visible:ring-offset-2 focus-visible:ring-offset-void md:hidden"
          >
            <span className="sr-only">{menuOpen ? "Close menu" : "Open menu"}</span>
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
              <motion.path
                strokeLinecap="round"
                animate={menuOpen ? "open" : "closed"}
                variants={{ open: { d: "M6 6l12 12" }, closed: { d: "M4 7h16" } }}
                transition={{ duration: reducedMotion ? 0 : 0.25, ease: [0.16, 1, 0.3, 1] }}
              />
              <motion.path
                strokeLinecap="round"
                animate={menuOpen ? "open" : "closed"}
                variants={{ open: { opacity: 0 }, closed: { opacity: 1, d: "M4 12h16" } }}
                transition={{ duration: reducedMotion ? 0 : 0.2 }}
              />
              <motion.path
                strokeLinecap="round"
                animate={menuOpen ? "open" : "closed"}
                variants={{ open: { d: "M18 6L6 18" }, closed: { d: "M4 17h16" } }}
                transition={{ duration: reducedMotion ? 0 : 0.25, ease: [0.16, 1, 0.3, 1] }}
              />
            </svg>
          </button>
        </div>
      </div>

      <AnimatePresence initial={false}>
        {menuOpen && (
          <motion.nav
            id="mobile-nav"
            initial={reducedMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
            animate={reducedMotion ? { opacity: 1 } : { height: "auto", opacity: 1 }}
            exit={reducedMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
            transition={{ duration: reducedMotion ? 0.01 : 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-t border-glass-border bg-void/95 backdrop-blur-xl md:hidden"
          >
            <ul className="flex flex-col px-6 py-4 text-base font-semibold text-mist">
              {navLinks.map((link, index) => (
                <motion.li
                  key={link.href}
                  initial={reducedMotion ? false : { opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.25,
                    delay: reducedMotion ? 0 : 0.05 + index * 0.04,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="block rounded-sm py-2.5 transition-colors hover:text-mist-bright focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow focus-visible:ring-offset-2 focus-visible:ring-offset-void"
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
              <motion.li
                initial={reducedMotion ? false : { opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.25,
                  delay: reducedMotion ? 0 : 0.05 + navLinks.length * 0.04,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <Link
                  href="/contact"
                  onClick={() => setMenuOpen(false)}
                  className="mt-2 block rounded-full bg-yellow px-4 py-3 text-center text-sm font-bold text-ink active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow focus-visible:ring-offset-2 focus-visible:ring-offset-void"
                >
                  Register Now
                </Link>
              </motion.li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

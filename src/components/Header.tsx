"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { AnimatedBackground } from "@/components/core/animated-background";

function getSessionLabel(): string {
  const month = new Date().getMonth() + 1; // 1–12
  const year = new Date().getFullYear();
  const y = String(year).slice(-2);
  const nextY = String(year + 1).slice(-2);
  // Dec–Mar: promote May/Jun registration
  if (month === 12) return `Register for May/Jun '${nextY}`;
  if (month >= 1 && month <= 3) return `Register for May/Jun '${y}`;
  // Jun–Aug: promote Oct/Nov registration
  if (month >= 6 && month <= 8) return `Register for Oct/Nov '${y}`;
  // Apr, May, Sep, Oct, Nov: generic
  return "Register Now";
}

const SESSION_LABEL = getSessionLabel();

const navLinks = [
  { href: "/",                    label: "Home"              },
  { href: "/subjects/o-level",    label: "O Level"           },
  { href: "/subjects/a-level",    label: "A Level"           },
  { href: "/recorded-classes",    label: "Recorded Classes"  },
  { href: "/contact",             label: "Contact"           },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const reducedMotion = useReducedMotion();
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-void px-4 pt-4 pb-0 relative">
      {/* Floating pill */}
      <div className="mx-auto flex max-w-6xl items-center justify-between rounded-full border border-glass-border bg-white/5 px-5 py-3 md:px-7 md:py-4 backdrop-blur-2xl">
        {/* Logo */}
        <Link
          href="/"
          className="rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow focus-visible:ring-offset-2 focus-visible:ring-offset-void"
        >
          <Image
            src="/logo-white.png"
            alt="Forte Institute"
            width={1080}
            height={478}
            className="h-7 w-auto sm:h-8"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center text-sm font-semibold text-mist md:flex">
          <AnimatedBackground
            defaultValue={pathname}
            className="rounded-full bg-white/10"
            transition={reducedMotion ? { duration: 0 } : { type: "spring", stiffness: 500, damping: 40, mass: 0.6 }}
            enableHover
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                data-id={link.href}
                className="block px-3 py-1.5 transition-colors duration-200 hover:text-paper focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow focus-visible:ring-offset-2 focus-visible:ring-offset-void"
              >
                {link.label}
              </Link>
            ))}
          </AnimatedBackground>
        </nav>

        <div className="flex items-center gap-3">
          {/* Desktop CTA */}
          <Link
            href="/contact"
            className="hidden rounded-xl bg-yellow px-4 py-1.5 text-sm font-bold text-ink transition-all duration-200 hover:bg-[#F5C518] hover:scale-[1.03] active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow focus-visible:ring-offset-2 focus-visible:ring-offset-void sm:block"
          >
            {SESSION_LABEL}
          </Link>

          {/* Hamburger — mobile only */}
          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            onClick={() => setMenuOpen((open) => !open)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-glass-border text-paper focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow focus-visible:ring-offset-2 focus-visible:ring-offset-void md:hidden"
          >
            <span className="sr-only">{menuOpen ? "Close menu" : "Open menu"}</span>
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
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

      {/* Mobile drawer */}
      <AnimatePresence initial={false}>
        {menuOpen && (
          <motion.nav
            id="mobile-nav"
            initial={reducedMotion ? { opacity: 0 } : { opacity: 0, scale: 0.94, y: -12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={reducedMotion ? { opacity: 0 } : { opacity: 0, scale: 0.94, y: -12 }}
            transition={reducedMotion ? { duration: 0.01 } : { type: "spring", stiffness: 380, damping: 30 }}
            style={{ transformOrigin: "top center" }}
            className="absolute inset-x-4 top-full mt-2 overflow-hidden rounded-2xl border border-glass-border bg-void/95 px-4 backdrop-blur-xl md:hidden"
          >
            <ul className="flex flex-col py-3 text-base font-semibold text-mist">
              {navLinks.map((link, index) => (
                <motion.li
                  key={link.href}
                  initial={reducedMotion ? false : { opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.28, delay: reducedMotion ? 0 : 0.06 + index * 0.045, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="block rounded-xl px-3 py-2.5 transition-colors hover:bg-white/5 hover:text-paper focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow focus-visible:ring-offset-2 focus-visible:ring-offset-void"
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
              <motion.li
                initial={reducedMotion ? false : { opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.28, delay: reducedMotion ? 0 : 0.06 + navLinks.length * 0.045, ease: [0.16, 1, 0.3, 1] }}
                className="mt-1 pb-1"
              >
                <Link
                  href="/contact"
                  onClick={() => setMenuOpen(false)}
                  className="block rounded-xl bg-yellow px-4 py-2.5 text-center text-sm font-bold text-ink transition-all duration-200 hover:bg-[#F5C518] hover:scale-[1.03] active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow focus-visible:ring-offset-2 focus-visible:ring-offset-void"
                >
                  {SESSION_LABEL}
                </Link>
              </motion.li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

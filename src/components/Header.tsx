"use client";

import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { href: "/subjects/o-level", label: "O Level" },
  { href: "/subjects/a-level", label: "A Level" },
  { href: "/results", label: "Results" },
  { href: "/programs", label: "Programs" },
  { href: "/teachers", label: "Teachers" },
  { href: "/about", label: "About" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-glass-border bg-void/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="rounded-sm font-heading text-xl font-bold text-mist-bright focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-bright"
        >
          Forte<span className="text-violet-bright">.</span>
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium text-mist md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-sm transition-colors hover:text-mist-bright focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-bright"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden rounded-full bg-aurora-gradient px-5 py-2 text-sm font-semibold text-void transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-bright sm:block"
          >
            Book Free Trial
          </Link>
          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            onClick={() => setMenuOpen((open) => !open)}
            className="flex h-11 w-11 items-center justify-center rounded-md border border-glass-border text-mist-bright focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-bright md:hidden"
          >
            <span className="sr-only">{menuOpen ? "Close menu" : "Open menu"}</span>
            {menuOpen ? (
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav
          id="mobile-nav"
          className="border-t border-glass-border bg-void/95 px-6 py-4 backdrop-blur-xl md:hidden"
        >
          <ul className="flex flex-col text-base font-medium text-mist">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block rounded-sm py-2.5 transition-colors hover:text-mist-bright focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-bright"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/contact"
                onClick={() => setMenuOpen(false)}
                className="mt-2 block rounded-full bg-aurora-gradient px-4 py-3 text-center text-sm font-semibold text-void focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-bright"
              >
                Book Free Trial
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}

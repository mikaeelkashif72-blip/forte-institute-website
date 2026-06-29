"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { href: "/subjects/o-level", label: "O Level" },
  { href: "/subjects/a-level", label: "A Level" },
  { href: "/live-classes", label: "Live Classes" },
  { href: "/recorded-classes", label: "Recorded Classes" },
  { href: "/results", label: "Results" },
  { href: "/about", label: "About" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-ink-10 bg-paper/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <Link
          href="/"
          className="rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-deep focus-visible:ring-offset-2 focus-visible:ring-offset-paper"
        >
          <Image
            src="/logo.png"
            alt="Forte Institute"
            width={1080}
            height={478}
            className="h-9 w-auto sm:h-10"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-semibold text-ink-60 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-sm transition-colors hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-deep focus-visible:ring-offset-2 focus-visible:ring-offset-paper"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden rounded-full bg-yellow px-5 py-2 text-sm font-bold text-ink transition-colors hover:bg-yellow-deep hover:text-paper focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-deep focus-visible:ring-offset-2 focus-visible:ring-offset-paper sm:block"
          >
            Book Free Trial
          </Link>
          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            onClick={() => setMenuOpen((open) => !open)}
            className="flex h-11 w-11 items-center justify-center rounded-md border border-ink-10 text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-deep focus-visible:ring-offset-2 focus-visible:ring-offset-paper md:hidden"
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
          className="border-t border-ink-10 bg-paper/95 px-6 py-4 backdrop-blur-xl md:hidden"
        >
          <ul className="flex flex-col text-base font-semibold text-ink-60">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block rounded-sm py-2.5 transition-colors hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-deep focus-visible:ring-offset-2 focus-visible:ring-offset-paper"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/contact"
                onClick={() => setMenuOpen(false)}
                className="mt-2 block rounded-full bg-yellow px-4 py-3 text-center text-sm font-bold text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-deep focus-visible:ring-offset-2 focus-visible:ring-offset-paper"
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

"use client";

import Link from "next/link";
import Image from "next/image";
import { useOpenRegistration } from "@/components/RegistrationModalProvider";

const navLinks = [
  { href: "/subjects/o-level",   label: "O Level"           },
  { href: "/subjects/a-level",   label: "A Level"           },
  { href: "/recorded-classes",   label: "Recorded Classes"  },
  { href: "/live-classes",       label: "Live Classes"      },
  { href: "/results",            label: "Results"           },
  { href: "/about",              label: "About"             },
  { href: "/faq",                label: "FAQ"                },
  { href: "/contact",            label: "Contact"           },
];

export default function Footer() {
  const openRegistration = useOpenRegistration();
  return (
    <footer className="bg-ink px-6 pt-12 pb-8">
      <div className="mx-auto max-w-6xl">

        {/* Top row */}
        <div className="flex flex-col gap-10 sm:flex-row sm:justify-between">

          {/* Brand column */}
          <div className="max-w-xs">
            <Link href="/" aria-label="Forte Institute — home">
              <Image
                src="/logo-white.png"
                alt="Forte Institute"
                width={1080}
                height={478}
                className="h-8 w-auto"
              />
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-cream/55">
              Pakistan&apos;s dedicated Cambridge O Level, IGCSE and A Level institute — expert tutors, small batches, consistent A* results.
            </p>

            {/* Contact */}
            <ul className="mt-5 flex flex-col gap-3 text-sm text-cream/55">
              <li>
                <a
                  href="mailto:connectwithforte@gmail.com"
                  className="flex items-center gap-2.5 hover:text-cream transition-colors duration-200"
                >
                  <svg className="h-4 w-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                  connectwithforte@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+923253025031"
                  className="flex items-center gap-2.5 hover:text-cream transition-colors duration-200"
                >
                  <svg className="h-4 w-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                  +92 325 302 5031
                </a>
              </li>
            </ul>

            {/* Socials */}
            <div className="mt-5 flex items-center gap-3">
              {/* Instagram */}
              <a
                href="https://www.instagram.com/forte.institute"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Forte Institute on Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-cream/20 text-cream/70 transition-colors duration-200 hover:border-cream/40 hover:text-cream"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </a>

              {/* YouTube */}
              <a
                href="https://www.youtube.com/@muhammadyousufmemon687"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Forte Institute on YouTube"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-cream/20 text-cream/70 transition-colors duration-200 hover:border-cream/40 hover:text-cream"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>

              {/* Facebook */}
              <a
                href="https://www.facebook.com/mym.muhammadyousufmemon"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Forte Institute on Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-cream/20 text-cream/70 transition-colors duration-200 hover:border-cream/40 hover:text-cream"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>

              {/* Google reviews */}
              <a
                href="https://share.google/CN3nEGt8iF3Y0T4dB"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Forte Institute on Google Reviews"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-cream/20 text-cream/70 transition-colors duration-200 hover:border-cream/40 hover:text-cream"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Right column: nav + CTA stacked */}
          <div className="flex flex-col gap-8 sm:flex-row sm:gap-14">
            <nav aria-label="Footer navigation">
              <p className="mb-4 text-xs font-bold uppercase tracking-widest text-cream/50">Pages</p>
              <ul className="grid grid-cols-2 gap-x-10 gap-y-2.5">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-cream/90 transition-colors duration-200 hover:text-cream"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div>
              <p className="mb-4 text-xs font-bold uppercase tracking-widest text-cream/50">Get Started</p>
              <p className="text-sm leading-relaxed text-cream/55 max-w-[180px]">
                Register for the upcoming O Level or A Level session.
              </p>
              <button
                onClick={() => openRegistration()}
                className="mt-4 inline-block rounded-xl bg-gold px-5 py-2.5 text-sm font-bold text-ink transition-all duration-200 hover:bg-gold-deep hover:text-cream active:scale-[0.97]"
              >
                Register for Class →
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-cream/15 pt-5 text-xs text-cream/50 sm:flex-row">
          <p>&copy; {new Date().getFullYear()} Forte Institute. All rights reserved.</p>
          <p>Cambridge O Level · IGCSE · A Level Tuition in Pakistan</p>
        </div>
      </div>
    </footer>
  );
}

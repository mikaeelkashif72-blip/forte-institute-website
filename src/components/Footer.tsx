import Link from "next/link";

const footerLinks = [
  { href: "/subjects/o-level", label: "O Level" },
  { href: "/subjects/a-level", label: "A Level" },
  { href: "/live-classes", label: "Live Classes" },
  { href: "/recorded-classes", label: "Recorded Classes" },
  { href: "/results", label: "Results" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-glass-border px-6 py-10">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 text-sm text-mist sm:flex-row sm:justify-between">
        <Link
          href="/"
          className="rounded-sm font-heading text-base font-bold text-mist-bright focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-bright"
        >
          Forte<span className="text-violet-bright">.</span>
        </Link>

        <nav aria-label="Footer">
          <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="rounded-sm transition-colors hover:text-mist-bright focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-bright"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <p className="text-xs text-mist">&copy; {new Date().getFullYear()} Forte Institute.</p>
      </div>
    </footer>
  );
}

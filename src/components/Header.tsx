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
  return (
    <header className="sticky top-0 z-50 border-b border-ink-100 bg-cream-100/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="font-heading text-xl font-bold text-ink">
          Forte<span className="text-accent">.</span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium text-ink-400 md:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="transition-colors hover:text-ink">
              {link.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/contact"
          className="rounded-md bg-ink px-4 py-2 text-sm font-semibold text-cream transition-colors hover:bg-ink-900"
        >
          Book Free Trial
        </Link>
      </div>
    </header>
  );
}

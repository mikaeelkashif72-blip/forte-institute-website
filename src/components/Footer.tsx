import Link from "next/link";
import Container from "./Container";

const links = [
  { href: "/", label: "Home" },
  { href: "/subjects", label: "Subjects" },
  { href: "/teachers", label: "Teachers" },
  { href: "/results", label: "Results" },
  { href: "/programs", label: "Programs" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-ink-muted/15 bg-background-surface">
      <Container className="flex flex-col gap-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-heading text-base font-semibold text-ink">
          Forte <span className="text-accent">Institute</span>
        </p>
        <ul className="flex flex-wrap gap-5 text-sm text-ink-muted">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="transition-colors duration-200 hover:text-accent-terracotta"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <p className="text-sm text-ink-muted">
          &copy; {new Date().getFullYear()} Forte Institute. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}

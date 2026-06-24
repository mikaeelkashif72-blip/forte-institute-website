import Link from "next/link";
import Container from "./Container";
import Button from "./Button";

const links = [
  { href: "/", label: "Home" },
  { href: "/subjects", label: "Subjects" },
  { href: "/teachers", label: "Teachers" },
  { href: "/results", label: "Results" },
  { href: "/programs", label: "Programs" },
  { href: "/about", label: "About" },
];

export default function Navbar() {
  return (
    <header className="border-b border-border bg-background">
      <Container className="flex items-center justify-between py-4">
        <Link href="/" className="font-heading text-lg font-bold text-ink">
          Forte <span className="text-accent">Institute</span>
        </Link>
        <ul className="hidden flex-wrap gap-6 text-sm font-medium text-ink-muted sm:flex">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="transition-colors duration-200 hover:text-accent"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <Button href="/contact" variant="primary" className="px-5 py-2 text-xs">
          Contact
        </Button>
      </Container>
    </header>
  );
}

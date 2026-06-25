import { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";
import Link from "next/link";

type Variant = "primary" | "secondary";

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-accent text-background hover:bg-accent-hover hover:text-background hover:shadow-[0_0_24px_rgba(242,185,75,0.45)] focus-visible:outline-accent",
  secondary:
    "border border-border text-ink hover:border-accent-hover hover:text-accent-hover hover:shadow-[0_0_20px_rgba(45,212,191,0.25)] focus-visible:outline-accent",
};

const baseClasses =
  "inline-flex items-center justify-center rounded-full px-6 py-3 font-heading text-sm font-semibold tracking-wide transition-all duration-200 hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-50 disabled:pointer-events-none disabled:hover:scale-100";

interface CommonProps {
  variant?: Variant;
  className?: string;
}

type ButtonAsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type ButtonAsLink = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

type ButtonProps = ButtonAsButton | ButtonAsLink;

export default function Button({
  variant = "primary",
  className = "",
  href,
  ...props
}: ButtonProps) {
  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <Link
        href={href}
        className={classes}
        {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}
      />
    );
  }

  return (
    <button
      className={classes}
      {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
    />
  );
}

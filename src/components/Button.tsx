import { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";
import Link from "next/link";

type Variant = "primary" | "secondary";

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-accent text-white shadow-sm shadow-accent/20 hover:bg-accent-hover focus-visible:outline-accent",
  secondary:
    "border border-border text-ink hover:border-accent hover:text-accent focus-visible:outline-accent",
};

const baseClasses =
  "inline-flex items-center justify-center rounded-lg px-6 py-3 font-heading text-sm font-semibold tracking-wide transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-50 disabled:pointer-events-none";

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

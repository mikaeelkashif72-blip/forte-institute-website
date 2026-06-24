import { HTMLAttributes } from "react";

export default function Card({
  className = "",
  children,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={`rounded-2xl border border-ink-muted/15 bg-background-surface p-6 transition-colors duration-200 hover:border-accent-teal/40 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

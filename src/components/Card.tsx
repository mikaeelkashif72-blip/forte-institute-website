import { HTMLAttributes } from "react";

export default function Card({
  className = "",
  children,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={`rounded-2xl border border-ink-muted/15 bg-background-surface p-6 shadow-sm shadow-ink/5 transition-all duration-200 ease-out hover:-translate-y-1 hover:border-accent-terracotta/40 hover:shadow-lg hover:shadow-ink/10 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

import { HTMLAttributes } from "react";

export default function Card({
  className = "",
  children,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={`rounded-2xl border border-border bg-background-surface p-6 shadow-sm shadow-black/20 transition-all duration-200 ease-out hover:-translate-y-1 hover:border-accent/40 hover:shadow-lg hover:shadow-black/40 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

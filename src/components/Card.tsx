import { HTMLAttributes } from "react";

export default function Card({
  className = "",
  children,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={`rounded-xl border border-border bg-background-surface p-6 transition-all duration-200 ease-out hover:-translate-y-0.5 hover:border-accent/50 hover:shadow-md hover:shadow-accent/10 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

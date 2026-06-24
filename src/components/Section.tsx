import { HTMLAttributes } from "react";
import Container from "./Container";

interface SectionProps extends HTMLAttributes<HTMLElement> {
  surface?: boolean;
}

export default function Section({
  className = "",
  surface = false,
  children,
  ...props
}: SectionProps) {
  return (
    <section
      className={`py-16 sm:py-24 ${surface ? "bg-background-surface" : ""} ${className}`}
      {...props}
    >
      <Container>{children}</Container>
    </section>
  );
}

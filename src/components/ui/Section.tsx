import type { ReactNode } from "react";
import Container from "./Container";

/**
 * Section shell: consistent vertical rhythm plus the hairline top border that
 * separates bands instead of the old alternating background colors.
 */
export default function Section({
  id,
  children,
  className = "",
  bordered = true,
}: {
  id: string;
  children: ReactNode;
  className?: string;
  bordered?: boolean;
}) {
  return (
    <section
      id={id}
      className={`relative py-24 md:py-32 ${
        bordered ? "border-t border-white/[0.06]" : ""
      } ${className}`}
    >
      <Container>{children}</Container>
    </section>
  );
}

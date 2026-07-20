import type { ReactNode } from "react";

/** The single source of truth for horizontal rhythm across every section. */
export default function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-6xl px-6 md:px-10 lg:px-12 ${className}`}>
      {children}
    </div>
  );
}

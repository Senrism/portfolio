"use client";

import { useEffect, useState } from "react";

/**
 * Tracks which section is under the vertical center of the viewport.
 *
 * Uses a single IntersectionObserver with a zero-height root — a horizontal
 * line at the viewport middle — so exactly one contiguous section intersects
 * at a time. Replaces the previous unthrottled scroll listener that ran a
 * getElementById loop on every frame.
 */
export function useScrollSpy(sectionIds: readonly string[], fallback = sectionIds[0]) {
  const [activeSection, setActiveSection] = useState(fallback);

  useEffect(() => {
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        }
      },
      { rootMargin: "-50% 0px -50% 0px", threshold: 0 },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [sectionIds]);

  return activeSection;
}

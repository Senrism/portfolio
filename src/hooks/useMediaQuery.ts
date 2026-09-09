"use client";

import { useEffect, useState } from "react";

/**
 * Subscribes to a media query. Starts false on the server and on the first
 * client render so markup matches during hydration, then corrects in an
 * effect — a mismatch here would throw away the whole tree.
 */
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia(query);
    const update = () => setMatches(mql.matches);

    update();
    mql.addEventListener("change", update);
    return () => mql.removeEventListener("change", update);
  }, [query]);

  return matches;
}

/** Below this width the desk drops drag and windows go full-screen. */
export const useIsHandheld = () => useMediaQuery("(max-width: 767px)");

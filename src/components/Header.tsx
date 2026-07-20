"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { NAV_ITEMS, SITE } from "@/lib/site";
import { EASE } from "@/lib/motion";
import Container from "./ui/Container";

export default function Header({ activeSection }: { activeSection: string }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll and allow Escape to dismiss while the mobile panel is open.
  useEffect(() => {
    if (!isMenuOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMenuOpen(false);
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isMenuOpen]);

  // Picking an item from the mobile panel can't scroll immediately: the panel's
  // exit animation tweens the header height for ~350ms, and that continuous
  // layout change cancels an in-flight smooth scroll (it lands back at 0). So
  // we stash the target and fire it from AnimatePresence's onExitComplete,
  // once the panel is fully gone and layout has settled.
  const pendingScroll = useRef<string | null>(null);

  const flushPendingScroll = () => {
    const target = pendingScroll.current;
    if (!target) return;
    pendingScroll.current = null;
    document.getElementById(target)?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToSection = (sectionId: string) => {
    if (isMenuOpen) {
      pendingScroll.current = sectionId;
      setIsMenuOpen(false);
      return;
    }
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: EASE }}
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        isScrolled || isMenuOpen
          ? "border-b border-white/[0.06] bg-ink-950/80 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <Container>
        <nav className="flex h-16 items-center justify-between md:h-20">
          <button
            onClick={() => scrollToSection("home")}
            className="font-mono text-sm tracking-label text-fg transition-colors hover:text-accent"
            aria-label="Back to top"
          >
            {SITE.initials}
            <span className="ml-1 text-accent">.</span>
          </button>

          <ul className="hidden items-center gap-1 md:flex">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`relative px-4 py-2 text-sm transition-colors duration-300 ${
                    activeSection === item.id
                      ? "text-fg"
                      : "text-fg-muted hover:text-fg"
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-x-3 -bottom-px h-px bg-accent"
                      initial={false}
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                </button>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("contact");
            }}
            className="hidden rounded-md border border-white/10 px-4 py-2 text-sm text-fg-muted transition-all duration-300 hover:border-accent/40 hover:text-accent md:block"
          >
            Get in touch
          </a>

          <button
            onClick={() => setIsMenuOpen((open) => !open)}
            className="-mr-2 p-2 text-fg md:hidden"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            <span className="relative block h-4 w-6">
              <motion.span
                animate={isMenuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3, ease: EASE }}
                className="absolute left-0 top-0 block h-px w-6 bg-current"
              />
              <motion.span
                animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.2 }}
                className="absolute left-0 top-[7px] block h-px w-6 bg-current"
              />
              <motion.span
                animate={isMenuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3, ease: EASE }}
                className="absolute left-0 top-[14px] block h-px w-6 bg-current"
              />
            </span>
          </button>
        </nav>
      </Container>

      <AnimatePresence onExitComplete={flushPendingScroll}>
        {isMenuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: EASE }}
            className="overflow-hidden border-t border-white/[0.06] bg-ink-950/95 backdrop-blur-xl md:hidden"
          >
            <Container>
              <ul className="flex flex-col py-4">
                {NAV_ITEMS.map((item, i) => (
                  <motion.li
                    key={item.id}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + i * 0.04, duration: 0.4, ease: EASE }}
                  >
                    <button
                      onClick={() => scrollToSection(item.id)}
                      className={`flex w-full items-center gap-4 py-3 text-left text-lg transition-colors ${
                        activeSection === item.id ? "text-accent" : "text-fg-muted"
                      }`}
                    >
                      <span className="font-mono text-[11px] text-fg-dim">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      {item.label}
                    </button>
                  </motion.li>
                ))}
              </ul>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

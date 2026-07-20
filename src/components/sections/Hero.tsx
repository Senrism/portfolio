"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { FaGithub, FaLinkedin, FaArrowRight } from "react-icons/fa";
import { SITE } from "@/lib/site";
import { EASE } from "@/lib/motion";
import Container from "../ui/Container";

export default function Hero() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.18], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.18], [0, 60]);

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      {/* Hairline grid — the "deep space" substrate. Masked so it dissolves
          toward the edges instead of ending on a hard line. */}
      <div
        aria-hidden
        className="absolute inset-0 bg-grid bg-grid-cell"
        style={{
          maskImage:
            "radial-gradient(ellipse 80% 60% at 50% 40%, black 20%, transparent 80%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 60% at 50% 40%, black 20%, transparent 80%)",
        }}
      />
      {/* Single ambient accent glow, low opacity. */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/3 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/[0.07] blur-[120px]"
      />

      <motion.div style={{ opacity, y }} className="relative z-10 w-full">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.1 }}
            className="mb-8 flex items-center gap-3"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-pulse-dot rounded-full bg-accent" />
            </span>
            <span className="label">Available for select engagements</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: EASE, delay: 0.2 }}
            className="max-w-4xl bg-gradient-to-br from-white via-fg to-fg-muted bg-clip-text text-[2.75rem] font-medium leading-[1.05] tracking-tight text-transparent sm:text-6xl lg:text-7xl"
          >
            Mochamad Febry
            <br />
            Lasena Darmawan
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.35 }}
            className="mt-6 font-mono text-sm text-accent"
          >
            {SITE.role}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.45 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-fg-muted"
          >
            {SITE.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.55 }}
            className="mt-10 flex flex-wrap items-center gap-3"
          >
            <a
              href="#projects"
              className="group flex items-center gap-2.5 rounded-md bg-accent px-5 py-3 text-sm font-medium text-ink-950 transition-all duration-300 hover:bg-accent-dim"
            >
              View selected work
              <FaArrowRight className="text-xs transition-transform duration-300 group-hover:translate-x-0.5" />
            </a>
            <a
              href={SITE.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 rounded-md border border-white/10 px-5 py-3 text-sm text-fg-muted transition-all duration-300 hover:border-white/25 hover:text-fg"
            >
              <FaGithub className="text-base" />
              GitHub
            </a>
            <a
              href={SITE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 rounded-md border border-white/10 px-5 py-3 text-sm text-fg-muted transition-all duration-300 hover:border-white/25 hover:text-fg"
            >
              <FaLinkedin className="text-base" />
              LinkedIn
            </a>
          </motion.div>
        </Container>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        aria-hidden
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          className="h-10 w-px bg-gradient-to-b from-transparent via-white/25 to-transparent"
        />
      </motion.div>
    </section>
  );
}

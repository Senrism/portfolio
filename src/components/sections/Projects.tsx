"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { PROJECTS } from "@/data/projects";
import { fadeUp, inView, stagger } from "@/lib/motion";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";

export default function Projects() {
  return (
    <Section id="projects">
      <SectionHeading
        index="04 / Work"
        title="Selected projects"
        description="Systems built for government, retail, and healthcare — from national reporting platforms to cross-platform attendance apps."
      />

      <motion.div
        {...inView}
        variants={stagger(0.1)}
        className="grid gap-6 md:grid-cols-2"
      >
        {PROJECTS.map((project, index) => (
          <motion.a
            key={project.title}
            variants={fadeUp}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex flex-col overflow-hidden rounded-xl border border-white/[0.08] bg-ink-900/40 transition-all duration-500 hover:border-white/[0.16] hover:bg-ink-900"
          >
            <div className="relative aspect-[16/10] overflow-hidden bg-ink-800">
              <Image
                src={project.image}
                alt={`${project.title} screenshot`}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-top opacity-70 transition-all duration-700 ease-smooth group-hover:scale-[1.03] group-hover:opacity-100"
                priority={index < 2}
              />
              {/* Keeps the screenshot from competing with the text below. */}
              <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/20 to-transparent" />
              <span className="absolute left-4 top-4 rounded-md border border-white/10 bg-ink-950/70 px-2.5 py-1 font-mono text-[10px] uppercase tracking-label text-fg-muted backdrop-blur-sm">
                {project.category}
              </span>
            </div>

            <div className="flex flex-1 flex-col p-6">
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-lg font-medium text-fg transition-colors duration-300 group-hover:text-accent">
                  {project.title}
                </h3>
                <FaArrowUpRightFromSquare className="mt-1 shrink-0 text-xs text-fg-dim transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
              </div>

              <p className="mt-3 flex-1 text-sm leading-relaxed text-fg-muted">
                {project.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-1.5">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded border border-white/[0.06] px-2 py-1 font-mono text-[10px] text-fg-dim"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.a>
        ))}
      </motion.div>
    </Section>
  );
}

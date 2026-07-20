"use client";

import { motion } from "framer-motion";
import { EXPERIENCES } from "@/data/experience";
import { fadeUp, inView, stagger } from "@/lib/motion";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";

export default function Experience() {
  return (
    <Section id="experience">
      <SectionHeading index="02 / Experience" title="Where I've built" />

      <motion.div {...inView} variants={stagger(0.12)} className="relative">
        {/* Timeline spine */}
        <span
          aria-hidden
          className="absolute left-0 top-2 hidden h-full w-px bg-gradient-to-b from-white/15 via-white/[0.06] to-transparent md:block"
        />

        <div className="space-y-14 md:space-y-20">
          {EXPERIENCES.map((exp) => (
            <motion.article
              key={`${exp.company}-${exp.period}`}
              variants={fadeUp}
              className="group relative md:pl-10"
            >
              {/* Timeline node */}
              <span
                aria-hidden
                className="absolute -left-[3px] top-2 hidden h-[7px] w-[7px] rounded-full border border-accent/50 bg-ink-950 transition-all duration-300 group-hover:bg-accent group-hover:shadow-glow md:block"
              />

              <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between md:gap-8">
                <div>
                  <h3 className="text-xl font-medium text-fg md:text-2xl">
                    {exp.title}
                  </h3>
                  <p className="mt-1 text-accent">{exp.company}</p>
                </div>
                <span className="label shrink-0 md:pt-1">{exp.period}</span>
              </div>

              <p className="mt-4 max-w-2xl leading-relaxed text-fg-muted">
                {exp.description}
              </p>

              <ul className="mt-5 space-y-2.5">
                {exp.achievements.map((achievement) => (
                  <li
                    key={achievement}
                    className="flex max-w-2xl items-start gap-3 text-sm leading-relaxed text-fg-muted"
                  >
                    <span
                      aria-hidden
                      className="mt-[9px] h-px w-3 shrink-0 bg-fg-dim"
                    />
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </Section>
  );
}

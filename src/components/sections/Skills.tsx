"use client";

import { motion } from "framer-motion";
import { SKILL_GROUPS } from "@/data/skills";
import { fadeUp, inView, stagger } from "@/lib/motion";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";

export default function Skills() {
  return (
    <Section id="skills">
      <SectionHeading
        index="03 / Stack"
        title="Technical toolkit"
        description="Grouped by layer — the tools I reach for when designing and shipping production systems."
      />

      <motion.div {...inView} variants={stagger(0.1)} className="space-y-px">
        {SKILL_GROUPS.map((group) => (
          <motion.div
            key={group.category}
            variants={fadeUp}
            className="grid gap-5 border-t border-white/[0.06] py-7 md:grid-cols-[180px_1fr] md:gap-10"
          >
            <h3 className="label pt-1.5">{group.category}</h3>
            <div className="flex flex-wrap gap-2.5">
              {group.skills.map(({ name, icon: Icon }) => (
                <span
                  key={name}
                  className="group flex items-center gap-2.5 rounded-md border border-white/[0.08] bg-ink-900/50 px-3.5 py-2 text-sm text-fg-muted transition-all duration-300 hover:border-accent/30 hover:bg-ink-800 hover:text-fg"
                >
                  <Icon className="text-base text-fg-dim transition-colors duration-300 group-hover:text-accent" />
                  {name}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}

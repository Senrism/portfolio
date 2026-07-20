"use client";

import { motion } from "framer-motion";
import { FaCode, FaServer, FaCloud, FaBrain } from "react-icons/fa";
import { fadeUp, inView, stagger } from "@/lib/motion";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";

const CAPABILITIES = [
  { icon: FaCode, title: "Clean Code", detail: "Maintainable & scalable" },
  { icon: FaServer, title: "System Design", detail: "Distributed architecture" },
  { icon: FaBrain, title: "AI-Assisted Analysis", detail: "System design & debugging" },
  { icon: FaCloud, title: "Cloud Native", detail: "AWS, GCP, Azure" },
];

const METRICS = [
  { label: "System availability", value: "99.9%" },
  { label: "Performance score", value: "98/100" },
  { label: "Engineers mentored", value: "20+" },
  { label: "Requests handled daily", value: "10M+" },
];

export default function About() {
  return (
    <Section id="about">
      <SectionHeading
        index="01 / About"
        title="Engineering leadership & architecture"
      />

      <div className="grid gap-14 lg:grid-cols-[1.15fr_1fr] lg:gap-20">
        <motion.div {...inView} variants={fadeUp}>
          <p className="text-base leading-relaxed text-fg-muted md:text-lg">
            I have taken on multiple roles within a company and its teams. Most of my
            responsibilities are closely related to application architecture design,
            program planning, team management, and — most importantly — hands-on coding.
            I remain highly active in continuously learning, reading, and implementing
            modern techniques and programming languages into both the systems I maintain
            and the new applications I develop.
          </p>

          <motion.div
            {...inView}
            variants={stagger(0.07)}
            className="mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-lg border border-white/[0.08] bg-white/[0.08] sm:grid-cols-2"
          >
            {CAPABILITIES.map(({ icon: Icon, title, detail }) => (
              <motion.div
                key={title}
                variants={fadeUp}
                className="group bg-ink-950 p-5 transition-colors duration-300 hover:bg-ink-900"
              >
                <Icon className="mb-3 text-lg text-fg-dim transition-colors duration-300 group-hover:text-accent" />
                <h3 className="text-sm font-medium text-fg">{title}</h3>
                <p className="mt-1 text-sm text-fg-dim">{detail}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div {...inView} variants={fadeUp}>
          <div className="rounded-lg border border-white/[0.08] bg-ink-900/60 p-6">
            <div className="mb-6 flex items-center gap-2 border-b border-white/[0.06] pb-4">
              <span className="h-2 w-2 rounded-full bg-accent/70" />
              <span className="label">Track record</span>
            </div>
            <dl className="space-y-5">
              {METRICS.map((metric) => (
                <div
                  key={metric.label}
                  className="flex items-baseline justify-between gap-4"
                >
                  <dt className="text-sm text-fg-muted">{metric.label}</dt>
                  <dd className="font-mono text-lg tabular-nums text-fg">
                    {metric.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}

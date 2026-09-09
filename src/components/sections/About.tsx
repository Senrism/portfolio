"use client";

import { motion } from "framer-motion";
import { FaCode, FaServer, FaDocker, FaBrain } from "react-icons/fa";
import { fadeUp, inView, stagger } from "@/lib/motion";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";

const CAPABILITIES = [
  { icon: FaCode, title: "Clean Code", detail: "Maintainable & scalable" },
  { icon: FaServer, title: "ERP & Retail Systems", detail: "POS through finance" },
  {
    icon: FaBrain,
    title: "AI-Assisted Development",
    detail: "Claude Code in the loop",
  },
  { icon: FaDocker, title: "Docker & CI", detail: "GitHub / GitLab pipelines" },
];

/** Every figure here is one the CV states or directly implies — nothing else. */
const METRICS = [
  { label: "Years in the tech industry", value: "7" },
  { label: "Building software since", value: "2019" },
  { label: "Team members coordinated", value: "6+" },
  { label: "Enterprise domains shipped", value: "8+" },
];

export default function About() {
  return (
    <Section id="about">
      <SectionHeading index="01 / About" title="Enterprise systems, end to end" />

      <div className="grid gap-14 lg:grid-cols-[1.15fr_1fr] lg:gap-20">
        <motion.div {...inView} variants={fadeUp}>
          <p className="text-base leading-relaxed text-fg-muted md:text-lg">
            Seven years in the tech industry since 2019, across several roles and teams.
            My work sits close to application architecture, program planning, and
            coordinating a team of six or more — but most importantly, hands-on coding.
            I have built internal systems such as HRIS, task management, and scheduling
            tools, developed end-to-end ERP flows from POS through finance, and I keep
            learning and folding modern techniques — AI tooling included — into the
            systems I maintain and the applications I build.
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

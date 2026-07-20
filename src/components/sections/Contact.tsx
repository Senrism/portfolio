"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { SITE } from "@/lib/site";
import { fadeUp, inView } from "@/lib/motion";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";
import ContactForm from "../ContactForm";

const LINKS = [
  { href: `mailto:${SITE.email}`, icon: FaEnvelope, label: SITE.email },
  { href: SITE.linkedin, icon: FaLinkedin, label: "LinkedIn" },
  { href: SITE.github, icon: FaGithub, label: "GitHub" },
];

export default function Contact() {
  return (
    <Section id="contact" className="overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-1/2 h-[400px] w-[700px] -translate-x-1/2 translate-y-1/2 rounded-full bg-accent/[0.05] blur-[130px]"
      />

      <div className="relative">
        <SectionHeading
          index="05 / Contact"
          title="Let's work together"
          description="I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision."
        />

        <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
          <motion.div {...inView} variants={fadeUp} className="space-y-3">
            {LINKS.map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("mailto:") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-lg border border-white/[0.08] bg-ink-900/40 px-5 py-4 transition-all duration-300 hover:border-accent/30 hover:bg-ink-900"
              >
                <Icon className="text-base text-fg-dim transition-colors duration-300 group-hover:text-accent" />
                <span className="truncate text-sm text-fg-muted transition-colors duration-300 group-hover:text-fg">
                  {label}
                </span>
              </a>
            ))}
          </motion.div>

          <ContactForm />
        </div>
      </div>
    </Section>
  );
}

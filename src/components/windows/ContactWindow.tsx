"use client";

import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { SITE } from "@/lib/site";
import ContactForm from "../ContactForm";
import { DisplayTitle, Prose } from "./parts";

const LINKS = [
  { href: `mailto:${SITE.email}`, icon: FaEnvelope, label: SITE.email },
  { href: SITE.linkedin, icon: FaLinkedin, label: "LinkedIn" },
  { href: SITE.github, icon: FaGithub, label: "GitHub" },
];

export default function ContactWindow() {
  return (
    <div className="h-full overflow-y-auto px-5 py-6 md:px-9 md:py-8">
      <div className="grid gap-9 lg:grid-cols-[1fr_1.15fr] lg:gap-12">
        <div>
          <DisplayTitle title="Get in touch" subtitle="Bogor, Indonesia" />
          <Prose>
            Open to discussing new projects, enterprise system work, or opportunities
            where staying hands-on matters.
          </Prose>

          <ul className="mt-8 space-y-2.5">
            {LINKS.map(({ href, icon: Icon, label }) => (
              <li key={label}>
                <a
                  href={href}
                  target={href.startsWith("mailto:") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="flex items-center gap-3.5 rounded-lg border-3 border-ink px-4 py-3 font-sans text-[13px] font-medium transition-colors duration-150 hover:bg-ink hover:text-paper"
                >
                  <Icon className="shrink-0 text-base" />
                  <span className="truncate">{label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <ContactForm />
      </div>
    </div>
  );
}

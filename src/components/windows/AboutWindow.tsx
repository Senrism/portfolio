"use client";

import { ComputerIcon } from "../os/Icons";
import { DisplayTitle, Prose } from "./parts";

/**
 * The "system information" panel, in the spirit of the reference site's spec
 * sheet. Every row is a real fact from the CV rather than a joke — the format
 * carries the humor, the content stays true.
 */
const SPECS: ReadonlyArray<[string, string]> = [
  ["Version", "7.0 — in service since 2019"],
  ["Processor", "Senior Software Engineer, The One Retail"],
  ["Memory", "PHP · Python · TypeScript · JavaScript"],
  ["Storage", "ERP · POS · Finance · HRIS · Scheduling"],
  ["Peripherals", "Laravel · React · Vue · Docker · Claude Code"],
  ["Multitasking", "Coordinates 6+ engineers"],
  ["Location", "Bogor, Indonesia"],
];

export default function AboutWindow() {
  return (
    <div className="h-full overflow-y-auto px-5 py-6 md:px-9 md:py-8">
      <div className="grid gap-9 lg:grid-cols-[1.1fr_1fr] lg:gap-12">
        <div>
          <DisplayTitle title="Febry Lasena" subtitle="Senior Software Engineer" />
          <Prose>
            <p>
              Seven years in the tech industry since 2019, across several roles and
              teams. My work sits close to application architecture, program planning,
              and coordinating a team of six or more — but most importantly, hands-on
              coding.
            </p>
            <p className="mt-4">
              I have built internal systems such as HRIS, task management, and
              scheduling tools, developed end-to-end ERP flows from POS through finance,
              and I keep folding modern techniques — AI tooling included — into the
              systems I maintain and the applications I build.
            </p>
          </Prose>
        </div>

        <section
          aria-label="System information"
          className="self-start rounded-[20px] border-3 border-ink bg-paper-sunk"
        >
          <header className="flex items-center gap-3 border-b-3 border-ink px-5 py-4">
            <ComputerIcon className="h-8 w-8 shrink-0" />
            <span className="font-serif text-xl font-semibold">FebryOS</span>
          </header>

          <dl className="divide-y-3 divide-ink/15 px-5">
            {SPECS.map(([term, detail]) => (
              <div key={term} className="py-3.5">
                <dt className="font-sans text-[10px] uppercase tracking-label text-ink-dim">
                  {term}
                </dt>
                <dd className="mt-1 font-sans text-[13px] font-medium leading-snug">
                  {detail}
                </dd>
              </div>
            ))}
          </dl>
        </section>
      </div>
    </div>
  );
}

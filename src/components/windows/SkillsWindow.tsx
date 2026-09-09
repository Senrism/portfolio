"use client";

import { SKILL_GROUPS } from "@/data/skills";
import { DisplayTitle, Prose } from "./parts";

export default function SkillsWindow() {
  return (
    <div className="h-full overflow-y-auto px-5 py-6 md:px-9 md:py-8">
      <DisplayTitle title="Toolkit" subtitle="What I build with" />
      <Prose>
        The stack I actually ship on, grouped the way my CV lists it. No logos for
        things I have touched once.
      </Prose>

      <dl className="mt-9 border-t-3 border-ink">
        {SKILL_GROUPS.map((group) => (
          <div
            key={group.category}
            className="grid gap-3 border-b-3 border-ink py-5 md:grid-cols-[190px_1fr] md:gap-8 md:py-6"
          >
            <dt className="pt-1 font-sans text-[11px] font-semibold uppercase tracking-label">
              {group.category}
            </dt>
            <dd className="flex flex-wrap gap-2.5">
              {group.skills.map(({ name, icon: Icon }) => (
                <span
                  key={name}
                  className="flex items-center gap-2 rounded-full border-3 border-ink px-3.5 py-1.5 font-sans text-[13px] font-medium transition-colors duration-150 hover:bg-ink hover:text-paper"
                >
                  <Icon className="h-3.5 w-3.5" />
                  {name}
                </span>
              ))}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

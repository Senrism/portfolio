"use client";

import { useEffect, useState } from "react";
import { SITE } from "@/lib/site";
import { SpeakerIcon, MailGlyph, BatteryIcon } from "./Icons";

/** Live clock. Empty until mounted — the server can't know the viewer's time. */
function Clock() {
  const [now, setNow] = useState<string | null>(null);

  useEffect(() => {
    const tick = () =>
      setNow(
        new Date().toLocaleTimeString("en-US", {
          hour: "numeric",
          minute: "2-digit",
        }),
      );
    tick();
    const id = setInterval(tick, 1000 * 15);
    return () => clearInterval(id);
  }, []);

  return (
    <span className="font-sans text-xs font-semibold tabular-nums md:text-sm">
      {/* Reserve the width so the bar doesn't reflow when the time lands. */}
      {now ?? " "}
    </span>
  );
}

export default function MenuBar() {
  return (
    <header className="relative z-50 flex shrink-0 items-center gap-3 border-b-3 border-ink bg-paper px-3 py-2 md:gap-5 md:px-5 md:py-2.5">
      {/* Wordmark — the two halves are set in different styles, which is what
          makes it read as a logotype rather than a heading. */}
      <span className="shrink-0 font-serif text-xl leading-none tracking-tight md:text-[26px]">
        Febry<em className="font-bold not-italic md:italic">Lasena</em>
      </span>

      <div aria-hidden className="titlebar-stripes hidden h-[22px] flex-1 md:block" />

      <div className="ml-auto flex items-center gap-3 md:ml-0 md:gap-4">
        <div className="hidden flex-col items-end leading-tight md:flex">
          <a
            href={`mailto:${SITE.email}`}
            className="font-sans text-sm font-semibold underline-offset-4 hover:underline"
          >
            {SITE.email}
          </a>
          <Clock />
        </div>

        <div className="flex shrink-0 items-center gap-2.5 md:gap-3">
          <SpeakerIcon className="hidden h-[18px] w-[18px] md:block" />
          <MailGlyph className="hidden h-[18px] w-[18px] md:block" />
          <span className="md:hidden">
            <Clock />
          </span>
          <BatteryIcon className="h-[18px] w-[18px]" />
        </div>
      </div>
    </header>
  );
}

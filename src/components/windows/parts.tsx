"use client";

/**
 * Shared furniture for window interiors. Two panes, a selectable list, and
 * the display/meta type pairing — every app is assembled from these so the
 * windows feel like one operating system rather than five separate pages.
 */

import { FolderIcon } from "../os/Icons";

/** Sidebar + detail. Collapses to stacked scroll panes on handheld. */
export function TwoPane({
  sidebar,
  children,
}: {
  sidebar: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-full min-h-0 flex-col md:flex-row">
      <aside className="max-h-[38%] shrink-0 overflow-y-auto border-b-3 border-ink bg-paper-sunk px-4 py-4 md:max-h-none md:w-[230px] md:border-b-0 md:border-r-3 md:px-5 md:py-6">
        {sidebar}
      </aside>
      <div className="min-h-0 flex-1 overflow-y-auto px-5 py-6 md:px-9 md:py-8">
        {children}
      </div>
    </div>
  );
}

/** The rounded pill that heads a sidebar. */
export function PaneHeading({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-4 inline-block rounded-full border-3 border-ink px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-label md:mb-5">
      {children}
    </p>
  );
}

export function PaneList({ children }: { children: React.ReactNode }) {
  return <ul className="space-y-0.5">{children}</ul>;
}

export function PaneListItem({
  label,
  meta,
  isSelected,
  onSelect,
}: {
  label: string;
  meta?: string;
  isSelected: boolean;
  onSelect: () => void;
}) {
  return (
    <li>
      <button
        type="button"
        onClick={onSelect}
        aria-current={isSelected ? "true" : undefined}
        className={`flex w-full items-center gap-2.5 rounded px-2 py-1.5 text-left transition-colors duration-150 ${
          isSelected ? "bg-ink text-paper" : "hover:bg-ink/[0.07]"
        }`}
      >
        <FolderIcon className="h-[18px] w-[18px] shrink-0" />
        <span className="min-w-0 flex-1">
          <span className="block truncate font-sans text-[13px] font-medium leading-tight">
            {label}
          </span>
          {meta ? (
            <span
              className={`block truncate font-sans text-[10px] leading-tight ${
                isSelected ? "text-paper/70" : "text-ink-dim"
              }`}
            >
              {meta}
            </span>
          ) : null}
        </span>
      </button>
    </li>
  );
}

/** Big serif headline + optional serif subtitle — the detail pane's opener. */
export function DisplayTitle({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <header>
      <h3 className="font-serif text-[34px] font-semibold leading-[1.05] tracking-tight md:text-[52px]">
        {title}
      </h3>
      {subtitle ? (
        <p className="mt-1.5 font-serif text-lg text-ink-muted md:mt-2 md:text-2xl">
          {subtitle}
        </p>
      ) : null}
    </header>
  );
}

/** Letterspaced, pipe-separated metadata — tech stacks and role periods. */
export function MetaLine({ items }: { items: readonly string[] }) {
  return (
    <p className="mt-6 font-sans text-[11px] uppercase tracking-label text-ink-muted md:text-xs">
      {items.join("  |  ")}
    </p>
  );
}

/** Body copy at the one measure used everywhere. */
export function Prose({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-5 max-w-[62ch] font-sans text-[15px] leading-relaxed text-ink-muted md:text-base">
      {children}
    </div>
  );
}

/** Bulleted achievements — an em-rule marker instead of a dot. */
export function RuleList({ items }: { items: readonly string[] }) {
  return (
    <ul className="mt-6 space-y-3">
      {items.map((item) => (
        <li
          key={item}
          className="flex max-w-[64ch] items-start gap-3 font-sans text-[14px] leading-relaxed text-ink-muted md:text-[15px]"
        >
          <span aria-hidden className="mt-[11px] h-[2px] w-4 shrink-0 bg-ink" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

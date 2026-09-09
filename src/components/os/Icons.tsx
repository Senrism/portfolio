/**
 * Hand-inked icon set. Every glyph is drawn on a 64×64 grid with a heavy
 * uniform stroke and round joins, so they read as one hand at any size.
 * No fills except where a shape is deliberately solid — the system is
 * outline-first, matching the window chrome.
 */

type IconProps = { className?: string };

const BASE = {
  viewBox: "0 0 64 64",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 3.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

/** Classic folder with a back sheet peeking out — the default app icon. */
export function FolderIcon({ className }: IconProps) {
  return (
    <svg {...BASE} className={className} aria-hidden>
      <path d="M8 20h16l5 6h27a3 3 0 0 1 3 3v22a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3V23a3 3 0 0 1 3-3Z" />
      <path d="M12 20v-5a3 3 0 0 1 3-3h11l4 5" />
      <path d="M5 33h54" />
    </svg>
  );
}

/** Folder with a briefcase clasp — work history. */
export function BriefcaseFolderIcon({ className }: IconProps) {
  return (
    <svg {...BASE} className={className} aria-hidden>
      <path d="M6 22h52a3 3 0 0 1 3 3v27a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V25a3 3 0 0 1 3-3Z" />
      <path d="M24 22v-6a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v6" />
      <path d="M3 36h58" />
      <path d="M28 34v6h8v-6" />
    </svg>
  );
}

/** Folder with a gear — the toolkit. A gear reads at 48px; a wrench doesn't. */
export function ToolboxFolderIcon({ className }: IconProps) {
  return (
    <svg {...BASE} className={className} aria-hidden>
      <path d="M8 20h16l5 6h27a3 3 0 0 1 3 3v22a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3V23a3 3 0 0 1 3-3Z" />
      <circle cx="32" cy="43" r="6" />
      <path d="M32 31v4M32 51v4M21 43h4M39 43h4M24 35l3 3M37 48l3 3M40 35l-3 3M27 48l-3 3" />
    </svg>
  );
}

/** Compact Macintosh with a face — "About me". */
export function ComputerIcon({ className }: IconProps) {
  return (
    <svg {...BASE} className={className} aria-hidden>
      <path d="M12 6h40a4 4 0 0 1 4 4v34a4 4 0 0 1-4 4H12a4 4 0 0 1-4-4V10a4 4 0 0 1 4-4Z" />
      <path d="M16 14h32v20H16z" />
      <path d="M14 48v6a4 4 0 0 0 4 4h28a4 4 0 0 0 4-4v-6" />
      <path d="M25 22v3M39 22v3" />
      <path d="M26 29c2 2.5 10 2.5 12 0" />
      <path d="M20 53h10" />
    </svg>
  );
}

/** Sealed envelope — contact. */
export function MailFolderIcon({ className }: IconProps) {
  return (
    <svg {...BASE} className={className} aria-hidden>
      <path d="M6 14h52a3 3 0 0 1 3 3v30a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V17a3 3 0 0 1 3-3Z" />
      <path d="m4 17 28 20 28-20" />
      <path d="m4 48 20-16M60 48 40 32" />
    </svg>
  );
}

/** Wireframe globe with a pointer — "open live site". */
export function GlobeIcon({ className }: IconProps) {
  return (
    <svg {...BASE} className={className} aria-hidden>
      <circle cx="30" cy="30" r="24" />
      <path d="M6 30h48" />
      <path d="M30 6c8 7 8 41 0 48-8-7-8-41 0-48Z" />
      <path d="M44 44l14 14M58 50v8h-8" />
    </svg>
  );
}

/* ── Menu-bar status glyphs ──────────────────────────────────────────── */

export function SpeakerIcon({ className }: IconProps) {
  return (
    <svg {...BASE} strokeWidth={4} className={className} aria-hidden>
      <path d="M8 24h10l14-12v40L18 40H8z" fill="currentColor" />
      <path d="M42 22a14 14 0 0 1 0 20" />
      <path d="M50 15a24 24 0 0 1 0 34" />
    </svg>
  );
}

export function MailGlyph({ className }: IconProps) {
  return (
    <svg {...BASE} strokeWidth={4} className={className} aria-hidden>
      <rect x="5" y="14" width="54" height="36" />
      <path d="m5 14 27 20 27-20" />
    </svg>
  );
}

export function BatteryIcon({ className }: IconProps) {
  return (
    <svg {...BASE} strokeWidth={4} className={className} aria-hidden>
      <rect x="4" y="20" width="48" height="24" rx="3" />
      <path d="M56 28v8" />
      <path d="M10 26h20v12H10z" fill="currentColor" stroke="none" />
    </svg>
  );
}

/** The window close control. Drawn, not typed, so its weight matches. */
export function CloseGlyph({ className }: IconProps) {
  return (
    <svg {...BASE} strokeWidth={5} className={className} aria-hidden>
      <path d="M16 16 48 48M48 16 16 48" />
    </svg>
  );
}

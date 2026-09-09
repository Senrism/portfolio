"use client";

import { useEffect, type RefObject } from "react";
import { CloseGlyph } from "./Icons";
import { useIsHandheld } from "@/hooks/useMediaQuery";
import { useDraggable } from "@/hooks/useDraggable";

interface WindowProps {
  title: string;
  z: number;
  offset: { x: number; y: number };
  width: number;
  height: number;
  isActive: boolean;
  /** Bounds for dragging — the desk surface. */
  constraintsRef: RefObject<HTMLDivElement | null>;
  onClose: () => void;
  onFocus: () => void;
  children: React.ReactNode;
}

export default function Window({
  title,
  z,
  offset,
  width,
  height,
  isActive,
  constraintsRef,
  onClose,
  onFocus,
  children,
}: WindowProps) {
  const isHandheld = useIsHandheld();
  const {
    nodeRef,
    handleProps,
    offset: drag,
    isDragging,
  } = useDraggable<HTMLElement>({
    boundsRef: constraintsRef,
    disabled: isHandheld,
  });

  // Escape closes the frontmost window only, so a stack unwinds one at a time.
  useEffect(() => {
    if (!isActive) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isActive, onClose]);

  /**
   * Desktop windows anchor at the desk's center via left/top 50% and pull back
   * by half their own size, then take the cascade nudge. Anchoring with margins
   * rather than a transform leaves `transform` free for the drag offset.
   *
   * The open animation is a CSS keyframe, not framer-motion: Motion drives
   * `transform` through its own motion values, which would overwrite the drag
   * translate on this same element.
   */
  const frame = isHandheld
    ? { inset: "8px" as const }
    : {
        left: "50%",
        top: "50%",
        width,
        height,
        marginLeft: -width / 2 + offset.x,
        marginTop: -height / 2 + offset.y,
      };

  return (
    <section
      ref={nodeRef}
      role="dialog"
      aria-label={title}
      style={{
        zIndex: z,
        position: "absolute",
        ...frame,
        // Drag lives on its own translate so the keyframe below can scale
        // without the two clobbering each other.
        translate: `${drag.x}px ${drag.y}px`,
      }}
      onPointerDown={onFocus}
      className="flex animate-window-in flex-col overflow-hidden rounded-[22px] border-3 border-ink bg-paper shadow-window"
    >
      {/* Title bar — also the drag handle. Stripes are the classic Mac fill. */}
      <header
        {...(isHandheld ? {} : handleProps)}
        className={`flex shrink-0 select-none items-center gap-4 border-b-3 border-ink px-3 py-2.5 md:px-4 md:py-3 ${
          isHandheld ? "" : isDragging ? "cursor-grabbing" : "cursor-grab"
        }`}
      >
        <button
          type="button"
          onClick={onClose}
          // Swallow the pointer event so closing never starts a drag.
          onPointerDown={(e) => e.stopPropagation()}
          aria-label={`Close ${title}`}
          className="grid h-8 w-8 shrink-0 place-items-center rounded-full border-3 border-ink bg-paper transition-colors duration-150 hover:bg-ink hover:text-paper md:h-9 md:w-9"
        >
          <CloseGlyph className="h-3.5 w-3.5" />
        </button>

        <h2 className="truncate font-serif text-base font-semibold md:hidden">
          {title}
        </h2>

        {/* The stripe fill dims when the window sits behind another — the only
            signal of which window holds focus. */}
        <div
          aria-hidden
          className={`titlebar-stripes hidden h-[18px] flex-1 transition-opacity duration-200 md:block ${
            isActive ? "opacity-100" : "opacity-25"
          }`}
        />
        <span
          aria-hidden
          className="ml-auto hidden shrink-0 font-serif text-sm md:block"
        >
          {title}
        </span>
      </header>

      <div className="min-h-0 flex-1 overflow-hidden">{children}</div>
    </section>
  );
}

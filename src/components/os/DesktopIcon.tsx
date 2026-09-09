"use client";

import type { RefObject } from "react";
import { useIsHandheld } from "@/hooks/useMediaQuery";
import { useDraggable } from "@/hooks/useDraggable";

interface DesktopIconProps {
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  isOpen: boolean;
  constraintsRef: RefObject<HTMLDivElement | null>;
  onOpen: () => void;
}

export default function DesktopIcon({
  label,
  icon: Icon,
  isOpen,
  constraintsRef,
  onOpen,
}: DesktopIconProps) {
  const isHandheld = useIsHandheld();
  const { nodeRef, handleProps, offset, isDragging, didDrag } =
    useDraggable<HTMLButtonElement>({
      boundsRef: constraintsRef,
      disabled: isHandheld,
      // A few px of slop: a click with a shaky hand should still open the
      // window rather than register as a drag that goes nowhere.
      threshold: 4,
    });

  return (
    <button
      ref={nodeRef}
      type="button"
      {...(isHandheld ? {} : handleProps)}
      onClick={() => {
        // Releasing after a drag fires a click on the same element; ignore it.
        if (didDrag.current) return;
        onOpen();
      }}
      style={isHandheld ? undefined : { translate: `${offset.x}px ${offset.y}px` }}
      aria-label={`Open ${label}`}
      className={`group pointer-events-auto flex w-[92px] shrink-0 select-none flex-col items-center gap-2 rounded-lg p-2 text-ink outline-offset-4 md:w-[104px] ${
        isDragging ? "cursor-grabbing" : ""
      }`}
    >
      <span
        className={`grid h-[58px] w-[58px] place-items-center rounded-xl transition-colors duration-150 md:h-[66px] md:w-[66px] ${
          isOpen ? "bg-ink text-paper" : "group-hover:bg-ink/[0.07]"
        }`}
      >
        <Icon className="h-11 w-11 md:h-12 md:w-12" />
      </span>
      <span
        className={`text-center font-sans text-[11px] font-medium leading-tight tracking-wide md:text-xs ${
          isOpen ? "bg-ink px-1.5 py-0.5 text-paper" : ""
        }`}
      >
        {label}
      </span>
    </button>
  );
}

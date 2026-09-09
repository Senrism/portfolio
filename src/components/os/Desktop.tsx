"use client";

import { useEffect, useRef, useState } from "react";
import MenuBar from "./MenuBar";
import DesktopIcon from "./DesktopIcon";
import Window from "./Window";
import { APPS, getApp } from "./apps";
import { useWindows } from "./WindowManager";

/** Breathing room between a window and the desk edge, per side. */
const DESK_GUTTER = 28;

export default function Desktop() {
  const deskRef = useRef<HTMLDivElement>(null);
  const { windows, open, close, focus, isOpen, activeId } = useWindows();

  /**
   * Windows declare a preferred size but must never exceed the desk, or they
   * become undraggable and clip their own content. Measuring here (rather
   * than in each window) keeps one observer for the whole system.
   */
  const [desk, setDesk] = useState({ w: 0, h: 0 });

  useEffect(() => {
    const el = deskRef.current;
    if (!el) return;

    const observer = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect;
      setDesk({ w: width, h: height });
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="fixed inset-0 bg-ink p-1.5 md:p-2.5">
      {/* Bezel — the whole OS sits inside one rounded black frame. */}
      <div className="flex h-full w-full flex-col overflow-hidden rounded-[20px] border-3 border-ink bg-paper-desk md:rounded-[26px]">
        <MenuBar />

        <main
          ref={deskRef}
          className="texture-paper texture-grid relative min-h-0 flex-1 overflow-hidden"
        >
          {/* Icon field. Right-aligned on desktop like a real desk, left on
              handheld where thumbs reach that side more easily.

              No z-index: icons must sit UNDER windows, the way they do on a
              real desktop. The container is also click-through — it spans the
              full width, so without pointer-events-none its empty left half
              would swallow clicks on any window title bar beneath it. */}
          <div className="pointer-events-none absolute inset-x-0 top-0 flex flex-wrap gap-1 p-3 md:justify-end md:gap-2 md:p-5">
            {APPS.map((app) => (
              <DesktopIcon
                key={app.id}
                label={app.label}
                icon={app.icon}
                isOpen={isOpen(app.id)}
                constraintsRef={deskRef}
                onOpen={() => open(app.id)}
              />
            ))}
          </div>

          {/* Standing invitation, shown only while the desk is clear. */}
          {windows.length === 0 ? (
            <p className="pointer-events-none absolute bottom-20 left-1/2 w-full -translate-x-1/2 px-6 text-center font-serif text-lg text-ink-dim md:bottom-16 md:text-2xl">
              Open a folder to look around
              <span aria-hidden className="ml-1 inline-block animate-caret-blink">
                _
              </span>
            </p>
          ) : null}

          {windows.map((w) => {
            const app = getApp(w.id);
            if (!app || desk.w === 0) return null;
            const { Component } = app;

            return (
              <Window
                key={w.id}
                title={app.title}
                z={w.z}
                offset={w.offset}
                width={Math.min(app.width, desk.w - DESK_GUTTER * 2)}
                height={Math.min(app.height, desk.h - DESK_GUTTER * 2)}
                isActive={activeId === w.id}
                constraintsRef={deskRef}
                onClose={() => close(w.id)}
                onFocus={() => focus(w.id)}
              >
                <Component />
              </Window>
            );
          })}

          <p className="pointer-events-none absolute inset-x-0 bottom-0 px-4 pb-2.5 text-center font-sans text-[10px] leading-relaxed text-ink-dim md:pb-3 md:text-[11px]">
            Febry Lasena © 2019–{new Date().getFullYear()}. Built in Next.js, assembled
            in Bogor.
          </p>
        </main>
      </div>
    </div>
  );
}

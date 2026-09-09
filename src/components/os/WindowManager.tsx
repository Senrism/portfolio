"use client";

import { createContext, useCallback, useContext, useMemo, useState } from "react";

export interface OpenWindow {
  id: string;
  /** Stacking order. Monotonic — focusing always mints a new high value. */
  z: number;
  /** Spawn offset from the centered rest position, in px. Cascades. */
  offset: { x: number; y: number };
}

/**
 * Windows and the z-counter live in one state object on purpose. Bumping a
 * separate counter from inside a setState updater would read a stale value
 * and double-fire under StrictMode; keeping them together makes every
 * transition a pure function of the previous state.
 */
interface DeskState {
  windows: OpenWindow[];
  nextZ: number;
}

interface WindowManagerValue {
  windows: OpenWindow[];
  open: (id: string) => void;
  close: (id: string) => void;
  focus: (id: string) => void;
  isOpen: (id: string) => boolean;
  /** id of the frontmost window, or null when the desk is clear. */
  activeId: string | null;
}

const WindowManagerContext = createContext<WindowManagerValue | null>(null);

/** Each new window steps down-right so stacked windows stay grabbable. */
const CASCADE_STEP = 28;
const CASCADE_WRAP = 5;

function raise(state: DeskState, id: string): DeskState {
  const target = state.windows.find((w) => w.id === id);
  if (!target) return state;
  // Already frontmost — return the same object so React can bail out.
  const topZ = Math.max(...state.windows.map((w) => w.z));
  if (target.z === topZ) return state;

  return {
    nextZ: state.nextZ + 1,
    windows: state.windows.map((w) => (w.id === id ? { ...w, z: state.nextZ } : w)),
  };
}

export function WindowManagerProvider({
  children,
  initialOpen,
}: {
  children: React.ReactNode;
  initialOpen?: string[];
}) {
  const [state, setState] = useState<DeskState>(() => {
    const ids = initialOpen ?? [];
    return {
      windows: ids.map((id, i) => ({
        id,
        z: i + 1,
        offset: { x: i * CASCADE_STEP, y: i * CASCADE_STEP },
      })),
      nextZ: ids.length + 1,
    };
  });

  const focus = useCallback((id: string) => {
    setState((prev) => raise(prev, id));
  }, []);

  const open = useCallback((id: string) => {
    setState((prev) => {
      // Re-opening an open window raises it rather than duplicating.
      if (prev.windows.some((w) => w.id === id)) return raise(prev, id);

      const step = prev.windows.length % CASCADE_WRAP;
      return {
        nextZ: prev.nextZ + 1,
        windows: [
          ...prev.windows,
          {
            id,
            z: prev.nextZ,
            offset: { x: step * CASCADE_STEP, y: step * CASCADE_STEP },
          },
        ],
      };
    });
  }, []);

  const close = useCallback((id: string) => {
    setState((prev) => ({
      ...prev,
      windows: prev.windows.filter((w) => w.id !== id),
    }));
  }, []);

  const value = useMemo<WindowManagerValue>(() => {
    const { windows } = state;
    const activeId =
      windows.length === 0
        ? null
        : windows.reduce((top, w) => (w.z > top.z ? w : top), windows[0]).id;

    return {
      windows,
      open,
      close,
      focus,
      isOpen: (id) => windows.some((w) => w.id === id),
      activeId,
    };
  }, [state, open, close, focus]);

  return (
    <WindowManagerContext.Provider value={value}>
      {children}
    </WindowManagerContext.Provider>
  );
}

export function useWindows() {
  const ctx = useContext(WindowManagerContext);
  if (!ctx) {
    throw new Error("useWindows must be used inside <WindowManagerProvider>");
  }
  return ctx;
}

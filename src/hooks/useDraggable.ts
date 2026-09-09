"use client";

import { useCallback, useRef, useState, type RefObject } from "react";

interface Options {
  /** Element the dragged node must stay inside. */
  boundsRef: RefObject<HTMLElement | null>;
  /** Turn dragging off entirely (handheld, where windows are full-bleed). */
  disabled?: boolean;
  /**
   * Movement in px before a gesture counts as a drag rather than a click.
   * Icons need this so a sloppy click still opens the window.
   */
  threshold?: number;
}

/**
 * Pointer-capture drag.
 *
 * Written by hand rather than using framer-motion's `drag`: with a
 * `dragControls` handle plus an absolutely-positioned, margin-anchored window,
 * Motion never armed the gesture (the node kept `touch-action: auto`), and its
 * constraint machinery fights an element whose resting position comes from
 * `left/top` margins. Pointer capture is ~40 lines and behaves identically
 * across mouse, touch, and pen.
 */
export function useDraggable<T extends HTMLElement = HTMLElement>({
  boundsRef,
  disabled,
  threshold = 0,
}: Options) {
  const nodeRef = useRef<T | null>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);

  /** Gesture origin plus the offset the node started at. */
  const start = useRef({ px: 0, py: 0, x: 0, y: 0 });
  /** Set once a gesture passes `threshold`; read by consumers to skip a click. */
  const movedPastThreshold = useRef(false);
  const active = useRef(false);

  const onPointerDown = useCallback(
    (e: React.PointerEvent) => {
      if (disabled || e.button !== 0) return;
      // Stops the browser selecting window text (and native image dragging)
      // for the whole gesture.
      e.preventDefault();

      e.currentTarget.setPointerCapture(e.pointerId);
      start.current = { px: e.clientX, py: e.clientY, x: offset.x, y: offset.y };
      movedPastThreshold.current = false;
      active.current = true;
      setIsDragging(true);
    },
    [disabled, offset.x, offset.y],
  );

  const onPointerMove = useCallback(
    (e: React.PointerEvent) => {
      if (!active.current) return;

      const dx = e.clientX - start.current.px;
      const dy = e.clientY - start.current.py;

      if (!movedPastThreshold.current && Math.hypot(dx, dy) > threshold) {
        movedPastThreshold.current = true;
      }
      if (!movedPastThreshold.current) return;

      let nx = start.current.x + dx;
      let ny = start.current.y + dy;

      // Clamp so the node can never be dragged outside the desk. The node's
      // rect already includes the current translate, so subtract it to get
      // where the node sits at zero offset.
      const node = nodeRef.current;
      const bounds = boundsRef.current;
      if (node && bounds) {
        const n = node.getBoundingClientRect();
        const b = bounds.getBoundingClientRect();
        const baseLeft = n.left - offset.x;
        const baseTop = n.top - offset.y;

        const minX = b.left - baseLeft;
        const maxX = b.right - (baseLeft + n.width);
        const minY = b.top - baseTop;
        const maxY = b.bottom - (baseTop + n.height);

        // A node wider or taller than the desk would invert the range; pin it
        // to the top-left rather than letting the clamp flip.
        nx = maxX < minX ? minX : Math.min(Math.max(nx, minX), maxX);
        ny = maxY < minY ? minY : Math.min(Math.max(ny, minY), maxY);
      }

      setOffset({ x: nx, y: ny });
    },
    [boundsRef, offset.x, offset.y, threshold],
  );

  const endGesture = useCallback((e: React.PointerEvent) => {
    if (!active.current) return;
    active.current = false;
    setIsDragging(false);
    if (e.currentTarget.hasPointerCapture(e.pointerId)) {
      e.currentTarget.releasePointerCapture(e.pointerId);
    }
  }, []);

  return {
    /** Attach to the node that moves. */
    nodeRef,
    /** Spread onto the drag handle (the title bar, or the icon itself). */
    handleProps: {
      onPointerDown,
      onPointerMove,
      onPointerUp: endGesture,
      onPointerCancel: endGesture,
    },
    offset,
    isDragging,
    /** True when the gesture that just ended was a drag, not a click. */
    didDrag: movedPastThreshold,
  };
}

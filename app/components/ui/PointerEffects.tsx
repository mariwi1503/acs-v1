"use client";

import { useEffect } from "react";

// Pointer-driven effects wired through one delegated listener so sections stay Server Components.
// Each effect only writes CSS variables; the visuals live in globals.css.
//   [data-spotlight] → --spot-x / --spot-y: pointer position inside the element (px)
//   [data-parallax]  → --parallax-x / --parallax-y: pointer offset from the element's centre (-1..1)
//   [data-magnetic]  → --magnet-x / --magnet-y: small pull towards the pointer (px)
const effects = {
  spotlight: (el: HTMLElement, x: number, y: number, r: DOMRect) => {
    el.style.setProperty("--spot-x", `${x - r.left}px`);
    el.style.setProperty("--spot-y", `${y - r.top}px`);
  },
  parallax: (el: HTMLElement, x: number, y: number, r: DOMRect) => {
    el.style.setProperty("--parallax-x", (((x - r.left) / r.width) * 2 - 1).toFixed(3));
    el.style.setProperty("--parallax-y", (((y - r.top) / r.height) * 2 - 1).toFixed(3));
  },
  magnetic: (el: HTMLElement, x: number, y: number, r: DOMRect) => {
    el.style.setProperty("--magnet-x", `${((x - r.left - r.width / 2) * 0.08).toFixed(1)}px`);
    el.style.setProperty("--magnet-y", `${((y - r.top - r.height / 2) * 0.25).toFixed(1)}px`);
  },
};

const clearedVars: Record<keyof typeof effects, string[]> = {
  spotlight: ["--spot-x", "--spot-y"],
  parallax: ["--parallax-x", "--parallax-y"],
  magnetic: ["--magnet-x", "--magnet-y"],
};

type Effect = keyof typeof effects;
const names = Object.keys(effects) as Effect[];

export function PointerEffects() {
  useEffect(() => {
    const query = window.matchMedia(
      "(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)",
    );
    // Effects can nest (a spotlight card inside a spotlight section), so every matching ancestor is driven.
    const active = new Map<Effect, Set<HTMLElement>>(names.map((name) => [name, new Set()]));
    let frame = 0;
    let last: PointerEvent | null = null;

    const release = (name: Effect, keep: Set<HTMLElement> = new Set()) => {
      for (const el of active.get(name)!) {
        if (keep.has(el)) continue;
        clearedVars[name].forEach((v) => el.style.removeProperty(v));
      }
      active.set(name, keep);
    };

    const update = () => {
      frame = 0;
      if (!last || !(last.target instanceof Element)) return;
      const { clientX: x, clientY: y, target } = last;
      for (const name of names) {
        const hits = new Set<HTMLElement>();
        for (let el = target.closest<HTMLElement>(`[data-${name}]`); el; ) {
          hits.add(el);
          el = el.parentElement?.closest<HTMLElement>(`[data-${name}]`) ?? null;
        }
        release(name, hits);
        hits.forEach((el) => effects[name](el, x, y, el.getBoundingClientRect()));
      }
    };

    const onMove = (e: PointerEvent) => {
      if (e.pointerType === "touch") return;
      last = e;
      if (!frame) frame = requestAnimationFrame(update);
    };

    // Pointer left the window: let every effect ease back to rest.
    const onOut = (e: PointerEvent) => {
      if (!e.relatedTarget) names.forEach((name) => release(name));
    };

    const stop = () => {
      document.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerout", onOut);
      cancelAnimationFrame(frame);
      frame = 0;
      names.forEach((name) => release(name));
    };

    const sync = () => {
      stop();
      if (!query.matches) return;
      document.addEventListener("pointermove", onMove, { passive: true });
      document.addEventListener("pointerout", onOut, { passive: true });
    };

    sync();
    query.addEventListener("change", sync);
    return () => {
      query.removeEventListener("change", sync);
      stop();
    };
  }, []);

  return null;
}

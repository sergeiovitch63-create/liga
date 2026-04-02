"use client";

import { useEffect, useState } from "react";

const easeOut = (t) => 1 - Math.pow(1 - t, 4);

export function useCountUp(ref, target, duration = 1000, suffix = "", prefix = "") {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const node = ref?.current;
    if (!node) return;

    let rafId = null;
    let start = null;
    let counted = false;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry?.isIntersecting || counted) return;

        counted = true;
        const step = (ts) => {
          if (!start) start = ts;
          const p = Math.min((ts - start) / duration, 1);
          const next = Math.floor(easeOut(p) * target);
          setValue(next);
          if (p < 1) rafId = requestAnimationFrame(step);
          else setValue(target);
        };

        rafId = requestAnimationFrame(step);
      },
      { threshold: 0.4 }
    );

    observer.observe(node);
    return () => {
      observer.disconnect();
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [ref, target, duration]);

  return `${prefix}${Number(value).toLocaleString("ru-RU")}${suffix}`;
}

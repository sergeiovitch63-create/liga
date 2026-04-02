"use client";

import { useRef } from "react";
import { useCountUp } from "../hooks/useCountUp";

export default function CountNumber({ n, d = 1000, s = "", p = "", className = "" }) {
  const ref = useRef(null);
  const value = useCountUp(ref, n, d, s, p);
  return (
    <span ref={ref} className={className} data-n={n} data-d={d} data-s={s} data-p={p}>
      {value}
    </span>
  );
}

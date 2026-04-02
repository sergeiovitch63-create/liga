"use client";

import { useId } from "react";

/** Персонаж в кепке; молния на тулье кепки (без облачка — оно снаружи круга в ContactFab). */
export default function ContactFabAvatar({ className }) {
  const id = useId().replace(/:/g, "");
  const capGradId = `fabCapGrad-${id}`;

  return (
    <svg
      className={className}
      viewBox="0 38 120 82"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <defs>
        <linearGradient id={capGradId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1a1a1a" />
          <stop offset="100%" stopColor="#333" />
        </linearGradient>
      </defs>

      <g transform="translate(0, -2)">
        {/* Ноги */}
        <line x1="52" y1="100" x2="50" y2="112" stroke="#111" strokeWidth="4.5" strokeLinecap="round" />
        <line x1="66" y1="100" x2="68" y2="112" stroke="#111" strokeWidth="4.5" strokeLinecap="round" />

        {/* Тело */}
        <path
          d="M46 78 L44 100 H74 L72 78 Q58 72 46 78 Z"
          fill="#222"
          stroke="#444"
          strokeWidth="0.65"
        />

        <path d="M46 82 L34 94" stroke="#deb896" strokeWidth="3.2" strokeLinecap="round" />
        <path d="M70 82 L82 94" stroke="#deb896" strokeWidth="3.2" strokeLinecap="round" />

        <circle cx="58" cy="66" r="11.5" fill="#e8c4a8" stroke="#c49a7a" strokeWidth="0.75" />

        {/* Кепка: тулья + козырёк */}
        <path
          d="M44 60 L50 50 H66 L72 60 Q66 57 58 57 Q50 57 44 60 Z"
          fill={`url(#${capGradId})`}
          stroke="#FFD600"
          strokeWidth="1"
        />

        {/* Молния на кепке — по ширине тульи (~как «логотип» на козырьке) */}
        <path
          d="M47.5 51 L70.5 51 L63.5 56.2 L71 56.2 L55.2 60.2 L59.8 55.4 L50.2 55.4 L58.2 51.6 Z"
          fill="#FFD600"
          stroke="#1a1400"
          strokeWidth="0.55"
          strokeLinejoin="round"
        />

        <path d="M42 60 Q58 54 74 60" fill="none" stroke="#111" strokeWidth="2.2" strokeLinecap="round" />
      </g>
    </svg>
  );
}

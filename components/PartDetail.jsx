"use client";

import CountNumber from "./CountNumber";

export default function PartDetail({ part }) {
  const inStock = part.stock === "В наличии";
  return (
    <div className="reveal grid gap-10 lg:grid-cols-[1fr_280px] lg:items-start">
      <div>
        <h1 className="font-bebas mb-6 text-[clamp(2rem,5vw,3.2rem)] leading-tight tracking-[2px]">{part.name}</h1>
        <div className="mb-6 flex flex-wrap items-center gap-3">
          {part.ref ? (
            <span className="border border-[rgba(255,214,0,0.2)] bg-[rgba(255,214,0,0.08)] px-3 py-1 font-mono text-[0.85rem] text-[var(--y)]">{part.ref}</span>
          ) : (
            <span className="text-[0.8rem] text-[var(--muted)]">Артикул не указан · позиция #{part.id}</span>
          )}
          {inStock ? (
            <span className="text-[0.75rem] text-[#4ade80]">В наличии</span>
          ) : (
            <span className="text-[0.75rem] text-[var(--muted)]">Нет в наличии</span>
          )}
        </div>
        <p className="text-[0.9rem] leading-relaxed text-[var(--muted)]">Уточняйте наличие и совместимость по телефону или при визите. Цена указана за единицу.</p>
      </div>
      <div className="border border-[rgba(255,255,255,0.06)] bg-[var(--card)] p-8">
        <div className="mb-2 text-[0.72rem] uppercase tracking-[2px] text-[var(--muted)]">Цена</div>
        <div className="font-bebas text-5xl leading-none text-[var(--y)]">
          <CountNumber n={part.price} d={900} s=" ₽" />
        </div>
      </div>
    </div>
  );
}

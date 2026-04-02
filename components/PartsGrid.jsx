"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { getPartPath, partsWithId } from "../data/parts";

function shuffle(a) {
  const b = [...a];
  for (let i = b.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [b[i], b[j]] = [b[j], b[i]];
  }
  return b;
}

export default function PartsGrid() {
  const [query, setQuery] = useState("");
  const [shuffled, setShuffled] = useState(partsWithId);

  useEffect(() => {
    setShuffled(shuffle(partsWithId));
  }, []);

  const data = useMemo(() => {
    const q = query.toLowerCase().trim();
    if (!q) return shuffled;
    return partsWithId.filter((p) => p.name.toLowerCase().includes(q) || p.ref.toLowerCase().includes(q));
  }, [query, shuffled]);

  return (
    <section className="bg-[var(--card)] px-5 py-[100px] md:px-12" id="parts">
      <div className="mx-auto max-w-[1160px]">
        <div className="reveal mb-3 text-[0.7rem] font-bold uppercase tracking-[4px] text-[var(--y)]">Каталог</div>
        <h2 className="reveal font-bebas mb-14 text-[clamp(2.8rem,6vw,5rem)] leading-none tracking-[3px]">ЗАПЧАСТИ</h2>
        <div className="search-wrap mb-3 flex max-w-[560px]">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Поиск по названию или артикулу…"
            className="flex-1 border border-r-0 border-[rgba(255,255,255,0.08)] bg-[#0f0f0f] px-5 py-[13px] text-[0.88rem] text-[var(--text)] outline-none"
          />
          <button type="button" className="shrink-0 bg-[var(--y)] px-[22px] py-[13px] text-black">
            ⚡
          </button>
        </div>
        <div className="reveal mb-7 text-[0.75rem] text-[var(--muted)]">
          Показано <span className="font-bold text-[var(--y)]">{data.length}</span> позиций
        </div>
        <div className="grid grid-cols-1 gap-[3px] sm:grid-cols-2 lg:grid-cols-4">
          {data.map((p) => (
            <Link
              key={p.id}
              href={getPartPath(p)}
              className="group block cursor-pointer bg-[var(--bg)] p-5 no-underline transition-[transform,background-color] duration-200 hover:-translate-y-1 hover:bg-[#111]"
            >
              <div className="mb-4 min-h-9 text-[0.83rem] leading-[1.45] text-[var(--text)]">{p.name}</div>
              <div className="flex items-end justify-between gap-2">
                <div className="font-bebas text-[2rem] leading-none text-[var(--y)]">
                  {Number(p.price).toLocaleString("ru-RU")}
                  <span className="text-[1.1rem]"> ₽</span>
                </div>
                <div className="flex flex-col items-end gap-1">
                  {p.ref ? (
                    <span className="border border-[rgba(255,214,0,0.15)] bg-[rgba(255,214,0,0.07)] px-1.5 py-0.5 font-mono text-[0.65rem] text-[rgba(255,214,0,0.7)]">{p.ref}</span>
                  ) : null}
                  {p.stock === "В наличии" ? (
                    <span className="text-[0.65rem] text-[#4ade80]">В наличии</span>
                  ) : (
                    <span className="text-[0.65rem] text-[var(--muted)]">Нет в наличии</span>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

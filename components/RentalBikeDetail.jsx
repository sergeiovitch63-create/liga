"use client";

import Link from "next/link";
import BikeSvg from "./BikeSvg";
import BatteryRentGrid from "./BatteryRentGrid";
import BatterySwapAndCharger from "./BatterySwapAndCharger";
import CountNumber from "./CountNumber";

export default function RentalBikeDetail({ bike }) {
  return (
    <>
    <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-start">
      <div className="relative flex flex-col items-center justify-center">
        <BikeSvg variant={bike.svgVariant} className="h-auto w-full max-w-[340px] drop-shadow-[0_30px_80px_rgba(255,214,0,0.25)]" />
        <div
          className="pointer-events-none absolute bottom-0 left-1/2 h-[60px] w-[260px] -translate-x-1/2 blur-md"
          style={{
            background: bike.svgVariant === "kugoo" ? "radial-gradient(ellipse,rgba(255,165,0,0.35) 0%,transparent 70%)" : "radial-gradient(ellipse,rgba(255,214,0,0.35) 0%,transparent 70%)"
          }}
        />
      </div>
      <div>
        <div className="reveal mb-4 inline-block border border-[rgba(255,214,0,0.2)] bg-[rgba(255,214,0,0.1)] px-3 py-1 text-[0.65rem] font-bold uppercase tracking-[2px] text-[var(--y)]">{bike.tag}</div>
        <h1 className="reveal font-bebas mb-4 text-[clamp(2.5rem,6vw,4rem)] leading-none tracking-[3px]">{bike.model}</h1>
        <p className="reveal mb-2 text-[0.95rem] leading-relaxed text-[var(--muted)]">{bike.type}</p>
        <p className="reveal mb-10 text-[0.9rem] leading-relaxed text-[#aaa]">{bike.description}</p>

        <h2 className="reveal mb-4 font-bebas text-[1.35rem] uppercase tracking-[3px] text-[var(--y)]">Основные характеристики</h2>
        <ul className="reveal mb-10 list-inside list-disc space-y-2.5 text-[0.85rem] leading-relaxed text-[var(--muted)]">
          {bike.mainSpecs.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>

        <h2 className="reveal mb-4 font-bebas text-[1.35rem] uppercase tracking-[3px] text-[var(--y)]">Экстра функции</h2>
        <ul className="reveal mb-10 list-inside list-disc space-y-2.5 text-[0.85rem] leading-relaxed text-[var(--muted)]">
          {bike.extraFeatures.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>
        <div className="reveal flex flex-wrap gap-10 border-t border-[rgba(255,255,255,0.08)] pt-8">
          <div>
            <div className="mb-1 text-[0.72rem] uppercase tracking-[2px] text-[var(--muted)]">Аренда</div>
            <div className="font-bebas text-6xl leading-none text-[var(--y)]">
              <CountNumber n={bike.price} d={900} />
            </div>
            <div className="mt-1 text-[0.8rem] text-[var(--muted)]">рублей / сутки</div>
          </div>
          <div>
            <div className="mb-1 text-[0.72rem] uppercase tracking-[2px] text-[var(--muted)]">Залог</div>
            <div className="font-bebas text-5xl leading-none text-[var(--text)]">
              <CountNumber n={bike.deposit} d={1000} s=" ₽" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <section className="mt-20 w-full border-t border-[rgba(255,214,0,0.12)] pt-16" aria-labelledby={`akb-${bike.slug}`}>
      <div className="reveal mb-3 text-[0.7rem] font-bold uppercase tracking-[4px] text-[var(--y)]">Аккумуляторы</div>
      <h2 id={`akb-${bike.slug}`} className="reveal font-bebas mb-3 text-[clamp(1.8rem,4vw,2.8rem)] leading-none tracking-[3px]">
        Дополнительный аккумулятор
      </h2>
      <p className="reveal mb-8 max-w-2xl text-[0.88rem] leading-relaxed text-[var(--muted)]">
        Те же тарифы, что в разделе{" "}
        <Link href="/battery#battery-rent" className="text-[var(--y)] underline underline-offset-2 hover:no-underline">«Дополнительный аккумулятор»</Link>{" "}
        на странице АКБ: аренда второй батареи к этому велосипеду. Залог на аккумулятор —{" "}
        <strong className="text-[var(--text)]">1 000 ₽</strong>. Замена АКБ и зарядные устройства — на странице{" "}
        <Link href="/battery" className="text-[var(--y)] underline underline-offset-2 hover:no-underline">Аккумуляторы</Link>.
      </p>
      <div className="reveal">
        <BatteryRentGrid layout="section" asLinks />
      </div>

      <div className="reveal mt-16 border-t border-[rgba(255,214,0,0.12)] pt-16">
        <BatterySwapAndCharger asLinks />
      </div>
    </section>
    </>
  );
}

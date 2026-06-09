"use client";

import Link from "next/link";
import { batteryRent, chargers } from "../data/battery";
import BatteryPackIllustration from "./illustrations/BatteryPackIllustration";
import ChargerIllustration from "./illustrations/ChargerIllustration";
import CountNumber from "./CountNumber";

export default function BatterySection() {
  return (
    <section className="px-5 py-[100px] md:px-12" id="battery">
      <div className="mx-auto max-w-[1160px]">
        <div className="reveal mb-3 text-[0.7rem] font-bold uppercase tracking-[4px] text-[var(--y)]">Аккумуляторы</div>
        <h2 className="reveal font-bebas mb-14 text-[clamp(2.8rem,6vw,5rem)] leading-none tracking-[3px]">АРЕНДА АКБ</h2>
        <div className="reveal mb-4 text-[0.7rem] font-bold uppercase tracking-[3px] text-[var(--muted)]">Дополнительный аккумулятор</div>
        <div className="mb-12 grid grid-cols-1 gap-[3px] md:grid-cols-4">
          {batteryRent.map((item) => (
            <Link
              key={item.duration}
              href="/battery#battery-rent"
              className={`group block cursor-pointer text-center no-underline transition-[transform,background-color] duration-200 hover:-translate-y-1 ${
                item.best ? "border border-[rgba(255,214,0,0.25)] bg-[rgba(255,214,0,0.07)]" : ""
              } bg-[var(--card)] p-8 hover:bg-[#1c1c1c]`}
            >
              <div className="mb-3 flex justify-center opacity-95 transition-opacity duration-200 group-hover:opacity-100">
                <BatteryPackIllustration className="h-[88px] w-[140px] [filter:drop-shadow(0_12px_32px_rgba(255,214,0,0.2))]" />
              </div>
              {item.best && <div className="mb-4 inline-block bg-[var(--y)] px-2.5 py-1 text-[0.6rem] font-extrabold uppercase tracking-[2px] text-black">Выгодно</div>}
              <div className="mb-3 text-[0.72rem] uppercase tracking-[2px] text-[var(--muted)]">{item.duration}</div>
              <div className="font-bebas text-6xl leading-none text-[var(--y)]">
                <sup className="text-[1.8rem]">₽</sup>
                <CountNumber n={item.price} d={900} />
              </div>
              <div className="mt-1.5 text-[0.75rem] text-[var(--muted)]">в сутки</div>
            </Link>
          ))}
        </div>

        <div className="reveal mb-4 mt-12 text-[0.7rem] font-bold uppercase tracking-[3px] text-[var(--muted)]">Зарядное устройство</div>
        <div className="grid gap-[3px]">
          {chargers.map((item) => (
            <Link
              key={item.title}
              href="/battery#battery-charger"
              className="flex cursor-pointer flex-col gap-5 bg-[var(--card)] px-7 py-6 no-underline transition-[transform,background-color] duration-200 hover:-translate-y-1 hover:bg-[#1c1c1c] sm:flex-row sm:items-center sm:justify-between sm:gap-8"
            >
              <div className="flex min-w-0 flex-1 flex-col items-center gap-4 sm:flex-row sm:items-center">
                <ChargerIllustration className="h-20 w-44 shrink-0 [filter:drop-shadow(0_10px_28px_rgba(255,214,0,0.22))] sm:h-[72px] sm:w-40" />
                <div className="text-center text-[0.8rem] text-[var(--muted)] sm:text-left">
                  <strong className="mb-0.5 block text-[0.95rem] text-[var(--text)]">{item.title}</strong>
                  {item.subtitle}
                </div>
              </div>
              <div className="font-bebas shrink-0 text-center text-[2.5rem] leading-none text-[var(--y)] sm:text-right">
                <CountNumber n={item.price} d={800} s="₽" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

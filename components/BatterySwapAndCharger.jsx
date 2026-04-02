"use client";

import Link from "next/link";
import { batterySwap, chargers } from "../data/battery";
import CountNumber from "./CountNumber";

const swapCardClass =
  "flex flex-col gap-4 bg-[var(--card)] px-7 py-6 sm:flex-row sm:items-center sm:justify-between";
const swapLinkExtra =
  "cursor-pointer no-underline transition-[transform,background-color] duration-200 hover:-translate-y-1 hover:bg-[#1c1c1c]";

export default function BatterySwapAndCharger({ asLinks = false }) {
  return (
    <>
      <div id="battery-swap" className="reveal mb-4 text-[0.7rem] font-bold uppercase tracking-[3px] text-[var(--muted)]">
        Замена аккумулятора
      </div>
      <div className="reveal mb-14 grid grid-cols-1 gap-[3px]">
        {batterySwap.map((item) => {
          const inner = (
            <>
              <div>
                <strong className="mb-1 block text-[0.95rem] text-[var(--text)]">{item.title}</strong>
                <span className="text-[0.8rem] text-[var(--muted)]">{item.subtitle}</span>
                <p className="mt-3 max-w-xl text-[0.78rem] leading-relaxed text-[#888]">Разовая услуга замены при сдаче нескольких аккумуляторов.</p>
              </div>
              <div className="font-bebas shrink-0 text-[2.5rem] leading-none text-[var(--y)]">
                <CountNumber n={item.price} d={800} s="₽" />
              </div>
            </>
          );
          return asLinks ? (
            <Link key={item.title} href="/battery#battery-swap" className={`${swapCardClass} ${swapLinkExtra}`}>
              {inner}
            </Link>
          ) : (
            <div key={item.title} className={swapCardClass}>
              {inner}
            </div>
          );
        })}
      </div>

      <div id="battery-charger" className="reveal mb-4 text-[0.7rem] font-bold uppercase tracking-[3px] text-[var(--muted)]">
        Зарядное устройство
      </div>
      <div className="reveal grid gap-[3px]">
        {chargers.map((item) => {
          const inner = (
            <>
              <div>
                <strong className="mb-1 block text-[0.95rem] text-[var(--text)]">{item.title}</strong>
                <span className="text-[0.8rem] text-[var(--muted)]">{item.subtitle}</span>
                <p className="mt-3 max-w-xl text-[0.78rem] leading-relaxed text-[#888]">Аренда ЗУ на неделю. Уточняйте совместимость с вашей батареей при оформлении.</p>
              </div>
              <div className="font-bebas shrink-0 text-[2.5rem] leading-none text-[var(--y)]">
                <CountNumber n={item.price} d={800} s="₽" />
              </div>
            </>
          );
          return asLinks ? (
            <Link key={item.title} href="/battery#battery-charger" className={`${swapCardClass} ${swapLinkExtra}`}>
              {inner}
            </Link>
          ) : (
            <div key={item.title} className={swapCardClass}>
              {inner}
            </div>
          );
        })}
      </div>
    </>
  );
}

"use client";

import Link from "next/link";
import { batteryRent } from "../data/battery";
import CountNumber from "./CountNumber";

/**
 * @param {"section" | "detail"} layout — section: 4 cols comme l’accueil ; detail: 2 cols + texte sous chaque carte (page /battery)
 * @param {boolean} asLinks — cartes cliquables vers /battery#battery-rent
 */
export default function BatteryRentGrid({ layout = "section", asLinks = true }) {
  const isDetail = layout === "detail";
  const gridClass = isDetail ? "grid grid-cols-1 gap-[3px] md:grid-cols-2" : "grid grid-cols-1 gap-[3px] md:grid-cols-4";

  const cardInner = (item) => (
    <>
      {item.best && (
        <div className="mb-4 inline-block bg-[var(--y)] px-2.5 py-1 text-[0.6rem] font-extrabold uppercase tracking-[2px] text-black">Выгодно</div>
      )}
      <div className="mb-3 text-[0.72rem] uppercase tracking-[2px] text-[var(--muted)]">{item.duration}</div>
      <div className="font-bebas text-6xl leading-none text-[var(--y)]">
        <sup className="text-[1.8rem]">₽</sup>
        <CountNumber n={item.price} d={900} />
      </div>
      <div className="mt-1.5 text-[0.75rem] text-[var(--muted)]">в сутки</div>
      {isDetail && (
        <p className="mt-4 text-[0.78rem] leading-snug text-[#888]">Стоимость указана за каждые сутки аренды дополнительной батареи при выбранном периоде.</p>
      )}
    </>
  );

  const cardClass = (item) =>
    `block bg-[var(--card)] p-8 text-center no-underline transition-[transform,background-color] duration-200 hover:-translate-y-1 hover:bg-[#1c1c1c] ${
      item.best ? "border border-[rgba(255,214,0,0.25)] bg-[rgba(255,214,0,0.07)]" : ""
    }`;

  return (
    <div className={gridClass}>
      {batteryRent.map((item) =>
        asLinks ? (
          <Link key={item.duration} href="/battery#battery-rent" className={`cursor-pointer ${cardClass(item)}`}>
            {cardInner(item)}
          </Link>
        ) : (
          <div key={item.duration} className={cardClass(item)}>
            {cardInner(item)}
          </div>
        )
      )}
    </div>
  );
}

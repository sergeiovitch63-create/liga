"use client";

import Image from "next/image";
import Link from "next/link";
import { bikes } from "../data/bikes";
import CountNumber from "./CountNumber";

const BIKE_CARD_IMAGES = {
  "mingto-monster": "/images/Mingto monster.jpg",
  "kugoo-kirin": "/images/KugooKirin V3pro.jpg",
  "gt-pro": "/images/Gt pro.jpg",
};

export default function RentalSection() {
  return (
    <section className="section bg-[var(--card)] px-5 py-[100px] md:px-12" id="rental">
      <div className="mx-auto max-w-[1160px]">
        <div className="reveal mb-3 text-[0.7rem] font-bold uppercase tracking-[4px] text-[var(--y)]">Аренда велосипедов</div>
        <h2 className="reveal font-bebas mb-14 text-[clamp(2.8rem,6vw,5rem)] leading-none tracking-[3px]">ПРАЙС НА АРЕНДУ</h2>
        <div className="mb-10 grid grid-cols-1 gap-[3px] md:grid-cols-3">
          {bikes.map((bike) => (
            <Link
              key={bike.slug}
              href={`/rental/${bike.slug}`}
              className="group flex cursor-pointer flex-col bg-[var(--bg)] p-9 no-underline transition-[transform,background-color] duration-200 hover:-translate-y-1.5 hover:bg-[#111]"
            >
              <div className="mb-4 flex min-h-[190px] items-center justify-center">
                <Image
                  src={BIKE_CARD_IMAGES[bike.slug]}
                  alt={bike.model}
                  width={520}
                  height={340}
                  className="h-auto w-full max-w-[260px] object-contain transition-transform duration-300 group-hover:scale-[1.03] [filter:drop-shadow(0_22px_55px_rgba(255,214,0,0.28))]"
                />
              </div>
              <div className="mb-5 inline-block w-fit border border-[rgba(255,214,0,0.2)] bg-[rgba(255,214,0,0.1)] px-3 py-1 text-[0.65rem] font-bold uppercase tracking-[2px] text-[var(--y)]">{bike.tag}</div>
              <div className="font-bebas text-[1.8rem] tracking-[2px] text-[var(--text)]">{bike.model}</div>
              <div className="mb-7 text-[0.78rem] text-[var(--muted)]">{bike.type}</div>
              <div className="font-bebas text-7xl leading-none text-[var(--y)]">
                <span className="mr-2 text-[1.6rem] align-top text-[var(--muted)]">от</span>
                <CountNumber n={bike.priceTiers[0].price} d={900} />
              </div>
              <div className="mt-1 text-[0.8rem] text-[var(--muted)]">рублей / сутки · 1–6 суток</div>
              <div className="mt-6 flex justify-between border-t border-[rgba(255,255,255,0.05)] pt-5 text-[0.78rem] text-[var(--muted)]">
                <span>Залоговая стоимость</span>
                <strong className="text-[var(--text)]">
                  <CountNumber n={bike.deposit} d={1000} s=" ₽" />
                </strong>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

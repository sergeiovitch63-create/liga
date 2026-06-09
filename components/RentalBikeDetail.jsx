"use client";

import Image from "next/image";
import Link from "next/link";
import BatteryRentGrid from "./BatteryRentGrid";
import BatterySwapAndCharger from "./BatterySwapAndCharger";
import CountNumber from "./CountNumber";

const BIKE_DETAIL_IMAGES = {
  "mingto-monster": "/images/Mingto monster.jpg",
  "kugoo-kirin": "/images/KugooKirin V3pro.jpg",
  "gt-pro": "/images/Gt pro.jpg",
};

export default function RentalBikeDetail({ bike }) {
  return (
    <>
    <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-start">
      <div className="relative flex flex-col items-center justify-center">
        <Image
          src={BIKE_DETAIL_IMAGES[bike.slug]}
          alt={bike.model}
          width={760}
          height={500}
          priority
          className="h-auto w-full max-w-[560px] object-contain drop-shadow-[0_30px_80px_rgba(255,214,0,0.25)]"
        />
        <div
          className="pointer-events-none absolute bottom-0 left-1/2 h-[60px] w-[260px] -translate-x-1/2 blur-md"
          style={{
            background: bike.svgVariant === "kugoo" ? "radial-gradient(ellipse,rgba(255,165,0,0.35) 0%,transparent 70%)" : "radial-gradient(ellipse,rgba(255,214,0,0.35) 0%,transparent 70%)"
          }}
        />

        <div className="reveal mt-8 hidden w-full max-w-[560px] lg:block">
          <div className="border-t border-[rgba(255,255,255,0.08)] pt-8">
            <div className="mb-4 text-[0.72rem] uppercase tracking-[2px] text-[var(--muted)]">Аренда</div>
            <div className="grid grid-cols-3 gap-[3px]">
              {bike.priceTiers.map((tier) => (
                <div
                  key={tier.duration}
                  className={`bg-[var(--card)] px-4 py-5 text-center ${tier.best ? "border border-[rgba(255,214,0,0.25)] bg-[rgba(255,214,0,0.07)]" : ""}`}
                >
                  {tier.best && (
                    <div className="mb-2 inline-block bg-[var(--y)] px-2 py-0.5 text-[0.55rem] font-extrabold uppercase tracking-[2px] text-black">Выгодно</div>
                  )}
                  <div className="mb-2 text-[0.65rem] uppercase tracking-[2px] text-[var(--muted)]">{tier.duration}</div>
                  <div className="font-bebas text-4xl leading-none text-[var(--y)]">
                    <sup className="text-[1.1rem]">₽</sup>
                    <CountNumber n={tier.price} d={900} />
                  </div>
                  <div className="mt-1 text-[0.65rem] text-[var(--muted)]">в сутки</div>
                </div>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-10">
              <div>
                <div className="mb-1 text-[0.72rem] uppercase tracking-[2px] text-[var(--muted)]">Залог</div>
                <div className="font-bebas text-5xl leading-none text-[var(--text)]">
                  <CountNumber n={bike.deposit} d={1000} s=" ₽" />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <a
              href="https://forms.fleet.yandex.ru/forms?specification=delivery&skip_license=1&skip_vehicle=1&ref_id=6c1935d7ade84f28a8f6eea6e796e36e"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[var(--y)] px-8 py-3 text-[0.78rem] font-bold uppercase tracking-[2px] text-black no-underline [clip-path:polygon(0_0,calc(100%-12px)_0,100%_12px,100%_100%,12px_100%,0_calc(100%-12px))] transition-opacity hover:opacity-90"
            >
              Забронировать велосипед
            </a>
          </div>
        </div>
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
        <div className="reveal border-t border-[rgba(255,255,255,0.08)] pt-8 lg:hidden">
          <div className="mb-4 text-[0.72rem] uppercase tracking-[2px] text-[var(--muted)]">Аренда</div>
          <div className="grid grid-cols-1 gap-[3px] sm:grid-cols-3">
            {bike.priceTiers.map((tier) => (
              <div
                key={tier.duration}
                className={`bg-[var(--card)] px-4 py-5 text-center ${tier.best ? "border border-[rgba(255,214,0,0.25)] bg-[rgba(255,214,0,0.07)]" : ""}`}
              >
                {tier.best && (
                  <div className="mb-2 inline-block bg-[var(--y)] px-2 py-0.5 text-[0.55rem] font-extrabold uppercase tracking-[2px] text-black">Выгодно</div>
                )}
                <div className="mb-2 text-[0.65rem] uppercase tracking-[2px] text-[var(--muted)]">{tier.duration}</div>
                <div className="font-bebas text-4xl leading-none text-[var(--y)]">
                  <sup className="text-[1.1rem]">₽</sup>
                  <CountNumber n={tier.price} d={900} />
                </div>
                <div className="mt-1 text-[0.65rem] text-[var(--muted)]">в сутки</div>
              </div>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-10">
            <div>
              <div className="mb-1 text-[0.72rem] uppercase tracking-[2px] text-[var(--muted)]">Залог</div>
              <div className="font-bebas text-5xl leading-none text-[var(--text)]">
                <CountNumber n={bike.deposit} d={1000} s=" ₽" />
              </div>
            </div>
          </div>
        </div>

        <div className="reveal mt-8 lg:hidden">
          <a
            href="https://forms.fleet.yandex.ru/forms?specification=delivery&skip_license=1&skip_vehicle=1&ref_id=6c1935d7ade84f28a8f6eea6e796e36e"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[var(--y)] px-8 py-3 text-[0.78rem] font-bold uppercase tracking-[2px] text-black no-underline [clip-path:polygon(0_0,calc(100%-12px)_0,100%_12px,100%_100%,12px_100%,0_calc(100%-12px))] transition-opacity hover:opacity-90"
          >
            Забронировать велосипед
          </a>
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
        на странице АКБ: аренда третьей батареи к этому велосипеду. Залог на аккумулятор —{" "}
        <strong className="text-[var(--text)]">1 000 ₽</strong>. Зарядные устройства — на странице{" "}
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

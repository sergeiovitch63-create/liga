"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { bikes } from "../data/bikes";
import styles from "../styles/HeroCarousel.module.css";

const INTERVAL = 4000;
const HERO_BIKE_SLIDES = [
  {
    imageSrc: "/images/Mingto monster.jpg",
    title: "MINGTO MONSTER",
    priceLabel: "Аренда от 500 ₽ / сутки",
    titleClass: "from-[var(--y)] to-[var(--y2)]",
  },
  {
    imageSrc: "/images/KugooKirin V3pro.jpg",
    title: "KUGOO KIRIN V3 PRO",
    priceLabel: "Аренда от 650 ₽ / сутки",
    titleClass: "from-[#FFA500] to-[#FFD600]",
  },
  {
    imageSrc: "/images/Gt pro.jpg",
    title: "GT PRO",
    priceLabel: "Аренда от 650 ₽ / сутки",
    titleClass: "from-[var(--y)] to-[var(--y2)]",
  },
];

export default function HeroCarousel() {
  const total = 3;
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((v) => (v + 1) % total);
    }, INTERVAL);
    return () => clearInterval(id);
  }, [total]);

  const goTo = (idx) => setCurrent(idx);
  const prevIdx = (current - 1 + total) % total;
  const nextIdx = (current + 1) % total;
  const getSlideClass = (idx) => {
    if (idx === current) return styles.active;
    if (idx === prevIdx) return styles.prev;
    if (idx === nextIdx) return styles.next;
    return styles.hidden;
  };
  const onSideClick = (idx) => {
    if (idx === nextIdx) goTo(nextIdx);
    if (idx === prevIdx) goTo(prevIdx);
  };

  const wrapIfActive = (idx, inner) =>
    idx === current ? (
      <Link
        href={`/rental/${bikes[idx].slug}`}
        className={styles.slideBikeLink}
        aria-label={`Подробнее: ${bikes[idx].model}`}
      >
        {inner}
      </Link>
    ) : (
      inner
    );

  return (
    <div className={styles.carouselWrap}>
      <div className={styles.stage}>
        {HERO_BIKE_SLIDES.map((slide, idx) => (
          <div
            key={slide.title}
            className={`${styles.slide} ${getSlideClass(idx)}`}
            onClick={current === idx ? undefined : () => onSideClick(idx)}
          >
            {wrapIfActive(
              idx,
              <>
                <div className={styles.bikeVisual}>
                  <Image
                    src={slide.imageSrc}
                    alt={slide.title}
                    width={520}
                    height={340}
                    priority={idx === 0}
                    className={`${styles.bikePhoto} [filter:drop-shadow(0_22px_55px_rgba(255,214,0,0.32))]`}
                  />
                  <div className={styles.bikeGlow} />
                  <div className={styles.particle} style={{ top: "18%", left: "12%", animationDelay: "0.2s" }} />
                  <div className={styles.particle} style={{ top: "42%", right: "8%", animationDelay: "1.1s", width: "3px", height: "3px" }} />
                  <div className={styles.particle} style={{ top: "66%", left: "14%", animationDelay: "1.8s", width: "5px", height: "5px" }} />
                </div>
                <div className="mt-2 text-center">
                  <div className={`font-bebas bg-gradient-to-br ${slide.titleClass} bg-clip-text text-[1.8rem] tracking-[3px] text-transparent`}>
                    {slide.title}
                  </div>
                  <div className="mt-1 text-[0.85rem] uppercase tracking-[2px] text-[#9a9a9a]">{slide.priceLabel}</div>
                </div>
              </>
            )}
          </div>
        ))}
      </div>

      <div className={styles.dots}>
        {[0, 1, 2].map((i) => (
          <button key={i} type="button" aria-label={`Слайд ${i + 1}`} className={`${styles.dot} ${i === current ? styles.dotOn : ""}`} onClick={() => goTo(i)} />
        ))}
      </div>
    </div>
  );
}

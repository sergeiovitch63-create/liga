"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import CountNumber from "./CountNumber";
import HeroContactBar from "./HeroContactBar";
import HeroCarousel from "./HeroCarousel";
import styles from "../styles/HeroCarousel.module.css";

export default function Hero() {
  const glowRef = useRef(null);

  useEffect(() => {
    const onMove = (e) => {
      if (!glowRef.current) return;
      glowRef.current.style.left = `${e.clientX}px`;
      glowRef.current.style.top = `${e.clientY}px`;
    };
    document.addEventListener("mousemove", onMove);
    return () => document.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <>
      <div ref={glowRef} className={styles.cursorGlow} />
      <section className={styles.hero}>
        <div className={styles.heroBg} />
        <div className={styles.heroGrid} />

        <div className={styles.heroVisual}>
          <HeroCarousel />
        </div>

        <div className={styles.heroBottom}>
          <HeroContactBar />
          <div className="w-full max-w-[600px] border-t border-[rgba(255,214,0,0.12)]" />
          <div className="flex flex-wrap justify-center gap-14">
            <div>
              <div className="font-bebas text-center text-[2.8rem] leading-none text-[var(--y)]">
                <CountNumber n={500} d={900} s="₽" />
              </div>
              <div className="mt-1 text-center text-[0.72rem] uppercase tracking-[1.5px] text-[var(--muted)]">Аренда от</div>
            </div>
            <div>
              <div className="font-bebas text-center text-[2.8rem] leading-none text-[var(--y)]">
                <CountNumber n={145} d={1100} s="+" />
              </div>
              <div className="mt-1 text-center text-[0.72rem] uppercase tracking-[1.5px] text-[var(--muted)]">Запчастей</div>
            </div>
            <div>
              <div className="font-bebas text-center text-[2.8rem] leading-none text-[var(--y)]">
                <CountNumber n={3} d={600} />
              </div>
              <div className="mt-1 text-center text-[0.72rem] uppercase tracking-[1.5px] text-[var(--muted)]">Модели</div>
            </div>
            <div>
              <div className="font-bebas text-center text-[2.8rem] leading-none text-[var(--y)]">24/7</div>
              <div className="mt-1 text-center text-[0.72rem] uppercase tracking-[1.5px] text-[var(--muted)]">Доступность</div>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/#rental"
              className="inline-block bg-[var(--y)] px-10 py-4 text-[0.8rem] font-bold uppercase tracking-[2px] text-black no-underline [clip-path:polygon(0_0,calc(100%-12px)_0,100%_12px,100%_100%,12px_100%,0_calc(100%-12px))]"
            >
              Смотреть цены
            </Link>
            <Link
              href="/#parts"
              className="inline-block border border-[rgba(255,214,0,0.4)] px-10 py-4 text-[0.8rem] font-bold uppercase tracking-[2px] text-[var(--y)] no-underline [clip-path:polygon(0_0,calc(100%-12px)_0,100%_12px,100%_100%,12px_100%,0_calc(100%-12px))]"
            >
              Каталог запчастей
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

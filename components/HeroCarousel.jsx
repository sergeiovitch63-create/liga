"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { bikes } from "../data/bikes";
import styles from "../styles/HeroCarousel.module.css";

const INTERVAL = 4000;

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
        <div
          className={`${styles.slide} ${getSlideClass(0)}`}
          onClick={current === 0 ? undefined : () => onSideClick(0)}
        >
          {wrapIfActive(
            0,
            <>
          <div className={styles.bikeVisual}>
            <svg className={styles.bikeSvg} viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
              <circle cx="75" cy="220" r="55" fill="none" stroke="#FFD600" strokeWidth="7" />
              <circle cx="75" cy="220" r="38" fill="none" stroke="#333" strokeWidth="4" />
              <circle cx="75" cy="220" r="8" fill="#FFD600" />
              <circle cx="225" cy="220" r="55" fill="none" stroke="#FFD600" strokeWidth="7" />
              <circle cx="225" cy="220" r="38" fill="none" stroke="#333" strokeWidth="4" />
              <circle cx="225" cy="220" r="8" fill="#FFD600" />
              <line x1="75" y1="165" x2="75" y2="182" stroke="#FFD600" strokeWidth="2.5" opacity="0.6" />
              <line x1="75" y1="258" x2="75" y2="275" stroke="#FFD600" strokeWidth="2.5" opacity="0.6" />
              <line x1="20" y1="220" x2="37" y2="220" stroke="#FFD600" strokeWidth="2.5" opacity="0.6" />
              <line x1="113" y1="220" x2="130" y2="220" stroke="#FFD600" strokeWidth="2.5" opacity="0.6" />
              <line x1="36" y1="179" x2="48" y2="191" stroke="#FFD600" strokeWidth="2.5" opacity="0.6" />
              <line x1="102" y1="249" x2="114" y2="261" stroke="#FFD600" strokeWidth="2.5" opacity="0.6" />
              <line x1="225" y1="165" x2="225" y2="182" stroke="#FFD600" strokeWidth="2.5" opacity="0.6" />
              <line x1="225" y1="258" x2="225" y2="275" stroke="#FFD600" strokeWidth="2.5" opacity="0.6" />
              <line x1="170" y1="220" x2="187" y2="220" stroke="#FFD600" strokeWidth="2.5" opacity="0.6" />
              <line x1="263" y1="220" x2="280" y2="220" stroke="#FFD600" strokeWidth="2.5" opacity="0.6" />
              <path d="M75 220 L105 145 L175 140 L225 220" fill="none" stroke="#eee" strokeWidth="6" strokeLinejoin="round" />
              <path d="M105 145 L130 80 L160 80" fill="none" stroke="#eee" strokeWidth="6" />
              <path d="M175 140 L160 80" fill="none" stroke="#eee" strokeWidth="5" />
              <rect x="112" y="148" width="58" height="30" rx="4" fill="#FFD600" opacity="0.9" />
              <rect x="116" y="152" width="50" height="22" rx="3" fill="#111" />
              <text x="141" y="167" fill="#FFD600" fontSize="9" fontFamily="monospace" fontWeight="bold">60V</text>
              <path d="M130 80 L155 60 M130 80 L108 72" fill="none" stroke="#eee" strokeWidth="5" strokeLinecap="round" />
              <path d="M155 80 L190 80" fill="none" stroke="#FFD600" strokeWidth="7" strokeLinecap="round" />
              <path d="M105 145 L80 220" fill="none" stroke="#bbb" strokeWidth="5" />
              <circle cx="225" cy="220" r="14" fill="none" stroke="#FFD600" strokeWidth="2" opacity="0.5" />
              <ellipse cx="152" cy="67" rx="10" ry="6" fill="#FFD600" opacity="0.9" />
              <ellipse cx="152" cy="67" rx="6" ry="4" fill="#fff" opacity="0.6" />
            </svg>
            <div className={styles.bikeGlow} />
            <div className={styles.particle} style={{ top: "20%", left: "10%", animationDelay: "0s" }} />
            <div className={styles.particle} style={{ top: "40%", right: "8%", animationDelay: "0.8s", width: "3px", height: "3px" }} />
            <div className={styles.particle} style={{ top: "65%", left: "15%", animationDelay: "1.5s", width: "5px", height: "5px" }} />
          </div>
          <div className="mt-2 text-center">
            <div className="font-bebas bg-gradient-to-br from-[var(--y)] to-[var(--y2)] bg-clip-text text-[1.8rem] tracking-[3px] text-transparent">MINGTO MONSTER</div>
            <div className="mt-1 text-[0.85rem] uppercase tracking-[2px] text-[#9a9a9a]">Аренда от 500 ₽ / сутки</div>
          </div>
            </>
          )}
        </div>

        <div
          className={`${styles.slide} ${getSlideClass(1)}`}
          onClick={current === 1 ? undefined : () => onSideClick(1)}
        >
          {wrapIfActive(
            1,
            <>
          <div className={styles.bikeVisual}>
            <svg className={styles.bikeSvg} viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
              <circle cx="80" cy="225" r="48" fill="none" stroke="#FFD600" strokeWidth="6" />
              <circle cx="80" cy="225" r="33" fill="none" stroke="#2a2a2a" strokeWidth="3.5" />
              <circle cx="80" cy="225" r="7" fill="#FFD600" />
              <circle cx="220" cy="225" r="48" fill="none" stroke="#FFD600" strokeWidth="6" />
              <circle cx="220" cy="225" r="33" fill="none" stroke="#2a2a2a" strokeWidth="3.5" />
              <circle cx="220" cy="225" r="7" fill="#FFD600" />
              <line x1="80" y1="177" x2="80" y2="192" stroke="#FFD600" strokeWidth="2" opacity="0.5" />
              <line x1="80" y1="258" x2="80" y2="273" stroke="#FFD600" strokeWidth="2" opacity="0.5" />
              <line x1="32" y1="225" x2="47" y2="225" stroke="#FFD600" strokeWidth="2" opacity="0.5" />
              <line x1="113" y1="225" x2="128" y2="225" stroke="#FFD600" strokeWidth="2" opacity="0.5" />
              <line x1="220" y1="177" x2="220" y2="192" stroke="#FFD600" strokeWidth="2" opacity="0.5" />
              <line x1="220" y1="258" x2="220" y2="273" stroke="#FFD600" strokeWidth="2" opacity="0.5" />
              <line x1="172" y1="225" x2="187" y2="225" stroke="#FFD600" strokeWidth="2" opacity="0.5" />
              <line x1="253" y1="225" x2="268" y2="225" stroke="#FFD600" strokeWidth="2" opacity="0.5" />
              <path d="M80 225 L115 155 L185 148 L220 225" fill="none" stroke="#ddd" strokeWidth="5.5" strokeLinejoin="round" />
              <path d="M115 155 L138 90 L162 88" fill="none" stroke="#ddd" strokeWidth="5.5" />
              <path d="M185 148 L162 88" fill="none" stroke="#ddd" strokeWidth="4.5" />
              <rect x="118" y="155" width="52" height="22" rx="5" fill="#FFA500" opacity="0.85" />
              <rect x="122" y="159" width="44" height="14" rx="3" fill="#111" />
              <text x="144" y="170" fill="#FFA500" fontSize="8" fontFamily="monospace" fontWeight="bold">48V</text>
              <path d="M138 90 L160 72 M138 90 L118 84" fill="none" stroke="#ddd" strokeWidth="4.5" strokeLinecap="round" />
              <path d="M158 88 L190 88" fill="none" stroke="#FFD600" strokeWidth="6" strokeLinecap="round" />
              <path d="M115 155 L85 225" fill="none" stroke="#aaa" strokeWidth="4.5" />
              <ellipse cx="158" cy="79" rx="8" ry="5" fill="#FFD600" opacity="0.85" />
              <ellipse cx="158" cy="79" rx="5" ry="3" fill="#fff" opacity="0.5" />
              <circle cx="220" cy="225" r="12" fill="none" stroke="#FFA500" strokeWidth="2" opacity="0.5" />
            </svg>
            <div className={styles.bikeGlow} style={{ background: "radial-gradient(ellipse,rgba(255,165,0,0.35) 0%,transparent 70%)" }} />
            <div className={styles.particle} style={{ top: "25%", right: "12%", animationDelay: "0.3s", background: "#FFA500" }} />
            <div className={styles.particle} style={{ top: "55%", left: "8%", animationDelay: "1.1s", width: "3px", height: "3px", background: "#FFA500" }} />
          </div>
          <div className="mt-2 text-center">
            <div className="font-bebas bg-gradient-to-br from-[#FFA500] to-[#FFD600] bg-clip-text text-[1.8rem] tracking-[3px] text-transparent">KUGOO KIRIN</div>
            <div className="mt-1 text-[0.85rem] uppercase tracking-[2px] text-[#9a9a9a]">Аренда от 650 ₽ / сутки</div>
          </div>
            </>
          )}
        </div>

        <div
          className={`${styles.slide} ${getSlideClass(2)}`}
          onClick={current === 2 ? undefined : () => onSideClick(2)}
        >
          {wrapIfActive(
            2,
            <>
          <div className={styles.bikeVisual}>
            <svg className={styles.bikeSvg} viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
              <circle cx="78" cy="222" r="50" fill="none" stroke="#FFD600" strokeWidth="6.5" />
              <circle cx="78" cy="222" r="35" fill="none" stroke="#1a1a1a" strokeWidth="4" />
              <circle cx="78" cy="222" r="8" fill="#FFD600" />
              <circle cx="222" cy="222" r="50" fill="none" stroke="#FFD600" strokeWidth="6.5" />
              <circle cx="222" cy="222" r="35" fill="none" stroke="#1a1a1a" strokeWidth="4" />
              <circle cx="222" cy="222" r="8" fill="#FFD600" />
              <line x1="78" y1="172" x2="78" y2="187" stroke="#FFD600" strokeWidth="2.5" opacity="0.55" />
              <line x1="78" y1="257" x2="78" y2="272" stroke="#FFD600" strokeWidth="2.5" opacity="0.55" />
              <line x1="28" y1="222" x2="43" y2="222" stroke="#FFD600" strokeWidth="2.5" opacity="0.55" />
              <line x1="113" y1="222" x2="128" y2="222" stroke="#FFD600" strokeWidth="2.5" opacity="0.55" />
              <line x1="43" y1="186" x2="54" y2="197" stroke="#FFD600" strokeWidth="2.5" opacity="0.55" />
              <line x1="102" y1="247" x2="113" y2="258" stroke="#FFD600" strokeWidth="2.5" opacity="0.55" />
              <line x1="222" y1="172" x2="222" y2="187" stroke="#FFD600" strokeWidth="2.5" opacity="0.55" />
              <line x1="222" y1="257" x2="222" y2="272" stroke="#FFD600" strokeWidth="2.5" opacity="0.55" />
              <line x1="172" y1="222" x2="187" y2="222" stroke="#FFD600" strokeWidth="2.5" opacity="0.55" />
              <line x1="257" y1="222" x2="272" y2="222" stroke="#FFD600" strokeWidth="2.5" opacity="0.55" />
              <path d="M78 222 L110 150 L178 144 L222 222" fill="none" stroke="#f0f0f0" strokeWidth="5.5" strokeLinejoin="round" />
              <path d="M110 150 L132 82 L158 80" fill="none" stroke="#f0f0f0" strokeWidth="5.5" />
              <path d="M178 144 L158 80" fill="none" stroke="#f0f0f0" strokeWidth="5" />
              <path d="M178 144 L200 180 L222 222" fill="none" stroke="#888" strokeWidth="3" strokeDasharray="4,3" />
              <rect x="115" y="150" width="58" height="28" rx="5" fill="#FFD600" />
              <rect x="119" y="154" width="50" height="20" rx="3" fill="#111" />
              <rect x="122" y="157" width="12" height="14" rx="2" fill="#FFD600" opacity="0.3" />
              <rect x="136" y="157" width="12" height="14" rx="2" fill="#FFD600" opacity="0.5" />
              <rect x="150" y="157" width="12" height="14" rx="2" fill="#FFD600" opacity="0.8" />
              <path d="M132 82 L118 70 M132 82 L152 62" fill="none" stroke="#f0f0f0" strokeWidth="5" strokeLinecap="round" />
              <path d="M152 80 L185 78" fill="none" stroke="#FFD600" strokeWidth="6" strokeLinecap="round" />
              <path d="M110 150 L82 222" fill="none" stroke="#bbb" strokeWidth="5" />
              <circle cx="188" cy="182" r="7" fill="none" stroke="#FFD600" strokeWidth="2.5" />
              <ellipse cx="150" cy="70" rx="9" ry="5" fill="#FFD600" />
              <ellipse cx="150" cy="70" rx="5" ry="3" fill="#fff" opacity="0.7" />
              <circle cx="222" cy="222" r="15" fill="none" stroke="#FFD600" strokeWidth="2.5" opacity="0.6" />
            </svg>
            <div className={styles.bikeGlow} />
            <div className={styles.particle} style={{ top: "15%", left: "18%", animationDelay: "0.5s" }} />
            <div className={styles.particle} style={{ top: "50%", right: "10%", animationDelay: "1.3s", width: "3px", height: "3px" }} />
            <div className={styles.particle} style={{ top: "70%", left: "12%", animationDelay: "2s", width: "6px", height: "6px", opacity: "0.4" }} />
          </div>
          <div className="mt-2 text-center">
            <div className="font-bebas bg-gradient-to-br from-[var(--y)] to-[var(--y2)] bg-clip-text text-[1.8rem] tracking-[3px] text-transparent">GT PRO</div>
            <div className="mt-1 text-[0.85rem] uppercase tracking-[2px] text-[#9a9a9a]">Аренда от 650 ₽ / сутки</div>
          </div>
            </>
          )}
        </div>
      </div>

      <div className={styles.dots}>
        {[0, 1, 2].map((i) => (
          <button key={i} type="button" aria-label={`Слайд ${i + 1}`} className={`${styles.dot} ${i === current ? styles.dotOn : ""}`} onClick={() => goTo(i)} />
        ))}
      </div>
    </div>
  );
}

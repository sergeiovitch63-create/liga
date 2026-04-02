"use client";

import BatteryRentGrid from "./BatteryRentGrid";
import BatterySwapAndCharger from "./BatterySwapAndCharger";

export default function BatteryPageContent() {
  return (
    <div className="mx-auto max-w-[900px]">
      <p className="reveal mb-12 text-[0.95rem] leading-relaxed text-[var(--muted)]">
        Полные тарифы на дополнительные аккумуляторы, замену АКБ и аренду зарядного устройства. Залог на аккумулятор —{" "}
        <strong className="text-[var(--text)]">1 000 ₽</strong> (как на главной).
      </p>

      <div id="battery-rent" className="reveal mb-4 text-[0.7rem] font-bold uppercase tracking-[3px] text-[var(--muted)]">
        Дополнительный аккумулятор
      </div>
      <div className="reveal mb-14">
        <BatteryRentGrid layout="detail" asLinks={false} />
      </div>

      <BatterySwapAndCharger asLinks={false} />
    </div>
  );
}

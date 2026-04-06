import BatterySection from "../components/BatterySection";
import Hero from "../components/Hero";
import PartsGrid from "../components/PartsGrid";
import RepairSection from "../components/RepairSection";
import RentalSection from "../components/RentalSection";
import SiteChrome from "../components/SiteChrome";

export default function Page() {
  return (
    <SiteChrome>
      <Hero />
      <RentalSection />
      <BatterySection />
      <RepairSection />
      <PartsGrid />
      <footer className="border-t border-[var(--border)] bg-[var(--bg)] px-12 py-12 text-center">
        <div className="font-bebas mb-2 text-[2.5rem] tracking-[6px] text-[var(--y)]">⚡ ЛИГА СКОРОСТИ</div>
        <p className="text-[0.78rem] tracking-[1px] text-[var(--muted)]">Аренда электровелосипедов · Запчасти · Замена АКБ</p>
      </footer>
    </SiteChrome>
  );
}

import BackLink from "../../components/BackLink";
import BatteryPageContent from "../../components/BatteryPageContent";
import SiteChrome from "../../components/SiteChrome";

export const metadata = {
  title: "Аккумуляторы — Лига Скорости",
  description: "Тарифы на аренду и замену аккумуляторов"
};

export default function BatteryPage() {
  return (
    <SiteChrome>
      <main className="min-h-screen px-5 pb-24 pt-24 md:px-12">
        <div className="mx-auto max-w-[1160px]">
          <BackLink />
          <div className="reveal mb-3 text-[0.7rem] font-bold uppercase tracking-[4px] text-[var(--y)]">Аккумуляторы</div>
          <h1 className="reveal font-bebas mb-14 text-[clamp(2.8rem,6vw,5rem)] leading-none tracking-[3px]">ТАРИФЫ АКБ</h1>
          <BatteryPageContent />
        </div>
      </main>
    </SiteChrome>
  );
}

import BackLink from "../../components/BackLink";
import Link from "next/link";
import SiteChrome from "../../components/SiteChrome";
import { getRepairPath, repairDisclaimer, repairServices } from "../../data/repair";

export const metadata = {
  title: "Ремонт — Лига Скорости",
  description: "Прайс на ремонт и обслуживание электровелосипедов в Лиге Скорости."
};

export default function RepairPage() {
  return (
    <SiteChrome>
      <main className="min-h-screen px-5 pb-24 pt-24 md:px-12">
        <div className="mx-auto max-w-[1160px]">
          <BackLink />

          <div className="reveal mb-3 text-[0.7rem] font-bold uppercase tracking-[4px] text-[var(--y)]">Сервис</div>
          <h1 className="reveal font-bebas mb-6 text-[clamp(2.5rem,7vw,4.8rem)] leading-none tracking-[3px]">РЕМОНТ</h1>
          <p className="reveal mb-10 max-w-3xl text-[0.9rem] leading-relaxed text-[var(--muted)]">
            Прайс на ремонт и обслуживание электровелосипедов. Для удобства указаны наименование услуги, код (если есть)
            и ориентировочная стоимость.
          </p>

          <div className="overflow-hidden rounded-xl border border-[rgba(255,214,0,0.12)] bg-[var(--card)]">
            <div className="grid grid-cols-[1.5fr_0.6fr_0.6fr] border-b border-[rgba(255,214,0,0.12)] px-4 py-3 text-[0.68rem] font-bold uppercase tracking-[2px] text-[var(--muted)] md:px-6">
              <div>Наименование</div>
              <div>Код</div>
              <div>Стоимость</div>
            </div>

            <div className="divide-y divide-[rgba(255,255,255,0.05)]">
              {repairServices.map((item) => (
                <div
                  key={item.id}
                  className="grid grid-cols-1 gap-1 px-4 py-3 text-[0.84rem] leading-relaxed md:grid-cols-[1.5fr_0.6fr_0.6fr] md:gap-3 md:px-6"
                >
                  <div className="text-[var(--text)]">
                    <Link href={getRepairPath(item)} className="underline decoration-transparent underline-offset-2 transition hover:decoration-[rgba(255,214,0,0.7)] hover:text-[var(--y)]">
                      {item.name}
                    </Link>
                  </div>
                  <div className="font-mono text-[0.72rem] text-[rgba(255,214,0,0.85)]">{item.code ?? "—"}</div>
                  <div className="font-semibold text-[var(--y)]">{item.price}</div>
                </div>
              ))}
            </div>
          </div>

          <p className="mt-6 text-[0.78rem] leading-relaxed text-[var(--muted)]">{repairDisclaimer}</p>
        </div>
      </main>
    </SiteChrome>
  );
}

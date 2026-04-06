import { notFound } from "next/navigation";
import Link from "next/link";
import SiteChrome from "../../../components/SiteChrome";
import { findRepairBySlug, generateRepairStaticParams } from "../../../data/repair";

export function generateStaticParams() {
  return generateRepairStaticParams();
}

export function generateMetadata({ params }) {
  const service = findRepairBySlug(params.slug);
  return {
    title: service ? `${service.name} — Ремонт` : "Ремонт"
  };
}

export default function RepairServicePage({ params }) {
  const service = findRepairBySlug(params.slug);
  if (!service) notFound();

  return (
    <SiteChrome>
      <main className="min-h-screen px-5 pb-24 pt-24 md:px-12">
        <div className="mx-auto max-w-[900px]">
          <Link
            href="/remont"
            className="mb-10 inline-flex text-[0.78rem] font-semibold uppercase tracking-[2px] text-[var(--muted)] transition-colors hover:text-[var(--y)]"
          >
            ← Назад к прайсу ремонта
          </Link>

          <div className="mb-3 text-[0.7rem] font-bold uppercase tracking-[4px] text-[var(--y)]">Ремонт</div>
          <h1 className="font-bebas mb-6 text-[clamp(2rem,6vw,3.8rem)] leading-none tracking-[3px]">{service.name}</h1>

          <div className="grid gap-3 rounded-xl border border-[rgba(255,214,0,0.12)] bg-[var(--card)] p-5 md:grid-cols-3 md:gap-6 md:p-7">
            <div>
              <div className="mb-1 text-[0.68rem] font-bold uppercase tracking-[2px] text-[var(--muted)]">Код услуги</div>
              <div className="font-mono text-[0.95rem] text-[rgba(255,214,0,0.9)]">{service.code ?? "—"}</div>
            </div>
            <div>
              <div className="mb-1 text-[0.68rem] font-bold uppercase tracking-[2px] text-[var(--muted)]">Стоимость</div>
              <div className="font-bebas text-[2.2rem] leading-none text-[var(--y)]">{service.price}</div>
            </div>
            <div>
              <div className="mb-1 text-[0.68rem] font-bold uppercase tracking-[2px] text-[var(--muted)]">Категория</div>
              <div className="text-[0.95rem] text-[var(--text)]">Сервис электровелосипедов</div>
            </div>
          </div>

          <p className="mt-6 text-[0.88rem] leading-relaxed text-[var(--muted)]">
            Точная стоимость может меняться в зависимости от сложности работ и состояния узлов. Для уточнения деталей и сроков
            выполнения свяжитесь с нами через контакты на сайте.
          </p>
        </div>
      </main>
    </SiteChrome>
  );
}

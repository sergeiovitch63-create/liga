"use client";

import Link from "next/link";
import { getRepairPath, repairServices } from "../data/repair";

export default function RepairSection() {
  const topServices = repairServices.slice(0, 8);

  return (
    <section className="bg-[var(--bg)] px-5 py-[100px] md:px-12" id="repair">
      <div className="mx-auto max-w-[1160px]">
        <div className="reveal mb-3 text-[0.7rem] font-bold uppercase tracking-[4px] text-[var(--y)]">Сервис</div>
        <h2 className="reveal font-bebas mb-4 text-[clamp(2.8rem,6vw,5rem)] leading-none tracking-[3px]">РЕМОНТ</h2>
        <p className="reveal mb-10 max-w-3xl text-[0.9rem] leading-relaxed text-[var(--muted)]">
          Ремонт и обслуживание электровелосипедов. Ниже — популярные услуги, полный прайс доступен на отдельной странице.
        </p>

        <div className="mb-10 grid grid-cols-1 gap-[3px] md:grid-cols-2">
          {topServices.map((service) => (
            <Link
              key={service.id}
              href={getRepairPath(service)}
              className="group flex items-center justify-between gap-4 bg-[var(--card)] px-6 py-5 no-underline transition-[transform,background-color] duration-200 hover:-translate-y-1 hover:bg-[#171717]"
            >
              <div className="min-w-0">
                <div className="text-[0.9rem] text-[var(--text)]">{service.name}</div>
                <div className="mt-1 text-[0.68rem] font-mono text-[rgba(255,214,0,0.75)]">{service.code ?? "—"}</div>
              </div>
              <div className="font-bebas shrink-0 text-[2.1rem] leading-none text-[var(--y)]">{service.price}</div>
            </Link>
          ))}
        </div>

        <div className="reveal">
          <Link
            href="/remont"
            className="inline-block border border-[rgba(255,214,0,0.4)] px-8 py-3 text-[0.78rem] font-bold uppercase tracking-[2px] text-[var(--y)] no-underline [clip-path:polygon(0_0,calc(100%-12px)_0,100%_12px,100%_100%,12px_100%,0_calc(100%-12px))]"
          >
            Полный прайс ремонта
          </Link>
        </div>
      </div>
    </section>
  );
}

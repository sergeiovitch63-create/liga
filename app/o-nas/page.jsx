import BackLink from "../../components/BackLink";
import SiteChrome from "../../components/SiteChrome";
import { aboutParagraphs, aboutTags } from "../../data/about";

export const metadata = {
  title: "О компании — Лига Скорости",
  description:
    "Аренда и ремонт электровелосипедов в Калининграде. Услуги для курьеров, запчасти, сервис аккумуляторной техники."
};

export default function AboutPage() {
  return (
    <SiteChrome>
      <main className="min-h-screen px-5 pb-24 pt-24 md:px-12">
        <div className="mx-auto max-w-[720px]">
          <BackLink />
          <div className="reveal mb-3 text-[0.7rem] font-bold uppercase tracking-[4px] text-[var(--y)]">Лига скорости</div>
          <h1 className="reveal font-bebas mb-10 text-[clamp(2.8rem,8vw,4.5rem)] leading-none tracking-[4px]">О КОМПАНИИ</h1>

          <div className="space-y-6">
            {aboutParagraphs.map((text, i) => (
              <p key={i} className="reveal text-[0.95rem] leading-[1.85] text-[#c8c8c8]">
                {text}
              </p>
            ))}
          </div>

          <div className="reveal mt-14 border-t border-[rgba(255,214,0,0.12)] pt-10">
            <p className="mb-4 text-[0.65rem] font-bold uppercase tracking-[3px] text-[var(--muted)]">Темы и поиск</p>
            <div className="flex flex-wrap gap-2">
              {aboutTags.map((tag) => (
                <span
                  key={tag}
                  className="border border-[rgba(255,214,0,0.15)] bg-[rgba(255,214,0,0.05)] px-2.5 py-1 text-[0.65rem] tracking-wide text-[rgba(255,214,0,0.85)]"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </main>
    </SiteChrome>
  );
}

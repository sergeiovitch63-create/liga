import Link from "next/link";
import { contactChannels } from "../data/contacts";
import { ContactChannelIcon } from "./ContactChannelIcons";

const btnClass =
  "flex h-12 w-12 items-center justify-center rounded-lg border border-[rgba(255,214,0,0.22)] bg-[rgba(255,214,0,0.04)] text-[var(--text)] transition-[transform,background-color,border-color] duration-200 hover:-translate-y-0.5 hover:border-[rgba(255,214,0,0.45)] hover:bg-[rgba(255,214,0,0.1)] md:h-14 md:w-14";

export default function HeroContactBar() {
  return (
    <div className="flex w-full flex-col items-center gap-7">
      <div className="flex flex-wrap items-center justify-center gap-4 md:gap-5">
        {contactChannels.map((ch) => (
          <Link
            key={ch.id}
            href={ch.href}
            target={ch.external ? "_blank" : undefined}
            rel={ch.external ? "noopener noreferrer" : undefined}
            className={ch.id === "phone" ? `${btnClass} text-[var(--y)]` : btnClass}
            aria-label={ch.ariaLabel}
          >
            <ContactChannelIcon id={ch.id} />
          </Link>
        ))}
      </div>

      <div className="max-w-md px-2 text-center">
        <p className="text-[0.65rem] font-bold uppercase tracking-[4px] text-[var(--y)]">Контакты</p>
        <p className="mt-3 text-[0.88rem] leading-[1.7] text-[#b8b8b8]">
          <span className="font-semibold text-[var(--text)]">Офис:</span> Калининград, ул. Гаражная,&nbsp;2в (заезд с ул.&nbsp;Юношеская)
        </p>
        <p className="mt-2.5 text-[0.82rem] leading-relaxed text-[var(--muted)]">
          Работаем в будни с 9:00 до 19:00. Суббота и воскресенье — выходные.
        </p>
      </div>
    </div>
  );
}

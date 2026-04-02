"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const NAV_LINKS = [
  { href: "/#rental", label: "Аренда" },
  { href: "/battery", label: "Аккумуляторы" },
  { href: "/#parts", label: "Запчасти" },
  { href: "/o-nas", label: "О нас" },
];

function MenuIcon({ open }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden>
      {open ? (
        <path d="M18 6L6 18M6 6l12 12" />
      ) : (
        <>
          <path d="M4 7h16" />
          <path d="M4 12h16" />
          <path d="M4 17h16" />
        </>
      )}
    </svg>
  );
}

export default function NavBar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    const mq = window.matchMedia("(min-width: 768px)");
    const onMq = () => {
      if (mq.matches) setOpen(false);
    };
    mq.addEventListener("change", onMq);
    if (open) {
      document.addEventListener("keydown", onKey);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      mq.removeEventListener("change", onMq);
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <nav className="fixed left-0 right-0 top-0 z-[1000] border-b border-[var(--border)] bg-[rgba(8,8,8,0.92)] backdrop-blur-[20px]">
      <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-5 md:px-12">
        <Link
          href="/"
          className="flex min-w-0 items-center gap-2 font-bebas text-[1.35rem] tracking-[3px] text-[var(--y)] no-underline sm:text-[1.5rem] sm:gap-2.5"
          onClick={close}
        >
          <svg width="26" height="26" className="shrink-0 sm:h-7 sm:w-7" viewBox="0 0 32 32" fill="none" aria-hidden>
            <circle cx="16" cy="16" r="15" stroke="#FFD600" strokeWidth="1.5" />
            <path d="M20 4L10 17h8L12 28l14-16h-9L20 4z" fill="#FFD600" />
          </svg>
          <span className="truncate">ЛИГА СКОРОСТИ</span>
        </Link>

        <ul className="hidden list-none items-center gap-9 md:flex">
          {NAV_LINKS.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className="text-[0.78rem] font-semibold uppercase tracking-[2px] text-[var(--muted)] no-underline transition-colors hover:text-[var(--y)]"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="flex h-11 min-w-[44px] items-center justify-center rounded-lg border border-[rgba(255,214,0,0.25)] bg-[rgba(255,214,0,0.06)] text-[var(--text)] transition-colors hover:border-[rgba(255,214,0,0.45)] hover:bg-[rgba(255,214,0,0.1)] md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav-menu"
          aria-label={open ? "Закрыть меню" : "Открыть меню"}
          onClick={() => setOpen((v) => !v)}
        >
          <MenuIcon open={open} />
        </button>
      </div>

      {/* Ne monter le panneau qu’à l’ouverture : évite tout calque fixed invisible qui mange les taps (Safari / WebView). */}
      {open ? (
        <div
          id="mobile-nav-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Навигация по сайту"
          className="fixed inset-x-0 bottom-0 top-16 z-[1000] flex flex-col overflow-y-auto border-t border-[rgba(255,214,0,0.1)] bg-[rgba(5,5,5,0.97)] backdrop-blur-xl md:hidden"
        >
          <ul className="flex list-none flex-col px-2 pb-10 pt-2">
            {NAV_LINKS.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="block min-h-[48px] border-b border-[rgba(255,214,0,0.08)] px-4 py-3.5 text-[0.9rem] font-semibold uppercase tracking-[2px] text-[var(--text)] no-underline active:bg-[rgba(255,214,0,0.08)]"
                  onClick={close}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </nav>
  );
}

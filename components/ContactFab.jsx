"use client";

import { useEffect, useRef, useState } from "react";
import { contactChannels } from "../data/contacts";
import { ContactChannelIcon } from "./ContactChannelIcons";
import ContactFabAvatar from "./ContactFabAvatar";
import ContactFabBubble from "./ContactFabBubble";
import styles from "./ContactFab.module.css";

const choiceClass =
  "flex w-full items-center gap-3 rounded-2xl border border-[rgba(255,214,0,0.12)] bg-[rgba(255,255,255,0.04)] px-3 py-2.5 text-left no-underline transition-[background-color,border-color,transform] duration-200 hover:border-[rgba(255,214,0,0.35)] hover:bg-[rgba(255,214,0,0.08)] active:scale-[0.99]";

const iconBoxClass =
  "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[rgba(255,214,0,0.18)] bg-[rgba(255,214,0,0.06)] text-[var(--text)]";

export default function ContactFab() {
  const [open, setOpen] = useState(false);
  const rootRef = useRef(null);

  useEffect(() => {
    if (!open) return;
    const onDoc = (e) => {
      if (rootRef.current && !rootRef.current.contains(e.target)) setOpen(false);
    };
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDoc);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div ref={rootRef} className="fixed bottom-5 right-5 z-[950] flex max-w-[calc(100vw-2.5rem)] flex-col items-end gap-3 md:bottom-7 md:right-7">
      <div
        id="contact-fab-panel"
        role="region"
        aria-label="Чат поддержки"
        aria-hidden={!open}
        className={`${styles.chatPanel} flex max-h-[min(72vh,440px)] w-[min(100vw-2.5rem,300px)] flex-col gap-3 overflow-y-auto overflow-x-hidden rounded-[1.35rem] border border-[rgba(255,214,0,0.18)] bg-[#141414] p-3 backdrop-blur-md transition-all duration-200 md:w-[288px] ${
          open
            ? "visible pointer-events-auto translate-y-0 scale-100 opacity-100"
            : "invisible pointer-events-none translate-y-3 scale-95 opacity-0"
        }`}
      >
        <div className="flex items-center gap-2 border-b border-[rgba(255,214,0,0.1)] pb-2.5">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-full border border-[rgba(255,214,0,0.35)] bg-[var(--y)] shadow-[0_0_12px_rgba(255,214,0,0.25)]">
            <ContactFabAvatar className="h-8 w-8 scale-110" />
          </span>
          <div className="min-w-0 flex-1">
            <div className="text-[0.78rem] font-bold text-[var(--text)]">Лига скорости</div>
            <div className="flex items-center gap-1.5 text-[0.65rem] text-[var(--muted)]">
              <span className="inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-[#4ade80]" aria-hidden />
              Онлайн · ответим в рабочие часы
            </div>
          </div>
        </div>

        <div className={`${styles.botBubble} bg-[rgba(255,255,255,0.06)] px-3 py-2.5`}>
          <p className="text-[0.78rem] leading-snug text-[#e4e4e4]">
            Привет! Выберите, как с нами связаться — откроется нужный канал.
          </p>
        </div>

        <div className="flex flex-col gap-1.5" role="list">
          {contactChannels.map((ch) => {
            const inner = (
              <>
                <span className={ch.id === "phone" ? `${iconBoxClass} text-[var(--y)]` : iconBoxClass}>
                  <ContactChannelIcon id={ch.id} />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-[0.78rem] font-semibold text-[var(--text)]">{ch.label}</span>
                  <span className="mt-0.5 block text-[0.68rem] leading-snug text-[var(--muted)]">{ch.hint}</span>
                </span>
              </>
            );
            if (ch.external) {
              return (
                <a
                  key={ch.id}
                  href={ch.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={choiceClass}
                  role="listitem"
                  onClick={() => setOpen(false)}
                >
                  {inner}
                </a>
              );
            }
            return (
              <a key={ch.id} href={ch.href} className={choiceClass} role="listitem" onClick={() => setOpen(false)}>
                {inner}
              </a>
            );
          })}
        </div>
      </div>

      <button
        type="button"
        className={`flex flex-col items-center rounded-[1.75rem] border-0 bg-transparent p-0 ${styles.fabBounce} ${open ? styles.fabBouncePaused : ""} cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--y)] focus-visible:ring-offset-4 focus-visible:ring-offset-[#0a0a0a] hover:[&>span]:shadow-[0_8px_32px_rgba(255,214,0,0.45)]`}
        aria-expanded={open}
        aria-controls="contact-fab-panel"
        aria-label="Связаться с нами — открыть выбор канала"
        onClick={() => setOpen((v) => !v)}
      >
        <ContactFabBubble />
        <span className="relative z-0 flex h-[5.5rem] w-[5.5rem] shrink-0 items-center justify-center overflow-visible rounded-full border-2 border-[rgba(0,0,0,0.35)] bg-[var(--y)] shadow-[0_6px_28px_rgba(255,214,0,0.35),inset_0_1px_0_rgba(255,255,255,0.35)] transition-[box-shadow] duration-200 md:h-24 md:w-24">
          <ContactFabAvatar className="h-[4.35rem] w-[4.35rem] md:h-[5.1rem] md:w-[5.1rem]" />
        </span>
      </button>
    </div>
  );
}

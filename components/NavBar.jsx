import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="fixed left-0 right-0 top-0 z-[1000] flex h-16 items-center justify-between border-b border-[var(--border)] bg-[rgba(8,8,8,0.9)] px-5 backdrop-blur-[20px] md:px-12">
      <Link href="/" className="flex items-center gap-2.5 font-bebas text-[1.5rem] tracking-[3px] text-[var(--y)] no-underline">
        <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
          <circle cx="16" cy="16" r="15" stroke="#FFD600" strokeWidth="1.5" />
          <path d="M20 4L10 17h8L12 28l14-16h-9L20 4z" fill="#FFD600" />
        </svg>
        ЛИГА СКОРОСТИ
      </Link>
      <ul className="hidden list-none gap-9 md:flex">
        <li>
          <Link href="/#rental" className="text-[0.78rem] font-semibold uppercase tracking-[2px] text-[var(--muted)] no-underline hover:text-[var(--y)]">
            Аренда
          </Link>
        </li>
        <li>
          <Link href="/battery" className="text-[0.78rem] font-semibold uppercase tracking-[2px] text-[var(--muted)] no-underline hover:text-[var(--y)]">
            Аккумуляторы
          </Link>
        </li>
        <li>
          <Link href="/#parts" className="text-[0.78rem] font-semibold uppercase tracking-[2px] text-[var(--muted)] no-underline hover:text-[var(--y)]">
            Запчасти
          </Link>
        </li>
        <li>
          <Link href="/o-nas" className="text-[0.78rem] font-semibold uppercase tracking-[2px] text-[var(--muted)] no-underline hover:text-[var(--y)]">
            О нас
          </Link>
        </li>
      </ul>
    </nav>
  );
}

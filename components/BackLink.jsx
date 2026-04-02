import Link from "next/link";

export default function BackLink() {
  return (
    <Link
      href="/"
      className="mb-10 inline-flex text-[0.78rem] font-semibold uppercase tracking-[2px] text-[var(--muted)] transition-colors hover:text-[var(--y)]"
    >
      ← На главную
    </Link>
  );
}

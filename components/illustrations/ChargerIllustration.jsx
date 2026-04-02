/** Иллюстрация зарядного устройства (стиль сайта) */
export default function ChargerIllustration({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 200 100" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <ellipse cx="100" cy="92" rx="70" ry="8" fill="rgba(255,214,0,0.12)" />
      {/* вилка */}
      <path d="M22 38 L22 52 M30 38 L30 52 M26 34 L26 28" stroke="#FFD600" strokeWidth="3" strokeLinecap="round" />
      <rect x="18" y="52" width="16" height="22" rx="2" stroke="#FFD600" strokeWidth="2.5" fill="rgba(255,214,0,0.05)" />
      {/* кабель */}
      <path d="M34 63 Q60 63 70 58 L120 58" stroke="#FFD600" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      {/* блок */}
      <rect x="118" y="38" width="72" height="40" rx="6" stroke="#FFD600" strokeWidth="3" fill="rgba(8,8,8,0.6)" />
      <circle cx="132" cy="58" r="4" fill="#4ade80" opacity="0.9" />
      <line x1="144" y1="52" x2="172" y2="52" stroke="rgba(255,214,0,0.35)" strokeWidth="2" />
      <line x1="144" y1="60" x2="168" y2="60" stroke="rgba(255,214,0,0.25)" strokeWidth="2" />
      <path d="M190 58 L198 58 L198 72 L184 72 L184 58" stroke="#FFD600" strokeWidth="2.5" strokeLinejoin="round" fill="none" />
    </svg>
  );
}

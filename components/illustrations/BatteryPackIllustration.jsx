/** Иллюстрация АКБ в стиле неон/лайн-арт (как карусель) */
export default function BatteryPackIllustration({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <defs>
        <linearGradient id="bp-glow" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#FFD600" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#FFA500" stopOpacity="0.15" />
        </linearGradient>
      </defs>
      <ellipse cx="100" cy="108" rx="72" ry="10" fill="url(#bp-glow)" />
      <rect x="28" y="28" width="144" height="64" rx="8" stroke="#FFD600" strokeWidth="3" />
      <rect x="36" y="36" width="128" height="48" rx="4" fill="rgba(255,214,0,0.06)" stroke="rgba(255,214,0,0.25)" strokeWidth="1" />
      <line x1="52" y1="44" x2="52" y2="76" stroke="#FFD600" strokeWidth="2" opacity="0.5" />
      <line x1="76" y1="44" x2="76" y2="76" stroke="#FFD600" strokeWidth="2" opacity="0.65" />
      <line x1="100" y1="44" x2="100" y2="76" stroke="#FFD600" strokeWidth="2" opacity="0.8" />
      <line x1="124" y1="44" x2="124" y2="76" stroke="#FFD600" strokeWidth="2" opacity="0.65" />
      <line x1="148" y1="44" x2="148" y2="76" stroke="#FFD600" strokeWidth="2" opacity="0.5" />
      <rect x="88" y="18" width="24" height="14" rx="2" fill="#111" stroke="#FFD600" strokeWidth="2" />
      <path d="M100 18 L100 12" stroke="#FFD600" strokeWidth="2.5" strokeLinecap="round" />
      <text x="100" y="62" textAnchor="middle" fill="#FFD600" fontSize="11" fontFamily="monospace" fontWeight="bold" opacity="0.9">
        60V
      </text>
    </svg>
  );
}

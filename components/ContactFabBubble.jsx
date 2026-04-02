/** Облачко «Связаться с нами» с хвостом к круглой кнопке — снаружи жёлтого круга, часть одной кнопки. */
export default function ContactFabBubble() {
  return (
    <div className="relative z-[1] mb-1 max-w-[9.5rem] md:mb-1.5 md:max-w-[10.5rem]">
      <div className="relative rounded-2xl border border-black/10 bg-white px-2.5 py-2 shadow-[0_6px_20px_rgba(0,0,0,0.18)]">
        <p className="text-center text-[0.58rem] font-extrabold uppercase leading-tight tracking-wide text-neutral-900 md:text-[0.62rem]">
          <span className="block">Связаться</span>
          <span className="block">с нами</span>
        </p>
      </div>
      {/* Хвост к центру круга */}
      <svg
        className="absolute left-1/2 top-full -mt-px h-3 w-6 -translate-x-1/2 overflow-visible"
        viewBox="0 0 24 10"
        aria-hidden
      >
        <path d="M2 0 L12 10 L22 0" fill="#fff" stroke="rgba(0,0,0,0.1)" strokeWidth="0.75" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

/** Original hero illustration: a silk-wrapped needle inside an ornate ring with a distant citadel. */
export default function HeroArt() {
  return (
    <svg className="hero-art" viewBox="0 0 400 400" aria-hidden="true" focusable="false">
      <defs>
        <radialGradient id="hero-glow" cx="50%" cy="45%" r="55%">
          <stop offset="0" stopColor="#c4213a" stopOpacity="0.45" />
          <stop offset="0.6" stopColor="#5a0d18" stopOpacity="0.18" />
          <stop offset="1" stopColor="#0b0708" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="hero-needle" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#fff8ea" />
          <stop offset="1" stopColor="#bfa77d" />
        </linearGradient>
      </defs>

      <circle cx="200" cy="190" r="190" fill="url(#hero-glow)" />

      <g className="hero-art__ring" fill="none" stroke="#d9c8a6" strokeOpacity="0.55">
        <circle cx="200" cy="190" r="140" strokeWidth="1" />
        <circle cx="200" cy="190" r="128" strokeWidth="0.6" strokeDasharray="2 6" />
        {Array.from({ length: 12 }, (_, i) => {
          const a = (i * Math.PI) / 6;
          const x = 200 + Math.cos(a) * 140;
          const y = 190 + Math.sin(a) * 140;
          return <circle key={i} cx={x} cy={y} r="3" fill="#d9c8a6" stroke="none" />;
        })}
      </g>

      <g className="hero-art__citadel" fill="#1a0f12" stroke="#6b1b27" strokeWidth="1">
        <path d="M120 330 L120 270 L132 250 L144 270 L144 330 Z" />
        <path d="M150 330 L150 240 L166 205 L182 240 L182 330 Z" />
        <path d="M188 330 L188 200 L200 160 L212 200 L212 330 Z" />
        <path d="M218 330 L218 240 L234 205 L250 240 L250 330 Z" />
        <path d="M256 330 L256 270 L268 250 L280 270 L280 330 Z" />
        <rect x="110" y="328" width="180" height="6" />
      </g>

      <g className="hero-art__needle">
        <path d="M200 40 L208 230 L200 320 L192 230 Z" fill="url(#hero-needle)" />
        <ellipse cx="200" cy="72" rx="2.6" ry="9" fill="#0b0708" />
      </g>

      <g className="hero-art__thread" fill="none" stroke="#c4213a" strokeLinecap="round">
        <path d="M200 72 C 260 40, 320 120, 280 190 S 140 260, 110 200 S 160 90, 200 110" strokeWidth="2.4" />
        <path d="M110 200 C 90 260, 60 300, 30 340" strokeWidth="1.4" opacity="0.7" />
      </g>
    </svg>
  );
}

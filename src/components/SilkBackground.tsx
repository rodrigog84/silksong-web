import { useMemo, type CSSProperties } from 'react';

const THREADS = [
  { d: 'M-50 120 C 300 40, 700 260, 1500 90', dur: 18, delay: 0, w: 1.2 },
  { d: 'M-50 420 C 400 320, 900 560, 1500 380', dur: 24, delay: -6, w: 0.9 },
  { d: 'M-50 700 C 350 820, 1000 600, 1500 760', dur: 21, delay: -3, w: 1 },
  { d: 'M200 -50 C 120 300, 420 600, 260 950', dur: 27, delay: -9, w: 0.7 },
  { d: 'M1200 -50 C 1320 260, 1040 640, 1240 950', dur: 30, delay: -12, w: 0.7 },
];

/**
 * Fixed decorative layer behind all content: drifting silk threads and
 * rising ember/silk particles. Animations are disabled under
 * prefers-reduced-motion via CSS.
 */
export default function SilkBackground() {
  const particles = useMemo(
    () =>
      Array.from({ length: 28 }, (_, i) => ({
        id: i,
        left: (i * 37) % 100,
        size: 2 + ((i * 7) % 4),
        dur: 12 + ((i * 13) % 14),
        delay: -((i * 5) % 20),
        drift: ((i % 5) - 2) * 18,
        red: i % 3 === 0,
      })),
    [],
  );

  return (
    <div className="silk-bg" aria-hidden="true">
      <svg className="silk-bg__threads" viewBox="0 0 1440 900" preserveAspectRatio="none">
        {THREADS.map((t, i) => (
          <path
            key={i}
            d={t.d}
            className="silk-thread"
            strokeWidth={t.w}
            style={{ animationDuration: `${t.dur}s`, animationDelay: `${t.delay}s` }}
          />
        ))}
      </svg>
      {particles.map((p) => (
        <span
          key={p.id}
          className={`particle ${p.red ? 'particle--red' : ''}`}
          style={
            {
              left: `${p.left}%`,
              width: p.size,
              height: p.size,
              animationDuration: `${p.dur}s`,
              animationDelay: `${p.delay}s`,
              '--drift': `${p.drift}px`,
            } as CSSProperties
          }
        />
      ))}
      <div className="silk-bg__vignette" />
    </div>
  );
}

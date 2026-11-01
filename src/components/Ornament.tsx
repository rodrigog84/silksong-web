/** Decorative divider: a needle threaded with a crimson silk line. */
export default function Ornament({ className = '' }: { className?: string }) {
  return (
    <div className={`ornament ${className}`} aria-hidden="true">
      <svg viewBox="0 0 400 24" preserveAspectRatio="xMidYMid meet">
        <path
          d="M0 12 C 60 2, 100 22, 160 12"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          opacity="0.6"
        />
        <path
          d="M240 12 C 300 2, 340 22, 400 12"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          opacity="0.6"
        />
        <path d="M168 12 L200 9 L232 12 L200 15 Z" fill="#efe4cf" />
        <ellipse cx="174" cy="12" rx="2.6" ry="1" fill="#0b0708" />
        <path
          d="M160 12 C 170 4, 182 4, 174 12"
          fill="none"
          stroke="#c4213a"
          strokeWidth="1.4"
        />
        <circle cx="200" cy="12" r="1.6" fill="#c4213a" />
      </svg>
    </div>
  );
}

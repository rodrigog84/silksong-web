interface Props {
  className?: string;
}

/** Original needle-and-thread emblem used as the site's logo. */
export default function NeedleMark({ className }: Props) {
  return (
    <svg className={className} viewBox="0 0 64 64" aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id="needle-grad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#fff6e4" />
          <stop offset="1" stopColor="#c9b48f" />
        </linearGradient>
      </defs>
      <path d="M32 4 L35.5 40 L32 60 L28.5 40 Z" fill="url(#needle-grad)" />
      <ellipse cx="32" cy="13" rx="1.6" ry="3.4" fill="#0b0708" />
      <path
        d="M10 50 C 22 28, 42 58, 54 20"
        fill="none"
        stroke="#c4213a"
        strokeWidth="2.6"
        strokeLinecap="round"
      />
      <path
        d="M32 13 C 40 6, 50 10, 54 20"
        fill="none"
        stroke="#c4213a"
        strokeWidth="1.4"
        strokeLinecap="round"
        opacity="0.8"
      />
    </svg>
  );
}

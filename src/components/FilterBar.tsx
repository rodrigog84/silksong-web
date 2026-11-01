interface Option {
  value: string;
  label: string;
}

interface Props {
  query: string;
  onQuery: (q: string) => void;
  placeholder: string;
  options?: Option[];
  active?: string;
  onActive?: (v: string) => void;
  count: number;
  label: string;
}

export default function FilterBar({
  query,
  onQuery,
  placeholder,
  options,
  active,
  onActive,
  count,
  label,
}: Props) {
  return (
    <div className="filter-bar" role="search">
      <label className="filter-bar__search">
        <span className="sr-only">{label}</span>
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <circle cx="10.5" cy="10.5" r="6.5" fill="none" stroke="currentColor" strokeWidth="1.8" />
          <path d="M15.5 15.5 L21 21" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
        <input
          type="search"
          value={query}
          onChange={(e) => onQuery(e.target.value)}
          placeholder={placeholder}
        />
      </label>
      {options && onActive && (
        <div className="chips" role="group" aria-label="Filtrar por categoría">
          {options.map((o) => (
            <button
              key={o.value}
              className={`chip ${active === o.value ? 'chip--active' : ''}`}
              aria-pressed={active === o.value}
              onClick={() => onActive(o.value)}
            >
              {o.label}
            </button>
          ))}
        </div>
      )}
      <p className="filter-bar__count" aria-live="polite">
        {count === 1 ? '1 resultado' : `${count} resultados`}
      </p>
    </div>
  );
}

export function normalize(s: string) {
  return s
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
}

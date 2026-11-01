import { useMemo, useState } from 'react';
import PageHeader from '../components/PageHeader';
import FilterBar, { normalize } from '../components/FilterBar';
import { tipCategories, tips } from '../data/secrets';

export default function Secrets() {
  const [query, setQuery] = useState('');
  const [cat, setCat] = useState('todos');

  const filtered = useMemo(() => {
    const q = normalize(query);
    return tips.filter(
      (t) =>
        (cat === 'todos' || t.category === cat) && normalize(`${t.title} ${t.text}`).includes(q),
    );
  }, [query, cat]);

  const labelOf = (v: string) => tipCategories.find((c) => c.value === v)?.label ?? v;

  return (
    <div className="page">
      <PageHeader kicker="Trucos y secretos" title="Lo que Pharloom no te cuenta">
        <p>Consejos para principiantes, economía, exploración y algunos rincones ocultos.</p>
      </PageHeader>

      <FilterBar
        label="Buscar trucos"
        placeholder="Buscar un consejo…"
        query={query}
        onQuery={setQuery}
        options={tipCategories}
        active={cat}
        onActive={setCat}
        count={filtered.length}
      />

      <div className="card-grid">
        {filtered.map((t) => (
          <article key={t.title} className={`card ${t.category === 'secretos' ? 'card--secret' : ''}`}>
            <div className="card__meta">
              <span className="badge badge--muted">{labelOf(t.category)}</span>
            </div>
            <h2 className="card__title">{t.title}</h2>
            <p>{t.text}</p>
          </article>
        ))}
      </div>
      {filtered.length === 0 && <p className="empty">No hay resultados para esa búsqueda.</p>}
    </div>
  );
}

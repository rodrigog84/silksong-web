import { useMemo, useState } from 'react';
import PageHeader from '../components/PageHeader';
import Ornament from '../components/Ornament';
import FilterBar, { normalize } from '../components/FilterBar';
import { bossStrategies, generalStrategy } from '../data/strategies';

function Difficulty({ value }: { value: number }) {
  return (
    <span className="difficulty" aria-label={`Dificultad ${value} de 5`}>
      {Array.from({ length: 5 }, (_, i) => (
        <span key={i} className={`difficulty__pip ${i < value ? 'difficulty__pip--on' : ''}`} />
      ))}
    </span>
  );
}

export default function Strategies() {
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    const q = normalize(query);
    return bossStrategies.filter((b) =>
      normalize(`${b.boss} ${b.location} ${b.tips.join(' ')}`).includes(q),
    );
  }, [query]);

  return (
    <div className="page">
      <PageHeader kicker="Estrategias contra jefes" title="Danza con la aguja">
        <p>
          Principios generales y consejos por jefe. La dificultad indicada es orientativa y varía
          según tu configuración y estilo.
        </p>
      </PageHeader>

      <section className="section">
        <h2 className="section-title">Principios generales</h2>
        <Ornament />
        <div className="card-grid card-grid--compact">
          {generalStrategy.map((g, i) => (
            <article key={g.title} className="card">
              <span className="card__index" aria-hidden="true">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="card__title">{g.title}</h3>
              <p>{g.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Jefe por jefe</h2>
        <Ornament />
        <FilterBar
          label="Buscar jefes"
          placeholder="Buscar jefe o zona…"
          query={query}
          onQuery={setQuery}
          count={filtered.length}
        />
        <div className="accordion">
          {filtered.map((b, i) => (
            <details key={b.boss} className="accordion__item" open={i === 0 && !query}>
              <summary>
                <span className="accordion__title">{b.boss}</span>
                <span className="accordion__loc">{b.location}</span>
                <Difficulty value={b.difficulty} />
              </summary>
              <ul className="list list--check">
                {b.tips.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </details>
          ))}
        </div>
        {filtered.length === 0 && <p className="empty">No hay resultados para esa búsqueda.</p>}
      </section>
    </div>
  );
}

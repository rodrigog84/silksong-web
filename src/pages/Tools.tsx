import { useMemo, useState } from 'react';
import PageHeader from '../components/PageHeader';
import Ornament from '../components/Ornament';
import FilterBar, { normalize } from '../components/FilterBar';
import {
  ancestralArts,
  crests,
  items,
  silkSkills,
  toolColorInfo,
  tools,
  type ToolColor,
} from '../data/tools';

const OPTIONS = [
  { value: 'todos', label: 'Todas' },
  ...(Object.keys(toolColorInfo) as ToolColor[]).map((c) => ({
    value: c,
    label: toolColorInfo[c].label,
  })),
];

export default function Tools() {
  const [query, setQuery] = useState('');
  const [color, setColor] = useState('todos');

  const filtered = useMemo(() => {
    const q = normalize(query);
    return tools.filter(
      (t) =>
        (color === 'todos' || t.color === color) &&
        normalize(`${t.name} ${t.effect} ${t.howTo ?? ''}`).includes(q),
    );
  }, [query, color]);

  return (
    <div className="page">
      <PageHeader kicker="Herramientas, objetos y crestas" title="El arsenal de Hornet">
        <p>
          Las Crestas sustituyen a los amuletos del primer juego: cada una cambia los ataques de
          Hornet y ofrece espacios de color para Herramientas y Habilidades de Seda.
        </p>
      </PageHeader>

      <section className="section">
        <h2 className="section-title">Crestas</h2>
        <Ornament />
        <div className="card-grid">
          {crests.map((c) => (
            <article key={c.name} className="card card--crest">
              <h3 className="card__title">{c.name}</h3>
              <p className="card__subtitle">«{c.motto}»</p>
              <p>
                <strong>Espacios:</strong> {c.slots}
              </p>
              <p>
                <strong>Cómo conseguirla:</strong> {c.howTo}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Herramientas</h2>
        <Ornament />
        <div className="legend">
          {(Object.keys(toolColorInfo) as ToolColor[]).map((c) => (
            <p key={c} className={`legend__item legend__item--${c}`}>
              <span className={`dot dot--${c}`} aria-hidden="true" />
              <strong>{toolColorInfo[c].label}:</strong> {toolColorInfo[c].summary}
            </p>
          ))}
        </div>

        <FilterBar
          label="Buscar herramientas"
          placeholder="Buscar herramienta o efecto…"
          query={query}
          onQuery={setQuery}
          options={OPTIONS}
          active={color}
          onActive={setColor}
          count={filtered.length}
        />

        <div className="card-grid card-grid--compact">
          {filtered.map((t) => (
            <article key={t.name} className={`card card--tool card--tool-${t.color}`}>
              <div className="card__meta">
                <span className={`badge badge--${t.color}`}>{toolColorInfo[t.color].label}</span>
              </div>
              <h3 className="card__title">{t.name}</h3>
              <p>{t.effect}</p>
              {t.howTo && <p className="card__location">⌖ {t.howTo}</p>}
            </article>
          ))}
        </div>
        {filtered.length === 0 && <p className="empty">No hay resultados para esa búsqueda.</p>}
      </section>

      <section className="section split">
        <div>
          <h2 className="section-title section-title--left">Habilidades de Seda</h2>
          <p className="muted">Consumen Seda y se equipan en los espacios blancos de la cresta.</p>
          <ul className="list">
            {silkSkills.map((s) => (
              <li key={s.name}>
                <strong>{s.name}</strong> — {s.effect}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="section-title section-title--left">Artes Ancestrales</h2>
          <p className="muted">Habilidades de movimiento permanentes que abren nuevas rutas.</p>
          <ul className="list">
            {ancestralArts.map((s) => (
              <li key={s.name}>
                <strong>{s.name}</strong> — {s.effect}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Objetos y recursos</h2>
        <Ornament />
        <div className="table-wrap">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Objeto</th>
                <th scope="col">Para qué sirve</th>
              </tr>
            </thead>
            <tbody>
              {items.map((i) => (
                <tr key={i.name}>
                  <th scope="row">{i.name}</th>
                  <td>{i.effect}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

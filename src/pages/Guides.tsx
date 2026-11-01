import { useMemo, useState } from 'react';
import PageHeader from '../components/PageHeader';
import Ornament from '../components/Ornament';
import FilterBar, { normalize } from '../components/FilterBar';
import { abilityGates, areaGuides } from '../data/guides';

const OPTIONS = [
  { value: 'todos', label: 'Todos' },
  { value: 'Acto 1', label: 'Acto 1' },
  { value: 'Acto 2', label: 'Acto 2' },
  { value: 'Acto 3', label: 'Acto 3' },
];

export default function Guides() {
  const [query, setQuery] = useState('');
  const [act, setAct] = useState('todos');

  const filtered = useMemo(() => {
    const q = normalize(query);
    return areaGuides.filter(
      (g) =>
        (act === 'todos' || g.act === act) &&
        normalize(`${g.area} ${g.summary} ${g.goals.join(' ')}`).includes(q),
    );
  }, [query, act]);

  return (
    <div className="page">
      <PageHeader kicker="Guías" title="Ruta por zonas y progresión">
        <p>
          Una ruta recomendada para el Acto 1 y pistas generales para lo que sigue. Pharloom es
          abierto: puedes variar el orden, pero las habilidades de movimiento marcan el camino.
        </p>
      </PageHeader>

      <FilterBar
        label="Buscar zonas"
        placeholder="Buscar zona u objetivo…"
        query={query}
        onQuery={setQuery}
        options={OPTIONS}
        active={act}
        onActive={setAct}
        count={filtered.length}
      />

      <ol className="route">
        {filtered.map((g) => (
          <li key={g.area} className={`route__step ${g.optional ? 'route__step--optional' : ''}`}>
            <span className="route__num" aria-hidden="true">
              {g.optional ? '◇' : g.step}
            </span>
            <div className="route__body">
              <div className="card__meta">
                <span className="badge badge--muted">{g.act}</span>
                {g.optional && <span className="badge badge--jefe">Opcional</span>}
              </div>
              <h2 className="route__title">{g.area}</h2>
              <p>{g.summary}</p>
              <ul className="list list--check">
                {g.goals.map((goal) => (
                  <li key={goal}>{goal}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
      {filtered.length === 0 && <p className="empty">No hay resultados para esa búsqueda.</p>}

      <section className="section">
        <h2 className="section-title">Habilidades que abren caminos</h2>
        <Ornament />
        <p className="center muted">
          Si una zona parece imposible, seguramente te falta alguna de estas habilidades.
        </p>
        <div className="table-wrap">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Habilidad</th>
                <th scope="col">Dónde</th>
                <th scope="col">Qué permite</th>
              </tr>
            </thead>
            <tbody>
              {abilityGates.map((a) => (
                <tr key={a.name}>
                  <th scope="row">{a.name}</th>
                  <td>{a.where}</td>
                  <td>{a.unlocks}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

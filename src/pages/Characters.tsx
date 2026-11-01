import { useMemo, useState } from 'react';
import PageHeader from '../components/PageHeader';
import FilterBar, { normalize } from '../components/FilterBar';
import { characters, type CharacterKind } from '../data/characters';

const OPTIONS: { value: CharacterKind | 'todos'; label: string }[] = [
  { value: 'todos', label: 'Todos' },
  { value: 'protagonista', label: 'Protagonista' },
  { value: 'personaje', label: 'Personajes' },
  { value: 'jefe', label: 'Jefes' },
];

const KIND_LABEL: Record<CharacterKind, string> = {
  protagonista: 'Protagonista',
  personaje: 'Personaje',
  jefe: 'Jefe',
};

export default function Characters() {
  const [query, setQuery] = useState('');
  const [kind, setKind] = useState<string>('todos');

  const filtered = useMemo(() => {
    const q = normalize(query);
    return characters.filter(
      (c) =>
        (kind === 'todos' || c.kind === kind) &&
        normalize(`${c.name} ${c.role} ${c.location ?? ''} ${c.description}`).includes(q),
    );
  }, [query, kind]);

  return (
    <div className="page">
      <PageHeader kicker="Personajes y jefes" title="Habitantes de Pharloom">
        <p>
          Aliados, comerciantes y algunos de los jefes que encontrarás. No es una lista exhaustiva:
          el juego tiene más de cuarenta jefes.
        </p>
      </PageHeader>

      <FilterBar
        label="Buscar personajes o jefes"
        placeholder="Buscar por nombre, zona…"
        query={query}
        onQuery={setQuery}
        options={OPTIONS}
        active={kind}
        onActive={setKind}
        count={filtered.length}
      />

      <div className="card-grid">
        {filtered.map((c) => (
          <article key={c.name} className={`card card--${c.kind}`}>
            <div className="card__meta">
              <span className={`badge badge--${c.kind}`}>{KIND_LABEL[c.kind]}</span>
              {c.act && <span className="badge badge--muted">{c.act}</span>}
              {c.optional && <span className="badge badge--muted">Opcional</span>}
            </div>
            <h2 className="card__title">{c.name}</h2>
            <p className="card__subtitle">{c.role}</p>
            {c.location && (
              <p className="card__location">
                <span aria-hidden="true">⌖ </span>
                {c.location}
              </p>
            )}
            <p>{c.description}</p>
          </article>
        ))}
      </div>
      {filtered.length === 0 && <p className="empty">No hay resultados para esa búsqueda.</p>}
    </div>
  );
}

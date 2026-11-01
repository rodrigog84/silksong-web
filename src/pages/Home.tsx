import { Link } from 'react-router-dom';
import HeroArt from '../components/HeroArt';
import Ornament from '../components/Ornament';
import { NAV_LINKS } from '../config';

const FACTS = [
  { label: 'Lanzamiento', value: '4 de septiembre de 2025' },
  { label: 'Desarrollador', value: 'Team Cherry' },
  { label: 'Protagonista', value: 'Hornet' },
  { label: 'Género', value: 'Metroidvania de acción y plataformas' },
];

const SECTION_BLURBS: Record<string, string> = {
  '/historia': 'Pharloom, la Ciudadela, Grand Mother Silk y las facciones del reino.',
  '/personajes': 'Aliados, comerciantes y los jefes que bloquean tu ascenso.',
  '/herramientas': 'Crestas, herramientas rojas, azules y amarillas, habilidades y objetos.',
  '/guias': 'Ruta recomendada por zonas y habilidades clave de progresión.',
  '/secretos': 'Consejos prácticos, economía y rincones ocultos.',
  '/estrategias': 'Cómo afrontar a los jefes principales sin desesperar.',
};

export default function Home() {
  const sections = NAV_LINKS.filter((l) => l.to !== '/');

  return (
    <>
      <section className="hero">
        <div className="hero__text">
          <p className="kicker">Guía en español · Hollow Knight</p>
          <h1 className="hero__title">
            <span>Silksong</span>
            <small>Un reino de seda y canto</small>
          </h1>
          <p className="hero__lead">
            Capturada y llevada a una tierra desconocida, Hornet debe ascender por Pharloom hasta
            la Ciudadela en su cima. Descubre su historia, sus habitantes, sus herramientas y cómo
            sobrevivir a su peregrinaje mortal.
          </p>
          <div className="hero__actions">
            <Link className="btn btn--primary" to="/guias">
              Empezar la guía
            </Link>
            <Link className="btn btn--ghost" to="/historia">
              Conocer la historia
            </Link>
          </div>
        </div>
        <HeroArt />
      </section>

      <section className="section" aria-labelledby="datos">
        <h2 id="datos" className="sr-only">
          Datos del juego
        </h2>
        <dl className="facts">
          {FACTS.map((f) => (
            <div key={f.label} className="fact">
              <dt>{f.label}</dt>
              <dd>{f.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="section prose" aria-labelledby="que-es">
        <h2 id="que-es" className="section-title">
          ¿Qué es Silksong?
        </h2>
        <Ornament />
        <p>
          <em>Hollow Knight: Silksong</em> es la secuela de <em>Hollow Knight</em>. Esta vez
          controlamos a Hornet, una cazadora ágil que combate con aguja e hilo. El juego salió para
          PC (Windows, macOS y Linux), Nintendo Switch, Nintendo Switch 2, PlayStation 4 y 5, y
          Xbox One y Series X|S.
        </p>
        <p>
          Como todo metroidvania, el mundo está interconectado: hay zonas inaccesibles hasta que
          obtienes nuevas habilidades. Los enemigos sueltan <strong>Rosarios</strong> y{' '}
          <strong>Fragmentos de Concha</strong>; atacar llena tu reserva de <strong>Seda</strong>,
          que usas para curarte o para lanzar habilidades. En lugar de los amuletos del primer
          juego, Hornet equipa <strong>Crestas</strong> con espacios para <strong>Herramientas</strong>.
        </p>
      </section>

      <section className="section" aria-labelledby="explora">
        <h2 id="explora" className="section-title">
          Explora la guía
        </h2>
        <Ornament />
        <div className="card-grid">
          {sections.map((s, i) => (
            <Link key={s.to} to={s.to} className="card card--link">
              <span className="card__index" aria-hidden="true">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="card__title">{s.label}</h3>
              <p>{SECTION_BLURBS[s.to]}</p>
              <span className="card__cta" aria-hidden="true">
                Leer más →
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="section">
        <blockquote className="quote">
          <p>
            «Nuestro reino está atrapado por una maldición. Sus caminos se vuelven salvajes y
            peligrosos, y aunque algunos aún intentan subir a la Ciudadela en su cima, ninguno
            regresa para contar lo que ve.»
          </p>
          <footer>— Una doncella de la capilla, en Pharloom</footer>
        </blockquote>
      </section>
    </>
  );
}

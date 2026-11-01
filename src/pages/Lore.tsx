import PageHeader from '../components/PageHeader';
import Ornament from '../components/Ornament';

const FACTIONS = [
  {
    name: 'Las Weavers (Tejedoras)',
    text: 'Según el lore, Grand Mother Silk transformó a los Pharlids en Weavers y les dijo que eran sus hijas divinas. Con el tiempo la adormecieron y gobernaron Pharloom, para luego abandonar el reino. Hornet desciende de ellas.',
  },
  {
    name: 'Los Conductores (Conductors)',
    text: 'Casta alta encargada de gobernar la Ciudadela. Fueron de los pocos que conocían su verdadero propósito.',
  },
  {
    name: 'Los Arquitectos (Architects)',
    text: 'Creadores de la maquinaria y los autómatas de Pharloom; sostienen sus muros, suelos y «voz».',
  },
  {
    name: 'Los Guardianes (Keepers)',
    text: 'Pronuncian sermones, dirigen las oraciones y custodian la historia y los secretos del reino.',
  },
  {
    name: 'Los peregrinos',
    text: 'Insectos comunes que sienten la llamada de la Ciudadela y emprenden un ascenso durísimo, sometidos a reglas estrictas como no portar armas.',
  },
  {
    name: 'Tribus independientes',
    text: 'Grupos como los Skarr, la Orden de Karak, los Verdanians, los Craws o la tribu Splinter viven al margen de la Ciudadela, y algunos se le resistieron.',
  },
];

export default function Lore() {
  return (
    <div className="page">
      <PageHeader kicker="Historia y lore" title="Un reino de seda y canto">
        <p>
          Un resumen sin entrar en spoilers del final. Los nombres propios se mantienen en inglés
          para que coincidan con la mayoría de guías y comunidades.
        </p>
      </PageHeader>

      <section className="section prose">
        <h2 className="section-title section-title--left">Hornet, la cazadora</h2>
        <p>
          Hornet fue la protectora de Hallownest en el primer juego. Su linaje —mitad Weaver,
          mitad Wyrm— la convierte en objetivo: los enviados de la Ciudadela la capturan y la llevan
          enjaulada hacia Pharloom. A las puertas del reino, su jaula se rompe y Hornet cae en
          Moss Grotto. Desde ahí comienza un peregrinaje hacia la cima para averiguar por qué fue
          secuestrada.
        </p>
      </section>

      <section className="section prose">
        <h2 className="section-title section-title--left">Pharloom</h2>
        <p>
          Pharloom es una vasta red de cuevas y túneles en medio de un páramo, habitada por insectos
          conscientes y salvajes. Sus paisajes van desde el exuberante Moss Grotto hasta el gélido
          Mount Fay, y su entrada principal es Blasted Steps. Es un reino dedicado a la fe y a la
          peregrinación… y está atrapado por una maldición.
        </p>
      </section>

      <section className="section prose">
        <h2 className="section-title section-title--left">La Ciudadela</h2>
        <p>
          En la cima del reino se alza la Ciudadela, una ciudad opulenta de metal, piedra y oro que
          es a la vez iglesia y jaula. Sus cantos y oraciones mantienen dormida a{' '}
          <strong>Grand Mother Silk</strong>, aunque casi ninguno de sus habitantes conocía ese
          propósito. Abarca zonas como Choral Chambers, Cogwork Core, Grand Gate, High Halls,
          Memorium, Whispering Vaults y Whiteward, y es el escenario principal del Acto 2.
        </p>
      </section>

      <section className="section prose">
        <h2 className="section-title section-title--left">Grand Mother Silk y la Posesión</h2>
        <p>
          Grand Mother Silk es un ser superior y la fuente primordial de la Seda. Sus hilos se
          extienden por Pharloom. Ahora está despertando, y su influencia —la Posesión, o{' '}
          <em>the Haunting</em>— se apodera de los insectos y los arrastra a la locura. La llegada de
          Hornet acelera ese despertar.
        </p>
      </section>

      <section className="section">
        <h2 className="section-title">Facciones clave</h2>
        <Ornament />
        <div className="card-grid">
          {FACTIONS.map((f) => (
            <article key={f.name} className="card">
              <h3 className="card__title">{f.name}</h3>
              <p>{f.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Estructura en actos</h2>
        <Ornament />
        <ol className="timeline">
          <li>
            <h3>Acto 1 · Pharloom exterior</h3>
            <p>Ascenso desde Moss Grotto hasta el Gran Portón haciendo sonar cinco Bellshrines.</p>
          </li>
          <li>
            <h3>Acto 2 · La Ciudadela</h3>
            <p>Exploración de la ciudad dorada y el camino hacia The Cradle.</p>
          </li>
          <li>
            <h3>Acto 3 · Más allá</h3>
            <p>Contenido adicional para quienes siguen tirando del hilo. ¡Descúbrelo tú!</p>
          </li>
        </ol>
      </section>
    </div>
  );
}

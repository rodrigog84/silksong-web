import { Link } from 'react-router-dom';
import { NAV_LINKS, WHATSAPP_DISPLAY, WHATSAPP_URL } from '../config';
import NeedleMark from './NeedleMark';
import Ornament from './Ornament';

export default function Footer() {
  return (
    <footer className="footer">
      <Ornament />
      <div className="footer__grid">
        <div>
          <div className="brand brand--footer">
            <NeedleMark className="brand__mark" />
            <span className="brand__text">
              <span className="brand__title">Silksong</span>
              <span className="brand__sub">Crónicas de Pharloom</span>
            </span>
          </div>
          <p className="footer__note">
            Sitio informativo hecho por fans, sin afiliación con Team Cherry. Hollow Knight: Silksong
            y sus personajes son propiedad de Team Cherry. Todo el arte de este sitio es original.
          </p>
        </div>

        <nav aria-label="Enlaces del pie de página">
          <h2 className="footer__heading">Secciones</h2>
          <ul className="footer__links">
            {NAV_LINKS.map((l) => (
              <li key={l.to}>
                <Link to={l.to}>{l.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="footer__heading">Contacto</h2>
          <p className="footer__note">
            ¿Tienes una consulta, una corrección o una sugerencia sobre la página? Escríbenos por
            WhatsApp.
          </p>
          <a
            className="btn btn--ghost"
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp {WHATSAPP_DISPLAY}
          </a>
        </div>
      </div>
      <p className="footer__copy">
        © {new Date().getFullYear()} Crónicas de Pharloom · Contenido en español con fines
        informativos.
      </p>
    </footer>
  );
}

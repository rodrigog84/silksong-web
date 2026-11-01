import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { NAV_LINKS } from '../config';
import NeedleMark from './NeedleMark';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <header className="navbar">
      <div className="navbar__inner">
        <Link to="/" className="brand" aria-label="Crónicas de Pharloom, ir al inicio">
          <NeedleMark className="brand__mark" />
          <span className="brand__text">
            <span className="brand__title">Silksong</span>
            <span className="brand__sub">Crónicas de Pharloom</span>
          </span>
        </Link>

        <button
          className="navbar__toggle"
          aria-expanded={open}
          aria-controls="menu-principal"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">{open ? 'Cerrar menú' : 'Abrir menú'}</span>
          <span className={`burger ${open ? 'burger--open' : ''}`} aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
        </button>

        <nav
          id="menu-principal"
          className={`navbar__links ${open ? 'navbar__links--open' : ''}`}
          aria-label="Navegación principal"
        >
          {NAV_LINKS.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === '/'}
              className={({ isActive }) => `navlink ${isActive ? 'navlink--active' : ''}`}
            >
              <span className="navlink__short">{l.short}</span>
              <span className="navlink__full">{l.label}</span>
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}

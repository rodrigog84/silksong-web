import { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import SilkBackground from './components/SilkBackground';
import Home from './pages/Home';
import Lore from './pages/Lore';
import Characters from './pages/Characters';
import Tools from './pages/Tools';
import Guides from './pages/Guides';
import Secrets from './pages/Secrets';
import Strategies from './pages/Strategies';
import NotFound from './pages/NotFound';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <>
      <a className="skip-link" href="#contenido">
        Saltar al contenido
      </a>
      <SilkBackground />
      <ScrollToTop />
      <Navbar />
      <main id="contenido" tabIndex={-1}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/historia" element={<Lore />} />
          <Route path="/personajes" element={<Characters />} />
          <Route path="/herramientas" element={<Tools />} />
          <Route path="/guias" element={<Guides />} />
          <Route path="/secretos" element={<Secrets />} />
          <Route path="/estrategias" element={<Strategies />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}

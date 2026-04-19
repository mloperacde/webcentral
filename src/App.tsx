// Source of Truth sync: .antigravity/webcentral
import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Sectores } from './components/Sectores';
import { CoPacker } from './components/CoPacker';
import { Productos } from './components/Productos';
import { Instalaciones } from './components/Instalaciones';
import { Calidad } from './components/Calidad';
import { Contacto } from './components/Contacto';
import { Footer } from './components/Footer';
import { Nosotros } from './components/Nosotros';
import { SectoresPage } from './pages/SectoresPage';
import { NosotrosPage } from './pages/NosotrosPage';
import { ProductosPage } from './pages/ProductosPage';
import { CalidadPage } from './pages/CalidadPage';
import { InstalacionesPage } from './pages/InstalacionesPage';
import { CookiesPage } from './pages/CookiesPage';
import { AvisoLegalPage } from './pages/AvisoLegalPage';
import { CanalEticoPage } from './pages/CanalEticoPage';
import { PoliticaPrivacidadPage } from './pages/PoliticaPrivacidadPage';
import { PoliticaGestionPage } from './pages/PoliticaGestionPage';
import { PoliticaSistemaInformacionPage } from './pages/PoliticaSistemaInformacionPage';
import { CookieBanner } from './components/CookieBanner';
import ScrollToTop from './components/ScrollToTop';
import { SmoothScroll } from './components/SmoothScroll';

const Home = () => {
  return (
    <main>
      <Hero />
      <Nosotros />
      <Sectores />
      <CoPacker />
      <div className="h-48 lg:h-64" />
      <Productos />
      <div className="h-48 lg:h-64" />
      <Calidad />
      <Instalaciones />
      <Contacto />
    </main>
  );
};

const AppContent = () => {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-accent/30">
      <SmoothScroll />
      <ScrollToTop />
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sectores" element={<SectoresPage />} />
        <Route path="/nosotros" element={<NosotrosPage />} />
        <Route path="/productos" element={<ProductosPage />} />
        <Route path="/calidad" element={<CalidadPage />} />
        <Route path="/instalaciones" element={<InstalacionesPage />} />
        <Route path="/cookies" element={<CookiesPage />} />
        <Route path="/aviso-legal" element={<AvisoLegalPage />} />
        <Route path="/canal-etico" element={<CanalEticoPage />} />
        <Route path="/politica-privacidad" element={<PoliticaPrivacidadPage />} />
        <Route path="/politica-gestion" element={<PoliticaGestionPage />} />
        <Route path="/politica-sistema-informacion" element={<PoliticaSistemaInformacionPage />} />
      </Routes>
      <Footer />
      <CookieBanner />
    </div>
  );
};

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}

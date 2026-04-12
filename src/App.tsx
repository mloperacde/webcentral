import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
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
      <Instalaciones />
      <Calidad />
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
      </Routes>
      <Footer />
    </div>
  );
};

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
      <Analytics />
    </LanguageProvider>
  );
}

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
import { SectoresPage } from './pages/SectoresPage';
import ScrollToTop from './components/ScrollToTop';

const Home = () => {
  return (
    <main>
      <Hero />
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
      <ScrollToTop />
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sectores" element={<SectoresPage />} />
      </Routes>
      <Footer />
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

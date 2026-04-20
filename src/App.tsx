// Source of Truth sync: .antigravity/webcentral
import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
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
import { CookieBanner } from './components/CookieBanner';
import { PageMeta } from './components/PageMeta';
import { PageLoader } from './components/PageLoader';
import ScrollToTop from './components/ScrollToTop';
import { SmoothScroll } from './components/SmoothScroll';

const SectoresPage = lazy(() => import('./pages/SectoresPage').then(m => ({ default: m.SectoresPage })));
const NosotrosPage = lazy(() => import('./pages/NosotrosPage').then(m => ({ default: m.NosotrosPage })));
const ProductosPage = lazy(() => import('./pages/ProductosPage').then(m => ({ default: m.ProductosPage })));
const CalidadPage = lazy(() => import('./pages/CalidadPage').then(m => ({ default: m.CalidadPage })));
const InstalacionesPage = lazy(() => import('./pages/InstalacionesPage').then(m => ({ default: m.InstalacionesPage })));
const CookiesPage = lazy(() => import('./pages/CookiesPage').then(m => ({ default: m.CookiesPage })));
const AvisoLegalPage = lazy(() => import('./pages/AvisoLegalPage').then(m => ({ default: m.AvisoLegalPage })));
const CanalEticoPage = lazy(() => import('./pages/CanalEticoPage').then(m => ({ default: m.CanalEticoPage })));
const PoliticaPrivacidadPage = lazy(() => import('./pages/PoliticaPrivacidadPage').then(m => ({ default: m.PoliticaPrivacidadPage })));
const PoliticaGestionPage = lazy(() => import('./pages/PoliticaGestionPage').then(m => ({ default: m.PoliticaGestionPage })));
const PoliticaSistemaInformacionPage = lazy(() => import('./pages/PoliticaSistemaInformacionPage').then(m => ({ default: m.PoliticaSistemaInformacionPage })));
const ContactoPage = lazy(() => import('./pages/ContactoPage').then(m => ({ default: m.ContactoPage })));

const Home = () => {
  return (
    <>
      <PageMeta title="Central Envasados | Co-Packing de Alta Precisión" description="Líder europeo en Co-Packing de alta precisión para cosmética, alimentación y productos sanitarios. Más de 35 años de experiencia." />
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
    </>
  );
};

const AppContent = () => {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-accent/30">
      <SmoothScroll />
      <ScrollToTop />
      <Navigation />
      <Suspense fallback={<PageLoader />}>
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
          <Route path="/contacto" element={<ContactoPage />} />
        </Routes>
      </Suspense>
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

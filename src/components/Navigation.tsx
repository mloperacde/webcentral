import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Globe } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { getLenis } from '../lib/lenis';

export const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);
  const { t, language, toggleLanguage } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const location = useLocation();
  const isHome = location.pathname === '/';

  const navLinks = [
    { key: 'nav.inicio', href: isHome ? '#hero' : '/#hero', type: 'anchor' },
    { key: 'nav.nosotros', href: '/nosotros', type: 'link' },
    { key: 'nav.sectores', href: '/sectores', type: 'link' },
    { key: 'nav.productos', href: '/productos', type: 'link' },
    { key: 'nav.calidad', href: '/calidad', type: 'link' },
    { key: 'nav.instalaciones', href: '/instalaciones', type: 'link' },
    { key: 'nav.contacto', href: '/contacto', type: 'link' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const lenis = getLenis();
      if (lenis) {
        lenis.scrollTo(element as HTMLElement);
      } else {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Floating Logo (Home only, before scroll) */}
      {isHome && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: scrolled ? 0 : 1, y: scrolled ? -20 : 0, pointerEvents: scrolled ? 'none' : 'auto' }}
          transition={{ duration: 0.4 }}
          className="fixed top-4 left-4 sm:top-6 sm:left-8 lg:left-20 z-50 print:hidden"
        >
          <Link to="/" className="block">
            {!logoError ? (
              <img
                src="/logo.webp"
                alt="Central de Envasados"
                className="h-16 sm:h-20 md:h-24 lg:h-32 xl:h-40 w-auto mix-blend-screen"
                onError={() => setLogoError(true)}
                referrerPolicy="no-referrer"
              />
            ) : (
              <span className="text-white font-light tracking-[0.4em] text-base sm:text-lg md:text-xl lg:text-2xl uppercase">Central de Envasados</span>
            )}
          </Link>
        </motion.div>
      )}

      {/* Main Header */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        className={`fixed top-0 left-0 right-0 z-40 w-full transition-all duration-700 ease-in-out print:hidden ${
          scrolled
            ? 'bg-black/40 backdrop-blur-xl border-b border-white/5 py-0'
            : 'bg-transparent border-b border-transparent py-6'
        }`}
      >
        <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex items-center justify-between h-20 sm:h-24 transition-all duration-700">
            {/* Logo Left */}
            <div className="w-48 sm:w-64 flex-shrink-0">
              <Link
                to="/"
                className={`group inline-block transition-opacity duration-500 ${!scrolled && isHome ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
              >
                {!logoError ? (
                  <div className="flex flex-col items-center">
                    <img
                      src="/logo.webp"
                      alt="Central de Envasados"
                      className="h-12 sm:h-14 md:h-16 w-auto transition-all duration-500 mix-blend-screen group-hover:scale-105"
                      onError={() => setLogoError(true)}
                      referrerPolicy="no-referrer"
                    />
                  </div>
                ) : (
                  <span className="text-white font-light tracking-widest uppercase text-sm sm:text-base group-hover:text-accent transition-colors">Central de Envasados</span>
                )}
              </Link>
            </div>

            {/* Desktop Navigation (Centered) */}
            <nav className="hidden xl:flex items-center justify-center flex-1 gap-1 px-4">
              {navLinks.map((link) => (
                <div key={link.key} className="relative group px-1">
                  {link.type === 'anchor' && isHome ? (
                    <a
                      href={link.href}
                      onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                      className="px-3 py-2 text-[11px] font-bold text-white/60 hover:text-white tracking-[0.2em] uppercase transition-all duration-300 relative whitespace-nowrap"
                    >
                      {t(link.key)}
                      <span className="absolute bottom-0 left-3 right-3 h-px bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                    </a>
                  ) : (
                    <Link
                      to={link.href}
                      className="px-3 py-2 text-[11px] font-bold text-white/60 hover:text-white tracking-[0.2em] uppercase transition-all duration-300 relative whitespace-nowrap"
                    >
                      {t(link.key)}
                      <span className="absolute bottom-0 left-3 right-3 h-px bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            {/* Language Right */}
            <div className="w-48 sm:w-64 flex justify-end items-center flex-shrink-0">
              <div className="hidden xl:block">
                <button
                  onClick={toggleLanguage}
                  className="flex items-center gap-2 px-3 py-1.5 text-[11px] font-bold text-white/60 hover:text-white tracking-[0.2em] uppercase transition-all duration-300 group"
                  aria-label={language === 'es' ? 'Cambiar a inglés' : 'Switch to Spanish'}
                >
                  <Globe className="w-4 h-4 text-accent/70 group-hover:text-accent group-hover:rotate-180 transition-all duration-700" />
                  <span>{language === 'es' ? 'EN' : 'ES'}</span>
                </button>
              </div>

              {/* Language & Mobile Menu Toggle */}
              <div className="flex xl:hidden items-center gap-2 sm:gap-4">
                  <motion.button
                  onClick={toggleLanguage}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-1 sm:gap-2 text-white/70 hover:text-white transition-colors duration-300"
                  aria-label={language === 'es' ? 'Cambiar idioma' : 'Change language'}
                >
                  <Globe className="w-5 h-5" />
                  <span className="text-[12px] sm:text-[14px] tracking-widest uppercase font-bold">{language === 'es' ? 'en' : 'es'}</span>
                </motion.button>

                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="p-2 text-white/70 hover:text-white transition-colors"
                  aria-label={
                    mobileMenuOpen
                      ? (language === 'es' ? 'Cerrar menú' : 'Close menu')
                      : (language === 'es' ? 'Abrir menú' : 'Open menu')
                  }
                  aria-expanded={mobileMenuOpen}
                >
                  {mobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 xl:hidden pt-20"
          >
            <div className="absolute inset-0 bg-black/95 backdrop-blur-xl" onClick={() => setMobileMenuOpen(false)} />
            <nav className="absolute top-24 left-4 right-4 sm:left-8 sm:right-8 md:left-16 md:right-16 bg-[#0f0f0f] border border-white/10 p-6 sm:p-8 max-h-[calc(100vh-6rem)] overflow-y-auto">
              <div className="flex flex-col gap-4 sm:gap-6">
                {navLinks.map((link, index) => (
                  link.type === 'anchor' && isHome ? (
                    <motion.a
                      key={link.key}
                      href={link.href}
                      onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className="text-sm sm:text-base text-white/70 hover:text-white tracking-widest uppercase py-3 sm:py-4 border-b border-white/5 last:border-0"
                    >
                      {t(link.key)}
                    </motion.a>
                  ) : (
                    <motion.div
                      key={link.key}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className="border-b border-white/5 last:border-0"
                    >
                      <Link
                        to={link.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="text-sm sm:text-base text-white/70 hover:text-white tracking-widest uppercase py-3 sm:py-4 block"
                      >
                        {t(link.key)}
                      </Link>
                    </motion.div>
                  )
                ))}
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

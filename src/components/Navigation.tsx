import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Globe } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

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
    { key: 'nav.contacto', href: isHome ? '#contacto' : '/#contacto', type: 'anchor' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Floating Logo (Initial State) */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: scrolled ? 0 : 1, y: scrolled ? -20 : 0, pointerEvents: scrolled ? 'none' : 'auto' }}
        transition={{ duration: 0.4 }}
        className="fixed top-6 left-12 lg:left-20 z-50"
      >
        <a href="#hero" onClick={(e) => { e.preventDefault(); scrollToSection('#hero'); }} className="block">
          {!logoError ? (
            <img 
              src="/logo.webp" 
              alt="Central de Envasados" 
              className="h-30 lg:h-36 w-auto mix-blend-screen" 
              onError={() => setLogoError(true)}
              referrerPolicy="no-referrer"
            />
          ) : (
            <span className="text-white font-light tracking-[0.4em] text-xl lg:text-2xl uppercase">Central de Envasados</span>
          )}
        </a>
      </motion.div>

      {/* Main Header */}
      <motion.header 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        className={`fixed top-0 left-0 right-0 z-40 w-full transition-all duration-700 ease-in-out ${
          scrolled 
            ? 'bg-black/60 backdrop-blur-xl border-b border-white/5 py-0' 
            : 'bg-transparent border-b border-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-24 transition-all duration-700">
            {/* Logo in Navbar (Visible on scroll) */}
            <motion.a 
              href="#hero" 
              onClick={(e) => { e.preventDefault(); scrollToSection('#hero'); }}
              className="flex-shrink-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: scrolled ? 1 : 0 }}
              transition={{ duration: 0.5 }}
            >
              {!logoError ? (
                <img 
                  src="/logo.webp" 
                  alt="Central de Envasados" 
                  className="h-24 w-auto transition-all duration-500 mix-blend-screen" 
                  onError={() => setLogoError(true)}
                  referrerPolicy="no-referrer"
                />
              ) : (
                <span className="text-white font-light tracking-[0.4em] text-sm uppercase">Central de Envasados</span>
              )}
            </motion.a>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
              {navLinks.map((link, index) => (
                link.type === 'anchor' && isHome ? (
                  <motion.a
                    key={link.key}
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                    className="text-[10px] text-white/70 hover:text-white tracking-[0.2em] uppercase transition-colors duration-300 font-medium"
                  >
                    {t(link.key)}
                  </motion.a>
                ) : (
                  <motion.div
                    key={link.key}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                  >
                    <Link
                      to={link.href}
                      className="text-[10px] text-white/70 hover:text-white tracking-[0.2em] uppercase transition-colors duration-300 font-medium"
                    >
                      {t(link.key)}
                    </Link>
                  </motion.div>
                )
              ))}
            </nav>

            {/* Language & Mobile Menu Toggle */}
            <div className="flex items-center gap-4">
              <motion.button 
                onClick={toggleLanguage}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 text-white/70 hover:text-white transition-colors duration-300"
                aria-label="Cambiar Idioma"
              >
                <Globe className="w-4 h-4" />
                <span className="text-[10px] tracking-widest uppercase font-bold">{language}</span>
              </motion.button>

              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 text-white/70 hover:text-white transition-colors"
                aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
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
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div className="absolute inset-0 bg-black/95 backdrop-blur-xl" onClick={() => setMobileMenuOpen(false)} />
            <nav className="absolute top-24 left-4 right-4 bg-[#0f0f0f] border border-white/10 p-8">
              <div className="flex flex-col gap-6">
                {navLinks.map((link, index) => (
                  link.type === 'anchor' && isHome ? (
                    <motion.a
                      key={link.key}
                      href={link.href}
                      onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className="text-sm text-white/70 hover:text-white tracking-widest uppercase py-4 border-b border-white/5 last:border-0"
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
                        className="text-sm text-white/70 hover:text-white tracking-widest uppercase py-4 block"
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

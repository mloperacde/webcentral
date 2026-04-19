import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Cookie, X, ShieldCheck, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem('cookie-consent', 'all');
    setIsVisible(false);
  };

  const handleAcceptNecessary = () => {
    localStorage.setItem('cookie-consent', 'necessary');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-0 left-0 right-0 z-[100] p-4 md:p-8 pointer-events-none"
        >
          <div className="max-w-6xl mx-auto pointer-events-auto">
            <div className="bg-black/80 backdrop-blur-xl border border-white/10 rounded-2xl md:rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
              <div className="p-6 md:p-10 flex flex-col md:flex-row gap-8 items-start md:items-center">
                <div className="flex-1 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="bg-accent/10 p-2 rounded-lg">
                      <Cookie className="w-5 h-5 text-accent" />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/50">Tu privacidad importa</span>
                  </div>
                  
                  <h3 className="text-xl md:text-2xl font-light text-white uppercase tracking-tight italic">
                    Configuración de <span className="text-accent italic">Cookies</span>
                  </h3>
                  
                  <p className="text-sm md:text-base text-white/60 font-light leading-relaxed max-w-2xl">
                    Utilizamos cookies propias y de terceros para mejorar tu experiencia, analizar el tráfico y mostrarte contenido relevante. Puedes aceptar todas, rechazarlas o configurar tus preferencias.
                  </p>

                  <div className="flex flex-wrap items-center gap-6 pt-2">
                    <Link 
                      to="/cookies" 
                      className="text-[10px] uppercase tracking-widest font-bold text-white/40 hover:text-accent transition-colors flex items-center gap-2 group"
                      onClick={() => setIsVisible(false)}
                    >
                      Política de Cookies
                      <ChevronRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                    </Link>
                    <Link 
                      to="/politica-privacidad" 
                      className="text-[10px] uppercase tracking-widest font-bold text-white/40 hover:text-accent transition-colors flex items-center gap-2 group"
                      onClick={() => setIsVisible(false)}
                    >
                      Privacidad
                      <ChevronRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                  <button
                    onClick={handleAcceptNecessary}
                    className="px-8 py-4 text-[10px] font-bold uppercase tracking-[0.2em] text-white/60 hover:text-white transition-colors border border-white/10 rounded-full hover:bg-white/5"
                  >
                    Solo necesarias
                  </button>
                  <button
                    onClick={handleAcceptAll}
                    className="px-8 py-4 text-[10px] font-bold uppercase tracking-[0.2em] text-black bg-accent rounded-full hover:bg-accent/90 transition-all transform hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(var(--accent-rgb),0.3)] flex items-center justify-center gap-2"
                  >
                    <ShieldCheck className="w-4 h-4" />
                    Aceptar todas
                  </button>
                </div>
              </div>

              {/* Progress bar subtle decoration */}
              <div className="h-1 w-full bg-white/5 relative overflow-hidden">
                <motion.div 
                  initial={{ x: '-100%' }}
                  animate={{ x: '100%' }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-accent/30 to-transparent"
                />
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

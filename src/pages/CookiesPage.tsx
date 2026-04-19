import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export const CookiesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-black min-h-screen text-white pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/" className="inline-flex items-center gap-3 text-white/60 hover:text-white transition-colors mb-12 text-[10px] font-bold uppercase tracking-[0.2em]">
          <ArrowLeft className="w-4 h-4" />
          Volver al inicio
        </Link>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl sm:text-5xl font-light text-white mb-12 uppercase tracking-tight italic">
            Política de <span className="text-accent underline decoration-accent/30 underline-offset-8">Cookies</span>
          </h1>
          
          <div className="space-y-6 text-white/70 font-light leading-relaxed">
            <h2 className="text-2xl text-white font-medium mt-10 mb-4">1. Uso de Cookies</h2>
            <p>
              El sitio web de Central de Envasados, S.A. utiliza cookies propias y de terceros para analizar la navegación de los usuarios, mejorar nuestros servicios y optimizar la experiencia de usuario.
            </p>
            <p>El texto completo y específico de la política de cookies está pendiente de redacción final por el área legal.</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

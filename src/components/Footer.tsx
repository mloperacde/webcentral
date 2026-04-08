import React, { useState } from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';

export const Footer = () => {
  const { t } = useLanguage();
  const [logoError, setLogoError] = useState(false);
  
  const footerLinks = [
    { label: 'nav.inicio', href: '#hero' },
    { label: 'nav.sectores', href: '#sectores' },
    { label: 'nav.productos', href: '#productos' },
    { label: 'nav.instalaciones', href: '#instalaciones' },
    { label: 'nav.calidad', href: '#calidad' },
    { label: 'nav.contacto', href: '#contacto' },
  ];

  return (
    <footer className="relative bg-black border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col items-start mb-8"
            >
              {!logoError ? (
                <img loading="lazy" 
                  src="/logo.webp" 
                  alt="Central de Envasados" 
                  className="h-20 w-auto mb-4 mix-blend-screen" 
                  onError={() => setLogoError(true)}
                  referrerPolicy="no-referrer"
                />
              ) : (
                <span className="text-white font-light tracking-[0.4em] text-lg uppercase mb-4">Central de Envasados</span>
              )}
              <p className="text-white/40 text-sm leading-relaxed max-w-md font-light">
                Partner estratégico de las principales marcas de cosmética, perfumería y cuidado personal. 
                Más de 35 años de experiencia en fabricación y envasado de precisión.
              </p>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="text-white/60 text-[10px] uppercase tracking-[0.3em] font-bold mb-6">Enlaces</h4>
            <ul className="space-y-4">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href} 
                    onClick={(e) => { e.preventDefault(); document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' }); }}
                    className="text-white/40 hover:text-accent text-sm transition-colors font-light"
                  >
                    {t(link.label)}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-white/60 text-[10px] uppercase tracking-[0.3em] font-bold mb-6">Legal</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-white/40 hover:text-accent text-sm transition-colors font-light">{t('footer.legal')}</a></li>
              <li><a href="#" className="text-white/40 hover:text-accent text-sm transition-colors font-light">{t('footer.privacy')}</a></li>
              <li><a href="#" className="text-white/40 hover:text-accent text-sm transition-colors font-light">{t('footer.cookies')}</a></li>
            </ul>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-12 pt-12 border-t border-white/5"
        >
          <p className="text-white/30 text-[10px] sm:text-[11px] leading-relaxed font-light text-justify">
            {t('footer.legalNotice')}
          </p>
        </motion.div>

        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/20 text-[10px] tracking-widest uppercase font-bold">
            © {new Date().getFullYear()} Central de Envasados, S.A. {t('footer.rights')}
          </p>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              <span className="text-white/40 text-[10px] tracking-widest uppercase font-bold">ISO 9001:2015 Certified</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

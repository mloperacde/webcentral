import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

export const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { label: t('nav.inicio'), href: '/#hero' },
    { label: t('nav.sectores'), href: '/sectores' },
    { label: t('nav.productos'), href: '/productos' },
    { label: t('nav.instalaciones'), href: '/instalaciones' },
    { label: t('nav.calidad'), href: '/calidad' },
    { label: t('nav.contacto'), href: '/#contacto' },
  ];

  const legalLinks = [
    { label: t('footer.legal'), href: '/aviso-legal' },
    { label: t('footer.privacy'), href: '/politica-privacidad' },
    { label: t('footer.cookies'), href: '/cookies' },
  ];

  return (
    <footer id="footer" className="bg-black text-white pt-20 pb-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-24 mb-20">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block mb-8">
              <img src="/logo.webp" alt="Central de Envasados" className="h-16 w-auto mix-blend-screen opacity-80" />
            </Link>
            <p className="text-white/40 text-[13px] leading-relaxed font-light max-w-md">
              {t('footer.description')}
            </p>
          </div>

          {/* Enlaces Column */}
          <div>
            <h3 className="text-[10px] text-white/30 tracking-[0.3em] uppercase font-bold mb-8">
              {t('footer.sections.links')}
            </h3>
            <ul className="space-y-4">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-[13px] text-white/50 hover:text-white transition-colors duration-300 font-light">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h3 className="text-[10px] text-white/30 tracking-[0.3em] uppercase font-bold mb-8">
              {t('footer.sections.legal')}
            </h3>
            <ul className="space-y-4">
              {legalLinks.map((link, index) => (
                <li key={index}>
                  <Link to={link.href} className="text-[13px] text-white/50 hover:text-white transition-colors duration-300 font-light">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Legal Notice Text */}
        <div className="py-12 border-t border-white/5">
          <p className="text-white/20 text-[10px] leading-relaxed font-light text-justify">
            {t('footer.legalNotice')}
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-white/30 text-[10px] tracking-[0.2em] uppercase font-bold">
            © {currentYear} CENTRAL DE ENVASADOS, S.A. {t('footer.rights')}
          </p>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.6)]" />
            <span className="text-white/40 text-[10px] tracking-[0.15em] uppercase font-bold">
              {t('footer.iso')}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

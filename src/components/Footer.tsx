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
    { label: t('nav.contacto'), href: '/contacto' },
  ];

  const legalLinks = [
    { label: t('footer.legal'), href: '/aviso-legal' },
    { label: t('footer.privacy'), href: '/politica-privacidad' },
    { label: t('footer.cookies'), href: '/cookies' },
    { label: t('footer.ethic'), href: '/canal-etico' },
    { label: t('footer.management'), href: '/politica-gestion' },
  ];

  return (
    <footer id="footer" className="bg-black text-white pt-20 pb-10 border-t border-white/5 print:hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-24 mb-20">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block mb-10 group">
              <img 
                src="/logo.webp" 
                alt="Central de Envasados" 
                className="h-28 md:h-32 w-auto mix-blend-screen opacity-90 transition-all duration-500 group-hover:scale-105 group-hover:opacity-100" 
              />
            </Link>
            <p className="text-[var(--text-fluid-lg)] text-white/50 max-w-xl font-light leading-relaxed">
              {t('footer.description')}
            </p>
          </div>

          {/* Enlaces Column */}
          <div>
            <h3 className="text-[var(--text-fluid-lg)] text-white/40 tracking-widest-xl uppercase font-bold mb-8">
              {t('footer.sections.links')}
            </h3>
            <ul className="space-y-4">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <Link to={link.href} className="text-[var(--text-fluid-xl)] text-white/60 hover:text-white transition-colors duration-300 font-light flex items-center gap-2 group">
                    <span className="w-1.5 h-px bg-accent scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h3 className="text-[var(--text-fluid-lg)] text-white/40 tracking-widest-xl uppercase font-bold mb-8">
              {t('footer.sections.legal')}
            </h3>
            <ul className="space-y-4">
              {legalLinks.map((link, index) => (
                <li key={index}>
                  <Link to={link.href} className="text-[var(--text-fluid-xl)] text-white/60 hover:text-white transition-colors duration-300 font-light flex items-center gap-2 group">
                    <span className="w-1.5 h-px bg-accent scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Legal Notice Text */}
        <div className="py-12 border-t border-white/5">
          <p className="text-white/30 text-[var(--text-fluid-base)] leading-relaxed font-light text-justify max-w-5xl mx-auto">
            {t('footer.legalNotice')}
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-white/40 text-[var(--text-fluid-xs)] tracking-widest uppercase font-bold">
            © {currentYear} CENTRAL DE ENVASADOS, S.A. {t('footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  );
};

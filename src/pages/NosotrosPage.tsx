import { useEffect } from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { PageMeta } from '../components/PageMeta';

export const NosotrosPage = () => {
  const { t, language } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const metaTitle = language === 'en' ? 'About Us | Central Envasados' : 'Nosotros | Central Envasados';
  const metaDesc = language === 'en'
    ? 'Over 35 years of experience in precision packaging. More than 250 professionals and 30 production lines.'
    : 'Más de 35 años de experiencia en envasado de precisión. Más de 250 profesionales y 30 líneas de producción.';

  const copy = language === 'en'
    ? {
        subtitle: 'Our Team',
        titlePrefix: 'Team, Commitment and',
        titleHighlight: 'Passion for our work',
        imageAlt: 'Central de Envasados team'
      }
    : {
        subtitle: 'Nuestro Equipo',
        titlePrefix: 'Equipo, Compromiso y',
        titleHighlight: 'Pasión por nuestro trabajo',
        imageAlt: 'Equipo Central de Envasados'
      };

  const gridItems = [
    { type: 'image', src: '/staff_group.png', span: 'col-span-2 row-span-2' },
    { type: 'image', src: '/staff_meeting.png', span: 'col-span-1 row-span-1' },
    { 
      type: 'text', 
      contentKey: 'nosotros.p1', 
      bg: 'bg-white/[0.03]',
      span: 'col-span-1 row-span-1'
    },
    { type: 'image', src: '/scientist.png', span: 'col-span-1 row-span-1' },
    { type: 'image', src: '/technician_portrait.png', span: 'col-span-1 row-span-1' },
    { 
      type: 'text', 
      contentKey: 'nosotros.p2', 
      bg: 'bg-white/[0.03]',
      span: 'col-span-2 row-span-1'
    },
    { type: 'image', src: '/logistics.png', span: 'col-span-2 row-span-1' },
    { type: 'image', src: '/production.png', span: 'col-span-2 row-span-1' },
    { 
      type: 'text', 
      contentKey: 'nosotros.p3', 
      bg: 'bg-white/[0.03]',
      span: 'col-span-2 row-span-1'
    },
  ];

  return (
    <>
      <PageMeta title={metaTitle} description={metaDesc} />
    <div className="min-h-screen bg-black pt-32 pb-20 mesh-gradient">
      <div className="page-container-wide">
        <header className="mb-16">
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="page-subtitle mb-4 block"
          >
            {copy.subtitle}
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-light text-white tracking-tight leading-tight text-balance"
          >
            {copy.titlePrefix} <span className="text-accent italic">{copy.titleHighlight}</span>
          </motion.h1>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[clamp(240px,28vh,360px)] gap-4">
          {gridItems.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
              className={`${item.span} relative overflow-hidden rounded-xl border border-white/5 group`}
            >
              {item.type === 'image' ? (
                <img 
                  src={item.src} 
                  alt={copy.imageAlt}
                  className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-110"
                />
              ) : (
                <div className={`${item.bg} h-full p-8 flex flex-col justify-center border border-white/5 backdrop-blur-sm`}>
                  <p className="text-white/50 text-[14px] sm:text-[15px] font-light leading-relaxed italic">
                    "{t(item.contentKey as any)}"
                  </p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
};

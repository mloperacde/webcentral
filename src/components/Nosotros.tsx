
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { Users, TrendingUp, Landmark, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Nosotros = () => {
  const { t, language } = useLanguage();

  const isEn = language === 'en';

  const details = isEn
    ? [
        { icon: Landmark, label: 'nosotros.stat1', value: '35+ Years' },
        { icon: Users, label: 'nosotros.stat2', value: '+250 Staff' },
        { icon: TrendingUp, label: 'nosotros.stat3', value: '30+ Rooms' }
      ]
    : [
        { icon: Landmark, label: 'nosotros.stat1', value: '35+ Años' },
        { icon: Users, label: 'nosotros.stat2', value: '+250 Prof.' },
        { icon: TrendingUp, label: 'nosotros.stat3', value: '30+ Salas' }
      ];

  return (
    <section id="nosotros" className="pt-48 pb-24 lg:pt-64 lg:pb-32 bg-black relative overflow-hidden w-full">
      <div className="w-full px-4 sm:px-8 lg:px-20">
        <div className="grid lg:grid-cols-[55%_45%] gap-12 items-start">
          
          {/* Left Column: Narrative Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col h-full z-10"
          >
            <div className="mb-0">
              <span className="text-[9px] text-accent tracking-[0.3em] uppercase font-bold mb-6 block">
                {t('nav.nosotros')}
              </span>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-white mb-8 tracking-tight leading-[1.1] max-w-4xl">
                {t('nosotros.title')}
              </h2>
              
              <h3 className="text-[16px] text-accent/90 font-light italic mb-8 leading-relaxed max-w-2xl">
                {t('nosotros.subtitle')}
              </h3>
              
              <div className="space-y-4 text-white/50 text-[17px] font-light leading-relaxed mb-10 max-w-2xl">
                <p>{t('nosotros.p1')}</p>
                <div className="border-l border-accent/20 pl-6 italic text-white/70 py-1">
                  {t('nosotros.p3')}
                </div>
              </div>

              <div className="flex flex-col gap-12">
                <div>
                  <Link
                    to="/nosotros"
                    className="group inline-flex items-center gap-4 px-8 py-4 bg-white/[0.03] hover:bg-white/[0.08] text-white transition-all duration-300 rounded-full border border-white/10 text-[9px] uppercase font-bold tracking-[0.2em]"
                  >
                    {t('nosotros.cta')}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-3 w-full max-w-xl">
                  {details.map((detail, idx) => (
                    <div key={idx} className="p-4 rounded-lg border border-white/5 bg-white/[0.015] flex-1 flex flex-col items-start gap-2">
                      <detail.icon className="w-3.5 h-3.5 text-accent/70 mb-1" />
                      <div className="text-lg sm:text-xl text-white font-light mb-1 leading-none">{detail.value}</div>
                      <div className="text-[8px] sm:text-[9px] text-white/30 uppercase tracking-widest font-bold leading-tight">{t(detail.label)}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Image with Fixed Design Values */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="relative"
            style={{ 
              marginTop: '171px',
              marginLeft: '-266px',
              zIndex: 0
            }}
          >
            <div className="relative shadow-[0_0_80px_rgba(0,0,0,0.6)] overflow-hidden">
              <img 
                src="/factory.webp" 
                alt={isEn ? 'Central de Envasados factory' : 'Factory Central de Envasados'} 
                className="w-full h-auto object-cover transition-transform duration-1000 hover:scale-105"
                style={{ 
                  height: '584px'
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

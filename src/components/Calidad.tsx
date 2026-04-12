import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';

export const Calidad = () => {
  const { t } = useLanguage();
  
  const certs = [
    { 
      id: 'iso9001', 
      title: 'Sistema de Gestión de la Calidad', 
      description: 'en base a la norma ISO9001',
      image: '/png-clipart-iso-9000-organization.png'
    },
    { 
      id: 'iso22716', 
      title: 'Guía d. B. P. de Fabricación', 
      description: 'por la AEMPS y en base a la norma ISO22716',
      image: '/SGS_bpm.png'
    },
    { 
      id: 'iso13485', 
      title: 'Gestión Calidad Productos Sanitarios', 
      description: 'en base a la norma ISO13485',
      image: '/SGS_ISO_13485_round_TCL_HR.jpg'
    },
    { 
      id: 'iso14001', 
      title: 'Sistema Gestión del Medioambiente', 
      description: 'en base a la norma ISO14001',
      image: '/SGS-ISO-14001-COLOR.png'
    },
    { 
      id: 'ecovadis', 
      title: 'Certificación de Sostenibilidad', 
      description: 'EcoVadis',
      image: '/Ecovadis-Logo.jpg'
    },
  ];

  return (
    <section id="calidad" className="bg-black relative overflow-hidden pb-32">
      {/* Title Section (Outside Image) */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-[10px] text-accent tracking-[0.3em] uppercase font-bold mb-4 block">{t('calidad.subtitle')}</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white/90 tracking-tight mb-8">{t('calidad.title')}</h2>
          <div className="space-y-4 max-w-none">
            <p className="text-base lg:text-lg text-white/80 font-light leading-relaxed">
              Nuestros procedimientos y buenas prácticas de trabajo están acreditadas por los organismos internacionales más exigentes.
            </p>
            <p className="text-sm lg:text-base text-white/50 font-light leading-relaxed">
              Mantenemos un ecosistema de certificaciones que actúa como un escudo de seguridad y confianza para marcas líderes a nivel mundial.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Content Section with Background Image */}
      <div className="relative min-h-[100vh] lg:min-h-[120vh] flex flex-col justify-end pb-24 lg:pb-32">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img loading="lazy" 
            src="/laboratorio.webp" 
            alt="Control de Calidad" 
            className="w-full h-full object-cover object-center opacity-100"
            referrerPolicy="no-referrer"
          />
          {/* Lighter overlay for brighter background image */}
          <div className="absolute inset-0 bg-black/5" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/80" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-40 lg:pt-[25vh]">
          {/* Big Text Window First */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            whileHover={{ scale: 1.01, borderColor: 'rgba(255,255,255,0.2)' }}
            className="p-8 border border-white/10 bg-black/60 backdrop-blur-md relative overflow-hidden text-center transition-all duration-500 mb-20"
          >
            <div className="relative z-10">
              <h3 className="text-2xl font-light text-white mb-6">{t('calidad.process.title')}</h3>
              <p className="text-white/80 mb-8 max-w-2xl font-light mx-auto">{t('calidad.process.description')}</p>
              <ul className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto text-left">
                {(t('calidad.process.points') as unknown as string[]).map((point, index) => (
                  <li key={index} className="flex items-center gap-3 text-white/80 text-sm font-light">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Certifications Grid - Floating and overlapping the bottom edge */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6 translate-y-32 lg:translate-y-48">
            {certs.map((cert, index) => (
              <motion.div 
                key={cert.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5, backgroundColor: 'rgba(255,255,255,0.25)', borderColor: 'rgba(255,255,255,0.4)', backdropFilter: 'blur(30px)' }}
                className="p-4 lg:p-6 border border-white/10 bg-white/10 backdrop-blur-xl text-center transition-all duration-500 flex flex-col items-center rounded-xl shadow-2xl"
              >
                <div className="h-20 lg:h-24 mb-4 flex items-center justify-center bg-white rounded-lg p-3 w-full shadow-inner overflow-hidden group-hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all duration-300">
                  <img 
                    src={cert.image} 
                    alt={cert.title} 
                    loading="lazy" 
                    className="h-10 lg:h-12 w-auto max-w-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-500" 
                  />
                </div>
                <h3 className="text-[11px] lg:text-[13px] font-bold text-accent mb-2 tracking-tight leading-tight">{cert.title}</h3>
                <p className="text-white/60 text-[10px] lg:text-[11px] leading-snug font-light">{cert.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      {/* Spacer to account for the floating certs overlap */}
      <div className="h-32 lg:h-48" />
    </section>
  );
};

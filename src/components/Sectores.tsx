import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Shield, Beaker, Play, Pause, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { VideoPlayer } from './VideoPlayer';

export const Sectores = () => {
  const { t, language } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  
  const sectors = [
    { 
      id: 'cosmetic', 
      icon: Sparkles, 
      title: 'sectores.cosmetic.title', 
      description: 'sectores.cosmetic.description',
      features: 'sectores.cosmetic.features',
      image: '/cosmetica.webp'
    },
    { 
      id: 'sanitary', 
      icon: Shield, 
      title: 'sectores.sanitary.title', 
      description: 'sectores.sanitary.description',
      features: 'sectores.sanitary.features',
      image: '/productosanitario.webp'
    },
    { 
      id: 'food', 
      icon: Beaker, 
      title: 'sectores.food.title', 
      description: 'sectores.food.description',
      features: 'sectores.food.features',
      image: '/alimentacion.webp'
    },
  ];

  const isVideo = (url: string) => url.includes('.mp4') || url.includes('vimeo');

  const next = () => setCurrentIndex((prev) => (prev + 1) % sectors.length);

  useEffect(() => {
    if (!isPlaying) return;
    const timer = setInterval(next, 8000);
    return () => clearInterval(timer);
  }, [currentIndex, isPlaying]);

  return (
    <section id="sectores" className="section-padding bg-[#080808] relative overflow-hidden py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            <span className="text-[var(--text-fluid-xs)] text-accent tracking-widest-xl uppercase font-bold mb-4 block">
              {t('sectores.subtitle')}
            </span>
            <h2 className="text-[var(--text-fluid-xl)] sm:text-[var(--text-fluid-2xl)] font-medium text-white tracking-tight leading-none text-balance">
              {t('sectores.title')}
            </h2>
          </motion.div>
        </div>
      </div>

      <div className="relative w-full overflow-hidden">
        <motion.div 
          className="flex gap-[4vw] min-w-max"
          animate={{ x: `calc(50vw - 32.5vw - (${currentIndex} * 69vw))` }}
          transition={{ duration: 1.2, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          {sectors.map((sector, index) => (
            <div 
              key={sector.id}
              onClick={() => setCurrentIndex(index)}
              className={`relative h-[clamp(400px,60vh,800px)] w-[65vw] flex-shrink-0 overflow-hidden rounded-[clamp(1.5rem,3vw,2.5rem)] bg-zinc-900/50 border border-white/5 transition-all duration-1000 ease-[0.21, 0.47, 0.32, 0.98] cursor-pointer group ${
                currentIndex === index ? 'opacity-100 scale-100 shadow-[0_0_50px_rgba(56,189,248,0.15)]' : 'opacity-40 scale-[0.85] blur-[1px]'
              }`}
            >
              {/* Glow Border Overlay */}
              <div className={`absolute inset-0 z-10 transition-opacity duration-1000 ${currentIndex === index ? 'opacity-100' : 'opacity-0'}`}>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute inset-0 border border-accent/20 rounded-[clamp(1.5rem,3vw,2.5rem)] pointer-events-none" />
              </div>
              {isVideo(sector.image) ? (
                <VideoPlayer 
                  src={sector.image} 
                  isActive={currentIndex === index} 
                  isPlaying={isPlaying} 
                  fallbackImage=""
                />
              ) : (
                <motion.img 
                  src={sector.image} 
                  alt={t(sector.title)}
                  className="w-full h-full object-cover opacity-80"
                  referrerPolicy="no-referrer"
                  animate={currentIndex === index && isPlaying ? {
                    scale: [1, 1.2],
                    transition: { 
                      duration: 12, 
                      ease: "linear", 
                      repeat: Infinity, 
                      repeatType: "reverse" 
                    }
                  } : { 
                    scale: 1,
                    transition: { duration: 0.8 }
                  }}
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
              
              <div className="absolute inset-0 flex flex-col justify-end p-8 sm:p-16 lg:p-20">
                <motion.div
                  initial={false}
                  animate={{ 
                    opacity: currentIndex === index ? 1 : 0,
                    y: currentIndex === index ? 0 : 30 
                  }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="max-w-3xl"
                >
                  <h3 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-white mb-6 tracking-tight">
                    {t(sector.title)}
                  </h3>
                  <p className="text-white/60 text-lg sm:text-xl font-light leading-relaxed mb-10 max-w-2xl">
                    {t(sector.description)}
                  </p>
                  
                  <div className="flex flex-wrap items-center gap-6">
                    <div className="flex flex-wrap gap-3">
                      {Array.isArray(t(sector.features)) && (t(sector.features) as unknown as string[]).map((feature, fIndex) => (
                        <span key={fIndex} className="px-5 py-2.5 rounded-full border border-white/10 bg-white/5 text-white/40 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.15em]">
                          {feature}
                        </span>
                      ))}
                    </div>

                    <Link 
                      to={`/sectores#${sector.id}`}
                      className="group/btn flex items-center gap-3 text-accent text-xs font-bold uppercase tracking-[0.2em] hover:text-white transition-colors"
                    >
                      {t('sectores.viewMore') || (language === 'en' ? 'Learn more' : 'Saber más')}
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </motion.div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Indicators */}
      <div className="flex justify-center gap-3 mt-12">
        {sectors.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className="relative h-1.5 transition-all duration-500"
            style={{ width: currentIndex === index ? '2.5rem' : '0.75rem' }}
            aria-label={language === 'en' ? `Go to sector ${index + 1}` : `Ir al sector ${index + 1}`}
          >
            <div className={`absolute inset-0 rounded-full transition-colors duration-500 ${currentIndex === index ? 'bg-accent' : 'bg-white/20 hover:bg-white/40'}`} />
            {currentIndex === index && (
              <motion.div
                layoutId="activeIndicator"
                className="absolute inset-0 bg-accent rounded-full shadow-[0_0_10px_rgba(56,189,248,0.5)]"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
          </button>
        ))}
      </div>
    </section>
  );
};

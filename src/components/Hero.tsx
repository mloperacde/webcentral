import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const Hero = () => {
  const { t } = useLanguage();
  const [videoLoaded, setVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.addEventListener('loadeddata', () => setVideoLoaded(true));

      const playVideo = () => {
        video.play().catch(error => {
          console.log("Auto-play was prevented. Waiting for interaction.", error);
        });
      };

      playVideo();

      const timeout = setTimeout(() => {
        if (!videoLoaded) setVideoLoaded(true);
      }, 3000);

      return () => {
        clearTimeout(timeout);
      };
    }
  }, [videoLoaded]);

  const stats = [
    { value: '35+', label: 'hero.stats.experience' },
    { value: '30', label: 'hero.stats.lines' },
    { value: '250+', label: 'hero.stats.talent' },
    { value: '+100M', label: 'hero.stats.capacity' },
  ];

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full w-auto h-auto object-cover transition-opacity duration-1000 ${videoLoaded ? 'opacity-70' : 'opacity-0'}`}
        >
          <source src="https://r2.syntx.ai/user_4757471028963438559/generated/a0030fc825a2b7668721ea137bc37a66_feedcf19-9305-414f-aa06-a043884a6615.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-black/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 pt-32">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded border border-white/10 mb-8 bg-black/10 backdrop-blur-sm"
          >
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse shadow-[0_0_10px_rgba(56,189,248,0.5)]" />
            <span className="text-[11px] text-white/80 tracking-[0.3em] uppercase font-bold">{t('hero.badge')}</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-light mb-6 tracking-tight leading-[1.2] max-w-5xl mx-auto text-center"
          >
            <span className="text-white/90">{t('hero.title')}</span>
            <br />
            <span className="text-white/90">{t('hero.titleHighlight')}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/60 max-w-4xl mb-10 leading-relaxed font-light mx-auto text-center"
          >
            {t('hero.subtitle')}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
          >
            <button
              onClick={() => document.querySelector('#instalaciones')?.scrollIntoView({ behavior: 'smooth' })}
              className="group flex items-center gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-white/10 hover:bg-white/20 text-white text-[10px] sm:text-[11px] tracking-[0.2em] uppercase transition-all duration-300 border border-white/10"
              aria-label="Ir a Instalaciones"
            >
              {t('hero.ctaPrimary')}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => document.querySelector('#contacto')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-6 sm:px-8 py-3 sm:py-4 border border-white/20 text-white/80 hover:border-white/50 hover:text-white text-[10px] sm:text-[11px] tracking-[0.2em] uppercase transition-all duration-300"
              aria-label="Ir a Contacto"
            >
              {t('hero.ctaSecondary')}
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 + index * 0.1 }}
                className="relative p-4 sm:p-6 border border-white/10 bg-white/[0.02] backdrop-blur-sm"
              >
                <div className="text-2xl sm:text-3xl md:text-4xl font-light text-white mb-2">{stat.value}</div>
                <div className="text-[8px] sm:text-[9px] text-white/40 tracking-[0.2em] uppercase font-bold">{t(stat.label)}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[9px] text-white/40 tracking-[0.3em] uppercase font-bold">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-px h-8 bg-gradient-to-b from-white/40 to-transparent"
        />
      </motion.div>
    </section>
  );
};
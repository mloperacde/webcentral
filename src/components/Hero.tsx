import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

import { useLanguage } from '../context/LanguageContext';

export const Hero = () => {
  const { t, language } = useLanguage();
  const [videoLoaded, setVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLElement>(null);
  const hasFired = useRef(false);

  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoaded = () => {
      if (!hasFired.current) {
        hasFired.current = true;
        setVideoLoaded(true);
      }
    };

    video.addEventListener('loadeddata', handleLoaded);

    const playVideo = () => {
      video.play().catch(() => {
        // Auto-play was prevented. User interaction required.
      });
    };

    playVideo();

    const timeout = setTimeout(() => {
      if (!hasFired.current) {
        hasFired.current = true;
        setVideoLoaded(true);
      }
    }, 3000);

    return () => {
      video.removeEventListener('loadeddata', handleLoaded);
      clearTimeout(timeout);
    };
  }, []);

  const stats = [
    { value: '35+', label: 'hero.stats.experience' },
    { value: '30', label: 'hero.stats.lines' },
    { value: '250+', label: 'hero.stats.talent' },
    { value: '+100M', label: 'hero.stats.capacity' },
  ];

  const titleWords = t('hero.title').split(' ');
  const titleHighlight = t('hero.titleHighlight');
  const highlightTarget = /Co[-‑]Packer de marcas líderes a nivel mundial|Co[-‑]Packer for world-leading brands/;
  const highlightMatch = titleHighlight.match(highlightTarget);
  const highlightParts = highlightMatch
    ? titleHighlight.split(highlightTarget)
    : null;

  return (
    <section id="hero" ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      <motion.div 
        style={{ y: y1 }}
        className="absolute inset-0 z-0"
      >
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full w-auto h-auto object-cover transition-opacity duration-1000 ${videoLoaded ? 'opacity-60' : 'opacity-0'}`}
        >
          <source src="https://r2.syntx.ai/user_4757471028963438559/generated/a0030fc825a2b7668721ea137bc37a66_feedcf19-9305-414f-aa06-a043884a6615.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/40" />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          style={{ y: y2, opacity }}
          className="text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 sm:px-5 py-1.5 rounded-full border border-white/10 mb-6 sm:mb-8 bg-white/5 backdrop-blur-md"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_10px_rgba(56,189,248,0.8)]" />
            <span className="text-[9px] sm:text-[10px] text-white/70 tracking-[0.25em] uppercase font-bold">{t('hero.badge')}</span>
          </motion.div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-light text-white/90 mb-6 tracking-tight leading-tight max-w-6xl mx-auto text-center">
            <div className="flex flex-wrap justify-center gap-x-[0.3em] gap-y-[0.1em]">
              {titleWords.map((word, i) => (
                <div key={i} className="overflow-hidden">
                  <motion.span
                    initial={{ y: "100%", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: i * 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
                    className="inline-block"
                  >
                    {word}
                  </motion.span>
                </div>
              ))}
              <div className="overflow-hidden pr-1">
                <motion.span
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1, delay: titleWords.length * 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
                  className="inline-block italic"
                >
                  <span className="text-white/90">{highlightParts ? highlightParts[0] : titleHighlight}</span>
                  {highlightMatch && <span className="text-accent">{highlightMatch[0]}</span>}
                  {highlightParts && <span className="text-white/90">{highlightParts[1]}</span>}
                </motion.span>
              </div>
            </div>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="max-w-4xl mx-auto text-white/50 text-xl lg:text-2xl font-light leading-relaxed mb-10 px-4 text-balance"
          >
            {t('hero.subtitle')}
          </motion.p>


        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-0 w-full z-10 px-4"
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.2 + index * 0.1 }}
                className="bg-white/[0.02] backdrop-blur-md py-5 sm:py-6 px-4 text-center group cursor-default transition-all duration-500 border border-white/10 hover:border-white/20 hover:bg-white/[0.05]"
              >
                <div className="text-xl sm:text-2xl md:text-3xl font-light text-white mb-1 group-hover:text-accent transition-colors duration-300">
                  {stat.value}
                </div>
                <div className="text-[8px] sm:text-[9px] text-white/30 tracking-[0.2em] uppercase font-bold group-hover:text-white/60 transition-colors duration-300">
                  {t(stat.label)}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-2 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[8px] text-white/20 tracking-[0.4em] uppercase font-bold">{language === 'es' ? 'Desliza' : 'Scroll'}</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-7 bg-gradient-to-b from-white/30 to-transparent"
        />
      </motion.div>
    </section>
  );
};

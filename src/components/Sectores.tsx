import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Shield, Beaker, Play, Pause, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { VideoPlayer } from './VideoPlayer';

export const Sectores = () => {
  const { t, language } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const trackRef = useRef<HTMLDivElement>(null);
  const [xPosition, setXPosition] = useState(0);

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

  const next = useCallback(() => setCurrentIndex((prev) => (prev + 1) % sectors.length), [sectors.length]);

  // Calculate center position for the active slide
  useEffect(() => {
    const calculatePosition = () => {
      if (!trackRef.current) return;
      const track = trackRef.current;
      const slides = track.children;
      if (slides.length === 0) return;

      const firstSlide = slides[0] as HTMLElement;
      const slideWidth = firstSlide.offsetWidth;
      const gap = 16; // gap-4 = 16px base, will measure if needed
      const trackWidth = track.offsetWidth;
      const centerOffset = (trackWidth - slideWidth) / 2;
      const position = -(currentIndex * (slideWidth + gap)) + centerOffset;
      setXPosition(position);
    };

    calculatePosition();
    window.addEventListener('resize', calculatePosition);
    return () => window.removeEventListener('resize', calculatePosition);
  }, [currentIndex]);

  // Auto-advance
  useEffect(() => {
    if (!isPlaying) return;
    const timer = setInterval(next, 8000);
    return () => clearInterval(timer);
  }, [currentIndex, isPlaying, next]);

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
          ref={trackRef}
          className="flex gap-4 px-4 sm:px-6 lg:px-8"
          animate={{ x: xPosition }}
          transition={{ duration: 1.2, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          {sectors.map((sector, index) => (
            <div
              key={sector.id}
              onClick={() => setCurrentIndex(index)}
              className={`relative h-[clamp(500px,62vh,780px)] w-[85vw] sm:w-[70vw] lg:w-[60vw] flex-shrink-0 overflow-hidden rounded-2xl sm:rounded-3xl bg-zinc-900/50 border border-white/5 transition-all duration-1000 ease-[0.21, 0.47, 0.32, 0.98] cursor-pointer group ${
                currentIndex === index ? 'opacity-100 scale-100 shadow-[0_0_50px_rgba(56,189,248,0.15)]' : 'opacity-40 scale-[0.85] blur-[1px]'
              }`}
            >
              {/* Glow Border Overlay */}
              <div className={`absolute inset-0 z-10 transition-opacity duration-1000 ${currentIndex === index ? 'opacity-100' : 'opacity-0'}`}>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute inset-0 border border-accent/20 rounded-2xl sm:rounded-3xl pointer-events-none" />
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
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/20" />

              <div className="absolute inset-0 flex flex-col p-5 sm:p-8 lg:p-12">
                <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-black/90 via-black/50 to-transparent pointer-events-none" />
                <motion.div
                  initial={false}
                  animate={{
                    opacity: currentIndex === index ? 1 : 0,
                    y: currentIndex === index ? 0 : 30
                  }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="relative z-10 max-w-3xl mt-auto max-h-[68%] overflow-y-auto pr-1"
                >
                  <h3 className="text-xl sm:text-2xl lg:text-4xl font-medium text-white mb-2 sm:mb-3 tracking-tight drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]">
                    {t(sector.title)}
                  </h3>
                  <p className="text-white/70 text-sm sm:text-base lg:text-lg font-light leading-relaxed mb-4 sm:mb-6 max-w-2xl drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] line-clamp-3">
                    {t(sector.description)}
                  </p>

                  <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-4 sm:gap-6">
                    <div className="flex flex-wrap gap-2 sm:gap-3">
                      {Array.isArray(t(sector.features)) && (t(sector.features) as unknown as string[]).map((feature, fIndex) => (
                        <span key={fIndex} className="px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-white/40 text-[9px] sm:text-[10px] font-semibold uppercase tracking-[0.15em]">
                          {feature}
                        </span>
                      ))}
                    </div>

                    <Link
                      to={`/sectores#${sector.id}`}
                      onClick={(e) => e.stopPropagation()}
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

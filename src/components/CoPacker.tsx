import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import { Plus } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const CoPacker = () => {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 50,
    damping: 40,
    restDelta: 0.001
  });

  // Animation values
  // Mask scale: slow at first (0.1-0.6), faster towards the end (0.6-0.85)
  const maskScale = useTransform(smoothProgress, [0.1, 0.6, 0.85], [1, 8, 35]);
  const maskOpacity = useTransform(smoothProgress, [0, 0.85, 1], [1, 1, 0]);
  
  // Title is visible from the start
  const titleOpacity = useTransform(smoothProgress, [0, 0.85, 1], [1, 1, 0]);
  const titleY = useTransform(smoothProgress, [0, 0.1], [0, 0]);
  
  // Card content appears as the bottle opens
  const contentOpacity = useTransform(smoothProgress, [0.1, 0.5], [0, 1]);
  const contentY = useTransform(smoothProgress, [0.1, 0.5], [30, 0]);
  const bgOpacity = useTransform(smoothProgress, [0.1, 0.3], [0, 0.6]);

  const features = [
    { key: 'copacker.feature1', desc: 'copacker.feature1.desc' },
    { key: 'copacker.feature2', desc: 'copacker.feature2.desc' },
    { key: 'copacker.feature3', desc: 'copacker.feature3.desc' },
    { key: 'copacker.feature4', desc: 'copacker.feature4.desc' },
  ];

  return (
    <div id="copacker" ref={containerRef} className="relative h-[600vh] bg-black">
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        {/* Background is just black now */}
        <div className="absolute inset-0 z-0 bg-black" />

        {/* Title Section - Always on top (z-40) */}
        <div className="absolute inset-0 z-40 pointer-events-none flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <motion.div 
              style={{ opacity: titleOpacity, y: titleY }}
              className="mb-12 pointer-events-auto"
            >
              <span className="text-[10px] text-accent tracking-[0.3em] uppercase font-bold mb-4 block">
                {t('copacker.subtitle')}
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-white tracking-tight leading-none">
                {t('copacker.title')}
              </h2>
            </motion.div>
            {/* Spacer to maintain layout alignment with the card in z-20 */}
            <div className="min-h-[500px] invisible" />
          </div>
        </div>

        {/* The Masking Layer (z-30) */}
        <motion.div 
          style={{ opacity: maskOpacity }}
          className="absolute inset-0 z-30 pointer-events-none flex items-center justify-center"
        >
          <motion.div
            style={{ scale: maskScale }}
            className="relative w-[400px] h-[400px] flex items-center justify-center"
          >
            {/* This SVG creates multiple "holes" in a black screen using a mask */}
            <svg viewBox="0 0 200 200" className="w-full h-full overflow-visible">
              <defs>
                <mask id="bottleMask">
                  {/* White covers everything (opaque in mask) */}
                  <rect x="-1000" y="-1000" width="2500" height="2500" fill="white" />
                  
                  {/* Multiple silhouettes (transparent in mask, creates the holes) */}
                  <g fill="black">
                    {/* Standard Bottle */}
                    <path 
                      d="M20,2 L40,2 C42,2 43,3 43,5 L43,35 C43,35 65,40 65,75 L65,195 C65,198 62,200 58,200 L12,200 C8,200 5,198 5,195 L5,75 C5,40 27,35 27,35 L27,5 C27,3 28,2 20,2 Z" 
                      transform="translate(10, 0) scale(0.6)"
                    />
                    {/* Cosmetic Jar */}
                    <path 
                      d="M10,60 L90,60 C95,60 98,63 98,68 L98,152 C98,157 95,160 90,160 L10,160 C5,160 2,157 2,152 L2,68 C2,63 5,60 10,60 Z M20,40 L80,40 C85,40 85,45 85,50 L85,58 L15,58 L15,50 C15,45 15,40 20,40 Z" 
                      transform="translate(60, 20) scale(0.6)"
                    />
                    {/* Tube */}
                    <path 
                      d="M20,10 L80,10 L80,25 C80,25 85,150 55,195 L45,195 C15,150 20,25 20,25 Z" 
                      transform="translate(110, 5) scale(0.6)"
                    />
                    {/* Vial */}
                    <path 
                      d="M35,5 L65,5 L65,20 C65,20 75,25 75,40 L75,185 C75,195 70,200 65,200 L35,200 C30,200 25,195 25,185 L25,40 C25,25 35,20 35,20 Z" 
                      transform="translate(155, 0) scale(0.6)"
                    />
                  </g>
                </mask>
              </defs>
              {/* The black overlay that gets masked */}
              <rect x="-1000" y="-1000" width="2500" height="2500" fill="black" mask="url(#bottleMask)" />
              
              {/* Outlines for the silhouettes when they are small */}
              <motion.g 
                fill="none"
                stroke="white"
                strokeWidth="0.8"
                style={{ 
                  opacity: useTransform(smoothProgress, [0.1, 0.4], [0.6, 0]),
                }}
              >
                <path 
                  d="M20,2 L40,2 C42,2 43,3 43,5 L43,35 C43,35 65,40 65,75 L65,195 C65,198 62,200 58,200 L12,200 C8,200 5,198 5,195 L5,75 C5,40 27,35 27,35 L27,5 C27,3 28,2 20,2 Z" 
                  transform="translate(10, 0) scale(0.6)"
                />
                <path 
                  d="M10,60 L90,60 C95,60 98,63 98,68 L98,152 C98,157 95,160 90,160 L10,160 C5,160 2,157 2,152 L2,68 C2,63 5,60 10,60 Z M20,40 L80,40 C85,40 85,45 85,50 L85,58 L15,58 L15,50 C15,45 15,40 20,40 Z" 
                  transform="translate(60, 20) scale(0.6)"
                />
                <path 
                  d="M20,10 L80,10 L80,25 C80,25 85,150 55,195 L45,195 C15,150 20,25 20,25 Z" 
                  transform="translate(110, 5) scale(0.6)"
                />
                <path 
                  d="M35,5 L65,5 L65,20 C65,20 75,25 75,40 L75,185 C75,195 70,200 65,200 L35,200 C30,200 25,195 25,185 L25,40 C25,25 35,20 35,20 Z" 
                  transform="translate(155, 0) scale(0.6)"
                />
              </motion.g>
            </svg>
          </motion.div>
        </motion.div>

        {/* Card Section - Behind the mask (z-20) */}
        <div className="absolute inset-0 z-20 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            {/* Spacer to align with the title in z-40 */}
            <div className="h-32 mb-12 invisible" />

            <motion.div 
              style={{ opacity: contentOpacity, y: contentY }}
              className="relative min-h-[500px] rounded-[2.5rem] overflow-hidden border border-white/10 backdrop-blur-md"
            >
              {/* Background Image inside the card */}
              <div className="absolute inset-0 z-0">
                <img loading="lazy" 
                  src="/co-packing.webp" 
                  alt="Co-packing background"
                  className="w-full h-full object-cover opacity-80"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/10 to-transparent" />
              </div>

              <div className="relative z-20 h-full flex items-center py-16 px-4 sm:px-8 lg:px-12">
                <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                  {/* Left Column: Capacidad & Tecnología */}
                  <div className="flex flex-col gap-8">
                    {[features[0], features[1]].map((feature) => (
                      <div key={feature.key} className="flex flex-col gap-4">
                        <div className="flex items-center gap-4 px-6 py-4 rounded-full border bg-accent/20 border-accent/40 backdrop-blur-xl shadow-[0_0_30px_rgba(var(--accent-rgb),0.2)] w-fit">
                          <div className="w-6 h-6 rounded-full flex items-center justify-center bg-white text-accent">
                            <Plus className="w-3.5 h-3.5 rotate-45" />
                          </div>
                          <span className="text-sm sm:text-base font-medium tracking-tight text-white">
                            {t(feature.key)}
                          </span>
                        </div>
                        <p className="px-6 py-2 text-white/60 text-lg font-light leading-relaxed max-w-lg border-l border-accent/30 ml-8">
                          {t(feature.desc)}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Right Column: Líneas & Personalización */}
                  <div className="flex flex-col gap-8">
                    {[features[2], features[3]].map((feature) => (
                      <div key={feature.key} className="flex flex-col gap-4">
                        <div className="flex items-center gap-4 px-6 py-4 rounded-full border bg-accent/20 border-accent/40 backdrop-blur-xl shadow-[0_0_30px_rgba(var(--accent-rgb),0.2)] w-fit">
                          <div className="w-6 h-6 rounded-full flex items-center justify-center bg-white text-accent">
                            <Plus className="w-3.5 h-3.5 rotate-45" />
                          </div>
                          <span className="text-sm sm:text-base font-medium tracking-tight text-white">
                            {t(feature.key)}
                          </span>
                        </div>
                        <p className="px-6 py-2 text-white/60 text-lg font-light leading-relaxed max-w-lg border-l border-accent/30 ml-8">
                          {t(feature.desc)}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
          </motion.div>
        </div>
      </div>
    </div>
  </div>
  );
};

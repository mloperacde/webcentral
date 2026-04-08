import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const Productos = () => {
  const { t } = useLanguage();
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleVideoLoad = () => {
    setVideoLoaded(true);
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5;
    }
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5;
    }
  }, []);
  
  const products = [
    { 
      id: 'sachets', 
      title: 'productos.items.sachets.title', 
      description: 'productos.items.sachets.description',
      capacity: 'productos.items.sachets.capacity',
      image: '/sachets.webp'
    },
    { 
      id: 'bottles', 
      title: 'productos.items.bottles.title', 
      description: 'productos.items.bottles.description',
      capacity: 'productos.items.bottles.capacity',
      image: '/frascos.webp'
    },
    { 
      id: 'jars', 
      title: 'productos.items.jars.title', 
      description: 'productos.items.jars.description',
      capacity: 'productos.items.jars.capacity',
      image: 'https://images.unsplash.com/photo-1594465919760-441fe5908ab0?auto=format&fit=crop&q=80&w=1200'
    },
    { 
      id: 'vials', 
      title: 'productos.items.vials.title', 
      description: 'productos.items.vials.description',
      capacity: 'productos.items.vials.capacity',
      image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbbb88?auto=format&fit=crop&q=80&w=1200'
    },
  ];

  return (
    <section id="productos" className="bg-[#080808] relative overflow-hidden py-24 sm:py-32">
      {/* Section Header - Now at the beginning of the module */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          <span className="text-[10px] text-accent tracking-[0.3em] uppercase font-bold mb-4 block">
            {t('productos.subtitle')}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-white tracking-tight leading-tight mb-6">
            {t('productos.title')}
          </h2>
          <p className="text-white/60 text-lg font-light max-w-2xl leading-relaxed">
            Ofrecemos soluciones innovadoras y personalizadas para cada sector, garantizando la máxima calidad en cada envase.
          </p>
        </motion.div>
      </div>

      {/* Hero Background Video Container */}
      <div className="relative min-h-[600px] flex items-center overflow-hidden py-20">
        <div className="absolute inset-0 z-0">
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            onLoadedData={handleVideoLoad}
            onCanPlay={handleVideoLoad}
            className={`w-full h-full object-cover transition-opacity duration-1000 ${videoLoaded ? 'opacity-100' : 'opacity-0'}`}
          >
            <source src="/productos-hero.mp4" type="video/mp4" />
          </video>
          {/* Fallback Image while loading */}
          {!videoLoaded && (
            <img loading="lazy" 
              src="/fondoproductos.webp" 
              alt="Product background fallback"
              className="absolute inset-0 w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          )}
          {/* Dark Overlays for readability */}
          <div className="absolute inset-0 bg-black/40 lg:bg-black/30" />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          {/* Floating Product Cards Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {products.map((product, index) => (
              <motion.div 
                key={product.id}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.1, 
                  ease: [0.21, 0.47, 0.32, 0.98] 
                }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group relative p-8 backdrop-blur-xl border transition-all duration-500 rounded-2xl flex flex-col justify-between min-h-[220px] bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20"
              >
                <div>
                  <h3 className="text-xl font-bold text-white mb-3 tracking-tight group-hover:text-accent transition-colors">
                    {t(product.title)}
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed line-clamp-3">
                    {t(product.description)}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
                  <span className="text-accent text-[10px] tracking-[0.2em] uppercase font-bold">
                    {t(product.capacity)}
                  </span>
                  <button 
                    onClick={() => setSelectedProduct(product)}
                    className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-300 hover:scale-110 active:scale-90"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8 bg-black/90 backdrop-blur-sm"
            onClick={() => setSelectedProduct(null)}
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="relative max-w-5xl w-full aspect-video bg-[#0a0a0a] rounded-3xl overflow-hidden shadow-2xl border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedProduct(null)}
                className="absolute top-6 right-6 z-10 w-10 h-10 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="absolute inset-0">
                <img loading="lazy" 
                  src={selectedProduct.image} 
                  alt={t(selectedProduct.title)}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-12">
                <span className="text-accent text-[10px] tracking-[0.3em] uppercase font-bold mb-2 block">
                  {t(selectedProduct.capacity)}
                </span>
                <h3 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
                  {t(selectedProduct.title)}
                </h3>
                <p className="text-white/70 text-lg font-light max-w-2xl leading-relaxed">
                  {t(selectedProduct.description)}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

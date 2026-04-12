import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export const NosotrosPage = () => {
  const { t } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const gridItems = [
    { type: 'image', src: '/staff_group.png', span: 'col-span-2 row-span-2' },
    { type: 'image', src: '/staff_meeting.png', span: 'col-span-1 row-span-1' },
    { 
      type: 'text', 
      contentKey: 'nosotros.p1', 
      bg: 'bg-accent/10',
      span: 'col-span-1 row-span-1'
    },
    { type: 'image', src: '/scientist.png', span: 'col-span-1 row-span-2' },
    { type: 'image', src: '/technician_portrait.png', span: 'col-span-1 row-span-1' },
    { 
      type: 'text', 
      contentKey: 'nosotros.p2', 
      bg: 'bg-zinc-900',
      span: 'col-span-2 row-span-1'
    },
    { type: 'image', src: '/logistics.png', span: 'col-span-1 row-span-1' },
    { type: 'image', src: '/production.png', span: 'col-span-1 row-span-1' },
    { 
      type: 'text', 
      contentKey: 'nosotros.p3', 
      bg: 'bg-accent/5',
      span: 'col-span-2 row-span-1'
    },
  ];

  return (
    <div className="min-h-screen bg-black pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-white/40 hover:text-white transition-colors mb-12 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span className="text-[10px] uppercase font-bold tracking-widest">Volver</span>
        </Link>
        
        <header className="mb-16">
          <span className="text-[10px] text-accent tracking-[0.3em] uppercase font-bold mb-4 block">Nuestro Equipo</span>
          <h1 className="text-4xl lg:text-6xl font-light text-white tracking-tight">
            Equipo, Compromiso y <span className="text-accent italic">Pasión por nuestro trabajo</span>
          </h1>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[300px] gap-4">
          {gridItems.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              className={`${item.span} relative overflow-hidden rounded-sm group`}
            >
              {item.type === 'image' ? (
                <img 
                  src={item.src} 
                  alt="Equipo Central de Envasados"
                  className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                />
              ) : (
                <div className={`${item.bg} h-full p-8 flex flex-col justify-center border border-white/5`}>
                  <p className="text-white/70 text-sm leading-relaxed font-light italic">
                    "{t(item.contentKey as any)}"
                  </p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

import React from 'react';
import { motion } from 'motion/react';
import { Factory, ShieldCheck, Beaker, Droplets, Warehouse } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const Instalaciones = () => {
  const { t } = useLanguage();
  
  const facilityItems = [
    { id: 'manufacturing', icon: Factory, title: 'instalaciones.manufacturing.title', description: 'instalaciones.manufacturing.description' },
    { id: 'cleanrooms', icon: ShieldCheck, title: 'instalaciones.cleanrooms.title', description: 'instalaciones.cleanrooms.description' },
    { id: 'sterile', icon: Beaker, title: 'instalaciones.sterile.title', description: 'instalaciones.sterile.description' },
    { id: 'water', icon: Droplets, title: 'instalaciones.water.title', description: 'instalaciones.water.description' },
    { id: 'food', icon: Factory, title: 'instalaciones.food.title', description: 'instalaciones.food.description' },
    { id: 'warehouse', icon: Warehouse, title: 'instalaciones.warehouse.title', description: 'instalaciones.warehouse.description' },
  ];

  const stats = [
    { value: '30', label: 'instalaciones.stats.lines' },
    { value: '6', label: 'instalaciones.stats.cleanrooms' },
    { value: '700', label: 'instalaciones.stats.water' },
    { value: '3000', label: 'instalaciones.stats.storage' },
  ];

  return (
    <section id="instalaciones" className="section-padding bg-black relative overflow-hidden min-h-screen flex items-center">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/sala_envasado_esteril.png" 
          alt="Instalaciones Central de Envasados" 
          className="w-full h-full object-cover opacity-38" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/12 to-black" />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="mb-20"
        >
          <span className="text-[10px] text-accent tracking-[0.3em] uppercase font-bold mb-4 block">Capacidad Industrial Certificada</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white/90 tracking-tight">Instalaciones: Arquitectura de Grado Farmacéutico</h2>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div 
              key={stat.label} 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group relative p-8 border border-white/10 text-center bg-white/[0.01] hover:border-accent/30 transition-all duration-500"
            >
              <div className="text-4xl font-light text-white mb-2 group-hover:text-accent transition-colors">{stat.value}</div>
              <div className="text-[9px] text-white/40 tracking-[0.2em] uppercase font-bold group-hover:text-white/60 transition-colors">{t(stat.label)}</div>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {facilityItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div 
                key={item.id}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group relative p-8 border border-white/10 hover:border-white/30 transition-all duration-500 bg-white/[0.01] hover:bg-white/[0.03] text-center"
              >
                <Icon className="w-6 h-6 text-white/60 mb-6 group-hover:text-accent transition-colors mx-auto" />
                <h3 className="text-lg font-light text-white mb-3 tracking-tight">{t(item.title)}</h3>
                <p className="text-white/40 text-sm leading-relaxed font-light">{t(item.description)}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  Factory, 
  ShieldCheck, 
  Droplets, 
  Warehouse, 
  Zap,
  Box,
  Utensils,
  Sparkles,
  ChevronRight
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const InstalacionesPage = () => {
  const { t } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const stats = [
    { value: '30', label: 'Líneas de Producción' },
    { value: '6', label: 'Salas Blancas Certificadas' },
    { value: '700', label: 'L/h Agua Purificada (Ph. Eur.)' },
    { value: '+5000', label: 'm² Capacidad Total' },
  ];

  const mainfacilities = [
    {
      id: 'manufacturing',
      icon: Factory,
      title: 'Fabricación de Grado Sanitario',
      description: 'Fabricación de fórmulas críticas bajo protocolos asépticos y control digital total.',
      image: '/Fabrication_room.webp'
    },
    {
      id: 'cleanrooms',
      icon: ShieldCheck,
      title: '6 Salas Blancas Certificadas',
      description: 'Instalaciones cualificadas para productos sanitarios con control continuo de partículas y carga microbiológica.',
      image: '/hero-sectores.jpg'
    },
    {
      id: 'water',
      icon: Droplets,
      title: 'Planta de Agua Purificada (700 L/h)',
      description: 'Garantía de calidad desde el origen. Suministro autónomo para fabricación y limpieza crítica.',
      image: '/pwplant.webp'
    }
  ];

  return (
    <div className="bg-black min-h-screen text-white mesh-gradient">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/factory.webp" 
            alt="Central de Envasados Exterior" 
            className="w-full h-full object-cover opacity-60" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/20 to-black z-10" />
        </div>
        
        <div className="relative z-20 page-container text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            <Link to="/" className="inline-flex items-center gap-3 text-white/80 text-[10px] font-bold uppercase tracking-[0.4em] mb-12 hover:text-white transition-all border border-white/20 px-8 py-4 bg-black/60 backdrop-blur-md rounded-full">
              <ArrowLeft className="w-3 h-3" />
              Regresar al Inicio
            </Link>
            <span className="page-subtitle mb-4 block">Arquitectura de Vanguardia</span>
            <h1 className="page-title text-white mb-8 text-balance uppercase italic">
              Grado <span className="text-accent underline decoration-accent/30 underline-offset-8">Sanitario</span>
            </h1>
            <p className="body-text max-w-2xl mx-auto mb-16 px-4">
              Una infraestructura única en Europa diseñada para superar los estándares de las industrias cosmética, sanitaria y alimentaria.
            </p>
          </motion.div>
        </div>

        {/* Floating Stats */}
        <div className="absolute bottom-12 left-0 right-0 z-30 px-4">
          <div className="page-container grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + (idx * 0.1) }}
                className="bg-white/[0.03] backdrop-blur-xl border border-white/10 p-6 md:p-8 text-center rounded-2xl"
              >
                <div className="text-2xl md:text-3xl font-light text-accent mb-2">{stat.value}</div>
                <div className="text-[9px] text-white/40 uppercase tracking-[0.2em] font-bold">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Intro Engineering Section */}
      <section className="py-24 md:py-36">
        <div className="page-container">
          <div className="relative overflow-hidden rounded-[2.5rem] min-h-[600px] border border-white/5 shadow-2xl">
            <img
              src="/instalaciones.webp"
              alt="Instalaciones de Vanguardia"
              className="absolute inset-0 w-full h-full object-cover opacity-70"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/20 to-transparent" />

            <div className="relative z-10 flex h-full items-center p-8 md:p-16">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="max-w-2xl"
              >
                <span className="page-subtitle mb-4 block text-accent">Ingeniería de Procesos</span>
                <h2 className="page-title text-white mb-10 text-balance italic uppercase">
                  Instalaciones de <br /><span className="text-accent">Vanguardia</span>
                </h2>
                <p className="body-text mb-14 text-balance">
                  Nuestras instalaciones no solo son espacio físico, son herramientas de precisión industrial. Cada m² ha sido proyectado para garantizar la estanqueidad absoluta y la calidad y seguridad en todos los procesos.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex gap-5 items-start p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl">
                    <Zap className="w-6 h-6 text-accent shrink-0 mt-1" />
                    <div>
                      <h4 className="text-white font-bold text-[10px] uppercase tracking-widest mb-2">Monitoreo Ambiental</h4>
                      <p className="text-white/40 text-[12px] font-light leading-relaxed">Control digital continuo en tiempo real de temperatura y humedad.</p>
                    </div>
                  </div>

                  <div className="flex gap-5 items-start p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl">
                    <Box className="w-6 h-6 text-accent shrink-0 mt-1" />
                    <div>
                      <h4 className="text-white font-bold text-[10px] uppercase tracking-widest mb-2">Flujo Unidireccional</h4>
                      <p className="text-white/40 text-[12px] font-light leading-relaxed">Diseño de procesos anti-error para la prevención de contaminación cruzada.</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Facilities Grid */}
      <section className="py-24 bg-zinc-950/40">
        <div className="page-container">
          <div className="grid lg:grid-cols-3 gap-8">
            {mainfacilities.map((fac, idx) => (
              <motion.div
                key={fac.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
                className="group relative h-[500px] overflow-hidden rounded-[2.5rem] border border-white/5 bg-zinc-900/50"
              >
                <img 
                  src={fac.image} 
                  alt={fac.title} 
                  className="w-full h-full object-cover opacity-40 transition-all duration-1000 group-hover:scale-110 group-hover:opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10" />
                <div className="absolute bottom-10 left-10 right-10 z-20">
                  <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center mb-6 border border-white/10">
                    <fac.icon className="w-5 h-5 text-accent" />
                  </div>
                  <h3 className="text-2xl font-light text-white mb-4 italic uppercase tracking-tight group-hover:text-accent transition-colors">{fac.title}</h3>
                  <p className="body-text text-sm">{fac.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialized Areas Grid */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 z-0 border-y border-white/5">
          <video
            src="/llenado.mp4"
            className="w-full h-full object-cover opacity-50 brightness-110"
            autoPlay
            muted
            loop
            playsInline
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
        </div>

        <div className="relative z-10 page-container">
          <div className="mb-20 flex flex-col items-start">
            <span className="page-subtitle mb-4 block">Especialización Técnica</span>
            <h2 className="page-title text-white mb-6 italic uppercase">
              Áreas <span className="text-accent underline decoration-accent/30 underline-offset-8">Especializadas</span>
            </h2>
            <div className="flex items-end gap-6">
              <span className="text-accent text-6xl md:text-8xl font-light leading-none">+5.000</span>
              <div className="flex flex-col pb-2 md:pb-4">
                <span className="text-white font-bold text-xl uppercase tracking-widest">m²</span>
                <span className="text-white/30 text-[10px] uppercase tracking-widest font-bold">Capacidad Total</span>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-20">
            {/* Sector Alimentación */}
            <div className="p-10 border border-white/10 bg-black/40 backdrop-blur-xl rounded-[2.5rem] flex flex-col h-full hover:border-accent/30 transition-all group">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center group-hover:bg-accent/30 transition-colors border border-accent/20">
                  <Utensils className="w-5 h-5 text-accent" />
                </div>
                <h4 className="text-white font-medium text-xl italic uppercase tracking-tight">Alimentación</h4>
              </div>
              <ul className="space-y-4 mb-8 flex-grow">
                <li className="flex justify-between items-center text-sm border-b border-white/5 pb-2">
                  <span className="text-white/40 font-light italic">Food Rooms Especializadas</span>
                  <span className="text-accent font-bold">6</span>
                </li>
                <li className="flex justify-between items-center text-sm border-b border-white/5 pb-2">
                  <span className="text-white/40 font-light italic">Líneas Sachets / Monodosis</span>
                  <span className="text-accent font-bold">4</span>
                </li>
                <li className="flex justify-between items-center text-sm">
                  <span className="text-white/40 font-light italic">Líneas Frascos / Botes</span>
                  <span className="text-accent font-bold">2</span>
                </li>
              </ul>
              <p className="text-[10px] text-accent/60 uppercase tracking-widest font-bold">Control de humedad activo</p>
            </div>

            {/* Sector Cosmética */}
            <div className="p-10 border border-white/10 bg-black/40 backdrop-blur-xl rounded-[2.5rem] flex flex-col h-full hover:border-accent/30 transition-all group">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center group-hover:bg-accent/30 transition-colors border border-accent/20">
                  <Sparkles className="w-5 h-5 text-accent" />
                </div>
                <h4 className="text-white font-medium text-xl italic uppercase tracking-tight">Cosmética</h4>
              </div>
              <ul className="space-y-4 mb-8 flex-grow">
                <li className="flex justify-between items-center text-sm border-b border-white/5 pb-2">
                  <span className="text-white/40 font-light italic">Salas Envasado Dedicadas</span>
                  <span className="text-accent font-bold">17</span>
                </li>
                <li className="flex justify-between items-center text-sm border-b border-white/5 pb-2">
                  <span className="text-white/40 font-light italic">Líneas de Frascos</span>
                  <span className="text-accent font-bold">14</span>
                </li>
                <li className="flex justify-between items-center text-sm">
                  <span className="text-white/40 font-light italic">Líneas Sachets / Sampling</span>
                  <span className="text-accent font-bold">3</span>
                </li>
              </ul>
              <p className="text-[10px] text-accent/60 uppercase tracking-widest font-bold">Manipulación texturas lujo</p>
            </div>

            {/* Sector Sanitario */}
            <div className="p-10 border border-white/10 bg-black/40 backdrop-blur-xl rounded-[2.5rem] flex flex-col h-full hover:border-accent/30 transition-all group">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center group-hover:bg-accent/30 transition-colors border border-accent/20">
                  <ShieldCheck className="w-5 h-5 text-accent" />
                </div>
                <h4 className="text-white font-medium text-xl italic uppercase tracking-tight">Sanitario</h4>
              </div>
              <ul className="space-y-4 mb-8 flex-grow">
                <li className="flex justify-between items-center text-sm border-b border-white/5 pb-2">
                  <span className="text-white/40 font-light italic">Salas Blancas (Sachets)</span>
                  <span className="text-accent font-bold">6</span>
                </li>
                <li className="flex justify-between items-center text-sm border-b border-white/5 pb-2">
                  <span className="text-white/40 font-light italic">Sala Envasado Estéril</span>
                  <span className="text-accent font-bold">1</span>
                </li>
                <li className="flex justify-between items-center text-sm">
                  <span className="text-white/40 font-light italic">Reactores Fabricación</span>
                  <span className="text-accent font-bold">2</span>
                </li>
              </ul>
              <p className="text-[10px] text-accent/60 uppercase tracking-widest font-bold">Almacén de componentes exclusivo</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-10 border border-white/10 bg-white/[0.03] backdrop-blur-xl rounded-[2rem] flex items-center justify-between hover:border-accent/30 transition-all group">
              <div>
                <h5 className="text-white font-medium uppercase tracking-widest text-xs mb-2 italic">Capacidad Logística</h5>
                <p className="text-white/40 text-sm font-light">3 muelles de carga y descarga con flujo continuo.</p>
              </div>
              <Warehouse className="w-8 h-8 text-white/20 group-hover:text-accent/40 transition-colors" />
            </div>
            <div className="p-10 border border-white/10 bg-white/[0.03] backdrop-blur-xl rounded-[2rem] flex items-center justify-between hover:border-accent/30 transition-all group">
              <div>
                <h5 className="text-white font-medium uppercase tracking-widest text-xs mb-2 italic">Infraestructura Total</h5>
                <p className="text-white/40 text-sm font-light">30 líneas de envasado operativas simultáneamente.</p>
              </div>
              <Factory className="w-8 h-8 text-white/20 group-hover:text-accent/40 transition-colors" />
            </div>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-40 bg-zinc-950/20 text-center relative overflow-hidden">
        <div className="page-container relative z-10">
          <h2 className="page-title text-white mb-10 text-balance italic uppercase">
            ¿Desea conocer nuestra <br />capacidad tecnológica en <span className="text-accent">detalle?</span>
          </h2>
          <p className="body-text max-w-xl mx-auto mb-16">
            Estamos a su disposición para ofrecerle toda la información necesaria para que su equipo de calidad conozca cada rincón de nuestra operativa.
          </p>
          <Link 
            to="/#contacto" 
            className="group relative inline-flex items-center gap-6 px-14 py-6 bg-white text-black hover:bg-accent hover:text-white uppercase text-xs font-black tracking-[0.4em] transition-all duration-500 rounded-full"
          >
            Ampliar Información
            <ChevronRight className="w-5 h-5 transition-transform duration-500 group-hover:translate-x-2" />
          </Link>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-accent/5 to-transparent opacity-30" />
      </section>
    </div>
  );
};
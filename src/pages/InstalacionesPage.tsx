import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  Factory, 
  ShieldCheck, 
  Beaker, 
  Droplets, 
  Warehouse, 
  Thermometer, 
  Settings2,
  ChevronRight,
  Sparkles,
  Zap,
  Box
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Footer } from '../components/Footer';

export const InstalacionesPage = () => {
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
      title: 'Fabricación de Grado Superior',
      description: 'Fabricación de fórmulas críticas bajo protocolos asépticos y control digital total.',
      image: '/production.png'
    },
    {
      id: 'cleanrooms',
      icon: ShieldCheck,
      title: '6 Salas Blancas Certificadas',
      description: 'Instalaciones cualificadas para productos sanitarios con control continuo de partículas y carga microbiológica.',
      image: '/sala_envasado_esteril.png'
    },
    {
      id: 'water',
      icon: Droplets,
      title: 'Planta de Agua Purificada (700 L/h)',
      description: 'Garantía de calidad desde el origen. Suministro autónomo para fabricación y limpieza crítica.',
      image: '/process_san.png'
    }
  ];

  return (
    <div className="bg-black min-h-screen text-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/factory.png" 
            alt="Central de Envasados Exterior" 
            className="w-full h-full object-cover" 
          />
          {/* Overlay to preserve text visibility */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/20 to-black z-10" />
        </div>
        
        <div className="relative z-20 text-center px-4 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <Link to="/" className="inline-flex items-center gap-3 text-white/80 text-[10px] font-bold uppercase tracking-[0.4em] mb-12 hover:text-white transition-all border border-white/20 px-8 py-4 bg-black/60 backdrop-blur-md">
              <ArrowLeft className="w-3 h-3" />
              Regresar al Inicio
            </Link>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-light text-white mb-8 tracking-tighter leading-tight uppercase italic">
              Arquitectura de <span className="text-accent underline decoration-accent/30 underline-offset-8">Grado Farmacéutico</span>
            </h1>
            <p className="max-w-2xl mx-auto text-white/60 text-lg lg:text-xl font-light leading-relaxed mb-16 px-4">
              Una infraestructura única en Europa diseñada para superar los estándares de las industrias cosmética, sanitaria y alimentaria.
            </p>
          </motion.div>
        </div>

        {/* Floating Stats over Hero */}
        <div className="absolute bottom-12 left-0 right-0 z-30 px-4">
          <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + (idx * 0.1) }}
                className="bg-black/60 backdrop-blur-xl border border-white/10 p-8 text-center"
              >
                <div className="text-3xl font-light text-accent mb-2">{stat.value}</div>
                <div className="text-[9px] text-white/40 uppercase tracking-[0.2em] font-bold">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Intro Engineering Section - Contained Background Style */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-2xl bg-zinc-900 min-h-[75vh] flex items-center p-12 sm:p-24 shadow-2xl">
            <div className="absolute inset-0 z-0">
              <img 
                src="/instalaciones.webp" 
                alt="Fondo Instalaciones" 
                className="w-full h-full object-cover" 
              />
              <div className="absolute inset-0 bg-black/60 z-10" />
              <div className="absolute inset-0 bg-gradient-to-r from-black via-black/30 to-transparent z-10" />
            </div>
            
            <div className="relative z-20 w-full">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="max-w-3xl"
                >
                  <h2 className="text-4xl sm:text-6xl font-light text-white mb-8 tracking-tight italic uppercase leading-tight">
                    Instalaciones de <br /><span className="text-accent">Vanguardia</span>
                  </h2>
                  <p className="text-white/70 text-xl font-light leading-relaxed mb-12 max-w-2xl">
                    Nuestras instalaciones no solo son espacio físico, son herramientas de precisión industrial. Cada m² ha sido proyectado para garantizar la estanqueidad absoluta y el control digital total en tiempo real.
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="flex gap-5 items-start p-8 bg-black/50 backdrop-blur-xl border border-white/10 rounded-2xl">
                      <Zap className="w-6 h-6 text-accent shrink-0 mt-1" />
                      <div>
                        <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-2">Monitoreo Ambiental</h4>
                        <p className="text-white/40 text-[13px] font-light leading-relaxed">Control digital continuo en tiempo real de temperatura y humedad.</p>
                      </div>
                    </div>

                    <div className="flex gap-5 items-start p-8 bg-black/50 backdrop-blur-xl border border-white/10 rounded-2xl">
                      <Box className="w-6 h-6 text-accent shrink-0 mt-1" />
                      <div>
                        <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-2">Flujo Unidireccional</h4>
                        <p className="text-white/40 text-[13px] font-light leading-relaxed">Diseño de procesos anti-error para la prevención de contaminación.</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Facilities Grid */}
      <section className="py-20 bg-zinc-950/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {mainfacilities.map((fac, idx) => (
              <motion.div
                key={fac.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative h-[500px] overflow-hidden rounded-[40px] border border-white/5"
              >
                <img 
                  src={fac.image} 
                  alt={fac.title} 
                  className="w-full h-full object-cover opacity-50 transition-all duration-700 group-hover:scale-105 group-hover:opacity-70"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent z-10" />
                <div className="absolute bottom-10 left-10 right-10 z-20">
                  <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center mb-6">
                    <fac.icon className="w-5 h-5 text-accent" />
                  </div>
                  <h3 className="text-2xl font-light text-white mb-4 italic uppercase">{fac.title}</h3>
                  <p className="text-white/40 text-sm font-light leading-relaxed">{fac.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Areas Secondary Grid */}
      <section className="relative py-32 overflow-hidden bg-zinc-900/50">
        <div className="absolute inset-0 z-0">
          <img 
            src="/instalaciones.webp" 
            alt="Fondo Áreas Especializadas" 
            className="w-full h-full object-cover opacity-30" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/40 to-black z-10" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <h2 className="text-4xl font-light text-white italic uppercase tracking-tighter">Áreas <span className="text-accent">Especializadas</span></h2>
            <div className="h-px bg-white/20 flex-grow mx-8 hidden md:block" />
            <p className="text-white/40 text-right text-xs uppercase tracking-[0.3em] font-bold">Capacidad Total +5.000m²</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Sector Alimentación */}
            <div className="p-10 border border-white/5 bg-black/40 backdrop-blur-xl rounded-[40px] flex flex-col h-full hover:border-white/10 transition-colors">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-accent" />
                </div>
                <h4 className="text-white font-medium text-xl italic uppercase tracking-tight">Alimentación</h4>
              </div>
              <ul className="space-y-4 mb-8 flex-grow">
                <li className="flex justify-between items-center text-sm border-b border-white/5 pb-2">
                  <span className="text-white/40 font-light">Food Rooms Especializadas</span>
                  <span className="text-accent font-bold">6</span>
                </li>
                <li className="flex justify-between items-center text-sm border-b border-white/5 pb-2">
                  <span className="text-white/40 font-light">Líneas de Sachets / Monodosis</span>
                  <span className="text-accent font-bold">4</span>
                </li>
                <li className="flex justify-between items-center text-sm">
                  <span className="text-white/40 font-light">Líneas de Frascos / Botes</span>
                  <span className="text-accent font-bold">2</span>
                </li>
              </ul>
              <p className="text-[11px] text-white/30 uppercase tracking-widest font-bold">Climatización con control de humedad activo</p>
            </div>

            {/* Sector Cosmética y Perfumería */}
            <div className="p-10 border border-white/5 bg-black/40 backdrop-blur-xl rounded-[40px] flex flex-col h-full hover:border-white/10 transition-colors">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                  <Settings2 className="w-5 h-5 text-accent" />
                </div>
                <h4 className="text-white font-medium text-xl italic uppercase tracking-tight">Cosmética</h4>
              </div>
              <ul className="space-y-4 mb-8 flex-grow">
                <li className="flex justify-between items-center text-sm border-b border-white/5 pb-2">
                  <span className="text-white/40 font-light">Salas de Envasado Dedicadas</span>
                  <span className="text-accent font-bold">17</span>
                </li>
                <li className="flex justify-between items-center text-sm border-b border-white/5 pb-2">
                  <span className="text-white/40 font-light">Líneas de Frascos</span>
                  <span className="text-accent font-bold">14</span>
                </li>
                <li className="flex justify-between items-center text-sm">
                  <span className="text-white/40 font-light">Líneas de Sachets / Sampling</span>
                  <span className="text-accent font-bold">3</span>
                </li>
              </ul>
              <p className="text-[11px] text-white/30 uppercase tracking-widest font-bold">Manipulación de texturas y fragancias de lujo</p>
            </div>

            {/* Sector Sanitario / Pharma */}
            <div className="p-10 border border-accent/20 bg-accent/5 backdrop-blur-xl rounded-[40px] flex flex-col h-full ring-1 ring-accent/10 hover:border-accent/40 transition-all">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5 text-accent" />
                </div>
                <h4 className="text-white font-medium text-xl italic uppercase tracking-tight">Sanitario</h4>
              </div>
              <ul className="space-y-4 mb-8 flex-grow text-[13px]">
                <li className="flex justify-between items-center text-sm border-b border-white/10 pb-2">
                  <span className="text-white/60 font-light">Salas Blancas (Sachets)</span>
                  <span className="text-accent font-bold">6</span>
                </li>
                <li className="flex justify-between items-center text-sm border-b border-white/10 pb-2">
                  <span className="text-white/60 font-light">Sala Envasado Estéril (Frascos)</span>
                  <span className="text-accent font-bold">1</span>
                </li>
                <li className="flex justify-between items-center text-sm">
                  <span className="text-white/60 font-light">Reactores para fabricación</span>
                  <span className="text-accent font-bold">2</span>
                </li>
              </ul>
              <p className="text-[11px] text-accent/60 uppercase tracking-widest font-bold">Almacén de componentes exclusivo</p>
            </div>
          </div>

          {/* Logistics & Support Footer Area */}
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div className="p-10 border border-white/5 bg-black/30 backdrop-blur-md rounded-[40px] flex items-center justify-between">
              <div>
                <h5 className="text-white font-medium uppercase tracking-widest text-xs mb-2 italic">Capacidad Logística</h5>
                <p className="text-white/40 text-sm font-light">3 muelles de carga y descarga con flujo continuo.</p>
              </div>
              <Warehouse className="w-8 h-8 text-white/20" />
            </div>
            <div className="p-10 border border-white/5 bg-black/30 backdrop-blur-md rounded-[40px] flex items-center justify-between">
              <div>
                <h5 className="text-white font-medium uppercase tracking-widest text-xs mb-2 italic">Infraestructura Total</h5>
                <p className="text-white/40 text-sm font-light">30 líneas de envasado operativas simultáneamente.</p>
              </div>
              <Factory className="w-8 h-8 text-white/20" />
            </div>
          </div>
        </div>
      </section>

      {/* Closing Call to Action */}
      <section className="py-40 bg-zinc-950/20 relative overflow-hidden text-center">
        <div className="flex justify-center mb-12">
          <div className="px-8 py-2 border border-accent/30 bg-accent/5 rounded-full">
            <span className="text-[10px] text-accent font-bold uppercase tracking-[0.4em]">Visita Presencial o Virtual</span>
          </div>
        </div>
        <h2 className="text-3xl sm:text-5xl font-light text-white mb-10 tracking-tight leading-tight uppercase italic">¿Desea conocer nuestra <br />capacidad tecnológica en <span className="text-accent underline decoration-white/10 underline-offset-8">detalle?</span></h2>
        <p className="text-white/40 text-lg mb-16 max-w-xl mx-auto font-light">
          Ofrecemos auditorías presenciales y tours virtuales guiados para que su equipo de calidad conozca cada rincón de nuestra operativa.
        </p>
        <Link 
          to="/#contacto" 
          className="inline-flex items-center gap-6 px-14 py-6 bg-accent hover:bg-accent/80 text-white uppercase text-xs font-black tracking-[0.4em] transition-all shadow-2xl"
        >
          Agendar Auditoría
          <ChevronRight className="w-5 h-5 text-black" />
        </Link>
      </section>

      <Footer />
    </div>
  );
};

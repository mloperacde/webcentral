import { useEffect } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
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
import { PageMeta } from '../components/PageMeta';

export const InstalacionesPage = () => {
  const { t, language } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const isEn = language === 'en';

  const metaTitle = isEn ? 'Facilities | Central Envasados' : 'Instalaciones | Central Envasados';
  const metaDesc = isEn
    ? 'Over 5,000 m² of certified facilities. 30 production lines, 6 clean rooms and purified water plant.'
    : 'Más de 5.000 m² de instalaciones certificadas. 30 líneas de producción, 6 salas blancas y planta de agua purificada.';

  const copy = isEn
    ? {
        heroSubtitle: 'Cutting-Edge Architecture',
        heroTitlePrefix: 'Sanitary',
        heroTitleAccent: 'Grade',
        heroBody:
          'A unique infrastructure in Europe designed to exceed the standards of the cosmetic, healthcare, and food industries.',
        introPill: 'Process Engineering',
        introTitlePrefix: 'State-of-the-art',
        introTitleAccent: 'Facilities',
        introBody:
          'Our facilities are not just physical space; they are precision industrial tools. Every m² is designed to guarantee absolute airtightness, quality, and safety across all processes.',
        introFeature1Title: 'Environmental Monitoring',
        introFeature1Body: 'Continuous real-time digital control of temperature and humidity.',
        introFeature2Title: 'Unidirectional Flow',
        introFeature2Body: 'Error-proof process design to prevent cross-contamination.',
        specializedSubtitle: 'Technical Specialization',
        specializedTitle: 'Specialized',
        specializedTitleAccent: 'Areas',
        specializedMetricLabel1: 'm²',
        specializedMetricLabel2: 'Total Capacity',
        sectorFoodTitle: 'Food',
        sectorFoodRow1Label: 'Specialized Food Rooms',
        sectorFoodRow2Label: 'Sachets / Single-dose lines',
        sectorFoodRow3Label: 'Bottles / Jars lines',
        sectorFoodFooter: 'Active humidity control',
        sectorCosmeticsTitle: 'Cosmetics',
        sectorCosmeticsRow1Label: 'Dedicated packaging rooms',
        sectorCosmeticsRow2Label: 'Bottle lines',
        sectorCosmeticsRow3Label: 'Sachets / Sampling lines',
        sectorCosmeticsFooter: 'Luxury texture handling',
        sectorSanitaryTitle: 'Healthcare',
        sectorSanitaryRow1Label: 'Clean rooms (Sachets)',
        sectorSanitaryRow2Label: 'Sterile packaging room',
        sectorSanitaryRow3Label: 'Manufacturing reactors',
        sectorSanitaryFooter: 'Dedicated components warehouse',
        badge1Title: 'Logistics Capacity',
        badge1Body: '3 loading/unloading docks with continuous flow.',
        badge2Title: 'Total Infrastructure',
        badge2Body: '30 packaging lines operating simultaneously.',
        closingTitlePrefix: 'Would you like to know our',
        closingTitleAccent: 'technology capacity',
        closingTitleSuffix: 'in detail?',
        closingBody:
          'We are at your disposal to provide all the information your quality team needs to understand every corner of our operation.',
        closingCta: 'Request Details'
      }
    : {
        heroSubtitle: 'Arquitectura de Vanguardia',
        heroTitlePrefix: 'Grado',
        heroTitleAccent: 'Sanitario',
        heroBody:
          'Una infraestructura única en Europa diseñada para superar los estándares de las industrias cosmética, sanitaria y alimentaria.',
        introPill: 'Ingeniería de Procesos',
        introTitlePrefix: 'Instalaciones de',
        introTitleAccent: 'Vanguardia',
        introBody:
          'Nuestras instalaciones no solo son espacio físico, son herramientas de precisión industrial. Cada m² ha sido proyectado para garantizar la estanqueidad absoluta y la calidad y seguridad en todos los procesos.',
        introFeature1Title: 'Monitoreo Ambiental',
        introFeature1Body: 'Control digital continuo en tiempo real de temperatura y humedad.',
        introFeature2Title: 'Flujo Unidireccional',
        introFeature2Body: 'Diseño de procesos anti-error para la prevención de contaminación cruzada.',
        specializedSubtitle: 'Especialización Técnica',
        specializedTitle: 'Áreas',
        specializedTitleAccent: 'Especializadas',
        specializedMetricLabel1: 'm²',
        specializedMetricLabel2: 'Capacidad Total',
        sectorFoodTitle: 'Alimentación',
        sectorFoodRow1Label: 'Food Rooms Especializadas',
        sectorFoodRow2Label: 'Líneas Sachets / Monodosis',
        sectorFoodRow3Label: 'Líneas Frascos / Botes',
        sectorFoodFooter: 'Control de humedad activo',
        sectorCosmeticsTitle: 'Cosmética',
        sectorCosmeticsRow1Label: 'Salas Envasado Dedicadas',
        sectorCosmeticsRow2Label: 'Líneas de Frascos',
        sectorCosmeticsRow3Label: 'Líneas Sachets / Sampling',
        sectorCosmeticsFooter: 'Manipulación texturas lujo',
        sectorSanitaryTitle: 'Sanitario',
        sectorSanitaryRow1Label: 'Salas Blancas (Sachets)',
        sectorSanitaryRow2Label: 'Sala Envasado Estéril',
        sectorSanitaryRow3Label: 'Reactores Fabricación',
        sectorSanitaryFooter: 'Almacén de componentes exclusivo',
        badge1Title: 'Capacidad Logística',
        badge1Body: '3 muelles de carga y descarga con flujo continuo.',
        badge2Title: 'Infraestructura Total',
        badge2Body: '30 líneas de envasado operativas simultáneamente.',
        closingTitlePrefix: '¿Desea conocer nuestra',
        closingTitleAccent: 'capacidad tecnológica',
        closingTitleSuffix: 'en detalle?',
        closingBody:
          'Estamos a su disposición para ofrecerle toda la información necesaria para que su equipo de calidad conozca cada rincón de nuestra operativa.',
        closingCta: 'Ampliar Información'
      };

  const stats = isEn
    ? [
        { value: '30', label: 'Production Lines' },
        { value: '6', label: 'Certified Clean Rooms' },
        { value: '700', label: 'L/h Purified Water (Ph. Eur.)' },
        { value: '+5000', label: 'm² Total Capacity' }
      ]
    : [
        { value: '30', label: 'Líneas de Producción' },
        { value: '6', label: 'Salas Blancas Certificadas' },
        { value: '700', label: 'L/h Agua Purificada (Ph. Eur.)' },
        { value: '+5000', label: 'm² Capacidad Total' }
      ];

  const mainfacilities = isEn
    ? [
        {
          id: 'manufacturing',
          icon: Factory,
          title: 'Sanitary Grade Manufacturing',
          description: 'Critical formula manufacturing under aseptic protocols and full digital control.',
          image: '/Fabrication_room.webp'
        },
        {
          id: 'cleanrooms',
          icon: ShieldCheck,
          title: '6 Certified Clean Rooms',
          description: 'Qualified facilities for healthcare products with continuous particle and microbiological load control.',
          image: '/hero-sectores.jpg'
        },
        {
          id: 'water',
          icon: Droplets,
          title: 'Purified Water Plant (700 L/h)',
          description: 'Quality assurance from the source. Autonomous supply for manufacturing and critical cleaning.',
          image: '/pwplant.webp'
        }
      ]
    : [
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
    <>
    <PageMeta title={metaTitle} description={metaDesc} />
    <div className="bg-black min-h-screen text-white mesh-gradient">
      {/* Hero Section */}
      <section className="relative h-[100vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/factory.webp" 
            alt="Central de Envasados Exterior" 
            className="w-full h-full object-cover opacity-85" 
          />
          <div className="h-[720px] bg-gradient-to-b from-black/50 via-black/5 to-black/70 z-10" />
        </div>
        
        <div className="relative z-20 page-container text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="-translate-y-6 md:-translate-y-8"
          >

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-light text-white mb-6 text-balance uppercase italic tracking-tight leading-[0.95]">
              {isEn ? (
                <>
                  Architecture of <span className="text-accent">Sanitary Grade</span>
                </>
              ) : (
                <>
                  Arquitectura de <span className="text-accent">Grado Sanitario</span>
                </>
              )}
            </h1>
            <p className="text-lg sm:text-xl text-white/70 font-light leading-relaxed max-w-2xl mx-auto mb-10 px-4">
              {copy.heroBody}
            </p>
          </motion.div>
        </div>

        {/* Floating Stats */}
        <div className="absolute bottom-10 left-0 right-0 z-30 px-4">
          <div className="page-container grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + (idx * 0.1) }}
                className="bg-black/20 backdrop-blur-xl border border-white/10 p-5 md:p-7 text-center rounded-2xl"
              >
                <div className="text-2xl md:text-3xl font-light text-accent mb-2">{stat.value}</div>
                <div className="text-[9px] text-white/55 uppercase tracking-[0.2em] font-bold">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Intro Engineering Section */}
      <section className="py-24 md:py-36">
        <div className="page-container">
          <div className="relative overflow-hidden rounded-[1.5rem] min-h-[680px] md:min-h-[740px] border border-white/5 shadow-2xl">
            <img
              src="/instalaciones.webp"
              alt="Instalaciones de Vanguardia"
              className="absolute inset-0 w-full h-full object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/10 to-transparent" />

            <div className="relative z-10 flex h-full items-center p-8 md:p-16">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="max-w-2xl pt-10 pb-10"
              >
                <span className="page-subtitle mb-4 block text-accent">{copy.introPill}</span>
                <h2 className="text-3xl sm:text-5xl lg:text-6xl font-light text-white mb-10 text-balance italic uppercase tracking-tight">
                  {copy.introTitlePrefix} <br /><span className="text-accent">{copy.introTitleAccent}</span>
                </h2>
                <p className="body-text mb-14 text-balance">
                  {copy.introBody}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-24 md:mt-32">
                  <div className="flex gap-5 items-start p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl">
                    <Zap className="w-6 h-6 text-accent shrink-0 mt-1" />
                    <div>
                      <h4 className="text-white font-bold text-[10px] uppercase tracking-widest mb-2">{copy.introFeature1Title}</h4>
                      <p className="text-white/40 text-[12px] font-light leading-relaxed">{copy.introFeature1Body}</p>
                    </div>
                  </div>

                  <div className="flex gap-5 items-start p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl">
                    <Box className="w-6 h-6 text-accent shrink-0 mt-1" />
                    <div>
                      <h4 className="text-white font-bold text-[10px] uppercase tracking-widest mb-2">{copy.introFeature2Title}</h4>
                      <p className="text-white/40 text-[12px] font-light leading-relaxed">{copy.introFeature2Body}</p>
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
                className="group relative h-[400px] md:h-[500px] overflow-hidden rounded-[2.5rem] border border-white/10 bg-zinc-900/20"
              >
                <img 
                  src={fac.image} 
                  alt={fac.title} 
                  className="w-full h-full object-cover opacity-70 transition-all duration-1000 group-hover:scale-110 group-hover:opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent z-10" />
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
            <span className="page-subtitle mb-4 block">{copy.specializedSubtitle}</span>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-light text-white mb-6 italic uppercase tracking-tight">
              {copy.specializedTitle} <span className="text-accent underline decoration-accent/30 underline-offset-8">{copy.specializedTitleAccent}</span>
            </h2>
            <div className="flex items-end gap-6">
              <span className="text-accent text-6xl md:text-8xl font-light leading-none">+5.000</span>
              <div className="flex flex-col pb-2 md:pb-4">
                <span className="text-white font-bold text-xl uppercase tracking-widest">{copy.specializedMetricLabel1}</span>
                <span className="text-white/30 text-[10px] uppercase tracking-widest font-bold">{copy.specializedMetricLabel2}</span>
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
                <h4 className="text-white font-medium text-xl italic uppercase tracking-tight">{copy.sectorFoodTitle}</h4>
              </div>
              <ul className="space-y-4 mb-8 flex-grow">
                <li className="flex justify-between items-center text-sm border-b border-white/5 pb-2">
                  <span className="text-white/40 font-light italic">{copy.sectorFoodRow1Label}</span>
                  <span className="text-accent font-bold">6</span>
                </li>
                <li className="flex justify-between items-center text-sm border-b border-white/5 pb-2">
                  <span className="text-white/40 font-light italic">{copy.sectorFoodRow2Label}</span>
                  <span className="text-accent font-bold">4</span>
                </li>
                <li className="flex justify-between items-center text-sm">
                  <span className="text-white/40 font-light italic">{copy.sectorFoodRow3Label}</span>
                  <span className="text-accent font-bold">2</span>
                </li>
              </ul>
              <p className="text-[10px] text-accent/60 uppercase tracking-widest font-bold">{copy.sectorFoodFooter}</p>
            </div>

            {/* Sector Cosmética */}
            <div className="p-10 border border-white/10 bg-black/40 backdrop-blur-xl rounded-[2.5rem] flex flex-col h-full hover:border-accent/30 transition-all group">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center group-hover:bg-accent/30 transition-colors border border-accent/20">
                  <Sparkles className="w-5 h-5 text-accent" />
                </div>
                <h4 className="text-white font-medium text-xl italic uppercase tracking-tight">{copy.sectorCosmeticsTitle}</h4>
              </div>
              <ul className="space-y-4 mb-8 flex-grow">
                <li className="flex justify-between items-center text-sm border-b border-white/5 pb-2">
                  <span className="text-white/40 font-light italic">{copy.sectorCosmeticsRow1Label}</span>
                  <span className="text-accent font-bold">17</span>
                </li>
                <li className="flex justify-between items-center text-sm border-b border-white/5 pb-2">
                  <span className="text-white/40 font-light italic">{copy.sectorCosmeticsRow2Label}</span>
                  <span className="text-accent font-bold">14</span>
                </li>
                <li className="flex justify-between items-center text-sm">
                  <span className="text-white/40 font-light italic">{copy.sectorCosmeticsRow3Label}</span>
                  <span className="text-accent font-bold">3</span>
                </li>
              </ul>
              <p className="text-[10px] text-accent/60 uppercase tracking-widest font-bold">{copy.sectorCosmeticsFooter}</p>
            </div>

            {/* Sector Sanitario */}
            <div className="p-10 border border-white/10 bg-black/40 backdrop-blur-xl rounded-[2.5rem] flex flex-col h-full hover:border-accent/30 transition-all group">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center group-hover:bg-accent/30 transition-colors border border-accent/20">
                  <ShieldCheck className="w-5 h-5 text-accent" />
                </div>
                <h4 className="text-white font-medium text-xl italic uppercase tracking-tight">{copy.sectorSanitaryTitle}</h4>
              </div>
              <ul className="space-y-4 mb-8 flex-grow">
                <li className="flex justify-between items-center text-sm border-b border-white/5 pb-2">
                  <span className="text-white/40 font-light italic">{copy.sectorSanitaryRow1Label}</span>
                  <span className="text-accent font-bold">6</span>
                </li>
                <li className="flex justify-between items-center text-sm border-b border-white/5 pb-2">
                  <span className="text-white/40 font-light italic">{copy.sectorSanitaryRow2Label}</span>
                  <span className="text-accent font-bold">1</span>
                </li>
                <li className="flex justify-between items-center text-sm">
                  <span className="text-white/40 font-light italic">{copy.sectorSanitaryRow3Label}</span>
                  <span className="text-accent font-bold">2</span>
                </li>
              </ul>
              <p className="text-[10px] text-accent/60 uppercase tracking-widest font-bold">{copy.sectorSanitaryFooter}</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-10 border border-white/10 bg-white/[0.03] backdrop-blur-xl rounded-[2rem] flex items-center justify-between hover:border-accent/30 transition-all group">
              <div>
                <h5 className="text-white font-medium uppercase tracking-widest text-xs mb-2 italic">{copy.badge1Title}</h5>
                <p className="text-white/40 text-sm font-light">{copy.badge1Body}</p>
              </div>
              <Warehouse className="w-8 h-8 text-white/20 group-hover:text-accent/40 transition-colors" />
            </div>
            <div className="p-10 border border-white/10 bg-white/[0.03] backdrop-blur-xl rounded-[2rem] flex items-center justify-between hover:border-accent/30 transition-all group">
              <div>
                <h5 className="text-white font-medium uppercase tracking-widest text-xs mb-2 italic">{copy.badge2Title}</h5>
                <p className="text-white/40 text-sm font-light">{copy.badge2Body}</p>
              </div>
              <Factory className="w-8 h-8 text-white/20 group-hover:text-accent/40 transition-colors" />
            </div>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-40 bg-zinc-950/20 text-center relative overflow-hidden">
        <div className="page-container relative z-10">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-light text-white mb-10 text-balance italic uppercase tracking-tight">
            {copy.closingTitlePrefix} <br />{copy.closingTitleAccent} <span className="text-accent">{copy.closingTitleSuffix}</span>
          </h2>
          <p className="body-text max-w-xl mx-auto mb-16">
            {copy.closingBody}
          </p>
          <Link 
            to="/contacto" 
            className="group relative inline-flex items-center gap-6 px-14 py-6 bg-white text-black hover:bg-accent hover:text-white uppercase text-xs font-black tracking-[0.4em] transition-all duration-500 rounded-full"
          >
            {copy.closingCta}
            <ChevronRight className="w-5 h-5 transition-transform duration-500 group-hover:translate-x-2" />
          </Link>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-accent/5 to-transparent opacity-30" />
      </section>
    </div>
    </>
  );
};

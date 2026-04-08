import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  Sparkles, 
  Shield, 
  Beaker, 
  Leaf, 
  Settings2, 
  Microscope,
  CheckCircle2,
  ChevronRight
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Footer } from '../components/Footer';
import { Navigation } from '../components/Navigation';

const SectorDetail = ({ id, icon: Icon, title, description, features, image, content, details, processImage, position }: any) => {
  return (
    <div id={id} className="min-h-screen pt-32 pb-20 border-b border-white/5 relative overflow-hidden group">
      {/* Background with parallax-like effect */}
      <div className="absolute inset-0 z-0">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover opacity-30 grayscale-[0.3]" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="p-3 w-fit border border-accent/30 bg-accent/5 rounded-2xl mb-8">
              <Icon className="w-8 h-8 text-accent" />
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-7xl font-light text-white mb-8 tracking-tighter">
              {title}
            </h2>
            <p className="text-xl text-white/60 font-light leading-relaxed mb-10">
              {description}
            </p>
            
            <div className="flex flex-wrap gap-3 mb-12">
              {features.map((feature: string, idx: number) => (
                <span key={idx} className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-white/30 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em]">
                  {feature}
                </span>
              ))}
            </div>

            <div className="grid sm:grid-cols-2 gap-8">
              {details.map((detail: any, idx: number) => (
                <div key={idx} className="p-8 border border-white/5 bg-white/3 backdrop-blur-md hover:bg-white/10 transition-all duration-500 rounded-[2rem] group/card">
                  <detail.icon className="w-6 h-6 text-accent/60 group-hover/card:text-accent mb-4 transition-colors" />
                  <h4 className="text-white font-medium mb-2 tracking-tight">{detail.label}</h4>
                  <p className="text-white/40 text-sm font-light leading-relaxed">{detail.value}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="hidden lg:block relative aspect-[4/5]"
          >
            {/* The scene of action: isolated technical asset with CSS isolation */}
            <div className="relative w-full h-full overflow-hidden rounded-[4rem] border border-white/5 bg-black/40 backdrop-blur-sm shadow-2xl">
              <div 
                className="absolute inset-0 w-full h-full opacity-90 transition-opacity duration-700 hover:opacity-100"
                style={{
                  backgroundImage: `url(${processImage}?v=5)`,
                  backgroundSize: '300% 100%',
                  backgroundPosition: position === 'left' ? '0% 0%' : position === 'center' ? '50% 0%' : '100% 0%',
                  backgroundRepeat: 'no-repeat',
                  mixBlendMode: 'screen' as any
                }}
              />
              
              {/* Subtle technical glow surrounding the scene */}
              <div className="absolute inset-0 bg-accent/5 rounded-full blur-[150px] pointer-events-none -z-10" />
            </div>

            {/* The glass text window in front - elegant static position */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-[85%] p-10 border border-white/10 bg-black/50 backdrop-blur-3xl rounded-[3rem] shadow-xl overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
              <p className="relative z-10 text-white/95 font-light italic text-lg leading-relaxed text-center">
                "{content}"
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export const SectoresPage = () => {
  const { t } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sectorData = [
    {
      id: 'cosmetic',
      icon: Sparkles,
      title: 'Cosmética y Perfumería',
      description: 'Lideramos la fabricación y envasado de productos cosméticos de alta gama. Nuestra tecnología nos permite manejar texturas delicadas, fragancias exclusivas y envases innovadores.',
      features: ['Sachets', 'Frascos', 'EASY SNAP', 'Viales'],
      image: '/cosmetica.webp',
      processImage: '/process_black.png',
      position: 'left',
      content: 'Precisión absoluta en el manejo de principios activos y fragancias de lujo.',
      details: [
        { icon: Microscope, label: 'Control Microbológico', value: 'Análisis exhaustivo en laboratorio interno propio.' },
        { icon: Settings2, label: 'Dosificación Láser', value: 'Desde 1ml hasta 500ml con precisión nanométrica.' },
        { icon: Leaf, label: 'Clean Room ISO 22716', value: 'Ambientes controlados bajo estrictos protocolos de pureza.' },
        { icon: CheckCircle2, label: 'Luxury Finishing', value: 'Acabados de lujo y personalización premium para marcas exclusivas.' },
      ]
    },
    {
      id: 'sanitary',
      icon: Shield,
      title: 'Producto Sanitario',
      description: 'Garantizamos los más altos estándares de higiene y seguridad para el sector farmacéutico y sanitario. Cumplimos rigurosamente con la normativa europea ISO 13485.',
      features: ['Geles', 'Soluciones de Limpieza', 'Viales Sanitarios'],
      image: '/productosanitario.webp',
      processImage: '/process_black.png',
      position: 'center',
      content: 'Compromiso inquebrantable con la trazabilidad y la seguridad del paciente.',
      details: [
        { icon: Shield, label: 'Acreditación ISO 13485', value: 'Gestión de calidad integral para productos sanitarios.' },
        { icon: CheckCircle2, label: 'Registro AEMPS', value: 'Control riguroso y seguimiento de cada unidad fabricada.' },
        { icon: Settings2, label: 'Trazabilidad Digital', value: 'Sistemas avanzados para el seguimiento total del lote.' },
        { icon: Microscope, label: 'Validación Clínica', value: 'Pruebas constantes de estabilidad y hermeticidad.' },
      ]
    },
    {
      id: 'food',
      icon: Beaker,
      title: 'Alimentación',
      description: 'Soluciones de envasado innovadoras para el sector alimentario, desde suplementos nutricionales hasta aceites de oliva de alta gama. Especialistas en formatos monodosis.',
      features: ['Aceite de Oliva', 'Salsas Gourmet', 'Suplementos Líquidos'],
      image: '/alimentacion.webp',
      processImage: '/process_black.png',
      position: 'right',
      content: 'Innovación en conservación activa para preservar la frescura y pureza original.',
      details: [
        { icon: Leaf, label: 'Higiene de Grado Alimentario', value: 'Protocolos APPCC integrados en cada fase del proceso.' },
        { icon: Settings2, label: 'Especialistas Monodosis', value: 'Formatos inteligentes optimizados para el consumo On-the-Go.' },
        { icon: CheckCircle2, label: 'Protección contra Oxidación', value: 'Materiales barrera que triplican la vida útil del producto.' },
        { icon: Sparkles, label: 'Diseño Estructural', value: 'Envases ergonómicos que potencian la experiencia del consumidor.' },
      ]
    }
  ];

  return (
    <div className="bg-black min-h-screen text-white">
      {/* Wide Hero Subpage */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/laboratorio.webp" alt="Sectores" className="w-full h-full object-cover opacity-50 brightness-50" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black" />
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            <Link to="/" className="inline-flex items-center gap-3 text-white/80 text-[9px] font-bold uppercase tracking-[0.4em] mb-12 hover:text-white transition-all border border-white/20 px-8 py-4 bg-white/10 backdrop-blur-md">
              <ArrowLeft className="w-3 h-3" />
              Regresar al Inicio
            </Link>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-light text-white mb-8 tracking-tight leading-tight">
              Sectores de <span className="text-accent italic">Excelencia</span>
            </h1>
            <p className="max-w-2xl mx-auto text-white/50 text-lg lg:text-xl font-light leading-relaxed mb-16 px-4">
              Diseñamos ecosistemas de envasado a medida para las industrias más exigentes del mercado global.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              {sectorData.map(s => (
                <a 
                  key={s.id} 
                  href={`#${s.id}`}
                  className="px-6 py-4 border border-white/10 bg-white/5 hover:border-white/30 transition-all text-[9px] font-bold uppercase tracking-[0.2em] flex items-center gap-3 group"
                >
                  <s.icon className="w-4 h-4 text-accent/40 group-hover:text-accent transition-colors" />
                  {s.title}
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
        >
          <span className="text-[9px] text-white/20 uppercase tracking-[0.4em] [writing-mode:vertical-lr]">Scroll</span>
          <div className="w-px h-16 bg-gradient-to-b from-white/20 to-transparent" />
        </motion.div>
      </section>

      {/* Details Sections */}
      {sectorData.map((s, i) => (
        <SectorDetail key={s.id} {...s} />
      ))}

      {/* Corporate Badge Section */}
      <section className="py-40 bg-zinc-950/20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-block p-[0.5px] bg-gradient-to-r from-transparent via-white/20 to-transparent mb-12 w-full max-w-sm" />
          <h2 className="text-3xl sm:text-5xl font-light text-white mb-10 tracking-tight max-w-3xl mx-auto leading-tight">
            Elevamos su marca al siguiente nivel de <span className="text-accent italic">precisión táctil</span>.
          </h2>
          <Link 
            to="/#contacto" 
            className="px-12 py-5 bg-white/10 hover:bg-white/20 border border-white/10 text-white uppercase text-[10px] font-bold tracking-[0.3em] transition-all"
          >
            Iniciar una Consulta Técnica
          </Link>
        </div>
      </section>
    </div>
  );
};

import { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  Shield, 
  Beaker, 
  Leaf, 
  Settings2, 
  Microscope,
  CheckCircle2,
  ChevronRight,
  Droplets
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Footer } from '../components/Footer';
import { Navigation } from '../components/Navigation';
import { PageMeta } from '../components/PageMeta';

const SectorDetail = ({ id, icon: Icon, title, description, features, image, content, details, processImage, position, theme = 'accent' }: any) => {
  const isCyan = theme === 'cyan';
  const colorText = isCyan ? 'text-cyan-400' : 'text-accent';
  const colorBg = isCyan ? 'bg-cyan-400/5' : 'bg-accent/5';
  const colorBorder = isCyan ? 'border-cyan-400/30' : 'border-accent/30';
  const colorHoverText = isCyan ? 'group-hover/card:text-cyan-400' : 'group-hover/card:text-accent';
  const colorIconStart = isCyan ? 'text-cyan-400/60' : 'text-accent/60';

  return (
    <div id={id} className="min-h-screen pt-32 pb-20 border-b border-white/5 relative overflow-hidden group">
      {/* Background with parallax-like effect */}
      <div className="absolute inset-0 z-0">
        <img 
          src={image} 
          alt={title} 
          className="hidden w-full h-full object-cover opacity-30 grayscale-[0.3]" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-x-16 gap-y-12">
          {/* LEFT COLUMN: Content + Details */}
          <div className="flex flex-col gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className={`p-3 w-fit border ${colorBorder} ${colorBg} rounded-2xl mb-8`}>
                <Icon className={`w-8 h-8 ${colorText}`} />
              </div>
              <h2 className="text-4xl sm:text-5xl lg:text-7xl font-light text-white mb-8 tracking-tighter">
                {title}
              </h2>
              <p className="text-xl text-white/60 font-light leading-relaxed mb-10">
                {description}
              </p>
              
              <div className="flex flex-wrap gap-3">
                {features.map((feature: string, idx: number) => (
                  <span key={idx} className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-white/30 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em]">
                    {feature}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid sm:grid-cols-2 gap-8"
            >
              {details.map((detail: any, idx: number) => (
                <div key={idx} className="p-8 border border-white/5 bg-white/3 backdrop-blur-md hover:bg-white/10 transition-all duration-500 rounded-[2rem] group/card">
                  <detail.icon className={`w-6 h-6 ${colorIconStart} ${colorHoverText} mb-4 transition-colors`} />
                  <h4 className="text-white font-medium mb-2 tracking-tight text-[15px] sm:text-base">{detail.label}</h4>
                  <p className="text-white/40 text-[14px] sm:text-[15px] font-light leading-relaxed">{detail.value}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT COLUMN: Image + Content Card (Bottom Aligned) */}
          <div className="hidden lg:flex flex-col justify-end h-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="flex items-center justify-center relative w-full mb-12"
            >
              <img 
                src={processImage}
                alt={title}
                className="w-auto h-auto max-h-[400px] lg:max-h-[500px] max-w-full mx-auto object-contain"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="relative w-full p-8 border border-white/10 bg-black/50 backdrop-blur-3xl rounded-[2rem] shadow-xl overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
                <p className="relative z-10 text-white/95 font-light italic text-base leading-relaxed text-center">
                  "{content}"
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const SectoresPage = () => {
  const { language } = useLanguage();

  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5;
    }
  }, []);

  const isEn = language === 'en';

  const metaTitle = isEn ? 'Sectors | Central Envasados' : 'Sectores | Central Envasados';
  const metaDesc = isEn
    ? 'Specialized packaging solutions for cosmetics, healthcare and food sectors. Over 35 years of experience.'
    : 'Soluciones de envasado especializadas para sectores de cosmética, sanitario y alimentación. Más de 35 años de experiencia.';

  const copy = isEn
    ? {
        title: 'Sectors of',
        titleAccent: 'Excellence',
        subtitle:
          'We design custom packaging ecosystems for the most demanding industries in the global market.',
        explore: 'Explore',
        badgeTitle: 'From Concept to Market: Excellence in',
        badgeAccent: '360º Projects',
        badgeCta: 'Request Technical Dossier'
      }
    : {
        title: 'Sectores de',
        titleAccent: 'Excelencia',
        subtitle:
          'Diseñamos ecosistemas de envasado a medida para las industrias más exigentes del mercado global.',
        explore: 'Explorar',
        badgeTitle: 'Del Concepto al Mercado: Excelencia en',
        badgeAccent: 'Proyectos 360º',
        badgeCta: 'Solicitar Dossier Técnico'
      };

  const sectorData = isEn
    ? [
        {
          id: 'cosmetic',
          icon: Sparkles,
          title: 'Cosmetics & Perfumery',
          description:
            'We lead the manufacturing and packaging of high-end cosmetic products. Our technology allows us to handle delicate textures, exclusive fragrances, and innovative packaging.',
          features: ['Sachets', 'Bottles', 'Jars', 'Vials'],
          image: '/cosmetica.webp',
          processImage: '/sectors-isolated1.png',
          position: 'left',
          content: 'Absolute precision in handling active ingredients and luxury fragrances.',
          theme: 'accent',
          details: [
            { icon: Microscope, label: 'Microbiological Control', value: 'Thorough testing in our own in-house lab.' },
            { icon: Settings2, label: 'High-Precision Dosing', value: 'Accurate filling from 1 ml to 500 ml with minimal tolerance.' },
            { icon: Leaf, label: 'ISO 22716 Clean Room', value: 'Controlled environments under strict purity protocols.' },
            { icon: CheckCircle2, label: 'Luxury Finishing', value: 'Luxury finishes and premium customization for exclusive brands.' }
          ]
        },
        {
          id: 'sanitary',
          icon: Shield,
          title: 'Healthcare Grade & Sterile Packaging',
          description:
            'We simplify market entry for healthcare-grade products under an environment of absolute safety. We integrate 6 Clean Rooms, a Sterile Packaging Room, and our own Purified Water supply (700 L/h).',
          features: ['Sterile Packaging', '100% Traceability', 'Manufacturing Area'],
          image: '/productosanitario.webp',
          processImage: '/sectors-isolated2.png',
          position: 'center',
          content: 'Uncompromising commitment to purity, ISO 13485 certification, and AEMPS authorization.',
          theme: 'cyan',
          details: [
            { icon: Shield, label: 'ISO 13485 Accreditation', value: 'We operate under ISO 13485 and AEMPS authorization.' },
            { icon: Droplets, label: 'Purified Water (700 L/h)', value: 'Guaranteed aseptic quality from the source.' },
            { icon: Settings2, label: '100% Digital Traceability', value: 'Advanced systems for batch-level tracking.' },
            { icon: Microscope, label: 'Sterile Packaging', value: 'Strict aseptic conditions and total purity.' }
          ]
        },
        {
          id: 'food',
          icon: Beaker,
          title: 'Food',
          description:
            'Innovative packaging solutions for the food sector, from nutritional supplements to high-end olive oils. Specialists in single-dose formats.',
          features: ['Olive Oil', 'Food Supplements', 'Nutricosmetics'],
          image: '/alimentacion.webp',
          processImage: '/sectors-isolated3.png',
          position: 'right',
          content: 'Innovation in active preservation to keep original freshness and purity.',
          details: [
            { icon: Leaf, label: 'Food-Grade Hygiene', value: 'IFS protocols integrated into every phase of the process.' },
            { icon: Settings2, label: 'Single-Dose Specialists', value: 'Smart formats optimized for on-the-go consumption.' },
            { icon: CheckCircle2, label: 'Oxidation Protection', value: 'Barrier materials that extend shelf life significantly.' },
            { icon: Sparkles, label: 'Structural Design', value: 'Ergonomic packaging that enhances consumer experience.' }
          ]
        }
      ]
    : [
        {
          id: 'cosmetic',
          icon: Sparkles,
          title: 'Cosmética y Perfumería',
          description:
            'Lideramos la fabricación y envasado de productos cosméticos de alta gama. Nuestra tecnología nos permite manejar texturas delicadas, fragancias exclusivas y envases innovadores.',
          features: ['Sachets', 'Frascos', 'Tarros', 'Viales'],
          image: '/cosmetica.webp',
          processImage: '/sectors-isolated1.png',
          position: 'left',
          content: 'Precisión absoluta en el manejo de principios activos y fragancias de lujo.',
          theme: 'accent',
          details: [
            { icon: Microscope, label: 'Control Microbológico', value: 'Análisis exhaustivo en laboratorio interno propio.' },
            { icon: Settings2, label: 'Dosificación de Alta Precisión', value: 'Llenado exacto desde 1ml hasta 500ml con tolerancia mínima.' },
            { icon: Leaf, label: 'Clean Room ISO 22716', value: 'Ambientes controlados bajo estrictos protocolos de pureza.' },
            { icon: CheckCircle2, label: 'Luxury Finishing', value: 'Acabados de lujo y personalización premium para marcas exclusivas.' }
          ]
        },
        {
          id: 'sanitary',
          icon: Shield,
          title: 'Grado Sanitario & Envasado Estéril',
          description:
            'Simplificamos la entrada al mercado de productos sanitarios bajo un entorno de seguridad absoluta. Integramos 6 Salas Blancas, Sala de Envasado Estéril y suministro propio de Agua Purificada (700 L/h).',
          features: ['Envasado Estéril', 'Trazabilidad 100%', 'Zona de fabricación'],
          image: '/productosanitario.webp',
          processImage: '/sectors-isolated2.png',
          position: 'center',
          content: 'Compromiso inquebrantable con la pureza, certificación ISO 13485 y registro AEMPS.',
          theme: 'cyan',
          details: [
            { icon: Shield, label: 'Acreditación ISO 13485', value: 'Operamos bajo la norma ISO 13485 y autorización AEMPS.' },
            { icon: Droplets, label: 'Agua Purificada (700 L/h)', value: 'Garantía de calidad aséptica pura desde el origen.' },
            { icon: Settings2, label: 'Trazabilidad Digital 100%', value: 'Sistemas avanzados para seguimiento clínico del lote.' },
            { icon: Microscope, label: 'Envasado Estéril', value: 'Condiciones asépticas estrictas y pureza total.' }
          ]
        },
        {
          id: 'food',
          icon: Beaker,
          title: 'Alimentación',
          description:
            'Soluciones de envasado innovadoras para el sector alimentario, desde suplementos nutricionales hasta aceites de oliva de alta gama. Especialistas en formatos monodosis.',
          features: ['Aceite de Oliva', 'Complementos alimenticios', 'Nutricosmética'],
          image: '/alimentacion.webp',
          processImage: '/sectors-isolated3.png',
          position: 'right',
          content: 'Innovación en conservación activa para preservar la frescura y pureza original.',
          details: [
            { icon: Leaf, label: 'Higiene de Grado Alimentario', value: 'Protocolos IFS integrados en cada fase del proceso.' },
            { icon: Settings2, label: 'Especialistas Monodosis', value: 'Formatos inteligentes optimizados para el consumo On-the-Go.' },
            { icon: CheckCircle2, label: 'Protección contra Oxidación', value: 'Materiales barrera que triplican la vida útil del producto.' },
            { icon: Sparkles, label: 'Diseño Estructural', value: 'Envases ergonómicos que potencian la experiencia del consumidor.' }
          ]
        }
      ];

  return (
    <>
      <PageMeta title={metaTitle} description={metaDesc} />
    <div className="bg-black min-h-screen text-white">
      {/* Wide Hero Subpage with Video Background */}
      <section className="relative min-h-[95vh] flex flex-col justify-end md:justify-center lg:justify-end items-center pb-16 sm:pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video 
            ref={videoRef}
            autoPlay 
            loop 
            muted 
            playsInline 
            className="w-full h-full object-cover opacity-60 brightness-90"
          >
            <source src="/Video_Generado_Con_Tres_Imágenes.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black" />
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-light text-white mb-8 tracking-tight leading-tight">
              {copy.title} <span className="text-accent italic">{copy.titleAccent}</span>
            </h1>
            <p className="max-w-4xl mx-auto text-white/50 text-2xl lg:text-3xl font-light leading-relaxed mb-28 px-4 text-balance">
              {copy.subtitle}
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              {sectorData.map(s => (
                <a 
                  key={s.id} 
                  href={`#${s.id}`}
                  className="px-7 py-4 border border-white/10 bg-white/5 hover:border-white/30 transition-all text-[11px] sm:text-[12px] font-bold uppercase tracking-[0.2em] flex items-center gap-3 group"
                >
                  <s.icon className="w-5 h-5 text-accent/40 group-hover:text-accent transition-colors" />
                  {s.title}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="mt-8 flex flex-col items-center gap-4 pointer-events-none"
          >
            <span className="text-[9px] text-white/20 uppercase tracking-[0.4em] [writing-mode:vertical-lr]">{copy.explore}</span>
            <div className="w-px h-16 bg-gradient-to-b from-white/20 to-transparent" />
          </motion.div>
        </div>
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
            {copy.badgeTitle} <span className="text-accent italic">{copy.badgeAccent}</span>.
          </h2>
          <Link 
            to="/contacto" 
            className="px-12 py-5 bg-white/10 hover:bg-white/20 border border-white/10 text-white uppercase text-[10px] font-bold tracking-[0.3em] transition-all"
          >
            {copy.badgeCta}
          </Link>
        </div>
      </section>
    </div>
    </>
  );
};

import { useEffect, Fragment } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  Layers, 
  Container, 
  Cylinder, 
  FlaskConical,
  CheckCircle2,
  Settings2,
  Sparkles,
  ShieldCheck,
  ChevronRight,
  Stethoscope,
  Droplets,
  ShieldAlert
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Footer } from '../components/Footer';
import { Navigation } from '../components/Navigation';
import { PageMeta } from '../components/PageMeta';

const ProductSection = ({ id, icon: Icon, title, subtitle, description, image, specs, theme = 'accent', finalConfig }: any) => {
  const isCyan = theme === 'cyan';
  const colorText = isCyan ? 'text-sky-400' : 'text-accent';
  const colorBg = isCyan ? 'bg-sky-400/5' : 'bg-accent/5';
  const colorBorder = isCyan ? 'border-sky-400/30' : 'border-accent/30';
  const colorIcon = isCyan ? 'text-sky-400/60' : 'text-accent/60';

  const { scale = 1.1, x = 0, y = 0, size = 700 } = finalConfig || {};

  return (
    <div id={id} className="min-h-screen pt-32 pb-20 border-b border-white/5 relative overflow-hidden flex items-center mesh-gradient">
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />
      </div>

      <div className="relative z-10 page-container w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            <div className={`p-4 w-fit border ${colorBorder} ${colorBg} rounded-2xl mb-8 backdrop-blur-md`}>
              <Icon className={`w-8 h-8 ${colorText}`} />
            </div>
            <h2 className="page-title text-white mb-6 text-balance uppercase italic">
              {title}
            </h2>
            <h3 className={`page-subtitle ${colorText} mb-8`}>
              {subtitle}
            </h3>
            <p className="body-text mb-12 max-w-xl text-balance">
              {description}
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {specs.map((spec: any, idx: number) => (
                <div key={idx} className="flex items-start gap-4 p-6 border border-white/5 bg-white/[0.02] backdrop-blur-md rounded-2xl group hover:bg-white/[0.05] transition-all duration-500">
                  <spec.icon className={`w-5 h-5 ${colorIcon} shrink-0 mt-1 group-hover:scale-110 group-hover:rotate-6 transition-transform`} />
                  <div>
                    <h4 className="text-white font-medium mb-1 tracking-tight text-[12px] sm:text-[13px] uppercase">{spec.label}</h4>
                    <p className="text-white/40 text-[13px] sm:text-[14px] font-light leading-relaxed">{spec.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="flex items-center justify-center p-0"
          >
            <div className="relative w-full aspect-square" style={{ maxWidth: `${size}px` }}>
              <div className={`absolute inset-0 ${colorBg} blur-[120px] rounded-full opacity-25`} />
              <img 
                src={image} 
                alt={title} 
                className="relative z-10 w-full h-full object-contain filter drop-shadow-[0_0_50px_rgba(255,255,255,0.1)] transition-transform duration-300 max-lg:transform-none"
                style={{ 
                  transform: `scale(${scale}) translate(${x}px, ${y}px)` 
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export const ProductosPage = () => {
  const { t, language } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const metaTitle = language === 'en' ? 'Products | Central Envasados' : 'Productos | Central Envasados';
  const metaDesc = language === 'en'
    ? 'Custom packaging formats: sachets, bottles, jars and vials. Capacity of over 100 million units per year.'
    : 'Formatos de envasado a medida: sachets, frascos, tarros y viales. Capacidad de más de 100 millones de unidades al año.';

  const isEn = language === 'en';

  const copy = isEn
    ? {
        back: 'Back to Home',
        heroTitle: 'Innovation Formats',
        heroAccent: 'Innovation',
        heroBody:
          'Every product requires a specific environment and technology. Discover our range of tailored packaging solutions.',
        explore: 'Explore',
        sanitaryTableTitle: 'Current Production Capabilities',
        sanitaryCol1: 'Format',
        sanitaryCol2: 'Technical Specification',
        sanitaryCol3: 'Applications',
        sanitaryNote:
          'Regulatory note: Manufactured products are classified as Medical Devices (MDR 2017/745) or Advanced Hygiene, not as Medicines.',
        sanitaryScopeTitle: 'Development Scope',
        sanitaryCtaTitle: 'Do you have a healthcare-grade formulation in development?',
        sanitaryCtaBody:
          'We manage scale-up from pilot batch to industrial production while maintaining healthcare regulatory classification (non-pharmaceutical).',
        sanitaryCtaButton: 'Check Feasibility',
        sanitaryLegalTitle: 'Legal Disclaimer (AEMPS Compliance)',
        sanitaryGlobalCtaTitlePrefix: 'Do you have a project with a',
        sanitaryGlobalCtaTitleAccent: 'special format',
        sanitaryGlobalCtaBody:
          'Our team can adapt our lines for custom formats or exclusive developments.',
        sanitaryGlobalCtaButton: 'Talk to a specialist',
        aempsBadge: 'Manufacturing Authorized by AEMPS'
      }
    : {
        back: 'Regresar al Inicio',
        heroTitle: 'Formatos de Innovación',
        heroAccent: 'Innovación',
        heroBody:
          'Cada producto exige un entorno y una tecnología específicos. Descubre nuestra gama de soluciones de envasado a medida.',
        explore: 'Explorar',
        sanitaryTableTitle: 'Capacidades Productivas Actuales',
        sanitaryCol1: 'Formato',
        sanitaryCol2: 'Especificación Técnica',
        sanitaryCol3: 'Aplicaciones',
        sanitaryNote:
          'Nota regulatoria: Los productos fabricados se clasifican como Productos Sanitarios (MDR 2017/745) o Higiene Avanzada, no como Medicamentos.',
        sanitaryScopeTitle: 'Alcance de Desarrollo',
        sanitaryCtaTitle: '¿Tiene una formulación de Producto Sanitario en desarrollo?',
        sanitaryCtaBody:
          'Gestionamos el escalado desde lote piloto hasta producción industrial manteniendo la clasificación regulatoria sanitaria (no farmacéutica).',
        sanitaryCtaButton: 'Consultar Viabilidad',
        sanitaryLegalTitle: 'Disclaimer Legal (AEMPS Compliance)',
        sanitaryGlobalCtaTitlePrefix: '¿Tiene un proyecto con un',
        sanitaryGlobalCtaTitleAccent: 'formato especial',
        sanitaryGlobalCtaBody:
          'Nuestro equipo puede adaptar nuestras líneas para formatos a medida o desarrollos exclusivos.',
        sanitaryGlobalCtaButton: 'Consultar con un especialista',
        aempsBadge: 'Fabricación Autorizada por la AEMPS'
      };

  const productConfigs = {
    sachets: { scale: 1.4, x: 60, y: 75, size: 1000 },
    bottles: { scale: 1.4, x: 60, y: 75, size: 1000 },
    jars: { scale: 1.4, x: 60, y: 75, size: 1000 },
    vials: { scale: 1.5, x: 85, y: 115, size: 1000 },
    sanitary: { scale: 1.1, x: 0, y: 0, size: 700 },
    aemps: { scale: 0.65, x: 200, y: -10, size: 300 }
  };

  const productTypes = isEn
    ? [
        {
          id: 'sachets',
          icon: Layers,
          title: 'Sachets',
          subtitle: 'Smart Single-Dose',
          description:
            'The most versatile format for on-the-go consumption. Multi-layer technology that ensures maximum barrier performance and preservation.',
          image: '/sachets2.webp',
          theme: 'accent',
          specs: [
            { icon: Settings2, label: 'Flexibility', value: 'Flat formats, with wipe, or doypack. Pressure, ink, or laser coding.' },
            { icon: Sparkles, label: 'Finishes', value: 'Matte, gloss, or technical finishes. Secondary packaging, multipacks, or display boxes.' },
            { icon: CheckCircle2, label: 'Filling', value: 'From 1 ml to 100 ml with full precision. Liquids, viscous products, powders, and solids.' },
            { icon: ShieldCheck, label: 'Protection', value: 'Specific barrier materials (O₂, light).' }
          ]
        },
        {
          id: 'bottles',
          icon: Cylinder,
          title: 'Bottles',
          subtitle: 'Precision and Style',
          description:
            'Specialists in bottle filling for the cosmetic, perfumery, and food industries. Solutions for dense or fluid textures.',
          image: '/frascos.webp',
          theme: 'cyan',
          specs: [
            { icon: Settings2, label: 'Formats', value: 'Glass, plastic, PCR, or aluminum. Solutions for any labeling type.' },
            { icon: Sparkles, label: 'Closures', value: 'Pumps, droppers, or screw caps. Cartoning and cellophaning.' },
            { icon: CheckCircle2, label: 'Capacities', value: 'From small vials to large formats.' },
            { icon: ShieldCheck, label: 'Safety', value: 'Induction seals and tamper evidence. Coding for bottles and cartons (ink or laser).' }
          ]
        },
        {
          id: 'jars',
          icon: Container,
          title: 'Jars',
          subtitle: 'The Touch of Quality',
          description:
            'High-precision packaging for creams, balms, and dense products. Extreme care in handling to avoid bubbles and contamination.',
          image: '/tarros.webp',
          theme: 'accent',
          specs: [
            { icon: Settings2, label: 'Filling', value: 'Non-contact technology for maximum purity.' },
            { icon: Sparkles, label: 'Presentation', value: 'Perfect leveling and rim cleaning.' },
            { icon: CheckCircle2, label: 'Materials', value: 'PET, PP, glass, and luxury finishes.' },
            { icon: ShieldCheck, label: 'Control', value: '100% visual inspection of tubs.' }
          ]
        },
        {
          id: 'vials',
          icon: FlaskConical,
          title: 'Vials',
          subtitle: 'Millimetric Precision, Immaculate Presentation',
          description:
            'The benchmark format for high-value cosmetics and niche fragrances. From 1 ml for exclusive samples to 30 ml for premium travel sizes, neutral glass vials combine absolute transparency with the functional versatility demanded by the luxury market.',
          image: '/viales.webp',
          theme: 'cyan',
          specs: [
            { icon: Settings2, label: 'Precision', value: 'Minimal tolerances for critical products.' },
            { icon: Sparkles, label: 'Formats', value: 'We adapt the dosing system to product behavior: sprayers for perfume, stoppers for oils, or airless pumps.' },
            { icon: CheckCircle2, label: 'Versatility', value: 'Chrome screw cap, silicone stopper, dosing pump, micro-spray, roll-on.' },
            { icon: ShieldCheck, label: 'Presentation', value: 'Sample cards, miniatures, individual boxing, or premium collection sets.' }
          ]
        },
        {
          id: 'sanitary',
          icon: Stethoscope,
          isSpecial: true,
          title: 'Healthcare Range',
          subtitle: 'AEMPS healthcare authorization for specialized care products (non-medicines)',
          heroTitle: 'Medical Device. Advanced Hygiene Solutions',
          heroSubtitle: 'Healthcare rigor applied to specialized personal care',
          description:
            'Manufacturing under authorization from the Spanish Agency of Medicines and Medical Devices (AEMPS) for advanced hygiene healthcare products, explicitly excluding medicines. Specialized in maintenance eye care and hygiene solutions for sensitive areas—combining regulatory rigor with consumer usability.',
          image: '/productosanitario.webp',
          theme: 'cyan',
          pillars: [
            {
              id: '01',
              title: 'Guaranteed Purity',
              description:
                'In-house generation of Purified Water Ph. Eur. (European Pharmacopoeia) with continuous 700 L/h flow, ensuring maximum safety for the aqueous excipient.'
            },
            {
              id: '02',
              title: 'Eye Safety',
              description:
                'Specialization in maintenance eye care formulations in single-dose and multi-dose formats with technical dosing systems designed for comfort.'
            },
            {
              id: '03',
              title: 'No Prescription',
              description:
                'Advanced self-care products certified under healthcare regulation, optimized for distribution through specialized channels without prescription requirements.'
            }
          ],
          table: [
            {
              format: 'Ophthalmic Bottles',
              specs: '10 ml / 15 ml · Aptar-type screw-clip cap · Drop-by-drop dosing',
              apps: 'Eye hygiene, comfort eye lubricants (non-therapeutic)'
            },
            {
              format: 'Single-Dose Sachets',
              specs: '1 to 10 ml · Wipes in ophthalmic solution',
              apps: 'Eyelid cleansing, maintenance hygiene, specialized wipes'
            }
          ],
          reach: [
            'Mucosal hygiene solutions (nasal, auricular)',
            'Physiological saline for daily self-care hygiene',
            'Advanced personal care based on purified aqueous solutions'
          ],
          disclaimer:
            'Central de Envasados is authorized by AEMPS to manufacture healthcare products (category: medical hygiene and advanced personal care). We are not authorized to manufacture prescription medicines or OTC drugs. All production is carried out under healthcare product regulation.'
        }
      ]
    : [
        {
          id: 'sachets',
          icon: Layers,
          title: 'Sachets',
          subtitle: 'Monodosis Inteligente',
          description:
            'El formato más versátil para el consumo On-the-Go. Tecnología multicapa que garantiza máxima barrera y conservación.',
          image: '/sachets2.webp',
          theme: 'accent',
          specs: [
            { icon: Settings2, label: 'Flexibilidad', value: 'Formatos planos, con toallita o doypack. Codificación por presión, tinta o laser.' },
            { icon: Sparkles, label: 'Acabados', value: 'Mate, brillo o acabados técnicos. Acondicionamiento secundario, estuches de grupo o estuches expositores.' },
            { icon: CheckCircle2, label: 'Dosificación', value: 'De 1ml a 100ml con precisión total. Liquidos, viscosos, polvo y solidos.' },
            { icon: ShieldCheck, label: 'Protección', value: 'Materiales barrera específicos (O2, luz).' }
          ]
        },
        {
          id: 'bottles',
          icon: Cylinder,
          title: 'Frascos',
          subtitle: 'Precisión y Estilo',
          description:
            'Especialistas en el llenado de frascos para las industrias cosmética, perfumería y alimentaria. Soluciones para texturas densas o fluidas.',
          image: '/frascos.webp',
          theme: 'cyan',
          specs: [
            { icon: Settings2, label: 'Formatos', value: 'Vidrio, Plástico, PCR o Aluminio. Soluciones para cualquier tipo de etiquetado.' },
            { icon: Sparkles, label: 'Cierres', value: 'Bombas, cuentagotas o tapones de rosca. Estuchado y celofanado.' },
            { icon: CheckCircle2, label: 'Capacidades', value: 'Desde viales pequeños hasta gran formato.' },
            { icon: ShieldCheck, label: 'Seguridad', value: 'Sello de inducción y precintos. Codificación de envases y estuches tinta o laser.' }
          ]
        },
        {
          id: 'jars',
          icon: Container,
          title: 'Tarros',
          subtitle: 'El Tacto de la Calidad',
          description:
            'Envasado de alta precisión para cremas, bálsamos y productos densos. Cuidado extremo en la manipulación para evitar burbujas y contaminación.',
          image: '/tarros.webp',
          theme: 'accent',
          specs: [
            { icon: Settings2, label: 'Llenado', value: 'Tecnología sin contacto para máxima pureza.' },
            { icon: Sparkles, label: 'Presentación', value: 'Nivelado perfecto y limpieza de bordes.' },
            { icon: CheckCircle2, label: 'Materiales', value: 'PET, PP, Vidrio y acabados lujo.' },
            { icon: ShieldCheck, label: 'Control', value: 'Inspección visual del 100% de tarrinas.' }
          ]
        },
        {
          id: 'vials',
          icon: FlaskConical,
          title: 'Viales',
          subtitle: 'Precisión Milimétrica, Presentación Inmaculada',
          description:
            'El formato por excelencia para la cosmética de alto valor y las fragancias de nicho. Desde el 1 ml para muestras exclusivas hasta el 30 ml para formatos travel premium, los viales de cristal neutro combinan la transparencia absoluta del vidrio con la versatilidad funcional que exige el mercado del lujo.',
          image: '/viales.webp',
          theme: 'cyan',
          specs: [
            { icon: Settings2, label: 'Precisión', value: 'Tolerancias mínimas en productos críticos.' },
            { icon: Sparkles, label: 'Formatos', value: 'Adaptamos el sistema de dosificación al comportamiento del producto: pulverizadores para perfume, stoppers para aceites o bombas airless.' },
            { icon: CheckCircle2, label: 'Versatilidad', value: 'Tapón rosca cromado, stopper siliconado, bomba dosificadora, pulverizador micro-spray, roll-on.' },
            { icon: ShieldCheck, label: 'Presentación', value: 'Cartelas para muestras, miniaturas, estuchado individual o de colecciones premium.' }
          ]
        },
        {
          id: 'sanitary',
          icon: Stethoscope,
          isSpecial: true,
          title: 'Gama Sanitaria',
          subtitle: 'Certificación sanitaria AEMPS para productos de cuidado especializado (no medicamentos)',
          heroTitle: 'Producto Sanitario. Soluciones de Higiene Avanzada',
          heroSubtitle: 'Rigor Sanitario aplicado al Cuidado Personal Especializado',
          description:
            'Fabricación bajo autorización de la Agencia Española de Medicamentos para Productos Sanitarios de Higiene, excluyendo expresamente medicamentos. Especializados en cuidado ocular de mantenimiento y soluciones de higiene para zonas sensibles, combinando el rigor de la normativa sanitaria con la usabilidad del consumidor final.',
          image: '/productosanitario.webp',
          theme: 'cyan',
          pillars: [
            {
              id: '01',
              title: 'Pureza Garantizada',
              description:
                'Generación in-house de Agua Purificada Ph. Eur. (Farmacopea Europea) con caudal continuo de 700 L/h, garantizando la máxima seguridad en el excipiente acuoso.'
            },
            {
              id: '02',
              title: 'Seguridad Ocular',
              description:
                'Especialización en formulaciones de mantenimiento ocular en formato monodosis y multidosis con sistemas de dosificación técnica diseñados para el confort.'
            },
            {
              id: '03',
              title: 'Sin Prescripción',
              description:
                'Productos de autocuidado avanzados certificados bajo normativa sanitaria, optimizados para su distribución en canales especializados sin requisitos de receta.'
            }
          ],
          table: [
            {
              format: 'Frascos Oftálmicos',
              specs: '10 ml / 15 ml · Tapón rosca-clip tipo Aptar · Dosificación gota a gota',
              apps: 'Higiene ocular, lubricantes oculares de confort (no terapéuticos)'
            },
            {
              format: 'Sachets Monodosis',
              specs: '1 a 10 ml · Toallitas en solución oftalmológica',
              apps: 'Limpieza palpebral, higiene de mantenimiento, wipes especializados'
            }
          ],
          reach: [
            'Soluciones de higiene mucosa (nasal, auricular)',
            'Sueros fisiológicos de autocuidado para higiene diaria',
            'Cuidado personal avanzado de base acuosa purificada'
          ],
          disclaimer:
            'Central de Envasados cuenta con autorización AEMPS para fabricación de Productos Sanitarios (categoría: higiene médica y cuidado personal avanzado). No estamos autorizados para medicamentos de prescripción ni venta libre (OTC). Toda la producción se realiza bajo normativa de Productos Sanitarios.'
        }
      ];

  return (
    <>
      <PageMeta title={metaTitle} description={metaDesc} />
    <div className="bg-black min-h-screen text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#080808]">
        <div className="absolute inset-0 z-0 flex items-center justify-center">
          <img 
            src="/cabecera_productos.webp" 
            alt="Productos Central de Envasados" 
            className="w-full h-full object-contain opacity-80 brightness-100 transform translate-y-8" 
          />
          {/* Enhanced Dark Veil - 80% intensity feel */}
          <div className="absolute inset-0 bg-black/35 z-10" />
          
          {/* Minimal Bottom Fade - Only to transition to background */}
          <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#080808] to-transparent z-20" />
          
          {/* Top Fade for navigation */}
          <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-black/70 to-transparent z-20" />
        </div>
        
        <div className="relative z-30 text-center px-4 max-w-5xl mt-auto pb-44">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <Link to="/" className="inline-flex items-center gap-3 text-white/80 text-[10px] font-bold uppercase tracking-[0.4em] mb-12 hover:text-white transition-all border border-white/20 px-8 py-4 bg-black/60 backdrop-blur-md">
              <ArrowLeft className="w-3 h-3" />
              {copy.back}
            </Link>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-light text-white mb-6 tracking-tighter leading-tight uppercase italic drop-shadow-2xl">
              {isEn ? (
                <>
                  <span className="text-accent underline decoration-accent/30 underline-offset-8">Innovation</span> Formats
                </>
              ) : (
                <>
                  Formatos de <span className="text-accent underline decoration-accent/30 underline-offset-8">Innovación</span>
                </>
              )}
            </h1>
            <p className="max-w-2xl mx-auto text-white/60 text-base lg:text-lg font-light leading-relaxed mb-12 px-4 py-2">
              {copy.heroBody}
            </p>
            
            <div className="flex flex-wrap justify-center gap-3">
              {productTypes.map(p => (
                <a 
                  key={p.id} 
                  href={`#${p.id}`}
                  className="px-8 py-4 border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/30 transition-all text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.3em] flex items-center gap-3 group"
                >
                  <p.icon className="w-5 h-5 text-accent/60 group-hover:text-accent group-hover:scale-110 transition-all" />
                  {p.title}
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator - Moved lower and higher z-index */}
        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 z-40 opacity-40"
        >
          <span className="text-[9px] text-white uppercase tracking-[0.4em] [writing-mode:vertical-lr]">{copy.explore}</span>
          <div className="w-px h-10 bg-white" />
        </motion.div>
      </section>

      {/* Product Category Sections */}
      {productTypes.map((p) => (
        p.isSpecial ? (
          <div key={p.id} id={p.id} className="relative overflow-hidden pt-48">
            {/* ... (Gama Sanitaria header and content) */}
            <div className="relative h-[60vh] flex items-center mb-32">
              <div className="absolute inset-0 z-0">
                <img 
                  src={p.image} 
                  alt={p.title} 
                  className="w-full h-full object-cover opacity-40 brightness-75 transition-all duration-700 hover:scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black to-transparent" />
              </div>

              <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="max-w-3xl">
                  <div className="flex items-center gap-4 text-sky-400 mb-8">
                    <Stethoscope className="w-6 h-6 shrink-0" />
                    <span className="text-xs font-bold tracking-[0.5em] uppercase">{p.subtitle}</span>
                  </div>
                  <h2 className="text-3xl sm:text-5xl font-light text-white mb-8 tracking-tighter leading-tight italic uppercase">
                    {p.heroTitle}
                  </h2>
                  <p className="text-sky-400 text-sm font-bold tracking-widest uppercase mb-12 border-l-2 border-sky-400 pl-6 bg-sky-400/5 py-4 inline-block pr-12 rounded-r-2xl">
                    {p.heroSubtitle}
                  </p>
                </div>
              </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* Introduction Text with AEMPS Logo - 65/35 Split */}
              <div className="mb-24 flex flex-col lg:grid lg:grid-cols-[1.8fr_1fr] items-stretch gap-16">
                <div className="flex flex-col justify-center">
                  <p className="text-white/50 text-xl leading-relaxed font-light">
                    {p.description}
                  </p>
                </div>
                <div className="flex justify-center items-center">
                  <div 
                    className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl flex flex-col justify-center items-center transition-all duration-300 overflow-hidden w-full max-w-[700px] lg:scale-[0.65] lg:translate-x-[200px] lg:-translate-y-[10px]"
                  >
                    <img 
                      src="/logo_aemps_ministerio.jpg" 
                      alt={isEn ? 'AEMPS ministry logo' : 'Logo AEMPS Ministerio'} 
                      className="w-full h-auto object-contain"
                    />
                    <div className="mt-8 text-[10px] text-zinc-900 uppercase text-center font-bold tracking-[0.3em] leading-normal border-t border-zinc-100 pt-6 w-full">
                      {copy.aempsBadge}
                    </div>
                  </div>
                </div>
              </div>

              {/* Pillars */}
              <div className="grid md:grid-cols-3 gap-8 mb-32">
                {p.pillars.map((pillar: any, idx: number) => (
                  <div key={idx} className="p-10 border border-white/5 bg-sky-500/\[0.03\] backdrop-blur-md rounded-3xl hover:bg-sky-400/5 hover:border-sky-400/20 transition-all group">
                    <span className="text-sky-400 text-4xl font-black mb-6 block transition-colors italic">{pillar.id}</span>
                    <h4 className="text-white font-medium mb-4 text-xl uppercase tracking-tight italic">{pillar.title}</h4>
                    <p className="text-white/40 text-[14px] leading-relaxed font-light">{pillar.description}</p>
                  </div>
                ))}
              </div>

              {/* Comparison Section with Table */}
              <div className="mb-32">
                <h3 className="text-white/90 text-2xl font-light mb-12 flex items-center gap-4 italic uppercase tracking-widest">
                  <span className="h-px w-12 bg-sky-400/30"></span>
                  {copy.sanitaryTableTitle}
                </h3>
                <div className="overflow-x-auto rounded-3xl border border-white/5">
                  <table className="w-full text-left border-collapse bg-sky-500/\[0.02\]">
                    <thead>
                        <tr className="border-b border-white/10 text-white/30 text-[11px] uppercase font-bold tracking-[0.2em] bg-sky-500/\[0.03\]">
                        <th className="py-8 px-10">{copy.sanitaryCol1}</th>
                        <th className="py-8 px-10">{copy.sanitaryCol2}</th>
                        <th className="py-8 px-10">{copy.sanitaryCol3}</th>
                      </tr>
                    </thead>
                    <tbody className="text-white/80">
                      {p.table.map((row: any, idx: number) => (
                        <tr key={idx} className="border-b border-white/5 last:border-0 hover:bg-sky-500/\[0.03\] transition-colors">
                          <td className="py-8 px-10 font-medium text-sky-400 italic uppercase text-sm tracking-widest">{row.format}</td>
                          <td className="py-8 px-10 text-[14px] font-light leading-relaxed">{row.specs}</td>
                          <td className="py-8 px-10 text-[14px] font-light text-white/40">{row.apps}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                {/* Reference Images for Sanitary Formats */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-24 mb-16">
                  <div className="group">
                    <div className="rounded-[40px] overflow-hidden border border-white/10 bg-white/[0.03] aspect-[4/3] relative mb-6 p-8 flex items-center justify-center">
                      <img 
                        src="/colirios.webp" 
                        alt={isEn ? 'Eye care maintenance solutions' : 'Soluciones de Mantenimiento Ocular'} 
                        className="w-full h-full object-contain transition-all duration-700 group-hover:scale-105"
                      />
                    </div>
                    <h4 className="text-white font-medium text-lg uppercase tracking-tight italic ml-4">{isEn ? 'Eye Comfort Bottles' : 'Frascos de Confort Ocular'}</h4>
                  </div>
                  <div className="group">
                    <div className="rounded-[40px] overflow-hidden border border-white/10 bg-white/[0.03] aspect-[4/3] relative mb-6 p-8 flex items-center justify-center">
                      <img 
                        src="/monodosis_sanitario.webp" 
                        alt={isEn ? 'Advanced hygiene single-dose' : 'Monodosis de Higiene Avanzada'} 
                        className="w-full h-full object-contain transition-all duration-700 group-hover:scale-105"
                      />
                    </div>
                    <h4 className="text-white font-medium text-lg uppercase tracking-tight italic ml-4">{isEn ? 'Precision Single-Dose' : 'Monodosis de Precisión'}</h4>
                  </div>
                </div>

                <p className="mt-8 text-[11px] text-white/30 font-medium uppercase tracking-widest flex items-center gap-3 italic">
                  <ShieldCheck className="w-3 h-3 text-sky-400" />
                  {copy.sanitaryNote}
                </p>
              </div>

              {/* Alcance Section */}
              <div className="grid lg:grid-cols-2 gap-20 items-center border-t border-white/5 pt-32">
                <div>
                  <h3 className="text-4xl font-light text-white mb-10 tracking-tight italic uppercase">
                    {isEn ? (
                      <>
                        Development <span className="text-sky-400">Scope</span>
                      </>
                    ) : (
                      <>
                        Alcance de <span className="text-sky-400">Desarrollo</span>
                      </>
                    )}
                  </h3>
                  <div className="grid gap-6">
                    {p.reach.map((item: string, idx: number) => (
                      <div key={idx} className="flex items-center gap-4 group">
                        <div className="w-8 h-px bg-sky-400/30 group-hover:w-12 transition-all group-hover:bg-sky-400" />
                        <span className="text-white/50 text-[16px] font-light group-hover:text-white transition-colors">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-sky-400/5 border border-sky-400/10 p-12 rounded-[40px] text-center backdrop-blur-md">
                  <h4 className="text-2xl font-medium text-white mb-6 uppercase tracking-tight italic">{copy.sanitaryCtaTitle}</h4>
                  <p className="text-white/40 mb-10 text-base font-light leading-relaxed">{copy.sanitaryCtaBody}</p>
                  <Link 
                    to="/contacto" 
                    className="inline-flex items-center gap-4 px-10 py-5 bg-sky-400 hover:bg-sky-500 text-black uppercase text-[11px] font-black tracking-[0.3em] transition-all"
                  >
                    {copy.sanitaryCtaButton}
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Legal Disclaimer Footer */}
              <div className="mt-32 pt-12 mb-24 border-t border-white/5 opacity-30 text-[11px] leading-relaxed max-w-4xl tracking-tight">
                <p className="uppercase font-bold mb-2 text-[12px]">{copy.sanitaryLegalTitle}</p>
                <p>{p.disclaimer}</p>
              </div>
            </div>
          </div>
        ) : (
          <Fragment key={p.id}>
            <ProductSection {...p} finalConfig={productConfigs[p.id as keyof typeof productConfigs]} />
            
            {/* Global CTA - Inserted right after Vials (the last standard product) */}
            {p.id === 'vials' && (
              <section className="py-40 relative overflow-hidden text-center bg-zinc-950/20 border-y border-white/5">
                <div className="max-w-4xl mx-auto px-4 relative z-10">
                  <h2 className="text-3xl sm:text-5xl font-light text-white mb-10 tracking-tight leading-tight uppercase italic">
                    {copy.sanitaryGlobalCtaTitlePrefix} <br /><span className="text-accent underline decoration-accent/30 underline-offset-8">{copy.sanitaryGlobalCtaTitleAccent}</span>
                  </h2>
                  <p className="text-white/40 text-lg mb-12 max-w-xl mx-auto font-light">
                    {copy.sanitaryGlobalCtaBody}
                  </p>
                  <Link 
                    to="/contacto" 
                    className="inline-flex items-center gap-4 px-12 py-5 bg-accent hover:bg-accent/80 text-white uppercase text-[10px] font-bold tracking-[0.3em] transition-all"
                  >
                    {copy.sanitaryGlobalCtaButton}
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </section>
            )}
          </Fragment>
        )
      ))}
    </div>
    </>
  );
};

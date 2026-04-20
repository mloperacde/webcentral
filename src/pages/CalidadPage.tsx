import { useEffect } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  ShieldCheck, 
  Microscope, 
  Search, 
  QrCode, 
  Thermometer, 
  ClipboardCheck,
  Zap,
  Settings2,
  CheckCircle2,
  ChevronRight,
  Globe,
  Award,
  Users
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Footer } from '../components/Footer';
import { PageMeta } from '../components/PageMeta';

export const CalidadPage = () => {
  const { language } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const isEn = language === 'en';

  const metaTitle = isEn ? 'Quality | Central Envasados' : 'Calidad | Central Envasados';
  const metaDesc = isEn
    ? 'Full Spectrum certifications: ISO 9001, ISO 13485, ISO 22716, IFS Food and EcoVadis. Over 35 years of quality guarantee.'
    : 'Certificaciones Full Spectrum: ISO 9001, ISO 13485, ISO 22716, IFS Food y EcoVadis. Más de 35 años de garantía de calidad.';

  const copy = isEn
    ? {
        back: 'Back to Home',
        heroKicker: 'Commitment to Excellence',
        heroTitleStart: 'A Guarantee of',
        heroTitleAccent: 'Trust',
        heroTitleEnd: 'for Leading Brands',
        heroQuote: '"We don’t delegate quality; we embed it into every process."',
        heroExplore: 'Explore',
        philosophyTitle: 'Regulatory Rigor and Full Spectrum Certifications',
        philosophyBody1:
          'We maintain an ecosystem of concurrent certifications that functions as a shield of legal and reputational safety for the most demanding brands in the world.',
        philosophyBody2:
          'Our audited infrastructure allows us to manufacture simultaneously under cosmetic, healthcare, and food standards—without cross-contamination risk or regulatory gaps.',
        precisionTitleStart: 'High-Precision',
        precisionTitleAccent: 'Control',
        precisionSubtitle:
          'Constant validation at every critical node of the process to ensure excellence in every unit produced.',
        certMatrixTitle: 'Certification Matrix',
        certMatrixSubtitle: 'Multi-standard compliance under one roof',
        certTableHead1: 'Certification',
        certTableHead2: 'Technical Scope',
        certTableHead3: 'Value for Your Brand',
        auditTitleStart: 'Permanent',
        auditTitleAccent: 'Audit',
        auditQuote: '"Certifications are the starting point, not the finish line."',
        auditItem1Title: 'Quarterly Self-Inspections',
        auditItem1Desc: 'Customer-style audit simulations to proactively detect improvement opportunities.',
        auditItem2Title: 'IQ/OQ/PQ Maintenance',
        auditItem2Desc: 'Validated preventive maintenance across all critical plant equipment.',
        auditItem3Title: 'Change Control',
        auditItem3Desc: 'Rigorous documentation for any modification to processes or infrastructure.',
        auditItem4Title: 'Continuous Training',
        auditItem4Desc: 'Mandatory training in clean rooms and aseptic handling protocols.',
        coverageTitle: "Full Spectrum Legal Coverage",
        coverageBody:
          'The combination of AEMPS (medical devices) + ISO 22716 (cosmetics) + ISO 13485 (medical devices) enables us to run parallel programs under the same certified roof.',
        coverageQuote:
          '"All production runs under a single quality ecosystem—eliminating duplicated audits and reducing regulatory risk."',
        finalBadgeTitle: 'Your final guarantee:',
        finalBadgeAccent: 'Legal Safety',
        finalBody:
          'Every product leaving our facilities carries the sum of these validations—translated into safety for your brand and trust for your end consumer.',
        finalCta: 'Audit our Plant',
        qualityNodes: [
          {
            icon: Microscope,
            title: 'In-House Microbiology Laboratory',
            description:
              'Microbial load control (total aerobic counts and specification-based tests). Preservative efficacy and accelerated shelf-life validation.'
          },
          {
            icon: Search,
            title: '100% Visual Inspection',
            description:
              'Continuous process control. Detection of sealing, dosing, or particulate defects before products leave the line.'
          },
          {
            icon: QrCode,
            title: 'End-to-End Digital Traceability',
            description:
              'Traceability and records: raw materials (supplier, batch, CoA), production conditions, and shift results.'
          },
          {
            icon: Thermometer,
            title: 'Stability & Airtightness',
            description:
              'Weight, appearance, tightness control, leak tests (vacuum), and torque to ensure integrity throughout the declared shelf life.'
          }
        ],
        certifications: [
          {
            name: 'ISO 9001:2015',
            scope: 'Quality Management System',
            value: 'Standardized processes, documented continuous improvement, and preventive operational risk management.'
          },
          {
            name: 'GMP AEMPS + ISO 22716',
            scope: 'Good Practices (Cosmetics)',
            value: 'Manufacturing under AEMPS oversight, ensuring product safety and pharmaceutical-grade traceability.'
          },
          {
            name: 'IFS Food',
            scope: 'Food Safety',
            value: 'Compliance with the highest global standards for food processing safety and quality.'
          },
          {
            name: 'ISO 13485',
            scope: 'Medical Devices',
            value: 'Authorization to manufacture Class I/IIa medical devices under strict clinical and regulatory rigor.'
          },
          {
            name: 'ISO 14001:2015',
            scope: 'Environmental Management',
            value: 'Waste minimization and environmental due diligence aligned with international groups.'
          },
          {
            name: 'EcoVadis Silver/Gold',
            scope: 'Sustainability Assessment',
            value: 'External validation of ethical practices and ESG standards required by large distributors.'
          }
        ]
      }
    : {
        back: 'Regresar al Inicio',
        heroKicker: 'Compromiso con la Excelencia',
        heroTitleStart: 'Garantía de',
        heroTitleAccent: 'Confianza',
        heroTitleEnd: 'para Marcas Líderes',
        heroQuote: '"No delegamos la calidad; la integramos en cada proceso."',
        heroExplore: 'Explorar',
        philosophyTitle: 'Rigor Normativo y Certificaciones Full Spectrum',
        philosophyBody1:
          'Mantenemos un ecosistema de certificaciones concurrentes que opera como escudo de seguridad legal y reputacional para las marcas más exigentes del mundo.',
        philosophyBody2:
          'Nuestra infraestructura auditada permite fabricar simultáneamente bajo estándares cosméticos, sanitarios y alimentarios sin riesgo de contaminación cruzada ni gaps regulatorios.',
        precisionTitleStart: 'Control de',
        precisionTitleAccent: 'Alta Precisión',
        precisionSubtitle:
          'Validación constante en cada nodo crítico del proceso para asegurar la excelencia en cada unidad producida.',
        certMatrixTitle: 'Matriz de Certificaciones',
        certMatrixSubtitle: 'Cumplimiento multinorma bajo un mismo techo',
        certTableHead1: 'Certificación',
        certTableHead2: 'Alcance Técnico',
        certTableHead3: 'Valor para tu Marca',
        auditTitleStart: 'Auditoría',
        auditTitleAccent: 'Permanente',
        auditQuote: '"Las certificaciones son el punto de partida, no la meta."',
        auditItem1Title: 'Autoinspecciones Trimestrales',
        auditItem1Desc: 'Simulación de auditorías de cliente para detectar puntos de mejora preventiva.',
        auditItem2Title: 'Mantenimiento IQ/OQ/PQ',
        auditItem2Desc: 'Mantenimiento preventivo validado sobre todos los equipos críticos de la planta.',
        auditItem3Title: 'Gestión de Cambios',
        auditItem3Desc: 'Documentación rigurosa de cualquier modificación en procesos o infraestructura.',
        auditItem4Title: 'Formación Continua',
        auditItem4Desc: 'Capacitación obligatoria en salas blancas y protocolos de manipulación aséptica.',
        coverageTitle: "Cobertura Legal 'Full Spectrum'",
        coverageBody:
          'La combinación de AEMPS (productos sanitarios) + ISO 22716 (cosmética) + ISO 13485 (medical devices) nos permite ofrecer la capacidad única de desarrollar líneas paralelas bajo el mismo techo certificado.',
        coverageQuote:
          '"Toda la producción se realiza bajo un mismo ecosistema de calidad, eliminando la duplicidad de auditorías y riesgos regulatorios."',
        finalBadgeTitle: 'Tu garantía final:',
        finalBadgeAccent: 'Seguridad Jurídica',
        finalBody:
          'Cada producto que sale de nuestras instalaciones lleva implícita la suma de estas validaciones, traducida en seguridad para tu marca y confianza para tu consumidor final.',
        finalCta: 'Auditar nuestra Planta',
        qualityNodes: [
          {
            icon: Microscope,
            title: 'Laboratorio Microbiológico Propio',
            description:
              'Control de carga microbiana, aerobios mesófilos y específicos según especificación. Validación de conservantes y vida útil acelerada.'
          },
          {
            icon: Search,
            title: 'Inspección Visual 100%',
            description:
              'Control de proceso continuo. Detección de defectos de sellado, dosificación o partículas antes de salir de línea.'
          },
          {
            icon: QrCode,
            title: 'Trazabilidad Digital Completa',
            description:
              'Trazabilidad y registro: materia prima (proveedor, lote, COA), condiciones de producción y resultados por turno.'
          },
          {
            icon: Thermometer,
            title: 'Estabilidad y Hermeticidad',
            description:
              'Control de peso, aspecto y estanqueidad, fugas (vacío) y torque para garantizar la integridad durante toda la vida útil declarada.'
          }
        ],
        certifications: [
          {
            name: 'ISO 9001:2015',
            scope: 'Sistema de Gestión de Calidad',
            value: 'Procesos estandarizados, mejora continua documentada y enfoque preventivo de riesgos operativos.'
          },
          {
            name: 'GMP AEMPS + ISO 22716',
            scope: 'Buenas Prácticas (Cosmética)',
            value: 'Fabricación bajo inspección de la AEMPS, garantizando inocuidad y trazabilidad farmacéutica.'
          },
          {
            name: 'IFS Food',
            scope: 'Seguridad Alimentaria',
            value: 'Cumplimiento de los más altos estándares globales de seguridad y calidad en el procesado de alimentos.'
          },
          {
            name: 'ISO 13485',
            scope: 'Productos Sanitarios',
            value: 'Habilitación para fabricar Medical Devices clase I/IIa bajo rigor clínico y normativo.'
          },
          {
            name: 'ISO 14001:2015',
            scope: 'Gestión Ambiental',
            value: 'Minimización de residuos y cumplimiento de due diligence ambiental de grupos internacionales.'
          },
          {
            name: 'EcoVadis Plata/Dorado',
            scope: 'Evaluación de Sostenibilidad',
            value: 'Acreditación externa de prácticas éticas y ESG para acceso a grandes distribuidores.'
          }
        ]
      };

  return (
    <>
      <PageMeta title={metaTitle} description={metaDesc} />
    <div className="bg-black min-h-screen text-white mesh-gradient">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/laboratorio.webp" 
            alt={isEn ? 'Central de Envasados quality' : 'Calidad Central de Envasados'}
            className="w-full h-full object-cover opacity-60 brightness-90 scale-100" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/10 to-black z-10" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/20 to-transparent z-10" />
          <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black to-transparent z-20" />
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
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="page-subtitle mb-4 block"
            >
              {copy.heroKicker}
            </motion.span>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-light text-white mb-6 tracking-tighter leading-tight uppercase italic text-balance drop-shadow-2xl">
              {copy.heroTitleStart} <span className="text-accent">{copy.heroTitleAccent}</span> <span className="text-white/90">{copy.heroTitleEnd}</span>
            </h1>
            <p className="max-w-2xl mx-auto text-white/50 text-base lg:text-lg font-light leading-relaxed mb-4 italic">
              {copy.heroQuote}
            </p>
          </motion.div>
        </div>

        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 z-40 opacity-40"
        >
          <span className="text-[9px] text-white uppercase tracking-[0.4em] [writing-mode:vertical-lr]">{copy.heroExplore}</span>
          <div className="w-px h-10 bg-white" />
        </motion.div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <h2 className="text-3xl sm:text-5xl font-light text-white mb-10 tracking-tight italic uppercase">
                {isEn ? (
                  <>
                    Regulatory Rigor and <span className="text-accent underline decoration-accent/30 underline-offset-4">Full Spectrum</span> Certifications
                  </>
                ) : (
                  <>
                    Rigor Normativo y Certificaciones <span className="text-accent underline decoration-accent/30 underline-offset-4">Full Spectrum</span>
                  </>
                )}
              </h2>
              <div className="space-y-6 text-white/50 text-lg font-light leading-relaxed">
                <p>
                  {copy.philosophyBody1}
                </p>
                <p>
                  {copy.philosophyBody2}
                </p>
              </div>
            </motion.div>
            
            <div className="relative">
              <div className="absolute -inset-10 bg-accent/20 blur-[100px] rounded-full opacity-10" />
              <img 
                src="/hologramaisos.webp" 
                alt={isEn ? 'ISO certifications hologram' : 'Holograma Certificaciones ISO'} 
                className="relative z-10 w-full h-auto object-contain drop-shadow-[0_0_50px_rgba(56,189,248,0.3)]" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quality Nodes - High Precision (Redesigned) */}
      <section className="py-24 bg-black relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-light text-white mb-6 tracking-tighter uppercase italic">
              {copy.precisionTitleStart} <span className="text-accent underline decoration-white/10 underline-offset-8">{copy.precisionTitleAccent}</span>
            </h2>
            <p className="max-w-2xl mx-auto text-white/40 text-lg lg:text-xl font-light leading-relaxed">
              {copy.precisionSubtitle}
            </p>
          </motion.div>
        </div>

        <div className="relative w-full">
          {/* Full Width Image Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="w-full h-[600px] lg:h-[800px] relative overflow-hidden"
          >
            <img 
              src="/controlproceso_optimized.webp" 
              alt={isEn ? 'Central de Envasados process control' : 'Control de Proceso Central de Envasados'} 
              className="w-full h-full object-cover brightness-75 scale-105"
            />
            {/* Subtle Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30" />
            <div className="absolute inset-0 bg-accent/5 mix-blend-overlay" />
          </motion.div>

          {/* Overlapping Floating Cards */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative -mt-32 lg:-mt-48 z-20">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {copy.qualityNodes.map((node, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: idx * 0.1 }}
                  whileHover={{ y: -10, backgroundColor: 'rgba(255,255,255,0.15)', borderColor: 'rgba(56,189,248,0.4)' }}
                  className="p-10 border border-white/10 bg-black/40 backdrop-blur-3xl rounded-[40px] shadow-2xl transition-all duration-500 group"
                >
                  <div className="w-16 h-16 bg-accent/20 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                    <node.icon className="w-8 h-8 text-accent" />
                  </div>
                  <h4 className="text-white font-medium mb-4 text-[22px] tracking-tight leading-snug uppercase italic">{node.title}</h4>
                  <p className="text-white/40 text-[15px] font-light leading-relaxed">{node.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Spacer for overflow */}
        <div className="h-24 lg:h-32" />
      </section>

      {/* Certification Table */}
      <section className="py-32 relative overflow-hidden">
        {/* Full-width Background Hero Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/hologramaisos.webp" 
            alt="" 
            className="w-full h-full object-cover opacity-60 blur-[40px]" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/40 to-black" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mb-20">
            <h2 className="text-3xl sm:text-5xl font-light text-white mb-6 italic uppercase tracking-tighter">
              {isEn ? (
                <>
                  Certification <span className="text-accent">Matrix</span>
                </>
              ) : (
                <>
                  Matriz de <span className="text-accent">Certificaciones</span>
                </>
              )}
            </h2>
            <p className="text-white/40 text-lg font-light uppercase tracking-widest border-l-2 border-accent pl-6">
              {copy.certMatrixSubtitle}
            </p>
          </div>
          
          <div className="overflow-x-auto rounded-[40px] border border-white/5 bg-black/40 backdrop-blur-xl">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/10 text-white/30 text-[10px] uppercase font-bold tracking-[0.25em] bg-white/[0.03]">
                  <th className="py-10 px-10">{copy.certTableHead1}</th>
                  <th className="py-10 px-10">{copy.certTableHead2}</th>
                  <th className="py-10 px-10">{copy.certTableHead3}</th>
                </tr>
              </thead>
              <tbody className="text-white/80">
                {copy.certifications.map((cert, idx) => (
                  <tr key={idx} className="border-b border-white/5 last:border-0 hover:bg-accent/5 transition-all group">
                    <td className="py-10 px-10 text-accent font-bold italic tracking-tight text-xl">{cert.name}</td>
                    <td className="py-10 px-10 font-medium max-w-xs">{cert.scope}</td>
                    <td className="py-10 px-10 text-white/40 font-light text-sm italic py-8 leading-relaxed">{cert.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Permanent Audit Section */}
      <section className="py-32 bg-[#080808] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-24">
            <div>
              <h2 className="text-4xl font-light text-white mb-10 italic uppercase">{copy.auditTitleStart} <span className="text-accent">{copy.auditTitleAccent}</span></h2>
              <p className="text-white/40 text-xl font-light italic mb-12">{copy.auditQuote}</p>
              
              <div className="space-y-8">
                {[
                  { title: copy.auditItem1Title, desc: copy.auditItem1Desc, icon: ClipboardCheck },
                  { title: copy.auditItem2Title, desc: copy.auditItem2Desc, icon: Zap },
                  { title: copy.auditItem3Title, desc: copy.auditItem3Desc, icon: Settings2 },
                  { title: copy.auditItem4Title, desc: copy.auditItem4Desc, icon: Users }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-6 items-start group">
                    <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-accent/20 transition-all">
                      <item.icon className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h4 className="text-white font-medium mb-1 transition-colors group-hover:text-accent uppercase tracking-tighter text-lg">{item.title}</h4>
                      <p className="text-white/40 font-light leading-relaxed text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex flex-col justify-center">
              <div className="p-12 border border-white/5 bg-white/[0.02] backdrop-blur-xl rounded-[60px] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent opacity-5 blur-[60px]" />
                <h3 className="text-2xl font-light text-white mb-8 italic uppercase tracking-widest text-accent">{copy.coverageTitle}</h3>
                <p className="text-white/50 text-lg leading-relaxed font-light mb-8">
                  {copy.coverageBody}
                </p>
                <div className="p-8 bg-accent/5 border border-accent/20 rounded-3xl">
                  <p className="text-sm italic text-white/80 leading-relaxed font-light">
                    {copy.coverageQuote}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Guarantee Section with Video Background */}
      <section className="py-48 relative overflow-hidden bg-black text-white">
        <div className="absolute inset-0 z-0">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="w-full h-full object-cover opacity-85 brightness-110"
          >
            <source src="/Operator_checks_data.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/30 z-10" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black z-10" />
        </div>

        <div className="max-w-4xl mx-auto px-4 text-center relative z-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <ShieldCheck className="w-20 h-20 text-accent mb-12 mx-auto" />
            <h2 className="text-4xl sm:text-6xl font-light mb-10 tracking-tighter leading-tight italic uppercase">
              {copy.finalBadgeTitle} <br /><span className="text-accent underline decoration-white/10 underline-offset-8">{copy.finalBadgeAccent}</span>
            </h2>
            <p className="text-white/60 text-xl font-light leading-relaxed mb-16 max-w-2xl mx-auto">
              {copy.finalBody}
            </p>
            <Link 
              to="/contacto" 
              className="inline-flex items-center gap-6 px-14 py-6 border border-white/20 bg-white/5 backdrop-blur-md hover:bg-white/10 text-white uppercase text-xs font-black tracking-[0.4em] transition-all shadow-2xl"
            >
              {copy.finalCta}
              <ChevronRight className="w-5 h-5 text-accent" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
    </>
  );
};

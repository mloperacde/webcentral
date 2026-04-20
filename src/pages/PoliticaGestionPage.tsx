import { useEffect } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, ShieldCheck, Globe, Factory } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { PageMeta } from '../components/PageMeta';

export const PoliticaGestionPage = () => {
  const { language } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const isEn = language === 'en';

  const metaTitle = isEn ? 'Management Policy | Central Envasados' : 'Política de Gestión | Central Envasados';
  const metaDesc = isEn
    ? 'Quality, environmental and safety management policy of Central Envasados Grupo TCL S.L.'
    : 'Política de gestión de calidad, medioambiente y seguridad de Central Envasados Grupo TCL S.L.';

  const copy = isEn
    ? {
        back: 'Back to Home',
        titlePrefix: 'Management System',
        titleAccent: 'Policy',
        company: 'Central de Envasados, S.A.',
        intro:
          'The General Management of CENTRAL DE ENVASADOS, S.A. establishes the following vision and fundamental commitments as the Management System Policy:',
        dedicationTitle: 'Our Commitment',
        dedication: [
          'Packaging of liquid and solid products in different types of containers.',
          'Packaging for the healthcare, cosmetic, and food industries.',
          'Packaging of hygienic-healthcare products.',
          'Assembly/packaging of promotional products.',
          'Manufacturing of cosmetic and healthcare products.'
        ],
        quote1:
          'After more than 30 years in the market, we know that our success is determined by how our customers perceive the quality of our products and/or services in relation to their expectations and in comparison with the market offering.',
        quote2:
          'For us, it is a challenge and a commitment to our environment to preserve the environment and prevent pollution, putting safe, legal, and authentic products on the market according to customer guidelines, meeting specified quality and, as far as possible, being as respectful of the environment as possible.',
        certifiedTitle: 'Certified Management Systems',
        certifiedIntro:
          'To achieve this excellence, maintain success, delivery reliability, and all services provided to our customers, General Management declares its full commitment to maintaining:',
        certifiedList: [
          'The Quality Management System based on UNE-EN ISO 9001.',
          'The Environmental Management System based on UNE-EN ISO 14001.',
          'Good Manufacturing Practices guide for cosmetic products based on ISO 22716.',
          'The Quality Management System for Medical Devices based on UNE-EN ISO 13485.',
          'The Food Safety Management System based on the IFS scheme.'
        ],
        principlesTitle: 'Our Basic Principles',
        principles: [
          'Continuously improve the quality of the products we deliver to our customers.',
          'Achieve greater competitiveness based on customer trust and loyalty, ensuring satisfaction by always meeting their specified, implicit, and regulatory requirements.',
          'Invest in adequate and up-to-date infrastructure and equipment to prevent irregularities.',
          'Comply with applicable legal requirements (food, healthcare, environmental, and labor), including respect for human rights, as well as other voluntary requirements we subscribe to.',
          'Promote improvement initiatives through employee training so they actively collaborate in pollution prevention, food fraud prevention, and maintaining a food safety culture.',
          'Ensure the supply of resources necessary to meet customer specifications and environmental, quality, and safety regulations, as well as to guarantee the authenticity of all products.',
          'Ensure that the Management System Policy is understood, communicated, implemented, and kept up to date at all levels.',
          'Reduce the amount of non-recyclable packaging waste placed on the market where we can influence.',
          'Study and reduce greenhouse gas emissions generated, raising awareness throughout our supply chain.'
        ],
        unTitle: 'United Nations Global Compact',
        unIntro:
          'We take as a reference framework, comply with, and commit to ensuring that our employees and subcontractors also comply with the 10 principles of the United Nations Global Compact:',
        un1:
          'Support and respect the protection of internationally proclaimed human rights and ensure we are not complicit in abuses.',
        un2:
          'Uphold freedom of association and the effective recognition of the right to collective bargaining; eliminate all forms of forced and compulsory labor; abolish child labor; and eliminate discrimination in employment and occupation.',
        un3:
          'Support a precautionary approach to environmental challenges; undertake initiatives to promote greater environmental responsibility; and encourage the development and diffusion of environmentally friendly technologies.',
        un4:
          'Work actively against corruption in all its forms, including extortion and bribery.',
        footer:
          'This Policy is reviewed periodically by CENTRAL DE ENVASADOS, S.A. management for continuous adequacy. The Management System Policy is the reference framework for establishing and reviewing system objectives.',
        approvedBy: 'Approved by: General Management',
        reviewDate: 'Review date: 20/02/2024'
      }
    : {
        back: 'Volver al inicio',
        titlePrefix: 'Política del',
        titleAccent: 'Sistema de Gestión',
        company: 'Central de Envasados, S.A.',
        intro:
          'La Dirección General de CENTRAL DE ENVASADOS, S.A. establece como Política del Sistema de Gestión la siguiente visión y compromisos fundamentales:',
        dedicationTitle: 'Nuestra Dedicación',
        dedication: [
          'Envasado de productos líquidos y sólidos en diferentes tipos de envases.',
          'Envasado para las industrias sanitaria, cosmética y alimentaria.',
          'Envasado de productos higiénico-sanitarios.',
          'Acondicionamiento de productos promocionales.',
          'Fabricación de productos cosméticos y sanitarios.'
        ],
        quote1:
          'Después de más de 30 años en el mercado sabemos que nuestro éxito está determinado por el modo en que nuestros clientes perciben la calidad de nuestros productos y/o servicios en relación con sus expectativas y su comparación con el mercado de oferta.',
        quote2:
          'Para nosotros es un reto y un compromiso con el entorno que nos rodea tratar de preservar el medio ambiente y prevenir la contaminación, tratando de poner en el mercado productos inocuos, legales y auténticos, según directrices de los clientes, que se ajusten a la calidad especificada y que, en la medida de lo posible, sean lo más respetuosos con el entorno.',
        certifiedTitle: 'Sistemas de Gestión Certificados',
        certifiedIntro:
          'Para lograr esta excelencia, mantener el éxito, la fiabilidad en las entregas y todo servicio prestado frente a nuestros clientes, la Dirección General enuncia su total compromiso para el mantenimiento de:',
        certifiedList: [
          'El Sistema de Gestión de la Calidad en base a la norma UNE-EN ISO 9001.',
          'El Sistema de Gestión Ambiental en base a la norma UNE-EN ISO 14001.',
          'Guía de Buenas Prácticas de productos cosméticos en base a la norma ISO 22716.',
          'El Sistema de Gestión de la Calidad de Productos sanitarios en base a la norma UNE-EN ISO 13485.',
          'El Sistema de Gestión de Seguridad Alimentaria en base al esquema IFS.'
        ],
        principlesTitle: 'Nuestros Principios Básicos',
        principles: [
          'Mejorar de forma continua la calidad de los productos que servimos a nuestros clientes.',
          'Lograr una mayor competitividad basándonos en la confianza y fidelización de nuestros clientes, asegurando su satisfacción cumpliendo siempre sus expectativas y requisitos especificados, implícitos y reglamentarios.',
          'Apostar por infraestructuras y equipos adecuados y actualizados para prevenir la aparición de irregularidades.',
          'Cumplir con los requisitos legales aplicables (alimentarios, sanitarios, ambientales y laborales), relacionados con el respecto por los derechos humanos, así como otros requisitos voluntarios que suscribamos.',
          'Impulsar iniciativas de mejora promoviendo la formación a nuestros empleados para que colaboren activamente en la prevención de la contaminación, prevención del fraude alimentario y mantenimiento de una cultura de seguridad alimentaria.',
          'Garantizar el suministro de recursos necesarios para cumplir con especificaciones de clientes, normativa ambiental, de calidad y de seguridad, así como para garantizar la autenticidad de todos los productos.',
          'Asegurar que la Política del Sistema de Gestión es entendida, comunicada, implantada y mantenida al día por todos los niveles que de él dependan.',
          'Reducir la cantidad de residuos de envases no reciclables que se pongan en el mercado y para los que podamos tener capacidad de actuación.',
          'Estudiar y reducir la cantidad de gases de efecto invernadero que generamos, concienciando a toda nuestra cadena de suministro.'
        ],
        unTitle: 'Pacto Mundial de Naciones Unidas',
        unIntro:
          'Tenemos como marco de referencia, cumplimos y nos comprometemos a que nuestros empleados y subcontratistas también cumplan con los 10 principios del Pacto Mundial de Naciones Unidas:',
        un1:
          'Apoyo y respeto por la protección de los derechos humanos proclamados internacionalmente y asegurarnos de que no seamos cómplices de abusos o vulneraciones.',
        un2:
          'Defender la libertad de asociación y reconocimiento efectivo del derecho a la negociación colectiva; eliminación de todas las formas de trabajo forzoso y obligatorio; abolición del trabajo infantil y eliminación de la discriminación en materia de empleo y ocupación.',
        un3:
          'Apoyo al compromiso de precaución ante desafíos ambientales; emprender iniciativas para promover mayor responsabilidad ambiental; y fomentar el desarrollo y la difusión de tecnologías respetuosas con el medio ambiente.',
        un4:
          'Trabajar activamente contra la corrupción en todas sus formas, incluidas la extorsión y el soborno.',
        footer:
          'La Política es revisada por la Dirección de CENTRAL DE ENVASADOS, S.A. de forma periódica, para su continua adecuación. La Política del Sistema de Gestión es el marco de referencia para establecer y revisar los objetivos del Sistema.',
        approvedBy: 'Aprobada por: Dirección General',
        reviewDate: 'Fecha de revisión: 20/02/2024'
      };

  return (
    <>
    <PageMeta title={metaTitle} description={metaDesc} />
    <div className="bg-black min-h-screen text-white pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/" className="inline-flex items-center gap-3 text-white/60 hover:text-white transition-colors mb-12 text-[10px] font-bold uppercase tracking-[0.2em]">
          <ArrowLeft className="w-4 h-4" />
          {copy.back}
        </Link>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-16">
            <h1 className="text-3xl lg:text-5xl font-light text-white mb-6 uppercase tracking-tight italic">
              {copy.titlePrefix} <span className="text-accent underline decoration-accent/30 underline-offset-8">{copy.titleAccent}</span>
            </h1>
            <p className="text-white/40 text-sm tracking-widest uppercase font-bold">
              {copy.company}
            </p>
          </div>
          
          <div className="space-y-16 text-white/70 font-light leading-relaxed prose prose-invert max-w-none">
            
            <section>
              <p className="text-lg text-white/80 leading-relaxed mb-8">
                {copy.intro.replace('CENTRAL DE ENVASADOS, S.A.', '')}
                <strong>CENTRAL DE ENVASADOS, S.A.</strong>
                {copy.intro.split('CENTRAL DE ENVASADOS, S.A.')[1]}
              </p>
              
              <h3 className="text-xl text-white font-medium mb-6 flexItems-center gap-3">
                <Factory className="w-5 h-5 text-accent inline-block mr-3" />
                {copy.dedicationTitle}
              </h3>
              <ul className="grid sm:grid-cols-2 gap-4 mb-8">
                {copy.dedication.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 bg-white/[0.02] p-4 rounded-xl border border-white/5">
                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              
              <div className="bg-white/[0.02] p-8 rounded-2xl border border-white/5 italic text-white/60 mb-8 space-y-4">
                <p>
                  {copy.quote1}
                </p>
                <p>
                  {copy.quote2}
                </p>
              </div>
            </section>

            <section>
              <h3 className="text-xl text-white font-medium mb-6 flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-accent inline-block mr-3" />
                {copy.certifiedTitle}
              </h3>
              <p className="mb-6">
                {copy.certifiedIntro}
              </p>
              <div className="grid gap-4">
                {copy.certifiedList.map((cert, idx) => (
                  <div key={idx} className="flex items-center gap-4 bg-black/50 p-4 border-l-2 border-accent">
                    <div className="w-2 h-2 rounded-full bg-accent" />
                    <span className="text-white/80">{cert}</span>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h3 className="text-xl text-white font-medium mb-6 flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-accent inline-block mr-3" />
                {copy.principlesTitle}
              </h3>
              <ul className="space-y-4 list-none pl-0">
                {copy.principles.map((principio, idx) => (
                  <li key={idx} className="flex gap-4">
                    <span className="text-accent font-bold mt-1">✓</span>
                    <span className="text-white/70 leading-relaxed text-sm">{principio}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="bg-white/[0.03] p-8 rounded-3xl border border-white/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <Globe className="w-32 h-32 text-accent" />
              </div>
              <div className="relative z-10">
                <h3 className="text-xl text-white font-medium mb-6">{copy.unTitle}</h3>
                <p className="mb-6 text-sm">
                  {copy.unIntro}
                </p>
                <ul className="space-y-4 list-decimal list-inside text-sm text-white/70">
                  <li>{copy.un1}</li>
                  <li>{copy.un2}</li>
                  <li>{copy.un3}</li>
                  <li>{copy.un4}</li>
                </ul>
              </div>
            </section>

            <footer className="pt-8 mt-16 border-t border-white/10">
              <p className="text-sm text-white/50 mb-4">
                {copy.footer}
              </p>
              <div className="flex flex-col gap-1 text-sm font-medium">
                <span className="text-white">{copy.approvedBy}</span>
                <span className="text-accent">{copy.reviewDate}</span>
              </div>
            </footer>
            
          </div>
        </motion.div>
      </div>
    </div>
    </>
  );
};

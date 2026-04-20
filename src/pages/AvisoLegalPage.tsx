import { useEffect } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Building2, Book, ShieldAlert, Scale, PhoneCall, FileText } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { PageMeta } from '../components/PageMeta';

export const AvisoLegalPage = () => {
  const { language } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const isEn = language === 'en';

  const metaTitle = isEn ? 'Legal Notice | Central Envasados' : 'Aviso Legal | Central Envasados';
  const metaDesc = isEn
    ? 'Legal information about Central Envasados Grupo TCL S.L., corporate data, and terms of use.'
    : 'Información legal sobre Central Envasados Grupo TCL S.L., datos societarios y condiciones de uso.';

  const copy = isEn
    ? {
        back: 'Back to Home',
        title: 'Legal Notice',
        subtitle: 'General Terms and Conditions of Use',
        ownerTitle: 'Website Owner',
        registrationTitle: 'Registration Details',
        companyNameLabel: 'Company Name',
        taxIdLabel: 'Tax ID',
        addressLabel: 'Registered Office',
        contactLabel: 'Contact',
        phoneLabel: 'Phone',
        emailLabel: 'Email',
        registryLabel: 'Commercial Registry',
        volumeLabel: 'Volume',
        bookLabel: 'Book',
        folioLabel: 'Folio',
        sectionLabel: 'Section',
        sheetLabel: 'Sheet',
        intro:
          'Central de Envasados, S.A. reserves the right to modify, at any time and without prior notice, the presentation and configuration of the website, as well as the contents and services incorporated therein. The user acknowledges and accepts that Central de Envasados, S.A. may, at any time, interrupt, deactivate and/or cancel any of these elements or access to them.',
        ipTitle: 'Intellectual Property',
        ipBody:
          'All contents of the website, including, by way of example, texts, photographs, graphics, images, icons, technology, software, as well as its graphic design and source codes, constitute a work whose ownership belongs to Central de Envasados, S.A. No exploitation rights are deemed assigned to the user beyond what is strictly necessary for the correct use of the website.',
        dataTitle: 'Data Protection',
        dataBody:
          'In accordance with the applicable data protection regulations, the personal data provided will be processed by Central de Envasados, S.A. for the purpose of managing the relationship with website users.',
        dataLinkPrefix: 'For more information about our data protection policy, please consult our ',
        dataLinkText: 'Privacy Policy',
        liabilityTitle: 'Limitation of Liability',
        liabilityBody:
          'Central de Envasados, S.A. shall not be responsible for information, services and/or products offered and/or provided by third parties through the website, nor for contents provided by third parties. Central de Envasados, S.A. does not guarantee the reliability, availability, or continuity of the website or of the products or services made available to the user, and therefore excludes any liability for damages that may arise from a lack of availability, reliability, or continuity of the website or its services.',
        lawTitle: 'Applicable Law and Jurisdiction',
        lawBody:
          'These conditions shall be governed by Spanish law. The parties expressly waive any jurisdiction that may correspond to them and expressly submit to the Courts and Tribunals of Alcalá de Henares to resolve any dispute that may arise regarding the interpretation or execution of these conditions.',
        supportTitle: 'Customer Support',
        supportBody:
          'If you have any questions or inquiries regarding these provisions or any other aspect of the website, please contact us directly:'
      }
    : {
        back: 'Volver al inicio',
        title: 'Aviso Legal',
        subtitle: 'Términos Generales y Condiciones de Uso',
        ownerTitle: 'Titular del Sitio Web',
        registrationTitle: 'Datos de Inscripción',
        companyNameLabel: 'Denominación Social',
        taxIdLabel: 'NIF',
        addressLabel: 'Domicilio Social',
        contactLabel: 'Contacto',
        phoneLabel: 'Teléfono',
        emailLabel: 'Email',
        registryLabel: 'Registro Mercantil',
        volumeLabel: 'Tomo',
        bookLabel: 'Libro',
        folioLabel: 'Folio',
        sectionLabel: 'Sección',
        sheetLabel: 'Hoja',
        intro:
          'Central de Envasados, S.A se reserva el derecho de modificar, en cualquier momento y sin necesidad de previo aviso, la presentación y configuración del sitio web, así como los contenidos y servicios que en él se incorporan. El usuario reconoce y acepta que en cualquier momento Central de Envasados, S.A puede interrumpir, desactivar y/o cancelar cualquiera de estos elementos que se integran en el sitio web o el acceso a los mismos.',
        ipTitle: 'Propiedad Intelectual',
        ipBody:
          'Todos los contenidos del sitio web, entendiendo por estos, a título enunciativo, los textos, fotografías, gráficos, imágenes, iconos, tecnología, software, así como su diseño gráfico y códigos fuente, constituyen una obra cuya propiedad pertenece a Central de Envasados, S.A, sin que puedan entenderse cedidos al usuario ninguno de los derechos de explotación sobre los mismos más allá de lo estrictamente necesario para el correcto uso del sitio web.',
        dataTitle: 'Protección de Datos',
        dataBody:
          'De conformidad con lo dispuesto en la Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y garantía de los derechos digitales, los datos personales facilitados serán tratados por Central de Envasados, S.A, con la finalidad de gestionar la relación con los usuarios del sitio web.',
        dataLinkPrefix: 'Para más información sobre nuestra política de protección de datos, consulte detalladamente nuestra ',
        dataLinkText: 'Política de Privacidad',
        liabilityTitle: 'Limitación de Responsabilidad',
        liabilityBody:
          'Central de Envasados, S.A no será responsable de la información, los servicios y/o productos ofrecidos y/o prestados por terceros a través del sitio web ni de los contenidos proporcionados por terceros. Central de Envasados, S.A no garantiza la fiabilidad, disponibilidad o continuidad del funcionamiento del sitio web ni de los productos o servicios puestos a disposición del usuario, por lo que excluye cualquier responsabilidad por los daños y/o perjuicios que puedan derivarse de la falta de disponibilidad, fiabilidad o continuidad de su sitio web o de sus servicios.',
        lawTitle: 'Ley Aplicable y Jurisdicción',
        lawBody:
          'Las presentes condiciones se regirán por la legislación española, que será de aplicación en lo no dispuesto en este aviso legal en materia de interpretación, validez y ejecución. Las partes renuncian expresamente al fuero que les pudiera corresponder y someten expresamente a los Juzgados y Tribunales de Alcalá de Henares para resolver cualquier controversia que pueda surgir en la interpretación o ejecución de estas condiciones.',
        supportTitle: 'Atención al Usuario',
        supportBody:
          'Para cualquier duda o consulta sobre estas disposiciones u otros aspectos de la web, no dude en contactarnos de forma directa:'
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
          <div className="mb-16 border-b border-white/10 pb-10">
            <h1 className="text-3xl lg:text-5xl font-light text-white mb-6 uppercase tracking-tight italic">
              {copy.title.split(' ')[0]} <span className="text-accent underline decoration-accent/30 underline-offset-8">{copy.title.split(' ').slice(1).join(' ')}</span>
            </h1>
            <p className="text-white/40 tracking-widest uppercase font-bold text-sm">
              {copy.subtitle}
            </p>
          </div>
          
          <div className="space-y-16 text-white/70 font-light leading-relaxed prose prose-invert max-w-none">
            
            <section className="grid md:grid-cols-2 gap-8">
              <div className="bg-white/[0.02] p-8 rounded-2xl border border-white/5 space-y-6">
                <h3 className="text-xl text-white font-medium flex items-center gap-3">
                  <Building2 className="w-6 h-6 text-accent shrink-0" />
                  {copy.ownerTitle}
                </h3>
                <div className="space-y-4">
                  <div>
                    <span className="block text-xs uppercase tracking-widest text-white/40 font-bold mb-1">{copy.companyNameLabel}</span>
                    <span className="text-white">Central de Envasados, S.A</span>
                  </div>
                  <div>
                    <span className="block text-xs uppercase tracking-widest text-white/40 font-bold mb-1">{copy.taxIdLabel}</span>
                    <span className="text-white">A78098654</span>
                  </div>
                  <div>
                    <span className="block text-xs uppercase tracking-widest text-white/40 font-bold mb-1">{copy.addressLabel}</span>
                    <span className="text-white">C/ Miguel Servet 10, 28806, Alcalá de Henares, Madrid</span>
                  </div>
                  <div className="pt-4 border-t border-white/10">
                    <span className="block text-xs uppercase tracking-widest text-white/40 font-bold mb-1">{copy.contactLabel}</span>
                    <span className="block text-white">{copy.phoneLabel}: +34 918 811 415</span>
                    <a href="mailto:contacto@centralenvasados.com" className="text-accent hover:underline block">{copy.emailLabel}: contacto@centralenvasados.com</a>
                  </div>
                </div>
              </div>

              <div className="bg-white/[0.02] p-8 rounded-2xl border border-white/5 space-y-6">
                <h3 className="text-xl text-white font-medium flex items-center gap-3">
                  <FileText className="w-6 h-6 text-accent shrink-0" />
                  {copy.registrationTitle}
                </h3>
                <div className="space-y-4">
                  <span className="block text-xs uppercase tracking-widest text-white/40 font-bold mb-1">{copy.registryLabel}</span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
                    <div className="bg-black/50 px-4 py-3 border-l-2 border-accent">
                      <span className="block text-[10px] uppercase text-white/40 font-bold">{copy.volumeLabel}</span>
                      <span className="text-lg">336</span>
                    </div>
                    <div className="bg-black/50 px-4 py-3 border-l-2 border-accent">
                      <span className="block text-[10px] uppercase text-white/40 font-bold">{copy.bookLabel}</span>
                      <span className="text-lg">-</span>
                    </div>
                    <div className="bg-black/50 px-4 py-3 border-l-2 border-accent">
                      <span className="block text-[10px] uppercase text-white/40 font-bold">{copy.folioLabel}</span>
                      <span className="text-lg">68</span>
                    </div>
                    <div className="bg-black/50 px-4 py-3 border-l-2 border-accent">
                      <span className="block text-[10px] uppercase text-white/40 font-bold">{copy.sectionLabel}</span>
                      <span className="text-lg">3</span>
                    </div>
                    <div className="col-span-2 bg-black/50 px-4 py-3 border-l-2 border-accent">
                      <span className="block text-[10px] uppercase text-white/40 font-bold">{copy.sheetLabel}</span>
                      <span className="text-lg">64306</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <p className="text-base text-white/80 leading-relaxed italic border-l border-white/20 pl-6 my-10">
                {copy.intro}
              </p>
            </section>

            <section>
              <h3 className="text-xl text-white font-medium mb-4 flex items-center gap-3">
                <Book className="w-6 h-6 text-accent shrink-0" />
                {copy.ipTitle}
              </h3>
              <p className="mb-4">
                {copy.ipBody}
              </p>
            </section>

            <section>
              <h3 className="text-xl text-white font-medium mb-4 flex items-center gap-3">
                <Scale className="w-6 h-6 text-accent shrink-0" />
                {copy.dataTitle}
              </h3>
              <p className="mb-4">
                {copy.dataBody}
              </p>
              <p className="text-sm">
                {copy.dataLinkPrefix}<Link to="/politica-privacidad" className="text-accent hover:underline">{copy.dataLinkText}</Link>.
              </p>
            </section>

            <section className="bg-black/50 p-8 rounded-3xl border border-white/5">
              <h3 className="text-xl text-white font-medium mb-4 flex items-center gap-3">
                <ShieldAlert className="w-6 h-6 text-accent shrink-0" />
                {copy.liabilityTitle}
              </h3>
              <p>
                {copy.liabilityBody}
              </p>
            </section>

            <section>
              <h3 className="text-xl text-white font-medium mb-4 flex items-center gap-3">
                <Scale className="w-6 h-6 text-accent shrink-0" />
                {copy.lawTitle}
              </h3>
              <p className="mb-4">
                {copy.lawBody}
              </p>
            </section>

            <section className="pt-8 border-t border-white/10 mt-16 max-w-lg">
              <h3 className="text-lg text-white font-medium mb-6 flex items-center gap-3">
                <PhoneCall className="w-5 h-5 text-accent shrink-0" />
                {copy.supportTitle}
              </h3>
              <p className="text-sm text-white/70 mb-4">
                {copy.supportBody}
              </p>
              <div className="flex flex-col gap-2 font-medium">
                <a href="tel:+34918811415" className="text-white hover:text-accent transition-colors">{copy.phoneLabel}: +34 918 811 415</a>
                <a href="mailto:contacto@centralenvasados.com" className="text-white hover:text-accent transition-colors">{copy.emailLabel}: contacto@centralenvasados.com</a>
              </div>
            </section>

          </div>
        </motion.div>
      </div>
    </div>
    </>
  );
};

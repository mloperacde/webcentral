import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Shield, Database, Lock, Mail, Cookie } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const PoliticaPrivacidadPage = () => {
  const { language } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const isEn = language === 'en';

  const copy = isEn
    ? {
        back: 'Back to Home',
        title: 'Privacy Policy',
        updatedLabel: 'Last updated',
        effectiveLabel: 'Effective date',
        intro:
          'This Privacy Policy describes the data collection, use, and protection practices applied by our company.',
        conditions:
          'These terms detail the collection, use, and disclosure of your information that we collect when you use our website (https://centralenvasados.com) (the “Service”). By accessing or using the Service, you consent to the collection, use, and disclosure of your information in accordance with this Privacy Policy. If you do not consent, please do not access or use the Service.',
        changes:
          'We may modify this Privacy Policy at any time without prior notice and will post the revised Privacy Policy on the Service. The revised Policy will become effective 180 days after it is posted on the Service, and your continued access or use of the Service after that time will constitute your acceptance of the revised Policy. We therefore recommend that you review this page periodically.',
        legalBasisTitle: 'Legal Basis and Purpose',
        legalBasisIntro: 'We process your personal data based on the following legal bases:',
        legalBasis1Title: 'Consent',
        legalBasis1Desc: 'For sending commercial communications and the use of non-technical cookies.',
        legalBasis2Title: 'Contractual Relationship',
        legalBasis2Desc: 'For handling requests, quotes, and providing co-packing services.',
        consentNote:
          'If we want to use your information for any other purpose, we will ask for your consent and will use your information only after receiving it and only for the purpose(s) for which you grant consent, unless required otherwise by law.',
        retentionTitle: 'Data Retention',
        retentionIntro:
          'We will retain your personal data only for as long as necessary to fulfill the purposes for which it was collected:',
        retention1: 'Contact/enquiry data: Until the enquiry is resolved or for 2 years after the last contact.',
        retention2:
          'Customer data: For the duration of the contractual relationship and, thereafter, for applicable legal limitation periods (generally 6 years under commercial regulations).',
        retention3: 'Marketing data: Until you withdraw your consent.',
        rightsTitle: 'Your Rights',
        rightsIntro: 'Depending on applicable law, you may have the right to:',
        rightsA1: 'Access and rectify your personal data.',
        rightsA2: 'Delete or receive a copy of your personal data.',
        rightsA3: 'Restrict or object to the active processing of your data.',
        rightsA4: 'Request that we share (port) your personal information to another entity.',
        rightsB1: 'Withdraw any consent you have provided to process your data.',
        rightsB2: 'Lodge a complaint with a legal authority.',
        rightsB3: 'Other relevant rights under applicable laws.',
        rightsHow:
          'To exercise these rights, you can write to us at contacto@centralenvasados.com. We will respond to your request in accordance with applicable law.',
        rightsNote:
          'Please note that if you do not allow us to collect or process the necessary personal information or withdraw consent for necessary processing purposes, you may not be able to access or use the services for which your information was requested.',
        cookiesTitle: 'Cookies and Tracking Technologies',
        cookiesBodyPrefix: 'For more information about how we use these technologies and your options, please see our ',
        cookiesLink: 'Cookies Policy',
        securityTitle: 'Security',
        securityBody:
          'The security of your information is important to us and we will use reasonable security measures to prevent loss, misuse, or unauthorized alteration of your information under our control. However, given inherent risks, we cannot guarantee absolute security of transmission.',
        dpoTitle: 'Data Protection Officer / Complaints',
        dpoIntro:
          'If you have any questions or concerns about the processing of your information that we have available, you can email our complaints officer:',
        dpoOutro: 'We will address your concerns in accordance with applicable law.'
      }
    : {
        back: 'Volver al inicio',
        title: 'Política de Privacidad',
        updatedLabel: 'Última actualización',
        effectiveLabel: 'Entrada en vigor',
        intro:
          'Esta Política de Privacidad describe las prácticas de recopilación, uso y protección de datos aplicadas por nuestra empresa.',
        conditions:
          'Las presentes condiciones detallan la recopilación, uso y divulgación de su información que reunimos cuando utiliza nuestro sitio web (https://centralenvasados.com) (el "Servicio"). Al acceder o utilizar el Servicio, usted consiente la recopilación, uso y divulgación de su información de acuerdo con esta Política de Privacidad. Si no consiente lo mismo, por favor no acceda ni utilice el Servicio.',
        changes:
          'Podemos modificar esta Política de Privacidad en cualquier momento sin previo aviso y publicaremos la Política de Privacidad revisada en el Servicio. La Política revisada entrará en vigor 180 días después de que se publique en el Servicio y su acceso continuo o uso del Servicio después de ese momento constituirá su aceptación de la Política de Privacidad revisada. Por lo tanto, recomendamos que revise esta página periódicamente.',
        legalBasisTitle: 'Base Jurídica y Finalidad',
        legalBasisIntro: 'Tratamos sus datos personales basándonos en las siguientes bases legales:',
        legalBasis1Title: 'Consentimiento',
        legalBasis1Desc: 'Para el envío de comunicaciones comerciales y el uso de cookies no técnicas.',
        legalBasis2Title: 'Relación Contractual',
        legalBasis2Desc: 'Para la gestión de solicitudes, presupuestos y prestación de servicios de co-packing.',
        consentNote:
          'Si queremos usar su información para cualquier otro propósito, le pediremos su consentimiento y utilizaremos su información solo después de recibirlo y solo para el propósito(s) para los cuales otorgue su consentimiento a menos que estemos obligados a hacer lo contrario por ley.',
        retentionTitle: 'Conservación de Datos',
        retentionIntro:
          'Conservaremos sus datos personales solo durante el tiempo necesario para cumplir con las finalidades para las que fueron recogidos:',
        retention1: 'Datos de contacto/consultas: Hasta la resolución de la consulta o durante 2 años tras el último contacto.',
        retention2:
          'Datos de clientes: Durante la vigencia de la relación contractual y, posteriormente, durante los plazos de prescripción legales aplicables (generalmente 6 años por normativa mercantil).',
        retention3: 'Datos de marketing: Hasta que retire su consentimiento.',
        rightsTitle: 'Sus Derechos',
        rightsIntro: 'Dependiendo de la ley que se aplique, usted puede tener derecho a:',
        rightsA1: 'Acceder y rectificar sus datos personales.',
        rightsA2: 'Borrar o recibir una copia de sus datos personales.',
        rightsA3: 'Restringir u oponerse al procesamiento activo de sus datos.',
        rightsA4: 'Solicitarnos que compartamos (portemos) su información personal a otra entidad.',
        rightsB1: 'Retirar cualquier consentimiento que nos haya proporcionado para procesar sus datos.',
        rightsB2: 'Presentar una queja ante una autoridad legal.',
        rightsB3: 'Otros derechos relevantes bajo las leyes aplicables.',
        rightsHow:
          'Para ejercer estos derechos, puede escribirnos a contacto@centralenvasados.com. Responderemos a su solicitud de acuerdo con la ley aplicable.',
        rightsNote:
          'Tenga en cuenta que si no nos permite recopilar o procesar la información personal necesaria o retira el consentimiento para procesar la misma para los propósitos necesarios, es posible que no pueda acceder o utilizar los servicios para los cuales se solicitó su información.',
        cookiesTitle: 'Cookies y Tecnologías de Rastreo',
        cookiesBodyPrefix:
          'Para obtener más información sobre cómo utilizamos estas y sus opciones en relación con estas tecnologías de seguimiento, consulte nuestra debida ',
        cookiesLink: 'Política de Cookies',
        securityTitle: 'Seguridad',
        securityBody:
          'La seguridad de su información es importante para nosotros y utilizaremos medidas de seguridad razonables para prevenir la pérdida, el mal uso o la alteración no autorizada de su información bajo nuestro control. Sin embargo, dados los riesgos inherentes, no podemos garantizar una seguridad absoluta en la transmisión.',
        dpoTitle: 'Oficial de Protección de Datos / Quejas',
        dpoIntro:
          'Si tiene alguna consulta o inquietud sobre el procesamiento de su información disponible con nosotros, puede enviar un correo electrónico a nuestro Oficial de Quejas:',
        dpoOutro: 'Abordaremos sus inquietudes de acuerdo con la ley aplicable.'
      };

  return (
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
              {isEn ? (
                <>
                  <span className="text-accent underline decoration-accent/30 underline-offset-8">Privacy</span> Policy
                </>
              ) : (
                <>
                  Política de <span className="text-accent underline decoration-accent/30 underline-offset-8">Privacidad</span>
                </>
              )}
            </h1>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-12 text-sm">
              <p className="text-white/40 tracking-widest uppercase font-bold">
                {copy.updatedLabel}: <span className="text-white/80">04-Jul-2024</span>
              </p>
              <p className="text-white/40 tracking-widest uppercase font-bold">
                {copy.effectiveLabel}: <span className="text-white/80">04-Jul-2024</span>
              </p>
            </div>
          </div>
          
          <div className="space-y-16 text-white/70 font-light leading-relaxed prose prose-invert max-w-none">
            
            <section>
              <p className="text-lg text-white/80 leading-relaxed mb-6">
                {copy.intro}
              </p>
              <div className="bg-white/[0.02] p-8 rounded-2xl border border-white/5 space-y-4">
                <p>
                  <strong>Central de Envasados S.A.</strong><br/>
                  Polígono Industrial La Garena Sur, C. de Miguel Servet, 10<br/>
                  Alcalá de Henares, Madrid 28806, {isEn ? 'Spain' : 'España'}<br/>
                  {isEn ? 'Email' : 'Correo electrónico'}: <a href="mailto:contacto@centralenvasados.com" className="text-accent hover:underline">contacto@centralenvasados.com</a><br/>
                  {isEn ? 'Phone' : 'Teléfono'}: +34 918 81 14 15
                </p>
              </div>
              <p className="mt-8">
                {isEn ? (
                  <>
                    These terms detail the collection, use, and disclosure of your information that we collect when you use our website (
                    <a href="https://centralenvasados.com" className="text-accent hover:underline">https://centralenvasados.com</a>
                    ) (the “Service”). By accessing or using the Service, you consent to the collection, use, and disclosure of your information in accordance with this Privacy Policy. If you do not consent, please do not access or use the Service.
                  </>
                ) : (
                  <>
                    Las presentes condiciones detallan la recopilación, uso y divulgación de su información que reunimos cuando utiliza nuestro sitio web (
                    <a href="https://centralenvasados.com" className="text-accent hover:underline">https://centralenvasados.com</a>
                    ) (el "Servicio"). Al acceder o utilizar el Servicio, usted consiente la recopilación, uso y divulgación de su información de acuerdo con esta Política de Privacidad. Si no consiente lo mismo, por favor no acceda ni utilice el Servicio.
                  </>
                )}
              </p>
              <p className="mt-4 text-sm text-white/50">
                {copy.changes}
              </p>
            </section>

            <section>
              <h3 className="text-xl text-white font-medium mb-6 flex items-center gap-3">
                <Database className="w-6 h-6 text-accent shrink-0" />
                {copy.legalBasisTitle}
              </h3>
              <p className="mb-4">
                {copy.legalBasisIntro}
              </p>
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                  <span className="text-accent text-[10px] uppercase font-bold tracking-widest block mb-2">Art. 6.1.a RGPD</span>
                  <p className="text-sm font-medium text-white mb-1">{copy.legalBasis1Title}</p>
                  <p className="text-xs text-white/50">{copy.legalBasis1Desc}</p>
                </div>
                <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                  <span className="text-accent text-[10px] uppercase font-bold tracking-widest block mb-2">Art. 6.1.b RGPD</span>
                  <p className="text-sm font-medium text-white mb-1">{copy.legalBasis2Title}</p>
                  <p className="text-xs text-white/50">{copy.legalBasis2Desc}</p>
                </div>
              </div>
              <p className="text-sm">
                {copy.consentNote}
              </p>
            </section>

            <section>
              <h3 className="text-xl text-white font-medium mb-6 flex items-center gap-3">
                <Lock className="w-6 h-6 text-accent shrink-0" />
                {copy.retentionTitle}
              </h3>
              <p className="mb-4">
                {copy.retentionIntro}
              </p>
              <ul className="list-disc list-inside space-y-2 text-sm ml-4 mb-6">
                <li>{copy.retention1}</li>
                <li>{copy.retention2}</li>
                <li>{copy.retention3}</li>
              </ul>
            </section>

            <section className="bg-black/50 p-8 rounded-3xl border-l-4 border-accent">
              <h3 className="text-xl text-white font-medium mb-6 flex items-center gap-3">
                <Shield className="w-6 h-6 text-accent shrink-0" />
                {copy.rightsTitle}
              </h3>
              <p className="mb-4">
                {copy.rightsIntro}
              </p>
              <div className="grid sm:grid-cols-2 gap-x-8 gap-y-2 mb-6 ml-4">
                <ul className="list-disc list-outside space-y-2 text-sm text-white/70">
                  <li>{copy.rightsA1}</li>
                  <li>{copy.rightsA2}</li>
                  <li>{copy.rightsA3}</li>
                  <li>{copy.rightsA4}</li>
                </ul>
                <ul className="list-disc list-outside space-y-2 text-sm text-white/70">
                  <li>{copy.rightsB1}</li>
                  <li>{copy.rightsB2}</li>
                  <li>{copy.rightsB3}</li>
                </ul>
              </div>
              <p className="text-sm">
                {isEn ? (
                  <>
                    To exercise these rights, you can write to{' '}
                    <a href="mailto:contacto@centralenvasados.com" className="text-accent font-medium hover:underline">contacto@centralenvasados.com</a>
                    . We will respond to your request in accordance with applicable law.
                  </>
                ) : (
                  <>
                    Para ejercer estos derechos, puede escribirnos a{' '}
                    <a href="mailto:contacto@centralenvasados.com" className="text-accent font-medium hover:underline">contacto@centralenvasados.com</a>
                    . Responderemos a su solicitud de acuerdo con la ley aplicable.
                  </>
                )}
              </p>
              <p className="mt-4 text-xs text-white/40 italic">
                {copy.rightsNote}
              </p>
            </section>

            <div className="grid md:grid-cols-2 gap-8">
              <section className="bg-white/[0.02] p-8 rounded-2xl border border-white/5">
                <h3 className="text-lg text-white font-medium mb-4 flex items-center gap-3">
                  <Cookie className="w-5 h-5 text-accent shrink-0" />
                  {copy.cookiesTitle}
                </h3>
                <p className="text-sm">
                  {copy.cookiesBodyPrefix}<Link to="/cookies" className="text-accent hover:underline">{copy.cookiesLink}</Link>.
                </p>
              </section>

              <section className="bg-white/[0.02] p-8 rounded-2xl border border-white/5">
                <h3 className="text-lg text-white font-medium mb-4 flex items-center gap-3">
                  <Lock className="w-5 h-5 text-accent shrink-0" />
                  {copy.securityTitle}
                </h3>
                <p className="text-sm">
                  {copy.securityBody}
                </p>
              </section>
            </div>

            <section className="pt-8 border-t border-white/10 mt-16">
              <h3 className="text-xl text-white font-medium mb-6 flex items-center gap-3">
                <Mail className="w-6 h-6 text-accent shrink-0" />
                {copy.dpoTitle}
              </h3>
              <p>
                {copy.dpoIntro}
              </p>
              <div className="mt-4 pl-9 text-white/80">
                <strong>Central de Envasados S.A.</strong><br/>
                Polígono Industrial La Garena Sur, C. de Miguel Servet, 10<br/>
                Correo electrónico: <a href="mailto:contacto@centralenvasados.com" className="text-accent font-medium hover:underline">contacto@centralenvasados.com</a>
              </div>
              <p className="mt-6 text-sm">
                {copy.dpoOutro}
              </p>
            </section>

          </div>
        </motion.div>
      </div>
    </div>
  );
};

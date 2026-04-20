import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Shield, FileText, Lock, AlertTriangle, ExternalLink, Download } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const CanalEticoPage = () => {
  const { language } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const centinelaUrl = "https://centinela.lefebvre.es/public/concept/1522932?access=2ui%2FPQJ1VZU1OLIcKnIyhZm8%2BHeOCc4fvQtvC59v68k%3D";
  const isEn = language === 'en';

  const copy = isEn
    ? {
        back: 'Back to Home',
        titleMain: 'Ethics',
        titleAccent: 'Channel',
        subtitle: 'Internal Information System',
        section1Title: 'Legal Information and Confidentiality Guarantee',
        section1Body:
          'Central de Envasados, S.A.’s internal information system allows you to report, safely and confidentially, any conduct that may involve a limitation of rights and guarantees as provided under Law 2/2023.',
        section1Callout:
          'If you submit a report, even if it is not anonymous, you should know that your identity is protected, cannot be disclosed to third parties, and the confidentiality of the data of the persons concerned and any third parties mentioned in the information provided is guaranteed.',
        section1Foot:
          'Any disclosures that must be made are subject to the safeguards established in applicable regulations.',
        section2Title: 'What can be reported?',
        section2Body:
          'The channel is enabled to report different types of conduct (in accordance with EU Directive 2019/1937). Reports can be submitted identified or anonymously. Examples include:',
        ex1: 'Corruption, bribery, or influence peddling',
        ex2: 'Workplace harassment, sexual harassment, or harassment based on sex/LGTBI',
        ex3: 'Breaches related to occupational risk prevention',
        ex4: 'Offences against public health or the environment',
        ex5: 'Violations of free competition rules',
        ex6: 'Other serious administrative or criminal offences',
        submitTitle: 'Submit a report',
        submitBody:
          'Access our secure external platform managed by “Centinela Lefebvre” to submit your report step-by-step, upload evidence, and preserve anonymity if desired.',
        submitButton: 'Access secure platform',
        dataTitle: 'Data Protection Information',
        controllerLabel: 'Data Controller',
        purposeLabel: 'Purpose',
        legalBasisLabel: 'Legal Basis',
        recipientsLabel: 'Recipients',
        controllerValue: 'CENTRAL DE ENVASADOS S.A. (A78098654)',
        purposeValue: 'Manage the ethics channel, communications, and reports.',
        legalBasisValue: 'Compliance with a legal obligation.',
        recipientsValue:
          'Data will not be shared with third parties except where legally required, and no international transfers are carried out.',
        rightsLabel: 'Exercise of Rights',
        rightsBodyPrefix:
          'You may exercise your rights of access, rectification, and deletion by emailing ',
        rightsBodySuffix:
          '. You may also lodge a complaint with the Spanish Data Protection Agency (AEPD).',
        docTitle: 'Internal Information System Policy',
        docMeta: 'Official Document',
        docButton: 'Read and Download'
      }
    : {
        back: 'Volver al inicio',
        titleMain: 'Canal',
        titleAccent: 'Ético',
        subtitle: 'Sistema Interno de Información',
        section1Title: 'Información Legal y Garantía de Confidencialidad',
        section1Body:
          'El sistema interno de información de Central de Envasados, S.A. permite reportar de forma segura y confidencial cualquier actuación que suponga una efectiva limitación de los derechos y garantías previstos en la Ley 2/2023.',
        section1Callout:
          'Si presentas una comunicación, incluso aunque no sea de manera anónima, debes conocer que queda preservada tu identidad, que no puede ser comunicada a terceros, y garantizada la confidencialidad de los datos correspondientes a las personas afectadas y a cualquier tercero que se mencione en la información suministrada.',
        section1Foot:
          'Las revelaciones que deban hacerse quedan sujetas a las salvaguardas establecidas en la normativa aplicable vigente.',
        section2Title: '¿Qué se puede comunicar?',
        section2Body:
          'El canal está habilitado para reportar diversas tipologías de conducta (conforme a la Directiva UE 2019/1937), pudiéndose realizar la comunicación tanto de forma identificada como anónima. Algunos ejemplos incluyen:',
        ex1: 'Corrupción, cohecho o tráfico de influencias',
        ex2: 'Acoso laboral, sexual o por razón de sexo/LGTBI',
        ex3: 'Infracciones en materia de prevención de riesgos',
        ex4: 'Delitos contra la salud pública o el medio ambiente',
        ex5: 'Vulneración de la Libre Competencia',
        ex6: 'Otras infracciones graves administrativas o penales',
        submitTitle: 'Presentar una comunicación',
        submitBody:
          'Accede a nuestra plataforma segura externa gestionada por "Centinela Lefebvre" para iniciar tu comunicación de forma guiada, habilitando la carga de evidencias y garantizando el anonimato si así lo deseas.',
        submitButton: 'Acceder a la plataforma segura',
        dataTitle: 'Información de Protección de Datos',
        controllerLabel: 'Responsable del Tratamiento',
        purposeLabel: 'Finalidad',
        legalBasisLabel: 'Legitimación',
        recipientsLabel: 'Destinatarios',
        controllerValue: 'CENTRAL DE ENVASADOS S.A. (A78098654)',
        purposeValue: 'Gestionar el canal ético, de comunicación y denuncias.',
        legalBasisValue: 'Cumplimiento de una obligación legal.',
        recipientsValue:
          'No se cederán datos a terceros salvo obligación legal, ni se harán transferencias internacionales.',
        rightsLabel: 'Ejercicio de Derechos',
        rightsBodyPrefix:
          'Puede ejercer sus derechos de acceso, rectificación y supresión enviando un correo a ',
        rightsBodySuffix:
          '. También puede presentar una reclamación ante la Agencia Española de Protección de Datos (AEPD).',
        docTitle: 'Política del Sistema Interno de Información',
        docMeta: 'Documento Oficial',
        docButton: 'Leer y Descargar'
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
              {copy.titleMain} <span className="text-accent underline decoration-accent/30 underline-offset-8">{copy.titleAccent}</span>
            </h1>
            <p className="text-white/40 tracking-widest uppercase font-bold text-sm">
              {copy.subtitle}
            </p>
          </div>
          
          <div className="space-y-16 text-white/70 font-light leading-relaxed prose prose-invert max-w-none">
            
            <section className="bg-white/[0.02] p-8 md:p-10 rounded-2xl border border-white/5 space-y-6">
              <h3 className="text-xl text-white font-medium flex items-center gap-3">
                <Shield className="w-6 h-6 text-accent shrink-0" />
                {copy.section1Title}
              </h3>
              <p>
                {copy.section1Body}
              </p>
              <div className="bg-black/50 p-6 border-l-4 border-accent italic text-white/80">
                <p>
                  {copy.section1Callout}
                </p>
              </div>
              <p className="text-sm text-white/50">
                {copy.section1Foot}
              </p>
            </section>

            <section className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h3 className="text-xl text-white font-medium flex items-center gap-3">
                  <AlertTriangle className="w-6 h-6 text-accent shrink-0" />
                  {copy.section2Title}
                </h3>
                <p className="mb-4">
                  {copy.section2Body}
                </p>
                <div className="grid grid-cols-1 gap-2 text-sm text-white/80">
                  <div className="flex items-center gap-3 bg-white/[0.02] p-3 rounded-lg border border-white/5">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                    <span>{copy.ex1}</span>
                  </div>
                  <div className="flex items-center gap-3 bg-white/[0.02] p-3 rounded-lg border border-white/5">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                    <span>{copy.ex2}</span>
                  </div>
                  <div className="flex items-center gap-3 bg-white/[0.02] p-3 rounded-lg border border-white/5">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                    <span>{copy.ex3}</span>
                  </div>
                  <div className="flex items-center gap-3 bg-white/[0.02] p-3 rounded-lg border border-white/5">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                    <span>{copy.ex4}</span>
                  </div>
                  <div className="flex items-center gap-3 bg-white/[0.02] p-3 rounded-lg border border-white/5">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                    <span>{copy.ex5}</span>
                  </div>
                  <div className="flex items-center gap-3 bg-white/[0.02] p-3 rounded-lg border border-white/5">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                    <span>{copy.ex6}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-accent/10 p-8 rounded-2xl border border-accent/20 flex flex-col justify-center h-full items-start">
                  <h4 className="text-white font-medium mb-4 text-lg">{copy.submitTitle}</h4>
                  <p className="text-sm text-white/70 mb-8">
                    {copy.submitBody}
                  </p>
                  <a 
                    href={centinelaUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 bg-accent text-white px-6 py-4 rounded-xl hover:bg-accent/90 transition-all font-medium uppercase tracking-wider text-xs"
                  >
                    {copy.submitButton}
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </section>

            <section className="bg-white/[0.02] p-8 rounded-2xl border border-white/5">
              <h3 className="text-xl text-white font-medium mb-6 flex items-center gap-3">
                <Lock className="w-6 h-6 text-accent shrink-0" />
                {copy.dataTitle}
              </h3>
              <div className="grid sm:grid-cols-2 gap-y-6 gap-x-12 text-sm">
                <div>
                  <span className="block text-accent font-bold uppercase tracking-wider text-[10px] mb-1">{copy.controllerLabel}</span>
                  <span className="text-white">{copy.controllerValue}</span>
                </div>
                <div>
                  <span className="block text-accent font-bold uppercase tracking-wider text-[10px] mb-1">{copy.purposeLabel}</span>
                  <span className="text-white">{copy.purposeValue}</span>
                </div>
                <div>
                  <span className="block text-accent font-bold uppercase tracking-wider text-[10px] mb-1">{copy.legalBasisLabel}</span>
                  <span className="text-white">{copy.legalBasisValue}</span>
                </div>
                <div>
                  <span className="block text-accent font-bold uppercase tracking-wider text-[10px] mb-1">{copy.recipientsLabel}</span>
                  <span className="text-white">{copy.recipientsValue}</span>
                </div>
                <div className="sm:col-span-2 pt-4 border-t border-white/10">
                  <span className="block text-accent font-bold uppercase tracking-wider text-[10px] mb-2">{copy.rightsLabel}</span>
                  <p className="text-white/70">
                    {copy.rightsBodyPrefix}
                    <a href="mailto:contacto@centralenvasados.com" className="text-white hover:text-accent transition-colors">contacto@centralenvasados.com</a>
                    {copy.rightsBodySuffix.replace('Agencia Española de Protección de Datos (AEPD)', isEn ? 'Spanish Data Protection Agency (AEPD)' : 'Agencia Española de Protección de Datos (AEPD)')}
                  </p>
                </div>
              </div>
            </section>

            <section className="pt-8 border-t border-white/10 mt-16 flex items-center justify-between flex-wrap gap-6">
              <div className="flex items-center gap-4">
                <FileText className="w-8 h-8 text-white/20" />
                <div>
                  <h4 className="text-white font-medium">{copy.docTitle}</h4>
                  <span className="text-xs text-white/50 uppercase tracking-wider">{copy.docMeta}</span>
                </div>
              </div>
              <Link 
                to="/politica-sistema-informacion"
                className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-black bg-accent px-6 py-3 rounded-lg hover:bg-white transition-colors"
              >
                <Download className="w-4 h-4" />
                {copy.docButton}
              </Link>
            </section>

          </div>
        </motion.div>
      </div>
    </div>
  );
};

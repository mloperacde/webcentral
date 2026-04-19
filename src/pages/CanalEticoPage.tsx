import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Shield, FileText, Lock, AlertTriangle, ExternalLink, Download } from 'lucide-react';

export const CanalEticoPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const centinelaUrl = "https://centinela.lefebvre.es/public/concept/1522932?access=2ui%2FPQJ1VZU1OLIcKnIyhZm8%2BHeOCc4fvQtvC59v68k%3D";

  return (
    <div className="bg-black min-h-screen text-white pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/" className="inline-flex items-center gap-3 text-white/60 hover:text-white transition-colors mb-12 text-[10px] font-bold uppercase tracking-[0.2em]">
          <ArrowLeft className="w-4 h-4" />
          Volver al inicio
        </Link>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-16 border-b border-white/10 pb-10">
            <h1 className="text-3xl lg:text-5xl font-light text-white mb-6 uppercase tracking-tight italic">
              Canal <span className="text-accent underline decoration-accent/30 underline-offset-8">Ético</span>
            </h1>
            <p className="text-white/40 tracking-widest uppercase font-bold text-sm">
              Sistema Interno de Información
            </p>
          </div>
          
          <div className="space-y-16 text-white/70 font-light leading-relaxed prose prose-invert max-w-none">
            
            <section className="bg-white/[0.02] p-8 md:p-10 rounded-2xl border border-white/5 space-y-6">
              <h3 className="text-xl text-white font-medium flex items-center gap-3">
                <Shield className="w-6 h-6 text-accent shrink-0" />
                Información Legal y Garantía de Confidencialidad
              </h3>
              <p>
                El sistema interno de información de Central de Envasados, S.A. permite reportar de forma segura y confidencial cualquier actuación que suponga una efectiva limitación de los derechos y garantías previstos en la Ley 2/2023.
              </p>
              <div className="bg-black/50 p-6 border-l-4 border-accent italic text-white/80">
                <p>
                  Si presentas una comunicación, incluso aunque no sea de manera anónima, debes conocer que <strong>queda preservada tu identidad</strong>, que no puede ser comunicada a terceros, y garantizada la confidencialidad de los datos correspondientes a las personas afectadas y a cualquier tercero que se mencione en la información suministrada.
                </p>
              </div>
              <p className="text-sm text-white/50">
                Las revelaciones que deban hacerse quedan sujetas a las salvaguardas establecidas en la normativa aplicable vigente.
              </p>
            </section>

            <section className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h3 className="text-xl text-white font-medium flex items-center gap-3">
                  <AlertTriangle className="w-6 h-6 text-accent shrink-0" />
                  ¿Qué se puede comunicar?
                </h3>
                <p className="mb-4">
                  El canal está habilitado para reportar diversas tipologías de conducta (conforme a la Directiva UE 2019/1937), pudiéndose realizar la comunicación tanto de forma identificada como <strong>anónima</strong>. Algunos ejemplos incluyen:
                </p>
                <div className="grid grid-cols-1 gap-2 text-sm text-white/80">
                  <div className="flex items-center gap-3 bg-white/[0.02] p-3 rounded-lg border border-white/5">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                    <span>Corrupción, cohecho o tráfico de influencias</span>
                  </div>
                  <div className="flex items-center gap-3 bg-white/[0.02] p-3 rounded-lg border border-white/5">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                    <span>Acoso laboral, sexual o por razón de sexo/LGTBI</span>
                  </div>
                  <div className="flex items-center gap-3 bg-white/[0.02] p-3 rounded-lg border border-white/5">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                    <span>Infracciones en materia de prevención de riesgos</span>
                  </div>
                  <div className="flex items-center gap-3 bg-white/[0.02] p-3 rounded-lg border border-white/5">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                    <span>Delitos contra la salud pública o el medio ambiente</span>
                  </div>
                  <div className="flex items-center gap-3 bg-white/[0.02] p-3 rounded-lg border border-white/5">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                    <span>Vulneración de la Libre Competencia</span>
                  </div>
                  <div className="flex items-center gap-3 bg-white/[0.02] p-3 rounded-lg border border-white/5">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                    <span>Otras infracciones graves administrativas o penales</span>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-accent/10 p-8 rounded-2xl border border-accent/20 flex flex-col justify-center h-full items-start">
                  <h4 className="text-white font-medium mb-4 text-lg">Presentar una comunicación</h4>
                  <p className="text-sm text-white/70 mb-8">
                    Accede a nuestra plataforma segura externa gestionada por "Centinela Lefebvre" para iniciar tu comunicación de forma guiada, habilitando la carga de evidencias y garantizando el anonimato si así lo deseas.
                  </p>
                  <a 
                    href={centinelaUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 bg-accent text-white px-6 py-4 rounded-xl hover:bg-accent/90 transition-all font-medium uppercase tracking-wider text-xs"
                  >
                    Acceder a la plataforma segura
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </section>

            <section className="bg-white/[0.02] p-8 rounded-2xl border border-white/5">
              <h3 className="text-xl text-white font-medium mb-6 flex items-center gap-3">
                <Lock className="w-6 h-6 text-accent shrink-0" />
                Información de Protección de Datos
              </h3>
              <div className="grid sm:grid-cols-2 gap-y-6 gap-x-12 text-sm">
                <div>
                  <span className="block text-accent font-bold uppercase tracking-wider text-[10px] mb-1">Responsable del Tratamiento</span>
                  <span className="text-white">CENTRAL DE ENVASADOS S.A. (A78098654)</span>
                </div>
                <div>
                  <span className="block text-accent font-bold uppercase tracking-wider text-[10px] mb-1">Finalidad</span>
                  <span className="text-white">Gestionar el canal ético, de comunicación y denuncias.</span>
                </div>
                <div>
                  <span className="block text-accent font-bold uppercase tracking-wider text-[10px] mb-1">Legitimación</span>
                  <span className="text-white">Cumplimiento de una obligación legal.</span>
                </div>
                <div>
                  <span className="block text-accent font-bold uppercase tracking-wider text-[10px] mb-1">Destinatarios</span>
                  <span className="text-white">No se cederán datos a terceros salvo obligación legal, ni se harán transferencias internacionales.</span>
                </div>
                <div className="sm:col-span-2 pt-4 border-t border-white/10">
                  <span className="block text-accent font-bold uppercase tracking-wider text-[10px] mb-2">Ejercicio de Derechos</span>
                  <p className="text-white/70">
                    Puede ejercer sus derechos de acceso, rectificación y supresión enviando un correo a <a href="mailto:contacto@centralenvasados.com" className="text-white hover:text-accent transition-colors">contacto@centralenvasados.com</a>. También puede presentar una reclamación ante la <a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer" className="text-white hover:text-accent transition-colors">Agencia Española de Protección de Datos (AEPD)</a>.
                  </p>
                </div>
              </div>
            </section>

            <section className="pt-8 border-t border-white/10 mt-16 flex items-center justify-between flex-wrap gap-6">
              <div className="flex items-center gap-4">
                <FileText className="w-8 h-8 text-white/20" />
                <div>
                  <h4 className="text-white font-medium">Política del Sistema Interno de Información</h4>
                  <span className="text-xs text-white/50 uppercase tracking-wider">Documento Oficial</span>
                </div>
              </div>
              <Link 
                to="/politica-sistema-informacion"
                className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-black bg-accent px-6 py-3 rounded-lg hover:bg-white transition-colors"
              >
                <Download className="w-4 h-4" />
                Leer y Descargar
              </Link>
            </section>

          </div>
        </motion.div>
      </div>
    </div>
  );
};

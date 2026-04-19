import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Building2, Book, ShieldAlert, Scale, PhoneCall, FileText } from 'lucide-react';

export const AvisoLegalPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
              Aviso <span className="text-accent underline decoration-accent/30 underline-offset-8">Legal</span>
            </h1>
            <p className="text-white/40 tracking-widest uppercase font-bold text-sm">
              Términos Generales y Condiciones de Uso
            </p>
          </div>
          
          <div className="space-y-16 text-white/70 font-light leading-relaxed prose prose-invert max-w-none">
            
            <section className="grid md:grid-cols-2 gap-8">
              <div className="bg-white/[0.02] p-8 rounded-2xl border border-white/5 space-y-6">
                <h3 className="text-xl text-white font-medium flex items-center gap-3">
                  <Building2 className="w-6 h-6 text-accent shrink-0" />
                  Titular del Sitio Web
                </h3>
                <div className="space-y-4">
                  <div>
                    <span className="block text-xs uppercase tracking-widest text-white/40 font-bold mb-1">Denominación Social</span>
                    <span className="text-white">Central de Envasados, S.A</span>
                  </div>
                  <div>
                    <span className="block text-xs uppercase tracking-widest text-white/40 font-bold mb-1">NIF</span>
                    <span className="text-white">A78098654</span>
                  </div>
                  <div>
                    <span className="block text-xs uppercase tracking-widest text-white/40 font-bold mb-1">Domicilio Social</span>
                    <span className="text-white">C/ Miguel Servet 10, 28806, Alcalá de Henares, Madrid</span>
                  </div>
                  <div className="pt-4 border-t border-white/10">
                    <span className="block text-xs uppercase tracking-widest text-white/40 font-bold mb-1">Contacto</span>
                    <span className="block text-white">Teléfono: +34 918 811 415</span>
                    <a href="mailto:contacto@centralenvasados.com" className="text-accent hover:underline block">Email: contacto@centralenvasados.com</a>
                  </div>
                </div>
              </div>

              <div className="bg-white/[0.02] p-8 rounded-2xl border border-white/5 space-y-6">
                <h3 className="text-xl text-white font-medium flex items-center gap-3">
                  <FileText className="w-6 h-6 text-accent shrink-0" />
                  Datos de Inscripción
                </h3>
                <div className="space-y-4">
                  <span className="block text-xs uppercase tracking-widest text-white/40 font-bold mb-1">Registro Mercantil</span>
                  <div className="grid grid-cols-2 gap-4 mt-2">
                    <div className="bg-black/50 px-4 py-3 border-l-2 border-accent">
                      <span className="block text-[10px] uppercase text-white/40 font-bold">Tomo</span>
                      <span className="text-lg">336</span>
                    </div>
                    <div className="bg-black/50 px-4 py-3 border-l-2 border-accent">
                      <span className="block text-[10px] uppercase text-white/40 font-bold">Libro</span>
                      <span className="text-lg">-</span>
                    </div>
                    <div className="bg-black/50 px-4 py-3 border-l-2 border-accent">
                      <span className="block text-[10px] uppercase text-white/40 font-bold">Folio</span>
                      <span className="text-lg">68</span>
                    </div>
                    <div className="bg-black/50 px-4 py-3 border-l-2 border-accent">
                      <span className="block text-[10px] uppercase text-white/40 font-bold">Sección</span>
                      <span className="text-lg">3</span>
                    </div>
                    <div className="col-span-2 bg-black/50 px-4 py-3 border-l-2 border-accent">
                      <span className="block text-[10px] uppercase text-white/40 font-bold">Hoja</span>
                      <span className="text-lg">64306</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <p className="text-base text-white/80 leading-relaxed italic border-l border-white/20 pl-6 my-10">
                Central de Envasados, S.A se reserva el derecho de modificar, en cualquier momento y sin necesidad de previo aviso, la presentación y configuración del sitio web, así como los contenidos y servicios que en él se incorporan. El usuario reconoce y acepta que en cualquier momento Central de Envasados, S.A puede interrumpir, desactivar y/o cancelar cualquiera de estos elementos que se integran en el sitio web o el acceso a los mismos.
              </p>
            </section>

            <section>
              <h3 className="text-xl text-white font-medium mb-4 flex items-center gap-3">
                <Book className="w-6 h-6 text-accent shrink-0" />
                Propiedad Intelectual
              </h3>
              <p className="mb-4">
                Todos los contenidos del sitio web, entendiendo por estos, a título enunciativo, los textos, fotografías, gráficos, imágenes, iconos, tecnología, software, así como su diseño gráfico y códigos fuente, constituyen una obra cuya propiedad pertenece a Central de Envasados, S.A, sin que puedan entenderse cedidos al usuario ninguno de los derechos de explotación sobre los mismos más allá de lo estrictamente necesario para el correcto uso del sitio web.
              </p>
            </section>

            <section>
              <h3 className="text-xl text-white font-medium mb-4 flex items-center gap-3">
                <Scale className="w-6 h-6 text-accent shrink-0" />
                Protección de Datos
              </h3>
              <p className="mb-4">
                De conformidad con lo dispuesto en la Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y garantía de los derechos digitales, los datos personales facilitados serán tratados por Central de Envasados, S.A, con la finalidad de gestionar la relación con los usuarios del sitio web. 
              </p>
              <p className="text-sm">
                Para más información sobre nuestra política de protección de datos, consulte detalladamente nuestra <Link to="/politica-privacidad" className="text-accent hover:underline">Política de Privacidad</Link>.
              </p>
            </section>

            <section className="bg-black/50 p-8 rounded-3xl border border-white/5">
              <h3 className="text-xl text-white font-medium mb-4 flex items-center gap-3">
                <ShieldAlert className="w-6 h-6 text-accent shrink-0" />
                Limitación de Responsabilidad
              </h3>
              <p>
                Central de Envasados, S.A no será responsable de la información, los servicios y/o productos ofrecidos y/o prestados por terceros a través del sitio web ni de los contenidos proporcionados por terceros. Central de Envasados, S.A no garantiza la fiabilidad, disponibilidad o continuidad del funcionamiento del sitio web ni de los productos o servicios puestos a disposición del usuario, por lo que excluye cualquier responsabilidad por los daños y/o perjuicios que puedan derivarse de la falta de disponibilidad, fiabilidad o continuidad de su sitio web o de sus servicios.
              </p>
            </section>

            <section>
              <h3 className="text-xl text-white font-medium mb-4 flex items-center gap-3">
                <Scale className="w-6 h-6 text-accent shrink-0" />
                Ley Aplicable y Jurisdicción
              </h3>
              <p className="mb-4">
                Las presentes condiciones se regirán por la legislación española, que será de aplicación en lo no dispuesto en este aviso legal en materia de interpretación, validez y ejecución. Las partes renuncian expresamente al fuero que les pudiera corresponder y someten expresamente a los Juzgados y Tribunales de Alcalá de Henares para resolver cualquier controversia que pueda surgir en la interpretación o ejecución de estas condiciones.
              </p>
            </section>

            <section className="pt-8 border-t border-white/10 mt-16 max-w-lg">
              <h3 className="text-lg text-white font-medium mb-6 flex items-center gap-3">
                <PhoneCall className="w-5 h-5 text-accent shrink-0" />
                Atención al Usuario
              </h3>
              <p className="text-sm text-white/70 mb-4">
                Para cualquier duda o consulta sobre estas disposiciones u otros aspectos de la web, no dude en contactarnos de forma directa:
              </p>
              <div className="flex flex-col gap-2 font-medium">
                <a href="tel:+34918811415" className="text-white hover:text-accent transition-colors">Teléfono: +34 918 811 415</a>
                <a href="mailto:contacto@centralenvasados.com" className="text-white hover:text-accent transition-colors">Email: contacto@centralenvasados.com</a>
              </div>
            </section>

          </div>
        </motion.div>
      </div>
    </div>
  );
};

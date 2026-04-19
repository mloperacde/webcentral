import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Cookie, Shield, Info, Settings } from 'lucide-react';

export const CookiesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-black min-h-screen text-white pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/" className="inline-flex items-center gap-3 text-white/40 hover:text-white transition-all mb-16 text-[10px] font-bold uppercase tracking-[0.3em] group">
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          Volver al inicio
        </Link>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-[1px] bg-accent/50" />
            <span className="text-accent text-[10px] uppercase tracking-[0.4em] font-bold">Información Legal</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-light text-white mb-16 uppercase tracking-tight italic leading-tight">
            Política de <span className="text-accent underline decoration-accent/20 underline-offset-[12px]">Cookies</span>
          </h1>
          
          <div className="prose prose-invert max-w-none space-y-12 text-white/70 font-light leading-relaxed">
            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-sm">
              <div className="flex items-start gap-4">
                <Cookie className="w-6 h-6 text-accent shrink-0 mt-1" />
                <div>
                  <h2 className="text-xl text-white font-medium mb-4 mt-0 uppercase tracking-wider italic">¿Qué son las cookies?</h2>
                  <p>
                    Las cookies son pequeños archivos de texto que los sitios web almacenan en su ordenador, teléfono inteligente, tableta o cualquier otro dispositivo con el que acceda a Internet.
                  </p>
                  <p>
                    Se utilizan para que los sitios web funcionen o funcionen de forma más eficiente, así como para proporcionar información a los propietarios del sitio. Las cookies permiten a un sitio web, entre otras cosas, almacenar y recuperar información sobre los hábitos de navegación de un usuario o de su equipo y, dependiendo de la información que contengan y de la forma en que utilice su equipo, pueden utilizarse para reconocer al usuario.
                  </p>
                </div>
              </div>
            </div>

            <section className="space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <Shield className="w-5 h-5 text-accent/60" />
                <h2 className="text-2xl text-white font-medium uppercase tracking-widest italic m-0">Tipos de cookies que utilizamos</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 border border-white/5 rounded-xl bg-gradient-to-br from-white/[0.02] to-transparent">
                  <h3 className="text-white font-medium mb-3 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                    Cookies Técnicas (Necesarias)
                  </h3>
                  <p className="text-sm">Son aquellas que permiten al usuario la navegación a través de una página web y la utilización de las diferentes opciones o servicios que en ella existan. Son esenciales para el funcionamiento de la web.</p>
                </div>
                
                <div className="p-6 border border-white/5 rounded-xl bg-gradient-to-br from-white/[0.02] to-transparent">
                  <h3 className="text-white font-medium mb-3 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                    Cookies de Análisis
                  </h3>
                  <p className="text-sm">Permiten cuantificar el número de usuarios y realizar la medición y análisis estadístico de la utilización que hacen los usuarios del servicio ofertado. Para ello se analiza su navegación en nuestra página web con el fin de mejorar la oferta de productos o servicios.</p>
                </div>

                <div className="p-6 border border-white/5 rounded-xl bg-gradient-to-br from-white/[0.02] to-transparent">
                  <h3 className="text-white font-medium mb-3 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                    Cookies de Personalización
                  </h3>
                  <p className="text-sm">Son aquellas que permiten al usuario acceder al servicio con algunas características de carácter general predefinidas en función de una serie de criterios en el terminal del usuario como por ejemplo el idioma o el tipo de navegador.</p>
                </div>

                <div className="p-6 border border-white/5 rounded-xl bg-gradient-to-br from-white/[0.02] to-transparent">
                  <h3 className="text-white font-medium mb-3 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                    Cookies de Publicidad
                  </h3>
                  <p className="text-sm">Son aquellas que permiten la gestión, de la forma más eficaz posible, de los espacios publicitarios que, en su caso, el editor haya incluido en una página web.</p>
                </div>
              </div>
            </section>

            <section className="space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <Settings className="w-5 h-5 text-accent/60" />
                <h2 className="text-2xl text-white font-medium uppercase tracking-widest italic m-0">Cómo gestionar las cookies</h2>
              </div>
              <p>
                Usted puede permitir, bloquear o eliminar las cookies instaladas en su equipo mediante la configuración de las opciones del navegador instalado en su ordenador. Si no está seguro de cómo hacerlo, puede consultar la ayuda de su navegador:
              </p>
              <ul className="grid grid-cols-2 sm:grid-cols-4 gap-4 list-none p-0">
                {['Google Chrome', 'Mozilla Firefox', 'Safari', 'Microsoft Edge'].map((browser) => (
                  <li key={browser} className="text-sm border border-white/10 rounded-lg p-3 text-center hover:bg-white/5 transition-colors cursor-default">
                    {browser}
                  </li>
                ))}
              </ul>
              <p className="text-sm italic text-white/50 bg-accent/5 p-4 rounded-lg border-l-2 border-accent">
                Tenga en cuenta que, si decide bloquear o eliminar las cookies, esto podría afectar al correcto funcionamiento del sitio web o a la calidad de su experiencia de navegación.
              </p>
            </section>

            <section className="space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <Info className="w-5 h-5 text-accent/60" />
                <h2 className="text-2xl text-white font-medium uppercase tracking-widest italic m-0">Actualizaciones</h2>
              </div>
              <p>
                CENTRAL DE ENVASADOS, S.A. puede modificar esta Política de Cookies en función de exigencias legislativas, reglamentarias, o con la finalidad de adaptar dicha política a las instrucciones dictadas por la Agencia Española de Protección de Datos.
              </p>
              <p className="pb-20">Última actualización: Abril 2026.</p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

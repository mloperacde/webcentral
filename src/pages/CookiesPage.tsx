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
                <Shield className="w-5 h-5 text-accent/60" />
                <h2 className="text-2xl text-white font-medium uppercase tracking-widest italic m-0">Cookies específicas que utilizamos</h2>
              </div>
              
              <div className="overflow-x-auto rounded-2xl border border-white/10 bg-white/[0.02]">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-white/10 bg-white/5 uppercase text-[10px] tracking-[0.2em] font-bold text-accent">
                      <th className="p-4">Cookie</th>
                      <th className="p-4">Duración</th>
                      <th className="p-4">Finalidad</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm text-white/60 font-light">
                    <tr className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                      <td className="p-4 font-medium text-white">_GRECAPTCHA</td>
                      <td className="p-4 italic">6 meses</td>
                      <td className="p-4">Google Recaptcha: Identificación de bots para protección contra spam.</td>
                    </tr>
                    <tr className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                      <td className="p-4 font-medium text-white">rc::a, rc::b, rc::c</td>
                      <td className="p-4 italic">Sesión/Nunca</td>
                      <td className="p-4">Servicio técnico de seguridad para la validación de integridad del usuario.</td>
                    </tr>
                    <tr className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                      <td className="p-4 font-medium text-white">cookie-consent</td>
                      <td className="p-4 italic">1 año</td>
                      <td className="p-4">Recuerda las preferencias de consentimiento del usuario para no mostrar el banner en cada visita.</td>
                    </tr>
                    <tr className="hover:bg-white/[0.02] transition-colors">
                      <td className="p-4 font-medium text-white">wpEmojiSettings</td>
                      <td className="p-4 italic">Sesión</td>
                      <td className="p-4">Determinación técnica de la capacidad del navegador para mostrar caracteres especiales.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <Settings className="w-5 h-5 text-accent/60" />
                <h2 className="text-2xl text-white font-medium uppercase tracking-widest italic m-0">Gestión de preferencias</h2>
              </div>
              <p>
                Usted puede cambiar sus preferencias de cookies en cualquier momento. Esto le permitirá volver a ver el banner de consentimiento de cookies y cambiar sus preferencias o retirar su consentimiento de inmediato:
              </p>
              <button 
                onClick={() => {
                  localStorage.removeItem('cookie-consent');
                  window.location.reload();
                }}
                className="inline-flex items-center gap-3 px-8 py-4 bg-accent text-black text-[10px] font-bold uppercase tracking-widest rounded-full hover:scale-105 transition-transform"
              >
                Restablecer configuración de cookies
              </button>
              
              <div className="h-12" />
              
              <p>
                Además, puede gestionar las cookies directamente desde su navegador:
              </p>
              <ul className="grid grid-cols-2 lg:grid-cols-4 gap-4 list-none p-0">
                {[
                  { name: 'Google Chrome', url: 'https://support.google.com/accounts/answer/32050' },
                  { name: 'Mozilla Firefox', url: 'https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias' },
                  { name: 'Safari', url: 'https://support.apple.com/es-es/guide/safari/sfri11471/mac' },
                  { name: 'Microsoft Edge', url: 'https://support.microsoft.com/es-es/windows/eliminar-y-administrar-cookies-168dab11-0753-043d-7c16-ede5947792d2' }
                ].map((browser) => (
                  <li key={browser.name}>
                    <a 
                      href={browser.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="block text-[11px] font-bold uppercase tracking-widest border border-white/10 rounded-xl p-4 text-center hover:bg-white/5 hover:border-accent/40 transition-all text-white/50 hover:text-accent"
                    >
                      {browser.name}
                    </a>
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

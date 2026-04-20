import { useEffect } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Cookie, Shield, Info, Settings } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { PageMeta } from '../components/PageMeta';

export const CookiesPage = () => {
  const { language } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const isEn = language === 'en';

  const metaTitle = isEn ? 'Cookie Policy | Central Envasados' : 'Política de Cookies | Central Envasados';
  const metaDesc = isEn
    ? 'Information about the cookies we use on our website and how to manage your preferences.'
    : 'Información sobre las cookies que utilizamos en nuestra web y cómo gestionar tus preferencias.';

  const copy = isEn
    ? {
        back: 'Back to Home',
        kicker: 'Legal Information',
        titleMain: 'Cookies',
        titlePrefix: 'Cookies',
        titleSuffix: 'Policy',
        whatTitle: 'What are cookies?',
        whatP1:
          'Cookies are small text files that websites store on your computer, smartphone, tablet, or any other device you use to access the Internet.',
        whatP2:
          'They are used to make websites work, or work more efficiently, as well as to provide information to site owners. Cookies allow a website, among other things, to store and retrieve information about a user’s browsing habits or their device and, depending on the information they contain and how the device is used, they can be used to recognize the user.',
        typesTitle: 'Types of cookies we use',
        type1Title: 'Technical Cookies (Necessary)',
        type1Body:
          'These enable users to browse the website and use the different options or services available. They are essential for the website to function.',
        type2Title: 'Analytics Cookies',
        type2Body:
          'These allow us to quantify the number of users and perform measurement and statistical analysis of how users use the service. This helps us improve our offering.',
        type3Title: 'Personalization Cookies',
        type3Body:
          'These allow users to access the service with some predefined general characteristics based on criteria such as language or browser type.',
        type4Title: 'Advertising Cookies',
        type4Body:
          'These allow the management, in the most efficient way possible, of advertising spaces that the publisher may have included on a website.',
        specificTitle: 'Specific cookies we use',
        tableHead1: 'Cookie',
        tableHead2: 'Duration',
        tableHead3: 'Purpose',
        row1Duration: '6 months',
        row1Purpose: 'Google reCAPTCHA: bot identification for spam protection.',
        row2Duration: 'Session/Never',
        row2Purpose: 'Technical security service to validate user integrity.',
        row3Duration: '1 year',
        row3Purpose: 'Remembers the user’s consent preferences to avoid showing the banner on every visit.',
        row4Duration: 'Session',
        row4Purpose: 'Technical check of the browser’s ability to display special characters.',
        prefsTitle: 'Preference management',
        prefsP1:
          'You can change your cookie preferences at any time. This will allow you to see the cookie consent banner again and change your preferences or withdraw your consent immediately:',
        prefsButton: 'Reset cookie settings',
        prefsP2:
          'In addition, you can manage cookies directly from your browser:',
        note:
          'Please note that if you decide to block or delete cookies, this may affect the proper functioning of the website or the quality of your browsing experience.',
        updatesTitle: 'Updates',
        updatesBody:
          'CENTRAL DE ENVASADOS, S.A. may modify this Cookies Policy due to legislative or regulatory requirements, or in order to adapt it to instructions issued by the Spanish Data Protection Agency.',
        updatedAt: 'Last update: April 2026.'
      }
    : {
        back: 'Volver al inicio',
        kicker: 'Información Legal',
        titlePrefix: 'Política de',
        titleSuffix: 'Cookies',
        whatTitle: '¿Qué son las cookies?',
        whatP1:
          'Las cookies son pequeños archivos de texto que los sitios web almacenan en su ordenador, teléfono inteligente, tableta o cualquier otro dispositivo con el que acceda a Internet.',
        whatP2:
          'Se utilizan para que los sitios web funcionen o funcionen de forma más eficiente, así como para proporcionar información a los propietarios del sitio. Las cookies permiten a un sitio web, entre otras cosas, almacenar y recuperar información sobre los hábitos de navegación de un usuario o de su equipo y, dependiendo de la información que contengan y de la forma en que utilice su equipo, pueden utilizarse para reconocer al usuario.',
        typesTitle: 'Tipos de cookies que utilizamos',
        type1Title: 'Cookies Técnicas (Necesarias)',
        type1Body:
          'Son aquellas que permiten al usuario la navegación a través de una página web y la utilización de las diferentes opciones o servicios que en ella existan. Son esenciales para el funcionamiento de la web.',
        type2Title: 'Cookies de Análisis',
        type2Body:
          'Permiten cuantificar el número de usuarios y realizar la medición y análisis estadístico de la utilización que hacen los usuarios del servicio ofertado. Para ello se analiza su navegación en nuestra página web con el fin de mejorar la oferta de productos o servicios.',
        type3Title: 'Cookies de Personalización',
        type3Body:
          'Son aquellas que permiten al usuario acceder al servicio con algunas características de carácter general predefinidas en función de una serie de criterios en el terminal del usuario como por ejemplo el idioma o el tipo de navegador.',
        type4Title: 'Cookies de Publicidad',
        type4Body:
          'Son aquellas que permiten la gestión, de la forma más eficaz posible, de los espacios publicitarios que, en su caso, el editor haya incluido en una página web.',
        specificTitle: 'Cookies específicas que utilizamos',
        tableHead1: 'Cookie',
        tableHead2: 'Duración',
        tableHead3: 'Finalidad',
        row1Duration: '6 meses',
        row1Purpose: 'Google Recaptcha: Identificación de bots para protección contra spam.',
        row2Duration: 'Sesión/Nunca',
        row2Purpose: 'Servicio técnico de seguridad para la validación de integridad del usuario.',
        row3Duration: '1 año',
        row3Purpose: 'Recuerda las preferencias de consentimiento del usuario para no mostrar el banner en cada visita.',
        row4Duration: 'Sesión',
        row4Purpose: 'Determinación técnica de la capacidad del navegador para mostrar caracteres especiales.',
        prefsTitle: 'Gestión de preferencias',
        prefsP1:
          'Usted puede cambiar sus preferencias de cookies en cualquier momento. Esto le permitirá volver a ver el banner de consentimiento de cookies y cambiar sus preferencias o retirar su consentimiento de inmediato:',
        prefsButton: 'Restablecer configuración de cookies',
        prefsP2:
          'Además, puede gestionar las cookies directamente desde su navegador:',
        note:
          'Tenga en cuenta que, si decide bloquear o eliminar las cookies, esto podría afectar al correcto funcionamiento del sitio web o a la calidad de su experiencia de navegación.',
        updatesTitle: 'Actualizaciones',
        updatesBody:
          'CENTRAL DE ENVASADOS, S.A. puede modificar esta Política de Cookies en función de exigencias legislativas, reglamentarias, o con la finalidad de adaptar dicha política a las instrucciones dictadas por la Agencia Española de Protección de Datos.',
        updatedAt: 'Última actualización: Abril 2026.'
      };

  const browsers = isEn
    ? [
        { name: 'Google Chrome', url: 'https://support.google.com/accounts/answer/32050' },
        { name: 'Mozilla Firefox', url: 'https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences' },
        { name: 'Safari', url: 'https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac' },
        { name: 'Microsoft Edge', url: 'https://support.microsoft.com/microsoft-edge/view-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09' }
      ]
    : [
        { name: 'Google Chrome', url: 'https://support.google.com/accounts/answer/32050' },
        { name: 'Mozilla Firefox', url: 'https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias' },
        { name: 'Safari', url: 'https://support.apple.com/es-es/guide/safari/sfri11471/mac' },
        { name: 'Microsoft Edge', url: 'https://support.microsoft.com/es-es/windows/eliminar-y-administrar-cookies-168dab11-0753-043d-7c16-ede5947792d2' }
      ];

  return (
    <>
    <PageMeta title={metaTitle} description={metaDesc} />
    <div className="bg-black min-h-screen text-white pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/" className="inline-flex items-center gap-3 text-white/40 hover:text-white transition-all mb-16 text-[10px] font-bold uppercase tracking-[0.3em] group">
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          {copy.back}
        </Link>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-[1px] bg-accent/50" />
            <span className="text-accent text-[10px] uppercase tracking-[0.4em] font-bold">{copy.kicker}</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-light text-white mb-16 uppercase tracking-tight italic leading-tight">
            {copy.titlePrefix} <span className="text-accent underline decoration-accent/20 underline-offset-[12px]">{copy.titleSuffix}</span>
          </h1>
          
          <div className="prose prose-invert max-w-none space-y-12 text-white/70 font-light leading-relaxed">
            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-sm">
              <div className="flex items-start gap-4">
                <Cookie className="w-6 h-6 text-accent shrink-0 mt-1" />
                <div>
                  <h2 className="text-xl text-white font-medium mb-4 mt-0 uppercase tracking-wider italic">{copy.whatTitle}</h2>
                  <p>
                    {copy.whatP1}
                  </p>
                  <p>
                    {copy.whatP2}
                  </p>
                </div>
              </div>
            </div>

            <section className="space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <Shield className="w-5 h-5 text-accent/60" />
                <h2 className="text-2xl text-white font-medium uppercase tracking-widest italic m-0">{copy.typesTitle}</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 border border-white/5 rounded-xl bg-gradient-to-br from-white/[0.02] to-transparent">
                  <h3 className="text-white font-medium mb-3 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                    {copy.type1Title}
                  </h3>
                  <p className="text-sm">{copy.type1Body}</p>
                </div>
                
                <div className="p-6 border border-white/5 rounded-xl bg-gradient-to-br from-white/[0.02] to-transparent">
                  <h3 className="text-white font-medium mb-3 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                    {copy.type2Title}
                  </h3>
                  <p className="text-sm">{copy.type2Body}</p>
                </div>

                <div className="p-6 border border-white/5 rounded-xl bg-gradient-to-br from-white/[0.02] to-transparent">
                  <h3 className="text-white font-medium mb-3 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                    {copy.type3Title}
                  </h3>
                  <p className="text-sm">{copy.type3Body}</p>
                </div>

                <div className="p-6 border border-white/5 rounded-xl bg-gradient-to-br from-white/[0.02] to-transparent">
                  <h3 className="text-white font-medium mb-3 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                    {copy.type4Title}
                  </h3>
                  <p className="text-sm">{copy.type4Body}</p>
                </div>
              </div>
            </section>

            <section className="space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <Shield className="w-5 h-5 text-accent/60" />
                <h2 className="text-2xl text-white font-medium uppercase tracking-widest italic m-0">{copy.specificTitle}</h2>
              </div>
              
              <div className="overflow-x-auto rounded-2xl border border-white/10 bg-white/[0.02]">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-white/10 bg-white/5 uppercase text-[10px] tracking-[0.2em] font-bold text-accent">
                      <th className="p-4">{copy.tableHead1}</th>
                      <th className="p-4">{copy.tableHead2}</th>
                      <th className="p-4">{copy.tableHead3}</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm text-white/60 font-light">
                    <tr className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                      <td className="p-4 font-medium text-white">_GRECAPTCHA</td>
                      <td className="p-4 italic">{copy.row1Duration}</td>
                      <td className="p-4">{copy.row1Purpose}</td>
                    </tr>
                    <tr className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                      <td className="p-4 font-medium text-white">rc::a, rc::b, rc::c</td>
                      <td className="p-4 italic">{copy.row2Duration}</td>
                      <td className="p-4">{copy.row2Purpose}</td>
                    </tr>
                    <tr className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                      <td className="p-4 font-medium text-white">cookie-consent</td>
                      <td className="p-4 italic">{copy.row3Duration}</td>
                      <td className="p-4">{copy.row3Purpose}</td>
                    </tr>
                    <tr className="hover:bg-white/[0.02] transition-colors">
                      <td className="p-4 font-medium text-white">wpEmojiSettings</td>
                      <td className="p-4 italic">{copy.row4Duration}</td>
                      <td className="p-4">{copy.row4Purpose}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <Settings className="w-5 h-5 text-accent/60" />
                <h2 className="text-2xl text-white font-medium uppercase tracking-widest italic m-0">{copy.prefsTitle}</h2>
              </div>
              <p>
                {copy.prefsP1}
              </p>
              <button 
                onClick={() => {
                  localStorage.removeItem('cookie-consent');
                  window.location.reload();
                }}
                className="inline-flex items-center gap-3 px-8 py-4 bg-accent text-black text-[10px] font-bold uppercase tracking-widest rounded-full hover:scale-105 transition-transform"
              >
                {copy.prefsButton}
              </button>
              
              <div className="h-12" />
              
              <p>
                {copy.prefsP2}
              </p>
              <ul className="grid grid-cols-2 lg:grid-cols-4 gap-4 list-none p-0">
                {browsers.map((browser) => (
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
                {copy.note}
              </p>
            </section>

            <section className="space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <Info className="w-5 h-5 text-accent/60" />
                <h2 className="text-2xl text-white font-medium uppercase tracking-widest italic m-0">{copy.updatesTitle}</h2>
              </div>
              <p>
                {copy.updatesBody}
              </p>
              <p className="pb-20">{copy.updatedAt}</p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
    </>
  );
};

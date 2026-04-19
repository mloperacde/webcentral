import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Shield, Database, Lock, Mail, Cookie } from 'lucide-react';

export const PoliticaPrivacidadPage = () => {
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
              Política de <span className="text-accent underline decoration-accent/30 underline-offset-8">Privacidad</span>
            </h1>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-12 text-sm">
              <p className="text-white/40 tracking-widest uppercase font-bold">
                Última actualización: <span className="text-white/80">04-Jul-2024</span>
              </p>
              <p className="text-white/40 tracking-widest uppercase font-bold">
                Entrada en vigor: <span className="text-white/80">04-Jul-2024</span>
              </p>
            </div>
          </div>
          
          <div className="space-y-16 text-white/70 font-light leading-relaxed prose prose-invert max-w-none">
            
            <section>
              <p className="text-lg text-white/80 leading-relaxed mb-6">
                Esta Política de Privacidad describe las prácticas de recopilación, uso y protección de datos aplicadas por nuestra empresa.
              </p>
              <div className="bg-white/[0.02] p-8 rounded-2xl border border-white/5 space-y-4">
                <p>
                  <strong>Central de Envasados S.A.</strong><br/>
                  Polígono Industrial La Garena Sur, C. de Miguel Servet, 10<br/>
                  Alcalá de Henares, Madrid 28806, España<br/>
                  Correo electrónico: <a href="mailto:contacto@centralenvasados.com" className="text-accent hover:underline">contacto@centralenvasados.com</a><br/>
                  Teléfono: +34 918 81 14 15
                </p>
              </div>
              <p className="mt-8">
                Las presentes condiciones detallan la recopilación, uso y divulgación de su información que reunimos cuando utiliza nuestro sitio web (<a href="https://centralenvasados.com" className="text-accent hover:underline">https://centralenvasados.com</a>) (el "Servicio"). Al acceder o utilizar el Servicio, usted consiente la recopilación, uso y divulgación de su información de acuerdo con esta Política de Privacidad. Si no consiente lo mismo, por favor no acceda ni utilice el Servicio.
              </p>
              <p className="mt-4 text-sm text-white/50">
                Podemos modificar esta Política de Privacidad en cualquier momento sin previo aviso y publicaremos la Política de Privacidad revisada en el Servicio. La Política revisada entrará en vigor 180 días después de que se publique en el Servicio y su acceso continuo o uso del Servicio después de ese momento constituirá su aceptación de la Política de Privacidad revisada. Por lo tanto, recomendamos que revise esta página periódicamente.
              </p>
            </section>

            <section>
              <h3 className="text-xl text-white font-medium mb-6 flex items-center gap-3">
                <Database className="w-6 h-6 text-accent shrink-0" />
                Base Jurídica y Finalidad
              </h3>
              <p className="mb-4">
                Tratamos sus datos personales basándonos en las siguientes bases legales:
              </p>
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                  <span className="text-accent text-[10px] uppercase font-bold tracking-widest block mb-2">Art. 6.1.a RGPD</span>
                  <p className="text-sm font-medium text-white mb-1">Consentimiento</p>
                  <p className="text-xs text-white/50">Para el envío de comunicaciones comerciales y el uso de cookies no técnicas.</p>
                </div>
                <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                  <span className="text-accent text-[10px] uppercase font-bold tracking-widest block mb-2">Art. 6.1.b RGPD</span>
                  <p className="text-sm font-medium text-white mb-1">Relación Contractual</p>
                  <p className="text-xs text-white/50">Para la gestión de solicitudes, presupuestos y prestación de servicios de co-packing.</p>
                </div>
              </div>
              <p className="text-sm">
                Si queremos usar su información para cualquier otro propósito, le pediremos su consentimiento y utilizaremos su información solo después de recibirlo y solo para el propósito(s) para los cuales otorgue su consentimiento a menos que estemos obligados a hacer lo contrario por ley.
              </p>
            </section>

            <section>
              <h3 className="text-xl text-white font-medium mb-6 flex items-center gap-3">
                <Lock className="w-6 h-6 text-accent shrink-0" />
                Conservación de Datos
              </h3>
              <p className="mb-4">
                Conservaremos sus datos personales solo durante el tiempo necesario para cumplir con las finalidades para las que fueron recogidos:
              </p>
              <ul className="list-disc list-inside space-y-2 text-sm ml-4 mb-6">
                <li><strong>Datos de contacto/consultas:</strong> Hasta la resolución de la consulta o durante 2 años tras el último contacto.</li>
                <li><strong>Datos de clientes:</strong> Durante la vigencia de la relación contractual y, posteriormente, durante los plazos de prescripción legales aplicables (generalmente 6 años por normativa mercantil).</li>
                <li><strong>Datos de marketing:</strong> Hasta que retire su consentimiento.</li>
              </ul>
            </section>

            <section className="bg-black/50 p-8 rounded-3xl border-l-4 border-accent">
              <h3 className="text-xl text-white font-medium mb-6 flex items-center gap-3">
                <Shield className="w-6 h-6 text-accent shrink-0" />
                Sus Derechos
              </h3>
              <p className="mb-4">
                Dependiendo de la ley que se aplique, usted puede tener derecho a:
              </p>
              <div className="grid sm:grid-cols-2 gap-x-8 gap-y-2 mb-6 ml-4">
                <ul className="list-disc list-outside space-y-2 text-sm text-white/70">
                  <li>Acceder y rectificar sus datos personales.</li>
                  <li>Borrar o recibir una copia de sus datos personales.</li>
                  <li>Restringir u oponerse al procesamiento activo de sus datos.</li>
                  <li>Solicitarnos que compartamos (portemos) su información personal a otra entidad.</li>
                </ul>
                <ul className="list-disc list-outside space-y-2 text-sm text-white/70">
                  <li>Retirar cualquier consentimiento que nos haya proporcionado para procesar sus datos.</li>
                  <li>Presentar una queja ante una autoridad legal.</li>
                  <li>Otros derechos relevantes bajo las leyes aplicables.</li>
                </ul>
              </div>
              <p className="text-sm">
                Para ejercer estos derechos, puede escribirnos a <a href="mailto:contacto@centralenvasados.com" className="text-accent font-medium hover:underline">contacto@centralenvasados.com</a>. Responderemos a su solicitud de acuerdo con la ley aplicable.
              </p>
              <p className="mt-4 text-xs text-white/40 italic">
                Tenga en cuenta que si no nos permite recopilar o procesar la información personal necesaria o retira el consentimiento para procesar la misma para los propósitos necesarios, es posible que no pueda acceder o utilizar los servicios para los cuales se solicitó su información.
              </p>
            </section>

            <div className="grid md:grid-cols-2 gap-8">
              <section className="bg-white/[0.02] p-8 rounded-2xl border border-white/5">
                <h3 className="text-lg text-white font-medium mb-4 flex items-center gap-3">
                  <Cookie className="w-5 h-5 text-accent shrink-0" />
                  Cookies y Tecnologías de Rastreo
                </h3>
                <p className="text-sm">
                  Para obtener más información sobre cómo utilizamos estas y sus opciones en relación con estas tecnologías de seguimiento, consulte nuestra debida <Link to="/cookies" className="text-accent hover:underline">Política de Cookies</Link>.
                </p>
              </section>

              <section className="bg-white/[0.02] p-8 rounded-2xl border border-white/5">
                <h3 className="text-lg text-white font-medium mb-4 flex items-center gap-3">
                  <Lock className="w-5 h-5 text-accent shrink-0" />
                  Seguridad
                </h3>
                <p className="text-sm">
                  La seguridad de su información es importante para nosotros y utilizaremos medidas de seguridad razonables para prevenir la pérdida, el mal uso o la alteración no autorizada de su información bajo nuestro control. Sin embargo, dados los riesgos inherentes, no podemos garantizar una seguridad absoluta en la transmisión.
                </p>
              </section>
            </div>

            <section className="pt-8 border-t border-white/10 mt-16">
              <h3 className="text-xl text-white font-medium mb-6 flex items-center gap-3">
                <Mail className="w-6 h-6 text-accent shrink-0" />
                Oficial de Protección de Datos / Quejas
              </h3>
              <p>
                Si tiene alguna consulta o inquietud sobre el procesamiento de su información disponible con nosotros, puede enviar un correo electrónico a nuestro Oficial de Quejas:
              </p>
              <div className="mt-4 pl-9 text-white/80">
                <strong>Central de Envasados S.A.</strong><br/>
                Polígono Industrial La Garena Sur, C. de Miguel Servet, 10<br/>
                Correo electrónico: <a href="mailto:contacto@centralenvasados.com" className="text-accent font-medium hover:underline">contacto@centralenvasados.com</a>
              </div>
              <p className="mt-6 text-sm">
                Abordaremos sus inquietudes de acuerdo con la ley aplicable.
              </p>
            </section>

          </div>
        </motion.div>
      </div>
    </div>
  );
};

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Send, MapPin, Phone, Mail, Clock, CircleCheckBig, ExternalLink } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const Contacto = () => {
  const { t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '', email: '', company: '', phone: '', message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Error al enviar el mensaje');
      }

      setSubmitted(true);
      setFormData({ name: '', email: '', company: '', phone: '', message: '' });
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error desconocido');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const infoItems = [
    { 
      icon: MapPin, 
      label: 'contacto.info.address', 
      value: 'contacto.company.address',
      link: 'https://www.google.com/maps/search/?api=1&query=Central+de+Envasados+S.A.+Miguel+Servet+10+Alcala+de+Henares'
    },
    { icon: Phone, label: 'contacto.info.phone', value: 'contacto.company.phone', link: 'tel:+34918811415' },
    { icon: Mail, label: 'contacto.info.email', value: 'contacto.company.email', link: 'mailto:contacto@centralenvasados.com' },
    { icon: Clock, label: 'contacto.info.schedule', value: 'contacto.company.schedule' },
  ];

  return (
    <section id="contacto" className="section-padding bg-black relative overflow-hidden py-24 sm:py-32">
      {/* Modern minimal background with subtle glowing orbs */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] bg-accent/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] bg-white/5 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 lg:pt-16">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <span className="text-[10px] text-accent tracking-[0.3em] uppercase font-bold mb-4 block">{t('contacto.subtitle')}</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white/90 tracking-tight">{t('contacto.title')}</h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="p-8 border border-white/10 bg-black/40 backdrop-blur-md text-left max-w-2xl">
              <div className="grid sm:grid-cols-2 gap-6 mb-6">
                <div className="space-y-3">
                  <label htmlFor="name" className="text-white/40 text-[10px] uppercase tracking-widest font-bold">{t('contacto.form.name')}</label>
                  <input 
                    id="name" name="name" type="text" value={formData.name} onChange={handleChange} required
                    className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:border-accent outline-none transition-colors font-light"
                  />
                </div>
                <div className="space-y-3">
                  <label htmlFor="email" className="text-white/40 text-[10px] uppercase tracking-widest font-bold">{t('contacto.form.email')}</label>
                  <input 
                    id="email" name="email" type="email" value={formData.email} onChange={handleChange} required
                    className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:border-accent outline-none transition-colors font-light"
                  />
                </div>
                <div className="space-y-3">
                  <label htmlFor="company" className="text-white/40 text-[10px] uppercase tracking-widest font-bold">{t('contacto.form.company')}</label>
                  <input 
                    id="company" name="company" type="text" value={formData.company} onChange={handleChange}
                    className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:border-accent outline-none transition-colors font-light"
                  />
                </div>
                <div className="space-y-3">
                  <label htmlFor="phone" className="text-white/40 text-[10px] uppercase tracking-widest font-bold">{t('contacto.form.phone')}</label>
                  <input 
                    id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange}
                    className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:border-accent outline-none transition-colors font-light"
                  />
                </div>
              </div>
              <div className="space-y-3 mb-6">
                <label htmlFor="message" className="text-white/40 text-[10px] uppercase tracking-widest font-bold">{t('contacto.form.message')}</label>
                <textarea 
                  id="message" name="message" value={formData.message} onChange={handleChange} required rows={3}
                  className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:border-accent outline-none transition-colors font-light resize-none"
                />
              </div>
              <button 
                type="submit" 
                disabled={submitted || loading}
                className="w-full py-4 bg-white/10 hover:bg-white/20 text-white text-[10px] tracking-[0.3em] uppercase transition-all duration-300 border border-white/10 flex items-center justify-center gap-3 group disabled:opacity-50"
              >
                {loading ? (
                  <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full"
                  />
                ) : submitted ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex items-center gap-3"
                  >
                    <CircleCheckBig className="w-4 h-4 text-accent" />
                    <span className="text-accent">{t('contacto.form.success')}</span>
                  </motion.div>
                ) : (
                  <>
                    <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    {t('contacto.form.submit')}
                  </>
                )}
              </button>
              {error && (
                <p className="mt-4 text-red-500 text-[10px] uppercase tracking-widest text-center font-bold">
                  {error}
                </p>
              )}
            </form>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 flex flex-col justify-center"
          >
            <div className="space-y-4">
              {infoItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div 
                    key={item.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="flex items-start gap-4 p-4 border border-white/10 bg-black/40 backdrop-blur-md hover:border-accent/40 transition-all duration-300 group/item"
                  >
                    <div className="p-2 border border-white/10 bg-black/20 group-hover/item:border-accent/50 transition-colors">
                      <Icon className="w-4 h-4 text-white/60 group-hover/item:text-accent transition-colors" />
                    </div>
                    <div className="flex-1">
                      <div className="text-white/40 text-[9px] uppercase tracking-widest font-bold mb-1">{t(item.label)}</div>
                      {item.link ? (
                        <a 
                          href={item.link} 
                          target={item.link.startsWith('http') ? "_blank" : undefined}
                          rel={item.link.startsWith('http') ? "noopener noreferrer" : undefined}
                          className="text-white/80 text-sm font-light hover:text-accent transition-colors flex items-center gap-2 group/link"
                        >
                          {t(item.value)}
                          {item.icon === MapPin && (
                            <ExternalLink className="w-3 h-3 opacity-0 group-hover/link:opacity-100 transition-opacity" />
                          )}
                        </a>
                      ) : (
                        <div className="text-white/80 text-sm font-light">{t(item.value)}</div>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

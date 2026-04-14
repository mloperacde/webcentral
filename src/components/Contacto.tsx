import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { searchTechnicalInfo } from '../services/geminiService';

export const Contacto = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    empresa: '',
    telefono: '',
    mensaje: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const prompt = `Redacta un email profesional de respuesta automática para una empresa de packaging y envasado.
Datos del cliente:
- Nombre: ${formData.name}
- Empresa: ${formData.empresa || 'No especificada'}
- Email: ${formData.email}
- Teléfono: ${formData.telefono || 'No especificado'}
- Mensaje: ${formData.mensaje}

El email debe agradecer el contacto y mencionar que se responderá en menos de 24 horas.`;

      const response = await searchTechnicalInfo(prompt);
      console.log('Email auto-response:', response);

      setSubmitted(true);
      setFormData({ name: '', email: '', empresa: '', telefono: '', mensaje: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    { icon: MapPin, label: t('contacto.info.address'), value: t('contacto.company.address') },
    { icon: Phone, label: t('contacto.info.phone'), value: t('contacto.company.phone') },
    { icon: Mail, label: t('contacto.info.email'), value: t('contacto.company.email') },
    { icon: Clock, label: t('contacto.info.schedule'), value: t('contacto.company.schedule') },
  ];

  return (
    <section id="contacto" className="relative py-24 md:py-32 bg-black">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a0a0a] to-black" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-left mb-16"
        >
          <span className="text-blue-500 text-[11px] tracking-[0.3em] uppercase font-bold mb-4 block">
            {t('contacto.subtitle')}
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-light text-white mb-6">
            {t('contacto.title')}
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {submitted ? (
              <div className="p-8 border border-blue-500/30 bg-blue-500/5 backdrop-blur-md text-center">
                <div className="w-16 h-16 rounded-full bg-blue-500/20 flex items-center justify-center mx-auto mb-6">
                  <Send className="w-8 h-8 text-blue-500" />
                </div>
                <h3 className="text-2xl font-light text-white mb-4">{t('contacto.form.success')}</h3>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-8 px-6 py-3 border border-white/20 text-white/80 hover:border-white/50 hover:text-white text-[11px] tracking-[0.2em] uppercase transition-all duration-300"
                >
                  {t('contacto.success.button') || 'Volver'}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="p-4 sm:p-6 md:p-10 border border-white/5 bg-black/20 backdrop-blur-md text-left">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8">
                  <div>
                    <label className="text-[10px] text-white/40 tracking-[0.2em] uppercase font-bold block mb-3">
                      {t('contacto.form.name')}
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b border-white/10 py-2 text-white/80 text-[13px] focus:border-blue-500/50 focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] text-white/40 tracking-[0.2em] uppercase font-bold block mb-3">
                      {t('contacto.form.email')}
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b border-white/10 py-2 text-white/80 text-[13px] focus:border-blue-500/50 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8">
                  <div>
                    <label className="text-[10px] text-white/40 tracking-[0.2em] uppercase font-bold block mb-3">
                      {t('contacto.form.company')}
                    </label>
                    <input
                      type="text"
                      name="empresa"
                      value={formData.empresa}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b border-white/10 py-2 text-white/80 text-[13px] focus:border-blue-500/50 focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] text-white/40 tracking-[0.2em] uppercase font-bold block mb-3">
                      {t('contacto.form.phone')}
                    </label>
                    <input
                      type="tel"
                      name="telefono"
                      value={formData.telefono}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b border-white/10 py-2 text-white/80 text-[13px] focus:border-blue-500/50 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="mb-12">
                  <label className="text-[10px] text-white/40 tracking-[0.2em] uppercase font-bold block mb-3">
                    {t('contacto.form.message')}
                  </label>
                  <textarea
                    name="mensaje"
                    required
                    rows={1}
                    value={formData.mensaje}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-white/10 py-2 text-white/80 text-[13px] focus:border-blue-500/50 focus:outline-none transition-colors resize-none"
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-white/5 hover:bg-white/10 text-white text-[11px] tracking-[0.2em] uppercase transition-all duration-300 border border-white/10 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <div className="w-4 h-4 border border-white/30 border-t-white animate-spin rounded-full" />
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5" />
                      {t('contacto.form.submit')}
                    </>
                  )}
                </motion.button>
              </form>
            )}
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-5 p-6 border border-white/5 bg-black/40 backdrop-blur-md group"
              >
                <div className="p-3 bg-white/5 text-white/40 group-hover:bg-blue-500 group-hover:text-white transition-all duration-500">
                  <info.icon className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[10px] text-white/20 tracking-[0.3em] uppercase font-bold mb-2">
                    {info.label}
                  </p>
                  <p className="text-sm sm:text-base text-white/70 font-light leading-relaxed break-words">
                    {info.value}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
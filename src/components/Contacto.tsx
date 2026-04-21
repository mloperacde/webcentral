import { useState, useCallback, type FormEvent, type ChangeEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Phone, Mail, Clock, Send, AlertCircle, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

interface FormData {
  name: string;
  email: string;
  empresa: string;
  telefono: string;
  mensaje: string;
}

export const Contacto = () => {
  const { t, language } = useLanguage();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    empresa: '',
    telefono: '',
    mensaje: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [fieldError, setFieldError] = useState<string | null>(null);
  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const [commercialConsent, setCommercialConsent] = useState(false);

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    if (fieldError) setFieldError(null);
    if (submitError) setSubmitError(null);
  }, [fieldError, submitError]);

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = useCallback(async (e: FormEvent) => {
    e.preventDefault();
    setSubmitError(null);
    setFieldError(null);

    if (!formData.name.trim() || !formData.email.trim() || !formData.mensaje.trim()) {
      return;
    }

    if (!validateEmail(formData.email)) {
      setFieldError(t('contacto.form.error.invalidEmail'));
      return;
    }

    if (!privacyAccepted) {
      setFieldError(t('contacto.form.privacyRequired'));
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          company: formData.empresa.trim() || undefined,
          phone: formData.telefono.trim() || undefined,
          message: formData.mensaje.trim(),
          commercialConsent
        })
      });

      const data = await response.json().catch(() => ({ error: 'Unknown error' }));

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send');
      }

      setSubmitted(true);
      setFormData({ name: '', email: '', empresa: '', telefono: '', mensaje: '' });
      setPrivacyAccepted(false);
      setCommercialConsent(false);
    } catch {
      setSubmitError(t('contacto.form.error'));
    } finally {
      setIsSubmitting(false);
    }
  }, [formData, t]);

  const contactInfo = [
    { icon: MapPin, label: t('contacto.info.address'), value: t('contacto.company.address'), href: 'https://www.google.com/maps/search/?api=1&query=Pol%C3%ADgono+Industrial+La+Garena+Sur%2C+Miguel+Servet%2C+10%2C+28806+Alcal%C3%A1+de+Henares+%28Madrid%29' },
    { icon: Phone, label: t('contacto.info.phone'), value: t('contacto.company.phone'), href: 'tel:+34918811415' },
    { icon: Mail, label: t('contacto.info.email'), value: t('contacto.company.email'), href: 'mailto:contacto@centralenvasados.com' },
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
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="p-8 sm:p-10 border border-accent/30 bg-accent/5 backdrop-blur-md text-center"
                  role="status"
                  aria-live="polite"
                >
                  <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-2xl font-light text-white mb-3">{t('contacto.form.success')}</h3>
                  <p className="text-white/60 text-sm font-light max-w-md mx-auto mb-8">
                    {t('contacto.form.success.description')}
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-3 border border-white/20 text-white/80 hover:border-white/50 hover:text-white text-[11px] tracking-[0.2em] uppercase transition-all duration-300"
                  >
                    {t('contacto.success.button') || (language === 'en' ? 'Back' : 'Volver')}
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="p-4 sm:p-6 md:p-10 border border-white/5 bg-black/20 backdrop-blur-md text-left"
                  noValidate
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8">
                    <div>
                      <label htmlFor="contact-name" className="text-[10px] text-white/40 tracking-[0.2em] uppercase font-bold block mb-3">
                        {t('contacto.form.name')} *
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        disabled={isSubmitting}
                        className="w-full bg-transparent border-b border-white/10 py-2 text-white/80 text-[13px] focus:border-blue-500/50 focus:outline-none transition-colors disabled:opacity-50"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-email" className="text-[10px] text-white/40 tracking-[0.2em] uppercase font-bold block mb-3">
                        {t('contacto.form.email')} *
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        disabled={isSubmitting}
                        aria-invalid={!!fieldError}
                        aria-describedby={fieldError ? 'email-error' : undefined}
                        className="w-full bg-transparent border-b border-white/10 py-2 text-white/80 text-[13px] focus:border-blue-500/50 focus:outline-none transition-colors disabled:opacity-50"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8">
                    <div>
                      <label htmlFor="contact-company" className="text-[10px] text-white/40 tracking-[0.2em] uppercase font-bold block mb-3">
                        {t('contacto.form.company')}
                      </label>
                      <input
                        id="contact-company"
                        type="text"
                        name="empresa"
                        value={formData.empresa}
                        onChange={handleChange}
                        disabled={isSubmitting}
                        className="w-full bg-transparent border-b border-white/10 py-2 text-white/80 text-[13px] focus:border-blue-500/50 focus:outline-none transition-colors disabled:opacity-50"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-phone" className="text-[10px] text-white/40 tracking-[0.2em] uppercase font-bold block mb-3">
                        {t('contacto.form.phone')}
                      </label>
                      <input
                        id="contact-phone"
                        type="tel"
                        name="telefono"
                        value={formData.telefono}
                        onChange={handleChange}
                        disabled={isSubmitting}
                        className="w-full bg-transparent border-b border-white/10 py-2 text-white/80 text-[13px] focus:border-blue-500/50 focus:outline-none transition-colors disabled:opacity-50"
                      />
                    </div>
                  </div>

                  <div className="mb-10">
                    <label htmlFor="contact-message" className="text-[10px] text-white/40 tracking-[0.2em] uppercase font-bold block mb-3">
                      {t('contacto.form.message')} *
                    </label>
                    <textarea
                      id="contact-message"
                      name="mensaje"
                      required
                      rows={3}
                      value={formData.mensaje}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className="w-full bg-transparent border-b border-white/10 py-2 text-white/80 text-[13px] focus:border-blue-500/50 focus:outline-none transition-colors resize-none disabled:opacity-50"
                    />
                  </div>

                  {/* Privacy notice */}
                  <p className="text-[10px] text-white/30 leading-relaxed font-light mb-6">
                    {t('contacto.form.privacyNotice')}
                  </p>

                  {/* Privacy checkbox */}
                  <label className="flex items-start gap-3 mb-4 cursor-pointer group">
                    <input
                      type="checkbox"
                      checked={privacyAccepted}
                      onChange={(e) => {
                        setPrivacyAccepted(e.target.checked);
                        if (fieldError) setFieldError(null);
                      }}
                      className="mt-0.5 w-4 h-4 accent-accent cursor-pointer"
                    />
                    <span className="text-[11px] text-white/50 font-light leading-relaxed group-hover:text-white/70 transition-colors">
                      {t('contacto.form.privacyCheckbox')}
                      <Link to="/politica-privacidad" className="text-accent hover:underline ml-0.5">{t('contacto.form.privacyCheckboxLink')}</Link>
                    </span>
                  </label>

                  {/* Commercial checkbox */}
                  <label className="flex items-start gap-3 mb-8 cursor-pointer group">
                    <input
                      type="checkbox"
                      checked={commercialConsent}
                      onChange={(e) => setCommercialConsent(e.target.checked)}
                      className="mt-0.5 w-4 h-4 accent-accent cursor-pointer"
                    />
                    <span className="text-[11px] text-white/50 font-light leading-relaxed group-hover:text-white/70 transition-colors">
                      {t('contacto.form.commercialCheckbox')}
                    </span>
                  </label>

                  <AnimatePresence>
                    {(fieldError || submitError) && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="mb-6 p-4 border border-red-500/30 bg-red-500/5 flex items-start gap-3"
                        role="alert"
                        aria-live="assertive"
                      >
                        <AlertCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                        <p id="email-error" className="text-red-300 text-xs font-light">
                          {fieldError || submitError}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-white/5 hover:bg-white/10 text-white text-[11px] tracking-[0.2em] uppercase transition-all duration-300 border border-white/10 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border border-white/30 border-t-white animate-spin rounded-full" />
                        {t('contacto.form.sending')}
                      </>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        {t('contacto.form.submit')}
                      </>
                    )}
                  </motion.button>
                </motion.form>
              )}
            </AnimatePresence>
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
                  {info.href ? (
                    <a
                      href={info.href}
                      target={info.href.startsWith('http') ? '_blank' : undefined}
                      rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="text-sm sm:text-base text-white/70 font-light leading-relaxed break-words hover:text-accent transition-colors"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-sm sm:text-base text-white/70 font-light leading-relaxed break-words">
                      {info.value}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

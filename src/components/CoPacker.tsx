
import { motion } from 'motion/react';
import { Plus } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const CoPacker = () => {
  const { t } = useLanguage();

  const features = [
    { key: 'copacker.feature1', desc: 'copacker.feature1.desc' },
    { key: 'copacker.feature2', desc: 'copacker.feature2.desc' },
    { key: 'copacker.feature3', desc: 'copacker.feature3.desc' },
    { key: 'copacker.feature4', desc: 'copacker.feature4.desc' },
    { key: 'copacker.feature5', desc: 'copacker.feature5.desc' },
    { key: 'copacker.feature6', desc: 'copacker.feature6.desc' },
  ];

  return (
    <section id="copacker" className="relative bg-black py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="text-[10px] text-accent tracking-[0.3em] uppercase font-bold mb-4 block">
            {t('copacker.subtitle')}
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-white tracking-tight leading-none mb-6">
            {t('copacker.title')}
          </h2>
          <p className="text-white/60 text-lg max-w-2xl font-light">
            {t('copacker.description')}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative w-full rounded-[2rem] overflow-hidden border border-white/10 backdrop-blur-md shadow-2xl"
        >
          <div className="absolute inset-0 z-0">
            <img
              loading="lazy"
              src="/co-packing.webp"
              alt="Co-packing background"
              className="w-full h-full object-cover object-center"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-black/60" />
          </div>

          <div className="relative z-20 w-full py-12 px-6 sm:px-10 lg:px-16">
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-start">
              <div className="flex flex-col gap-6 lg:gap-8">
                {[features[0], features[1], features[2]].map((feature) => (
                  <div key={feature.key} className="flex flex-col gap-2">
                    <div className="flex items-center gap-3 px-5 py-2.5 rounded-full border bg-accent/20 border-accent/40 backdrop-blur-xl shadow-[0_0_20px_rgba(var(--accent-rgb),0.15)] w-fit">
                      <div className="w-5 h-5 rounded-full flex items-center justify-center bg-white text-accent">
                        <Plus className="w-2.5 h-2.5 rotate-45" />
                      </div>
                      <span className="text-[10px] lg:text-xs font-bold tracking-widest text-white uppercase">
                        {t(feature.key)}
                      </span>
                    </div>
                    <p className="px-4 text-white/60 text-[11px] lg:text-sm font-light leading-5 max-w-sm border-l border-accent/20 ml-5">
                      {t(feature.desc)}
                    </p>
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-6 lg:gap-8">
                {[features[3], features[4], features[5]].map((feature) => (
                  <div key={feature.key} className="flex flex-col gap-2">
                    <div className="flex items-center gap-3 px-5 py-2.5 rounded-full border bg-accent/20 border-accent/40 backdrop-blur-xl shadow-[0_0_20px_rgba(var(--accent-rgb),0.15)] w-fit">
                      <div className="w-5 h-5 rounded-full flex items-center justify-center bg-white text-accent">
                        <Plus className="w-2.5 h-2.5 rotate-45" />
                      </div>
                      <span className="text-[10px] lg:text-xs font-bold tracking-widest text-white uppercase">
                        {t(feature.key)}
                      </span>
                    </div>
                    <p className="px-4 text-white/60 text-[11px] lg:text-sm font-light leading-5 max-w-sm border-l border-accent/20 ml-5">
                      {t(feature.desc)}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
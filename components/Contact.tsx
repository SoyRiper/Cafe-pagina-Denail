import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const fadeInUp = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: false, amount: 0.2 },
  transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] }
};

const Contact = () => {
  const { t } = useLanguage();
  return (
    <div className="w-full flex flex-col bg-white dark:bg-black min-h-screen transition-colors duration-500 pt-20">
      <section className="px-6 md:px-16 pt-24 pb-32">
        {/* Header Section */}
        <div className="max-w-[1440px] mx-auto text-center mb-16 md:mb-24">
          <motion.h2
            {...fadeInUp}
            className="text-4xl md:text-[5.5rem] font-bold text-black dark:text-white mb-8 tracking-tighter leading-[1.1]"
          >
            {t.contact.title}
          </motion.h2>
          <motion.p
            {...fadeInUp}
            className="text-zinc-600 dark:text-zinc-400 text-lg md:text-2xl font-medium max-w-4xl mx-auto leading-tight mb-12"
          >
            {t.contact.description}
          </motion.p>
        </div>

        <div className="max-w-[1440px] mx-auto space-y-8">
          {/* Top Large Card: Careers */}
          <motion.div
            {...fadeInUp}
            className="relative w-full rounded-[2.5rem] md:rounded-[4rem] overflow-hidden bg-gradient-to-br from-[#FFBD7E] to-[#FB923C] dark:from-zinc-900 dark:to-zinc-800 p-8 md:p-12 transition-all duration-500"
          >
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center relative z-10 mb-8 gap-6">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-4 h-4 bg-white rounded-sm"></div>
                  <span className="text-[11px] font-bold text-white uppercase tracking-widest">{t.contact.careers.tag}</span>
                </div>
                <h3 className="text-3xl md:text-5xl font-extrabold text-white mb-4 tracking-tighter">
                  {t.contact.careers.title}
                </h3>
                <p className="text-white/90 text-sm md:text-base font-medium max-w-xl">
                  {t.contact.careers.description}
                </p>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-black text-white px-8 py-3 rounded-xl font-bold text-[13px] uppercase tracking-widest shadow-xl transition-all"
              >
                {t.contact.careers.cta}
              </motion.button>
            </div>
            <div className="relative w-full rounded-[2.5rem] overflow-hidden shadow-2xl">
              <img
                src="/06/image 44.png"
                className="w-full h-auto object-cover"
                alt="Join our team"
              />
            </div>
          </motion.div>

          {/* Bottom Grid: Investors & General */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Investors Card */}
            <motion.div
              {...fadeInUp}
              transition={{ ...fadeInUp.transition, delay: 0.1 }}
              className="relative w-full rounded-[2.5rem] md:rounded-[4rem] overflow-hidden bg-gradient-to-br from-[#FB923C] to-[#F59E0B] dark:from-zinc-900 dark:to-zinc-800 p-8 md:p-12 transition-all duration-500"
            >
              <div className="relative z-10 mb-8">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-4 h-4 bg-white rounded-sm"></div>
                  <span className="text-[11px] font-bold text-white uppercase tracking-widest">{t.contact.investors.tag}</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-tighter">
                  {t.contact.investors.title}
                </h3>
                <p className="text-white/90 text-[11px] font-medium leading-relaxed max-w-sm">
                  {t.contact.investors.description}
                </p>
              </div>
              <div className="relative w-full aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl">
                <img
                  src="/06/image 31.png"
                  className="w-full h-full object-cover"
                  alt="Investors relations"
                />
              </div>
            </motion.div>

            {/* General Card */}
            <motion.div
              {...fadeInUp}
              transition={{ ...fadeInUp.transition, delay: 0.2 }}
              className="relative w-full rounded-[2.5rem] md:rounded-[4rem] overflow-hidden bg-gradient-to-br from-[#FFBD7E] to-[#FB923C] dark:from-zinc-900 dark:to-zinc-800 p-8 md:p-12 transition-all duration-500"
            >
              <div className="relative z-10 mb-8">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-4 h-4 bg-white rounded-sm"></div>
                  <span className="text-[11px] font-bold text-white uppercase tracking-widest">{t.contact.general.tag}</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-tighter">
                  {t.contact.general.title}
                </h3>
                <p className="text-white/90 text-[11px] font-medium leading-relaxed max-w-sm">
                  {t.contact.general.description}
                </p>
              </div>
              <div className="relative w-full aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl">
                <img
                  src="/06/image 43.png"
                  className="w-full h-full object-cover"
                  alt="General inquiries"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
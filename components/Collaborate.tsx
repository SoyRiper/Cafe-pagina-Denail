import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const fadeInUp = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: false, amount: 0.2 },
  transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] }
};

const Collaborate = () => {
  const { t } = useLanguage();
  return (
    <div className="w-full flex flex-col bg-white dark:bg-black min-h-screen transition-colors duration-500">
      <section className="px-6 md:px-16 pt-24 md:pt-40 pb-32">
        {/* Header Section */}
        <div className="max-w-7xl mx-auto text-center mb-16 md:mb-24">
          <motion.h2
            {...fadeInUp}
            className="text-4xl md:text-[5.5rem] font-bold text-black dark:text-white mb-8 tracking-tighter leading-[1.1]"
          >
            {t.collaborate.title}
          </motion.h2>
          <motion.p
            {...fadeInUp}
            className="text-zinc-600 dark:text-zinc-400 text-lg md:text-2xl font-medium max-w-4xl mx-auto leading-tight"
          >
            {t.collaborate.headerDescription}
          </motion.p>
        </div>

        {/* Row 1: Advisors (Wide Card) */}
        <div className="max-w-[1440px] mx-auto mb-10">
          <motion.div
            {...fadeInUp}
            className="relative w-full rounded-[2.5rem] md:rounded-[4rem] overflow-hidden bg-gradient-to-br from-[#FFBD7E] to-[#FB923C] dark:from-zinc-900 dark:to-zinc-800 p-8 md:p-12 transition-all duration-500"
          >
            <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-6">
              <div className="flex flex-col">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-4 h-4 bg-white rounded-sm"></div>
                  <span className="text-[11px] font-bold text-white uppercase tracking-widest">{t.collaborate.advisors.tag}</span>
                </div>
                <h3 className="font-extrabold text-white text-3xl md:text-5xl mb-4 tracking-tighter leading-tight">{t.collaborate.advisors.title}</h3>
                <p className="text-white/90 text-[11px] font-medium leading-relaxed max-w-lg">
                  {t.collaborate.advisors.description}
                </p>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-black text-white px-8 py-3 rounded-xl font-bold text-[11px] uppercase tracking-widest shadow-xl transition-all"
              >
                {t.collaborate.advisors.cta}
              </motion.button>
            </div>
            <div className="relative w-full rounded-[2.5rem] overflow-hidden shadow-2xl">
              <img src="/04/image 41.png" className="w-full h-auto" alt="Advisors session" />
            </div>
          </motion.div>
        </div>

        {/* Row 2: Grid for Founders & Hiring */}
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 mb-24">
          {/* Technical Co-founder Card */}
          <motion.div
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: 0.1 }}
            className="relative w-full rounded-[2.5rem] md:rounded-[4rem] overflow-hidden bg-gradient-to-br from-[#FB923C] to-[#F59E0B] dark:from-zinc-900 dark:to-zinc-800 p-8 md:p-12 flex flex-col transition-all duration-500"
          >
            <div className="relative z-10 mb-8">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-4 h-4 bg-white rounded-sm"></div>
                <span className="text-[11px] font-bold text-white uppercase tracking-widest">{t.collaborate.founders.tag}</span>
              </div>
              <h3 className="font-extrabold text-white text-3xl md:text-4xl mb-4 tracking-tighter leading-tight">{t.collaborate.founders.title}</h3>
              <p className="text-white/90 text-[11px] font-medium leading-relaxed mb-6">
                {t.collaborate.founders.description}
              </p>
            </div>
            <div className="relative w-full aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl mb-8">
              <img src="/04/image 37.png" className="w-full h-full object-cover object-center" alt="Building hardware" />
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-black text-white px-8 py-3 rounded-xl font-bold text-[11px] uppercase tracking-widest shadow-xl w-fit transition-all"
            >
              {t.collaborate.founders.cta}
            </motion.button>
          </motion.div>

          {/* General Hiring/Talent Card */}
          <motion.div
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: 0.2 }}
            className="relative w-full rounded-[2.5rem] md:rounded-[4rem] overflow-hidden bg-gradient-to-br from-[#FFBD7E] to-[#FB923C] dark:from-zinc-900 dark:to-zinc-800 p-8 md:p-12 flex flex-col transition-all duration-500"
          >
            <div className="relative z-10 mb-8">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-4 h-4 bg-white rounded-sm"></div>
                <span className="text-[11px] font-bold text-white uppercase tracking-widest">{t.collaborate.hiring.tag}</span>
              </div>
              <h3 className="font-extrabold text-white text-3xl md:text-4xl mb-4 tracking-tighter leading-tight">{t.collaborate.hiring.title}</h3>
              <p className="text-white/90 text-[11px] font-medium leading-relaxed mb-6">
                {t.collaborate.hiring.description}
              </p>
            </div>
            <div className="relative w-full aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl mb-8">
              <img src="/04/image 39.png" className="w-full h-full object-cover object-center" alt="Office lifestyle" />
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-black text-white px-8 py-3 rounded-xl font-bold text-[11px] uppercase tracking-widest shadow-xl w-fit transition-all"
            >
              {t.collaborate.hiring.cta}
            </motion.button>
          </motion.div>
        </div>

        {/* New Transition Section: This is how we build */}
        <div className="max-w-4xl mx-auto text-center py-20">
          <motion.h2
            {...fadeInUp}
            className="text-5xl md:text-7xl font-bold text-black dark:text-white mb-8 tracking-tighter"
          >
            {t.collaborate.howWeBuild.title}
          </motion.h2>
          <motion.p
            {...fadeInUp}
            className="text-zinc-600 dark:text-zinc-400 text-lg md:text-2xl font-medium mb-4 leading-tight italic"
          >
            {t.collaborate.howWeBuild.description}
          </motion.p>
          <motion.div {...fadeInUp} className="text-orange-500 text-2xl mb-12">🧡</motion.div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-12 py-4 bg-[#FFB347] hover:bg-[#FF8A00] text-white rounded-xl font-bold text-lg shadow-xl shadow-orange-500/10 transition-all duration-300"
          >
            {t.collaborate.howWeBuild.cta}
          </motion.button>
        </div>
      </section>
    </div>
  );
};

export default Collaborate;
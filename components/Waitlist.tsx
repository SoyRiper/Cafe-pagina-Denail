import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const fadeInUp = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: false, amount: 0.2 },
  transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] }
};

const Waitlist = () => {
  const { t } = useLanguage();
  return (
    <div className="w-full flex flex-col orange-mesh-bg dark:bg-black min-h-screen transition-colors duration-500">
      <section className="px-6 md:px-16 pt-24 md:pt-40 pb-32">
        {/* Header Section */}
        <div className="max-w-7xl mx-auto text-center mb-16 md:mb-24">
          <motion.h2
            {...fadeInUp}
            className="text-4xl md:text-[5.5rem] font-bold text-black dark:text-white mb-8 tracking-tighter leading-[1.1]"
          >
            {t.waitlist.title}
          </motion.h2>
          <motion.p
            {...fadeInUp}
            className="text-zinc-600 dark:text-zinc-400 text-lg md:text-2xl font-medium max-w-4xl mx-auto leading-tight mb-12"
          >
            {t.waitlist.description}
          </motion.p>
          <motion.button
            {...fadeInUp}
            className="px-8 py-4 bg-gradient-to-r from-[#FFBD7E] to-[#FB923C] text-white rounded-xl font-bold text-lg shadow-lg shadow-orange-500/20 hover:scale-105 transition-all duration-300"
          >
            {t.waitlist.footer.cta}
          </motion.button>
        </div>

        {/* Row 1: Grid */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 mb-10">
          <motion.div
            {...fadeInUp}
            className="relative w-full rounded-[2.5rem] overflow-hidden bg-[#FFBD7E] dark:bg-black border border-transparent dark:border-zinc-800 p-8 pb-8 flex flex-col transition-all duration-500"
          >
            <div className="flex-shrink-0 z-10 mb-2">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-4 h-4 bg-white rounded-sm"></div>
                <span className="text-[10px] font-bold text-white uppercase tracking-wider">{t.waitlist.card1.badge}</span>
              </div>
              <h3 className="font-bold text-white text-3xl md:text-[32px] mb-2 leading-tight tracking-tight">{t.waitlist.card1.title}</h3>
              <p className="text-white/80 text-[11px] font-medium leading-relaxed max-w-sm">{t.waitlist.card1.description}</p>
            </div>
            <div className="w-full aspect-[4/3] mt-6 overflow-hidden rounded-[1.5rem] shadow-2xl bg-white/5">
              <img src="/03/image 35.png" className="w-full h-full object-cover object-center" alt="Coffee and gadgets" />
            </div>
          </motion.div>

          <motion.div
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: 0.1 }}
            className="relative w-full rounded-[2.5rem] overflow-hidden bg-[#FB923C] dark:bg-black border border-transparent dark:border-zinc-800 p-8 pb-8 flex flex-col transition-all duration-500"
          >
            <div className="flex-shrink-0 z-10 mb-2">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-4 h-4 bg-white rounded-sm"></div>
                <span className="text-[10px] font-bold text-white uppercase tracking-wider">{t.waitlist.card2.badge}</span>
              </div>
              <h3 className="font-bold text-white text-3xl md:text-[32px] mb-2 leading-tight tracking-tight">{t.waitlist.card2.title}</h3>
              <p className="text-white/80 text-[11px] font-medium leading-relaxed max-w-sm">{t.waitlist.card2.description}</p>
            </div>
            <div className="w-full aspect-[4/3] mt-6 overflow-hidden rounded-[1.5rem] shadow-2xl bg-white/5">
              <img src="/03/image 38.png" className="w-full h-full object-cover object-center" alt="Real person reading" />
            </div>
          </motion.div>
        </div>

        {/* Row 2: Wide Card */}
        <motion.div
          {...fadeInUp}
          className="max-w-7xl mx-auto relative w-full rounded-[2.5rem] overflow-hidden bg-gradient-to-br from-[#FFBD7E] via-[#FB923C] to-[#F59E0B] dark:from-zinc-900 dark:via-zinc-900 dark:to-black border border-transparent dark:border-zinc-800 p-8 md:p-12 pb-12 flex flex-col mb-32 transition-all duration-500"
        >
          <div className="flex-shrink-0 z-10 mb-2">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-4 h-4 bg-white rounded-sm"></div>
              <span className="text-[10px] font-bold text-white uppercase tracking-wider">{t.waitlist.card3.badge}</span>
            </div>
            <h3 className="font-bold text-white text-3xl md:text-[40px] mb-2 leading-tight tracking-tight">{t.waitlist.card3.title}</h3>
            <p className="text-white/80 text-[11px] font-medium leading-relaxed max-w-xl">{t.waitlist.card3.description}</p>
          </div>
          <div className="w-full mt-10 overflow-hidden rounded-[2.5rem] shadow-2xl bg-white/5">
            <img src="/03/image 42.png" className="w-full h-auto" alt="Special perk" />
          </div>
        </motion.div>

        {/* Final CTA Section */}
        <div className="max-w-4xl mx-auto text-center">
          <motion.div {...fadeInUp}>
            <p className="text-zinc-600 dark:text-zinc-400 text-xl md:text-3xl font-bold leading-tight mb-12">
              {t.waitlist.footer.thanks} <br />
              {t.waitlist.footer.notForEveryone}
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 bg-gradient-to-r from-[#FFBD7E] to-[#FB923C] dark:from-[#D97706] dark:to-[#B45309] text-white rounded-2xl font-black text-xl shadow-2xl shadow-orange-500/20 transition-all duration-300 transform"
            >
              {t.waitlist.footer.cta}
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Waitlist;
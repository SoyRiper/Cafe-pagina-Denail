import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const fadeInUp = {
  initial: { opacity: 0, y: 60, scale: 0.95 },
  whileInView: { opacity: 1, y: 0, scale: 1 },
  viewport: { once: false, amount: 0.2 },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
};

const Vision = () => {
  const { t } = useLanguage();

  return (
    <section className="bg-white dark:bg-black transition-colors duration-500 px-6 py-24 md:py-32">

      {/* 1. Built on Purpose Section */}
      <div className="max-w-7xl mx-auto mb-48 md:mb-64">
        <div className="text-center mb-16 md:mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.8 }}
            className="heading-impact mb-6 text-black dark:text-white"
          >
            {t.vision.builtOnPurpose.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="subheading-custom text-zinc-500 dark:text-zinc-400 max-w-2xl mx-auto"
          >
            {t.vision.builtOnPurpose.subtitle}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {/* Row 1 - Left (Laptop) */}
          <motion.div
            {...fadeInUp}
            whileHover={{ scale: 1.02, transition: { duration: 0.4 } }}
            className="relative w-full rounded-[2.5rem] overflow-hidden bg-[#F97316] dark:bg-zinc-900 border border-transparent dark:border-zinc-800 p-8 pb-8 flex flex-col transition-all duration-500"
          >
            <div className="flex-shrink-0 z-10 mb-2">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-4 h-4 bg-white rounded-sm"></div>
                <span className="text-[10px] font-bold text-white uppercase tracking-wider">{t.vision.builtOnPurpose.cards[0].badge}</span>
              </div>
              <h3 className="font-semibold text-white text-3xl md:text-[32px] mb-1 leading-tight tracking-tight">{t.vision.builtOnPurpose.cards[0].title}</h3>
              <p className="text-white/90 text-[11px] font-medium leading-relaxed max-w-sm">{t.vision.builtOnPurpose.cards[0].description}</p>
            </div>
            <div className="w-full aspect-[4/3] mt-6 overflow-hidden rounded-[1.5rem] shadow-2xl bg-white/5">
              <img src="/02/image 25.png" className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700" alt="Card 1" />
            </div>
          </motion.div>

          {/* Row 1 - Right (Office) */}
          <motion.div
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: 0.15 }}
            whileHover={{ scale: 1.02, transition: { duration: 0.4 } }}
            className="relative w-full rounded-[2.5rem] overflow-hidden bg-[#FB923C] dark:bg-zinc-900 border border-transparent dark:border-zinc-800 p-8 pb-8 flex flex-col transition-all duration-500"
          >
            <div className="flex-shrink-0 z-10 mb-2">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-4 h-4 bg-white rounded-sm"></div>
                <span className="text-[10px] font-bold text-white uppercase tracking-wider">{t.vision.builtOnPurpose.cards[1].badge}</span>
              </div>
              <h3 className="font-semibold text-white text-3xl md:text-[32px] mb-1 leading-tight tracking-tight">{t.vision.builtOnPurpose.cards[1].title}</h3>
              <p className="text-white/90 text-[11px] font-medium leading-relaxed max-w-sm">{t.vision.builtOnPurpose.cards[1].description}</p>
            </div>
            <div className="w-full aspect-[4/3] mt-6 overflow-hidden rounded-[1.5rem] shadow-2xl bg-white/5">
              <img src="/02/image 24.png" className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700" alt="Card 2" />
            </div>
          </motion.div>

          {/* Row 2 - Wide (Machine Wide) */}
          <motion.div
            {...fadeInUp}
            className="md:col-span-2 relative w-full rounded-[2.5rem] overflow-hidden bg-[#FF8A00] dark:bg-zinc-900 border border-transparent dark:border-zinc-800 p-8 md:p-12 pb-12 flex flex-col transition-all duration-500"
          >
            <div className="flex-shrink-0 z-10 mb-2">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-4 h-4 bg-white rounded-sm"></div>
                <span className="text-[10px] font-bold text-white uppercase tracking-wider">{t.vision.builtOnPurpose.cards[2].badge}</span>
              </div>
              <h3 className="font-bold text-white text-3xl md:text-[40px] mb-2 leading-tight tracking-tight">{t.vision.builtOnPurpose.cards[2].title}</h3>
              <p className="text-white/90 text-sm font-medium leading-relaxed max-w-2xl">{t.vision.builtOnPurpose.cards[2].description}</p>
            </div>
            <div className="w-full aspect-[21/9] mt-8 overflow-hidden rounded-[2.5rem] shadow-2xl bg-white/5">
              <img src="/02/image 23.png" className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700" alt="Wide Card" />
            </div>
          </motion.div>

          {/* Row 3 - Left (Meeting) */}
          <motion.div
            {...fadeInUp}
            whileHover={{ scale: 1.02, transition: { duration: 0.4 } }}
            className="relative w-full rounded-[2.5rem] overflow-hidden bg-[#FFBD7E] dark:bg-zinc-900 border border-transparent dark:border-zinc-800 p-8 pb-8 flex flex-col transition-all duration-500"
          >
            <div className="flex-shrink-0 z-10 mb-2">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-4 h-4 bg-white rounded-sm"></div>
                <span className="text-[10px] font-bold text-white uppercase tracking-wider">{t.vision.builtOnPurpose.cards[3].badge}</span>
              </div>
              <h3 className="font-semibold text-white text-3xl md:text-[32px] mb-1 leading-tight tracking-tight">{t.vision.builtOnPurpose.cards[3].title}</h3>
              <p className="text-white/90 text-[11px] font-medium leading-relaxed max-w-sm">{t.vision.builtOnPurpose.cards[3].description}</p>
            </div>
            <div className="w-full aspect-[4/3] mt-6 overflow-hidden rounded-[1.5rem] shadow-2xl bg-white/5">
              <img src="/02/image 26.png" className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700" alt="Card 4" />
            </div>
          </motion.div>

          {/* Row 3 - Right (Cup) */}
          <motion.div
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: 0.15 }}
            whileHover={{ scale: 1.02, transition: { duration: 0.4 } }}
            className="relative w-full rounded-[2.5rem] overflow-hidden bg-[#FBC697] dark:bg-zinc-900 border border-transparent dark:border-zinc-800 p-8 pb-8 flex flex-col transition-all duration-500"
          >
            <div className="flex-shrink-0 z-10 mb-2">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-4 h-4 bg-white rounded-sm"></div>
                <span className="text-[10px] font-bold text-white uppercase tracking-wider">{t.vision.builtOnPurpose.cards[4].badge}</span>
              </div>
              <h3 className="font-semibold text-white text-3xl md:text-[32px] mb-1 leading-tight tracking-tight">{t.vision.builtOnPurpose.cards[4].title}</h3>
              <p className="text-white/90 text-[11px] font-medium leading-relaxed max-w-sm">{t.vision.builtOnPurpose.cards[4].description}</p>
            </div>
            <div className="w-full aspect-[4/3] mt-6 overflow-hidden rounded-[1.5rem] shadow-2xl bg-white/5">
              <img src="/02/image 27.png" className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700" alt="Card 5" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* 2. More Than a Machine Section */}
      <div className="max-w-7xl mx-auto mb-48 md:mb-64">
        <div className="text-center mb-16 md:mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.8 }}
            className="heading-impact mb-6 text-black dark:text-white"
          >
            {t.vision.moreThanMachine.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="subheading-custom text-zinc-500 dark:text-zinc-400 max-w-2xl mx-auto"
          >
            {t.vision.moreThanMachine.subtitle}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {/* Row 1 - Left (Coconut) */}
          <motion.div
            {...fadeInUp}
            whileHover={{ scale: 1.02, transition: { duration: 0.4 } }}
            className="relative w-full rounded-[2.5rem] overflow-hidden bg-[#F97316] dark:bg-zinc-900 border border-transparent dark:border-zinc-800 p-8 pb-8 flex flex-col transition-all duration-500"
          >
            <div className="flex-shrink-0 z-10 mb-2">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-4 h-4 bg-white rounded-sm"></div>
                <span className="text-[10px] font-bold text-white uppercase tracking-wider">{t.vision.moreThanMachine.cards[0].badge}</span>
              </div>
              <h3 className="font-semibold text-white text-3xl md:text-[32px] mb-1 leading-tight tracking-tight">{t.vision.moreThanMachine.cards[0].title}</h3>
              <p className="text-white/90 text-[11px] font-medium leading-relaxed max-w-sm">{t.vision.moreThanMachine.cards[0].description}</p>
            </div>
            <div className="w-full aspect-[4/3] mt-6 overflow-hidden rounded-[1.5rem] shadow-2xl bg-white/5">
              <img src="/02/image 29.png" className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700" alt="Sustainability" />
            </div>
          </motion.div>

          {/* Row 1 - Right (Studio) */}
          <motion.div
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: 0.15 }}
            whileHover={{ scale: 1.02, transition: { duration: 0.4 } }}
            className="relative w-full rounded-[2.5rem] overflow-hidden bg-[#FB923C] dark:bg-zinc-900 border border-transparent dark:border-zinc-800 p-8 pb-8 flex flex-col transition-all duration-500"
          >
            <div className="flex-shrink-0 z-10 mb-2">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-4 h-4 bg-white rounded-sm"></div>
                <span className="text-[10px] font-bold text-white uppercase tracking-wider">{t.vision.moreThanMachine.cards[1].badge}</span>
              </div>
              <h3 className="font-semibold text-white text-3xl md:text-[32px] mb-1 leading-tight tracking-tight">{t.vision.moreThanMachine.cards[1].title}</h3>
              <p className="text-white/90 text-[11px] font-medium leading-relaxed max-w-sm">{t.vision.moreThanMachine.cards[1].description}</p>
            </div>
            <div className="w-full aspect-[4/3] mt-6 overflow-hidden rounded-[1.5rem] shadow-2xl bg-white/5">
              <img src="/02/image 28.png" className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700" alt="Process" />
            </div>
          </motion.div>

          {/* Row 2 - Wide (Barista Machine Wide) */}
          <motion.div
            {...fadeInUp}
            className="md:col-span-2 relative w-full rounded-[2.5rem] overflow-hidden bg-[#FF8A00] dark:bg-zinc-900 border border-transparent dark:border-zinc-800 p-8 md:p-12 pb-12 flex flex-col transition-all duration-500"
          >
            <div className="flex-shrink-0 z-10 mb-2">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-4 h-4 bg-white rounded-sm"></div>
                <span className="text-[10px] font-bold text-white uppercase tracking-wider">{t.vision.moreThanMachine.cards[2].badge}</span>
              </div>
              <h3 className="font-bold text-white text-3xl md:text-[40px] mb-2 leading-tight tracking-tight">{t.vision.moreThanMachine.cards[2].title}</h3>
              <p className="text-white/90 text-sm font-medium leading-relaxed max-w-2xl">{t.vision.moreThanMachine.cards[2].description}</p>
            </div>
            <div className="w-full aspect-[21/9] mt-8 overflow-hidden rounded-[2.5rem] shadow-2xl bg-white/5">
              <img src="/02/banner_1000x250_barista_machine 1.png" className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700" alt="Tech Wide" />
            </div>
          </motion.div>

          {/* Row 3 - Left (Landscape) */}
          <motion.div
            {...fadeInUp}
            whileHover={{ scale: 1.02, transition: { duration: 0.4 } }}
            className="relative w-full rounded-[2.5rem] overflow-hidden bg-[#FFBD7E] dark:bg-zinc-900 border border-transparent dark:border-zinc-800 p-8 pb-8 flex flex-col transition-all duration-500"
          >
            <div className="flex-shrink-0 z-10 mb-2">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-4 h-4 bg-white rounded-sm"></div>
                <span className="text-[10px] font-bold text-white uppercase tracking-wider">{t.vision.moreThanMachine.cards[3].badge}</span>
              </div>
              <h3 className="font-semibold text-white text-3xl md:text-[32px] mb-1 leading-tight tracking-tight">{t.vision.moreThanMachine.cards[3].title}</h3>
              <p className="text-white/90 text-[11px] font-medium leading-relaxed max-w-sm">{t.vision.moreThanMachine.cards[3].description}</p>
            </div>
            <div className="w-full aspect-[4/3] mt-6 overflow-hidden rounded-[1.5rem] shadow-2xl bg-white/5">
              <img src="/02/image 33.png" className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700" alt="Balance Landscape" />
            </div>
          </motion.div>

          {/* Row 3 - Right (Person Drinking) */}
          <motion.div
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: 0.15 }}
            whileHover={{ scale: 1.02, transition: { duration: 0.4 } }}
            className="relative w-full rounded-[2.5rem] overflow-hidden bg-[#FBC697] dark:bg-zinc-900 border border-transparent dark:border-zinc-800 p-8 pb-8 flex flex-col transition-all duration-500"
          >
            <div className="flex-shrink-0 z-10 mb-2">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-4 h-4 bg-white rounded-sm"></div>
                <span className="text-[10px] font-bold text-white uppercase tracking-wider">{t.vision.moreThanMachine.cards[4].badge}</span>
              </div>
              <h3 className="font-semibold text-white text-3xl md:text-[32px] mb-1 leading-tight tracking-tight">{t.vision.moreThanMachine.cards[4].title}</h3>
              <p className="text-white/90 text-[11px] font-medium leading-relaxed max-w-sm">{t.vision.moreThanMachine.cards[4].description}</p>
            </div>
            <div className="w-full aspect-[4/3] mt-6 overflow-hidden rounded-[1.5rem] shadow-2xl bg-white/5">
              <img src="/02/image 34.png" className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700" alt="Consistency" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* 3. Thanks for getting this far Section */}
      <div className="max-w-7xl mx-auto py-24 md:py-32 flex flex-col items-center text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl md:text-8xl font-black text-black dark:text-white mb-12 tracking-tighter leading-tight"
        >
          {t.vision.moreThanMachine.footer.title}
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-5xl mb-12"
        >
          🧡
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-zinc-500 dark:text-zinc-400 max-w-2xl text-lg md:text-xl font-medium leading-relaxed mb-4"
        >
          {t.vision.moreThanMachine.footer.text1}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-zinc-500 dark:text-zinc-400 max-w-2xl text-lg md:text-xl font-medium leading-relaxed mb-12"
        >
          {t.vision.moreThanMachine.footer.text2}
        </motion.p>

        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5, delay: 0.5 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-[#FFBA6B] hover:bg-[#FF9F2E] text-white px-10 py-5 rounded-3xl font-bold text-lg md:text-xl transition-all shadow-xl shadow-orange-500/20"
        >
          {t.vision.moreThanMachine.footer.cta}
        </motion.button>
      </div>

    </section>
  );
};

export default Vision;
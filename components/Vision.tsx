import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const fadeInUp = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: false, amount: 0.2 },
  transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] }
};

const Vision = () => {
  const { t } = useLanguage();
  return (
    <section className="bg-white dark:bg-black transition-colors duration-500 px-6 py-24 md:py-32">

      {/* Built on Purpose Section */}
      <div className="max-w-7xl mx-auto mb-32 md:mb-48">
        <div className="text-center mb-16 md:mb-24">
          <motion.h2 {...fadeInUp} className="heading-impact mb-6 text-black dark:text-white">
            {t.vision.builtOnPurpose.title}
          </motion.h2>
          <motion.p
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: 0.1 }}
            className="subheading-custom text-zinc-500 dark:text-zinc-400 max-w-2xl mx-auto"
          >
            {t.vision.builtOnPurpose.subtitle}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {/* Row 1 - Card 1 */}
          <motion.div
            {...fadeInUp}
            className="relative w-full rounded-[2.5rem] overflow-hidden bg-[#F97316] dark:bg-black border border-transparent dark:border-zinc-800 p-8 pb-8 flex flex-col transition-all duration-500"
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
              <img src="/02/image 25.png" className="w-full h-full object-cover object-center" alt="Morning Desk Setup" />
            </div>
          </motion.div>

          {/* Row 1 - Card 2 */}
          <motion.div
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: 0.1 }}
            className="relative w-full rounded-[2.5rem] overflow-hidden bg-[#FB923C] dark:bg-black border border-transparent dark:border-zinc-800 p-8 pb-8 flex flex-col transition-all duration-500"
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
              <img src="/02/image 24.png" className="w-full h-full object-cover object-center" alt="Office Reflection" />
            </div>
          </motion.div>

          {/* Row 2 - Wide */}
          <motion.div
            {...fadeInUp}
            className="md:col-span-2 relative w-full rounded-[2.5rem] overflow-hidden bg-[#FFBD7E] dark:bg-black border border-transparent dark:border-zinc-800 p-8 md:p-12 pb-12 flex flex-col transition-all duration-500"
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
              <img src="/02/image 23.png" className="w-full h-full object-cover object-center" alt="Wellness Assistant" />
            </div>
          </motion.div>

          {/* Row 3 */}
          <motion.div
            {...fadeInUp}
            className="relative w-full rounded-[2.5rem] overflow-hidden bg-[#FFBD7E] dark:bg-black border border-transparent dark:border-zinc-800 p-8 pb-8 flex flex-col transition-all duration-500"
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
              <img src="/02/image 27.png" className="w-full h-full object-cover object-center" alt="Coworking space" />
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
                <span className="text-[10px] font-bold text-white uppercase tracking-wider">{t.vision.builtOnPurpose.cards[4].badge}</span>
              </div>
              <h3 className="font-semibold text-white text-3xl md:text-[32px] mb-1 leading-tight tracking-tight">{t.vision.builtOnPurpose.cards[4].title}</h3>
              <p className="text-white/90 text-[11px] font-medium leading-relaxed max-w-sm">{t.vision.builtOnPurpose.cards[4].description}</p>
            </div>
            <div className="w-full aspect-[4/3] mt-6 overflow-hidden rounded-[1.5rem] shadow-2xl bg-white/5">
              <img src="/02/image 26.png" className="w-full h-full object-cover object-center" alt="Cup of coffee" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* More Than a Machine Section */}
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 md:mb-24">
          <motion.h2 {...fadeInUp} className="heading-impact mb-6 text-black dark:text-white">
            {t.vision.moreThanMachine.title}
          </motion.h2>
          <motion.p
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: 0.1 }}
            className="subheading-custom text-zinc-500 dark:text-zinc-400 max-w-2xl mx-auto"
          >
            {t.vision.moreThanMachine.subtitle}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {/* Row 1 */}
          <motion.div
            {...fadeInUp}
            className="relative w-full rounded-[2.5rem] overflow-hidden bg-[#FFBD7E] dark:bg-black border border-transparent dark:border-zinc-800 p-8 pb-8 flex flex-col transition-all duration-500"
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
              <img src="/02/image 29.png" className="w-full h-full object-cover object-center" alt="Sustainable coffee" />
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
                <span className="text-[10px] font-bold text-white uppercase tracking-wider">{t.vision.moreThanMachine.cards[1].badge}</span>
              </div>
              <h3 className="font-semibold text-white text-3xl md:text-[32px] mb-1 leading-tight tracking-tight">{t.vision.moreThanMachine.cards[1].title}</h3>
              <p className="text-white/90 text-[11px] font-medium leading-relaxed max-w-sm">{t.vision.moreThanMachine.cards[1].description}</p>
            </div>
            <div className="w-full aspect-[4/3] mt-6 overflow-hidden rounded-[1.5rem] shadow-2xl bg-white/5">
              <img src="/02/image 28.png" className="w-full h-full object-cover object-center" alt="Coffee process" />
            </div>
          </motion.div>

          <motion.div
            {...fadeInUp}
            className="md:col-span-2 relative w-full rounded-[2.5rem] overflow-hidden bg-[#FFBD7E] dark:bg-black border border-transparent dark:border-zinc-800 p-8 md:p-12 pb-12 flex flex-col transition-all duration-500"
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
              <img src="/02/banner_1000x250_barista_machine 1.png" className="w-full h-full object-cover object-center" alt="Barista machine" />
            </div>
          </motion.div>

          <motion.div
            {...fadeInUp}
            className="relative w-full rounded-[2.5rem] overflow-hidden bg-[#FB923C] dark:bg-black border border-transparent dark:border-zinc-800 p-8 pb-8 flex flex-col transition-all duration-500"
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
              <img src="/02/image 33.png" className="w-full h-full object-cover object-center" alt="Balanced life" />
            </div>
          </motion.div>

          <motion.div
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: 0.1 }}
            className="relative w-full rounded-[2.5rem] overflow-hidden bg-[#FFBD7E] dark:bg-black border border-transparent dark:border-zinc-800 p-8 pb-8 flex flex-col transition-all duration-500"
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
              <img src="/02/image 34.png" className="w-full h-full object-cover object-center" alt="Engineering" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Thanks for getting this far Section */}
      <div className="max-w-7xl mx-auto mt-32 md:mt-48 text-center px-6 pb-24 md:pb-32">
        <motion.div
          {...fadeInUp}
          className="flex flex-col items-center"
        >
          <h2 className="text-[2.5rem] md:text-[5.5rem] font-semibold text-black dark:text-white mb-6 tracking-tighter leading-[1.1] transition-colors">
            {t.vision.moreThanMachine.footer.title}
          </h2>
          <div className="max-w-4xl mx-auto mb-10">
            <p className="text-zinc-500 dark:text-zinc-400 text-lg md:text-2xl font-medium leading-snug">
              {t.vision.moreThanMachine.footer.text1}
            </p>
            <p className="text-zinc-500 dark:text-zinc-400 text-lg md:text-2xl font-medium leading-snug">
              {t.vision.moreThanMachine.footer.text2}
            </p>
          </div>
          <div className="mb-10 text-4xl">🧡</div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="px-10 py-5 bg-black dark:bg-white text-white dark:text-black rounded-2xl font-bold text-xl shadow-2xl transition-all duration-300 transform"
          >
            {t.vision.moreThanMachine.footer.cta}
          </motion.button>
        </motion.div>
      </div>
    </section >
  );
};

export default Vision;
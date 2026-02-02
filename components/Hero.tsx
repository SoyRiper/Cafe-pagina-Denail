import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import SmartCoffee from './SmartCoffee';
import PhoneMockups from './PhoneMockups';
import CoffeeTaste from './CoffeeTaste';
import Features from './Features';
import CTASection from './CTASection';
import Metrics from './Metrics';
import Hiring from './Hiring';

const fadeInUp = {
   hidden: { opacity: 0, y: 60, filter: 'blur(10px)' },
   show: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: { duration: 1, ease: [0.22, 1, 0.36, 1] }
   }
};

const staggerContainer = {
   hidden: { opacity: 0 },
   show: {
      opacity: 1,
      transition: {
         staggerChildren: 0.2,
         delayChildren: 0.1
      }
   }
};

const Hero = () => {
   const { t } = useLanguage();
   return (
      <div className="w-full flex flex-col bg-white dark:bg-black transition-colors duration-500">

         {/* 1. MASTER HERO SECTION (Contained Gradient Card) */}
         <section className="w-full flex justify-center items-center px-4 md:px-6 pt-24 pb-12 bg-white dark:bg-black transition-colors duration-500">
            <div className="relative w-full max-w-[1440px] bg-white dark:bg-black rounded-[2.5rem] md:rounded-[4rem] flex flex-col justify-center items-center pt-20 md:pt-32 pb-0 md:pb-20 overflow-hidden transition-all duration-500">

               {/* Text Content */}
               <motion.div
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: false, amount: 0.3 }}
                  variants={staggerContainer}
                  className="relative z-10 max-w-4xl mx-auto text-center mb-12 md:mb-16 px-4"
               >
                  <motion.h1 variants={fadeInUp} className="heading-massive text-black dark:text-white mb-8 tracking-tighter leading-[0.9]">
                     The AI <span className="animate-gradient-text">Coffee Machine</span>
                  </motion.h1>
                  <motion.p
                     variants={fadeInUp}
                     className="text-zinc-500 dark:text-zinc-400 text-base md:text-xl font-medium max-w-2xl mx-auto leading-relaxed tracking-tight"
                  >
                     {t.hero.subtitle}
                  </motion.p>
               </motion.div>

               {/* Hero Machine Image */}
               <motion.div
                  initial={{ opacity: 0, scale: 0.9, y: 40 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                  className="relative z-10 w-full max-w-[1000px] flex justify-center items-end mt-4"
               >
                  <img
                     src="/01/source/machine_closeup_correct.png"
                     className="w-full h-auto object-contain drop-shadow-[0_20px_50px_rgba(255,138,0,0.2)] dark:drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] animate-float"
                     alt="Denail AI Coffee Machine Hero"
                  />
               </motion.div>
            </div>
         </section>

         {/* 2. Modular Sections */}
         <SmartCoffee />
         <PhoneMockups />
         <CoffeeTaste />
         <Features />
         <CTASection />
         <Metrics />
         <Hiring />

      </div>
   );
};

export default Hero;
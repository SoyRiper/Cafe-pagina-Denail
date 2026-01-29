import React from 'react';
import { motion } from 'framer-motion';
import SmartCoffee from './SmartCoffee';
import PhoneMockups from './PhoneMockups';
import CoffeeTaste from './CoffeeTaste';
import Features from './Features';
import CTASection from './CTASection';
import Metrics from './Metrics';
import Hiring from './Hiring';

const fadeInUp = {
   initial: { opacity: 0, y: 30 },
   whileInView: { opacity: 1, y: 0 },
   viewport: { once: true },
   transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
};

const Hero = () => {
   return (
      <div className="w-full flex flex-col bg-white">

         {/* 1. MASTER HERO SECTION (Contained Gradient Card) */}
         <section className="w-full flex justify-center items-center px-4 md:px-6 pt-24 pb-12 bg-white">
            <div className="relative w-full max-w-[1440px] hero-gradient rounded-[2.5rem] md:rounded-[4rem] flex flex-col justify-center items-center pt-20 md:pt-32 pb-0 md:pb-20 overflow-hidden shadow-2xl">

               {/* Text Content */}
               <div className="relative z-10 max-w-4xl mx-auto text-center mb-12 md:mb-16 px-4">
                  <motion.h1
                     initial={{ opacity: 0, y: 40 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                     className="heading-massive text-white drop-shadow-sm mb-6"
                  >
                     The AI Coffee Machine
                  </motion.h1>
                  <motion.p
                     initial={{ opacity: 0, y: 20 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                     className="text-white/90 text-sm md:text-lg font-bold max-w-2xl mx-auto leading-relaxed tracking-wide"
                  >
                     Engineered to boost your productivity through deep AI insights, Denail is the coffee machine that truly gets you.
                  </motion.p>
               </div>

               {/* Hero Machine Image */}
               <motion.div
                  initial={{ opacity: 0, scale: 0.95, y: 40 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                  className="relative z-10 w-full max-w-[1000px] flex justify-center items-end mt-4"
               >
                  <img
                     src="/01/source/machine_closeup_correct.png"
                     className="w-full h-auto object-contain drop-shadow-2xl translate-y-2"
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
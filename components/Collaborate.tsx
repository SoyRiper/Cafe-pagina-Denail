import React from 'react';
import { motion } from 'framer-motion';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
};

const Collaborate = () => {
  return (
    <div className="w-full flex flex-col orange-mesh-bg min-h-screen">
      <section className="px-6 md:px-16 pt-24 md:pt-40 pb-32">
        {/* Header Section */}
        <div className="max-w-7xl mx-auto text-center mb-16 md:mb-24">
          <motion.h2
            {...fadeInUp}
            className="text-4xl md:text-[5.5rem] font-bold text-black dark:text-white mb-8 tracking-tighter leading-[1.1]"
          >
            Let's Build It Together
          </motion.h2>
          <motion.p
            {...fadeInUp}
            className="text-zinc-600 dark:text-zinc-400 text-lg md:text-2xl font-medium max-w-4xl mx-auto leading-tight mb-12"
          >
            We're actively looking for visionary collaborators, co-founders, and advisors who believe in what we're creating.
          </motion.p>
        </div>

        <div className="max-w-7xl mx-auto flex flex-col gap-8 md:gap-10">
          {/* Main Card: Advisors */}
          <motion.div
            {...fadeInUp}
            className="relative w-full rounded-[2.5rem] overflow-hidden bg-gradient-to-br from-[#FFBD7E] via-[#FB923C] to-[#F59E0B] p-8 md:p-12 pb-12 flex flex-col"
          >
            <div className="flex flex-col md:flex-row justify-between items-start mb-2">
              <div className="flex flex-col mb-4 md:mb-0">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-4 h-4 bg-white rounded-sm"></div>
                  <span className="text-[10px] font-bold text-white uppercase tracking-wider">Advisors</span>
                </div>
                <h3 className="font-bold text-white text-3xl md:text-[32px] mb-2 leading-tight tracking-tight">Guide. Challenge. Accelerate.</h3>
                <p className="text-white/90 text-[11px] font-medium leading-relaxed max-w-lg mb-6">
                  We're looking for experienced voices to help us refine our direction and think smarter, together. No full-time commitment, just strategic input, perspective, and honest guidance when it matters most.
                </p>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-black text-white px-8 py-3 rounded-xl font-bold text-[11px] uppercase tracking-widest shadow-xl self-start md:self-auto"
              >
                Apply as Advisor
              </motion.button>
            </div>
            <div className="w-full mt-6 overflow-hidden rounded-[2.5rem] shadow-2xl bg-white/5">
              <img src="/04/image 41.png" className="w-full h-auto" alt="Advisor collaboration" />
            </div>
          </motion.div>

          {/* Grid of 2 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
            {/* Card: Founders */}
            <motion.div
              {...fadeInUp}
              className="relative w-full rounded-[2.5rem] overflow-hidden bg-[#FFBD7E] p-8 pb-8 flex flex-col"
            >
              <div className="flex-shrink-0 z-10 mb-2">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-4 h-4 bg-white rounded-sm"></div>
                  <span className="text-[10px] font-bold text-white uppercase tracking-wider">For builders who see the invisible</span>
                </div>
                <h3 className="font-bold text-white text-3xl md:text-[32px] mb-2 leading-tight tracking-tight">Build what others only imagine</h3>
                <p className="text-white/90 text-[11px] font-medium leading-relaxed mb-6">
                  We're looking for a technical co-founder to lead hardware development. No salary upfront, just equity, shared vision, and the chance to bring something meaningful into the world.
                </p>
              </div>
              <div className="w-full mt-6 overflow-hidden rounded-[1.5rem] shadow-2xl bg-white/5 mb-8">
                <img src="/04/image 37.png" className="w-full h-auto" alt="Builder imagining" />
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-black text-white px-8 py-4 rounded-xl font-bold text-[11px] uppercase tracking-widest shadow-xl w-fit mx-auto"
              >
                Apply as Founder
              </motion.button>
            </motion.div>

            {/* Card: Hiring */}
            <motion.div
              {...fadeInUp}
              transition={{ ...fadeInUp.transition, delay: 0.1 }}
              className="relative w-full rounded-[2.5rem] overflow-hidden bg-[#FB923C] p-8 pb-8 flex flex-col"
            >
              <div className="flex-shrink-0 z-10 mb-2">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-4 h-4 bg-white rounded-sm"></div>
                  <span className="text-[10px] font-bold text-white uppercase tracking-wider">Get hired</span>
                </div>
                <h3 className="font-bold text-white text-3xl md:text-[32px] mb-2 leading-tight tracking-tight">Let's keep the door open</h3>
                <p className="text-white/90 text-[11px] font-medium leading-relaxed mb-6">
                  We're not hiring right now, but if you connect with our vision, feel free to send your portfolio we'll keep it for future roles.
                </p>
              </div>
              <div className="w-full mt-6 overflow-hidden rounded-[1.5rem] shadow-2xl bg-white/5 mb-8">
                <img src="/04/image 39.png" className="w-full h-auto" alt="Hiring door" />
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-black text-white px-8 py-4 rounded-xl font-bold text-[11px] uppercase tracking-widest shadow-xl w-fit mx-auto"
              >
                Share your portfolio
              </motion.button>
            </motion.div>
          </div>
        </div>

        {/* Final CTA Section */}
        <div className="max-w-4xl mx-auto text-center mt-32 md:mt-48">
          <motion.div {...fadeInUp}>
            <h2 className="text-4xl md:text-6xl font-black text-black dark:text-white mb-8 tracking-tighter">
              This is how we build
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 text-base md:text-xl font-medium leading-relaxed mb-12 max-w-3xl mx-auto">
              We're not offering jobs we're building a team of people who believe before everything's ready. If you're looking for stability, this might not be it. But if you're here to help shape something from zero, we'd love to meet you. 🧡
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-5 bg-gradient-to-r from-[#FFBD7E] to-[#FB923C] text-white rounded-2xl font-black text-xl shadow-2xl shadow-orange-500/20 transition-all duration-300 transform"
            >
              Apply
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Collaborate;
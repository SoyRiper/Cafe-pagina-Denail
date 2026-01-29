import React from 'react';
import { motion } from 'framer-motion';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
};

const Waitlist = () => {
  return (
    <div className="w-full flex flex-col orange-mesh-bg min-h-screen">
      <section className="px-6 md:px-16 pt-24 md:pt-40 pb-32">
        {/* Header Section */}
        <div className="max-w-7xl mx-auto text-center mb-16 md:mb-24">
          <motion.h2
            {...fadeInUp}
            className="text-4xl md:text-[5.5rem] font-bold text-black dark:text-white mb-8 tracking-tighter leading-[1.1]"
          >
            The Waitlist, But Not for Everyone
          </motion.h2>
          <motion.p
            {...fadeInUp}
            className="text-zinc-600 dark:text-zinc-400 text-lg md:text-2xl font-medium max-w-4xl mx-auto leading-tight mb-12"
          >
            We’re building something for people who really get it. <br className="hidden md:block" /> If you’re into coffee, tech, and ideas that improve your day you might belong here.
          </motion.p>
          <motion.button
            {...fadeInUp}
            className="px-8 py-4 bg-gradient-to-r from-[#FFBD7E] to-[#FB923C] text-white rounded-xl font-bold text-lg shadow-lg shadow-orange-500/20 hover:scale-105 transition-all duration-300"
          >
            Join the Waitlist
          </motion.button>
        </div>

        {/* Row 1: Grid */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 mb-10">
          <motion.div
            {...fadeInUp}
            className="relative w-full rounded-[2.5rem] overflow-hidden bg-[#FFBD7E] p-8 pb-8 flex flex-col"
          >
            <div className="flex-shrink-0 z-10 mb-2">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-4 h-4 bg-white rounded-sm"></div>
                <span className="text-[10px] font-bold text-white uppercase tracking-wider">Start with a few quick questions</span>
              </div>
              <h3 className="font-bold text-white text-3xl md:text-[32px] mb-2 leading-tight tracking-tight">Let's see if we're made for each other</h3>
              <p className="text-white/80 text-[11px] font-medium leading-relaxed max-w-sm">Answer a short set of questions so we can understand if Denail fits your lifestyle and mindset. No fluff, just signal.</p>
            </div>
            <div className="w-full aspect-[4/3] mt-6 overflow-hidden rounded-[1.5rem] shadow-2xl bg-white/5">
              <img src="/03/image 35.png" className="w-full h-full object-cover object-center" alt="Coffee and gadgets" />
            </div>
          </motion.div>

          <motion.div
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: 0.1 }}
            className="relative w-full rounded-[2.5rem] overflow-hidden bg-[#FB923C] p-8 pb-8 flex flex-col"
          >
            <div className="flex-shrink-0 z-10 mb-2">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-4 h-4 bg-white rounded-sm"></div>
                <span className="text-[10px] font-bold text-white uppercase tracking-wider">We review each response manually</span>
              </div>
              <h3 className="font-bold text-white text-3xl md:text-[32px] mb-2 leading-tight tracking-tight">No algorithms. Just real people reading.</h3>
              <p className="text-white/80 text-[11px] font-medium leading-relaxed max-w-sm">Every answer is reviewed by someone on our team because building something meaningful starts with listening.</p>
            </div>
            <div className="w-full aspect-[4/3] mt-6 overflow-hidden rounded-[1.5rem] shadow-2xl bg-white/5">
              <img src="/03/image 38.png" className="w-full h-full object-cover object-center" alt="Real person reading" />
            </div>
          </motion.div>
        </div>

        {/* Row 2: Wide Card */}
        <motion.div
          {...fadeInUp}
          className="max-w-7xl mx-auto relative w-full rounded-[2.5rem] overflow-hidden bg-gradient-to-br from-[#FFBD7E] via-[#FB923C] to-[#F59E0B] p-8 md:p-12 pb-12 flex flex-col mb-32"
        >
          <div className="flex-shrink-0 z-10 mb-2">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-4 h-4 bg-white rounded-sm"></div>
              <span className="text-[10px] font-bold text-white uppercase tracking-wider">If it's a match, you're in and more</span>
            </div>
            <h3 className="font-bold text-white text-3xl md:text-[40px] mb-2 leading-tight tracking-tight">Get early access (and a little something extra)</h3>
            <p className="text-white/80 text-[11px] font-medium leading-relaxed max-w-xl">If your answers align with what we're building, we'll add you to the waitlist and send you a surprise as a thank you.</p>
          </div>
          <div className="w-full mt-10 overflow-hidden rounded-[2.5rem] shadow-2xl bg-white/5">
            <img src="/03/image 42.png" className="w-full h-auto" alt="Special perk" />
          </div>
        </motion.div>

        {/* Final CTA Section */}
        <div className="max-w-4xl mx-auto text-center">
          <motion.div {...fadeInUp}>
            <p className="text-zinc-600 dark:text-zinc-400 text-xl md:text-3xl font-bold leading-tight mb-12">
              Thanks for considering Denail. <br />
              We're not for everyone and that's exactly the point.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 bg-gradient-to-r from-[#FFBD7E] to-[#FB923C] text-white rounded-2xl font-black text-xl shadow-2xl shadow-orange-500/20 transition-all duration-300 transform"
            >
              Join the Waitlist
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Waitlist;
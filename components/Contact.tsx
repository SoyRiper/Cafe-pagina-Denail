import React from 'react';
import { motion } from 'framer-motion';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
};

const Contact = () => {
  return (
    <div className="w-full flex flex-col orange-mesh-bg min-h-screen">
      <section className="px-6 md:px-16 pt-24 md:pt-40 pb-32">
        {/* Header Section */}
        <div className="max-w-7xl mx-auto text-center mb-16 md:mb-24">
          <motion.h2
            {...fadeInUp}
            className="text-4xl md:text-[5.5rem] font-bold text-black dark:text-white mb-8 tracking-tighter leading-[1.1]"
          >
            Get in Touch, The Right Way
          </motion.h2>
          <motion.p
            {...fadeInUp}
            className="text-zinc-600 dark:text-zinc-400 text-lg md:text-2xl font-medium max-w-4xl mx-auto leading-tight mb-12"
          >
            Different topics, different inboxes. Here's how you can reach me or the Denail team directly.
          </motion.p>
        </div>

        <div className="max-w-7xl mx-auto flex flex-col gap-8 md:gap-10">
          {/* Main Card: Careers */}
          <motion.div
            {...fadeInUp}
            className="relative w-full rounded-[2.5rem] overflow-hidden bg-gradient-to-br from-[#FFBD7E] via-[#FB923C] to-[#F59E0B] p-8 md:p-12 pb-12 flex flex-col"
          >
            <div className="flex flex-col md:flex-row justify-between items-start mb-2">
              <div className="flex flex-col mb-4 md:mb-0">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-4 h-4 bg-white rounded-sm"></div>
                  <span className="text-[10px] font-bold text-white uppercase tracking-wider">Careers & Applications</span>
                </div>
                <h3 className="font-bold text-white text-3xl md:text-[32px] mb-2 leading-tight tracking-tight">Want to work with us?</h3>
                <p className="text-white/90 text-[11px] font-medium leading-relaxed max-w-lg mb-6">
                  We're building something from scratch and looking for great people to join. Send your CV or portfolio here.
                </p>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-black text-white px-8 py-3 rounded-xl font-bold text-[11px] uppercase tracking-widest shadow-xl self-start md:self-auto"
              >
                Collaborate
              </motion.button>
            </div>
            <div className="w-full mt-6 overflow-hidden rounded-[2.5rem] shadow-2xl bg-white/5">
              {/* Correctly mapped to image 44 (Sketches) */}
              <img src="/06/image 44.png" className="w-full h-auto" alt="Workspace setup" />
            </div>
          </motion.div>

          {/* Grid of 2 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
            {/* Card: Investors */}
            <motion.div
              {...fadeInUp}
              className="relative w-full rounded-[2.5rem] overflow-hidden bg-[#FFBD7E] p-8 pb-8 flex flex-col"
            >
              <div className="flex-shrink-0 z-10 mb-2">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-4 h-4 bg-white rounded-sm"></div>
                  <span className="text-[10px] font-bold text-white uppercase tracking-wider">Investors & Partners</span>
                </div>
                <h3 className="font-bold text-white text-3xl md:text-[32px] mb-2 leading-tight tracking-tight">Let's talk opportunities</h3>
                <p className="text-white/90 text-[11px] font-medium leading-relaxed mb-6">
                  If you're a VC, business angel, or interested in strategic partnerships, this is the inbox you want: <span className="font-bold border-b border-white/30 truncate">danielmoheno@gmail.com</span>
                </p>
              </div>
              <div className="w-full mt-auto overflow-hidden rounded-[1.5rem] shadow-2xl bg-white/5">
                {/* Correctly mapped to image 31 (Red Rug) */}
                <img src="/06/image 31.png" className="w-full h-auto" alt="Person on rug reading" />
              </div>
            </motion.div>

            {/* Card: General */}
            <motion.div
              {...fadeInUp}
              transition={{ ...fadeInUp.transition, delay: 0.1 }}
              className="relative w-full rounded-[2.5rem] overflow-hidden bg-[#FB923C] p-8 pb-8 flex flex-col"
            >
              <div className="flex-shrink-0 z-10 mb-2">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-4 h-4 bg-white rounded-sm"></div>
                  <span className="text-[10px] font-bold text-white uppercase tracking-wider">General inquiries</span>
                </div>
                <h3 className="font-bold text-white text-3xl md:text-[32px] mb-2 leading-tight tracking-tight">For everything else</h3>
                <p className="text-white/90 text-[11px] font-medium leading-relaxed mb-6">
                  Ideas, press, questions, or anything that doesn't fit above, write me directly: <span className="font-bold border-b border-white/30 truncate">denail@gmail.com</span>
                </p>
              </div>
              <div className="w-full mt-auto overflow-hidden rounded-[1.5rem] shadow-2xl bg-white/5">
                {/* Correctly mapped to image 43 (Coffee Cup) */}
                <img src="/06/image 43.png" className="w-full h-auto" alt="Coffee cup top view" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
import React from 'react';
import { motion } from 'framer-motion';

const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
};

const SmartCoffee = () => {
    return (
        <section className="py-24 md:py-32 px-6 bg-white dark:bg-zinc-950">
            <div className="max-w-3xl mx-auto mb-16 text-center">
                <motion.h2 {...fadeInUp} className="heading-impact mb-6">
                    Smart coffee, simple routine
                </motion.h2>
                <motion.p
                    {...fadeInUp}
                    transition={{ ...fadeInUp.transition, delay: 0.1 }}
                    className="subheading-custom text-zinc-500 dark:text-zinc-400"
                >
                    Forget about choosing coffee. AI picks it for you based on your day, your energy, and your routine.
                </motion.p>
            </div>

            <div className="max-w-7xl mx-auto bg-gradient-to-br from-[#DFA893] via-[#FCD786] to-[#F2E7A7] rounded-[3rem] md:rounded-[5rem] p-8 md:p-12 text-center shadow-2xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                    <motion.div
                        {...fadeInUp}
                        className="image-rounded shadow-xl aspect-[4/5] bg-zinc-100 overflow-hidden"
                    >
                        <img
                            src="/01/source/lifestyle_left.png"
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                            alt="Lifestyle Left"
                        />
                    </motion.div>
                    <motion.div
                        {...fadeInUp}
                        transition={{ ...fadeInUp.transition, delay: 0.1 }}
                        className="image-rounded shadow-xl aspect-[4/5] bg-zinc-100 overflow-hidden"
                    >
                        <img
                            src="/01/source/lifestyle_right.png"
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                            alt="Lifestyle Right"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default SmartCoffee;

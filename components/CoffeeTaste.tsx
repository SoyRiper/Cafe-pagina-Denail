import React from 'react';
import { motion } from 'framer-motion';

const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
};

const CoffeeTaste = () => {
    return (
        <section className="py-24 md:py-32 px-6 bg-white dark:bg-zinc-950">
            <div className="max-w-7xl mx-auto text-center mb-16">
                <motion.h2 {...fadeInUp} className="heading-impact mb-6">
                    Knows your coffee taste
                </motion.h2>
                <motion.p
                    {...fadeInUp}
                    transition={{ ...fadeInUp.transition, delay: 0.1 }}
                    className="subheading-custom text-zinc-500 dark:text-zinc-400 max-w-2xl"
                >
                    Get coffee suggestions directly from your habits, energy and routine. Let the AI brew the perfect cup with a single tap.
                </motion.p>
            </div>

            <motion.div
                {...fadeInUp}
                className="max-w-4xl mx-auto bg-gradient-to-br from-[#DFA893] via-[#FCD786] to-[#F2E7A7] rounded-[3rem] p-8 md:p-16 shadow-2xl relative"
            >
                <div className="relative w-full aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl bg-black/5">
                    <img
                        src="/01/source/machine_closeup_correct.png"
                        className="w-full h-full object-cover"
                        alt="Coffee Taste Section Machine"
                    />
                </div>
            </motion.div>
        </section>
    );
};

export default CoffeeTaste;

import React from 'react';
import { motion } from 'framer-motion';

const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
};

const Hiring = () => {
    return (
        <section className="py-24 px-6 bg-white dark:bg-zinc-950 border-t border-zinc-100 dark:border-zinc-900">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
                <div className="max-w-2xl text-left">
                    <motion.h3 {...fadeInUp} className="text-3xl md:text-4xl font-black mb-4">
                        We are starting and hiring!
                    </motion.h3>
                    <motion.p
                        {...fadeInUp}
                        transition={{ ...fadeInUp.transition, delay: 0.1 }}
                        className="text-zinc-500 font-medium text-lg"
                    >
                        If you're an AI Developer or Hardware Engineer and want to get involved, we'd love to talk.
                    </motion.p>
                </div>
                <motion.button
                    {...fadeInUp}
                    className="btn-main border-2 border-zinc-900 dark:border-zinc-100 hover:bg-zinc-900 hover:text-white dark:hover:bg-white dark:hover:text-black shrink-0"
                >
                    See open positions
                </motion.button>
            </div>

            {/* Decorative Gradient Block */}

        </section>
    );
};

export default Hiring;

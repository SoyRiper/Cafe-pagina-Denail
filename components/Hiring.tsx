import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const fadeInUp = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: false, amount: 0.2 },
    transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] }
};

const Hiring = () => {
    const { t } = useLanguage();
    return (
        <section className="py-24 px-6 bg-white dark:bg-black border-t border-zinc-100 dark:border-zinc-900 transition-colors duration-500">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
                <div className="max-w-2xl">
                    <motion.h2 {...fadeInUp} className="heading-impact mb-4 text-black dark:text-white transition-colors">
                        {t.hiring.title}
                    </motion.h2>
                    <motion.p
                        {...fadeInUp}
                        transition={{ ...fadeInUp.transition, delay: 0.1 }}
                        className="text-zinc-500 dark:text-zinc-400 font-medium text-lg transition-colors"
                    >
                        {t.hiring.subtitle}
                    </motion.p>
                </div>
                <motion.button
                    {...fadeInUp}
                    className="btn-main bg-black dark:bg-white text-white dark:text-black hover:scale-105 active:scale-95 px-12 transition-all"
                >
                    {t.hiring.cta}
                </motion.button>
            </div>
        </section>
    );
};

export default Hiring;

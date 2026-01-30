import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const fadeInUp = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: false, amount: 0.2 },
    transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] }
};

const CTASection = () => {
    const { t } = useLanguage();
    return (
        <section className="py-24 md:py-48 px-6 bg-white dark:bg-black overflow-hidden transition-colors duration-500">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16 md:gap-24">
                <div className="flex-[1.2] text-left">
                    <motion.h2 {...fadeInUp} className="heading-massive mb-8 text-black dark:text-white transition-colors">
                        {t.buildFuture.title}
                    </motion.h2>
                    <motion.div
                        {...fadeInUp}
                        transition={{ ...fadeInUp.transition, delay: 0.1 }}
                    >
                        <button className="btn-main btn-orange">
                            {t.buildFuture.cta}
                        </button>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9, x: 50 }}
                    whileInView={{ opacity: 1, scale: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    className="flex-1"
                >
                    <img
                        src="/01/correct_machine.png"
                        className="w-full h-auto object-contain drop-shadow-2xl"
                        alt={t.buildFuture.title}
                    />
                </motion.div>
            </div>
        </section>
    );
};

export default CTASection;

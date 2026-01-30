import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const fadeInUp = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: false, amount: 0.2 },
    transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] }
};

const SmartCoffee = () => {
    const { t } = useLanguage();
    return (
        <section className="py-24 md:py-32 px-6 bg-white dark:bg-black transition-colors duration-500">
            <div className="max-w-3xl mx-auto mb-16 text-center">
                <motion.h2 {...fadeInUp} className="heading-impact mb-6">
                    {t.smartCoffee.title}
                </motion.h2>
                <motion.p
                    {...fadeInUp}
                    transition={{ ...fadeInUp.transition, delay: 0.1 }}
                    className="subheading-custom text-zinc-500 dark:text-zinc-400"
                >
                    {t.smartCoffee.subtitle}
                </motion.p>
            </div>

            <div className="max-w-7xl mx-auto bg-gradient-to-br from-[#DFA893] via-[#FCD786] to-[#F2E7A7] dark:from-zinc-900 dark:via-zinc-800 dark:to-zinc-900 rounded-[3rem] md:rounded-[5rem] p-8 md:p-12 text-center shadow-2xl transition-all duration-500">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                    <motion.div
                        {...fadeInUp}
                        className="image-rounded shadow-xl aspect-[4/5] bg-zinc-100 dark:bg-zinc-800 overflow-hidden"
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
                        className="image-rounded shadow-xl aspect-[4/5] bg-zinc-100 dark:bg-zinc-800 overflow-hidden"
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

import React, { useEffect, useRef } from 'react';
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const fadeInUp = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: false, amount: 0.2 },
    transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] }
};

const Counter = ({ value }: { value: string }) => {
    // Extract number and suffix (e.g., "61%" -> 61, "%"; "+90%" -> 90, "%")
    const numericValue = parseInt(value.replace(/[^0-9]/g, ''));
    const prefix = value.includes('+') ? '+' : '';
    const suffix = value.includes('%') ? '%' : '';

    const ref = useRef(null);
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { damping: 30, stiffness: 100 });
    const isInView = useInView(ref, { once: false, margin: "-100px" });

    useEffect(() => {
        if (isInView) {
            motionValue.set(numericValue);
        } else {
            motionValue.set(0);
        }
    }, [isInView, numericValue, motionValue]);

    useEffect(() => {
        springValue.on("change", (latest) => {
            if (ref.current) {
                ref.current.textContent = `${prefix}${Math.floor(latest)}${suffix}`;
            }
        });
    }, [springValue, prefix, suffix]);

    return <span ref={ref}>{value}</span>; // Initial render
};

const Metrics = () => {
    const { t } = useLanguage();
    const stats = [
        { label: t.metrics.stats[0].label, sub: t.metrics.stats[0].sub, val: t.metrics.stats[0].val },
        { label: t.metrics.stats[1].label, sub: t.metrics.stats[1].sub, val: t.metrics.stats[1].val },
        { label: t.metrics.stats[2].label, sub: t.metrics.stats[2].sub, val: t.metrics.stats[2].val }
    ];

    return (
        <section className="py-24 md:py-32 px-6 bg-white dark:bg-zinc-950">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                <div className="max-w-xl">
                    <motion.h2
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.8 }}
                        className="heading-impact mb-6 text-left text-black dark:text-white transition-colors"
                    >
                        {t.metrics.title}
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="text-lg font-medium text-zinc-500 dark:text-zinc-400 text-left transition-colors"
                    >
                        {t.metrics.subtitle}
                    </motion.p>
                </div>
                <motion.button
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn-main border-2 border-zinc-900 dark:border-zinc-100 hover:bg-zinc-900 hover:text-white dark:hover:bg-white dark:hover:text-black shrink-0"
                >
                    {t.metrics.cta}
                </motion.button>
            </div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                {stats.map((s, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.8, delay: i * 0.15 }}
                        whileHover={{ y: -10 }}
                        className="card-premium flex flex-col justify-between min-h-[400px] transition-all duration-500 hover:shadow-2xl"
                    >
                        <div className="text-left">
                            <h3 className="text-2xl font-black mb-4 tracking-tight text-black dark:text-white">{s.label}</h3>
                            <p className="text-zinc-500 dark:text-zinc-400 font-medium leading-snug">{s.sub}</p>
                        </div>
                        <div className="text-[#FF8A00] font-black text-7xl md:text-8xl tracking-tighter mt-8 text-left">
                            <Counter value={s.val} />
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Metrics;
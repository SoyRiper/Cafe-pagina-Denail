import React from 'react';
import { motion } from 'framer-motion';

const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
};

const Metrics = () => {
    const stats = [
        { label: "Not Energizing Enough", sub: "61% say their home coffee doesn't give them the boost they expect.", val: "61%" },
        { label: "Focus Breaker", sub: "70% interrupt deep work just to make coffee.", val: "70%" },
        { label: "Wrong Coffee Choices", sub: "+90% don't know what type of coffee suits their energy.", val: "+90%" }
    ];

    return (
        <section className="py-24 md:py-32 px-6 bg-white dark:bg-zinc-950">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                <div className="max-w-xl">
                    <motion.h2 {...fadeInUp} className="heading-impact mb-6 text-left">
                        Wake-up Metrics
                    </motion.h2>
                    <motion.p
                        {...fadeInUp}
                        transition={{ ...fadeInUp.transition, delay: 0.1 }}
                        className="text-lg font-medium text-zinc-500 text-left"
                    >
                        Stats from our live questionnaire and real user insights.
                    </motion.p>
                </div>
                <motion.button
                    {...fadeInUp}
                    className="btn-main border-2 border-zinc-900 dark:border-zinc-100 hover:bg-zinc-900 hover:text-white dark:hover:bg-white dark:hover:text-black shrink-0"
                >
                    Help us to get more data
                </motion.button>
            </div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                {stats.map((s, i) => (
                    <motion.div
                        key={i}
                        {...fadeInUp}
                        transition={{ ...fadeInUp.transition, delay: i * 0.1 }}
                        className="card-premium flex flex-col justify-between min-h-[400px]"
                    >
                        <div className="text-left">
                            <h3 className="text-2xl font-black mb-4 tracking-tight">{s.label}</h3>
                            <p className="text-zinc-500 font-medium leading-snug">{s.sub}</p>
                        </div>
                        <div className="text-[#FF8A00] font-black text-7xl md:text-8xl tracking-tighter mt-8 text-left">
                            {s.val}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Metrics;
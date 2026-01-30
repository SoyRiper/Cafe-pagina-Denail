import { useRef } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const fadeInUp = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: false, amount: 0.2 },
    transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] }
};

const Features = () => {
    const { t } = useLanguage();
    const scrollRef = useRef<HTMLDivElement>(null);

    const features = [
        {
            title: t.fuelFlow.items[0].title,
            description: t.fuelFlow.items[0].description,
            img: "/01/image 6.png"
        },
        {
            title: t.fuelFlow.items[1].title,
            description: t.fuelFlow.items[1].description,
            img: "/01/image 5.png"
        },
        {
            title: t.fuelFlow.items[2].title,
            description: t.fuelFlow.items[2].description,
            img: "/01/image 7.png"
        }
    ];

    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const { scrollLeft, clientWidth } = scrollRef.current;
            const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
            scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
        }
    };

    return (
        <section className="py-24 md:py-32 px-6 md:px-16 overflow-hidden bg-white dark:bg-zinc-950 transition-colors duration-500">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                    <motion.div {...fadeInUp} className="max-w-2xl text-left">
                        <motion.h2 {...fadeInUp} className="heading-impact mb-6 text-black dark:text-white transition-colors">
                            {t.fuelFlow.title}
                        </motion.h2>
                        <motion.p
                            {...fadeInUp}
                            transition={{ ...fadeInUp.transition, delay: 0.1 }}
                            className="subheading-custom text-zinc-500 dark:text-zinc-400 max-w-2xl text-left transition-colors"
                        >
                            {t.fuelFlow.subtitle}
                        </motion.p>
                    </motion.div>
                </div>

                <div className="relative group">
                    <button
                        onClick={() => scroll('left')}
                        className="absolute left-[-20px] md:left-[-40px] top-1/2 -translate-y-1/2 z-20 w-12 h-12 md:w-16 md:h-16 bg-white dark:bg-zinc-800 rounded-full shadow-lg flex items-center justify-center text-zinc-400 hover:text-black dark:hover:text-white transition-all opacity-0 group-hover:opacity-100"
                    >
                        <ChevronLeft size={32} />
                    </button>

                    <button
                        onClick={() => scroll('right')}
                        className="absolute right-[-20px] md:right-[-40px] top-1/2 -translate-y-1/2 z-20 w-12 h-12 md:w-16 md:h-16 bg-white dark:bg-zinc-800 rounded-full shadow-lg flex items-center justify-center text-zinc-400 hover:text-black dark:hover:text-white transition-all opacity-0 group-hover:opacity-100"
                    >
                        <ChevronRight size={32} />
                    </button>

                    <div
                        ref={scrollRef}
                        className="flex gap-6 md:gap-8 overflow-x-auto pb-12 hide-scrollbar snap-x snap-mandatory"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                        {features.map((feature, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
                                className={`flex-shrink-0 w-[85vw] md:w-[calc(33.33%-22px)] snap-start bg-white dark:bg-zinc-900 rounded-[3rem] p-8 md:p-14 shadow-[0_20px_50px_rgba(0,0,0,0.03)] border border-zinc-100 dark:border-zinc-800 flex flex-col min-h-[500px] md:min-h-[600px] text-left transition-colors duration-500`}
                            >
                                <div className="mb-8">
                                    <h3 className="text-black dark:text-white font-extrabold text-[24px] md:text-[28px] leading-tight mb-4">{feature.title}</h3>
                                    <p className="text-zinc-500 font-medium text-base md:text-lg leading-relaxed">{feature.description}</p>
                                </div>

                                <div className="flex-1 flex items-center justify-center">
                                    <div className="w-full max-w-[280px] aspect-square rounded-2xl flex items-center justify-center overflow-hidden transition-all duration-500">
                                        <motion.img
                                            src={feature.img}
                                            alt={feature.title}
                                            className="w-full h-full object-contain mix-blend-multiply dark:mix-blend-screen transition-all duration-500"
                                            whileHover={{ scale: 1.1 }}
                                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                        />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;

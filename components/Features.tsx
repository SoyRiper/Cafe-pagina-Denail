import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
};

const Features = () => {
    const scrollRef = useRef<HTMLDivElement>(null);

    const features = [
        {
            title: "Frontier Intelligence",
            desc: "Powered by contextual AI, Denail brews your coffee before you even ask.",
            img: "/01/image 6.png",
            bg: "bg-white"
        },
        {
            title: "Minimalism",
            desc: "No buttons. No noise. Just coffee and calm, in one single motion.",
            img: "/01/image 5.png",
            bg: "bg-white"
        },
        {
            title: "Sustainable",
            desc: "We use top-tier eco materials and aim for the highest global sustainability standards.",
            img: "/01/image 7.png",
            bg: "bg-white"
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
        <section className="py-24 md:py-32 px-6 md:px-16 overflow-hidden bg-white dark:bg-zinc-950">
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                    <motion.div {...fadeInUp} className="max-w-2xl text-left">
                        <h2 className="text-black font-extrabold text-[36px] md:text-[52px] leading-[1.1] mb-4 tracking-tight">
                            Fuel your flow with smart coffee
                        </h2>
                        <p className="text-zinc-500 font-medium text-lg md:text-xl max-w-xl text-left">
                            Intelligent, sustainable and designed for you. Denail is the smartest way to start your day.
                        </p>
                    </motion.div>
                    <motion.div {...fadeInUp}>
                        <button className="bg-black text-white px-8 py-3 rounded-full font-bold text-sm tracking-tight hover:bg-zinc-800 transition-colors">
                            See more features
                        </button>
                    </motion.div>
                </div>

                {/* Carousel Container */}
                <div className="relative group">
                    <button
                        onClick={() => scroll('left')}
                        className="absolute left-[-20px] md:left-[-40px] top-1/2 -translate-y-1/2 z-20 w-12 h-12 md:w-16 md:h-16 bg-white rounded-full shadow-lg flex items-center justify-center text-zinc-400 hover:text-black transition-all opacity-0 group-hover:opacity-100"
                    >
                        <ChevronLeft size={32} />
                    </button>

                    <button
                        onClick={() => scroll('right')}
                        className="absolute right-[-20px] md:right-[-40px] top-1/2 -translate-y-1/2 z-20 w-12 h-12 md:w-16 md:h-16 bg-white rounded-full shadow-lg flex items-center justify-center text-zinc-400 hover:text-black transition-all opacity-0 group-hover:opacity-100"
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
                                className={`flex-shrink-0 w-[85vw] md:w-[calc(33.33%-22px)] snap-start ${feature.bg} rounded-[3rem] p-8 md:p-14 shadow-[0_20px_50px_rgba(0,0,0,0.03)] border border-zinc-100 flex flex-col min-h-[500px] md:min-h-[600px] text-left`}
                            >
                                <div className="mb-8">
                                    <h3 className="text-black font-extrabold text-[24px] md:text-[28px] leading-tight mb-4">{feature.title}</h3>
                                    <p className="text-zinc-500 font-medium text-base md:text-lg leading-relaxed">{feature.desc}</p>
                                </div>

                                <div className="flex-1 flex items-center justify-center">
                                    <motion.img
                                        src={feature.img}
                                        alt={feature.title}
                                        className="w-full max-w-[280px] h-auto object-contain"
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                    />
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

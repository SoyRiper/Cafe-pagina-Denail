import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { User, Coffee, Zap, Plus, Home, History, TrendingUp } from 'lucide-react';

const fadeInUp = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: false, amount: 0.2 },
    transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] }
};

const floating = {
    animate: {
        y: [0, -15, 0],
        transition: {
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
        }
    }
};

const gaugeVariants = {
    initial: { strokeDashoffset: 628 },
    whileInView: {
        strokeDashoffset: 250,
        transition: { duration: 2, delay: 0.5, ease: "easeOut" }
    }
};

const pathVariants = {
    initial: { pathLength: 0 },
    whileInView: {
        pathLength: 1,
        transition: { duration: 1.5, delay: 0.8, ease: "easeInOut" }
    }
};

const PhoneMockups = () => {
    const { t } = useLanguage();
    return (
        <section className="py-24 md:py-32 px-6 bg-white dark:bg-black transition-colors duration-500">
            <div className="relative z-10 mb-16 md:mb-20 text-center">
                <motion.h2 {...fadeInUp} className="heading-impact mb-6 text-black dark:text-white">
                    {t.phoneMockups.title}
                </motion.h2>
                <motion.p
                    {...fadeInUp}
                    transition={{ ...fadeInUp.transition, delay: 0.1 }}
                    className="subheading-custom text-zinc-500 dark:text-zinc-400 max-w-2xl mx-auto"
                >
                    {t.phoneMockups.subtitle}
                </motion.p>
            </div>

            <div className="max-w-7xl mx-auto bg-gradient-to-b from-[#FF8A00] to-[#FFB347] dark:from-zinc-900 dark:to-black border border-transparent dark:border-zinc-800 rounded-[3rem] md:rounded-[5rem] p-8 md:p-16 text-center shadow-2xl overflow-hidden relative transition-all duration-500">
                <div className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-20 relative z-10">
                    {/* Phone 1: Dashboard */}
                    <motion.div
                        {...fadeInUp}
                        className="relative"
                    >
                        <motion.div
                            variants={floating}
                            animate="animate"
                            className="w-[300px] md:w-[340px] aspect-[9/19] bg-[#111] rounded-[3.5rem] p-3 shadow-2xl border-[6px] border-[#222] relative"
                        >
                            {/* Side buttons */}
                            <div className="absolute top-24 -left-[8px] w-[2px] h-10 bg-[#333] rounded-l-md"></div>
                            <div className="absolute top-40 -left-[8px] w-[2px] h-16 bg-[#333] rounded-l-md"></div>

                            <div className="w-full h-full bg-black rounded-[2.8rem] overflow-hidden flex flex-col p-5 text-left relative">
                                {/* Notch Area */}
                                <div className="w-full flex justify-center mb-6">
                                    <div className="w-16 h-4 bg-zinc-900 rounded-b-xl border-t-0 border border-zinc-800/50"></div>
                                </div>

                                {/* App Header */}
                                <div className="flex justify-between items-center mb-10 px-1">
                                    <div className="flex flex-col">
                                        <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">HOLA,</span>
                                        <span className="text-xl font-bold text-white tracking-tight">Diego</span>
                                    </div>
                                    <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center border border-zinc-700/50">
                                        <User size={20} className="text-zinc-400" />
                                    </div>
                                </div>

                                {/* Caffeine Gauge */}
                                <div className="relative flex justify-center mb-10">
                                    <div className="relative w-56 h-56">
                                        <svg className="w-full h-full transform -rotate-90 filter drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                                            <circle cx="112" cy="112" r="100" stroke="#1a1a1a" strokeWidth="8" fill="transparent" />
                                            <motion.circle
                                                cx="112" cy="112" r="100"
                                                stroke="white" strokeWidth="10"
                                                fill="transparent"
                                                strokeDasharray="628"
                                                variants={gaugeVariants}
                                                initial="initial"
                                                whileInView="whileInView"
                                                viewport={{ once: false }}
                                                strokeLinecap="round"
                                                className="opacity-90"
                                            />
                                        </svg>
                                        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                                            <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-bold mb-1">CAFEÍNA</span>
                                            <div className="flex items-baseline gap-1">
                                                <span className="text-5xl font-bold text-white tracking-tighter">84</span>
                                                <span className="text-lg font-bold text-zinc-400">mg</span>
                                            </div>
                                            <span className="text-[8px] uppercase tracking-widest text-zinc-600 font-bold mt-2">METABOLISMO ACTIVO</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Mini Activity Chart */}
                                <div className="h-16 w-full mb-8 relative px-2">
                                    <svg viewBox="0 0 200 60" className="w-full h-full">
                                        <motion.path
                                            d="M0,45 Q50,45 100,30 T200,15"
                                            fill="none"
                                            stroke="rgba(255,255,255,0.15)" strokeWidth="3"
                                            variants={pathVariants}
                                            initial="initial"
                                            whileInView="whileInView"
                                            viewport={{ once: false }}
                                        />
                                        <motion.circle
                                            cx="100" cy="30" r="4"
                                            fill="white"
                                            className="shadow-[0_0_10px_white]"
                                            initial={{ opacity: 0 }}
                                            whileInView={{ opacity: 1 }}
                                            transition={{ delay: 2 }}
                                        />
                                    </svg>
                                </div>

                                {/* Strategy Card */}
                                <motion.div
                                    whileHover={{ scale: 1.02 }}
                                    className="bg-[#111] border border-zinc-800/50 rounded-2xl p-4 relative mb-6 cursor-pointer overflow-hidden group"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                                    <div className="flex justify-between items-start mb-2">
                                        <div className="flex items-center gap-2">
                                            <Zap size={14} className="text-white" />
                                            <span className="text-[8px] font-bold text-zinc-500 uppercase tracking-widest">RECOMENDACIÓN ESTRATÉGICA</span>
                                        </div>
                                        <Coffee size={14} className="text-zinc-600" />
                                    </div>
                                    <h4 className="text-base font-bold text-white mb-1">Ventana Abierta</h4>
                                    <p className="text-[10px] text-zinc-500 leading-relaxed font-medium">Momento ideal para un Espresso</p>

                                    <div className="flex gap-1.5 mt-3">
                                        <div className="w-2 h-2 rounded-full bg-white"></div>
                                        <div className="w-2 h-2 rounded-full bg-zinc-800"></div>
                                        <div className="w-2 h-2 rounded-full bg-zinc-800"></div>
                                        <div className="ml-auto">
                                            <span className="text-[7px] text-zinc-600 font-bold uppercase tracking-widest">OPTIMIZACIÓN DE ENERGÍA</span>
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Bottom Nav */}
                                <div className="mt-auto px-1 pt-4 border-t border-zinc-900 flex justify-between items-center text-zinc-600">
                                    <Home size={18} className="text-white" />
                                    <TrendingUp size={18} />
                                    <History size={18} />
                                    <User size={18} />
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Phone 2: Stats */}
                    <motion.div
                        {...fadeInUp}
                        transition={{ ...fadeInUp.transition, delay: 0.2 }}
                        className="relative"
                    >
                        <motion.div
                            variants={floating}
                            animate="animate"
                            transition={{ ...floating.animate.transition, delay: 0.5 }}
                            className="w-[300px] md:w-[340px] aspect-[9/19] bg-[#111] rounded-[3.5rem] p-3 shadow-2xl border-[6px] border-[#222] relative"
                        >
                            {/* Side buttons */}
                            <div className="absolute top-28 -right-[8px] w-[2px] h-14 bg-[#333] rounded-r-md"></div>

                            <div className="w-full h-full bg-black rounded-[2.8rem] overflow-hidden flex flex-col p-5 text-left relative">
                                {/* Notch Area */}
                                <div className="w-full flex justify-center mb-6">
                                    <div className="w-16 h-4 bg-zinc-900 rounded-b-xl border-t-0 border border-zinc-800/50"></div>
                                </div>

                                <h2 className="font-extrabold text-sm text-white mb-6 uppercase tracking-widest px-1">Your Coffee Mix</h2>

                                {/* Bar Chart */}
                                <div className="w-full h-44 rounded-2xl flex items-end justify-between p-6 px-8 gap-4 mb-6 bg-zinc-900/50 border border-zinc-800/50">
                                    <motion.div
                                        initial={{ height: 0 }}
                                        whileInView={{ height: "80%" }}
                                        transition={{ duration: 1, delay: 1 }}
                                        className="flex flex-col items-center justify-end h-full gap-2 w-1/4"
                                    >
                                        <div className="w-full bg-[#4A3222] rounded-t-lg h-full shadow-[0_0_10px_rgba(74,50,34,0.3)]"></div>
                                        <span className="text-[7px] font-bold text-zinc-500 uppercase">Esp</span>
                                    </motion.div>
                                    <motion.div
                                        initial={{ height: 0 }}
                                        whileInView={{ height: "30%" }}
                                        transition={{ duration: 1, delay: 1.1 }}
                                        className="flex flex-col items-center justify-end h-full gap-2 w-1/4"
                                    >
                                        <div className="w-full bg-[#8D6E63] rounded-t-lg h-full shadow-[0_0_10px_rgba(141,110,99,0.3)]"></div>
                                        <span className="text-[7px] font-bold text-zinc-500 uppercase">Amr</span>
                                    </motion.div>
                                    <motion.div
                                        initial={{ height: 0 }}
                                        whileInView={{ height: "90%" }}
                                        transition={{ duration: 1, delay: 1.2 }}
                                        className="flex flex-col items-center justify-end h-full gap-2 w-1/4"
                                    >
                                        <div className="w-full bg-[#D7CCC8] rounded-t-lg h-full shadow-[0_0_10px_rgba(215,204,200,0.3)]"></div>
                                        <span className="text-[7px] font-bold text-zinc-500 uppercase">Lat</span>
                                    </motion.div>
                                    <motion.div
                                        initial={{ height: 0 }}
                                        whileInView={{ height: "70%" }}
                                        transition={{ duration: 1, delay: 1.3 }}
                                        className="flex flex-col items-center justify-end h-full gap-2 w-1/4"
                                    >
                                        <div className="w-full bg-white rounded-t-lg h-full shadow-[0_0_10px_rgba(255,255,255,0.3)]"></div>
                                        <span className="text-[7px] font-bold text-zinc-500 uppercase">Cap</span>
                                    </motion.div>
                                </div>

                                <div className="space-y-3 flex-1 overflow-y-auto hide-scrollbar">
                                    <motion.div
                                        whileHover={{ x: 5 }}
                                        className="bg-zinc-900/80 border border-zinc-800/50 rounded-2xl p-4 text-white hover:bg-zinc-800 transition-colors cursor-pointer"
                                    >
                                        <div className="flex items-center gap-2 mb-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div>
                                            <h4 className="text-[9px] font-black uppercase tracking-widest text-zinc-400">Healthier Habits</h4>
                                        </div>
                                        <p className="text-[10px] leading-relaxed text-zinc-300 font-medium">Daily intake dropped by -1.2 on average while maintaining ratio above 82%.</p>
                                    </motion.div>

                                    <motion.div
                                        whileHover={{ x: 5 }}
                                        className="bg-zinc-900/80 border border-zinc-800/50 rounded-2xl p-4 text-white hover:bg-zinc-800 transition-colors cursor-pointer"
                                    >
                                        <div className="flex items-center gap-2 mb-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-yellow-500"></div>
                                            <h4 className="text-[9px] font-black uppercase tracking-widest text-zinc-400">Coffee Smartness</h4>
                                        </div>
                                        <p className="text-[10px] leading-relaxed text-zinc-300 font-medium">Dropped intake from 3.8 to 2.6 coffees/day whilst maintaining energy.</p>
                                    </motion.div>

                                    <motion.div
                                        whileHover={{ x: 5 }}
                                        className="bg-zinc-900/80 border border-zinc-800/50 rounded-2xl p-4 text-white hover:bg-zinc-800 transition-colors cursor-pointer"
                                    >
                                        <div className="flex items-center gap-2 mb-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                                            <h4 className="text-[9px] font-black uppercase tracking-widest text-zinc-400">Focus Streak</h4>
                                        </div>
                                        <p className="text-[10px] leading-relaxed text-zinc-300 font-medium">4 days this week with {">"}70% sustained focus.</p>
                                    </motion.div>
                                </div>

                                {/* Bottom Nav Placeholder */}
                                <div className="mt-4 px-1 pt-4 border-t border-zinc-900 flex justify-between items-center text-zinc-600">
                                    <Home size={18} />
                                    <TrendingUp size={18} className="text-white" />
                                    <History size={18} />
                                    <User size={18} />
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default PhoneMockups;

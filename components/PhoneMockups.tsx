import React from 'react';
import { motion } from 'framer-motion';

const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
};

const PhoneMockups = () => {
    return (
        <section className="py-24 md:py-32 px-6 bg-white dark:bg-zinc-950">
            <div className="relative z-10 mb-16 md:mb-20 text-center">
                <motion.h2 {...fadeInUp} className="heading-impact mb-6">
                    Everything from your phone
                </motion.h2>
                <motion.p
                    {...fadeInUp}
                    transition={{ ...fadeInUp.transition, delay: 0.1 }}
                    className="subheading-custom text-zinc-500 dark:text-zinc-400 max-w-2xl mx-auto"
                >
                    Program your coffees, adjust preferences, trigger a brew from anywhere, and get real-time updates.
                </motion.p>
            </div>

            <div className="max-w-7xl mx-auto bg-gradient-to-b from-[#FF8A00] to-[#FFB347] rounded-[3rem] md:rounded-[5rem] p-8 md:p-16 text-center shadow-2xl overflow-hidden relative">
                <div className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-20 relative z-10">
                    {/* Phone 1: Dashboard */}
                    <motion.div
                        {...fadeInUp}
                        className="w-[300px] md:w-[340px] aspect-[9/19] bg-[#222] rounded-[3.5rem] p-3 shadow-2xl border-[6px] border-[#333] relative"
                    >
                        {/* Side buttons */}
                        <div className="absolute top-24 -left-[8px] w-[2px] h-10 bg-[#444] rounded-l-md"></div>
                        <div className="absolute top-40 -left-[8px] w-[2px] h-16 bg-[#444] rounded-l-md"></div>

                        <div className="w-full h-full bg-white rounded-[2.8rem] overflow-hidden flex flex-col p-5 text-left relative">
                            {/* Notch Area */}
                            <div className="w-full flex justify-center mb-4">
                                <div className="w-16 h-4 bg-black rounded-b-xl"></div>
                            </div>

                            {/* Date Selector */}
                            <div className="flex justify-center mb-4">
                                <div className="bg-zinc-200/80 rounded-full px-4 py-1 flex items-center gap-2">
                                    <span className="text-zinc-400 text-[10px] font-bold">{'<'}</span>
                                    <span className="text-[10px] font-bold text-zinc-600">TODAY</span>
                                    <span className="text-zinc-400 text-[10px] font-bold">{'>'}</span>
                                </div>
                            </div>

                            <div className="text-center mb-6">
                                <div className="font-black text-sm tracking-tighter text-black uppercase">DENAIL</div>
                            </div>

                            {/* Rings */}
                            <div className="flex justify-between items-start mb-6 px-1">
                                {/* Focus */}
                                <div className="flex flex-col items-center gap-2">
                                    <div className="relative w-16 h-16">
                                        <svg className="w-full h-full transform -rotate-90">
                                            <circle cx="32" cy="32" r="28" stroke="#E5E7EB" strokeWidth="4" fill="transparent" />
                                            <circle cx="32" cy="32" r="28" stroke="#52525B" strokeWidth="4" fill="transparent" strokeDasharray="175.9" strokeDashoffset="44" strokeLinecap="round" />
                                        </svg>
                                        <div className="absolute inset-0 flex items-center justify-center font-black text-lg text-zinc-800">74%</div>
                                    </div>
                                    <span className="text-[9px] font-bold text-black uppercase">FOCUS</span>
                                </div>
                                {/* Energy */}
                                <div className="flex flex-col items-center gap-2">
                                    <div className="relative w-16 h-16">
                                        <svg className="w-full h-full transform -rotate-90">
                                            <circle cx="32" cy="32" r="28" stroke="#E5E7EB" strokeWidth="4" fill="transparent" />
                                            <circle cx="32" cy="32" r="28" stroke="#0F4C5C" strokeWidth="4" fill="transparent" strokeDasharray="175.9" strokeDashoffset="5" strokeLinecap="round" />
                                        </svg>
                                        <div className="absolute inset-0 flex items-center justify-center font-black text-lg text-zinc-800">97%</div>
                                    </div>
                                    <span className="text-[9px] font-bold text-black uppercase">ENERGY</span>
                                </div>
                                {/* Intake */}
                                <div className="flex flex-col items-center gap-2">
                                    <div className="relative w-16 h-16">
                                        <svg className="w-full h-full transform -rotate-90">
                                            <circle cx="32" cy="32" r="28" stroke="#E5E7EB" strokeWidth="4" fill="transparent" />
                                            <circle cx="32" cy="32" r="28" stroke="#000000" strokeWidth="4" fill="transparent" strokeDasharray="175.9" strokeDashoffset="130" strokeLinecap="round" />
                                        </svg>
                                        <div className="absolute inset-0 flex items-center justify-center font-black text-lg text-zinc-800">3</div>
                                    </div>
                                    <span className="text-[9px] font-bold text-black uppercase">INTAKE</span>
                                </div>
                            </div>

                            <div className="mb-4">
                                <h3 className="font-extrabold text-black text-sm mb-2">My Day</h3>
                                <div className="w-full py-3 bg-[#F59E0B] rounded-xl flex items-center justify-between px-4 text-white hover:bg-[#D97706] transition-colors cursor-pointer shadow-md">
                                    <div className="flex items-center gap-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                                        </svg>
                                        <span className="text-[11px] font-bold">Your Daily Coffees</span>
                                    </div>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </div>
                            </div>

                            <div className="flex-1 rounded-2xl p-4 flex flex-col relative overflow-hidden text-white" style={{ background: 'linear-gradient(135deg, #FFB75E 0%, #ED8F03 100%)' }}>
                                <div className="flex items-center gap-2 mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                    <span className="text-[10px] font-bold uppercase tracking-wide">COFFEE-TO-OUTCOME RATIO</span>
                                </div>
                                <div className="flex-1 w-full relative">
                                    {/* Simplified Line Chart representation */}
                                    <svg viewBox="0 0 200 100" className="w-full h-full overflow-visible">
                                        {/* Grid lines */}
                                        <line x1="0" y1="25" x2="200" y2="25" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5" />
                                        <line x1="0" y1="50" x2="200" y2="50" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5" />
                                        <line x1="0" y1="75" x2="200" y2="75" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5" />

                                        {/* Chart Line */}
                                        <polyline points="20,80 50,60 80,40 120,60 160,30 190,50" fill="none" stroke="white" strokeWidth="2" />

                                        {/* Points */}
                                        <circle cx="20" cy="80" r="3" fill="#0EA5E9" stroke="white" strokeWidth="1" />
                                        <text x="20" y="95" fontSize="8" fill="white" textAnchor="middle">47%</text>

                                        <circle cx="50" cy="60" r="3" fill="#0EA5E9" stroke="white" strokeWidth="1" />

                                        <circle cx="80" cy="40" r="3" fill="#0EA5E9" stroke="white" strokeWidth="1" />
                                        <text x="80" y="30" fontSize="8" fill="white" textAnchor="middle">74%</text>

                                        <circle cx="160" cy="30" r="3" fill="#0EA5E9" stroke="white" strokeWidth="1" />
                                        <text x="160" y="20" fontSize="8" fill="white" textAnchor="middle">97%</text>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Phone 2: Stats */}
                    <motion.div
                        {...fadeInUp}
                        transition={{ ...fadeInUp.transition, delay: 0.2 }}
                        className="w-[300px] md:w-[340px] aspect-[9/19] bg-[#222] rounded-[3.5rem] p-3 shadow-2xl border-[6px] border-[#333] relative"
                    >
                        {/* Side buttons */}
                        <div className="absolute top-28 -right-[8px] w-[2px] h-14 bg-[#444] rounded-r-md"></div>

                        <div className="w-full h-full bg-white rounded-[2.8rem] overflow-hidden flex flex-col p-5 text-left relative">
                            {/* Notch Area */}
                            <div className="w-full flex justify-center mb-6">
                                <div className="w-16 h-4 bg-black rounded-b-xl"></div>
                            </div>

                            <h2 className="font-extrabold text-sm text-black mb-4">Your Coffee Mix</h2>

                            {/* Bar Chart */}
                            <div className="w-full h-44 rounded-2xl flex items-end justify-between p-4 px-6 gap-3 mb-4" style={{ background: 'linear-gradient(180deg, #F97316 0%, #FACC15 100%)' }}>
                                <div className="flex flex-col items-center justify-end h-full gap-1 w-1/4">
                                    <div className="w-full bg-[#4A3222] rounded-t-md h-[80%]"></div>
                                    <span className="text-[7px] font-medium text-white">Espresso</span>
                                </div>
                                <div className="flex flex-col items-center justify-end h-full gap-1 w-1/4">
                                    <div className="w-full bg-[#8D6E63] rounded-t-md h-[30%]"></div>
                                    <span className="text-[7px] font-medium text-white">Americano</span>
                                </div>
                                <div className="flex flex-col items-center justify-end h-full gap-1 w-1/4">
                                    <div className="w-full bg-[#D7CCC8] rounded-t-md h-[90%]"></div>
                                    <span className="text-[7px] font-medium text-white">Latte</span>
                                </div>
                                <div className="flex flex-col items-center justify-end h-full gap-1 w-1/4">
                                    <div className="w-full bg-white rounded-t-md h-[70%]"></div>
                                    <span className="text-[7px] font-medium text-white">Cappuccino</span>
                                </div>
                            </div>

                            <div className="space-y-2 flex-1 overflow-y-auto hide-scrollbar">
                                <div className="bg-[#FB923C] rounded-lg p-3 text-white shadow-sm">
                                    <h4 className="text-[9px] font-black uppercase mb-1">Healthier Habits</h4>
                                    <p className="text-[8px] leading-tight opacity-90">Daily intake dropped by -1.2 on average (from 3.9 to 2.7) while maintaining ratio above 82%.</p>
                                </div>
                                <div className="bg-[#FB923C] rounded-lg p-3 text-white shadow-sm">
                                    <h4 className="text-[9px] font-black uppercase mb-1">Coffee Smartness</h4>
                                    <p className="text-[8px] leading-tight opacity-90">You dropped your average intake from 3.8 to 2.6 coffees/day this week whilst maintaining {">"}92% energy.</p>
                                </div>
                                <div className="bg-[#FCA5A5] rounded-lg p-3 text-white shadow-sm" style={{ backgroundColor: '#FBA778' }}>
                                    <h4 className="text-[9px] font-black uppercase mb-1">Focus Streak</h4>
                                    <p className="text-[8px] leading-tight opacity-90">4 days this week with {">"}70% sustained focus.</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default PhoneMockups;

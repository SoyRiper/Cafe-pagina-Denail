import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';

const Footer = () => {
  const { t } = useLanguage();

  // Mapping exactly to mockup headers: PRODUCT, RESOURCES, PRODUCT, PRODUCT
  const footerSections = [
    { title: "PRODUCT", links: t.footer.links.product },
    { title: "RESOURCES", links: t.footer.links.resources },
    { title: "PRODUCT", links: t.footer.links.company },
    { title: "PRODUCT", links: t.footer.links.legal },
  ];

  return (
    <footer className="w-full bg-transparent py-10 px-6 mt-auto">
      <div className="max-w-7xl mx-auto bg-[#FFDFC4] dark:bg-zinc-900 rounded-[2.5rem] px-8 md:px-12 py-16 shadow-lg relative overflow-hidden transition-all duration-500 border border-white/20 dark:border-white/5">

        <div className="flex flex-col md:flex-row justify-between items-start gap-12 relative z-10">

          {/* Logo Section */}
          <div className="flex-shrink-0">
            <div className="logo-stout text-3xl text-black dark:text-white mb-8">DENAIL</div>
          </div>

          {/* Navigation Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-12 gap-y-12">
            {footerSections.map((section, idx) => (
              <div key={idx} className="min-w-[120px]">
                <h4 className="font-bold text-[11px] uppercase tracking-widest text-[#FF8A00] dark:text-[#FF8A00] mb-8">{section.title}</h4>
                <ul className="space-y-4">
                  {section.links.map((link: string, i: number) => (
                    <li key={i}>
                      <a href="#" className="text-black dark:text-white font-bold text-sm tracking-tight hover:opacity-60 transition-opacity">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="flex-shrink-0">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#FFBA6B] hover:bg-[#FF9F2E] text-white px-6 py-2.5 rounded-xl font-bold text-[11px] tracking-tight uppercase shadow-lg shadow-orange-500/10"
            >
              {t.footer.cta}
            </motion.button>
          </div>
        </div>

        <div className="h-px w-full bg-black/10 dark:bg-white/10 my-12 relative z-10"></div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-8 relative z-10">
          <div className="text-black/50 dark:text-zinc-500 text-[10px] font-bold uppercase tracking-widest">
            {t.footer.copyright}
          </div>

          {/* Social Icons (as seen in mockup bottom centerish) */}
          <div className="flex items-center gap-6">
            <a href="#" className="text-black/50 dark:text-white/50 hover:text-[#FF8A00] transition-colors"><Linkedin size={18} /></a>
            <a href="#" className="text-black/50 dark:text-white/50 hover:text-[#FF8A00] transition-colors"><Instagram size={18} /></a>
            <a href="#" className="text-black/50 dark:text-white/50 hover:text-[#FF8A00] transition-colors"><Youtube size={18} /></a>
            <a href="#" className="text-black/50 dark:text-white/50 hover:text-[#FF8A00] transition-colors"><Twitter size={18} /></a>
          </div>

          <div className="text-black/50 dark:text-zinc-500 text-[10px] font-bold uppercase tracking-widest">
            {t.footer.location}
          </div>
        </div>

        {/* Subtle decorative glow */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white/20 to-transparent pointer-events-none"></div>
      </div>
    </footer>
  );
};

export default Footer;
import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';

const Footer = () => {
  const { t } = useLanguage();

  const footerSections = [
    { title: t.footer.product, links: t.footer.links.product },
    { title: t.footer.resources, links: t.footer.links.resources },
    { title: t.footer.company, links: t.footer.links.company },
    { title: t.footer.legal, links: t.footer.links.legal },
  ];

  return (
    <footer className="w-full bg-white dark:bg-black py-20 px-6 transition-colors duration-500">
      <div className="max-w-[1440px] mx-auto bg-gradient-to-br from-[#FFDFC4] via-[#FFF1E6] to-white dark:from-zinc-900 dark:via-zinc-900 dark:to-black rounded-[2.5rem] md:rounded-[4rem] px-8 md:px-16 pt-20 pb-10 shadow-2xl relative overflow-hidden transition-all duration-500 border border-white/20 dark:border-white/5">
        <div className="relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start mb-20 gap-12">
            <div className="max-w-xs">
              <div className="logo-stout text-4xl text-black dark:text-white mb-6">DENAIL</div>
              <p className="text-black/60 dark:text-white/40 font-medium leading-relaxed text-sm">
                The first AI-powered coffee machine designed to build your focus and manage your energy.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12">
              {footerSections.map((section, idx) => (
                <div key={idx}>
                  <h4 className="font-bold text-[11px] uppercase tracking-widest text-black/40 dark:text-white/30 mb-6 transition-colors">{section.title}</h4>
                  <ul className="space-y-3">
                    {section.links.map((link: string, i: number) => (
                      <li key={i}>
                        <a href="#" className="text-black dark:text-white/80 font-bold text-sm hover:opacity-60 transition-opacity">{link}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="flex flex-col items-end">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#FF8A00] text-white px-6 py-3 rounded-full font-bold text-[10px] uppercase tracking-widest shadow-lg shadow-orange-500/20"
              >
                {t.footer.cta}
              </motion.button>
            </div>
          </div>

          <div className="h-px w-full bg-black/5 dark:bg-white/5 mb-10"></div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-black/40 dark:text-zinc-500 text-[11px] font-bold uppercase tracking-widest">{t.footer.copyright}</div>

            <div className="flex items-center gap-6">
              <a href="#" className="text-black dark:text-white hover:scale-110 transition-transform"><Linkedin size={18} /></a>
              <a href="#" className="text-black dark:text-white hover:scale-110 transition-transform"><Instagram size={18} /></a>
              <a href="#" className="text-black dark:text-white hover:scale-110 transition-transform"><Youtube size={18} /></a>
              <a href="#" className="text-black dark:text-white hover:scale-110 transition-transform"><Twitter size={18} /></a>
            </div>

            <div className="text-black/40 dark:text-zinc-500 text-[11px] font-bold uppercase tracking-widest">{t.footer.location}</div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF8A00] opacity-[0.05] rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      </div>
    </footer>
  );
};

export default Footer;
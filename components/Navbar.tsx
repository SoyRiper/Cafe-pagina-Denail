import React, { useState, useEffect } from 'react';
import { Sun, Moon, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
  setView: (view: string) => void;
  currentView: string;
}

const Navbar: React.FC<NavbarProps> = ({ setView, currentView }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { name: 'Vision', id: 'vision' },
    { name: 'Waitlist', id: 'waitlist' },
    { name: 'Collaborate', id: 'collaborate' },
    { name: 'Contact', id: 'contact' }
  ];

  const handleLinkClick = (id: string) => {
    setView(id);
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
  }, [isMenuOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[100] h-20 flex items-center px-6 md:px-20 transition-all duration-300 ${scrolled
          ? 'bg-white/90 dark:bg-black/90 backdrop-blur-xl border-b border-zinc-200/50 dark:border-zinc-800/50'
          : 'bg-transparent'
          }`}
      >
        {/* Logo Left */}
        <div className="flex-none">
          <div
            className="font-black text-2xl tracking-tighter cursor-pointer text-black dark:text-white"
            onClick={() => handleLinkClick('home')}
          >
            DENAIL
          </div>
        </div>

        {/* Links & Button Right */}
        <div className="flex-1 flex justify-end items-center space-x-10">
          <div className="hidden lg:flex items-center space-x-10">
            {navLinks.map((link) => (
              <span
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`text-[13px] font-bold uppercase tracking-widest cursor-pointer transition-colors ${currentView === link.id
                  ? 'text-black dark:text-white'
                  : 'text-zinc-500 hover:text-black dark:hover:text-white'
                  }`}
              >
                {link.name}
              </span>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <button className="hidden sm:block bg-black dark:bg-white text-white dark:text-black px-6 py-2.5 rounded-full text-[11px] font-black uppercase tracking-widest hover:scale-105 active:scale-95 transition-all">
              Hop on a video
            </button>

            {/* Hamburger Icon */}
            <button
              onClick={() => setIsMenuOpen(true)}
              className="lg:hidden flex flex-col justify-center items-center gap-[4px] w-8 h-8"
            >
              <span className="w-6 h-[2.5px] bg-black dark:bg-white rounded-full"></span>
              <span className="w-6 h-[2.5px] bg-black dark:bg-white rounded-full"></span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <div className="fixed inset-0 z-[200] flex justify-center items-start md:items-center pt-3 md:pt-0 px-3 h-[100dvh]">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/20 backdrop-blur-sm"
              onClick={() => setIsMenuOpen(false)}
            />

            <motion.div
              initial={{ y: -20, opacity: 0, scale: 0.98 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: -20, opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative bg-white dark:bg-zinc-900 w-full max-w-lg md:max-w-xl rounded-[2rem] md:rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col p-6 md:p-10 gap-6 md:gap-6 max-h-[85vh] overflow-y-auto hide-scrollbar"
            >
              <div className="flex justify-between items-center shrink-0">
                <span className="text-xl md:text-2xl font-black tracking-tighter text-black dark:text-white uppercase">DENAIL</span>
                <button onClick={() => setIsMenuOpen(false)} className="text-zinc-800 dark:text-zinc-200 p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800">
                  <X size={24} className="md:w-7 md:h-7" strokeWidth={2.5} />
                </button>
              </div>

              <div className="flex flex-col gap-4 md:gap-5 px-1 mt-2 shrink-0">
                {navLinks.map((link) => {
                  const isActive = currentView === link.id;
                  return (
                    <motion.span
                      key={link.id}
                      onClick={() => handleLinkClick(link.id)}
                      className={`text-4xl md:text-5xl font-black tracking-tight cursor-pointer text-left ${isActive
                        ? 'text-black dark:text-white'
                        : 'text-zinc-300 dark:text-zinc-600 hover:text-black dark:hover:text-white'
                        }`}
                      whileHover={{ x: 10 }}
                    >
                      {link.name}
                    </motion.span>
                  );
                })}
              </div>

              <div className="mt-2 shrink-0 pb-2">
                <button className="w-full bg-black text-white py-5 md:py-5 rounded-2xl md:rounded-2xl text-[13px] md:text-[14px] font-black uppercase tracking-widest shadow-lg active:scale-95 transition-transform hover:bg-zinc-900">
                  Respond a Few Cuestions
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
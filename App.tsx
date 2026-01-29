import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Vision from './components/Vision';
import Waitlist from './components/Waitlist';
import Collaborate from './components/Collaborate';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { motion, AnimatePresence } from 'framer-motion';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState('home');
  const [isLoading, setIsLoading] = useState(true);

  // Simulate initial loading for a premium feel
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const renderView = () => {
    switch (currentView) {
      case 'home': return <Hero />;
      case 'vision': return <Vision />;
      case 'waitlist': return <Waitlist />;
      case 'collaborate': return <Collaborate />;
      case 'contact': return <Contact />;
      default: return <Hero />;
    }
  };

  return (
    <div className="min-h-screen text-[#0A0A0A] dark:text-white transition-colors duration-500 overflow-x-hidden bg-site-bg flex flex-col">
      {/* Premium Loading Screen */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[999] bg-[#F5F5F5] dark:bg-black flex items-center justify-center"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, filter: 'blur(10px)' }}
              animate={{ scale: 1, opacity: 1, filter: 'blur(0px)' }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex flex-col items-center gap-4"
            >
              <div className="text-5xl font-black tracking-tighter text-black dark:text-white">DENAIL</div>
              {/* Simple elegant spinner */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                className="w-6 h-6 border-2 border-zinc-300 border-t-black dark:border-zinc-800 dark:border-t-white rounded-full"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Navbar
        setView={setCurrentView}
        currentView={currentView}
      />

      <main className="flex-grow pt-20 flex flex-col min-h-[80vh]">
        <AnimatePresence mode="wait" onExitComplete={() => window.scrollTo(0, 0)}>
          <motion.div
            key={currentView}
            initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: -20, filter: 'blur(10px)' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex-grow flex flex-col"
          >
            {renderView()}
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
};

export default App;
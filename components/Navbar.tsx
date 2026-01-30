import React, { useState, useEffect } from 'react';
import { Sun, Moon, X, User, LogOut } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { supabase } from '../lib/supabase';
import { useLanguage } from '../context/LanguageContext';

interface NavbarProps {
  setView: (view: string) => void;
  currentView: string;
}

const Navbar: React.FC<NavbarProps> = ({ setView, currentView }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [user, setUser] = useState<any>(null);
  const [profile, setProfile] = useState<any>(null);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [theme, setTheme] = useState(typeof window !== 'undefined' ? localStorage.getItem('theme') || 'light' : 'light');
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  const navLinks = [
    { name: t.navbar.vision, id: 'vision' },
    { name: t.navbar.waitlist, id: 'waitlist' },
    { name: t.navbar.collaborate, id: 'collaborate' },
    { name: t.navbar.contact, id: 'contact' }
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
    // Get initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
      if (session?.user) syncProfile(session.user);
    });

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      const currentUser = session?.user ?? null;
      setUser(currentUser);
      if (currentUser) syncProfile(currentUser);
      else setProfile(null);
    });

    return () => subscription.unsubscribe();
  }, []);

  const syncProfile = async (user: any) => {
    try {
      // Fetch profile
      const { data: existingProfile, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', user.id)
        .single();

      if (error && error.code !== 'PGRST116') { // PGRST116 is "not found"
        console.error('Error fetching profile:', error);
        return;
      }

      if (existingProfile) {
        setProfile(existingProfile);
      } else {
        // Create profile if not exists
        const newProfile = {
          id: user.id,
          email: user.email,
          full_name: user.user_metadata?.full_name || user.email?.split('@')[0],
          avatar_url: user.user_metadata?.avatar_url || null,
        };

        const { data, error: insertError } = await supabase
          .from('profiles')
          .insert([newProfile])
          .select()
          .single();

        if (insertError) {
          console.error('Error creating profile:', insertError);
        } else {
          setProfile(data);
        }
      }
    } catch (err) {
      console.error('Unexpected error in syncProfile:', err);
    }
  };

  const handleGoogleLogin = async () => {
    await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: window.location.origin
      }
    });
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setIsUserMenuOpen(false);
  };

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
            className="logo-stout text-3xl cursor-pointer text-black dark:text-white transition-colors"
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
                className={`text-[13px] font-semibold uppercase tracking-widest cursor-pointer transition-colors ${currentView === link.id
                  ? 'text-black dark:text-white'
                  : 'text-zinc-500 dark:text-zinc-400 hover:text-black dark:hover:text-white'
                  }`}
              >
                {link.name}
              </span>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <button className="hidden sm:block bg-black dark:bg-white text-white dark:text-black px-6 py-2.5 rounded-full text-[11px] font-bold uppercase tracking-widest hover:scale-105 active:scale-95 transition-all">
              {t.navbar.validate}
            </button>

            {/* Language Toggle */}
            <div className="flex items-center bg-zinc-100 dark:bg-zinc-800 rounded-full p-1 h-10">
              <button
                onClick={() => setLanguage('en')}
                className={`px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-tighter transition-all ${language === 'en'
                  ? 'bg-white dark:bg-black text-black dark:text-white shadow-sm'
                  : 'text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200'
                  }`}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage('es')}
                className={`px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-tighter transition-all ${language === 'es'
                  ? 'bg-white dark:bg-black text-black dark:text-white shadow-sm'
                  : 'text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200'
                  }`}
              >
                ES
              </button>
            </div>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 hover:text-black dark:hover:text-white transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
            </button>

            {/* Auth Button/User Profile */}
            {user ? (
              <div className="relative">
                <button
                  onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                  className="w-10 h-10 rounded-full overflow-hidden border-2 border-zinc-100/50 hover:border-black transition-all flex items-center justify-center bg-zinc-50"
                >
                  {profile?.avatar_url ? (
                    <img src={profile.avatar_url} alt="Profile" className="w-full h-full object-cover" />
                  ) : (
                    <User size={20} className="text-zinc-500" />
                  )}
                </button>

                <AnimatePresence>
                  {isUserMenuOpen && (
                    <motion.div
                      layout
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      className="absolute right-0 mt-3 w-64 bg-white/95 dark:bg-zinc-900/95 backdrop-blur-xl rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-zinc-100 dark:border-zinc-800 p-2 z-[110] overflow-hidden"
                    >
                      <div className="flex items-center gap-3 p-4">
                        <div className="w-12 h-12 rounded-full overflow-hidden bg-zinc-100 border-2 border-white shadow-sm flex items-center justify-center">
                          {profile?.avatar_url ? (
                            <img src={profile.avatar_url} alt="Profile" className="w-full h-full object-cover" />
                          ) : (
                            <User size={24} className="text-zinc-400" />
                          )}
                        </div>
                        <div className="flex flex-col min-w-0">
                          <span className="text-sm font-bold text-black dark:text-white truncate leading-tight">
                            {profile?.full_name || 'User'}
                          </span>
                          <span className="text-[11px] text-zinc-400 dark:text-zinc-500 truncate mt-0.5">
                            {user.email}
                          </span>
                        </div>
                      </div>

                      <div className="px-2 pb-2">
                        <button
                          onClick={handleLogout}
                          className="w-full flex items-center justify-between px-4 py-3 bg-zinc-50 dark:bg-zinc-800/50 hover:bg-red-50 dark:hover:bg-red-950/30 text-zinc-900 dark:text-zinc-100 hover:text-red-500 rounded-2xl transition-all duration-300 group"
                        >
                          <span className="text-[12px] font-bold uppercase tracking-widest">{t.navbar.logout}</span>
                          <div className="w-8 h-8 rounded-full bg-white dark:bg-zinc-700 flex items-center justify-center shadow-sm group-hover:bg-red-500 dark:group-hover:bg-red-500 group-hover:text-white transition-all duration-300">
                            <LogOut size={16} className="text-black dark:text-white" />
                          </div>
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <button
                onClick={handleGoogleLogin}
                className="flex items-center gap-2 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-black dark:text-white px-4 py-2.5 rounded-full text-[11px] font-bold uppercase tracking-widest hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-all shadow-sm"
              >
                <div className="w-4 h-4 mr-1">
                  <svg viewBox="0 0 24 24" className="w-full h-full">
                    <path
                      fill="#4285F4"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="#34A853"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
                    />
                    <path
                      fill="#EA4335"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    />
                  </svg>
                </div>
                {t.navbar.googleSignIn}
              </button>
            )}

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
                  {t.navbar.validate}
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
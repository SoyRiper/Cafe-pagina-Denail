import React from 'react';
import { Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';

const Footer = () => {
  const footerLinks = [
    {
      title: 'PRODUCT',
      links: ['What is Denail', 'How it works', 'For Teams', 'Roadmap', 'FAQ']
    },
    {
      title: 'RESOURCES',
      links: ['Blog', 'Community', 'Newsletter', 'Waitlist']
    },
    {
      title: 'PRODUCT',
      links: ['About us', 'Team', 'Careers', 'Contact']
    },
    {
      title: 'PRODUCT',
      links: ['Terms & Conditions', 'Privacy Policy', 'Cookie Policy', 'Data & Security']
    }
  ];

  return (
    <footer className="py-12 px-4 md:px-6 bg-[#FDF8F3] dark:bg-zinc-950">
      <div className="max-w-[1440px] mx-auto bg-gradient-to-br from-[#FFDFC4] via-[#FFF5E6] to-[#FFF9F5] rounded-[2.5rem] md:rounded-[4rem] px-8 md:px-16 pt-20 pb-10 shadow-2xl relative overflow-hidden">

        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 md:gap-24 mb-32 relative z-10">
          {/* Brand Side */}
          <div className="flex flex-col items-start gap-6">
            <div className="font-black text-2xl tracking-tighter text-black uppercase">DENAIL</div>
          </div>

          <div className="flex-1 w-full md:w-auto flex justify-end">
            <button className="bg-gradient-to-r from-[#FFBD7E] to-[#FB923C] text-white font-black text-[11px] uppercase tracking-wider px-8 py-4 rounded-xl shadow-lg transition-all transform hover:-translate-y-1">
              Respond a Few Cuestions
            </button>
          </div>
        </div>

        {/* Links Grid & Divider */}
        <div className="relative z-10">
          <div className="border-t border-black/10 w-full mb-12"></div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12 mb-24">
            {footerLinks.map((section, idx) => (
              <div key={idx}>
                <h4 className="font-bold text-[11px] uppercase tracking-widest text-black/60 mb-6">{section.title}</h4>
                <ul className="space-y-3">
                  {section.links.map((link, i) => (
                    <li key={i}>
                      <a href="#" className="font-bold text-sm text-black hover:opacity-60 transition-opacity">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="relative z-10 border-t border-black/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="font-bold text-xs text-black/60 flex items-center gap-2">
            <span>&copy; 2026 Denail, S.L.</span>
            <span className="mx-1">|</span>
            <div className="flex items-center gap-3">
              <a href="#" className="bg-black text-white rounded-full p-1"><Linkedin size={12} fill="white" /></a>
              <a href="#" className="bg-black text-white rounded-full p-1"><svg width="12" height="12" viewBox="0 0 24 24" fill="white"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg></a>
              <a href="#" className="bg-black text-white rounded-full p-1"><Youtube size={12} fill="white" /></a>
              <a href="#" className="bg-black text-white rounded-full p-1"><Instagram size={12} /></a>
            </div>
          </div>

          <div className="font-bold text-xs text-black/60">
            We're Based In Barcelona
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
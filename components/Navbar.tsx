
import React, { useState, useEffect } from 'react';
import { Shield, Menu, X, ChevronRight } from 'lucide-react';
import { NAV_LINKS } from '../constants';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNav = (href: string) => {
    onNavigate(href.replace('#', ''));
    setIsOpen(false);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled
      ? 'bg-white/95 backdrop-blur-xl border-b border-slate-100 py-2 shadow-medical'
      : 'bg-transparent py-4'
      }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => onNavigate('home')}
          >
            <div className="bg-white p-1 rounded-2xl shadow-lg transition-transform group-hover:scale-105">
              <img src="/images/logo.png" alt="AmanVision Logo" className="w-8 h-8 object-contain" />
            </div>
            <span className="text-2xl font-extrabold tracking-tighter text-[#601344]">
              Aman<span className="text-[#0077C8]">Vision</span>
            </span>
          </div>

          <div className="hidden lg:flex items-center space-x-1">
            {NAV_LINKS.map((link) => {
              const pageKey = link.href.replace('#', '');
              const isActive = currentPage === pageKey;
              return (
                <button
                  key={link.label}
                  onClick={() => handleNav(link.href)}
                  className={`px-5 py-2.5 text-[11px] font-extrabold uppercase tracking-widest transition-all rounded-xl ${isActive
                    ? 'text-[#601344] bg-rose-50'
                    : 'text-[#601344]/60 hover:text-[#601344] hover:bg-slate-100'
                    }`}
                >
                  {link.label}
                </button>
              );
            })}
            <div className="w-6"></div>
            <button
              onClick={() => onNavigate('demo')}
              className="bg-[#0077C8] hover:bg-[#601344] text-white px-6 py-2.5 rounded-full font-extrabold transition-all shadow-lg active:scale-95 flex items-center gap-2 text-sm"
            >
              Demo Live
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-[#601344] bg-white rounded-xl shadow-sm border border-slate-100"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white border-b border-slate-100 p-6 space-y-3 animate-in slide-in-from-top-4 duration-300">
          {NAV_LINKS.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNav(link.href)}
              className={`block w-full text-left px-6 py-4 rounded-2xl font-extrabold uppercase tracking-widest text-xs ${currentPage === link.href.replace('#', '')
                ? 'bg-rose-50 text-[#601344]'
                : 'text-slate-500 hover:bg-slate-50'
                }`}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleNav('#demo')}
            className="block w-full text-center bg-[#0077C8] text-white py-5 rounded-2xl font-extrabold uppercase tracking-widest text-xs shadow-lg"
          >
            Lancer la Démo
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

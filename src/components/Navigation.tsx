import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Logo } from './Logo';

interface NavigationProps {
  onOpenContact: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({ onOpenContact }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'HOME', href: '#home' },
    { label: 'ABOUT', href: '#about' },
    { label: 'SERVICES', href: '#services' },
    { label: 'WORK', href: '#work' },
    { label: 'PRICING', href: '#pricing' },
    { label: 'PROCESS', href: '#process' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Intersection detection for active link
      const sections = ['home', 'about', 'services', 'work', 'process', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    if (targetId === 'contact') {
      const el = document.getElementById('contact');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
      return;
    }
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#09090b]/90 backdrop-blur-md border-b border-white/10 py-3 shadow-2xl shadow-black/80'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Left Logo */}
          {/* Enhanced Brand Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="cursor-pointer"
          >
            <Logo size="md" />
          </a>

          {/* Desktop Center Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2 bg-[#101416]/90 backdrop-blur-md px-5 py-2 rounded-full border border-white/10 shadow-lg">
            {navLinks.map((link) => {
              const linkId = link.href.replace('#', '');
              const isActive = activeSection === linkId;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`relative px-3.5 py-1.5 text-xs font-semibold tracking-wider transition-all rounded-full ${
                    isActive
                      ? 'text-white font-bold'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {isActive && (
                    <span className="absolute inset-0 bg-[#034A46]/60 border border-[#0eb0a4]/50 rounded-full -z-10 animate-fade-in" />
                  )}
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Right Button */}
          <div className="hidden md:block">
            <a
              href="https://calendly.com/solomonelijah05/new-meeting"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center px-5 py-2.5 text-xs font-bold tracking-wider uppercase text-white rounded-full border border-[#034A46] bg-[#034A46]/30 hover:bg-[#034A46] hover:border-[#0eb0a4] hover:shadow-[0_0_20px_rgba(3,74,70,0.6)] transition-all duration-300 cursor-pointer"
            >
              <span>BOOK A CALL</span>
              <ArrowUpRight className="w-4 h-4 ml-1 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white focus:outline-none bg-[#101416] border border-white/10 rounded-lg"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-[#0eb0a4]" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer with Glassmorphism & Staggered Link Animations */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0, y: -10 }}
            animate={{ opacity: 1, height: 'auto', y: 0 }}
            exit={{ opacity: 0, height: 0, y: -10 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden bg-[#070b0d]/80 backdrop-blur-2xl border-b border-white/10 px-6 pt-6 pb-8 space-y-4 shadow-[0_25px_60px_rgba(0,0,0,0.8)] overflow-hidden relative"
          >
            {/* Ambient Teal Radial Glow Overlay for Glassmorphism */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#034A46]/20 rounded-full blur-3xl pointer-events-none" />

            {/* Staggered Container for Nav Links */}
            <motion.div
              initial="hidden"
              animate="show"
              exit="exit"
              variants={{
                hidden: { opacity: 0 },
                show: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.05,
                    delayChildren: 0.05,
                  },
                },
                exit: {
                  opacity: 0,
                  transition: {
                    staggerChildren: 0.02,
                    staggerDirection: -1,
                  },
                },
              }}
              className="flex flex-col space-y-2.5 relative z-10"
            >
              {navLinks.map((link, idx) => {
                const linkId = link.href.replace('#', '');
                const isActive = activeSection === linkId;
                return (
                  <motion.div
                    key={link.label}
                    variants={{
                      hidden: { opacity: 0, x: -20, y: 5 },
                      show: {
                        opacity: 1,
                        x: 0,
                        y: 0,
                        transition: { ease: [0.16, 1, 0.3, 1], duration: 0.35 },
                      },
                      exit: { opacity: 0, x: -10, transition: { duration: 0.15 } },
                    }}
                  >
                    <a
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-bold tracking-wider transition-all duration-200 border ${
                        isActive
                          ? 'bg-[#034A46]/50 text-white border-[#0eb0a4] shadow-md shadow-[#0eb0a4]/10'
                          : 'bg-white/[0.03] text-slate-300 hover:bg-white/[0.08] hover:text-white border-white/5'
                      }`}
                    >
                      <span className="font-montserrat font-bold">{link.label}</span>
                      <span className="font-mono text-xs text-[#0eb0a4]/80">0{idx + 1}</span>
                    </a>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* CTA Button Staggered Entrance */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.3 }}
              className="pt-4 border-t border-white/10 relative z-10"
            >
              <a
                href="https://calendly.com/solomonelijah05/new-meeting"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center px-5 py-3.5 text-xs font-extrabold tracking-wider uppercase text-white rounded-xl bg-[#034A46] border border-[#0eb0a4] shadow-lg shadow-[#034A46]/50 hover:bg-[#056a64] transition-all cursor-pointer"
              >
                BOOK A CALL
                <ArrowUpRight className="w-4 h-4 ml-2" />
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

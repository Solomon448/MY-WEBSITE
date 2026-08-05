import React from 'react';
import { Logo } from './Logo';
import { 
  ArrowUp, 
  ExternalLink, 
  MessageSquare, 
  Calendar, 
  Send, 
  Github, 
  Instagram, 
  Twitter, 
  Award, 
  Sparkles, 
  Globe, 
  PhoneCall,
  Layout,
  Code2,
  CheckCircle2
} from 'lucide-react';

interface SocialProfile {
  name: string;
  handleOrLabel: string;
  href: string;
  badge?: string;
  badgeColor?: string;
  iconBg?: string;
  iconColor?: string;
  icon: React.ReactNode;
}

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialProfiles: SocialProfile[] = [
    {
      name: 'WhatsApp',
      handleOrLabel: '+1 (782) 859-2148',
      href: 'https://wa.me/17828592148',
      badge: 'Instant Chat',
      badgeColor: 'bg-[#25D366]/20 text-[#25D366] border-[#25D366]/30',
      iconBg: 'bg-[#25D366]/20',
      iconColor: 'text-[#25D366]',
      icon: <PhoneCall className="w-4 h-4" />,
    },
    {
      name: 'Upwork Profile',
      handleOrLabel: 'Top Rated Freelancer',
      href: 'https://www.upwork.com/freelancers/~014303d553abe99f4d',
      badge: '5.0★ Top Rated',
      badgeColor: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
      iconBg: 'bg-emerald-500/20',
      iconColor: 'text-emerald-400',
      icon: <Award className="w-4 h-4" />,
    },
    {
      name: 'Calendly',
      handleOrLabel: '30-Min Strategy Call',
      href: 'https://calendly.com/solomonelijah05/new-meeting',
      badge: 'Book Call',
      badgeColor: 'bg-[#0eb0a4]/20 text-[#0eb0a4] border-[#0eb0a4]/30',
      iconBg: 'bg-[#0eb0a4]/20',
      iconColor: 'text-[#0eb0a4]',
      icon: <Calendar className="w-4 h-4" />,
    },
    {
      name: 'Behance',
      handleOrLabel: '@solomonelijah05',
      href: 'https://www.behance.net/solomonelijah05',
      badge: 'Design Showcase',
      badgeColor: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
      iconBg: 'bg-blue-500/20',
      iconColor: 'text-blue-400',
      icon: <Layout className="w-4 h-4" />,
    },
    {
      name: 'Instagram',
      handleOrLabel: '@elij.dev',
      href: 'https://www.instagram.com/elij.dev?igsh=dWZnNDdyOHJuNnR1',
      badge: 'Portfolio Feed',
      badgeColor: 'bg-pink-500/20 text-pink-400 border-pink-500/30',
      iconBg: 'bg-pink-500/20',
      iconColor: 'text-pink-400',
      icon: <Instagram className="w-4 h-4" />,
    },
    {
      name: 'Twitter / X',
      handleOrLabel: '@elij_dev',
      href: 'http://twitter.com/elij_dev',
      badge: 'Tech Updates',
      badgeColor: 'bg-sky-500/20 text-sky-400 border-sky-500/30',
      iconBg: 'bg-sky-500/20',
      iconColor: 'text-sky-400',
      icon: <Twitter className="w-4 h-4" />,
    },
    {
      name: 'Telegram',
      handleOrLabel: '@Elij_dev',
      href: 'http://t.me/Elij_dev',
      badge: 'Direct Message',
      badgeColor: 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30',
      iconBg: 'bg-cyan-500/20',
      iconColor: 'text-cyan-400',
      icon: <Send className="w-4 h-4" />,
    },
    {
      name: 'GitHub',
      handleOrLabel: '@Solomon448',
      href: 'http://github.com/Solomon448',
      badge: 'Code Repos',
      badgeColor: 'bg-purple-500/20 text-purple-400 border-purple-500/30',
      iconBg: 'bg-purple-500/20',
      iconColor: 'text-purple-400',
      icon: <Github className="w-4 h-4" />,
    },
  ];

  return (
    <footer className="bg-[#050709] border-t border-white/10 text-white pt-16 pb-12 relative overflow-hidden">
      {/* Background Glow Overlay */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#034A46]/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* TOP CALL TO ACTION BOX */}
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-[#0a1214] via-[#080d0f] to-[#0d1719] border border-[#0eb0a4]/30 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-2 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#034A46]/40 border border-[#0eb0a4]/40 text-xs font-mono font-extrabold text-[#0eb0a4] uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              LET’S BUILD SOMETHING EXTRAORDINARY
            </div>
            <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white">
              Ready to elevate your online business revenue?
            </h3>
            <p className="font-montserrat text-sm text-slate-300 max-w-xl">
              Book a direct strategy call or message Solomon on WhatsApp to discuss your Shopify store or custom web platform.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0 w-full sm:w-auto">
            <a
              href="https://calendly.com/solomonelijah05/new-meeting"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#034A46] hover:bg-[#056a64] text-white border border-[#0eb0a4] font-mono text-xs font-extrabold uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg transition-all cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>BOOK A CALENDLY CALL</span>
            </a>
            <a
              href="https://wa.me/17828592148"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#25D366]/20 hover:bg-[#25D366]/30 text-[#25D366] border border-[#25D366]/40 font-mono text-xs font-extrabold uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WHATSAPP CHAT</span>
            </a>
          </div>
        </div>

        {/* OFFICIAL PROFILES & SOCIAL CHANNELS BAR (Inspired by user attached image) */}
        <div className="space-y-4 pt-4 border-t border-white/10">
          <div className="space-y-1">
            <p className="font-mono text-xs font-extrabold uppercase tracking-widest text-[#0eb0a4] flex items-center gap-2">
              <span>OFFICIAL PROFILES & SOCIAL CHANNELS</span>
            </p>
            <p className="font-montserrat text-xs text-slate-400">
              Connect directly with Solomon Elijah (ELIJDEV) across verified platforms:
            </p>
          </div>

          {/* Wrapped Flex Grid of Rich Pill Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            {socialProfiles.map((profile) => (
              <a
                key={profile.name}
                href={profile.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-[#0d1315] hover:bg-[#121b1e] border border-white/10 hover:border-[#0eb0a4]/60 transition-all duration-300 shadow-md hover:shadow-lg"
              >
                {/* Icon Circle */}
                <div className={`w-6 h-6 rounded-full ${profile.iconBg} ${profile.iconColor} flex items-center justify-center shrink-0`}>
                  {profile.icon}
                </div>

                {/* Name & Handle */}
                <div className="flex items-center gap-1.5 font-montserrat text-xs font-bold text-white group-hover:text-[#0eb0a4] transition-colors">
                  <span>{profile.name}</span>
                  <span className="text-[11px] text-slate-400 font-normal hidden sm:inline">
                    ({profile.handleOrLabel})
                  </span>
                </div>

                {/* Optional Status Badge */}
                {profile.badge && (
                  <span className={`px-2 py-0.5 rounded-full text-[10px] font-mono font-extrabold uppercase border ${profile.badgeColor}`}>
                    {profile.badge}
                  </span>
                )}

                {/* External Link Icon */}
                <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-white transition-colors ml-0.5" />
              </a>
            ))}
          </div>
        </div>

        {/* FOOTER MAIN BRAND & DIRECT CONTACT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8 border-t border-white/10 items-stretch">
          
          {/* Left Column: Brand Identity & Specializations */}
          <div className="lg:col-span-7 space-y-5 flex flex-col justify-between">
            <div className="space-y-3">
              <a href="#home" className="inline-block cursor-pointer">
                <Logo size="lg" />
              </a>

              <p className="font-montserrat text-xs text-slate-300 max-w-lg leading-relaxed">
                Crafting stylish, high-converting Shopify stores, WordPress platforms, and WhatsApp AI ecosystems built specifically to increase revenue, build instant customer trust, and deliver frictionless digital experiences.
              </p>
            </div>

            {/* Specialization Badges */}
            <div className="space-y-2">
              <p className="text-[10px] font-mono font-bold uppercase tracking-widest text-slate-500">
                CORE EXPERTISE
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-lg bg-white/[0.04] border border-white/10 text-[11px] font-mono font-semibold text-slate-300">
                  Shopify & Ecommerce UX
                </span>
                <span className="px-3 py-1 rounded-lg bg-white/[0.04] border border-white/10 text-[11px] font-mono font-semibold text-slate-300">
                  Custom WordPress Development
                </span>
                <span className="px-3 py-1 rounded-lg bg-white/[0.04] border border-white/10 text-[11px] font-mono font-semibold text-slate-300">
                  Conversion Rate Optimization
                </span>
                <span className="px-3 py-1 rounded-lg bg-white/[0.04] border border-white/10 text-[11px] font-mono font-semibold text-slate-300">
                  WhatsApp AI Automation
                </span>
              </div>
            </div>

            <div className="pt-1 text-xs font-mono text-[#0eb0a4] font-bold flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#0eb0a4] animate-ping" />
              <span>AVAILABLE FOR WORLDWIDE FREELANCE & CONTRACT PROJECTS</span>
            </div>
          </div>

          {/* Right Column: Direct Contact & Business Card */}
          <div className="lg:col-span-5 p-6 sm:p-7 rounded-2xl bg-[#080d0f] border border-white/10 hover:border-[#0eb0a4]/40 transition-all shadow-xl space-y-4">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <p className="text-xs font-bold uppercase tracking-widest text-[#0eb0a4] font-mono flex items-center gap-2">
                <span>DIRECT BUSINESS INQUIRIES</span>
              </p>
              <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[10px] font-mono font-bold">
                Active & Booking
              </span>
            </div>

            <div className="space-y-3 font-mono text-xs text-slate-300">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 p-3 rounded-xl bg-white/[0.02] border border-white/5">
                <span className="text-slate-400 font-bold">PRIMARY EMAIL</span>
                <a href="mailto:solomonelijah332@gmail.com" className="text-[#0eb0a4] hover:underline font-bold text-xs sm:text-right">
                  solomonelijah332@gmail.com
                </a>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 p-3 rounded-xl bg-white/[0.02] border border-white/5">
                <span className="text-slate-400 font-bold">WHATSAPP DIRECT</span>
                <a href="https://wa.me/17828592148" target="_blank" rel="noopener noreferrer" className="text-[#25D366] hover:underline font-bold text-xs sm:text-right">
                  +1 (782) 859-2148
                </a>
              </div>

              <div className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] border border-white/5 text-[11px]">
                <span className="text-slate-400">GLOBAL RESPONSE TIME</span>
                <span className="text-white font-bold">Under 2 Hours</span>
              </div>
            </div>
          </div>

        </div>

        {/* BOTTOM COPYRIGHT BAR & BACK TO TOP */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-mono">
          <p>© 2026 ELIJDEV (Solomon Elijah). All rights reserved.</p>

          <button
            onClick={scrollToTop}
            className="group flex items-center space-x-2 text-slate-300 hover:text-[#0eb0a4] transition-colors cursor-pointer"
          >
            <span className="font-bold tracking-wider">BACK TO TOP</span>
            <div className="p-2 rounded-xl bg-[#0e1214] border border-white/10 group-hover:border-[#0eb0a4] transition-colors">
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </button>
        </div>

      </div>
    </footer>
  );
};


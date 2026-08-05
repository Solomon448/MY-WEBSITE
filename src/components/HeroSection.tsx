import React from 'react';
import { ArrowRight, Sparkles, Globe, CheckCircle2 } from 'lucide-react';
import { HERO_IMAGE } from '../data/portfolioData';

interface HeroSectionProps {
  onStartProject: () => void;
  onViewWork: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onStartProject, onViewWork }) => {
  return (
    <section id="home" className="relative min-h-screen pt-20 pb-16 lg:pt-24 lg:pb-20 flex flex-col justify-between overflow-hidden bg-[#07090b] text-white">
      {/* Background Gradients & Ambient Teal Glows (#034A46) */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#034A46]/35 rounded-full blur-[150px] pointer-events-none -z-0" />
      <div className="absolute top-10 right-10 w-[450px] h-[450px] bg-[#0eb0a4]/15 rounded-full blur-[140px] pointer-events-none -z-0" />

      {/* TOP HEADER SUB-NAVS (Matching Reference Image Top Bar) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-4 relative z-10 flex items-center justify-between text-[11px] sm:text-xs font-mono font-semibold tracking-widest text-slate-400 uppercase border-b border-white/5 pb-4">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#034A46]"></span>
          <span>WEB DESIGNER</span>
          <span className="text-slate-600">/</span>
          <span>DIGITAL CREATOR</span>
        </div>
        <div className="flex items-center gap-2 text-[#0eb0a4]">
          <span>AVAILABLE FOR FREELANCE</span>
          <Sparkles className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: '8s' }} />
        </div>
      </div>

      {/* MAIN HERO COMPOSITION (Reference Image Pixel-Inspired Layout) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 my-auto pt-6 pb-4">
        
        {/* GIANT BACKDROP TYPOGRAPHY: ELIJDEV BRAND NAME */}
        <div className="relative w-full text-center select-none overflow-hidden leading-none z-0 mb-[-60px] sm:mb-[-120px] lg:mb-[-180px]">
          <h1 className="font-bebas text-[110px] sm:text-[200px] md:text-[280px] lg:text-[360px] font-black tracking-tight uppercase leading-none text-transparent bg-clip-text bg-gradient-to-b from-[#034A46]/90 via-[#034A46]/40 to-transparent drop-shadow-[0_10px_30px_rgba(3,74,70,0.3)]">
            ELIJDEV
          </h1>
        </div>

        {/* HERO CONTENT GRID WITH OVERLAPPING CENTRAL PORTRAIT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-end relative z-10">
          
          {/* LEFT OVERLAY COLUMN: NAME & BIO */}
          <div className="lg:col-span-4 space-y-5 text-left order-2 lg:order-1 pt-4 lg:pt-0">
            {/* Script Accent */}
            <div className="space-y-1">
              <span className="font-handwriting text-3xl sm:text-4xl text-[#0eb0a4] -rotate-2 inline-block">
                Hello, I'm
              </span>
              
              {/* Stacked Giant Name in Condensed Display Font */}
              <h2 className="font-bebas text-5xl sm:text-7xl lg:text-7xl font-bold tracking-tight text-white uppercase leading-[0.9]">
                SOLOMON <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-[#0eb0a4]">
                  ELIJAH
                </span>
              </h2>
            </div>

            {/* Subtitle in Brand Color */}
            <div className="inline-block px-3 py-1 rounded bg-[#034A46]/30 border border-[#034A46]/60">
              <p className="text-xs sm:text-sm font-bold tracking-wider text-[#0eb0a4] uppercase font-mono">
                WEB DESIGNER & SHOPIFY SPECIALIST
              </p>
            </div>

            {/* Bio Description - Montserrat 14px */}
            <p className="font-montserrat text-[14px] text-slate-300 leading-relaxed max-w-md">
              I design and build stylish, conversion-focused web experiences that combine creativity with strategy. Passionate about clean design, smooth interactions, and details that make a difference.
            </p>

            {/* Location & Availability Badge */}
            <div className="pt-1 flex items-center gap-2">
              <div className="px-3 py-1.5 rounded-full bg-[#101416] border border-white/10 text-[11px] font-mono text-slate-300 flex items-center gap-2">
                <Globe className="w-3.5 h-3.5 text-[#0eb0a4]" />
                <span className="uppercase tracking-wider">AVAILABLE WORLDWIDE</span>
              </div>
            </div>

            {/* Call To Action Buttons */}
            <div className="pt-3 flex flex-wrap items-center gap-3">
              <button
                onClick={onViewWork}
                data-cursor="view"
                data-cursor-text="WORK"
                className="group inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-[#034A46] text-white font-bold text-xs tracking-widest uppercase shadow-[0_10px_30px_rgba(3,74,70,0.5)] hover:bg-[#056a64] hover:shadow-[0_15px_40px_rgba(3,74,70,0.8)] transition-all duration-300 cursor-pointer"
              >
                <span>VIEW MY WORK</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onStartProject}
                className="group inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-[#12181a] text-white font-bold text-xs tracking-widest uppercase border border-white/15 hover:border-[#0eb0a4]/60 hover:bg-[#182224] transition-all duration-300 cursor-pointer"
              >
                <span>START A PROJECT</span>
              </button>
            </div>
          </div>

          {/* CENTER OVERLAY COLUMN: CUT-OUT / PORTRAIT SHOWCASE (Matching Image Composition) */}
          <div className="lg:col-span-5 relative order-1 lg:order-2 flex justify-center">
            
            {/* Soft Ambient Halo behind Photo */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#034A46]/60 via-[#034A46]/20 to-transparent rounded-full blur-3xl transform scale-90 pointer-events-none"></div>

            {/* Main Portrait Frame with Transparent Background Cutout Blend */}
            <div 
              className="relative w-full max-w-[380px] sm:max-w-[440px] aspect-[3/4] group cursor-pointer flex items-end justify-center"
              data-cursor="view"
              data-cursor-text="STUDIO"
              onClick={onViewWork}
            >
              {/* Studio Backdrop Light Glow for Clean Transparent Cutout */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#0eb0a4]/25 via-[#034A46]/10 to-transparent pointer-events-none rounded-full blur-2xl"></div>

              <img
                src={HERO_IMAGE}
                alt="Solomon Elijah - Web Designer Portrait Showcase"
                className="w-full h-full object-contain object-bottom group-hover:scale-105 transition-transform duration-700 relative z-10 drop-shadow-[0_20px_35px_rgba(0,0,0,0.8)]"
                referrerPolicy="no-referrer"
              />

              {/* Floating Bottom Card Title Overlay */}
              <div className="absolute bottom-2 left-2 right-2 sm:bottom-4 sm:left-4 sm:right-4 p-3.5 rounded-xl bg-[#090e10]/90 backdrop-blur-md border border-white/15 flex items-center justify-between z-20 shadow-2xl">
                <div>
                  <p className="text-[10px] font-mono uppercase text-[#0eb0a4] font-bold tracking-widest">
                    ELIJDEV STUDIO
                  </p>
                  <p className="text-xs font-bold text-white">
                    SOLOMON ELIJAH
                  </p>
                </div>
                <div className="px-2.5 py-1 rounded bg-[#034A46] text-[10px] font-mono text-white font-bold tracking-wider border border-[#0eb0a4]/30">
                  2026 EDITION
                </div>
              </div>
            </div>

          </div>

          {/* RIGHT OVERLAY COLUMN: STAR BADGE & STAT COUNTERS */}
          <div className="lg:col-span-3 space-y-4 text-left lg:text-right order-3 flex flex-col justify-end h-full pt-4 lg:pt-0">
            
            {/* Top Star Quote Badge (Positioned right above stat counters) */}
            <div className="p-4 rounded-2xl bg-[#101618]/90 border border-white/10 backdrop-blur-md max-w-xs ml-auto text-left lg:text-right space-y-2 shadow-xl">
              <div className="w-7 h-7 rounded-full bg-[#034A46] text-[#0eb0a4] flex items-center justify-center lg:ml-auto">
                <Sparkles className="w-4 h-4" />
              </div>
              <p className="text-xs text-slate-300 font-medium leading-relaxed font-montserrat">
                Turning ideas into powerful digital experiences.
              </p>
            </div>

            {/* Stacked Stat Counters */}
            <div className="space-y-4 border-t border-white/10 pt-4 max-w-xs ml-auto w-full">
              
              <div className="flex items-baseline justify-between lg:justify-end lg:gap-4">
                <span className="font-bebas text-4xl sm:text-5xl font-bold text-[#0eb0a4]">5+</span>
                <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-slate-400 text-right">
                  YEARS <br /> EXPERIENCE
                </span>
              </div>

              <div className="h-px bg-white/5 w-full"></div>

              <div className="flex items-baseline justify-between lg:justify-end lg:gap-4">
                <span className="font-bebas text-4xl sm:text-5xl font-bold text-[#0eb0a4]">50+</span>
                <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-slate-400 text-right">
                  PROJECTS <br /> COMPLETED
                </span>
              </div>

              <div className="h-px bg-white/5 w-full"></div>

              <div className="flex items-baseline justify-between lg:justify-end lg:gap-4">
                <span className="font-bebas text-4xl sm:text-5xl font-bold text-[#0eb0a4]">100%</span>
                <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-slate-400 text-right">
                  HAPPY <br /> CLIENTS
                </span>
              </div>

            </div>

          </div>

        </div>

      </div>

      {/* BOTTOM MARQUEE BAR */}
      <div className="w-full bg-[#0c1214] border-y border-white/5 py-3 relative z-10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between text-xs text-slate-400 font-mono gap-4">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#0eb0a4]" />
            <span>SHOPIFY LIQUID STOREFRONTS</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#0eb0a4]" />
            <span>WORDPRESS & ELEMENTOR</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#0eb0a4]" />
            <span>CONVERSION RATE UX</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#0eb0a4]" />
            <span>SEO & HIGH PERFORMANCE</span>
          </div>
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { ArrowRight, Award, CheckCircle, Code, Layers, Sparkles } from 'lucide-react';
import { HERO_IMAGE } from '../data/portfolioData';

interface AboutSectionProps {
  onOpenAboutModal: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenAboutModal }) => {
  const tags = ['SHOPIFY', 'WORDPRESS', 'ELEMENTOR', 'ECOMMERCE', 'UI/UX DESIGN', 'SEO'];

  return (
    <section id="about" className="py-24 bg-[#07090b] relative overflow-hidden text-white border-b border-white/10">
      {/* Background Accent Lines & Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#034A46]/20 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Creative Designer Frame & Abstract Shapes */}
          <div className="lg:col-span-5 relative">
            
            {/* Background Geometric Frame Decor */}
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-[#034A46]/40 via-transparent to-white/10 blur-xl"></div>
            
            {/* Dark Modern Image Frame */}
            <div 
              className="relative rounded-2xl bg-[#0e1214] border border-white/15 p-4 shadow-2xl overflow-hidden group cursor-pointer"
              data-cursor="view"
              data-cursor-text="BIO"
              onClick={onOpenAboutModal}
            >
              
              {/* Outer Border Decor */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#034A46]/30 blur-2xl pointer-events-none"></div>

              <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-gradient-to-b from-[#10181a] via-[#0b1214] to-[#07090b]">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#0eb0a4]/20 via-transparent to-transparent pointer-events-none"></div>
                <img
                  src={HERO_IMAGE}
                  alt="Solomon Elijah - Web Designer"
                  className="w-full h-full object-contain object-bottom pt-2 group-hover:scale-105 transition-all duration-700 relative z-10"
                  referrerPolicy="no-referrer"
                />
                
                {/* Gradient Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#07090b] via-transparent to-transparent opacity-80"></div>

                {/* Floating Experience Badge */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#07090b]/90 backdrop-blur-md border border-white/15 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#034A46] flex items-center justify-center text-white font-extrabold text-sm border border-[#0eb0a4]">
                      SE
                    </div>
                    <div>
                      <p className="text-xs font-bold text-white font-display">SOLOMON ELIJAH</p>
                      <p className="text-[10px] text-slate-400 font-mono">ELIJDEV Studio Lead</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-mono font-extrabold text-[#0eb0a4]">5+ YRS</span>
                    <p className="text-[9px] text-slate-400">EXPERIENCE</p>
                  </div>
                </div>
              </div>

              {/* Small Floating Abstract Elements */}
              <div className="absolute top-8 -right-3 bg-[#101618]/90 border border-white/15 backdrop-blur-md p-3 rounded-xl shadow-2xl animate-float">
                <Award className="w-5 h-5 text-[#0eb0a4]" />
              </div>

              <div className="absolute bottom-20 -left-3 bg-[#101618]/90 border border-white/15 backdrop-blur-md p-3 rounded-xl shadow-2xl animate-float-delayed">
                <Layers className="w-5 h-5 text-[#0eb0a4]" />
              </div>

            </div>
          </div>

          {/* Right Column: Bio & Info */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Small Label */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#101416] border border-white/10 text-xs font-extrabold tracking-widest text-[#0eb0a4] uppercase font-mono">
              <Sparkles className="w-3.5 h-3.5" />
              ABOUT ME
            </div>

            {/* Large Heading 45px */}
            <h2 className="section-heading text-[30px] sm:text-[45px] text-white">
              Designing More Than Websites.
            </h2>

            {/* Description - Montserrat 14px/16px */}
            <p className="font-montserrat text-[14px] sm:text-[16px] text-slate-300 leading-relaxed">
              I’m Solomon Elijah (ELIJDEV), a web designer specializing in Shopify, ecommerce, WordPress, and conversion-focused website experiences. I combine strategy, clean design, user experience, and business goals to create websites that look professional and help businesses grow.
            </p>

            <p className="font-montserrat text-[14px] sm:text-[16px] text-slate-300 leading-relaxed">
              Every pixel I place serves a purpose: eliminating customer friction, establishing trust instantly, and guiding buyers directly toward taking action. Whether you are launching a new online store or overhauling an existing site, I build digital assets that deliver measurable return on investment.
            </p>

            {/* Expertise Tags */}
            <div className="pt-2">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest font-mono mb-3">
                CORE EXPERTISE & PLATFORMS
              </p>
              <div className="flex flex-wrap gap-2.5">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3.5 py-2 rounded-lg bg-[#101416] border border-white/10 text-xs font-bold text-slate-200 tracking-wider hover:border-[#0eb0a4]/50 hover:text-white transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Button */}
            <div className="pt-4">
              <button
                onClick={onOpenAboutModal}
                className="group inline-flex items-center px-6 py-3.5 rounded-xl bg-[#0e1214] text-white font-bold text-xs tracking-wider uppercase border border-white/20 hover:border-[#0eb0a4] hover:bg-[#034A46] transition-all duration-300 cursor-pointer"
              >
                <span>MORE ABOUT ME</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

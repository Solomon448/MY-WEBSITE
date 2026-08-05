import React from 'react';
import { VALUE_BENEFITS } from '../data/portfolioData';
import { ShieldCheck, Compass, TrendingUp, Rocket } from 'lucide-react';

export const ValueSection: React.FC = () => {
  const getIcon = (idx: number) => {
    switch (idx) {
      case 0: return <ShieldCheck className="w-6 h-6 text-[#0eb0a4]" />;
      case 1: return <Compass className="w-6 h-6 text-[#0eb0a4]" />;
      case 2: return <TrendingUp className="w-6 h-6 text-[#0eb0a4]" />;
      case 3: return <Rocket className="w-6 h-6 text-[#0eb0a4]" />;
      default: return null;
    }
  };

  return (
    <section className="py-24 bg-[#080c0e] relative overflow-hidden text-white border-b border-white/10">
      {/* Background Accent Lines */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#034A46]/20 rounded-full blur-[180px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <p className="text-xs font-extrabold tracking-widest text-[#0eb0a4] uppercase font-mono">
            STRATEGIC IMPACT
          </p>
          <h2 className="section-heading text-[30px] sm:text-[45px] font-extrabold tracking-tight text-white leading-tight">
            Your Website Should <br className="hidden sm:inline" />
            Work For Your Business.
          </h2>
          <p className="text-slate-300 text-[14px] sm:text-[16px] font-montserrat leading-relaxed">
            A beautiful website is only the beginning. Every project is designed around clarity, trust, user experience, and conversion.
          </p>
        </div>

        {/* 4 Value Benefit Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {VALUE_BENEFITS.map((item, idx) => (
            <div
              key={item.number}
              className="group rounded-2xl bg-[#0e1214] border border-white/10 p-6 hover:border-[#0eb0a4]/50 transition-all duration-300 hover:-translate-y-1 shadow-xl flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 rounded-xl bg-[#141b1d] border border-white/10 group-hover:border-[#0eb0a4]/40 transition-colors">
                    {getIcon(idx)}
                  </div>
                  <span className="font-mono text-2xl font-black text-slate-600 group-hover:text-[#0eb0a4] transition-colors">
                    {item.number}
                  </span>
                </div>

                <h3 className="font-display text-lg font-bold text-white mb-2 group-hover:text-[#0eb0a4] transition-colors">
                  {item.title}
                </h3>

                <p className="text-slate-400 text-xs sm:text-sm font-body leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 text-[11px] font-mono text-slate-500 group-hover:text-slate-300 transition-colors">
                • HIGH-CONVERTING DESIGN
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

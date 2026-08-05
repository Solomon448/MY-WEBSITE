import React from 'react';
import { TOOLS_MARQUEE } from '../data/portfolioData';

export const ToolsMarquee: React.FC = () => {
  // Duplicate list to create seamless infinite loop
  const marqueeItems = [...TOOLS_MARQUEE, ...TOOLS_MARQUEE, ...TOOLS_MARQUEE];

  return (
    <section className="py-12 bg-[#080c0e] border-b border-white/10 overflow-hidden relative select-none">
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#080c0e] to-transparent z-10 pointer-events-none"></div>
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#080c0e] to-transparent z-10 pointer-events-none"></div>

      <div className="flex animate-marquee space-x-8 items-center">
        {marqueeItems.map((tool, idx) => (
          <div
            key={idx}
            className="flex items-center space-x-3 px-6 py-3 rounded-full bg-[#0e1214] border border-white/10 hover:border-[#0eb0a4]/50 transition-colors shrink-0"
          >
            <span className="w-2 h-2 rounded-full bg-[#0eb0a4]"></span>
            <span className="font-mono text-xs sm:text-sm font-extrabold text-slate-200 tracking-widest uppercase">
              {tool}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

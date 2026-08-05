import React from 'react';
import { PROCESS_STEPS } from '../data/portfolioData';
import { Sparkles, CheckCircle2 } from 'lucide-react';

export const ProcessSection: React.FC = () => {
  return (
    <section id="process" className="py-24 bg-[#07090b] relative overflow-hidden text-white border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#101416] border border-white/10 text-xs font-extrabold tracking-widest text-[#0eb0a4] uppercase font-mono">
            <Sparkles className="w-3.5 h-3.5" />
            HOW I WORK
          </div>
          <h2 className="section-heading text-[30px] sm:text-[45px] text-white">
            A Clear Process. <br /> Better Results.
          </h2>
          <p className="section-desc font-montserrat text-[14px] sm:text-[16px]">
            A transparent, streamlined workflow designed to keep your project on schedule and deliver superior quality without surprises.
          </p>
        </div>

        {/* Process Timeline Container */}
        <div className="relative">
          
          {/* Visual Progress Line for Desktop (horizontal connecting line) */}
          <div className="hidden lg:block absolute top-12 left-[12%] right-[12%] h-0.5 bg-gradient-to-r from-[#034A46] via-[#0eb0a4] to-[#034A46] opacity-40 z-0"></div>

          {/* Steps Grid (Horizontal on Desktop, Vertical Timeline on Mobile) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {PROCESS_STEPS.map((step) => (
              <div
                key={step.stepNumber}
                className="group relative rounded-2xl bg-[#0e1214] border border-white/10 p-6 hover:border-[#0eb0a4]/50 transition-all duration-300 hover:-translate-y-1 shadow-xl flex flex-col justify-between"
              >
                <div>
                  {/* Step Number Badge & Indicator Dot */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="w-12 h-12 rounded-xl bg-[#141b1d] border border-white/10 flex items-center justify-center font-mono font-extrabold text-sm text-[#0eb0a4] group-hover:bg-[#034A46] group-hover:text-white transition-colors duration-300">
                      {step.stepNumber}
                    </span>
                    <span className="text-[10px] font-mono font-bold tracking-widest text-slate-500 uppercase">
                      PHASE {step.stepNumber}
                    </span>
                  </div>

                  {/* Step Title */}
                  <h3 className="font-display text-xl font-bold text-white mb-2 group-hover:text-[#0eb0a4] transition-colors">
                    {step.title}
                  </h3>

                  {/* Step Description */}
                  <p className="text-slate-300 text-xs sm:text-sm font-body leading-relaxed mb-4">
                    “{step.description}”
                  </p>

                  {/* Details Bullet List */}
                  <ul className="space-y-2 pt-2 border-t border-white/5">
                    {step.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-[11px] text-slate-400">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#0eb0a4] shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-3 text-right">
                  <span className="text-[10px] font-mono text-[#0eb0a4] font-bold uppercase">
                    ✓ STEP APPROVED
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

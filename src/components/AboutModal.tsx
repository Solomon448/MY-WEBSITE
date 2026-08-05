import React from 'react';
import { X, Award, CheckCircle2, Heart, Sparkles, Zap } from 'lucide-react';
import { HERO_IMAGE } from '../data/portfolioData';

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
  onStartProject: () => void;
}

export const AboutModal: React.FC<AboutModalProps> = ({ isOpen, onClose, onStartProject }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in overflow-y-auto">
      <div className="relative w-full max-w-3xl bg-[#0e1214] border border-white/15 rounded-3xl p-6 sm:p-10 text-white shadow-2xl max-h-[90vh] overflow-y-auto my-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2.5 rounded-full bg-[#141b1d] border border-white/10 text-slate-300 hover:text-white hover:bg-[#034A46] transition-all cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 rounded-2xl overflow-hidden border-2 border-[#0eb0a4]/50 shrink-0">
            <img src={HERO_IMAGE} alt="Solomon Elijah" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          </div>
          <div>
            <span className="text-xs font-bold font-mono text-[#0eb0a4] uppercase tracking-widest">
              MEET THE DESIGNER
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-white">
              Solomon Elijah
            </h2>
            <p className="text-xs text-slate-400 font-mono">Web Designer & Shopify Specialist</p>
          </div>
        </div>

        {/* Full Story */}
        <div className="space-y-4 text-slate-300 text-sm font-body leading-relaxed p-5 rounded-2xl bg-[#07090b] border border-white/10">
          <p>
            Hello! I’m Solomon Elijah. Over the past 5+ years, I’ve dedicated my career to mastering conversion-focused web design for Shopify, WordPress, and ecommerce brands worldwide.
          </p>
          <p>
            My design philosophy centers on one core principle: <strong>Form follows conversion</strong>. A visually beautiful website means nothing if it doesn't guide visitors naturally toward becoming loyal paying customers.
          </p>
          <p>
            When I build a store or business platform, I inspect every touchpoint—from loading speed and typography legibility to mobile cart drawers and checkout trust indicators. My clients don't just get a template; they get a custom growth system built for scaling.
          </p>
        </div>

        {/* Core Values */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
          <div className="p-4 rounded-xl bg-[#141b1d] border border-white/5 space-y-1">
            <div className="flex items-center gap-2 text-xs font-bold text-[#0eb0a4] font-mono">
              <Zap className="w-4 h-4" /> PERFORMANCE FIRST
            </div>
            <p className="text-xs text-slate-300">
              Clean, lightweight code ensuring PageSpeed scores of 90+ on desktop and mobile.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#141b1d] border border-white/5 space-y-1">
            <div className="flex items-center gap-2 text-xs font-bold text-[#0eb0a4] font-mono">
              <Award className="w-4 h-4" /> CONVERSION STRATEGY
            </div>
            <p className="text-xs text-slate-300">
              Strategic CTA placements, sticky buy bars, and trust badges that maximize sales.
            </p>
          </div>
        </div>

        {/* Actions */}
        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <button
            onClick={() => {
              onClose();
              onStartProject();
            }}
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-[#034A46] text-white font-bold text-xs tracking-wider uppercase border border-[#0eb0a4] hover:bg-[#056a64] transition-colors cursor-pointer"
          >
            LET’S BUILD YOUR WEBSITE
          </button>
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#141b1d] border border-white/15 text-white font-bold text-xs tracking-wider uppercase hover:bg-white/10 transition-colors cursor-pointer"
          >
            CLOSE
          </button>
        </div>

      </div>
    </div>
  );
};

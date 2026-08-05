import React from 'react';
import { X, CheckCircle2, Clock, Users, ArrowRight } from 'lucide-react';
import { Service } from '../types';

interface ServiceModalProps {
  service: Service | null;
  onClose: () => void;
  onStartProject: () => void;
}

export const ServiceModal: React.FC<ServiceModalProps> = ({ service, onClose, onStartProject }) => {
  if (!service) return null;

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

        {/* Modal Header */}
        <div className="space-y-2 pr-12">
          <span className="font-mono text-xs font-bold text-[#0eb0a4] uppercase tracking-widest">
            SERVICE {service.number}
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-white">
            {service.title}
          </h2>
        </div>

        {/* Full Description */}
        <p className="text-slate-300 text-sm font-body leading-relaxed my-6 p-4 rounded-2xl bg-[#07090b] border border-white/10">
          {service.fullDescription}
        </p>

        {/* Key Benefits */}
        <div className="space-y-3 my-6">
          <h3 className="font-display text-base font-bold uppercase tracking-wider font-mono text-[#0eb0a4]">
            WHY CHOOSE THIS SERVICE
          </h3>
          <div className="space-y-2">
            {service.benefits.map((benefit, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-[#0eb0a4] shrink-0 mt-0.5" />
                <span>{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Deliverables List */}
        <div className="space-y-3 my-6">
          <h3 className="font-display text-base font-bold uppercase tracking-wider font-mono text-[#0eb0a4]">
            WHAT’S INCLUDED / DELIVERABLES
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {service.deliverables.map((item, idx) => (
              <div key={idx} className="p-3 rounded-xl bg-[#141b1d] border border-white/5 text-xs text-slate-200 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0eb0a4]"></span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Details Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6 p-4 rounded-2xl bg-[#07090b] border border-white/10 text-xs">
          <div className="flex items-center gap-2.5">
            <Clock className="w-4 h-4 text-[#0eb0a4]" />
            <div>
              <p className="text-slate-400 text-[10px] uppercase font-mono">ESTIMATED TIMELINE</p>
              <p className="font-bold text-white">{service.turnaroundTime}</p>
            </div>
          </div>
          <div className="flex items-center gap-2.5">
            <Users className="w-4 h-4 text-[#0eb0a4]" />
            <div>
              <p className="text-slate-400 text-[10px] uppercase font-mono">IDEAL FOR</p>
              <p className="font-bold text-white truncate max-w-[200px]">{service.idealFor}</p>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <button
            onClick={() => {
              onClose();
              onStartProject();
            }}
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-[#034A46] text-white font-bold text-xs tracking-wider uppercase border border-[#0eb0a4] hover:bg-[#056a64] transition-colors flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>BOOK THIS SERVICE</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#141b1d] border border-white/15 text-white font-bold text-xs tracking-wider uppercase hover:bg-white/10 transition-colors cursor-pointer"
          >
            BACK TO SERVICES
          </button>
        </div>

      </div>
    </div>
  );
};

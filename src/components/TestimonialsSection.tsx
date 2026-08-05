import React, { useState } from 'react';
import { TESTIMONIALS } from '../data/portfolioData';
import { Sparkles, ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const current = TESTIMONIALS[currentIndex];

  return (
    <section className="py-24 bg-[#07090b] relative overflow-hidden text-white border-b border-white/10">
      {/* Background Glow */}
      <div className="absolute top-1/2 right-10 w-[500px] h-[500px] bg-[#034A46]/20 rounded-full blur-[160px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#101416] border border-white/10 text-xs font-extrabold tracking-widest text-[#0eb0a4] uppercase font-mono">
              <Sparkles className="w-3.5 h-3.5" />
              CLIENT FEEDBACK
            </div>
            <h2 className="section-heading text-[30px] sm:text-[45px] text-white">
              Trusted By Businesses <br className="hidden sm:inline" />
              That Want To Grow.
            </h2>
          </div>

          {/* Previous / Next Arrow Controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrev}
              className="p-3.5 rounded-xl bg-[#0e1214] border border-white/15 text-white hover:bg-[#034A46] hover:border-[#0eb0a4] transition-all cursor-pointer"
              aria-label="Previous Testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="p-3.5 rounded-xl bg-[#0e1214] border border-white/15 text-white hover:bg-[#034A46] hover:border-[#0eb0a4] transition-all cursor-pointer"
              aria-label="Next Testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Carousel Showcase Card */}
        <div className="relative rounded-3xl bg-[#0e1214] border border-white/15 p-8 sm:p-12 shadow-2xl overflow-hidden">
          
          <div className="absolute top-6 right-8 opacity-10 text-[#0eb0a4]">
            <Quote className="w-32 h-32" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* Left Avatar & Client Details */}
            <div className="lg:col-span-4 flex flex-col items-start space-y-4">
              <div className="relative w-20 h-20 rounded-2xl overflow-hidden border-2 border-[#0eb0a4]/50 shadow-xl">
                <img
                  src={current.avatar}
                  alt={current.clientName}
                  className="w-full h-full object-cover"
                />
              </div>

              <div>
                <h3 className="font-display text-xl font-bold text-white">
                  {current.clientName}
                </h3>
                <p className="text-xs font-semibold text-slate-400">
                  {current.clientRole} • <span className="text-[#0eb0a4]">{current.company}</span>
                </p>
              </div>

              {/* 5-Star Rating */}
              <div className="flex items-center space-x-1">
                {[...Array(current.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Metric Badge */}
              <div className="px-3.5 py-1.5 rounded-lg bg-[#034A46]/30 border border-[#0eb0a4]/30 text-xs font-mono font-extrabold text-[#0eb0a4]">
                RESULT: {current.metricHighlight}
              </div>
            </div>

            {/* Right Client Feedback Quote */}
            <div className="lg:col-span-8 space-y-6">
              <p className="text-lg sm:text-2xl font-body leading-relaxed text-slate-100 italic">
                “{current.quote}”
              </p>

              {/* Indicator Dots */}
              <div className="flex items-center space-x-2 pt-4">
                {TESTIMONIALS.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-2 rounded-full transition-all cursor-pointer ${
                      idx === currentIndex ? 'w-8 bg-[#0eb0a4]' : 'w-2 bg-slate-700 hover:bg-slate-500'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

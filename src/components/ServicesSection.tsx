import React from 'react';
import { ArrowUpRight, Sparkles, ShoppingBag, Globe, Zap, RefreshCw } from 'lucide-react';
import { SERVICES } from '../data/portfolioData';
import { Service } from '../types';

interface ServicesSectionProps {
  onSelectService: (service: Service) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const getServiceIcon = (id: string) => {
    switch (id) {
      case 'shopify-design':
        return <ShoppingBag className="w-6 h-6 text-[#0eb0a4]" />;
      case 'ecommerce-design':
        return <Zap className="w-6 h-6 text-[#0eb0a4]" />;
      case 'wordpress-design':
        return <Globe className="w-6 h-6 text-[#0eb0a4]" />;
      case 'redesign-optimization':
        return <RefreshCw className="w-6 h-6 text-[#0eb0a4]" />;
      default:
        return <Sparkles className="w-6 h-6 text-[#0eb0a4]" />;
    }
  };

  return (
    <section id="services" className="py-24 bg-[#080c0e] relative overflow-hidden text-white border-b border-white/10">
      {/* Background Decor */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#034A46]/20 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#101416] border border-white/10 text-xs font-extrabold tracking-widest text-[#0eb0a4] uppercase font-mono">
              <Sparkles className="w-3.5 h-3.5" />
              WHAT I DO
            </div>
            <h2 className="section-heading text-[30px] sm:text-[45px] text-white">
              Digital Experiences Built <br className="hidden sm:inline" />
              For Business Growth.
            </h2>
          </div>
          <p className="section-desc font-montserrat text-[14px] sm:text-[16px] max-w-md text-slate-300">
            Every service is tailored specifically to increase your revenue, build customer confidence, and deliver a frictionless digital experience.
          </p>
        </div>

        {/* 4 Interactive Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              onClick={() => onSelectService(service)}
              data-cursor="view"
              data-cursor-text="SERVICE"
              className="group relative rounded-2xl bg-[#0e1214] border border-white/10 p-8 hover:border-[#0eb0a4]/60 transition-all duration-300 hover:-translate-y-1.5 shadow-xl hover:shadow-2xl hover:shadow-[#034A46]/30 cursor-pointer flex flex-col justify-between"
            >
              {/* Top Card Row */}
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-xl bg-[#141b1d] border border-white/10 group-hover:border-[#0eb0a4]/40 transition-colors">
                      {getServiceIcon(service.id)}
                    </div>
                  </div>
                  {/* Number Badge with Color Shift on Hover */}
                  <span className="font-mono text-3xl font-black text-slate-600 group-hover:text-[#0eb0a4] transition-colors duration-300">
                    {service.number}
                  </span>
                </div>

                {/* Service Title */}
                <h3 className="font-display text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-[#0eb0a4] transition-colors">
                  {service.title}
                </h3>

                {/* Short Description */}
                <p className="text-slate-300 text-sm font-body leading-relaxed mb-6">
                  {service.shortDescription}
                </p>
              </div>

              {/* Bottom Action Row */}
              <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs font-bold tracking-wider text-slate-400 group-hover:text-white uppercase font-mono transition-colors">
                  EXPLORE SERVICE
                </span>
                <div className="w-10 h-10 rounded-full bg-[#141b1d] border border-white/10 flex items-center justify-center text-slate-300 group-hover:bg-[#034A46] group-hover:border-[#0eb0a4] group-hover:text-white transition-all duration-300">
                  <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

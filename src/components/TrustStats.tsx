import React from 'react';
import { Award, CheckCircle2, ShoppingBag, ShieldCheck } from 'lucide-react';

export const TrustStats: React.FC = () => {
  const stats = [
    {
      value: '50+',
      label: 'WEBSITES LAUNCHED',
      subtext: 'High-converting Shopify, WordPress, & custom web applications.',
      icon: <Award className="w-5 h-5 text-[#0eb0a4]" />,
    },
    {
      value: '5+',
      label: 'YEARS OF EXPERTISE',
      subtext: 'Specialized in ecommerce, UX design, & revenue growth.',
      icon: <ShoppingBag className="w-5 h-5 text-[#0eb0a4]" />,
    },
    {
      value: '100%',
      label: 'RESPONSIVE QUALITY',
      subtext: 'Pixel-perfect mobile layout & 90+ Google PageSpeed performance.',
      icon: <CheckCircle2 className="w-5 h-5 text-[#0eb0a4]" />,
    },
    {
      value: 'SHOPIFY',
      label: '& WORDPRESS EXPERT',
      subtext: 'End-to-end store build, theme customization, & WhatsApp AI.',
      icon: <ShieldCheck className="w-5 h-5 text-[#0eb0a4]" />,
    },
  ];

  return (
    <section className="relative z-20 py-12 sm:py-16 bg-[#080b0d] border-y border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header Label */}
        <div className="text-center mb-8">
          <p className="text-xs font-mono font-extrabold tracking-widest text-[#0eb0a4] uppercase">
            PROVEN TRACK RECORD & DESIGN EXCELLENCE
          </p>
        </div>

        {/* 4 Cards Grid with 45px Display Values and 14px/16px Copy */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="group relative rounded-2xl bg-[#0e1416] border border-white/10 p-6 sm:p-7 hover:border-[#0eb0a4]/50 transition-all duration-300 hover:-translate-y-1 shadow-xl flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2.5 rounded-xl bg-[#034A46]/20 border border-[#0eb0a4]/30 group-hover:border-[#0eb0a4] transition-colors">
                    {stat.icon}
                  </div>
                  <span className="text-xs font-mono text-slate-500 font-bold">0{idx + 1}</span>
                </div>

                {/* 45px Display Stat Heading */}
                <div className="font-bebas font-extrabold text-[45px] text-white tracking-tight leading-none text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-[#0eb0a4] group-hover:text-[#0eb0a4] transition-colors">
                  {stat.value}
                </div>

                {/* 14px/16px Label */}
                <div className="text-[14px] font-mono font-extrabold tracking-wider text-[#0eb0a4] uppercase mt-2">
                  {stat.label}
                </div>

                {/* 14px/16px Subtext */}
                <p className="text-[14px] text-slate-300 mt-2 font-montserrat leading-relaxed">
                  {stat.subtext}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

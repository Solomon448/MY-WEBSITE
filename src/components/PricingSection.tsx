import React, { useState, useRef } from 'react';
import { Check, Sparkles, Zap, Shield, ArrowRight, Bot, HelpCircle } from 'lucide-react';

interface PricingPlan {
  id: string;
  name: string;
  badge?: string;
  priceOneTime: string;
  priceMonthly: string;
  tagline: string;
  features: string[];
  popular?: boolean;
  serviceKey: string;
}

const PLANS: PricingPlan[] = [
  {
    id: 'starter',
    name: 'STARTER / LANDING',
    priceOneTime: '$750',
    priceMonthly: '$190/mo',
    tagline: 'Ideal for single-product Shopify launches, brand landing pages, and small businesses.',
    features: [
      'Custom Shopify or WordPress 1-Page Layout',
      'Fully Mobile Responsive & Fast Loading',
      'Essential On-Page SEO & Analytics Setup',
      'Hero Section & Conversion CTA Blocks',
      'Standard Payment & Contact Form Setup',
      '7 Days Fast Delivery Guarantee',
      '14 Days Post-Launch Support',
    ],
    serviceKey: 'Shopify Website Design',
  },
  {
    id: 'growth',
    name: 'SHOPIFY ECOMMERCE GROWTH',
    badge: 'MOST POPULAR',
    popular: true,
    priceOneTime: '$1,800',
    priceMonthly: '$450/mo',
    tagline: 'Complete high-converting Shopify store customized to turn visitors into repeat buyers.',
    features: [
      'Bespoke Shopify / Ecommerce Design Architecture',
      'Custom Product Pages with Upsell & Cross-sell Triggers',
      'Mobile-First Touch Architecture & Speed Optimization (90+)',
      'Custom Brand Banners, Icons & High-Impact Visuals',
      'Payment Gateways, Shipping Rates & Multi-Currency',
      'Email Marketing & Abandoned Cart Recovery Integration',
      '14 Days Delivery + 30 Days Free Dedicated Support',
    ],
    serviceKey: 'Ecommerce Website Design',
  },
  {
    id: 'enterprise',
    name: 'ENTERPRISE & AI ECOSYSTEM',
    badge: 'FULL AI AUTOMATION',
    priceOneTime: '$3,500',
    priceMonthly: '$850/mo',
    tagline: 'Full-stack custom web platform integrated with custom WhatsApp AI Chatbot assistant.',
    features: [
      'Advanced Custom Web App or Large Store Infrastructure',
      'WhatsApp AI Chatbot Integration for Automated Sales & FAQs',
      'Advanced Conversion Rate Optimization (CRO) & Funnels',
      'Interactive 3D Elements, Animations & Smooth Transitions',
      'CRM, ERP & Custom API Integration',
      'VIP Priority Support & Monthly Strategy Consultation',
      'Dedicated 21 Days Timeline with Direct VIP Access',
    ],
    serviceKey: 'WhatsApp AI Chatbot & Automation',
  },
];

// Helper hook for 3D cursor tilt movement on cards
const TiltCard: React.FC<{
  plan: PricingPlan;
  isMonthly: boolean;
  onSelectPlan: (serviceKey: string, planName: string) => void;
}> = ({ plan, isMonthly, onSelectPlan }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50, opacity: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Calculate rotation (-12deg to +12deg)
    const rx = ((y - centerY) / centerY) * -10;
    const ry = ((x - centerX) / centerX) * 10;

    setRotateX(rx);
    setRotateY(ry);
    setGlarePos({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
      opacity: 0.25,
    });
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setGlarePos((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="perspective-1000 h-full transition-all duration-200 ease-out"
    >
      <div
        style={{
          transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`,
          transition: 'transform 0.15s cubic-bezier(0.1, 1, 0.1, 1)',
        }}
        className={`relative h-full rounded-3xl p-8 flex flex-col justify-between preserve-3d transition-all duration-300 ${
          plan.popular
            ? 'bg-gradient-to-b from-[#0e1b1a] via-[#0c1415] to-[#07090b] border-2 border-[#0eb0a4] shadow-[0_0_40px_rgba(14,176,164,0.2)]'
            : 'bg-[#0e1214] border border-white/10 hover:border-[#0eb0a4]/50 shadow-xl'
        }`}
      >
        {/* Interactive 3D Specular Glare Overlay */}
        <div
          className="pointer-events-none absolute inset-0 rounded-3xl transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle at ${glarePos.x}% ${glarePos.y}%, rgba(14, 176, 164, ${glarePos.opacity}), transparent 60%)`,
          }}
        />

        <div>
          {/* Badge */}
          <div className="flex items-center justify-between mb-6">
            <span className="font-mono text-xs font-extrabold tracking-widest text-[#0eb0a4] uppercase">
              {plan.id.toUpperCase()}
            </span>
            {plan.badge && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#034A46] text-white border border-[#0eb0a4] text-[10px] font-mono font-bold tracking-wider uppercase shadow-md">
                <Sparkles className="w-3 h-3 text-[#0eb0a4]" />
                {plan.badge}
              </span>
            )}
          </div>

          {/* Plan Name */}
          <h3 className="font-display text-xl font-bold text-white mb-2">
            {plan.name}
          </h3>

          {/* Description - Montserrat 14px */}
          <p className="font-montserrat text-[14px] text-slate-400 leading-relaxed mb-6">
            {plan.tagline}
          </p>

          {/* Price */}
          <div className="mb-8 pb-6 border-b border-white/10">
            <div className="flex items-baseline gap-2">
              <span className="font-mono text-4xl sm:text-5xl font-extrabold text-white">
                {isMonthly ? plan.priceMonthly : plan.priceOneTime}
              </span>
              <span className="font-montserrat text-[14px] text-slate-400">
                {isMonthly ? '/ month retainer' : 'fixed project rate'}
              </span>
            </div>
            {!isMonthly && (
              <p className="font-montserrat text-[12px] text-[#0eb0a4] font-medium mt-1">
                ✓ No hidden fees • Clear milestone deliverables
              </p>
            )}
          </div>

          {/* Features List */}
          <div className="space-y-3.5 mb-8">
            <p className="font-mono text-xs font-bold text-slate-300 uppercase tracking-wider">
              WHAT’S INCLUDED:
            </p>
            {plan.features.map((feature, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#034A46]/40 border border-[#0eb0a4]/50 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 text-[#0eb0a4]" />
                </div>
                {/* Description Text Montserrat 14px */}
                <span className="font-montserrat text-[14px] text-slate-300 leading-snug">
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <button
          onClick={() => onSelectPlan(plan.serviceKey, plan.name)}
          className={`w-full py-4 rounded-xl font-extrabold text-xs tracking-wider uppercase transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-lg ${
            plan.popular
              ? 'bg-[#034A46] text-white border border-[#0eb0a4] hover:bg-[#056a64] hover:shadow-[0_0_20px_rgba(14,176,164,0.4)]'
              : 'bg-[#141b1d] border border-white/15 text-white hover:bg-[#034A46] hover:border-[#0eb0a4]'
          }`}
          data-cursor="hover"
        >
          <span>BOOK THIS PACKAGE</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export const PricingSection: React.FC<{
  onSelectPlanBooking: (serviceKey: string, planName: string) => void;
}> = ({ onSelectPlanBooking }) => {
  const [isMonthly, setIsMonthly] = useState(false);

  return (
    <section id="pricing" className="py-24 bg-[#07090b] relative overflow-hidden border-b border-white/10 text-white">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#034A46]/20 rounded-full blur-[180px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#101416] border border-white/10 text-xs font-extrabold tracking-widest text-[#0eb0a4] uppercase font-mono">
            <Zap className="w-3.5 h-3.5" />
            TRANSPARENT PRICING
          </div>

          {/* Heading 45px */}
          <h2 className="section-heading text-[30px] sm:text-[45px] text-white">
            Simple, Transparent Investment Plans.
          </h2>

          {/* Description Montserrat 14px */}
          <p className="section-desc font-montserrat text-[14px]">
            Choose a fixed project rate or flexible monthly retainer. Every plan includes complete source files, mobile optimization, conversion strategy, and dedicated support.
          </p>

          {/* Billing Switcher */}
          <div className="inline-flex items-center gap-3 p-1.5 rounded-full bg-[#0e1214] border border-white/15 mt-6">
            <button
              onClick={() => setIsMonthly(false)}
              className={`px-5 py-2.5 rounded-full text-xs font-mono font-bold transition-all cursor-pointer ${
                !isMonthly
                  ? 'bg-[#034A46] text-white border border-[#0eb0a4] shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              PROJECT FIXED RATE
            </button>
            <button
              onClick={() => setIsMonthly(true)}
              className={`px-5 py-2.5 rounded-full text-xs font-mono font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                isMonthly
                  ? 'bg-[#034A46] text-white border border-[#0eb0a4] shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <span>MONTHLY RETAINER</span>
              <span className="text-[10px] px-1.5 py-0.5 rounded bg-[#0eb0a4]/20 text-[#0eb0a4]">SAVE 15%</span>
            </button>
          </div>
        </div>

        {/* 3D Cursor Movement Pricing Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-16">
          {PLANS.map((plan) => (
            <TiltCard
              key={plan.id}
              plan={plan}
              isMonthly={isMonthly}
              onSelectPlan={onSelectPlanBooking}
            />
          ))}
        </div>

        {/* Guarantee Banner */}
        <div className="p-6 rounded-2xl bg-[#0e1214] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#034A46]/40 border border-[#0eb0a4] text-[#0eb0a4] flex items-center justify-center shrink-0">
              <Shield className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-display font-bold text-white text-base">
                100% Satisfaction & On-Time Guarantee
              </h4>
              <p className="font-montserrat text-[14px] text-slate-400">
                Clear milestones, weekly progress demos, and fixed quotes with zero surprise charges.
              </p>
            </div>
          </div>

          <a
            href="https://wa.me/17828592148?text=Hello%20Solomon,%20I'm%20interested%20in%20a%20custom%20quote%20for%20my%20website."
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl bg-[#141b1d] border border-white/15 text-xs font-mono font-bold text-slate-200 hover:text-white hover:border-[#0eb0a4] transition-all whitespace-nowrap"
          >
            NEED A CUSTOM ENTERPRISE QUOTE?
          </a>
        </div>

      </div>
    </section>
  );
};

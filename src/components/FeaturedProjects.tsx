import React, { useState } from 'react';
import { ArrowUpRight, Sparkles, Smartphone, Monitor, CheckCircle, ExternalLink } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types';

interface FeaturedProjectsProps {
  onSelectProject: (project: Project) => void;
}

export const FeaturedProjects: React.FC<FeaturedProjectsProps> = ({ onSelectProject }) => {
  const [filter, setFilter] = useState<string>('ALL');

  const filteredProjects = PROJECTS.filter((p) => {
    if (filter === 'ALL') return true;
    return p.categoryTag === filter;
  });

  return (
    <section id="work" className="py-24 bg-[#07090b] relative overflow-hidden text-white border-b border-white/10">
      {/* Background Glow */}
      <div className="absolute bottom-1/3 left-10 w-[500px] h-[500px] bg-[#034A46]/20 rounded-full blur-[160px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#101416] border border-white/10 text-xs font-extrabold tracking-widest text-[#0eb0a4] uppercase font-mono">
              <Sparkles className="w-3.5 h-3.5" />
              SELECTED WORK
            </div>
            <h2 className="section-heading text-[30px] sm:text-[45px] text-white">
              Websites Built To <br className="hidden sm:inline" />
              Make An Impact.
            </h2>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {['ALL', 'SHOPIFY', 'WORDPRESS', 'ECOMMERCE'].map((tab) => (
              <button
                key={tab}
                onClick={() => setFilter(tab)}
                className={`px-4 py-2 rounded-full text-xs font-bold tracking-wider font-mono transition-all cursor-pointer ${
                  filter === tab
                    ? 'bg-[#034A46] text-white shadow-lg shadow-[#034A46]/50 border border-[#0eb0a4]'
                    : 'bg-[#101416] text-slate-400 border border-white/10 hover:text-white hover:border-white/30'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Alternating Large Portfolio Cards */}
        <div className="space-y-16">
          {filteredProjects.map((project, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={project.id}
                onClick={() => onSelectProject(project)}
                data-cursor="view"
                data-cursor-text="CASE STUDY"
                className="group relative rounded-3xl bg-[#0e1214] border border-white/10 p-6 sm:p-8 lg:p-10 hover:border-[#0eb0a4]/60 transition-all duration-500 hover:shadow-2xl hover:shadow-[#034A46]/20 cursor-pointer overflow-hidden"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
                  isEven ? '' : 'lg:flex-row-reverse'
                }`}>
                  
                  {/* Left Project Info */}
                  <div className={`lg:col-span-5 space-y-5 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold font-mono text-[#0eb0a4] uppercase tracking-widest">
                        {project.category}
                      </span>
                      <span className="text-xs font-mono text-slate-500">0{index + 1} / 04</span>
                    </div>

                    <h3 className="font-display text-2xl sm:text-4xl font-extrabold text-white group-hover:text-[#0eb0a4] transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-slate-300 text-sm sm:text-base font-body leading-relaxed">
                      {project.description}
                    </p>

                    {/* Key Metrics Pill Badges */}
                    <div className="grid grid-cols-3 gap-3 pt-2">
                      {project.metrics.map((metric, idx) => (
                        <div key={idx} className="p-2.5 rounded-xl bg-[#141b1d] border border-white/10 text-center">
                          <p className="font-mono text-xs sm:text-sm font-extrabold text-[#0eb0a4]">
                            {metric.value}
                          </p>
                          <p className="text-[10px] text-slate-400 truncate mt-0.5 font-body">
                            {metric.label}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* View Case Study CTA */}
                    <div className="pt-4 flex items-center gap-3">
                      <button className="group-hover:bg-[#034A46] group-hover:border-[#0eb0a4] inline-flex items-center px-6 py-3 rounded-xl bg-[#141b1d] border border-white/15 text-xs font-bold tracking-wider uppercase text-white transition-all duration-300">
                        <span>VIEW CASE STUDY</span>
                        <ArrowUpRight className="w-4 h-4 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </button>
                    </div>

                  </div>

                  {/* Right Dual Desktop + Mobile Mockup Representation */}
                  <div className={`lg:col-span-7 relative ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                    
                    <div className="relative rounded-2xl bg-[#07090b] border border-white/10 p-3 sm:p-4 overflow-hidden shadow-2xl">
                      
                      {/* Browser Window Bar */}
                      <div className="flex items-center justify-between pb-2 mb-3 border-b border-white/10 px-2">
                        <div className="flex items-center space-x-1.5">
                          <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                          <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></div>
                          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></div>
                        </div>
                        <span className="text-[10px] font-mono text-slate-500 truncate max-w-[200px]">
                          {project.client.toLowerCase().replace(/\s+/g, '')}.com
                        </span>
                        <Monitor className="w-3.5 h-3.5 text-slate-500" />
                      </div>

                      {/* Desktop Image Frame */}
                      <div className="relative aspect-[16/10] rounded-lg overflow-hidden border border-white/10 bg-zinc-900">
                        <img
                          src={project.desktopImage}
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                      </div>

                      {/* Mobile Mockup Overlay beside Desktop */}
                      <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 w-24 sm:w-36 aspect-[9/18] rounded-xl sm:rounded-2xl bg-[#07090b] border-2 border-white/20 p-1 shadow-2xl overflow-hidden hidden xs:block">
                        <div className="relative w-full h-full rounded-lg sm:rounded-xl overflow-hidden bg-zinc-950">
                          <img
                            src={project.mobileImage}
                            alt={`${project.title} mobile view`}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                          />
                        </div>
                      </div>

                    </div>

                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

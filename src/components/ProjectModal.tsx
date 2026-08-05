import React from 'react';
import { X, ExternalLink, CheckCircle2, TrendingUp, Layers, Calendar, User } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onStartProject: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, onStartProject }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-[#0e1214] border border-white/15 rounded-3xl p-6 sm:p-10 text-white shadow-2xl max-h-[90vh] overflow-y-auto my-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2.5 rounded-full bg-[#141b1d] border border-white/10 text-slate-300 hover:text-white hover:bg-[#034A46] transition-all cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="space-y-3 pr-12">
          <span className="text-xs font-bold font-mono text-[#0eb0a4] uppercase tracking-widest">
            {project.category}
          </span>
          <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-white">
            {project.title}
          </h2>
          <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 font-mono pt-1">
            <span className="flex items-center gap-1.5"><User className="w-3.5 h-3.5 text-[#0eb0a4]" /> Client: {project.client}</span>
            <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5 text-[#0eb0a4]" /> Year: {project.year}</span>
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-3 gap-4 my-6 p-4 rounded-2xl bg-[#07090b] border border-white/10">
          {project.metrics.map((m, idx) => (
            <div key={idx} className="text-center">
              <p className="font-mono text-lg sm:text-2xl font-extrabold text-[#0eb0a4]">{m.value}</p>
              <p className="text-[11px] text-slate-400 font-body">{m.label}</p>
            </div>
          ))}
        </div>

        {/* Showcase Image */}
        <div className="relative aspect-[16/9] rounded-2xl overflow-hidden border border-white/10 my-6 bg-zinc-900">
          <img src={project.desktopImage} alt={project.title} className="w-full h-full object-cover object-top" />
        </div>

        {/* Story Section */}
        <div className="space-y-4 my-6">
          <h3 className="font-display text-lg font-bold text-white flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-[#0eb0a4]" />
            Project Background & Strategy
          </h3>
          <p className="text-slate-300 text-sm font-body leading-relaxed">
            {project.fullStory}
          </p>
        </div>

        {/* Key Deliverables & Features */}
        <div className="space-y-3 my-6">
          <h3 className="font-display text-lg font-bold text-white flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-[#0eb0a4]" />
            Key Conversion Features
          </h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-slate-300">
            {project.keyFeatures.map((feat, idx) => (
              <li key={idx} className="flex items-start gap-2 p-2 rounded-lg bg-[#141b1d] border border-white/5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0eb0a4] mt-2 shrink-0"></span>
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tools Used */}
        <div className="my-6">
          <p className="text-xs font-mono font-bold text-slate-400 uppercase tracking-widest mb-2">
            TECHNOLOGY STACK
          </p>
          <div className="flex flex-wrap gap-2">
            {project.toolsUsed.map((tool) => (
              <span key={tool} className="px-3 py-1 rounded-md bg-[#141b1d] border border-white/10 text-xs font-mono text-slate-300">
                {tool}
              </span>
            ))}
          </div>
        </div>

        {/* Modal Actions */}
        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <button
            onClick={() => {
              onClose();
              onStartProject();
            }}
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-[#034A46] text-white font-bold text-xs tracking-wider uppercase border border-[#0eb0a4] hover:bg-[#056a64] transition-colors cursor-pointer"
          >
            WANT A SIMILAR RESULT? START A PROJECT
          </button>
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#141b1d] border border-white/15 text-white font-bold text-xs tracking-wider uppercase hover:bg-white/10 transition-colors cursor-pointer"
          >
            CLOSE CASE STUDY
          </button>
        </div>

      </div>
    </div>
  );
};

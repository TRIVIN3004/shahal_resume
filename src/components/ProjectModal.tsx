import React, { useEffect } from 'react';
import { 
  X, 
  CheckCircle2, 
  Target, 
  AlertCircle, 
  Cpu, 
  TrendingUp 
} from 'lucide-react';
import type { Project } from '../data/portfolio';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div 
        className="relative w-full max-w-3xl my-8 bg-[#0b1120] border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden z-10 animate-modal-in max-h-[90vh] flex flex-col"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="p-6 sm:p-7 border-b border-slate-800 bg-slate-900/60 flex items-start justify-between gap-4 sticky top-0 z-20 backdrop-blur-md">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-blue-950 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-2 border border-blue-800/60">
              <span>{project.category}</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug font-heading">
              {project.title}
            </h3>
          </div>
          
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors shrink-0 cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content Body */}
        <div className="p-6 sm:p-8 space-y-7 overflow-y-auto">
          
          {/* Overview / Description */}
          <div>
            <h4 className="text-xs uppercase font-semibold text-slate-400 tracking-wider mb-2 font-mono">
              Project Summary
            </h4>
            <p className="text-slate-200 text-base leading-relaxed bg-slate-900/50 p-4 rounded-xl border border-slate-800">
              {project.description}
            </p>
          </div>

          {/* Problem & Objective Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
              <div className="flex items-center gap-2 text-rose-400 text-sm font-bold mb-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>Problem Statement</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {project.problem}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
              <div className="flex items-center gap-2 text-blue-400 text-sm font-bold mb-2">
                <Target className="w-4 h-4 shrink-0" />
                <span>Core Objective</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {project.objective}
              </p>
            </div>
          </div>

          {/* Approach & Methodology */}
          <div>
            <h4 className="text-xs uppercase font-semibold text-slate-400 tracking-wider mb-3 font-mono flex items-center gap-2">
              <Cpu className="w-3.5 h-3.5 text-indigo-400" />
              <span>Approach & Methodology</span>
            </h4>
            <p className="text-sm text-slate-300 leading-relaxed mb-3">
              {project.approach}
            </p>
            <div className="space-y-2 mt-3">
              {project.methodology.map((step, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 bg-slate-900/40 p-2.5 rounded-lg border border-slate-800/60">
                  <span className="w-5 h-5 rounded-full bg-blue-950 text-blue-400 text-xs font-mono font-bold flex items-center justify-center shrink-0 mt-0.5 border border-blue-800/60">
                    {idx + 1}
                  </span>
                  <span>{step}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Models Evaluated (if applicable) */}
          {project.models && project.models.length > 0 && (
            <div>
              <h4 className="text-xs uppercase font-semibold text-slate-400 tracking-wider mb-2 font-mono">
                Algorithms & Models Applied
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.models.map((mod) => (
                  <span key={mod} className="px-3 py-1 rounded-lg bg-indigo-950/70 border border-indigo-700/60 text-indigo-300 font-mono text-xs font-semibold">
                    {mod}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Technologies Used */}
          <div>
            <h4 className="text-xs uppercase font-semibold text-slate-400 tracking-wider mb-2 font-mono">
              Technologies & Tooling
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span key={tech} className="px-3 py-1 rounded-lg bg-slate-800 text-slate-200 border border-slate-700 font-mono text-xs">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Results & Key Takeaways */}
          <div>
            <h4 className="text-xs uppercase font-semibold text-slate-400 tracking-wider mb-2 font-mono flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>Results & Insights</span>
            </h4>
            <ul className="space-y-2">
              {project.results.map((res, i) => (
                <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0 mt-2" />
                  <span>{res}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Future Improvements */}
          <div>
            <h4 className="text-xs uppercase font-semibold text-slate-400 tracking-wider mb-2 font-mono flex items-center gap-2">
              <TrendingUp className="w-3.5 h-3.5 text-cyan-400" />
              <span>Future Scope & Extensions</span>
            </h4>
            <ul className="space-y-2">
              {project.futureImprovements.map((imp, i) => (
                <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0 mt-2" />
                  <span>{imp}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Footer Actions */}
        <div className="p-5 sm:p-6 border-t border-slate-800 bg-slate-900/80 flex flex-wrap items-center justify-between gap-4">
          <div className="text-xs text-slate-400">
            Based on verified academic and project implementations.
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

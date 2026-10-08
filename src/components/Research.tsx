import React from 'react';
import { motion } from 'framer-motion';
import { 
  BookOpenCheck, 
  Plane, 
  ShieldCheck, 
  Sparkles, 
  Gauge
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolio';

export const Research: React.FC = () => {
  const { research } = PORTFOLIO_DATA;

  return (
    <section id="research" className="py-24 relative overflow-hidden">
      
      {/* Background Lighting */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-80 h-80 bg-cyan-600/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-950/50 border border-blue-800/40 text-blue-400 text-xs font-semibold tracking-wider uppercase mb-3">
            <BookOpenCheck className="w-3.5 h-3.5 text-blue-400" />
            <span>Academic Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Research & Publication
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
            Theoretical formulation and system modeling in autonomous flight safety and high-G environment fail-safes.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mt-3" />
        </div>

        {/* Research Paper Style Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass-card p-6 sm:p-10 rounded-2xl border border-slate-800 shadow-2xl relative overflow-hidden group hover:border-cyan-500/40 transition-all"
        >
          {/* Top Paper Header */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-slate-800">
            <div className="flex items-center gap-2.5">
              <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                <Plane className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs uppercase font-semibold text-cyan-400 tracking-wider font-mono">
                  Autonomous Aviation Safety Proposal
                </span>
                <div className="text-xs text-slate-400 mt-0.5">Author: Najeeb Shahal S</div>
              </div>
            </div>

            <div className="flex flex-wrap gap-1.5">
              {research.tags.map((tag) => (
                <span key={tag} className="text-xs font-mono px-3 py-1 rounded-full bg-slate-900 text-slate-300 border border-slate-700/80">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Paper Title */}
          <div className="my-6">
            <h3 className="text-xl sm:text-2xl lg:text-[26px] font-bold text-white leading-snug font-heading group-hover:text-cyan-300 transition-colors">
              "{research.title}"
            </h3>
            
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed mt-4 bg-slate-900/60 p-5 rounded-xl border border-slate-800">
              {research.description}
            </p>
          </div>

          {/* Key Framework Breakdown */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            
            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
              <div className="flex items-center gap-2 text-indigo-400 text-sm font-bold mb-2">
                <Gauge className="w-4 h-4" />
                <span>G-Force Telemetry & Trigger</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {research.details.motivation}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
              <div className="flex items-center gap-2 text-emerald-400 text-sm font-bold mb-2">
                <ShieldCheck className="w-4 h-4" />
                <span>Autonomous Handover Protocol</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {research.details.mechanism}
              </p>
            </div>

          </div>

          {/* Footer note */}
          <div className="mt-8 pt-4 border-t border-slate-800/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-slate-400">
            <div className="flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>Applied AI & Control Systems Safety Framework</span>
            </div>
            <span className="font-mono text-slate-500">
              Field: Aerospace & Machine Intelligence
            </span>
          </div>

        </motion.div>

      </div>
    </section>
  );
};

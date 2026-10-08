import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FolderGit2, 
  Activity, 
  Zap, 
  FileText, 
  Check, 
  ChevronRight,
  ArrowRight
} from 'lucide-react';
import { GithubIcon } from './Icons';
import { PORTFOLIO_DATA, type Project } from '../data/portfolio';
import { ProjectModal } from './ProjectModal';

export const Projects: React.FC = () => {
  const { projects } = PORTFOLIO_DATA;
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      
      {/* Background Lighting */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-10 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-indigo-600/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-950/50 border border-blue-800/40 text-blue-400 text-xs font-semibold tracking-wider uppercase mb-3">
              <FolderGit2 className="w-3.5 h-3.5 text-blue-400" />
              <span>Applied AI/ML Systems</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Featured Projects
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
              End-to-end predictive models, anomaly detection systems, and NLP text processing tools built with Python and machine learning algorithms.
            </p>
            <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mt-3" />
          </div>
          <span className="text-xs font-mono text-slate-400 bg-slate-900 border border-slate-800 px-3 py-1.5 rounded-lg">
            3 Core Implementations
          </span>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Project 1: Sleep Health & Lifestyle Prediction */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-card rounded-2xl border border-slate-800 flex flex-col justify-between overflow-hidden group hover:border-blue-500/50 transition-all duration-300 shadow-xl"
          >
            <div>
              {/* Project Card Header Visual Simulation */}
              <div className="h-48 bg-gradient-to-br from-slate-900 via-[#0e172a] to-blue-950/40 p-5 relative border-b border-slate-800/80 flex flex-col justify-between overflow-hidden">
                <div className="flex items-center justify-between z-10">
                  <span className="text-[11px] font-mono font-semibold px-2.5 py-1 rounded bg-blue-950/80 text-blue-300 border border-blue-800/60">
                    ML Classification
                  </span>
                  <div className="p-1.5 rounded-lg bg-blue-500/10 text-blue-400 border border-blue-500/20">
                    <Activity className="w-4 h-4" />
                  </div>
                </div>

                {/* Simulated Health Metric Curve */}
                <div className="relative z-10 my-auto py-2">
                  <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 mb-1.5">
                    <span>Feature Analysis: Stress & BMI</span>
                    <span className="text-cyan-400 font-bold">Optimal Fit</span>
                  </div>
                  <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden flex gap-1">
                    <div className="w-1/3 bg-blue-500 rounded-full" />
                    <div className="w-1/4 bg-indigo-500 rounded-full" />
                    <div className="w-2/5 bg-cyan-400 rounded-full" />
                  </div>
                  <div className="flex items-center justify-between text-[10px] text-slate-500 font-mono mt-1">
                    <span>Random Forest</span>
                    <span>SVM Comparison</span>
                  </div>
                </div>

                {/* Subtle Grid background */}
                <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
              </div>

              {/* Body */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors font-heading leading-snug mb-2">
                  {projects[0].title}
                </h3>
                
                <p className="text-slate-300 text-sm leading-relaxed mb-5 font-normal">
                  {projects[0].description}
                </p>

                {/* Highlights */}
                <div className="space-y-2 mb-6">
                  <div className="text-xs uppercase font-semibold text-slate-400 font-mono">Highlights:</div>
                  <div className="grid grid-cols-2 gap-2">
                    {projects[0].highlights.map((h) => (
                      <div key={h} className="flex items-center gap-1.5 text-xs text-slate-300">
                        <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Models Evaluated */}
                <div className="mb-5">
                  <div className="text-xs uppercase font-semibold text-slate-400 font-mono mb-2">Models:</div>
                  <div className="flex flex-wrap gap-2">
                    {projects[0].models?.map((m) => (
                      <span key={m} className="px-2.5 py-0.5 rounded bg-indigo-950/80 text-indigo-300 border border-indigo-800/60 text-xs font-mono">
                        {m}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div>
                  <div className="text-xs uppercase font-semibold text-slate-400 font-mono mb-2">Technologies:</div>
                  <div className="flex flex-wrap gap-1.5">
                    {projects[0].technologies.map((t) => (
                      <span key={t} className="px-2 py-0.5 rounded bg-slate-900 text-slate-300 border border-slate-800 text-[11px] font-mono">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="p-6 pt-0 mt-2 flex items-center gap-3">
              <button
                onClick={() => setSelectedProject(projects[0])}
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs transition-colors shadow-md cursor-pointer"
              >
                <span>View Project</span>
                <ChevronRight className="w-4 h-4" />
              </button>

              <button
                disabled
                className="px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-500 text-xs font-medium cursor-not-allowed flex items-center gap-1.5"
                title="Repository link can be configured"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </button>
            </div>
          </motion.div>

          {/* Project 2: Intelligent Abnormal Electricity Usage Detection System */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass-card rounded-2xl border border-slate-800 flex flex-col justify-between overflow-hidden group hover:border-amber-500/50 transition-all duration-300 shadow-xl"
          >
            <div>
              {/* Project Card Header Energy Visual */}
              <div className="h-48 bg-gradient-to-br from-slate-900 via-[#161b26] to-amber-950/30 p-5 relative border-b border-slate-800/80 flex flex-col justify-between overflow-hidden">
                <div className="flex items-center justify-between z-10">
                  <span className="text-[11px] font-mono font-semibold px-2.5 py-1 rounded bg-amber-950/80 text-amber-300 border border-amber-800/60">
                    Anomaly Detection
                  </span>
                  <div className="p-1.5 rounded-lg bg-amber-500/10 text-amber-400 border border-amber-500/20">
                    <Zap className="w-4 h-4" />
                  </div>
                </div>

                {/* Energy Pulse Visualizer */}
                <div className="relative z-10 my-auto py-2">
                  <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 mb-1.5">
                    <span>Power Load Telemetry</span>
                    <span className="text-amber-400 font-bold flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
                      Spike Detected
                    </span>
                  </div>
                  
                  {/* Visual wave spikes */}
                  <div className="h-8 flex items-end gap-1.5 bg-slate-950/80 p-1.5 rounded-lg border border-slate-800">
                    <div className="w-1/12 h-3 bg-cyan-500/70 rounded-xs" />
                    <div className="w-1/12 h-4 bg-cyan-500/70 rounded-xs" />
                    <div className="w-1/12 h-3 bg-cyan-500/70 rounded-xs" />
                    <div className="w-1/12 h-5 bg-cyan-500/70 rounded-xs" />
                    <div className="w-1/12 h-4 bg-cyan-500/70 rounded-xs" />
                    <div className="w-1/12 h-7 bg-amber-400 rounded-xs animate-pulse" />
                    <div className="w-1/12 h-8 bg-rose-500 rounded-xs animate-pulse" />
                    <div className="w-1/12 h-6 bg-amber-400 rounded-xs" />
                    <div className="w-1/12 h-3 bg-cyan-500/70 rounded-xs" />
                    <div className="w-1/12 h-4 bg-cyan-500/70 rounded-xs" />
                    <div className="w-1/12 h-3 bg-cyan-500/70 rounded-xs" />
                    <div className="w-1/12 h-2 bg-cyan-500/70 rounded-xs" />
                  </div>
                </div>

                <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
              </div>

              {/* Body */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white group-hover:text-amber-400 transition-colors font-heading leading-snug mb-2">
                  {projects[1].title}
                </h3>
                
                <p className="text-slate-300 text-sm leading-relaxed mb-5 font-normal">
                  {projects[1].description}
                </p>

                {/* Highlights */}
                <div className="space-y-2 mb-6">
                  <div className="text-xs uppercase font-semibold text-slate-400 font-mono">Highlights:</div>
                  <div className="grid grid-cols-2 gap-2">
                    {projects[1].highlights.map((h) => (
                      <div key={h} className="flex items-center gap-1.5 text-xs text-slate-300">
                        <Check className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technology */}
                <div>
                  <div className="text-xs uppercase font-semibold text-slate-400 font-mono mb-2">Technology:</div>
                  <div className="flex flex-wrap gap-1.5">
                    {projects[1].technologies.map((t) => (
                      <span key={t} className="px-2.5 py-0.5 rounded bg-slate-900 text-slate-300 border border-slate-800 text-[11px] font-mono">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="p-6 pt-0 mt-2 flex items-center gap-3">
              <button
                onClick={() => setSelectedProject(projects[1])}
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-500 text-white font-semibold text-xs transition-colors shadow-md cursor-pointer"
              >
                <span>View Project</span>
                <ChevronRight className="w-4 h-4" />
              </button>

              <button
                disabled
                className="px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-500 text-xs font-medium cursor-not-allowed flex items-center gap-1.5"
                title="Repository link can be configured"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </button>
            </div>
          </motion.div>

          {/* Project 3: Text Summarization with Python */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass-card rounded-2xl border border-slate-800 flex flex-col justify-between overflow-hidden group hover:border-emerald-500/50 transition-all duration-300 shadow-xl"
          >
            <div>
              {/* Project Card Header: LONG TEXT -> NLP PROCESSING -> SHORT SUMMARY */}
              <div className="h-48 bg-gradient-to-br from-slate-900 via-[#101c24] to-emerald-950/30 p-5 relative border-b border-slate-800/80 flex flex-col justify-between overflow-hidden">
                <div className="flex items-center justify-between z-10">
                  <span className="text-[11px] font-mono font-semibold px-2.5 py-1 rounded bg-emerald-950/80 text-emerald-300 border border-emerald-800/60">
                    NLP Pipeline
                  </span>
                  <div className="p-1.5 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    <FileText className="w-4 h-4" />
                  </div>
                </div>

                {/* Visual Pipeline */}
                <div className="relative z-10 my-auto py-1">
                  <div className="flex items-center justify-between gap-1 text-[10px] font-mono text-center">
                    <div className="flex-1 bg-slate-900/90 border border-slate-800 p-1.5 rounded-lg text-slate-300">
                      <span className="text-[9px] text-slate-500 block">INPUT</span>
                      <span className="font-bold">LONG TEXT</span>
                    </div>
                    
                    <ArrowRight className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    
                    <div className="flex-1 bg-emerald-950/60 border border-emerald-800/60 p-1.5 rounded-lg text-emerald-300">
                      <span className="text-[9px] text-emerald-400/70 block">NLTK</span>
                      <span className="font-bold">NLP PROC.</span>
                    </div>
                    
                    <ArrowRight className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    
                    <div className="flex-1 bg-slate-900/90 border border-slate-800 p-1.5 rounded-lg text-cyan-300">
                      <span className="text-[9px] text-slate-500 block">OUTPUT</span>
                      <span className="font-bold">SUMMARY</span>
                    </div>
                  </div>
                </div>

                <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
              </div>

              {/* Body */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors font-heading leading-snug mb-2">
                  {projects[2].title}
                </h3>
                
                <p className="text-slate-300 text-sm leading-relaxed mb-5 font-normal">
                  {projects[2].description}
                </p>

                {/* Highlights */}
                <div className="space-y-2 mb-6">
                  <div className="text-xs uppercase font-semibold text-slate-400 font-mono">Highlights:</div>
                  <div className="grid grid-cols-2 gap-2">
                    {projects[2].highlights.map((h) => (
                      <div key={h} className="flex items-center gap-1.5 text-xs text-slate-300">
                        <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technology */}
                <div>
                  <div className="text-xs uppercase font-semibold text-slate-400 font-mono mb-2">Technology:</div>
                  <div className="flex flex-wrap gap-1.5">
                    {projects[2].technologies.map((t) => (
                      <span key={t} className="px-2.5 py-0.5 rounded bg-slate-900 text-slate-300 border border-slate-800 text-[11px] font-mono">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="p-6 pt-0 mt-2 flex items-center gap-3">
              <button
                onClick={() => setSelectedProject(projects[2])}
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs transition-colors shadow-md cursor-pointer"
              >
                <span>View Project</span>
                <ChevronRight className="w-4 h-4" />
              </button>

              <button
                disabled
                className="px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-500 text-xs font-medium cursor-not-allowed flex items-center gap-1.5"
                title="Repository link can be configured"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </button>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Project Detail Modal */}
      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />

    </section>
  );
};

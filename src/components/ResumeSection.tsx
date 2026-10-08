import React from 'react';
import { motion } from 'framer-motion';
import { 
  FileText, 
  Download, 
  Eye, 
  CheckCircle2,
  ExternalLink
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolio';

interface ResumeSectionProps {
  onOpenResume: () => void;
}

export const ResumeSection: React.FC<ResumeSectionProps> = ({ onOpenResume }) => {
  const { personal } = PORTFOLIO_DATA;

  return (
    <section id="resume" className="py-24 relative overflow-hidden bg-slate-950/40 border-t border-slate-900">
      
      {/* Background Lighting */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-blue-600/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-950/50 border border-blue-800/40 text-blue-400 text-xs font-semibold tracking-wider uppercase mb-3">
            <FileText className="w-3.5 h-3.5 text-blue-400" />
            <span>Curriculum Vitae</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Download My Resume
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-xl">
            Access the complete verified professional profile containing technical competencies, industry experience, publications, and credentials.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mt-3" />
        </div>

        {/* Resume Preview Interactive Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass-card p-6 sm:p-10 rounded-2xl border border-slate-800 hover:border-blue-500/40 transition-all shadow-2xl relative overflow-hidden group"
        >
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Visual Miniature Preview */}
            <div className="md:col-span-5 flex justify-center">
              <div className="w-full max-w-[280px] bg-[#090e1a] rounded-xl border border-slate-700/80 p-5 shadow-2xl relative overflow-hidden group-hover:shadow-blue-500/10 transition-shadow">
                
                {/* Header Miniature */}
                <div className="border-b border-slate-800 pb-3 mb-3">
                  <div className="h-3 w-28 bg-blue-400/80 rounded-sm mb-1.5" />
                  <div className="h-2 w-36 bg-slate-600 rounded-sm" />
                </div>

                {/* Section blocks */}
                <div className="space-y-3">
                  <div>
                    <div className="h-2 w-20 bg-emerald-400/70 rounded-xs mb-1" />
                    <div className="h-1.5 w-full bg-slate-800 rounded-xs mb-0.5" />
                    <div className="h-1.5 w-4/5 bg-slate-800 rounded-xs" />
                  </div>

                  <div>
                    <div className="h-2 w-24 bg-indigo-400/60 rounded-xs mb-1" />
                    <div className="h-1.5 w-full bg-slate-800 rounded-xs mb-0.5" />
                    <div className="h-1.5 w-3/4 bg-slate-800 rounded-xs" />
                  </div>

                  <div>
                    <div className="h-2 w-20 bg-cyan-400/60 rounded-xs mb-1" />
                    <div className="h-1.5 w-full bg-slate-800 rounded-xs mb-0.5" />
                    <div className="h-1.5 w-2/3 bg-slate-800 rounded-xs" />
                  </div>
                </div>

                {/* Stamp */}
                <div className="absolute bottom-3 right-3 px-2 py-0.5 rounded bg-blue-950/90 text-blue-400 border border-blue-800/80 text-[9px] font-mono font-bold">
                  UPDATED PDF
                </div>
              </div>
            </div>

            {/* Right Column: Actions & Details */}
            <div className="md:col-span-7 flex flex-col justify-between space-y-6">
              <div>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-emerald-950/60 border border-emerald-800/50 text-emerald-400 text-xs font-semibold mb-2">
                  <span>Current: Associate Security Engineer @ Techard Solutions</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white font-heading">
                  {personal.name}
                </h3>
                <p className="text-sm font-mono text-blue-400 mt-1">
                  AI/ML Professional | Security Engineer | Python Developer
                </p>

                <div className="mt-4 space-y-2 text-xs sm:text-sm text-slate-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Experience across Techard Solutions, Emglitz, Magora & Nexus</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Published Journal Paper in IJRPR (Vol 7, Issue 4 | Apr 2026)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Verified Academic Performance (80% B.Sc AI/ML) & 6 Certifications</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-slate-800">
                <a
                  href="/shahal_resume.pdf"
                  download="Najeeb_Shahal_Resume.pdf"
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs sm:text-sm shadow-lg shadow-blue-600/25 transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
                >
                  <Download className="w-4 h-4" />
                  <span>Download PDF Resume</span>
                </a>

                <button
                  onClick={onOpenResume}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-white font-semibold text-xs sm:text-sm border border-slate-700 transition-colors cursor-pointer"
                >
                  <Eye className="w-4 h-4 text-blue-400" />
                  <span>Preview & Print</span>
                </button>

                <a
                  href="/shahal_resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 px-4 py-3 rounded-xl bg-slate-900/60 hover:bg-slate-800 text-slate-300 hover:text-white font-medium text-xs border border-slate-800 transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Open in Tab</span>
                </a>
              </div>

            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

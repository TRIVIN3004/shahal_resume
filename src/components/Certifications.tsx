import React from 'react';
import { motion } from 'framer-motion';
import { 
  Award, 
  Sparkles, 
  Globe, 
  Cpu, 
  Brain, 
  BarChart, 
  Network
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolio';

export const Certifications: React.FC = () => {
  const { certifications } = PORTFOLIO_DATA;

  const courseraCerts = certifications.filter(c => c.issuer === 'Coursera');
  const voisCerts = certifications.filter(c => c.issuer === 'VOIS');

  const getCertIcon = (name: string) => {
    switch (name) {
      case 'Globe': return Globe;
      case 'Cpu': return Cpu;
      case 'Sparkles': return Sparkles;
      case 'Brain': return Brain;
      case 'BarChart': return BarChart;
      case 'Network': return Network;
      default: return Award;
    }
  };

  return (
    <section id="certifications" className="py-24 relative overflow-hidden bg-slate-950/40 border-t border-slate-900">
      
      {/* Background Lighting */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 right-10 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-950/50 border border-blue-800/40 text-blue-400 text-xs font-semibold tracking-wider uppercase mb-3">
            <Award className="w-3.5 h-3.5 text-blue-400" />
            <span>Professional Learning</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Certifications & Specialized Courses
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
            Verified course certifications completed through Coursera and VOIS across Artificial Intelligence, Generative AI, Neural Networks, and Data Analysis.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mt-3" />
        </div>

        {/* Two Groups: Coursera & VOIS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Coursera Certifications */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5 mb-2">
              <div className="w-2.5 h-2.5 rounded-full bg-blue-500" />
              <h3 className="text-lg font-bold text-white font-heading">Coursera</h3>
              <span className="text-xs font-mono text-blue-400 bg-blue-950/60 border border-blue-800/50 px-2 py-0.5 rounded">
                3 Certifications
              </span>
            </div>

            <div className="space-y-3">
              {courseraCerts.map((cert, idx) => {
                const Icon = getCertIcon(cert.iconName);
                return (
                  <motion.div
                    key={cert.id}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: idx * 0.1 }}
                    className="glass-card p-4 sm:p-5 rounded-xl border border-slate-800 hover:border-blue-500/40 transition-all flex items-center justify-between gap-4 group"
                  >
                    <div className="flex items-center gap-3.5">
                      <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20 group-hover:scale-105 transition-transform shrink-0">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-sm sm:text-base font-bold text-white leading-snug group-hover:text-blue-300 transition-colors">
                          {cert.title}
                        </h4>
                        <span className="text-xs text-slate-400 mt-0.5 block">
                          Category: {cert.category}
                        </span>
                      </div>
                    </div>

                    <span className="text-[11px] font-mono font-semibold px-2.5 py-1 rounded bg-slate-900 text-slate-300 border border-slate-800 shrink-0">
                      Verified
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* VOIS Certifications */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5 mb-2">
              <div className="w-2.5 h-2.5 rounded-full bg-purple-500" />
              <h3 className="text-lg font-bold text-white font-heading">VOIS</h3>
              <span className="text-xs font-mono text-purple-400 bg-purple-950/60 border border-purple-800/50 px-2 py-0.5 rounded">
                3 Certifications
              </span>
            </div>

            <div className="space-y-3">
              {voisCerts.map((cert, idx) => {
                const Icon = getCertIcon(cert.iconName);
                return (
                  <motion.div
                    key={cert.id}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: idx * 0.1 }}
                    className="glass-card p-4 sm:p-5 rounded-xl border border-slate-800 hover:border-purple-500/40 transition-all flex items-center justify-between gap-4 group"
                  >
                    <div className="flex items-center gap-3.5">
                      <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20 group-hover:scale-105 transition-transform shrink-0">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-sm sm:text-base font-bold text-white leading-snug group-hover:text-purple-300 transition-colors">
                          {cert.title}
                        </h4>
                        <span className="text-xs text-slate-400 mt-0.5 block">
                          Category: {cert.category}
                        </span>
                      </div>
                    </div>

                    <span className="text-[11px] font-mono font-semibold px-2.5 py-1 rounded bg-slate-900 text-slate-300 border border-slate-800 shrink-0">
                      Verified
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

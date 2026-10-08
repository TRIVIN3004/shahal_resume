import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, 
  Database, 
  Brain, 
  Cpu, 
  Sparkles, 
  Users, 
  Sheet,
  FileCode,
  Terminal
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolio';

export const Skills: React.FC = () => {
  const { skills } = PORTFOLIO_DATA;

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-slate-950/40 border-y border-slate-900">
      
      {/* Background Subtle Mesh */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-purple-600/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-950/50 border border-blue-800/40 text-blue-400 text-xs font-semibold tracking-wider uppercase mb-3">
            <Cpu className="w-3.5 h-3.5 text-blue-400" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Technical Skills
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
            A comprehensive overview of programming languages, machine learning frameworks, data processing toolkits, and professional competencies.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mt-3" />
        </div>

        {/* Structured Technical Skills Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Programming Languages */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="glass-card p-6 rounded-2xl border border-slate-800 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-2.5 mb-5 pb-3 border-b border-slate-800/80">
                <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400 border border-blue-500/20">
                  <Code2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white font-heading">Programming</h3>
                  <span className="text-xs text-slate-400">Core software languages</span>
                </div>
              </div>

              <div className="space-y-3">
                {skills.programming.map((skill) => (
                  <div 
                    key={skill.name} 
                    className="flex items-center justify-between p-3 rounded-xl bg-slate-900/80 border border-slate-800/80 hover:border-blue-500/40 transition-colors"
                  >
                    <div className="flex items-center gap-2.5">
                      <Terminal className="w-4 h-4 text-blue-400" />
                      <span className="text-sm font-semibold text-white font-mono">{skill.name}</span>
                    </div>
                    <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded bg-blue-950 text-blue-400 border border-blue-800/60">
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-3 border-t border-slate-800/60 text-xs text-slate-400">
              Primary strength in Python-based development & algorithms.
            </div>
          </motion.div>

          {/* Data / AI Stack */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="glass-card p-6 rounded-2xl border border-slate-800 md:col-span-2 lg:col-span-2 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-5 pb-3 border-b border-slate-800/80">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                    <Brain className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white font-heading">Data Science & AI Libraries</h3>
                    <span className="text-xs text-slate-400">Machine learning, NLP & analysis toolkits</span>
                  </div>
                </div>
                <span className="text-xs text-indigo-400 font-mono px-2.5 py-1 rounded bg-indigo-950/60 border border-indigo-800/50">
                  {skills.dataAi.length} Technologies
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {skills.dataAi.map((skill) => (
                  <div 
                    key={skill.name} 
                    className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-900/80 border border-slate-800/80 hover:border-indigo-500/40 hover:bg-slate-850 transition-all"
                  >
                    <div className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.6)] shrink-0" />
                    <span className="text-xs sm:text-sm font-semibold text-slate-200 hover:text-white font-mono">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-3 border-t border-slate-800/60 flex items-center justify-between text-xs text-slate-400">
              <span>Applied in EDA, classification models, NLP summarizers & anomaly detection</span>
            </div>
          </motion.div>

          {/* Database & Storage */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="glass-card p-6 rounded-2xl border border-slate-800 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-2.5 mb-5 pb-3 border-b border-slate-800/80">
                <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  <Database className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white font-heading">Database</h3>
                  <span className="text-xs text-slate-400">Data persistence & queries</span>
                </div>
              </div>

              <div className="space-y-3">
                {skills.database.map((db) => (
                  <div 
                    key={db.name} 
                    className="flex items-center justify-between p-3 rounded-xl bg-slate-900/80 border border-slate-800/80 hover:border-emerald-500/40 transition-colors"
                  >
                    <div className="flex items-center gap-2.5">
                      <Database className="w-4 h-4 text-emerald-400" />
                      <span className="text-sm font-semibold text-white font-mono">{db.name}</span>
                    </div>
                    <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-800/60">
                      RDBMS
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-3 border-t border-slate-800/60 text-xs text-slate-400">
              Relational schemas, query optimization and Python DB connectors.
            </div>
          </motion.div>

          {/* Other Tools */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="glass-card p-6 rounded-2xl border border-slate-800 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-2.5 mb-5 pb-3 border-b border-slate-800/80">
                <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400 border border-amber-500/20">
                  <Sheet className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white font-heading">Productivity Tools</h3>
                  <span className="text-xs text-slate-400">Documentation & data sheets</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {skills.otherTools.map((tool) => (
                  <div 
                    key={tool.name} 
                    className="flex items-center gap-2 p-3 rounded-xl bg-slate-900/80 border border-slate-800/80 hover:border-amber-500/40 transition-colors"
                  >
                    <FileCode className="w-4 h-4 text-amber-400" />
                    <span className="text-xs sm:text-sm font-semibold text-white font-mono">{tool.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-3 border-t border-slate-800/60 text-xs text-slate-400">
              Documentation reporting and tabular data preparation.
            </div>
          </motion.div>

          {/* Soft Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.25 }}
            className="glass-card p-6 rounded-2xl border border-slate-800 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-2.5 mb-5 pb-3 border-b border-slate-800/80">
                <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400 border border-purple-500/20">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white font-heading">Professional Soft Skills</h3>
                  <span className="text-xs text-slate-400">Collaboration & problem solving</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2.5">
                {skills.softSkills.map((soft) => (
                  <div 
                    key={soft.name} 
                    className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800/80 hover:border-purple-500/40 transition-colors"
                  >
                    <div className="text-xs font-bold text-white flex items-center gap-1.5">
                      <Sparkles className="w-3 h-3 text-purple-400" />
                      <span>{soft.name}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-3 border-t border-slate-800/60 text-xs text-slate-400">
              Clear communication, agile adaptability and structured teamwork.
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

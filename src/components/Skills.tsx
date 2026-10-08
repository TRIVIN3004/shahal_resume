import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, 
  Database, 
  Brain, 
  Cpu, 
  FileText, 
  Layers, 
  Network, 
  BarChart3, 
  BookOpen, 
  Sparkles, 
  Users, 
  Sheet,
  FileCode,
  Terminal,
  Share2
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolio';

export const Skills: React.FC = () => {
  const { skills } = PORTFOLIO_DATA;

  const ecosystemNodes = [
    { name: "Python", category: "Core Language", icon: Terminal, angle: 0, distance: 130 },
    { name: "Machine Learning", category: "AI Models", icon: Cpu, angle: 40, distance: 140 },
    { name: "NLP", category: "Text Processing", icon: FileText, angle: 80, distance: 130 },
    { name: "Pandas", category: "Data Manipulation", icon: Layers, angle: 120, distance: 145 },
    { name: "Scikit-learn", category: "ML Algorithms", icon: Network, angle: 160, distance: 135 },
    { name: "NLTK", category: "Linguistics", icon: BookOpen, angle: 200, distance: 140 },
    { name: "MySQL", category: "Relational DB", icon: Database, angle: 240, distance: 135 },
    { name: "C++", category: "Systems", icon: Code2, angle: 280, distance: 140 },
    { name: "Data Analysis", category: "Insights & EDA", icon: BarChart3, angle: 320, distance: 135 },
  ];

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
            Technical Skills & Ecosystem
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
            A comprehensive overview of programming languages, machine learning frameworks, data processing toolkits, and professional competencies.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mt-3" />
        </div>

        {/* Top Feature: Interactive Technology Ecosystem */}
        <div className="mb-16 glass-card p-6 sm:p-10 rounded-2xl border border-slate-800 relative overflow-hidden">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
            <div>
              <div className="flex items-center gap-2">
                <Share2 className="w-4 h-4 text-cyan-400" />
                <h3 className="text-lg font-bold text-white font-heading">Technology Ecosystem Network</h3>
              </div>
              <p className="text-xs text-slate-400 mt-1">
                Integrated architecture centered on Artificial Intelligence & Machine Learning
              </p>
            </div>
            <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-blue-950/80 text-blue-400 border border-blue-800/60">
              Interactive Hub
            </span>
          </div>

          {/* Visualization Container */}
          <div className="relative w-full h-[360px] sm:h-[400px] flex items-center justify-center">
            
            {/* Center Node */}
            <motion.div 
              animate={{ 
                boxShadow: [
                  "0 0 20px 2px rgba(56, 189, 248, 0.2)",
                  "0 0 35px 6px rgba(99, 102, 241, 0.3)",
                  "0 0 20px 2px rgba(56, 189, 248, 0.2)"
                ] 
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="z-20 w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 p-[1.5px] flex items-center justify-center shadow-2xl cursor-default"
            >
              <div className="w-full h-full bg-slate-950 rounded-2xl flex flex-col items-center justify-center p-2 text-center">
                <Brain className="w-6 h-6 text-cyan-300 mb-1 animate-pulse" />
                <span className="text-xs font-extrabold text-white font-heading tracking-wide">AI / ML</span>
                <span className="text-[9px] text-cyan-300/80 font-mono mt-0.5">Core Engine</span>
              </div>
            </motion.div>

            {/* Orbit rings */}
            <div className="absolute w-[260px] h-[260px] sm:w-[290px] sm:h-[290px] rounded-full border border-slate-800/80 pointer-events-none" />
            <div className="absolute w-[340px] h-[340px] sm:w-[370px] sm:h-[370px] rounded-full border border-dashed border-slate-800/60 pointer-events-none" />

            {/* Orbital Connected Nodes */}
            {ecosystemNodes.map((node, i) => {
              const Icon = node.icon;
              const rad = (node.angle * Math.PI) / 180;
              const radius = node.distance;
              const x = Math.cos(rad) * radius;
              const y = Math.sin(rad) * radius;

              return (
                <motion.div
                  key={node.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  style={{
                    transform: `translate(${x}px, ${y}px)`,
                  }}
                  className="absolute z-10 group"
                >
                  <div className="relative flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-800 hover:border-cyan-500/50 shadow-md hover:shadow-cyan-500/10 transition-all duration-200 cursor-pointer hover:scale-110">
                    <Icon className="w-3.5 h-3.5 text-cyan-400 group-hover:text-cyan-300" />
                    <span className="text-xs font-semibold text-slate-200 group-hover:text-white font-mono whitespace-nowrap">
                      {node.name}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <div className="text-center text-xs text-slate-400 mt-2 font-mono">
            Hover over connected technologies to explore the interconnected toolset
          </div>
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

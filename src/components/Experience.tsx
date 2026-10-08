import React from 'react';
import { motion } from 'framer-motion';
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  Bot, 
  Layers, 
  Code2, 
  CheckCircle2, 
  Building2
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolio';

export const Experience: React.FC = () => {
  const { experience } = PORTFOLIO_DATA;

  const getRoleIcon = (index: number) => {
    switch (index) {
      case 0: return Bot;
      case 1: return Layers;
      case 2: return Code2;
      default: return Briefcase;
    }
  };

  const getRoleBadgeColor = (index: number) => {
    switch (index) {
      case 0: return "bg-blue-950 text-blue-400 border-blue-800/60";
      case 1: return "bg-purple-950 text-purple-400 border-purple-800/60";
      case 2: return "bg-cyan-950 text-cyan-400 border-cyan-800/60";
      default: return "bg-slate-900 text-slate-300 border-slate-700";
    }
  };

  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-slate-950/30 border-t border-slate-900">
      
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-950/50 border border-blue-800/40 text-blue-400 text-xs font-semibold tracking-wider uppercase mb-3">
            <Briefcase className="w-3.5 h-3.5 text-blue-400" />
            <span>Practical Industry Exposure</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Internship Experience
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
            Hands-on technical contributions across robotics automation, UI/UX architecture, and Python web application development.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mt-3" />
        </div>

        {/* Vertical Timeline */}
        <div className="relative pl-6 sm:pl-10 before:absolute before:left-2 sm:before:left-4 before:top-2 before:bottom-2 before:w-0.5 before:bg-gradient-to-b before:from-blue-500 before:via-indigo-500 before:to-purple-500">
          
          {experience.map((exp, idx) => {
            const Icon = getRoleIcon(idx);
            const badgeColor = getRoleBadgeColor(idx);

            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="relative mb-12 last:mb-0 group"
              >
                {/* Timeline Dot with Glow */}
                <div className="absolute -left-[30px] sm:-left-[46px] top-1.5 w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-slate-900 border-2 border-blue-500 shadow-md shadow-blue-500/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <div className="w-2 h-2 rounded-full bg-cyan-400" />
                </div>

                {/* Experience Card */}
                <div className="glass-card p-6 sm:p-8 rounded-2xl border border-slate-800 group-hover:border-slate-700 transition-all shadow-xl">
                  
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 pb-4 border-b border-slate-800/80">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <div className="p-1.5 rounded-md bg-blue-500/10 text-blue-400 border border-blue-500/20">
                          <Icon className="w-4 h-4" />
                        </div>
                        <h3 className="text-lg sm:text-xl font-bold text-white font-heading">
                          {exp.role}
                        </h3>
                      </div>
                      
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-300">
                        <span className="font-semibold text-blue-400 flex items-center gap-1">
                          <Building2 className="w-3.5 h-3.5 text-slate-400" />
                          {exp.company}
                        </span>
                        <span className="flex items-center gap-1 text-slate-400">
                          <MapPin className="w-3 h-3 text-slate-500" />
                          {exp.location}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className={`text-xs font-mono px-3 py-1 rounded-full border ${badgeColor} flex items-center gap-1.5`}>
                        <Calendar className="w-3.5 h-3.5" />
                        {exp.period}
                      </span>
                    </div>
                  </div>

                  {/* Bullet Responsibilities */}
                  <div className="space-y-2.5 mb-6">
                    {exp.description.map((point, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-sm text-slate-300 leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-800/60">
                    {exp.tags.map((tag) => (
                      <span key={tag} className="text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-slate-900 text-slate-400 border border-slate-800">
                        #{tag}
                      </span>
                    ))}
                  </div>

                </div>
              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
};

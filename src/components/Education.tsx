import React from 'react';
import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  School, 
  Calendar, 
  MapPin, 
  Award 
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolio';

export const Education: React.FC = () => {
  const { education } = PORTFOLIO_DATA;

  return (
    <section id="education" className="py-24 relative overflow-hidden">
      
      {/* Background Lighting */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-10 left-1/3 w-80 h-80 bg-indigo-600/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-950/50 border border-blue-800/40 text-blue-400 text-xs font-semibold tracking-wider uppercase mb-3">
            <GraduationCap className="w-3.5 h-3.5 text-blue-400" />
            <span>Academic Milestones</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education Timeline
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
            Formal academic background in Artificial Intelligence & Machine Learning with strong academic excellence.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mt-3" />
        </div>

        {/* Timeline Grid */}
        <div className="space-y-8">
          
          {education.map((item, idx) => {
            const isDegree = idx === 0;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.15 }}
                className="glass-card p-6 sm:p-8 rounded-2xl border border-slate-800 hover:border-blue-500/40 transition-all shadow-xl group"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
                  <div className="flex items-center gap-3">
                    <div className={`p-3 rounded-xl border ${
                      isDegree 
                        ? 'bg-blue-500/10 text-blue-400 border-blue-500/20' 
                        : 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20'
                    }`}>
                      {isDegree ? <GraduationCap className="w-6 h-6" /> : <School className="w-6 h-6" />}
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-blue-300 transition-colors font-heading">
                        {item.degree}
                      </h3>
                      <div className="text-sm font-medium text-slate-300 mt-0.5">
                        {item.institution}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono px-3 py-1 rounded-full bg-slate-900 text-slate-300 border border-slate-800 flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-blue-400" />
                      {item.period}
                    </span>
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-emerald-950 text-emerald-400 border border-emerald-800/60 flex items-center gap-1">
                      <Award className="w-3.5 h-3.5" />
                      Score: {item.score}
                    </span>
                  </div>
                </div>

                <div className="mt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-slate-400">
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-slate-500" />
                    <span>Location: {item.location}</span>
                  </div>
                  {item.details && (
                    <div className="text-slate-300">
                      {item.details}
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
};

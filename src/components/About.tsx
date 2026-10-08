import React from 'react';
import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  MapPin, 
  Calendar, 
  Award, 
  Sparkles, 
  CheckCircle, 
  Bot, 
  Layers, 
  Code2, 
  Cpu
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolio';

export const About: React.FC = () => {
  const { personal, education } = PORTFOLIO_DATA;

  const highlights = [
    { title: "Machine Learning & AI", desc: "Supervised algorithms, model comparison & prediction", icon: Cpu },
    { title: "Python Engineering", desc: "Data pipelines with Pandas, Scikit-learn & NLTK", icon: Code2 },
    { title: "Robotics & IoT", desc: "Hardware-software integration and automation workflows", icon: Bot },
    { title: "User Experience & Web", desc: "Interactive wireframes and clean full-stack concepts", icon: Layers },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-950/50 border border-blue-800/40 text-blue-400 text-xs font-semibold tracking-wider uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            <span>Profile Overview</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            About Me
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mt-3" />
        </div>

        {/* Two-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Bio & Core Competencies */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 flex flex-col space-y-6"
          >
            <div className="glass-card p-6 sm:p-8 rounded-2xl border border-slate-800 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/5 rounded-full blur-2xl pointer-events-none" />
              
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <span>Passionate AI/ML & Python Developer</span>
              </h3>
              
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-6 font-normal">
                {personal.aboutIntro}
              </p>

              <div className="border-t border-slate-800 pt-6">
                <h4 className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-4">
                  Core Practical Exposure
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {highlights.map((item, idx) => {
                    const Icon = item.icon;
                    return (
                      <div 
                        key={idx} 
                        className="flex items-start gap-3 p-3 rounded-xl bg-slate-900/70 border border-slate-800/80 hover:border-slate-700 transition-colors"
                      >
                        <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400 shrink-0">
                          <Icon className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-white">{item.title}</div>
                          <div className="text-xs text-slate-400 mt-0.5">{item.desc}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Compact Education Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-5 flex flex-col space-y-4"
          >
            <div className="glass-card p-6 sm:p-7 rounded-2xl border border-slate-800 shadow-xl">
              
              <div className="flex items-center justify-between pb-5 border-b border-slate-800">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-white">Academic Credentials</h3>
                </div>
                <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-slate-800 text-slate-300 border border-slate-700">
                  Verified Record
                </span>
              </div>

              {/* Education List */}
              <div className="mt-6 space-y-6">
                
                {/* College Education */}
                <div className="relative pl-6 before:absolute before:left-0 before:top-1.5 before:bottom-0 before:w-0.5 before:bg-gradient-to-b before:from-blue-500 before:to-indigo-500">
                  <div className="absolute left-[-4px] top-1 w-2.5 h-2.5 rounded-full bg-blue-400 ring-4 ring-[#0b0f19]" />
                  
                  <div className="flex items-start justify-between gap-2">
                    <span className="text-xs font-semibold text-blue-400 flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      {education[0].period}
                    </span>
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      <Award className="w-3 h-3" />
                      {education[0].score}
                    </span>
                  </div>

                  <h4 className="text-base font-bold text-white mt-1.5 leading-snug">
                    {education[0].degree}
                  </h4>
                  
                  <p className="text-sm text-slate-300 font-medium mt-1">
                    {education[0].institution}
                  </p>

                  <div className="flex items-center gap-1 text-xs text-slate-400 mt-1.5">
                    <MapPin className="w-3.5 h-3.5 text-slate-500" />
                    <span>{education[0].location}</span>
                  </div>
                </div>

                {/* Higher Secondary */}
                <div className="relative pl-6 before:absolute before:left-0 before:top-1.5 before:bottom-0 before:w-0.5 before:bg-slate-700">
                  <div className="absolute left-[-4px] top-1 w-2.5 h-2.5 rounded-full bg-slate-500 ring-4 ring-[#0b0f19]" />
                  
                  <div className="flex items-start justify-between gap-2">
                    <span className="text-xs font-semibold text-slate-400 flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      {education[1].period}
                    </span>
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs font-bold bg-slate-800 text-slate-300 border border-slate-700">
                      <Award className="w-3 h-3" />
                      {education[1].score}
                    </span>
                  </div>

                  <h4 className="text-base font-bold text-white mt-1.5 leading-snug">
                    {education[1].degree}
                  </h4>
                  
                  <p className="text-sm text-slate-300 font-medium mt-1">
                    {education[1].institution}
                  </p>

                  <div className="flex items-center gap-1 text-xs text-slate-400 mt-1.5">
                    <MapPin className="w-3.5 h-3.5 text-slate-500" />
                    <span>{education[1].location}</span>
                  </div>
                </div>

              </div>

              {/* Quick Summary Note */}
              <div className="mt-6 pt-5 border-t border-slate-800 flex items-center gap-2 text-xs text-slate-400">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Consistently high academic track record in AI/ML curriculum</span>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

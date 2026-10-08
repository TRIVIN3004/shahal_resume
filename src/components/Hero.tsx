import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  FileText, 
  Sparkles, 
  Brain, 
  Terminal, 
  ShieldCheck, 
  MapPin, 
  CheckCircle2,
  Mail
} from 'lucide-react';
import { LinkedinIcon } from './Icons';
import { PORTFOLIO_DATA } from '../data/portfolio';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const { personal } = PORTFOLIO_DATA;

  const scrollToProjects = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.querySelector('#projects');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-[92vh] pt-28 pb-16 md:py-36 flex items-center justify-center overflow-hidden"
    >
      {/* Background Decorative Tech Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-blue-600/10 via-indigo-600/10 to-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute inset-0 grid-bg opacity-40" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            {/* Small Label */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/60 border border-blue-800/50 text-blue-400 text-xs font-semibold tracking-wider uppercase mb-5 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
              <span>{personal.tagline}</span>
            </div>

            {/* Large Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15] mb-4">
              Hi, I'm <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-300 bg-clip-text text-transparent">{personal.name}</span>.
            </h1>

            {/* Second Line */}
            <h2 className="text-xl sm:text-2xl lg:text-[26px] font-semibold text-slate-200 leading-snug mb-5 font-heading">
              {personal.heroSubheading}
            </h2>

            {/* Short Description */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mb-8 font-normal">
              {personal.shortBio}
            </p>

            {/* Call To Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-8">
              <a
                href="#projects"
                onClick={scrollToProjects}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenResume}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 hover:text-white font-semibold text-sm border border-slate-700/80 hover:border-slate-600 shadow-sm transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <FileText className="w-4 h-4 text-blue-400" />
                <span>View & Download CV</span>
              </button>

              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl bg-slate-900/60 hover:bg-[#0077b5]/20 text-slate-300 hover:text-[#0077b5] font-medium text-sm border border-slate-800 hover:border-[#0077b5]/40 transition-all duration-200 cursor-pointer"
                title="View LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4" />
                <span className="hidden sm:inline">LinkedIn</span>
              </a>
            </div>

            {/* Quick Status / Location Pill */}
            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 border-t border-slate-800/80 pt-5 w-full">
              <div className="flex items-center gap-1.5 text-emerald-400 font-medium">
                <CheckCircle2 className="w-4 h-4" />
                <span>Associate Security Engineer @ Techard Solutions</span>
              </div>
              <span className="text-slate-600">•</span>
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-slate-400" />
                <span>{personal.location}</span>
              </div>
              <span className="text-slate-600">•</span>
              <a 
                href={`mailto:${personal.email}`} 
                className="flex items-center gap-1.5 hover:text-blue-400 transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-slate-400" />
                <span>{personal.email}</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Profile Image with Floating Elements */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[340px] sm:max-w-[380px] p-4">
              
              {/* Subtle Tech Glow behind Portrait Frame */}
              <div className="absolute inset-4 rounded-3xl bg-gradient-to-tr from-blue-600/20 via-indigo-500/20 to-cyan-400/20 blur-2xl -z-10 opacity-75" />

              {/* Main Portrait Frame */}
              <div className="relative rounded-3xl p-2 bg-gradient-to-b from-slate-700/60 via-slate-800/40 to-slate-900/80 border border-slate-700/60 shadow-2xl backdrop-blur-sm group">
                <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-slate-900 border border-slate-800/90">
                  <img
                    src="/profile.jpg"
                    alt="Najeeb Shahal S - AI & ML Developer"
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                    loading="eager"
                  />
                  
                  {/* Subtle edge overlay */}
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10 pointer-events-none" />
                </div>
              </div>

              {/* Floating Badge 1: AI / ML */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="absolute -top-1 -left-2 sm:-left-6 glass-panel px-3.5 py-2 rounded-xl shadow-xl flex items-center gap-2.5 border border-blue-500/30 hover:border-blue-400 transition-all hover:scale-105"
              >
                <div className="w-7 h-7 rounded-lg bg-blue-600/20 text-blue-400 flex items-center justify-center border border-blue-500/30">
                  <Brain className="w-4 h-4" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase font-semibold text-slate-400 tracking-wider">Domain</span>
                  <span className="text-xs font-bold text-white font-mono">AI / ML</span>
                </div>
              </motion.div>

              {/* Floating Badge 2: Security */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="absolute top-1/2 -right-3 sm:-right-6 -translate-y-1/2 glass-panel px-3.5 py-2 rounded-xl shadow-xl flex items-center gap-2.5 border border-emerald-500/30 hover:border-emerald-400 transition-all hover:scale-105"
              >
                <div className="w-7 h-7 rounded-lg bg-emerald-600/20 text-emerald-400 flex items-center justify-center border border-emerald-500/30">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase font-semibold text-slate-400 tracking-wider">Role</span>
                  <span className="text-xs font-bold text-white font-mono">Security</span>
                </div>
              </motion.div>

              {/* Floating Badge 3: Python */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="absolute -bottom-2 left-6 sm:left-8 glass-panel px-3.5 py-2 rounded-xl shadow-xl flex items-center gap-2.5 border border-cyan-500/30 hover:border-cyan-400 transition-all hover:scale-105"
              >
                <div className="w-7 h-7 rounded-lg bg-cyan-600/20 text-cyan-400 flex items-center justify-center border border-cyan-500/30">
                  <Terminal className="w-4 h-4" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase font-semibold text-slate-400 tracking-wider">Core</span>
                  <span className="text-xs font-bold text-white font-mono">Python</span>
                </div>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

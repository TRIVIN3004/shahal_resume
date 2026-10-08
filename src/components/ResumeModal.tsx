import React, { useEffect } from 'react';
import { 
  X, 
  Printer, 
  FileText, 
  Mail, 
  Phone, 
  MapPin, 
  GraduationCap, 
  Briefcase, 
  Award, 
  Cpu, 
  CheckCircle2 
} from 'lucide-react';
import { LinkedinIcon } from './Icons';
import { PORTFOLIO_DATA } from '../data/portfolio';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const { personal, education, experience, research, certifications } = PORTFOLIO_DATA;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  const handlePrint = () => {
    window.print();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div 
        className="relative w-full max-w-4xl bg-[#0b1120] border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden z-10 animate-modal-in max-h-[92vh] flex flex-col"
        role="dialog"
        aria-modal="true"
      >
        {/* Top Control Bar */}
        <div className="p-4 sm:p-5 border-b border-slate-800 bg-slate-900/90 flex items-center justify-between gap-4 sticky top-0 z-20 backdrop-blur-md">
          <div className="flex items-center gap-2.5">
            <FileText className="w-5 h-5 text-blue-400" />
            <span className="text-sm font-bold text-white font-heading">
              Curriculum Vitae — {personal.name}
            </span>
          </div>

          <div className="flex items-center gap-2.5">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold shadow-md transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save as PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors cursor-pointer"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Formatted Resume Body */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-8 bg-slate-950 text-slate-200 print:bg-white print:text-black print:p-0">
          
          {/* Header */}
          <div className="border-b border-slate-800 pb-6">
            <h1 className="text-3xl font-extrabold text-white font-heading">
              {personal.name}
            </h1>
            <p className="text-sm font-semibold text-blue-400 mt-1 font-mono">
              B.Sc Artificial Intelligence & Machine Learning Student | AI/ML & Python Developer
            </p>

            <div className="flex flex-wrap items-center gap-x-5 gap-y-1.5 text-xs text-slate-400 mt-3.5">
              <span className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-slate-500" />
                {personal.phone}
              </span>
              <span className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-slate-500" />
                {personal.email}
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-slate-500" />
                {personal.location}
              </span>
              <span className="flex items-center gap-1.5">
                <LinkedinIcon className="w-3.5 h-3.5 text-slate-500" />
                <a href={personal.linkedin} target="_blank" rel="noreferrer" className="text-blue-400 hover:underline">
                  linkedin.com/in/najeebshahal07
                </a>
              </span>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h2 className="text-xs uppercase font-bold text-slate-400 tracking-wider mb-2 font-mono flex items-center gap-2">
              <Cpu className="w-3.5 h-3.5 text-blue-400" />
              <span>Professional Summary</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {personal.aboutIntro}
            </p>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs uppercase font-bold text-slate-400 tracking-wider mb-3 font-mono flex items-center gap-2">
              <GraduationCap className="w-3.5 h-3.5 text-indigo-400" />
              <span>Education</span>
            </h2>
            <div className="space-y-4">
              {education.map((edu) => (
                <div key={edu.id} className="flex flex-col sm:flex-row sm:items-start justify-between gap-1 text-xs sm:text-sm">
                  <div>
                    <div className="font-bold text-white">{edu.degree}</div>
                    <div className="text-slate-400">{edu.institution}, {edu.location}</div>
                  </div>
                  <div className="text-right sm:text-right font-mono text-xs">
                    <div className="text-blue-400 font-semibold">{edu.period}</div>
                    <div className="text-emerald-400 font-bold">Score: {edu.score}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="text-xs uppercase font-bold text-slate-400 tracking-wider mb-3 font-mono flex items-center gap-2">
              <Cpu className="w-3.5 h-3.5 text-cyan-400" />
              <span>Technical Skills</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="bg-slate-900/60 p-3 rounded-lg border border-slate-800">
                <span className="font-bold text-white block mb-1">Programming Languages:</span>
                <span className="text-slate-300">Python, C++</span>
              </div>
              <div className="bg-slate-900/60 p-3 rounded-lg border border-slate-800">
                <span className="font-bold text-white block mb-1">Data & AI Stack:</span>
                <span className="text-slate-300">Machine Learning, AI, NLP, Pandas, Scikit-learn, Matplotlib, NLTK</span>
              </div>
              <div className="bg-slate-900/60 p-3 rounded-lg border border-slate-800">
                <span className="font-bold text-white block mb-1">Databases & Tools:</span>
                <span className="text-slate-300">MySQL, MS Word, MS Excel</span>
              </div>
              <div className="bg-slate-900/60 p-3 rounded-lg border border-slate-800">
                <span className="font-bold text-white block mb-1">Soft Skills:</span>
                <span className="text-slate-300">Problem Solving, Teamwork, Communication, Adaptability</span>
              </div>
            </div>
          </div>

          {/* Internship Experience */}
          <div>
            <h2 className="text-xs uppercase font-bold text-slate-400 tracking-wider mb-3 font-mono flex items-center gap-2">
              <Briefcase className="w-3.5 h-3.5 text-purple-400" />
              <span>Internship Experience</span>
            </h2>
            <div className="space-y-4">
              {experience.map((exp) => (
                <div key={exp.id} className="border-l-2 border-slate-800 pl-4 space-y-1.5">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <div className="font-bold text-white text-sm">{exp.role} — <span className="text-blue-400 font-medium">{exp.company}</span></div>
                    <div className="text-xs font-mono text-slate-400">{exp.period}</div>
                  </div>
                  <ul className="list-disc list-inside text-xs text-slate-300 space-y-1">
                    {exp.description.map((d, i) => (
                      <li key={i}>{d}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Research & Publications */}
          <div>
            <h2 className="text-xs uppercase font-bold text-slate-400 tracking-wider mb-2 font-mono flex items-center gap-2">
              <Award className="w-3.5 h-3.5 text-cyan-400" />
              <span>Research Proposal</span>
            </h2>
            <div className="bg-slate-900/50 p-3.5 rounded-lg border border-slate-800 text-xs">
              <div className="font-bold text-white mb-1">"{research.title}"</div>
              <p className="text-slate-300">{research.description}</p>
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h2 className="text-xs uppercase font-bold text-slate-400 tracking-wider mb-2 font-mono flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>Certifications</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {certifications.map((c) => (
                <div key={c.id} className="flex items-center gap-2 bg-slate-900/40 p-2 rounded border border-slate-800/80">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                  <span className="text-slate-200">{c.title} ({c.issuer})</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-800 bg-slate-900/90 flex items-center justify-between">
          <span className="text-xs text-slate-400">
            Verified resume details for Najeeb Shahal S.
          </span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold cursor-pointer"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};

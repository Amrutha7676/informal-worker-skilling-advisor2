import React from 'react';
import { LANGUAGES } from '../../data/languages.js';
import { TrendingUp, Clock, Calendar, CheckCircle2, Award, Zap } from 'lucide-react';

export default function SkillTransitionCard({ primarySkill, currentRoleLabel, currentLang }) {
  const t = LANGUAGES[currentLang] || LANGUAGES.kn;

  if (!primarySkill) return null;

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 sm:p-6 shadow-xl space-y-6">
      
      {/* Title */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-4">
        <div>
          <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block mb-1">
            {t.skillMappingTitle}
          </span>
          <h3 className="text-xl font-extrabold text-slate-100 flex items-center gap-2">
            <Award className="w-6 h-6 text-amber-400" />
            <span>{primarySkill.targetRole}</span>
          </h3>
        </div>
        <span className="bg-amber-500/20 text-amber-300 border border-amber-500/40 text-xs font-mono px-3 py-1 rounded-full self-start sm:self-auto font-bold">
          {primarySkill.nsqfLevel}
        </span>
      </div>

      {/* Salary Leap Comparison Box */}
      <div className="bg-gradient-to-r from-slate-950 via-slate-900 to-emerald-950/60 border border-emerald-500/30 rounded-2xl p-4 sm:p-5 relative overflow-hidden">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
          
          {/* Current Salary */}
          <div className="bg-slate-800/80 p-3.5 rounded-xl border border-slate-700">
            <span className="text-[11px] text-slate-400 block">{t.currentSalary}</span>
            <div className="text-xl font-extrabold text-slate-200 mt-0.5">
              ₹{primarySkill.currentAvgIncome.toLocaleString('en-IN')}{' '}
              <span className="text-xs font-normal text-slate-400">/ month</span>
            </div>
            <span className="text-[10px] text-amber-400 mt-1 block truncate">
              Baseline: {currentRoleLabel}
            </span>
          </div>

          {/* Leap Badge Arrow */}
          <div className="text-center py-2 md:py-0">
            <div className="inline-flex flex-col items-center">
              <span className="bg-emerald-500 text-slate-950 text-xs font-black px-3 py-1 rounded-full shadow-lg shadow-emerald-950 flex items-center gap-1">
                <TrendingUp className="w-3.5 h-3.5" />
                <span>{primarySkill.salaryMultiplier}</span>
              </span>
              <span className="text-[11px] font-semibold text-emerald-400 mt-1">
                +₹{(primarySkill.targetAvgIncome - primarySkill.currentAvgIncome).toLocaleString('en-IN')} / mo leap
              </span>
            </div>
          </div>

          {/* Target Salary */}
          <div className="bg-emerald-950/60 p-3.5 rounded-xl border border-emerald-500/50">
            <span className="text-[11px] text-emerald-300 block">{t.targetSalary}</span>
            <div className="text-2xl font-black text-emerald-400 mt-0.5">
              ₹{primarySkill.targetAvgIncome.toLocaleString('en-IN')}{' '}
              <span className="text-xs font-normal text-emerald-300">/ month</span>
            </div>
            <span className="text-[10px] text-emerald-300 mt-1 block font-semibold">
              Certified Technical Role
            </span>
          </div>

        </div>

      </div>

      {/* Course Details Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        
        <div className="bg-slate-800/60 p-4 rounded-xl border border-slate-700/80">
          <div className="flex items-center space-x-2 text-amber-400 mb-1">
            <Clock className="w-4 h-4" />
            <span className="text-xs font-bold">{t.duration}</span>
          </div>
          <p className="text-sm font-extrabold text-slate-100">
            {primarySkill.durationWeeks} Weeks ({primarySkill.effort})
          </p>
        </div>

        <div className="bg-slate-800/60 p-4 rounded-xl border border-slate-700/80">
          <div className="flex items-center space-x-2 text-amber-400 mb-1">
            <Calendar className="w-4 h-4" />
            <span className="text-xs font-bold">Gig Worker Batch Timing</span>
          </div>
          <p className="text-xs font-semibold text-slate-200">
            {primarySkill.batchType}
          </p>
        </div>

        <div className="bg-slate-800/60 p-4 rounded-xl border border-slate-700/80">
          <div className="flex items-center space-x-2 text-amber-400 mb-1">
            <Zap className="w-4 h-4" />
            <span className="text-xs font-bold">Prerequisites Check</span>
          </div>
          <p className="text-xs font-semibold text-slate-200">
            {primarySkill.prerequisites}
          </p>
        </div>

      </div>

      {/* Grounded Job Market Justification */}
      <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-3">
        <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider">
          Grounded Industry Demand & Job Openings
        </h4>
        <p className="text-xs text-slate-300 leading-relaxed">
          {primarySkill.jobDemandContext}
        </p>

        {/* Skills Learned */}
        <div>
          <span className="text-xs font-semibold text-amber-400 block mb-2">
            Key Technical Modules You Will Learn:
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {primarySkill.skillsLearned.map((skill, idx) => (
              <div key={idx} className="flex items-center space-x-2 text-xs text-slate-200 bg-slate-900/80 px-3 py-1.5 rounded-lg border border-slate-800">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}

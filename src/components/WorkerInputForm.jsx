import React from 'react';
import { WORKER_PROFILES } from '../data/workerProfiles.js';
import { LANGUAGES } from '../data/languages.js';
import { UserCheck, Sparkles, MapPin, GraduationCap, ShieldAlert, ArrowRight, Loader2 } from 'lucide-react';

export default function WorkerInputForm({
  selectedProfileId,
  onSelectProfile,
  customForm,
  onFormChange,
  onSubmit,
  isAnalyzing,
  currentLang
}) {
  const t = LANGUAGES[currentLang] || LANGUAGES.kn;

  return (
    <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 sm:p-6 shadow-2xl backdrop-blur-md">
      
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-4 mb-5">
        <div>
          <h2 className="text-lg font-bold text-slate-100 flex items-center gap-2">
            <UserCheck className="w-5 h-5 text-amber-400" />
            <span>{t.selectProfile}</span>
          </h2>
          <p className="text-xs text-slate-400 mt-0.5">
            Choose a realistic gig worker persona or build your custom worker profile below
          </p>
        </div>
        <span className="text-[11px] bg-slate-800 text-amber-300 border border-amber-500/30 px-2.5 py-1 rounded-full font-mono self-start sm:self-auto">
          Demo Preset Cards Available
        </span>
      </div>

      {/* Quick Preset Persona Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
        {WORKER_PROFILES.map((profile) => {
          const isSelected = selectedProfileId === profile.id;
          return (
            <button
              key={profile.id}
              onClick={() => onSelectProfile(profile)}
              className={`text-left p-3.5 rounded-xl border transition-all relative overflow-hidden group ${
                isSelected
                  ? 'bg-gradient-to-b from-amber-500/20 to-slate-900 border-amber-500 shadow-lg shadow-amber-900/20 ring-2 ring-amber-500/50'
                  : 'bg-slate-800/60 border-slate-700/80 hover:bg-slate-800 hover:border-slate-600'
              }`}
            >
              <div className="flex items-start justify-between">
                <span className="text-2xl mb-1">{profile.avatar}</span>
                {isSelected && (
                  <span className="bg-amber-400 text-slate-950 font-bold text-[10px] uppercase px-2 py-0.5 rounded-full">
                    Selected
                  </span>
                )}
              </div>
              <h3 className="font-bold text-sm text-slate-100 mt-1 line-clamp-1 group-hover:text-amber-300 transition">
                {profile.name}
              </h3>
              <p className="text-xs text-amber-400/90 font-medium line-clamp-1">
                {profile.headline}
              </p>
              <p className="text-[11px] text-slate-400 mt-2 line-clamp-2 leading-relaxed">
                {profile.description}
              </p>

              <div className="mt-3 pt-2 border-t border-slate-700/60 flex items-center justify-between text-[10px] text-slate-300 font-mono">
                <span>Earns: ₹{profile.currentIncome.toLocaleString('en-IN')}/mo</span>
                <span className="text-emerald-400 font-bold">ESIC Eligible</span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Divider */}
      <div className="relative my-6 text-center">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-slate-800"></div>
        </div>
        <span className="relative bg-slate-900 px-4 text-xs font-semibold text-slate-400 uppercase tracking-wider">
          {t.customProfile}
        </span>
      </div>

      {/* Custom Profile Form Fields */}
      <form onSubmit={onSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          
          {/* Role */}
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5 flex items-center gap-1.5">
              <span>🛵</span> {t.currentRole}
            </label>
            <select
              value={customForm.role}
              onChange={(e) => onFormChange('role', e.target.value)}
              className="w-full bg-slate-800 border border-slate-700 text-slate-100 text-xs font-medium rounded-xl p-2.5 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 focus:outline-none"
            >
              {Object.entries(t.roles).map(([key, label]) => (
                <option key={key} value={key}>
                  {label}
                </option>
              ))}
            </select>
          </div>

          {/* Location */}
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5 flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-amber-400" /> {t.location}
            </label>
            <select
              value={customForm.location}
              onChange={(e) => onFormChange('location', e.target.value)}
              className="w-full bg-slate-800 border border-slate-700 text-slate-100 text-xs font-medium rounded-xl p-2.5 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 focus:outline-none"
            >
              {Object.entries(t.locations).map(([key, label]) => (
                <option key={key} value={key}>
                  {label}
                </option>
              ))}
            </select>
          </div>

          {/* Education */}
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5 flex items-center gap-1.5">
              <GraduationCap className="w-3.5 h-3.5 text-amber-400" /> {t.education}
            </label>
            <select
              value={customForm.education}
              onChange={(e) => onFormChange('education', e.target.value)}
              className="w-full bg-slate-800 border border-slate-700 text-slate-100 text-xs font-medium rounded-xl p-2.5 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 focus:outline-none"
            >
              {Object.entries(t.educations).map(([key, label]) => (
                <option key={key} value={key}>
                  {label}
                </option>
              ))}
            </select>
          </div>

          {/* Social Security Checkboxes */}
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5 flex items-center gap-1.5">
              <ShieldAlert className="w-3.5 h-3.5 text-amber-400" /> {t.socialSecurity}
            </label>
            <div className="flex flex-wrap gap-2 pt-0.5">
              {[
                { id: 'esic', label: 'ESIC Card (IP Number)' },
                { id: 'e_shram', label: 'e-Shram (UAN)' },
                { id: 'bocw', label: 'BOCW Card' }
              ].map((card) => {
                const isChecked = customForm.socialSecurity.includes(card.id);
                return (
                  <button
                    key={card.id}
                    type="button"
                    onClick={() => {
                      const updated = isChecked
                        ? customForm.socialSecurity.filter((x) => x !== card.id)
                        : [...customForm.socialSecurity, card.id];
                      onFormChange('socialSecurity', updated);
                    }}
                    className={`text-[11px] font-semibold px-2.5 py-1 rounded-lg border transition-all ${
                      isChecked
                        ? 'bg-amber-500/20 text-amber-300 border-amber-500/80 shadow-sm'
                        : 'bg-slate-800 text-slate-400 border-slate-700 hover:text-slate-200'
                    }`}
                  >
                    {isChecked ? '✓ ' : '+ '} {card.label}
                  </button>
                );
              })}
            </div>
          </div>

        </div>

        {/* Generate Button */}
        <div className="pt-3 text-right">
          <button
            type="submit"
            disabled={isAnalyzing}
            className="w-full sm:w-auto bg-gradient-to-r from-amber-500 via-amber-600 to-red-600 text-slate-950 font-black text-sm px-6 py-3 rounded-xl shadow-xl shadow-amber-900/30 hover:brightness-110 active:scale-[0.99] transition flex items-center justify-center space-x-2 border border-amber-300/40 cursor-pointer"
          >
            {isAnalyzing ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin text-slate-950" />
                <span>{t.analyzing}</span>
              </>
            ) : (
              <>
                <Sparkles className="w-4 h-4 text-slate-950" />
                <span>{t.generateRoadmap}</span>
                <ArrowRight className="w-4 h-4 text-slate-950" />
              </>
            )}
          </button>
        </div>
      </form>

    </div>
  );
}

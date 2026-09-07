import React from 'react';
import { LANGUAGES } from '../../data/languages.js';
import { IndianRupee, ShieldCheck, Gift, CheckCircle, ExternalLink, Sparkles } from 'lucide-react';

export default function FinancialSchemeBreakdown({ financialSummary, matchedSchemes, currentLang }) {
  const t = LANGUAGES[currentLang] || LANGUAGES.kn;

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 sm:p-6 shadow-xl space-y-6">
      
      {/* Title */}
      <div className="border-b border-slate-800 pb-4">
        <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block mb-1">
          {t.financialTitle}
        </span>
        <h3 className="text-xl font-extrabold text-slate-100 flex items-center gap-2">
          <IndianRupee className="w-6 h-6 text-amber-400" />
          <span>Government Scheme Coverage & Stipend Breakdown</span>
        </h3>
        <p className="text-xs text-slate-400 mt-1">
          Code on Social Security 2020 & Skill India DBT funding ensures zero financial burden for workers
        </p>
      </div>

      {/* Net Cost Highlight Box */}
      <div className="bg-gradient-to-r from-emerald-950/80 via-slate-900 to-slate-950 border border-emerald-500/50 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 font-extrabold text-2xl shrink-0">
            ₹
          </div>
          <div>
            <span className="text-xs text-emerald-300 font-bold uppercase tracking-wider block">
              {t.netCost}
            </span>
            <div className="text-2xl font-black text-emerald-400 mt-0.5">
              {financialSummary.tuitionText}
            </div>
            <p className="text-xs text-slate-300 mt-0.5">
              Course Fee, Books, Assessment & Certification are 100% waivared.
            </p>
          </div>
        </div>

        <div className="bg-slate-900/90 border border-emerald-500/40 px-4 py-2.5 rounded-xl text-center self-stretch sm:self-auto">
          <span className="text-[10px] text-slate-400 uppercase font-semibold block">{t.stipend}</span>
          <span className="text-lg font-black text-amber-300">
            ₹{financialSummary.estimatedStipendMonthly.toLocaleString('en-IN')}{' '}
            <span className="text-xs font-normal text-slate-300">/ month</span>
          </span>
          <span className="text-[10px] text-emerald-400 block font-semibold">
            {financialSummary.isEsicCovered ? 'ESIC Daily Wage Compensation' : 'PMKVY DBT Direct Bank Transfer'}
          </span>
        </div>
      </div>

      {/* Matched Scheme Cards */}
      <div className="space-y-4">
        <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider">
          Applicable Social Security & Welfare Schemes ({matchedSchemes.length})
        </h4>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {matchedSchemes.map((scheme) => (
            <div
              key={scheme.id}
              className="bg-slate-950 border border-slate-800 rounded-xl p-4 space-y-3 relative overflow-hidden"
            >
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-[10px] font-bold text-amber-400 uppercase tracking-wider block">
                    {scheme.authority}
                  </span>
                  <h5 className="font-bold text-sm text-slate-100 mt-0.5">
                    {scheme.name}
                  </h5>
                </div>
                <span className="bg-emerald-500/20 text-emerald-300 text-[10px] font-mono font-bold px-2 py-0.5 rounded border border-emerald-500/40 shrink-0">
                  {scheme.coveragePercent}% Subsidized
                </span>
              </div>

              <div className="space-y-1.5 text-xs text-slate-300">
                <div className="flex items-start space-x-2">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong className="text-slate-200">Tuition Fee:</strong> {scheme.tuitionFeeWaiver}</span>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong className="text-slate-200">Stipend Support:</strong> {scheme.stipendBenefit}</span>
                </div>
                <div className="flex items-start space-x-2">
                  <Gift className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                  <span><strong className="text-slate-200">Tool Kit & Gear:</strong> {scheme.toolKitAllowance}</span>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-800 text-[11px] text-slate-400 space-y-1">
                <div className="font-mono text-amber-300 text-[10px]">
                  Ref: {scheme.officialGazetteRef}
                </div>
                <a
                  href={scheme.verificationPortal}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center space-x-1 text-emerald-400 hover:underline"
                >
                  <span>Verify on Official Portal</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

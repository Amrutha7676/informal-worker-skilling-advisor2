import React from 'react';
import { Award, CheckCircle, Printer, Download, QrCode, ShieldCheck, MapPin, Building2 } from 'lucide-react';

export default function KaushalyaPatraModal({ workerProfile, recommendations, onClose }) {
  if (!recommendations) return null;

  const { primarySkill, officeToVisit, primaryCenter, financialSummary, requiredDocuments } = recommendations;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-slate-900 border border-amber-500/40 rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl space-y-6 relative my-8 print:p-0 print:border-none print:shadow-none print:bg-white print:text-black">
        
        {/* Top Close Button (Hidden in Print) */}
        <div className="flex justify-between items-center border-b border-slate-800 pb-4 print:hidden">
          <div className="flex items-center space-x-2">
            <span className="text-xl">🟡🔴</span>
            <h3 className="text-lg font-extrabold text-slate-100">
              Personalized Kaushalya Patra
            </h3>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-100 text-xl font-bold px-2 py-1"
          >
            ✕
          </button>
        </div>

        {/* PRINTABLE CARD CONTENT */}
        <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-amber-950/30 border-2 border-amber-500/50 rounded-2xl p-6 shadow-xl space-y-6 print:border-2 print:border-black print:bg-white print:text-black">
          
          {/* Card Header Banner */}
          <div className="flex justify-between items-start border-b border-amber-500/40 pb-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-xl bg-amber-500 text-slate-950 font-black text-2xl flex items-center justify-center shadow-lg">
                ಕ
              </div>
              <div>
                <span className="text-[10px] font-extrabold text-amber-400 uppercase tracking-widest block">
                  Govt of Karnataka & Skill India Digital Aligned
                </span>
                <h2 className="text-xl font-black text-slate-100 tracking-tight">
                  KAUSHALYA PATRA
                </h2>
                <p className="text-xs text-slate-300">
                  Official Skilling & Social Security Action Pass
                </p>
              </div>
            </div>

            {/* QR Code Mockup */}
            <div className="bg-white p-2 rounded-xl border border-amber-400 text-center shrink-0 shadow-md">
              <QrCode className="w-12 h-12 text-slate-950" />
              <span className="text-[9px] font-mono font-bold text-slate-900 block mt-0.5">
                SCAN FOR VERIFICATION
              </span>
            </div>
          </div>

          {/* Worker Info Row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-slate-900/90 p-4 rounded-xl border border-slate-800 text-xs">
            <div>
              <span className="text-[10px] text-slate-400 block">Worker Name:</span>
              <span className="font-extrabold text-slate-100">{workerProfile?.name || 'Ramesh Kumar'}</span>
            </div>
            <div>
              <span className="text-[10px] text-slate-400 block">e-Shram UAN:</span>
              <span className="font-mono font-bold text-amber-300">{workerProfile?.eShramId || 'UAN-9482-1049-2819'}</span>
            </div>
            <div>
              <span className="text-[10px] text-slate-400 block">ESIC IP Number:</span>
              <span className="font-mono font-bold text-emerald-400">{workerProfile?.esicIpNumber || '31948201948'}</span>
            </div>
            <div>
              <span className="text-[10px] text-slate-400 block">Issue Date:</span>
              <span className="font-mono text-slate-200">{new Date().toLocaleDateString('en-IN')}</span>
            </div>
          </div>

          {/* Recommended Skill Transition Box */}
          <div className="bg-amber-500/10 border border-amber-500/40 rounded-xl p-4 space-y-2">
            <span className="text-[10px] font-bold text-amber-400 uppercase tracking-widest block">
              Approved Career Advancement Pathway
            </span>
            <h4 className="text-base font-extrabold text-slate-100 flex items-center justify-between">
              <span>{primarySkill?.targetRole}</span>
              <span className="text-emerald-400 font-mono text-sm">{primarySkill?.nsqfLevel}</span>
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs text-slate-300 pt-1">
              <div>• Duration: <strong>{primarySkill?.durationWeeks} Weeks</strong> ({primarySkill?.batchType})</div>
              <div>• Expected Income Boost: <strong className="text-emerald-400">₹{primarySkill?.targetAvgIncome?.toLocaleString('en-IN')} / mo</strong></div>
            </div>
          </div>

          {/* Office & Center Details */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div className="bg-slate-900/90 p-3 rounded-xl border border-slate-800">
              <span className="text-[10px] font-bold text-amber-400 block mb-1">Target Training Center</span>
              <p className="font-bold text-slate-100">{primaryCenter?.name}</p>
              <p className="text-slate-400 text-[11px] mt-0.5">{primaryCenter?.address}</p>
            </div>

            <div className="bg-slate-900/90 p-3 rounded-xl border border-slate-800">
              <span className="text-[10px] font-bold text-amber-400 block mb-1">Office Helpdesk to Visit</span>
              <p className="font-bold text-slate-100">{officeToVisit?.officeName}</p>
              <p className="text-amber-300 text-[11px] mt-0.5">Officer: {officeToVisit?.contactOfficer} ({officeToVisit?.phone})</p>
            </div>
          </div>

          {/* Financial Waiver Guarantee Badge */}
          <div className="bg-emerald-950/60 border border-emerald-500/40 p-3 rounded-xl flex items-center justify-between text-xs">
            <div className="flex items-center space-x-2">
              <ShieldCheck className="w-5 h-5 text-emerald-400" />
              <div>
                <span className="font-bold text-emerald-300 block">Code on Social Security 2020 §45 Verified</span>
                <span className="text-slate-300 text-[11px]">Worker Out-of-Pocket Fee = ₹0 (100% Govt/ESIC Subsidized)</span>
              </div>
            </div>
            <span className="text-emerald-400 font-extrabold font-mono text-sm">₹0 FEE</span>
          </div>

        </div>

        {/* Actions Bar (Hidden in Print) */}
        <div className="flex justify-end space-x-3 print:hidden">
          <button
            onClick={onClose}
            className="bg-slate-800 text-slate-300 text-xs font-semibold px-4 py-2.5 rounded-xl hover:bg-slate-700 transition"
          >
            Close
          </button>
          <button
            onClick={handlePrint}
            className="bg-amber-500 text-slate-950 font-black text-xs px-5 py-2.5 rounded-xl shadow-lg hover:bg-amber-400 transition flex items-center space-x-2"
          >
            <Printer className="w-4 h-4 text-slate-950" />
            <span>Print / Save Pass (PDF)</span>
          </button>
        </div>

      </div>
    </div>
  );
}

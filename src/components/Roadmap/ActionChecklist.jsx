import React, { useState } from 'react';
import { LANGUAGES } from '../../data/languages.js';
import { FileCheck, Building2, MapPin, Phone, Clock, Download, CheckSquare, Square, ShieldCheck } from 'lucide-react';

export default function ActionChecklist({ officeToVisit, requiredDocuments, onOpenPassModal, currentLang }) {
  const t = LANGUAGES[currentLang] || LANGUAGES.kn;

  const [checkedDocs, setCheckedDocs] = useState({});

  const toggleDoc = (idx) => {
    setCheckedDocs(prev => ({
      ...prev,
      [idx]: !prev[idx]
    }));
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 sm:p-6 shadow-xl space-y-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4">
        <div>
          <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block mb-1">
            {t.nextStepsTitle}
          </span>
          <h3 className="text-xl font-extrabold text-slate-100 flex items-center gap-2">
            <FileCheck className="w-6 h-6 text-amber-400" />
            <span>Concrete Action Plan & Document Checklist</span>
          </h3>
          <p className="text-xs text-slate-400 mt-1">
            Zero ambiguity — Visit the verified office desk with these physical documents
          </p>
        </div>

        <button
          onClick={onOpenPassModal}
          className="bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-black text-xs px-4 py-2.5 rounded-xl shadow-lg hover:brightness-110 transition flex items-center space-x-2 shrink-0 self-start sm:self-auto cursor-pointer"
        >
          <Download className="w-4 h-4 text-slate-950" />
          <span>{t.downloadPass}</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Left Box: Physical Office to Visit */}
        <div className="bg-slate-950 border border-amber-500/30 rounded-xl p-5 space-y-4">
          
          <div className="flex items-center space-x-2 text-amber-400 border-b border-slate-800 pb-2">
            <Building2 className="w-5 h-5" />
            <h4 className="font-bold text-sm text-slate-100">
              Step 1: Physical Office Desk to Visit
            </h4>
          </div>

          <div className="space-y-3 text-xs">
            <div>
              <span className="text-[10px] text-slate-400 uppercase font-semibold block">Office Desk Name</span>
              <p className="text-base font-extrabold text-amber-300 mt-0.5">
                {officeToVisit.officeName}
              </p>
            </div>

            <div>
              <span className="text-[10px] text-slate-400 uppercase font-semibold block">Address & Landmark</span>
              <p className="text-slate-200 font-medium leading-relaxed mt-0.5">
                📍 {officeToVisit.address}
              </p>
              <p className="text-amber-400 font-medium text-[11px] mt-1">
                🧭 Landmark: {officeToVisit.landmark}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-800">
              <div>
                <span className="text-[10px] text-slate-400 uppercase font-semibold block">Officer In-Charge</span>
                <p className="text-slate-100 font-bold mt-0.5 flex items-center gap-1">
                  <Phone className="w-3 h-3 text-amber-400" />
                  <span>{officeToVisit.contactOfficer}</span>
                </p>
                <p className="text-amber-300 font-mono font-bold text-[11px]">
                  {officeToVisit.phone}
                </p>
              </div>

              <div>
                <span className="text-[10px] text-slate-400 uppercase font-semibold block">Working Hours</span>
                <p className="text-slate-200 font-medium mt-0.5 flex items-center gap-1">
                  <Clock className="w-3 h-3 text-emerald-400" />
                  <span>{officeToVisit.workingHours}</span>
                </p>
              </div>
            </div>
          </div>

          <div className="p-3 bg-emerald-950/40 border border-emerald-500/30 rounded-lg text-[11px] text-emerald-300">
            <span className="font-bold block">✓ No Appointment Required</span>
            Walk in directly with your KaushalMitra Skill Pass and mentioned documents.
          </div>

        </div>

        {/* Right Box: Required Documents Checklist */}
        <div className="bg-slate-950 border border-slate-800 rounded-xl p-5 space-y-4">
          
          <div className="flex items-center justify-between border-b border-slate-800 pb-2">
            <div className="flex items-center space-x-2 text-amber-400">
              <FileCheck className="w-5 h-5" />
              <h4 className="font-bold text-sm text-slate-100">
                Step 2: Documents to Carry in Your Folder
              </h4>
            </div>
            <span className="text-[10px] text-slate-400 font-mono">
              Click to check off
            </span>
          </div>

          <div className="space-y-2.5">
            {requiredDocuments.map((doc, idx) => {
              const isChecked = checkedDocs[idx] || false;
              return (
                <div
                  key={idx}
                  onClick={() => toggleDoc(idx)}
                  className={`p-3 rounded-lg border transition-all cursor-pointer flex items-start space-x-3 ${
                    isChecked
                      ? 'bg-emerald-950/30 border-emerald-500/50 text-slate-200'
                      : 'bg-slate-900/80 border-slate-800 text-slate-300 hover:border-slate-700'
                  }`}
                >
                  <button type="button" className="mt-0.5 text-amber-400 shrink-0">
                    {isChecked ? (
                      <CheckSquare className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Square className="w-4 h-4 text-slate-500" />
                    )}
                  </button>
                  <div className="text-xs">
                    <span className={`font-bold block ${isChecked ? 'line-through text-emerald-300' : 'text-slate-100'}`}>
                      {doc.name}
                    </span>
                    <span className="text-[11px] text-slate-400 mt-0.5 block">
                      Purpose: {doc.checkReason}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>

    </div>
  );
}

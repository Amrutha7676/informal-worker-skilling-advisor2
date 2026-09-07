import React from 'react';
import { Award, CheckCircle, ExternalLink, ShieldAlert, Sparkles, Building } from 'lucide-react';

export default function KarnatakaGovtTab() {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 sm:p-6 shadow-xl space-y-6">
      
      {/* Title */}
      <div className="flex items-center justify-between border-b border-slate-800 pb-4">
        <div>
          <div className="flex items-center space-x-2">
            <span className="text-xl">🟡🔴</span>
            <h3 className="text-xl font-extrabold text-slate-100">
              Karnataka State Skill Mission & KSDC Integration
            </h3>
          </div>
          <p className="text-xs text-slate-400 mt-1">
            Specialized state schemes for gig workers & informal labor in Bengaluru, Mysuru, Hubballi & Karnataka industrial hubs
          </p>
        </div>
        <span className="bg-red-500/20 text-red-300 border border-red-500/40 text-xs font-mono px-3 py-1 rounded-full font-bold">
          Govt Order #KSDC/2023-24/109
        </span>
      </div>

      {/* Grid of Karnataka Schemes */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        
        {/* Mukhyamantri Koushalya Yojana */}
        <div className="bg-slate-950 border border-amber-500/30 rounded-xl p-5 space-y-3">
          <div className="flex items-start justify-between">
            <div>
              <span className="text-[10px] font-bold text-amber-400 uppercase tracking-widest block">
                Flagship State Scheme
              </span>
              <h4 className="text-base font-extrabold text-slate-100 mt-0.5">
                Mukhyamantri Koushalya Yojana (KMKY)
              </h4>
            </div>
            <span className="bg-amber-500/20 text-amber-300 text-[10px] font-bold px-2 py-0.5 rounded border border-amber-500/40">
              100% Free
            </span>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed">
            State-sponsored short term vocational training for youth and informal workers aged 18-35 in high-demand sectors like EV Repair, CNC Machining, and Healthcare.
          </p>
          <div className="bg-slate-900 p-3 rounded-lg border border-slate-800 text-xs text-amber-300 space-y-1">
            <div className="font-bold text-slate-100">Special Karnataka Benefit:</div>
            <div>• Free Tool Kit Allowance worth ₹3,000 upon course completion</div>
            <div>• Free BMTC/KSRTC Bus Pass for commute to Govt ITI centers</div>
          </div>
        </div>

        {/* Government Tool Room & Training Centre (GTTC) */}
        <div className="bg-slate-950 border border-slate-800 rounded-xl p-5 space-y-3">
          <div className="flex items-start justify-between">
            <div>
              <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest block">
                Apex Technical Training
              </span>
              <h4 className="text-base font-extrabold text-slate-100 mt-0.5">
                GTTC Technical Excellence Centers
              </h4>
            </div>
            <span className="bg-emerald-500/20 text-emerald-300 text-[10px] font-bold px-2 py-0.5 rounded border border-emerald-500/40">
              Peenya & Rajajinagar
            </span>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed">
            World-class industrial machining and precision tool rooms operating flexi-shift evening classes for factory helpers and gig delivery workers.
          </p>
          <div className="bg-slate-900 p-3 rounded-lg border border-slate-800 text-xs text-emerald-300 space-y-1">
            <div className="font-bold text-slate-100">State Apprenticeship Tie-up:</div>
            <div>• Direct placement linkages with Peenya & Bommasandra industrial units</div>
            <div>• Hands-on Fanuc & Siemens CNC controller simulation labs</div>
          </div>
        </div>

        {/* Unnati Scheme for SC/ST Workers */}
        <div className="bg-slate-950 border border-slate-800 rounded-xl p-5 space-y-3">
          <div className="flex items-start justify-between">
            <div>
              <span className="text-[10px] font-bold text-amber-400 uppercase tracking-widest block">
                Social Welfare Department
              </span>
              <h4 className="text-base font-extrabold text-slate-100 mt-0.5">
                Unnati Scheme & Entrepreneurship Support
              </h4>
            </div>
            <span className="bg-slate-800 text-amber-300 text-[10px] font-bold px-2 py-0.5 rounded border border-slate-700">
              Up to ₹15 Lakh Subsidy
            </span>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed">
            Financial seed capital and equipment subsidies for certified blue-collar workers setting up independent EV repair garages or electrical contracting units.
          </p>
        </div>

        {/* Kaveri Bhavan State Helpdesk */}
        <div className="bg-slate-950 border border-slate-800 rounded-xl p-5 space-y-3">
          <div className="flex items-start justify-between">
            <div>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">
                State Nodal Office
              </span>
              <h4 className="text-base font-extrabold text-slate-100 mt-0.5">
                KSDC Headquarters Helpdesk
              </h4>
            </div>
            <span className="bg-slate-800 text-slate-300 text-[10px] font-mono px-2 py-0.5 rounded">
              Bengaluru HQ
            </span>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed">
            📍 3rd Floor, Kaveri Bhavan, KG Road, Bengaluru - 560009. Phone: 080-22221432. Open Mon-Sat.
          </p>
          <a
            href="https://kaushalya.karnataka.gov.in"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center space-x-1.5 text-xs text-amber-400 hover:underline font-bold"
          >
            <span>Visit Kaushalya Karnataka Official Portal</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>

    </div>
  );
}

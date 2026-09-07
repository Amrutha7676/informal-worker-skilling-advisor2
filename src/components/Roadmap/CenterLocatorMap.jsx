import React, { useState } from 'react';
import { LANGUAGES } from '../../data/languages.js';
import { MapPin, Phone, Mail, Clock, Home, ShieldCheck, Navigation, ExternalLink } from 'lucide-react';

export default function CenterLocatorMap({ matchedCenters, currentLang }) {
  const t = LANGUAGES[currentLang] || LANGUAGES.kn;
  const [selectedCenterId, setSelectedCenterId] = useState(matchedCenters[0]?.id || '');

  const activeCenter = matchedCenters.find(c => c.id === selectedCenterId) || matchedCenters[0];

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 sm:p-6 shadow-xl space-y-6">
      
      <div className="border-b border-slate-800 pb-4">
        <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block mb-1">
          {t.locationTitle}
        </span>
        <h3 className="text-xl font-extrabold text-slate-100 flex items-center gap-2">
          <MapPin className="w-6 h-6 text-amber-400" />
          <span>Government Training Centers Nearby</span>
        </h3>
        <p className="text-xs text-slate-400 mt-1">
          Physical government ITIs, NSTIs, and GTTC technical training facilities verified with direct officer phone contacts
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left Column: Center Selection List */}
        <div className="space-y-3 lg:col-span-1">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
            {matchedCenters.length} Matched Centers:
          </span>
          {matchedCenters.map((center, idx) => {
            const isSelected = activeCenter?.id === center.id;
            return (
              <button
                key={center.id}
                onClick={() => setSelectedCenterId(center.id)}
                className={`w-full text-left p-3.5 rounded-xl border transition-all ${
                  isSelected
                    ? 'bg-amber-500/10 border-amber-500 text-slate-100 shadow-md ring-1 ring-amber-500/50'
                    : 'bg-slate-800/60 border-slate-700/80 hover:bg-slate-800 text-slate-300'
                }`}
              >
                <div className="flex items-start justify-between">
                  <span className="text-[10px] bg-slate-800 text-amber-300 font-mono px-2 py-0.5 rounded border border-amber-500/30">
                    Option {idx + 1}
                  </span>
                  <span className="text-[10px] text-emerald-400 font-bold">
                    ✓ Verified Center
                  </span>
                </div>
                <h4 className="font-bold text-sm text-slate-100 mt-1.5 line-clamp-2">
                  {center.name}
                </h4>
                <p className="text-[11px] text-slate-400 mt-1 line-clamp-1">
                  📍 {center.city} • {center.landmark}
                </p>
              </button>
            );
          })}
        </div>

        {/* Right Column: Detailed Center Card + Visual Map Mockup */}
        <div className="lg:col-span-2 space-y-4">
          
          {activeCenter && (
            <div className="bg-slate-950 border border-slate-800 rounded-xl p-5 space-y-4">
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-3">
                <div>
                  <span className="text-[11px] font-semibold text-emerald-400 block">
                    {activeCenter.govtAffiliation}
                  </span>
                  <h4 className="text-lg font-extrabold text-slate-100 mt-0.5">
                    {activeCenter.name}
                  </h4>
                </div>
                <span className="bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 text-[10px] font-mono px-2.5 py-1 rounded-full self-start sm:self-auto font-bold">
                  {activeCenter.verificationBadge}
                </span>
              </div>

              {/* Contact & Address Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                
                <div className="bg-slate-900 p-3 rounded-lg border border-slate-800 space-y-1">
                  <span className="text-slate-400 text-[10px] font-semibold block">Full Physical Address</span>
                  <p className="text-slate-200 font-medium leading-relaxed">
                    {activeCenter.address}
                  </p>
                </div>

                <div className="bg-slate-900 p-3 rounded-lg border border-slate-800 space-y-1">
                  <span className="text-slate-400 text-[10px] font-semibold block">Landmark / Route Guidance</span>
                  <p className="text-amber-300 font-medium leading-relaxed">
                    🧭 {activeCenter.landmark}
                  </p>
                </div>

                <div className="bg-slate-900 p-3 rounded-lg border border-slate-800 space-y-1">
                  <span className="text-slate-400 text-[10px] font-semibold block">Designated Officer Desk</span>
                  <p className="text-slate-100 font-bold flex items-center gap-1">
                    <Phone className="w-3.5 h-3.5 text-amber-400" />
                    <span>{activeCenter.contactPerson}</span>
                  </p>
                  <p className="text-amber-300 font-mono font-bold mt-0.5">
                    {activeCenter.phone}
                  </p>
                </div>

                <div className="bg-slate-900 p-3 rounded-lg border border-slate-800 space-y-1">
                  <span className="text-slate-400 text-[10px] font-semibold block">Timings & Batch Availability</span>
                  <p className="text-slate-200 font-medium flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{activeCenter.timings}</span>
                  </p>
                  <span className="text-[10px] text-emerald-400 font-semibold block">
                    {activeCenter.hostelAvailable ? '✓ Hostel Accommodation Available' : '• Day Scholar Batches Only'}
                  </span>
                </div>

              </div>

              {/* Visual Map Render (SVG/Canvas Representation) */}
              <div className="bg-slate-900 rounded-xl p-3 border border-slate-800 text-center space-y-2">
                <div className="h-32 bg-slate-950 rounded-lg border border-slate-800 relative overflow-hidden flex items-center justify-center">
                  {/* Grid lines background */}
                  <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#amber_500_1px,transparent_1px)] [background-size:16px_16px]"></div>
                  
                  {/* Marker Pin */}
                  <div className="relative z-10 flex flex-col items-center animate-bounce">
                    <div className="bg-amber-500 text-slate-950 font-black text-[10px] px-2.5 py-1 rounded-full shadow-lg flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{activeCenter.name}</span>
                    </div>
                    <div className="w-2 h-2 bg-amber-400 rotate-45 -mt-1"></div>
                  </div>

                  <div className="absolute bottom-2 left-2 text-[10px] text-slate-500 font-mono">
                    Lat: {activeCenter.latitude} N | Lon: {activeCenter.longitude} E
                  </div>
                </div>

                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(activeCenter.name + ' ' + activeCenter.address)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center space-x-1.5 text-xs font-bold text-amber-400 hover:text-amber-300 hover:underline"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Open in Google Maps for Bus Routes</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

            </div>
          )}

        </div>

      </div>

    </div>
  );
}

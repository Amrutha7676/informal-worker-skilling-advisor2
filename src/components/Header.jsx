import React, { useState } from 'react';
import { LANGUAGES } from '../data/languages.js';
import { Volume2, VolumeX, ShieldCheck, Sparkles, Award } from 'lucide-react';

export default function Header({ currentLang, onLangChange, audioPlaying, onToggleAudio }) {
  const t = LANGUAGES[currentLang] || LANGUAGES.kn;

  return (
    <header className="bg-slate-900 border-b border-slate-800 text-white sticky top-0 z-40 shadow-xl backdrop-blur-md bg-opacity-95">
      {/* Karnataka Hackathon Top Bar */}
      <div className="bg-gradient-to-r from-amber-600 via-red-600 to-amber-700 text-amber-50 text-xs font-semibold py-1 px-4 flex justify-between items-center tracking-wide">
        <div className="flex items-center space-x-2">
          <span className="bg-amber-400 text-slate-950 px-1.5 py-0.5 rounded text-[10px] font-extrabold uppercase">
            Built by Team Bug Busters • Karnataka Hackathon 2026
          </span>
        </div>
        <div className="flex items-center space-x-3 text-[11px] font-mono text-amber-100">
          <span className="flex items-center">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping mr-1.5"></span>
            Live Govt Gazette Grounded
          </span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          
          {/* Brand Logo & Titles */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 via-red-600 to-amber-700 flex items-center justify-center text-white shadow-lg shadow-amber-900/30 border border-amber-400/40 shrink-0">
              <span className="text-2xl font-black">ಕ</span>
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h1 className="text-xl sm:text-2xl font-extrabold tracking-tight bg-gradient-to-r from-amber-300 via-white to-amber-400 bg-clip-text text-transparent">
                  KaushalMitra AI
                </h1>
                <span className="text-xs bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 px-2 py-0.5 rounded-full font-medium">
                  v2.4 Grounded
                </span>
              </div>
              <p className="text-xs text-slate-300 font-medium">
                {t.subtitle}
              </p>
            </div>
          </div>

          {/* Right Action Bar (Languages + Audio Voice Toggle) */}
          <div className="flex items-center space-x-2 sm:space-x-3 self-end md:self-auto">
            
            {/* Audio Assistant Simulation Button */}
            <button
              onClick={onToggleAudio}
              className={`flex items-center space-x-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg border transition-all ${
                audioPlaying
                  ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/50 animate-pulse'
                  : 'bg-slate-800 text-slate-200 border-slate-700 hover:bg-slate-700'
              }`}
              title="Listen in regional voice"
            >
              {audioPlaying ? (
                <>
                  <Volume2 className="w-4 h-4 text-emerald-400 animate-bounce" />
                  <span>{t.stopAudio}</span>
                </>
              ) : (
                <>
                  <VolumeX className="w-4 h-4 text-amber-400" />
                  <span>{t.listenKannadaAudio}</span>
                </>
              )}
            </button>

            {/* Language Dropdown Selector */}
            <div className="relative">
              <select
                value={currentLang}
                onChange={(e) => onLangChange(e.target.value)}
                className="bg-slate-800 border border-amber-500/40 text-amber-200 text-xs font-bold rounded-lg px-3 py-1.5 focus:ring-2 focus:ring-amber-500 focus:outline-none cursor-pointer hover:bg-slate-700 transition"
              >
                {Object.values(LANGUAGES).map((lang) => (
                  <option key={lang.code} value={lang.code} className="bg-slate-900 text-slate-100">
                    {lang.flag} {lang.name} ({lang.englishName})
                  </option>
                ))}
              </select>
            </div>

          </div>

        </div>
      </div>
    </header>
  );
}

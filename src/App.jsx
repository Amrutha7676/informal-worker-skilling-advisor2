import React, { useState, useEffect, useTransition } from 'react';
import Header from './components/Header.jsx';
import WorkerInputForm from './components/WorkerInputForm.jsx';
import GroundingBanner from './components/GroundingBanner.jsx';
import SkillTransitionCard from './components/Roadmap/SkillTransitionCard.jsx';
import CenterLocatorMap from './components/Roadmap/CenterLocatorMap.jsx';
import FinancialSchemeBreakdown from './components/Roadmap/FinancialSchemeBreakdown.jsx';
import ActionChecklist from './components/Roadmap/ActionChecklist.jsx';
import KaushalyaPatraModal from './components/KaushalyaPatraModal.jsx';
import KarnatakaGovtTab from './components/KarnatakaGovtTab.jsx';
import LiveQuerySimulator from './components/LiveQuerySimulator.jsx';

import { WORKER_PROFILES } from './data/workerProfiles.js';
import { LANGUAGES } from './data/languages.js';
import { getWorkerRecommendations } from './services/recommendationEngine.js';
import { Award, MapPin, IndianRupee, FileCheck, Sparkles, Volume2, ShieldCheck } from 'lucide-react';

export default function App() {
  const [currentLang, setCurrentLang] = useState('kn'); // Default to Kannada for Karnataka Hackathon!
  const [selectedProfileId, setSelectedProfileId] = useState(WORKER_PROFILES[0].id);

  // Custom Form State
  const [customForm, setCustomForm] = useState({
    role: WORKER_PROFILES[0].role,
    location: WORKER_PROFILES[0].location,
    education: WORKER_PROFILES[0].education,
    socialSecurity: WORKER_PROFILES[0].socialSecurity
  });

  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [activeTab, setActiveTab] = useState('roadmap');
  const [showPassModal, setShowPassModal] = useState(false);
  const [audioPlaying, setAudioPlaying] = useState(false);

  // Current active profile object
  const activeWorkerProfile = WORKER_PROFILES.find(p => p.id === selectedProfileId) || WORKER_PROFILES[0];

  // Computed recommendations
  const [recommendations, setRecommendations] = useState(() => 
    getWorkerRecommendations({
      role: customForm.role,
      location: customForm.location,
      education: customForm.education,
      socialSecurity: customForm.socialSecurity
    })
  );

  const t = LANGUAGES[currentLang] || LANGUAGES.kn;

  // Handle Preset Profile Selection
  const handleSelectProfile = (profile) => {
    setSelectedProfileId(profile.id);
    setCustomForm({
      role: profile.role,
      location: profile.location,
      education: profile.education,
      socialSecurity: profile.socialSecurity
    });
    
    setIsAnalyzing(true);
    setTimeout(() => {
      setRecommendations(getWorkerRecommendations(profile));
      setIsAnalyzing(false);
    }, 400);
  };

  // Handle Custom Form Field Changes
  const handleFormChange = (field, value) => {
    setCustomForm(prev => ({
      ...prev,
      [field]: value
    }));
  };

  // Handle Form Submit
  const handleFormSubmit = (e) => {
    e.preventDefault();
    setIsAnalyzing(true);
    setTimeout(() => {
      setRecommendations(getWorkerRecommendations(customForm));
      setIsAnalyzing(false);
    }, 600);
  };

  // Simulated Voice Narration Toggle
  const handleToggleAudio = () => {
    if (audioPlaying) {
      setAudioPlaying(false);
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    } else {
      setAudioPlaying(true);
      if ('speechSynthesis' in window) {
        const textToSpeak = `${t.title}. ${recommendations?.primarySkill?.targetRole || 'Skill Roadmap'}. Grounded under Code on Social Security 2020.`;
        const utterance = new SpeechSynthesisUtterance(textToSpeak);
        utterance.onend = () => setAudioPlaying(false);
        utterance.onerror = () => setAudioPlaying(false);
        window.speechSynthesis.speak(utterance);
      } else {
        setTimeout(() => setAudioPlaying(false), 4000);
      }
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-amber-500 selection:text-slate-950">
      
      {/* Top Header & Multilingual Bar */}
      <Header
        currentLang={currentLang}
        onLangChange={setCurrentLang}
        audioPlaying={audioPlaying}
        onToggleAudio={handleToggleAudio}
      />

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
        
        {/* Worker Profile Input Studio */}
        <WorkerInputForm
          selectedProfileId={selectedProfileId}
          onSelectProfile={handleSelectProfile}
          customForm={customForm}
          onFormChange={handleFormChange}
          onSubmit={handleFormSubmit}
          isAnalyzing={isAnalyzing}
          currentLang={currentLang}
        />

        {/* Zero-Hallucination Grounding Banner */}
        <GroundingBanner
          sourceId={recommendations?.primarySkill?.groundedSourceId}
          currentLang={currentLang}
        />

        {/* Navigation Tabs Bar */}
        <div className="flex overflow-x-auto no-scrollbar gap-2 border-b border-slate-800 pb-2">
          {[
            { id: 'roadmap', label: t.tabRoadmap, icon: Award },
            { id: 'centers', label: t.tabCenters, icon: MapPin },
            { id: 'financial', label: t.tabFinancial, icon: IndianRupee },
            { id: 'nextSteps', label: t.tabNextSteps, icon: FileCheck },
            { id: 'karnatakaSpecial', label: t.tabKarnatakaSpecial, icon: Sparkles },
            { id: 'querySimulator', label: t.tabQuerySimulator, icon: Volume2 }
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 text-xs font-extrabold px-4 py-2.5 rounded-xl transition shrink-0 cursor-pointer ${
                  isActive
                    ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-950/40 border border-amber-400'
                    : 'bg-slate-900 text-slate-300 border border-slate-800 hover:bg-slate-800 hover:text-slate-100'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Content Display */}
        <div className="transition-all duration-300">
          
          {activeTab === 'roadmap' && (
            <SkillTransitionCard
              primarySkill={recommendations.primarySkill}
              currentRoleLabel={t.roles[customForm.role] || customForm.role}
              currentLang={currentLang}
            />
          )}

          {activeTab === 'centers' && (
            <CenterLocatorMap
              matchedCenters={recommendations.matchedCenters}
              currentLang={currentLang}
            />
          )}

          {activeTab === 'financial' && (
            <FinancialSchemeBreakdown
              financialSummary={recommendations.financialSummary}
              matchedSchemes={recommendations.matchedSchemes}
              currentLang={currentLang}
            />
          )}

          {activeTab === 'nextSteps' && (
            <ActionChecklist
              officeToVisit={recommendations.officeToVisit}
              requiredDocuments={recommendations.requiredDocuments}
              onOpenPassModal={() => setShowPassModal(true)}
              currentLang={currentLang}
            />
          )}

          {activeTab === 'karnatakaSpecial' && (
            <KarnatakaGovtTab />
          )}

          {activeTab === 'querySimulator' && (
            <LiveQuerySimulator />
          )}

        </div>

      </main>

      {/* Kaushalya Patra Printable Modal */}
      {showPassModal && (
        <KaushalyaPatraModal
          workerProfile={activeWorkerProfile}
          recommendations={recommendations}
          onClose={() => setShowPassModal(false)}
        />
      )}

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-800 text-slate-400 text-xs py-6 mt-12">
        <div className="max-w-7xl mx-auto px-4 text-center space-y-2">
          <div className="flex flex-wrap justify-center items-center gap-4 text-slate-300 font-semibold">
            <span>• Skill India Digital Hub</span>
            <span>• Code on Social Security 2020 § 45</span>
            <span>• Kaushalya Karnataka (KSDC)</span>
            <span>• ESIC Pehchan Portal</span>
          </div>
          <p className="text-[11px] text-slate-500">
            Built by Team Bug Busters • Karnataka Hackathon 2026 • Zero-Hallucination Grounded Architecture
          </p>
        </div>
      </footer>

    </div>
  );
}

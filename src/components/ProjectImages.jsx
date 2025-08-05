import React from 'react';
import { Calendar, Users, MapPin, Brain, Stethoscope, Code, Car } from 'lucide-react';

// AmandoMed - Medical Platform Image
export const AmandoMedImage = () => (
  <div className="w-full h-full bg-gradient-to-br from-teal-50 via-cyan-100 to-blue-200 relative overflow-hidden">
    {/* Clean Medical Background */}
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(6,182,212,0.1)_0%,transparent_60%)]" />
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(14,165,233,0.08)_0%,transparent_60%)]" />
    
    {/* Medical Interface Elements */}
    <svg className="absolute inset-0 w-full h-full opacity-15" viewBox="0 0 400 300">
      {/* Calendar Grid */}
      <g stroke="#0891b2" strokeWidth="1" fill="none">
        <rect x="60" y="40" width="120" height="80" rx="4" />
        <line x1="70" y1="55" x2="170" y2="55" />
        <line x1="70" y1="70" x2="170" y2="70" />
        <line x1="70" y1="85" x2="170" y2="85" />
        <line x1="70" y1="100" x2="170" y2="100" />
        <line x1="85" y1="40" x2="85" y2="120" />
        <line x1="110" y1="40" x2="110" y2="120" />
        <line x1="135" y1="40" x2="135" y2="120" />
        <line x1="160" y1="40" x2="160" y2="120" />
      </g>
      
      {/* Patient Cards */}
      <g fill="#0891b2" opacity="0.6">
        <rect x="220" y="60" width="140" height="20" rx="10" />
        <rect x="220" y="90" width="120" height="20" rx="10" />
        <rect x="220" y="120" width="160" height="20" rx="10" />
      </g>
      
      {/* Health Chart */}
      <g stroke="#0891b2" strokeWidth="2" fill="none" opacity="0.4">
        <path d="M80 180 Q120 160 160 170 Q200 180 240 160 Q280 150 320 165" />
        <circle cx="80" cy="180" r="3" fill="#0891b2" />
        <circle cx="160" cy="170" r="3" fill="#0891b2" />
        <circle cx="240" cy="160" r="3" fill="#0891b2" />
        <circle cx="320" cy="165" r="3" fill="#0891b2" />
      </g>
    </svg>
    
    {/* German Medical Elements */}
    <div className="absolute top-4 left-4 text-teal-600/40 text-xs font-medium">
      Termin buchen
    </div>
    <div className="absolute bottom-4 right-4 text-cyan-600/40 text-xs font-medium">
      Gesundheit
    </div>
    
    {/* Medical Cross - Modern Style */}
    <div className="absolute top-6 right-6 w-6 h-6 opacity-20">
      <div className="w-full h-1.5 bg-teal-600 absolute top-1/2 transform -translate-y-1/2 rounded-full" />
      <div className="h-full w-1.5 bg-teal-600 absolute left-1/2 transform -translate-x-1/2 rounded-full" />
    </div>
    
    {/* Main Content */}
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="text-center text-teal-700">
        <div className="relative mb-4">
          <Stethoscope size={64} className="mx-auto drop-shadow-lg text-teal-600" />
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full animate-pulse" />
        </div>
        <h3 className="text-2xl font-bold mb-2 drop-shadow-sm">AmandoMed</h3>
        <p className="text-sm opacity-80 drop-shadow-sm">Healthcare Platform</p>
      </div>
    </div>
    
    {/* Appointment Time Slots */}
    <div className="absolute bottom-6 left-6 opacity-25">
      <div className="text-xs text-teal-600 font-medium space-y-1">
        <div className="bg-teal-200/50 px-2 py-1 rounded text-center">09:00</div>
        <div className="bg-teal-200/50 px-2 py-1 rounded text-center">10:30</div>
        <div className="bg-teal-200/50 px-2 py-1 rounded text-center">14:00</div>
      </div>
    </div>
    
    {/* Floating Medical Elements */}
    <div className="absolute top-1/5 right-1/4 w-2 h-2 bg-teal-400/40 rounded-full animate-pulse" />
    <div className="absolute bottom-1/3 left-1/5 w-3 h-3 bg-cyan-400/30 rounded-full animate-pulse delay-700" />
    <div className="absolute top-2/3 right-1/6 w-1 h-1 bg-blue-400/50 rounded-full animate-pulse delay-1000" />
    
  </div>
);

// SHB - Collaboration Platform Image
export const SHBImage = () => (
  <div className="w-full h-full bg-gradient-to-br from-indigo-100 via-purple-200 to-violet-300 relative overflow-hidden">
    {/* Simple Breathing Background */}
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.15)_0%,transparent_70%)] opacity-60">
      <div className="animate-pulse w-full h-full"></div>
    </div>
    
    {/* Main Content */}
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="text-center text-indigo-800">
        <div className="relative mb-4">
          <Users size={64} className="mx-auto drop-shadow-lg text-indigo-600 animate-pulse" />
        </div>
        <h3 className="text-2xl font-bold mb-2 drop-shadow-sm">SHB</h3>
        <p className="text-sm opacity-80 drop-shadow-sm">Shared. Human. Business.</p>
      </div>
    </div>
    
    {/* Simple Team Indicator */}
    <div className="absolute top-6 left-6 opacity-30">
      <div className="flex -space-x-1 animate-pulse">
        <div className="w-4 h-4 bg-indigo-400 rounded-full border border-white"></div>
        <div className="w-4 h-4 bg-purple-400 rounded-full border border-white"></div>
        <div className="w-4 h-4 bg-violet-400 rounded-full border border-white"></div>
      </div>
    </div>
    
    {/* Simple Status */}
    <div className="absolute bottom-6 right-6 opacity-25">
      <div className="text-xs text-indigo-600 font-medium">
        <div className="bg-indigo-200/50 px-2 py-1 rounded text-center">Collaboration</div>
      </div>
    </div>
    
  </div>
);

// AI Trainer - Scale AI Image
export const AITrainerImage = () => (
  <div className="w-full h-full bg-gradient-to-br from-gray-900 via-black to-gray-800 relative overflow-hidden">
    {/* Background Pattern */}
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_20%,rgba(34,197,94,0.3)_0%,transparent_50%)]" />
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(34,197,94,0.2)_0%,transparent_50%)]" />
    
    {/* Neural Network Pattern */}
    <svg className="absolute inset-0 w-full h-full opacity-40" viewBox="0 0 400 300">
      {/* Nodes */}
      <circle cx="80" cy="80" r="3" fill="#22c55e" />
      <circle cx="160" cy="60" r="3" fill="#22c55e" />
      <circle cx="240" cy="90" r="3" fill="#22c55e" />
      <circle cx="320" cy="70" r="3" fill="#22c55e" />
      <circle cx="120" cy="150" r="3" fill="#22c55e" />
      <circle cx="200" cy="180" r="3" fill="#22c55e" />
      <circle cx="280" cy="160" r="3" fill="#22c55e" />
      <circle cx="100" cy="220" r="3" fill="#22c55e" />
      <circle cx="220" cy="240" r="3" fill="#22c55e" />
      <circle cx="300" cy="220" r="3" fill="#22c55e" />
      
      {/* Connections */}
      <line x1="80" y1="80" x2="160" y2="60" stroke="#22c55e" strokeWidth="1" opacity="0.6" />
      <line x1="160" y1="60" x2="240" y2="90" stroke="#22c55e" strokeWidth="1" opacity="0.6" />
      <line x1="240" y1="90" x2="320" y2="70" stroke="#22c55e" strokeWidth="1" opacity="0.6" />
      <line x1="80" y1="80" x2="120" y2="150" stroke="#22c55e" strokeWidth="1" opacity="0.6" />
      <line x1="160" y1="60" x2="200" y2="180" stroke="#22c55e" strokeWidth="1" opacity="0.6" />
      <line x1="240" y1="90" x2="280" y2="160" stroke="#22c55e" strokeWidth="1" opacity="0.6" />
      <line x1="120" y1="150" x2="200" y2="180" stroke="#22c55e" strokeWidth="1" opacity="0.6" />
      <line x1="200" y1="180" x2="280" y2="160" stroke="#22c55e" strokeWidth="1" opacity="0.6" />
      <line x1="120" y1="150" x2="100" y2="220" stroke="#22c55e" strokeWidth="1" opacity="0.6" />
      <line x1="200" y1="180" x2="220" y2="240" stroke="#22c55e" strokeWidth="1" opacity="0.6" />
      <line x1="280" y1="160" x2="300" y2="220" stroke="#22c55e" strokeWidth="1" opacity="0.6" />
    </svg>
    
    {/* Main Content */}
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="text-center text-white/90">
        <Brain size={64} className="mx-auto mb-4 drop-shadow-lg text-green-400" />
        <h3 className="text-2xl font-bold mb-2 drop-shadow-lg">AI Trainer</h3>
        <p className="text-sm opacity-90 drop-shadow text-green-300">Scale AI</p>
      </div>
    </div>
    
    {/* Code Elements */}
    <div className="absolute top-4 left-4 text-green-400/60 text-xs font-mono">
      &lt;AI&gt;
    </div>
    <div className="absolute bottom-4 right-4 text-green-400/60 text-xs font-mono">
      RLHF
    </div>
    
    {/* Matrix-style elements */}
    <div className="absolute top-1/4 right-1/4 text-green-400/40 text-xs font-mono">01</div>
    <div className="absolute bottom-1/4 left-1/4 text-green-400/40 text-xs font-mono">10</div>
    
    {/* Floating Elements */}
    <div className="absolute top-1/3 left-1/6 w-1 h-1 bg-green-400/60 rounded-full animate-pulse" />
    <div className="absolute bottom-1/3 right-1/6 w-2 h-2 bg-green-500/50 rounded-full animate-pulse delay-700" />
  </div>
);

// NeverAppedi - Sicily Mobility Platform Image
export const NeverAppediImage = () => (
  <div className="w-full h-full bg-gradient-to-br from-slate-50 via-orange-100 to-amber-200 relative overflow-hidden">
    {/* Clean Mobility Background */}
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(251,146,60,0.1)_0%,transparent_60%)]" />
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(245,101,101,0.08)_0%,transparent_60%)]" />
    
    {/* Clean Route Network */}
    <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 400 300">
      {/* Simple Transportation Routes */}
      <g stroke="#f97316" strokeWidth="2" fill="none">
        <path d="M80 120 Q200 100 320 130" opacity="0.6" />
        <path d="M100 180 Q240 160 370 190" opacity="0.4" />
      </g>
      
      {/* Key Transportation Hubs */}
      <g fill="#f97316">
        <circle cx="120" cy="110" r="3" opacity="0.5" />
        <circle cx="200" cy="100" r="4" opacity="0.6" />
        <circle cx="280" cy="120" r="3" opacity="0.5" />
      </g>
    </svg>
    
    {/* Main Content */}
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="text-center text-orange-800">
        <div className="relative mb-4">
          <Car size={64} className="mx-auto drop-shadow-lg text-orange-600" />
          {/* GPS/Connected indicator */}
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full animate-pulse border-2 border-white" />
          <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-blue-400 rounded-full animate-pulse delay-500" />
        </div>
        <h3 className="text-2xl font-bold mb-2 drop-shadow-sm">NeverAppedi</h3>
        <p className="text-sm opacity-80 drop-shadow-sm">Smart Mobility Platform</p>
      </div>
    </div>
    
    {/* Simple Location Markers */}
    <div className="absolute top-1/4 left-1/4">
      <MapPin size={16} className="text-orange-600/50 animate-pulse" />
    </div>
    <div className="absolute top-2/3 right-1/3">
      <MapPin size={14} className="text-amber-600/40 animate-pulse delay-500" />
    </div>
    <div className="absolute bottom-1/4 left-2/3">
      <MapPin size={12} className="text-orange-500/45 animate-pulse delay-1000" />
    </div>
    
    {/* Sicily Reference */}
    <div className="absolute bottom-4 right-4 text-orange-600/30 text-xs font-medium">
      SICILIA
    </div>
  </div>
);
import React from 'react';
import { TrendingUp } from 'lucide-react';
import { presentationData } from '../data/presentationData';

const InternalSynergy = () => {
  const { synergy } = presentationData;

  return (
    <section className="flex flex-col justify-center py-6 px-6 lg:px-12 max-w-7xl mx-auto">
      <div className="glass-card p-10">
        <h2 className="text-3xl font-bold text-bb-yellow mb-6">{synergy.title}</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              {synergy.description}
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              {synergy.stats.map((stat, index) => (
                <div key={index} className="bg-white/5 p-6 rounded-lg border-l-4 border-bb-yellow">
                  <p className="text-gray-400 text-sm uppercase tracking-wider mb-2">{stat.label}</p>
                  <p className="text-4xl font-bold text-white">{stat.value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-bb-blue-dark/50 p-8 rounded-xl border border-white/10">
            <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
              <TrendingUp className="text-bb-yellow w-5 h-5" />
              Público-Alvo
            </h3>
            <div className="flex flex-col gap-3">
              {synergy.targetAudience.map((role, index) => (
                <div 
                  key={index}
                  className="px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-sm text-gray-200 flex items-center gap-3 hover:border-bb-yellow/30 hover:bg-white/10 transition-all"
                >
                  <div className="w-2 h-2 rounded-full bg-bb-yellow shadow-[0_0_8px_rgba(252,235,0,0.5)]" />
                  {role}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InternalSynergy;

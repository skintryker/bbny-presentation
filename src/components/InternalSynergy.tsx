import React from 'react';
import { TrendingUp } from 'lucide-react';
import { presentationData } from '../data/presentationData';

const InternalSynergy = () => {
  const { synergy } = presentationData;

  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 px-6 lg:px-12 max-w-7xl mx-auto">
      <div className="glass-card p-10 md:p-16">
        <h2 className="text-4xl md:text-5xl font-bold text-bb-yellow mb-10">{synergy.title}</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-gray-300 text-xl md:text-2xl leading-relaxed mb-12">
              {synergy.description}
            </p>
            
            <div className="grid grid-cols-2 gap-8">
              {synergy.stats.map((stat, index) => (
                <div key={index} className="bg-white/5 p-8 rounded-xl border-l-4 border-bb-yellow shadow-lg">
                  <p className="text-gray-400 text-sm md:text-base uppercase tracking-wider mb-3">{stat.label}</p>
                  <p className="text-5xl md:text-6xl font-black text-white">{stat.value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-bb-blue-dark/50 p-10 rounded-2xl border border-white/10 shadow-2xl">
            <h3 className="text-2xl font-semibold text-white mb-8 flex items-center gap-3">
              <TrendingUp className="text-bb-yellow w-7 h-7" />
              Público-Alvo
            </h3>
            <div className="flex flex-col gap-4">
              {synergy.targetAudience.map((role, index) => (
                <div 
                  key={index}
                  className="px-6 py-4 bg-white/5 border border-white/10 rounded-xl text-lg text-gray-200 flex items-center gap-4 hover:border-bb-yellow/30 hover:bg-white/10 transition-all"
                >
                  <div className="w-2.5 h-2.5 rounded-full bg-bb-yellow shadow-[0_0_10px_#FCEB00]" />
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

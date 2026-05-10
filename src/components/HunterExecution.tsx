"use client";

import React from 'react';
import { presentationData } from '../data/presentationData';
import { CheckCircle2, Monitor, Users, ExternalLink, Globe } from 'lucide-react';

const HunterExecution = () => {
  const { hunterExecution } = presentationData;

  const getIcon = (region: string) => {
    if (region.includes("Texas") || region.includes("NY")) return <Users className="text-bb-yellow w-6 h-6" />;
    if (region.includes("Southeast")) return <ExternalLink className="text-bb-yellow w-6 h-6" />;
    if (region.includes("Consulados")) return <Globe className="text-bb-yellow w-6 h-6" />;
    return <Monitor className="text-bb-yellow w-6 h-6" />;
  };

  return (
    <section className="py-24 px-6 bg-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6 tracking-tight">
            {hunterExecution.title}
          </h2>
          <div className="h-1 w-20 bg-bb-yellow mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {hunterExecution.missions.map((mission, index) => (
            <div key={index} className="glass-card flex flex-col h-full border-t-4 border-t-bb-blue-light hover:border-t-bb-yellow transition-all duration-500 group">
              <div className="mb-8 flex items-center gap-4">
                <div className="p-3 bg-bb-blue-dark rounded-xl group-hover:scale-110 transition-transform">
                  {getIcon(mission.region)}
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-bb-yellow transition-colors">
                  {mission.region}
                </h3>
              </div>
              
              <ul className="space-y-6 flex-grow">
                {mission.activities.map((activity, i) => (
                  <li key={i} className="flex gap-4 text-white/70 leading-relaxed group/item">
                    <CheckCircle2 className="w-5 h-5 text-bb-yellow shrink-0 mt-1 opacity-40 group-hover/item:opacity-100 transition-opacity" />
                    <span className="text-sm md:text-base">{activity}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-10 pt-6 border-t border-white/5 text-xs text-bb-yellow/40 uppercase tracking-widest font-semibold">
                Originação Ativa BBNY
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HunterExecution;

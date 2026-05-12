"use client";

import React from 'react';
import { presentationData } from '../data/presentationData';
import { ArrowUpRight } from 'lucide-react';

const NextSteps = () => {
  const { nextSteps } = presentationData;

  return (
    <section className="min-h-[85vh] flex flex-col justify-center py-24 px-6 bg-bb-blue-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">{nextSteps.title}</h2>
          <div className="h-1.5 w-32 bg-bb-yellow mx-auto rounded-full shadow-[0_0_15px_#FCEB00]" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {nextSteps.steps.map((step, index) => (
            <div key={index} className="group relative">
              <div className="p-10 h-full bg-white/5 border border-white/10 rounded-[32px] hover:border-bb-yellow transition-all duration-500 flex flex-col shadow-xl hover:shadow-bb-yellow/10">
                <div className="flex justify-between items-start mb-8">
                  <span className="text-6xl font-black text-bb-yellow/90 group-hover:text-bb-yellow transition-colors">
                    {step.id}
                  </span>
                  <ArrowUpRight className="text-white/20 group-hover:text-bb-yellow w-8 h-8 transition-colors" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-6 group-hover:text-bb-yellow transition-colors leading-tight">
                  {step.label}
                </h3>
                <p className="text-white/70 text-lg leading-relaxed">
                  {step.detail}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Final Branding Touch */}
        <div className="mt-24 text-center">
            <div className="inline-flex items-center gap-6 px-6 py-3 bg-white/5 rounded-full border border-white/10">
                <span className="text-white/40 text-[10px] font-bold uppercase tracking-[0.4em]">Banco do Brasil</span>
                <div className="w-1.5 h-1.5 rounded-full bg-bb-yellow" />
                <span className="text-white/40 text-[10px] font-bold uppercase tracking-[0.4em]">New York Branch</span>
            </div>
        </div>
      </div>
    </section>
  );
};

export default NextSteps;

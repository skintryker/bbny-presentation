"use client";

import React from 'react';
import { presentationData } from '../data/presentationData';
import { ArrowUpRight } from 'lucide-react';

const NextSteps = () => {
  const { nextSteps } = presentationData;

  return (
    <section className="flex flex-col justify-center py-12 px-6">
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">{nextSteps.title}</h2>
          <div className="h-1 w-20 bg-bb-yellow mx-auto rounded-full" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {nextSteps.steps.map((step, index) => (
            <div key={index} className="group relative">
              <div className="p-8 h-full bg-white/5 border border-white/10 rounded-2xl hover:border-bb-yellow transition-all duration-300 flex flex-col">
                <div className="flex justify-between items-start mb-6">
                  <span className="text-4xl font-black text-bb-yellow">
                    {step.id}
                  </span>
                  <ArrowUpRight className="text-white/20 group-hover:text-bb-yellow w-6 h-6 transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">
                  {step.label}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">
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

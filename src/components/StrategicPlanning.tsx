"use client";

import React from 'react';
import { Filter } from 'lucide-react';
import { presentationData } from '../data/presentationData';

const StrategicPlanning = () => {
  const { planning } = presentationData;

  return (
    <section className="py-24 px-6 bg-bb-blue-dark">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">{planning.title}</h2>
          <p className="text-bb-yellow font-medium mb-4">{planning.context}</p>
          <p className="text-white/70 max-w-5xl mx-auto text-lg leading-relaxed">
            {planning.description}
          </p>
        </div>

        <div className="flex flex-col items-center max-w-3xl mx-auto">
          {planning.funnel.map((item, index) => {
            const widths = ['w-full', 'w-[90%]', 'w-[80%]', 'w-[70%]'];
            const colors = [
              'bg-white/5 border-white/10',
              'bg-white/10 border-white/10',
              'bg-bb-blue-light/30 border-bb-blue-light/50',
              'bg-bb-yellow border-bb-yellow shadow-[0_0_20px_rgba(252,235,0,0.3)]'
            ];
            const textColors = ['text-white', 'text-white', 'text-white', 'text-bb-blue-dark font-black'];
            const labelColors = ['text-white/80', 'text-white/80', 'text-white/80', 'text-bb-blue-dark font-bold'];

            return (
              <div 
                key={index}
                className={`${widths[index]} ${colors[index]} border p-6 mb-4 rounded-xl flex justify-between items-center transition-all duration-500 hover:translate-x-2`}
              >
                <div className="flex flex-col">
                  <span className={`${labelColors[index]} text-sm uppercase tracking-widest mb-1`}>
                    {item.label}
                  </span>
                  <span className={`${index === 3 ? 'text-bb-blue-dark/60' : 'text-white/40'} text-xs italic`}>
                    {item.description}
                  </span>
                </div>
                <div className="flex flex-col items-end">
                  <span className={`text-3xl ${textColors[index]} font-bold`}>
                    {item.value}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StrategicPlanning;

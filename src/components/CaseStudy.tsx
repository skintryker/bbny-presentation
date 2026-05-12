"use client";

import React from 'react';
import { presentationData } from '../data/presentationData';

const CaseStudy = () => {
  const { caseStudy } = presentationData;

  return (
    <section className="flex flex-col justify-center py-12 px-6 h-full">
      <div className="max-w-6xl mx-auto w-full flex flex-col gap-12 md:gap-20">
        
        {/* Header - Centered & Premium */}
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            {caseStudy.title}
          </h2>
          <div className="h-1 w-24 bg-bb-yellow mx-auto mb-6 rounded-full shadow-[0_0_10px_#FCEB00]"></div>
          <p className="text-bb-yellow font-black uppercase tracking-[0.4em] text-xs opacity-80">
            {caseStudy.subtitle}
          </p>
        </div>

        {/* Narrative Section - Balanced Distribution */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-stretch">
          {/* Status Quo */}
          <div className="group relative bg-white/5 border border-white/10 p-10 rounded-[32px] transition-all duration-500 hover:bg-white/[0.07]">
            <div className="flex items-center gap-3 text-white/40 uppercase tracking-widest text-[10px] font-black mb-8">
              <div className="w-8 h-[1px] bg-white/20"></div>
              <span>Status Quo</span>
            </div>
            <p className="text-gray-300 text-xl md:text-2xl leading-relaxed italic font-light">
              "{caseStudy.statusQuo}"
            </p>
          </div>

          {/* Strategic Result */}
          <div className="group relative bg-bb-blue-light/10 border border-bb-blue-light/20 p-10 rounded-[32px] shadow-2xl transition-all duration-500 hover:bg-bb-blue-light/15">
            <div className="flex items-center gap-3 text-bb-yellow uppercase tracking-widest text-[10px] font-black mb-8">
              <div className="w-8 h-[1px] bg-bb-yellow/30"></div>
              <span>Resultado Estratégico</span>
            </div>
            <p className="text-white text-xl md:text-2xl leading-relaxed font-medium">
              {caseStudy.impact}
            </p>
          </div>
        </div>

        {/* Impact Banner - High-end Finish */}
        <div className="max-w-4xl mx-auto w-full mt-4">
          <div className="relative bg-gradient-to-br from-bb-blue-dark to-bb-blue-light/20 border border-white/10 p-12 rounded-[50px] overflow-hidden group hover:border-bb-yellow/20 transition-all duration-700">
            {/* Subtle light bar */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-bb-yellow/30 to-transparent"></div>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24">
              <div className="flex flex-col items-center shrink-0">
                <span className="text-7xl md:text-8xl font-black text-white leading-none tracking-tighter">06</span>
                <span className="text-bb-yellow font-black uppercase tracking-[0.5em] text-[9px] mt-4 opacity-90">Simultâneas</span>
              </div>
              
              <div className="w-px h-20 bg-white/10 hidden md:block"></div>
              
              <div className="flex flex-col gap-3 text-center md:text-left">
                <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight leading-tight">
                  Contas Correntes Abertas
                </h3>
                <div className="flex gap-6 justify-center md:justify-start items-center mt-2">
                  <div className="flex items-center gap-2">
                    <span className="text-bb-yellow font-black tracking-widest text-lg">USD</span>
                  </div>
                  <div className="w-1.5 h-1.5 rounded-full bg-white/10"></div>
                  <div className="flex items-center gap-2">
                    <span className="text-bb-yellow font-black tracking-widest text-lg">EUR</span>
                  </div>
                  <div className="w-1.5 h-1.5 rounded-full bg-white/10"></div>
                  <div className="flex items-center gap-2">
                    <span className="text-bb-yellow font-black tracking-widest text-lg">GBP</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;

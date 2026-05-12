"use client";

import React from 'react';
import { presentationData } from '../data/presentationData';
import { AlertCircle, CheckCircle2 } from 'lucide-react';

const CaseStudy = () => {
  const { caseStudy } = presentationData;

  return (
    <section className="py-24 px-6 bg-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="glass-card overflow-hidden relative border-t-8 border-t-bb-yellow">
          <div className="p-12">
            <div className="mb-12">
              <h2 className="text-4xl font-bold text-white mb-2">{caseStudy.title}</h2>
              <p className="text-bb-yellow font-medium uppercase tracking-widest text-sm">{caseStudy.subtitle}</p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              {/* Challenge */}
              <div className="space-y-6">
                <div className="flex items-center gap-3 text-white opacity-40 uppercase tracking-widest text-xs font-bold">
                  <AlertCircle className="w-5 h-5" />
                  <span>Status Quo</span>
                </div>
                <div className="p-8 bg-black/20 rounded-2xl border border-white/5">
                  <p className="text-gray-300 text-xl leading-relaxed italic">
                    {caseStudy.statusQuo}
                  </p>
                </div>
              </div>

              {/* Approach */}
              <div className="space-y-6">
                <div className="flex items-center gap-3 text-bb-yellow uppercase tracking-widest text-xs font-bold">
                  <CheckCircle2 className="w-5 h-5" />
                  <span>Resultado Estratégico</span>
                </div>
                <div className="p-8 bg-bb-blue-light/10 rounded-2xl border border-bb-blue-light/20">
                  <p className="text-white/80 leading-relaxed text-lg">
                    {caseStudy.impact}
                  </p>
                </div>
              </div>
            </div>

            {/* Final Result - Centered Premium Banner */}
            <div className="relative max-w-3xl mx-auto mt-8">
              <div className="relative bg-gradient-to-br from-bb-blue-dark/90 to-bb-blue-light/40 backdrop-blur-md border border-white/10 p-10 rounded-[40px] overflow-hidden group hover:border-bb-yellow/30 transition-all duration-700 shadow-2xl">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-bb-yellow/50 to-transparent opacity-50"></div>

                <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16">
                  <div className="flex flex-col items-center shrink-0">
                    <span className="text-6xl md:text-7xl font-black text-white leading-none tracking-tighter">
                      06
                    </span>
                    <span className="text-bb-yellow font-bold uppercase tracking-[0.3em] text-[9px] mt-3 opacity-80">
                      Simultâneas
                    </span>
                  </div>

                  <div className="w-px h-16 bg-white/10 hidden md:block"></div>

                  <div className="flex flex-col gap-2 text-center md:text-left whitespace-nowrap">
                    <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight tracking-tight">
                      Contas Correntes Abertas
                    </h3>
                    <div className="flex gap-4 justify-center md:justify-start items-center mt-1">
                      <span className="text-bb-yellow font-black tracking-widest text-sm">USD</span>
                      <div className="w-1.5 h-1.5 rounded-full bg-white/10"></div>
                      <span className="text-bb-yellow font-black tracking-widest text-sm">EUR</span>
                      <div className="w-1.5 h-1.5 rounded-full bg-white/10"></div>
                      <span className="text-bb-yellow font-black tracking-widest text-sm">GBP</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;

"use client";

import React from 'react';
import { presentationData } from '../data/presentationData';
import { Wallet, ArrowRight, ShieldCheck, AlertCircle, CheckCircle2 } from 'lucide-react';

const CaseStudy = () => {
  const { caseStudy } = presentationData;

  return (
    <section className="min-h-[85vh] flex flex-col justify-center py-12 px-6">
      <div className="max-w-7xl mx-auto w-full">
        <div className="glass-card overflow-hidden relative border-t-8 border-t-bb-yellow p-12 md:p-16">
          <div className="p-0">
            <div className="mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">{caseStudy.title}</h2>
              <p className="text-bb-yellow font-bold uppercase tracking-widest text-base">{caseStudy.subtitle}</p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
              {/* Challenge */}
              <div className="space-y-8">
                <div className="flex items-center gap-4 text-white opacity-40 uppercase tracking-widest text-sm font-bold">
                  <AlertCircle className="w-6 h-6" />
                  <span>Status Quo</span>
                </div>
                <div className="p-10 bg-black/20 rounded-3xl border border-white/5">
                  <p className="text-gray-300 text-2xl leading-relaxed italic">
                    {caseStudy.statusQuo}
                  </p>
                </div>
              </div>

              {/* Approach */}
              <div className="space-y-8">
                <div className="flex items-center gap-4 text-bb-yellow uppercase tracking-widest text-sm font-bold">
                  <CheckCircle2 className="w-6 h-6" />
                  <span>Resultado Estratégico</span>
                </div>
                <div className="p-10 bg-bb-blue-light/10 rounded-3xl border border-bb-blue-light/20 shadow-xl">
                  <p className="text-white leading-relaxed text-2xl font-medium">
                    {caseStudy.impact}
                  </p>
                </div>
              </div>
            </div>

            {/* Final Result - Centered Premium Banner */}
            <div className="relative max-w-4xl mx-auto mt-12">
              <div className="relative bg-gradient-to-br from-bb-blue-dark/90 to-bb-blue-light/40 backdrop-blur-md border border-white/10 p-12 rounded-[50px] overflow-hidden group hover:border-bb-yellow/30 transition-all duration-700 shadow-2xl">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-bb-yellow/50 to-transparent opacity-50"></div>

                <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24">
                  <div className="flex flex-col items-center shrink-0">
                    <span className="text-7xl md:text-8xl font-black text-white leading-none tracking-tighter">
                      06
                    </span>
                    <span className="text-bb-yellow font-black uppercase tracking-[0.4em] text-[11px] mt-4 opacity-90">
                      Simultâneas
                    </span>
                  </div>

                  <div className="w-px h-24 bg-white/10 hidden md:block"></div>

                  <div className="flex flex-col gap-3 text-center md:text-left whitespace-nowrap">
                    <h3 className="text-3xl md:text-4xl font-black text-white leading-tight tracking-tight">
                      Contas Correntes Abertas
                    </h3>
                    <div className="flex gap-6 justify-center md:justify-start items-center mt-2">
                      <span className="text-bb-yellow font-black tracking-[0.2em] text-xl">USD</span>
                      <div className="w-2 h-2 rounded-full bg-bb-yellow/40"></div>
                      <span className="text-bb-yellow font-black tracking-[0.2em] text-xl">EUR</span>
                      <div className="w-2 h-2 rounded-full bg-bb-yellow/40"></div>
                      <span className="text-bb-yellow font-black tracking-[0.2em] text-xl">GBP</span>
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

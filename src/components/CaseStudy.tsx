"use client";

import React from 'react';
import { presentationData } from '../data/presentationData';
import { Wallet, ArrowRight, ShieldCheck, AlertCircle, CheckCircle2 } from 'lucide-react';

const CaseStudy = () => {
  const { caseStudy } = presentationData;

  return (
    <section className="flex flex-col justify-center py-8 px-6 min-h-[90vh]">
      <div className="max-w-6xl mx-auto w-full">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-2">{caseStudy.title}</h2>
          <div className="h-1 w-20 bg-bb-yellow mx-auto mb-4 rounded-full"></div>
          <p className="text-bb-yellow font-bold uppercase tracking-widest text-xs">{caseStudy.subtitle}</p>
        </div>

        <div className="glass-card relative overflow-hidden p-10 md:p-14 border-t-0 shadow-2xl">
          {/* subtle connecting line between boxes */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-px h-2/3 bg-white/5 hidden lg:block"></div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10 mb-12">
            {/* Status Quo - Left side */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 text-white/40 uppercase tracking-widest text-[10px] font-black">
                <div className="w-8 h-[1px] bg-white/20"></div>
                <span>Status Quo</span>
              </div>
              <div className="bg-black/20 p-8 rounded-2xl border border-white/5 h-full flex items-center">
                <p className="text-gray-400 text-lg leading-relaxed italic">
                  "{caseStudy.statusQuo}"
                </p>
              </div>
            </div>

            {/* Resultado - Right side */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 text-bb-yellow uppercase tracking-widest text-[10px] font-black">
                <div className="w-8 h-[1px] bg-bb-yellow/30"></div>
                <span>Resultado Estratégico</span>
              </div>
              <div className="bg-bb-blue-light/5 p-8 rounded-2xl border border-bb-blue-light/10 h-full flex items-center">
                <p className="text-white/80 text-lg leading-relaxed">
                  {caseStudy.impact}
                </p>
              </div>
            </div>
          </div>

          {/* Result Banner - Integrated at bottom */}
          <div className="relative pt-6">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
            <div className="bg-gradient-to-br from-bb-blue-dark/60 to-transparent border border-white/10 p-10 rounded-[32px] overflow-hidden">
              <div className="flex flex-col md:flex-row items-center justify-center gap-12">
                <div className="flex flex-col items-center">
                  <span className="text-6xl font-black text-white leading-none tracking-tighter">06</span>
                  <span className="text-bb-yellow font-black uppercase tracking-[0.4em] text-[8px] mt-2 opacity-80">Simultâneas</span>
                </div>
                <div className="w-px h-12 bg-white/10 hidden md:block"></div>
                <div className="flex flex-col gap-2 text-center md:text-left">
                  <h3 className="text-2xl font-bold text-white tracking-tight">Contas Correntes Abertas</h3>
                  <div className="flex gap-4 justify-center md:justify-start items-center text-bb-yellow font-black tracking-widest text-xs">
                    <span>USD</span>
                    <div className="w-1 h-1 rounded-full bg-bb-yellow/30"></div>
                    <span>EUR</span>
                    <div className="w-1 h-1 rounded-full bg-bb-yellow/30"></div>
                    <span>GBP</span>
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

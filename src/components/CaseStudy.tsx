"use client";

import React from 'react';
import { presentationData } from '../data/presentationData';
import { Wallet, ArrowRight, ShieldCheck, AlertCircle, CheckCircle2 } from 'lucide-react';

const CaseStudy = () => {
  const { caseStudy } = presentationData;

  return (
    <section className="py-24 px-6 bg-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="glass-card overflow-hidden relative border-t-8 border-t-bb-yellow">
          <div className="absolute top-0 right-0 w-64 h-64 bg-bb-yellow/5 rounded-full -mr-32 -mt-32 blur-3xl"></div>
          
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

            {/* Final Result */}
            <div className="relative">
              <div className="absolute inset-0 bg-bb-yellow blur-3xl opacity-5 rounded-full"></div>
              <div className="relative bg-gradient-to-br from-bb-blue-dark to-bb-blue-light border border-white/10 p-12 rounded-3xl shadow-2xl overflow-hidden">
                <div className="flex flex-col md:flex-row items-center gap-12">
                  <div className="flex flex-col items-center">
                    <span className="text-7xl md:text-8xl font-black text-white leading-none">06</span>
                    <span className="text-bb-yellow font-bold uppercase tracking-widest text-[10px] mt-2">Simultâneas</span>
                  </div>
                  <div className="flex flex-col gap-2 text-center md:text-left">
                    <h3 className="text-2xl md:text-3xl font-extrabold text-white leading-tight">
                      Contas Correntes Abertas
                    </h3>
                    <div className="flex gap-3 justify-center md:justify-start text-bb-yellow font-bold tracking-widest text-lg">
                      <span>USD</span>
                      <span className="text-white/20">|</span>
                      <span>EUR</span>
                      <span className="text-white/20">|</span>
                      <span>GBP</span>
                    </div>
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

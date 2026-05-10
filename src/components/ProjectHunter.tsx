"use client";

import React from 'react';
import { presentationData } from '../data/presentationData';
import { Target, MapPin, Search, Globe, ShieldCheck } from 'lucide-react';

const ProjectHunter = () => {
  const { hunter } = presentationData;

  return (
    <section className="py-24 px-6 bg-bb-blue-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Brazil Flavor Seal - Top Right (Thinner Premium Medal) */}
        <div className="absolute top-0 right-0 hidden md:block">
           <div className="bg-bb-yellow py-2 px-6 rounded-b-xl shadow-[0_10px_30px_rgba(252,235,0,0.2)] border-x border-b border-white/20 relative overflow-hidden">
              {/* Glossy Sheen Effect */}
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/40 via-transparent to-black/5 opacity-30 pointer-events-none" />
              
              <div className="relative z-10 flex flex-col items-center">
                <p className="text-bb-blue-dark font-black uppercase tracking-[0.2em] text-[10px] leading-none">
                  Flavor Brazil

                </p>
              </div>
           </div>
        </div>

        <div className="text-center mb-16 md:pr-32 md:text-left">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            {hunter.title}
          </h2>
          <p className="text-white/70 max-w-4xl text-lg leading-relaxed">
            {hunter.description}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Main Info Card: Chambers */}
          <div className="glass-card p-10 flex flex-col justify-center border-l-4 border-l-bb-yellow">
            <h3 className="text-2xl font-bold text-bb-yellow mb-6 flex items-center gap-3">
              <Search className="w-6 h-6" />
              Rede de Parcerias Estratégicas
            </h3>
            <p className="text-white/80 mb-8 leading-relaxed">
              {hunter.chambersDescription}
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              {hunter.memberships.map((member, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-white/5 rounded-xl border border-white/5 group hover:border-bb-yellow/50 transition-colors">
                  <MapPin className="text-bb-yellow w-4 h-4 group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-bold text-white">{member.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Strategic Focus Detail Card */}
          <div className="glass-card p-10 bg-bb-blue-light/10 flex flex-col justify-center border-r-4 border-r-bb-blue-light h-full">
             <div className="mb-0">
               <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                 <Target className="w-6 h-6 text-bb-yellow" />
                 Foco Estratégico
               </h3>
               <div className="space-y-8">
                  <div className="flex gap-4">
                    <div className="mt-1"><ShieldCheck className="text-bb-yellow w-5 h-5" /></div>
                    <p className="text-white font-bold text-lg leading-snug">
                      Criar conexões com clientes através das Câmaras, tanto empresas brasileiras como americanas com negócios no Brasil
                    </p>
                  </div>
                  <div className="flex gap-4">
                    <div className="mt-1"><ShieldCheck className="text-bb-yellow w-5 h-5" /></div>
                    <p className="text-white font-bold text-lg leading-snug">
                      Foco no produto de crédito Working Capital e Forfait
                    </p>
                  </div>
               </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectHunter;

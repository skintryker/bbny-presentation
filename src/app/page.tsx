"use client";

import React, { useState, useEffect } from "react";
import Hero from "@/components/Hero";
import Performance from "@/components/Performance";
import Funding from "@/components/Funding";
import InternalSynergy from "@/components/InternalSynergy";
import ProjectHunter from "@/components/ProjectHunter";
import HunterExecution from "@/components/HunterExecution";
import StrategicPlanning from "@/components/StrategicPlanning";
import CaseStudy from "@/components/CaseStudy";
import NextSteps from "@/components/NextSteps";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 9;

  const next = () => {
    if (currentSlide < totalSlides - 1) {
      setCurrentSlide(currentSlide + 1);
      window.scrollTo(0, 0);
    }
  };

  const prev = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
      window.scrollTo(0, 0);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentSlide]);

  return (
    <div className="bg-bb-blue-dark min-h-screen text-white relative overflow-x-hidden">
      
      {/* Barra de Progresso no Topo */}
      <div className="fixed top-0 left-0 w-full h-1 z-[9999] bg-white/5">
        <div 
          className="h-full bg-bb-yellow transition-all duration-300"
          style={{ width: `${((currentSlide + 1) / totalSlides) * 100}%` }}
        />
      </div>

      {/* Contador Discreto no Topo Direito */}
      <div className="fixed top-6 right-6 z-[9999]">
        <div className="bg-white/10 backdrop-blur-md text-white/40 px-3 py-1 rounded-full font-mono text-xs border border-white/5 tracking-tighter">
          {String(currentSlide + 1).padStart(2, '0')} / {String(totalSlides).padStart(2, '0')}
        </div>
      </div>

      {/* Área de Conteúdo - Centralização Total */}
      <div className="min-h-screen w-full flex items-center justify-center py-20 px-4 md:px-8">
        <div className="w-full max-w-7xl mx-auto flex flex-col justify-center animate-in fade-in duration-500">
          {currentSlide === 0 && <Hero />}
          {currentSlide === 1 && <Performance />}
          {currentSlide === 2 && <Funding />}
          {currentSlide === 3 && <InternalSynergy />}
          {currentSlide === 4 && <ProjectHunter />}
          {currentSlide === 5 && <HunterExecution />}
          {currentSlide === 6 && <StrategicPlanning />}
          {currentSlide === 7 && <CaseStudy />}
          {currentSlide === 8 && <NextSteps />}
        </div>
      </div>

      {/* Botões de Navegação Menores */}
      <div className="fixed bottom-10 right-10 z-[99999] flex gap-4">
        <button 
          onClick={prev}
          className={`w-14 h-14 rounded-full flex items-center justify-center border-2 transition-all active:scale-90 ${
            currentSlide === 0 
            ? 'bg-white/5 border-white/5 opacity-10 cursor-not-allowed' 
            : 'bg-bb-blue-dark/80 border-white/20 text-white hover:border-bb-yellow'
          }`}
          disabled={currentSlide === 0}
        >
          <ChevronLeft size={24} />
        </button>

        <button 
          onClick={next}
          className={`w-14 h-14 rounded-full flex items-center justify-center border-2 transition-all active:scale-90 ${
            currentSlide === totalSlides - 1 
            ? 'bg-white/5 border-white/5 opacity-10 cursor-not-allowed' 
            : 'bg-bb-yellow border-bb-yellow text-bb-blue-dark shadow-[0_0_30px_rgba(252,235,0,0.3)] hover:scale-110'
          }`}
          disabled={currentSlide === totalSlides - 1}
        >
          <ChevronRight size={24} />
        </button>
      </div>

    </div>
  );
}

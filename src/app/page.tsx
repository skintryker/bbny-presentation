"use client";

import React, { useState, useEffect, useCallback } from "react";
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
import Image from "next/image";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 9;

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev < totalSlides - 1 ? prev + 1 : prev));
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev > 0 ? prev - 1 : prev));
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") {
        e.preventDefault();
        nextSlide();
      }
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        prevSlide();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextSlide, prevSlide]);

  // Scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentSlide]);

  return (
    <main className="min-h-screen bg-bb-blue-dark text-white relative overflow-hidden flex flex-col">
      
      {/* ProgressBar & Top UI - Hidden ONLY on Hero (Slide 0) */}
      {currentSlide !== 0 && (
        <>
          {/* ProgressBar - Height 1 */}
          <div className="fixed top-0 left-0 w-full h-1 z-[9999] bg-white/5">
            <div 
              className="h-full bg-bb-yellow transition-all duration-300 shadow-[0_0_10px_#FCEB00]"
              style={{ width: `${((currentSlide + 1) / totalSlides) * 100}%` }}
            />
          </div>

          {/* Logo - Top Left */}
          <div className="fixed top-6 left-6 z-[9999] flex items-center gap-3 opacity-40">
            <Image src="./bb-logo.jpg" alt="BB" width={80} height={24} className="h-6 w-auto object-contain" />
          </div>

          {/* Counter - Top Right, Translucent */}
          <div className="fixed top-6 right-6 z-[9999]">
            <div className="bg-white/10 backdrop-blur-md text-white/40 px-3 py-1 rounded-full font-mono text-[10px] border border-white/5 tracking-tighter">
              {String(currentSlide + 1).padStart(2, '0')} / {String(totalSlides).padStart(2, '0')}
            </div>
          </div>
        </>
      )}

      {/* Content Area - Perfectly Centered (REMOVED PY-20 TO FIX POSITIONING) */}
      <div className="flex-grow w-full flex items-center justify-center relative z-10 overflow-y-auto">
        <div className="w-full max-w-7xl mx-auto animate-in fade-in duration-500 px-4 md:px-8">
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

      {/* Navigation Controls - Size 12, Bottom Right */}
      <div className="fixed bottom-10 right-10 z-[99999] flex gap-4">
        <button 
          onClick={(e) => { e.stopPropagation(); prevSlide(); }}
          disabled={currentSlide === 0}
          className={`w-12 h-12 rounded-full flex items-center justify-center border transition-all active:scale-90 ${
            currentSlide === 0 
              ? 'opacity-10 border-white/10 cursor-not-allowed' 
              : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-bb-yellow text-white active:scale-95'
          }`}
        >
          <ChevronLeft size={20} />
        </button>

        <button 
          onClick={(e) => { e.stopPropagation(); nextSlide(); }}
          disabled={currentSlide === totalSlides - 1}
          className={`w-12 h-12 rounded-full flex items-center justify-center border transition-all active:scale-90 ${
            currentSlide === totalSlides - 1 
              ? 'opacity-10 border-white/10 cursor-not-allowed' 
              : 'bg-bb-yellow border-bb-yellow text-bb-blue-dark hover:scale-110 active:scale-95 shadow-[0_0_20px_rgba(252,235,0,0.3)]'
          }`}
        >
          <ChevronRight size={20} />
        </button>
      </div>

    </main>
  );
}

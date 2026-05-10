import Hero from "@/components/Hero";
import Performance from "@/components/Performance";
import Funding from "@/components/Funding";
import InternalSynergy from "@/components/InternalSynergy";
import ProjectHunter from "@/components/ProjectHunter";
import HunterExecution from "@/components/HunterExecution";
import StrategicPlanning from "@/components/StrategicPlanning";
import CaseStudy from "@/components/CaseStudy";
import NextSteps from "@/components/NextSteps";

import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-bb-yellow selection:text-bb-blue-dark">
      <Hero />
      <div className="space-y-0">
        <Performance />
        <Funding />
        <InternalSynergy />
        <ProjectHunter />
        <HunterExecution />
        <StrategicPlanning />
        <CaseStudy />
        <NextSteps />
      </div>
      
      {/* Footer footer-disclaimer */}
      <footer className="py-12 px-6 border-t border-white/5 bg-bb-blue-dark">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4">
            <Image 
              src="/bb-logo.jpg" 
              alt="Banco do Brasil" 
              width={150} 
              height={40} 
              className="h-8 w-auto object-contain transition-all"
            />
            <div className="h-4 w-px bg-white/20 hidden md:block" />
            <div className="text-bb-yellow font-bold tracking-widest text-xs uppercase">
              New York Branch
            </div>
          </div>
          <div className="text-white/40 text-xs">
            © 2026 Banco do Brasil. Todos os direitos reservados. Apresentação Interna.
          </div>
        </div>
      </footer>
    </main>
  );
}

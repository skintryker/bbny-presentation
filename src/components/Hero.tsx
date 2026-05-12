import { presentationData } from "@/data/presentationData";
import Image from "next/image";

export default function Hero() {
  const { hero } = presentationData;
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-bb-blue-dark relative overflow-hidden">
      <div className="z-10 max-w-4xl">
        <div className="mb-12 flex justify-center">
          <img 
            src="./bb-logo.jpg" 
            alt="Banco do Brasil" 
            style={{ width: '240px', height: 'auto' }}
            className="object-contain"
          />
        </div>
        <h1 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight">
          {hero.title}
        </h1>
        <p className="text-xl md:text-2xl text-white/80 mb-12">
          {hero.subtitle}
        </p>
        <div className="h-px w-24 bg-bb-yellow mx-auto mb-8" />
        <p className="text-lg font-medium tracking-widest uppercase text-bb-yellow">
          {hero.presenter}
        </p>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-bb-yellow rounded-full" />
        </div>
      </div>
    </section>
  );
}

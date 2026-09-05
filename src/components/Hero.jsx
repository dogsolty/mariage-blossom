import React from "react";
import { ART_ASSETS } from "@/data/products";

export default function Hero() {
  return (
    <section
      id="genesis"
      className="relative min-h-screen flex items-center overflow-hidden contour-bg"
    >
      {/* Atmospheric background */}
      <div className="absolute inset-0">
        <img
          src={ART_ASSETS.hero}
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover opacity-50"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 50% 60%, transparent, #07080C 75%)",
          }}
        />
      </div>

      {/* Floating main floral specimen */}
      <div className="absolute right-[-6%] top-1/2 -translate-y-1/2 w-[44%] md:w-[38%] hidden sm:block animate-float pointer-events-none">
        <img
          src={ART_ASSETS.floral}
          alt="Obsidius Filamentosum specimen"
          className="w-full opacity-90 mix-blend-screen drop-shadow-[0_0_60px_rgba(139,26,26,0.4)]"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1600px] mx-auto px-6 md:px-10 pt-24">
        <div className="font-mono-tech text-[11px] tracking-[0.4em] uppercase text-[#00F2FF]/80 mb-6">
          Bio-Digital Couture / Vol.01
        </div>

        <h1 className="font-serif-display leading-[0.85]">
          <span className="block font-mono-tech not-italic text-[13px] md:text-[15px] tracking-[0.35em] uppercase text-[#F4F4F9]/60 mb-4 md:mb-6">
            Mariage
          </span>
          <span className="block italic font-light text-[#F4F4F9] text-[clamp(4rem,16vw,12rem)] bio-text-glow">
            Blossom
          </span>
        </h1>

        <div className="bio-rule max-w-md my-10" />

        <p className="max-w-xl font-mono-tech text-sm md:text-base leading-[1.7] text-[#F4F4F9]/70">
          A living specimen of apparel. Where the raw vitality of botanical
          growth collides with the precision of high-tech streetwear —
          exhibited within an immersive obsidian void.
        </p>

        <div className="mt-12 flex flex-wrap items-center gap-6">
          <a
            href="#specimens"
            className="group relative inline-flex items-center gap-3 px-8 py-4 bg-[#00F2FF] text-[#07080C] font-mono-tech text-[11px] tracking-[0.3em] uppercase hover:bg-[#C378FF] transition-colors duration-500 focus-cyan"
          >
            Enter the Gallery
            <ArrowIcon />
          </a>
          <a
            href="#manifesto"
            className="font-mono-tech text-[11px] tracking-[0.3em] uppercase text-[#F4F4F9]/70 hover:text-[#00F2FF] transition-colors focus-cyan border-b border-[#F4F4F9]/20 pb-1"
          >
            Read the Manifesto
          </a>
        </div>

        {/* Coordinates cluster */}
        <div className="hidden md:flex items-center gap-8 mt-20 font-mono-tech text-[10px] tracking-[0.2em] uppercase text-[#F4F4F9]/40">
          <span>LAT 35.0116°N</span>
          <span>LON 135.7681°E</span>
          <span className="text-[#C378FF]">DROP 09.2026</span>
          <span>SPECIMENS 005</span>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#F4F4F9]/40">
        <span className="font-mono-tech text-[9px] tracking-[0.3em] uppercase">
          Scroll
        </span>
        <span className="w-px h-10 bg-gradient-to-b from-[#00F2FF] to-transparent animate-pulse-glow" />
      </div>
    </section>
  );
}

const ArrowIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);
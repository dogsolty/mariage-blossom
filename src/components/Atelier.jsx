import React from "react";
import { ART_ASSETS } from "@/data/products";

export default function Atelier() {
  return (
    <section id="atelier" className="relative py-24 md:py-32 px-6 md:px-10 overflow-hidden">
      <div className="max-w-[1600px] mx-auto">
        <div className="font-mono-tech text-[11px] tracking-[0.3em] uppercase text-[#00F2FF] mb-4">
          04 / Atelier
        </div>
        <h2 className="font-serif-display italic font-light text-[clamp(2.5rem,6vw,5rem)] leading-[1] text-[#F4F4F9] mb-16">
          Obsidius Filamentosum.
        </h2>

        <div className="grid md:grid-cols-12 gap-6 md:gap-8 items-center">
          <div className="md:col-span-5">
            <div className="liquid-border border border-[#00F2FF]/15 overflow-hidden">
              <img
                src={ART_ASSETS.floral}
                alt="Obsidius Filamentosum primary specimen"
                loading="lazy"
                className="w-full object-cover"
              />
            </div>
            <p className="font-serif-display italic text-center text-sm text-[#C378FF]/70 mt-4">
              Primary Specimen — Variations in Red
            </p>
          </div>

          <div className="md:col-span-7 space-y-6">
            <p className="font-serif-display italic text-2xl md:text-3xl leading-[1.4] text-[#F4F4F9]/85">
              Six variations of a single vascular bloom — a botanical etching
              that reads as root, capillary, and dried petal at once.
            </p>
            <div className="bio-rule max-w-xs" />
            <p className="font-mono-tech text-sm leading-[1.8] text-[#F4F4F9]/60">
              The artwork combines biological, medical-illustration line work
              with a dark, moody aesthetic. Each garment in the collection
              carries a fragment of the filament network — Frontalis,
              Verticalis Profunda, Inferior Ascendens, Lateralis, Micro-Textura,
              and In-Situ.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-4">
              {[
                "1. Frontalis",
                "2. Verticalis Profunda",
                "3. Inferior Ascendens",
                "4. Lateralis",
                "5. Micro-Textura",
                "6. In-Situ",
              ].map((label) => (
                <div
                  key={label}
                  className="border border-[#00F2FF]/15 px-4 py-3 font-mono-tech text-[10px] tracking-[0.15em] uppercase text-[#F4F4F9]/60 hover:text-[#00F2FF] hover:border-[#00F2FF]/40 transition-colors"
                >
                  {label}
                </div>
              ))}
            </div>

            <div className="pt-6">
              <img
                src={ART_ASSETS.sheet}
                alt="Specimen variation sheet"
                loading="lazy"
                className="w-full max-w-md opacity-80 liquid-border border border-[#00F2FF]/15"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
import React, { useState } from "react";
import { PRODUCTS, formatPrice } from "@/data/products";
import { useCart } from "@/components/CartContext";

export default function Anatomy() {
  const product = PRODUCTS[1]; // MA-1 as the anatomy subject
  const [synthesis, setSynthesis] = useState(false);
  const { add } = useCart();

  return (
    <section id="anatomy" className="relative py-24 md:py-32 px-6 md:px-10 overflow-hidden">
      <div className="max-w-[1600px] mx-auto">
        <div className="font-mono-tech text-[11px] tracking-[0.3em] uppercase text-[#00F2FF] mb-4">
          03 / Anatomy View
        </div>
        <h2 className="font-serif-display italic font-light text-[clamp(2.5rem,6vw,5rem)] leading-[1] text-[#F4F4F9] mb-16">
          Technical Storytelling.
        </h2>

        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Floating garment */}
          <div className="relative">
            <div
              className="absolute inset-0 transition-opacity duration-700 pointer-events-none"
              style={{
                opacity: synthesis ? 0.6 : 0,
                background:
                  "radial-gradient(circle at 50% 50%, rgba(0,242,255,0.35), rgba(195,120,255,0.25) 50%, transparent 75%)",
              }}
            />
            <div className="relative animate-float">
              <img
                src={product.image}
                alt={product.name}
                className={`w-full max-w-md mx-auto transition-all duration-700 drop-shadow-[0_30px_60px_rgba(0,0,0,0.6)] ${
                  synthesis
                    ? "brightness-125 saturate-150"
                    : "brightness-90"
                }`}
              />
            </div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 font-mono-tech text-[9px] tracking-[0.3em] uppercase text-[#F4F4F9]/30">
              Gravity-Defying Capture
            </div>
          </div>

          {/* Spec feed */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="font-mono-tech text-[9px] tracking-[0.25em] uppercase text-[#00F2FF]">
                {product.code}
              </span>
              <span className="font-mono-tech text-[9px] tracking-[0.25em] uppercase text-[#F4F4F9]/50">
                {product.category}
              </span>
            </div>
            <h3 className="font-serif-display italic text-4xl md:text-5xl text-[#F4F4F9] mb-2">
              {product.name}
            </h3>
            <p className="font-serif-display italic text-lg text-[#C378FF]/80 mb-8">
              {product.latin}
            </p>
            <p className="font-mono-tech text-sm leading-[1.8] text-[#F4F4F9]/65 mb-10 max-w-md">
              {product.note}
            </p>

            {/* Synthesis Mode toggle */}
            <div className="flex items-center gap-4 mb-10">
              <span className="font-mono-tech text-[10px] tracking-[0.25em] uppercase text-[#F4F4F9]/50">
                Studio White
              </span>
              <button
                onClick={() => setSynthesis((s) => !s)}
                className="relative w-14 h-7 rounded-full border border-[#00F2FF]/40 focus-cyan"
                aria-pressed={synthesis}
                aria-label="Toggle synthesis mode"
              >
                <span
                  className={`absolute top-1/2 -translate-y-1/2 w-5 h-5 rounded-full transition-all duration-500 ${
                    synthesis
                      ? "left-8 bg-[#C378FF] shadow-[0_0_12px_#C378FF]"
                      : "left-1 bg-[#00F2FF] shadow-[0_0_12px_#00F2FF]"
                  }`}
                />
              </button>
              <span className="font-mono-tech text-[10px] tracking-[0.25em] uppercase text-[#00F2FF]">
                Synthesis Mode
              </span>
            </div>

            {/* Spec grid */}
            <div className="border-t border-[#00F2FF]/15">
              {Object.entries(product.specs).map(([k, v]) => (
                <div
                  key={k}
                  className="flex items-center justify-between py-4 border-b border-[#00F2FF]/10"
                >
                  <span className="font-mono-tech text-[10px] tracking-[0.25em] uppercase text-[#F4F4F9]/40">
                    {k}
                  </span>
                  <span className="font-serif-display italic text-lg text-[#F4F4F9]/90">
                    {v}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between mt-10">
              <span className="font-mono-tech text-2xl text-[#F4F4F9]">
                {formatPrice(product.price)}
              </span>
              <button
                onClick={() => add(product)}
                className="font-mono-tech text-[11px] tracking-[0.3em] uppercase px-8 py-4 bg-[#00F2FF] text-[#07080C] hover:bg-[#C378FF] transition-colors duration-500 focus-cyan min-h-[44px]"
              >
                Add to Collection
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
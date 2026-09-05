import React, { useState } from "react";
import { PRODUCTS, formatPrice } from "@/data/products";
import { useCart } from "@/components/CartContext";

// Asymmetric grid spans — the "vine" path
const SPANS = [
  "md:col-span-5 md:row-span-2",
  "md:col-span-4",
  "md:col-span-3",
  "md:col-span-3",
  "md:col-span-4",
];

export default function SpecimenGallery() {
  return (
    <section id="specimens" className="relative py-24 md:py-32 px-6 md:px-10">
      <div className="max-w-[1600px] mx-auto">
        <div className="flex items-end justify-between mb-16 flex-wrap gap-6">
          <div>
            <div className="font-mono-tech text-[11px] tracking-[0.3em] uppercase text-[#00F2FF] mb-4">
              02 / Specimen Archive
            </div>
            <h2 className="font-serif-display italic font-light text-[clamp(2.5rem,6vw,5rem)] leading-[1] text-[#F4F4F9]">
              The Floating Collection
            </h2>
          </div>
          <p className="font-mono-tech text-xs leading-[1.7] text-[#F4F4F9]/50 max-w-xs">
            Products are not boxed — they float in the obsidian void. Hover to
            reveal the bioluminescent pattern within.
          </p>
        </div>

        <div className="grid md:grid-cols-12 gap-4 md:gap-6 auto-rows-[minmax(220px,auto)]">
          {PRODUCTS.map((p, i) => (
            <SpecimenCard key={p.id} product={p} span={SPANS[i]} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SpecimenCard({ product, span, index }) {
  const { add } = useCart();
  const [hovered, setHovered] = useState(false);

  return (
    <article
      className={`group relative ${span} liquid-border border border-[#00F2FF]/10 overflow-hidden bg-[#12141F]/40`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="absolute inset-0">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className={`w-full h-full object-cover transition-all duration-700 ${
            hovered ? "scale-105 brightness-110" : "brightness-90"
          }`}
        />
        {/* X-Ray glow overlay */}
        <div
          className="absolute inset-0 transition-opacity duration-500 pointer-events-none"
          style={{
            opacity: hovered ? 0.35 : 0,
            background:
              "radial-gradient(circle at 50% 50%, rgba(0,242,255,0.4), rgba(195,120,255,0.2) 60%, transparent)",
            mixBlendMode: "screen",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, transparent 40%, rgba(7,8,12,0.95) 100%)",
          }}
        />
      </div>

      <div className="relative h-full min-h-[220px] md:min-h-[280px] flex flex-col justify-end p-5 md:p-6">
        <div className="flex items-center gap-2 mb-3">
          <span className="font-mono-tech text-[9px] tracking-[0.25em] uppercase text-[#00F2FF]">
            {product.code}
          </span>
          <span className="w-1 h-1 rounded-full bg-[#C378FF]" />
          <span className="font-mono-tech text-[9px] tracking-[0.25em] uppercase text-[#F4F4F9]/50">
            {product.category}
          </span>
        </div>
        <h3 className="font-serif-display italic text-2xl md:text-3xl text-[#F4F4F9] leading-tight mb-1">
          {product.name}
        </h3>
        <p className="font-serif-display italic text-sm text-[#C378FF]/80 mb-4">
          {product.latin}
        </p>

        <div className="flex items-center justify-between">
          <span className="font-mono-tech text-sm text-[#F4F4F9]/90">
            {formatPrice(product.price)}
          </span>
          <button
            onClick={() => add(product)}
            className="font-mono-tech text-[10px] tracking-[0.25em] uppercase px-4 py-2.5 border border-[#00F2FF]/40 text-[#00F2FF] hover:bg-[#00F2FF] hover:text-[#07080C] transition-colors duration-300 focus-cyan min-h-[44px]"
          >
            Collect
          </button>
        </div>
      </div>

      <span className="absolute top-4 right-4 font-mono-tech text-[9px] tracking-[0.2em] text-[#F4F4F9]/30">
        0{index + 1}
      </span>
    </article>
  );
}
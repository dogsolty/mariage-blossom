import React from "react";

export default function Manifesto() {
  return (
    <section
      id="manifesto"
      className="relative py-32 md:py-48 px-6 md:px-10 overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto grid md:grid-cols-12 gap-12">
        <div className="md:col-span-4">
          <div className="font-mono-tech text-[11px] tracking-[0.3em] uppercase text-[#00F2FF] mb-6">
            01 / Manifesto
          </div>
          <h2 className="font-serif-display italic font-light text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.05] text-[#F4F4F9]">
            The Neo-Botanist's Lab.
          </h2>
        </div>

        <div className="md:col-span-7 md:col-start-6 space-y-8">
          <p className="font-serif-display italic text-2xl md:text-3xl leading-[1.4] text-[#F4F4F9]/85">
            We treat every garment not merely as apparel, but as a living
            specimen — showcased within a high-resolution, immersive void.
          </p>
          <div className="bio-rule max-w-xs" />
          <p className="font-mono-tech text-sm md:text-base leading-[1.8] text-[#F4F4F9]/60">
            Fluid organic forms collide with rigid structural engineering. We
            abandon the traditional row for a variable-width asymmetric grid —
            a vine growing across the screen, content following its invisible
            curving path. Extreme whitespace isolates the product; dense
            clusters of technical data frame it. This is the marriage of
            synthetic fiber and organic evolution.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8">
            {[
              ["VOL", "01"],
              ["SPECIMENS", "05"],
              ["DROP", "09.26"],
              ["EDITION", "Limited"],
            ].map(([k, v]) => (
              <div key={k}>
                <div className="font-mono-tech text-[10px] tracking-[0.25em] uppercase text-[#F4F4F9]/40 mb-2">
                  {k}
                </div>
                <div className="font-serif-display italic text-2xl text-[#C378FF] orchid-glow">
                  {v}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
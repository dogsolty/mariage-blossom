import React from "react";

export default function Footer() {
  return (
    <footer className="relative border-t border-[#00F2FF]/15 pt-20 pb-10 px-6 md:px-10 contour-bg">
      <div className="max-w-[1600px] mx-auto">
        <div className="grid md:grid-cols-12 gap-12 mb-16">
          <div className="md:col-span-5">
            <h3 className="font-serif-display italic font-light text-[clamp(3rem,8vw,7rem)] leading-[0.9] text-[#F4F4F9] bio-text-glow">
              Blossom
            </h3>
            <p className="font-mono-tech text-[11px] tracking-[0.3em] uppercase text-[#00F2FF] mt-4">
              Mariage — Bio-Digital Couture
            </p>
            <p className="font-mono-tech text-xs leading-[1.8] text-[#F4F4F9]/50 mt-6 max-w-sm">
              A living specimen of apparel. Exhibited in the void, crafted in
              Kyoto.
            </p>
          </div>

          <div className="md:col-span-2">
            <FooterCol
              title="Navigate"
              links={[
                ["Genesis", "#genesis"],
                ["Manifesto", "#manifesto"],
                ["Specimens", "#specimens"],
                ["Anatomy", "#anatomy"],
              ]}
            />
          </div>
          <div className="md:col-span-2">
            <FooterCol
              title="Atelier"
              links={[
                ["The Variations", "#atelier"],
                ["Lookbook", "#specimens"],
                ["Drops", "#genesis"],
              ]}
            />
          </div>
          <div className="md:col-span-3">
            <div className="font-mono-tech text-[10px] tracking-[0.25em] uppercase text-[#F4F4F9]/40 mb-5">
              Contact
            </div>
            <div className="space-y-3 font-mono-tech text-xs text-[#F4F4F9]/70">
              <a href="mailto:hello@mariageblossom.jp" className="block hover:text-[#00F2FF] transition-colors focus-cyan">
                hello@mariageblossom.jp
              </a>
              <a href="tel:+81000000000" className="block hover:text-[#00F2FF] transition-colors focus-cyan">
                +81 (0)00 000 0000
              </a>
              <p className="pt-2 leading-[1.7] text-[#F4F4F9]/40">
                Kyoto Atelier<br />
                35.0116°N, 135.7681°E
              </p>
            </div>
            <div className="flex gap-3 mt-6">
              {["IG", "TW", "PT"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="w-10 h-10 flex items-center justify-center border border-[#00F2FF]/25 font-mono-tech text-[10px] tracking-[0.15em] text-[#F4F4F9]/60 hover:text-[#00F2FF] hover:border-[#00F2FF]/60 transition-colors focus-cyan"
                  aria-label={`${s} profile`}
                >
                  {s}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="bio-rule opacity-40 mb-8" />
        <div className="flex flex-wrap items-center justify-between gap-4 font-mono-tech text-[10px] tracking-[0.2em] uppercase text-[#F4F4F9]/35">
          <span>© 2026 Mariage Blossom — All Specimens Reserved</span>
          <div className="flex gap-6">
            <a href="#" className="hover:text-[#00F2FF] transition-colors focus-cyan">Privacy</a>
            <a href="#" className="hover:text-[#00F2FF] transition-colors focus-cyan">Terms</a>
            <a href="#" className="hover:text-[#00F2FF] transition-colors focus-cyan">Shipping</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }) {
  return (
    <>
      <div className="font-mono-tech text-[10px] tracking-[0.25em] uppercase text-[#F4F4F9]/40 mb-5">
        {title}
      </div>
      <ul className="space-y-3">
        {links.map(([label, href]) => (
          <li key={label}>
            <a
              href={href}
              className="font-mono-tech text-xs text-[#F4F4F9]/70 hover:text-[#00F2FF] transition-colors focus-cyan"
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
}
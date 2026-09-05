import React, { useState, useEffect } from "react";
import { useCart } from "@/components/CartContext";

const LINKS = [
  { label: "Genesis", href: "#genesis" },
  { label: "Manifesto", href: "#manifesto" },
  { label: "Specimens", href: "#specimens" },
  { label: "Anatomy", href: "#anatomy" },
  { label: "Atelier", href: "#atelier" },
];

export default function Navbar() {
  const { count, setIsOpen } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled ? "glass-panel" : "bg-transparent"
        }`}
      >
        <nav className="max-w-[1600px] mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
          <a
            href="#genesis"
            className="font-mono-tech text-[11px] tracking-[0.3em] uppercase text-[#F4F4F9]/80 hover:text-[#00F2FF] transition-colors focus-cyan"
          >
            Mariage<span className="text-[#00F2FF]">.</span>Blossom
          </a>

          <div className="hidden md:flex items-center gap-8">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="font-mono-tech text-[11px] tracking-[0.25em] uppercase text-[#F4F4F9]/60 hover:text-[#00F2FF] transition-colors focus-cyan"
              >
                {l.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsOpen(true)}
              className="group flex items-center gap-2 font-mono-tech text-[11px] tracking-[0.25em] uppercase text-[#F4F4F9]/80 hover:text-[#00F2FF] transition-colors focus-cyan px-2 py-2"
              aria-label="Open collection bag"
            >
              <span className="hidden sm:inline">Collection Bag</span>
              <span className="relative">
                <BagIcon />
                {count > 0 && (
                  <span className="absolute -top-2 -right-2 min-w-[16px] h-4 px-1 flex items-center justify-center rounded-full bg-[#00F2FF] text-[#07080C] text-[9px] font-bold animate-pulse-glow">
                    {count}
                  </span>
                )}
              </span>
            </button>
            <button
              onClick={() => setMenuOpen(true)}
              className="md:hidden text-[#F4F4F9] focus-cyan p-2"
              aria-label="Open menu"
            >
              <BurgerIcon />
            </button>
          </div>
        </nav>
        <div className="bio-rule opacity-60" />
      </header>

      {/* Full-screen frosted menu overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-[60] md:hidden"
          style={{ background: "rgba(7,8,12,0.85)", backdropFilter: "blur(20px)" }}
        >
          <div className="flex justify-end p-6">
            <button
              onClick={() => setMenuOpen(false)}
              className="text-[#F4F4F9] focus-cyan p-2"
              aria-label="Close menu"
            >
              <CloseIcon />
            </button>
          </div>
          <div className="flex flex-col items-center justify-center gap-8 pt-16">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="font-serif-display italic text-4xl text-[#F4F4F9] hover:text-[#00F2FF] transition-colors focus-cyan"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

const BagIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
    <path d="M6 7h12l-1 13H7L6 7z" />
    <path d="M9 7a3 3 0 016 0" />
  </svg>
);
const BurgerIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
    <path d="M3 6h18M3 12h18M3 18h18" />
  </svg>
);
const CloseIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
    <path d="M5 5l14 14M19 5L5 19" />
  </svg>
);
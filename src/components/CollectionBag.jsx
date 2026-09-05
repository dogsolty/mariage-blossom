import React, { useEffect } from "react";
import { useCart } from "@/components/CartContext";
import { formatPrice } from "@/data/products";

export default function CollectionBag() {
  const { items, isOpen, setIsOpen, remove, setQty, total, count } = useCart();

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-[70] transition-opacity duration-500 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        style={{
          background: "rgba(7,8,12,0.6)",
          backdropFilter: "blur(8px)",
        }}
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />

      {/* Drawer */}
      <aside
        className={`fixed top-0 right-0 z-[80] h-full w-full max-w-md glass-panel border-l border-[#00F2FF]/25 transition-transform duration-500 flex flex-col ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-label="Collection bag"
      >
        <div className="flex items-center justify-between p-6 border-b border-[#00F2FF]/15">
          <div>
            <div className="font-mono-tech text-[10px] tracking-[0.3em] uppercase text-[#00F2FF]">
              Collection Bag
            </div>
            <div className="font-serif-display italic text-2xl text-[#F4F4F9] mt-1">
              {count} {count === 1 ? "specimen" : "specimens"}
            </div>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-[#F4F4F9]/70 hover:text-[#00F2FF] transition-colors focus-cyan p-2"
            aria-label="Close collection bag"
          >
            <CloseIcon />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {items.length === 0 && (
            <div className="flex flex-col items-center justify-center h-full text-center gap-4">
              <div className="font-serif-display italic text-2xl text-[#F4F4F9]/50">
                The void is empty.
              </div>
              <p className="font-mono-tech text-xs text-[#F4F4F9]/40 max-w-xs leading-[1.7]">
                Collect specimens from the gallery to assemble your edition.
              </p>
              <button
                onClick={() => setIsOpen(false)}
                className="mt-2 font-mono-tech text-[10px] tracking-[0.3em] uppercase text-[#00F2FF] border-b border-[#00F2FF]/40 pb-1 hover:text-[#C378FF] transition-colors focus-cyan"
              >
                Enter Gallery
              </button>
            </div>
          )}

          {items.map((item) => (
            <div
              key={item.id}
              className="flex gap-4 border border-[#00F2FF]/12 p-3 bg-[#12141F]/40"
            >
              <div className="w-20 h-20 shrink-0 overflow-hidden border border-[#00F2FF]/15">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-mono-tech text-[9px] tracking-[0.2em] uppercase text-[#00F2FF]">
                  {item.code}
                </div>
                <h4 className="font-serif-display italic text-lg text-[#F4F4F9] leading-tight truncate">
                  {item.name}
                </h4>
                <div className="flex items-center justify-between mt-2">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setQty(item.id, item.qty - 1)}
                      className="w-7 h-7 border border-[#00F2FF]/30 text-[#F4F4F9]/70 hover:text-[#00F2FF] hover:border-[#00F2FF]/60 transition-colors focus-cyan"
                      aria-label="Decrease quantity"
                    >
                      −
                    </button>
                    <span className="font-mono-tech text-sm text-[#F4F4F9] w-6 text-center">
                      {item.qty}
                    </span>
                    <button
                      onClick={() => setQty(item.id, item.qty + 1)}
                      className="w-7 h-7 border border-[#00F2FF]/30 text-[#F4F4F9]/70 hover:text-[#00F2FF] hover:border-[#00F2FF]/60 transition-colors focus-cyan"
                      aria-label="Increase quantity"
                    >
                      +
                    </button>
                  </div>
                  <span className="font-mono-tech text-sm text-[#F4F4F9]">
                    {formatPrice(item.price * item.qty)}
                  </span>
                </div>
              </div>
              <button
                onClick={() => remove(item.id)}
                className="text-[#F4F4F9]/30 hover:text-[#C378FF] transition-colors self-start focus-cyan p-1"
                aria-label={`Remove ${item.name}`}
              >
                <CloseIcon small />
              </button>
            </div>
          ))}
        </div>

        {items.length > 0 && (
          <div className="p-6 border-t border-[#00F2FF]/15 space-y-4">
            <div className="flex items-center justify-between">
              <span className="font-mono-tech text-[10px] tracking-[0.25em] uppercase text-[#F4F4F9]/50">
                Total
              </span>
              <span className="font-serif-display italic text-3xl text-[#F4F4F9] orchid-glow">
                {formatPrice(total)}
              </span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="w-full font-mono-tech text-[11px] tracking-[0.3em] uppercase py-4 bg-[#00F2FF] text-[#07080C] hover:bg-[#C378FF] transition-colors duration-500 focus-cyan min-h-[44px]"
            >
              Reserve the Edition
            </button>
            <p className="font-mono-tech text-[9px] tracking-[0.15em] uppercase text-[#F4F4F9]/30 text-center">
              Exhibition reservation — no payment required
            </p>
          </div>
        )}
      </aside>
    </>
  );
}

const CloseIcon = ({ small }) => (
  <svg
    width={small ? 14 : 22}
    height={small ? 14 : 22}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.2"
  >
    <path d="M5 5l14 14M19 5L5 19" />
  </svg>
);
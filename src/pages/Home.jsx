import React from "react";
import { CartProvider } from "@/components/CartContext";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Manifesto from "@/components/Manifesto";
import SpecimenGallery from "@/components/SpecimenGallery";
import Anatomy from "@/components/Anatomy";
import Atelier from "@/components/Atelier";
import Footer from "@/components/Footer";
import CollectionBag from "@/components/CollectionBag";

export default function Home() {
  return (
    <CartProvider>
      <div className="relative min-h-screen bg-[#07080C]">
        <Navbar />
        <main>
          <Hero />
          <Manifesto />
          <SpecimenGallery />
          <Anatomy />
          <Atelier />
        </main>
        <Footer />
        <CollectionBag />
      </div>
    </CartProvider>
  );
}
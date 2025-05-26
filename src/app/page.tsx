'use client';

import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import PortfolioShowcase from "@/components/sections/PortfolioShowcase";
import Contact from "@/components/sections/Contact";


export default function Portfolio() {
  return (
    <div className="relative min-h-screen overflow-hidden background-blobs text-black dark:text-white font-sans">
      <Hero />
      <About />
      <PortfolioShowcase />
      <Contact />
    </div>
  );
}


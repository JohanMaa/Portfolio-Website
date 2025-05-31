"use client";

import { useState, useEffect } from "react";
import { SparklesCore } from "./sparkles";

export default function SparklesWrapper() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <SparklesCore
      background="transparent"
      minSize={0.4}
      maxSize={1.2}
      particleDensity={isMobile ? 200 : 500}
      className="w-full h-full"
    />
  );
}

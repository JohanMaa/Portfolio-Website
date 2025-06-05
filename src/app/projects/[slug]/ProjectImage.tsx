
"use client";
import { useState, useEffect } from "react";

export default function ImageDetails({ src, alt }: { src: string; alt: string }) {
  const [imageSrc, setImageSrc] = useState(src);
  const [hasError, setHasError] = useState(false);

  // Pastikan src dimulai dengan '/' untuk path absolut
  const normalizedSrc = src.startsWith("/") ? src : `/${src}`;

  useEffect(() => {
    setImageSrc(normalizedSrc);
    setHasError(false);
  }, [normalizedSrc]);

  const handleError = () => {
    if (!hasError) {
      console.warn(`Failed to load image: ${imageSrc}`);
      setImageSrc("/fallback.png");
      setHasError(true);
    }
  };

  return (
    <img
      src={imageSrc}
      alt={alt}
      className="w-full aspect-[16/9] object-cover transition-transform duration-700 group-hover:scale-110"
      loading="lazy"
      onError={handleError}
    />
  );
}
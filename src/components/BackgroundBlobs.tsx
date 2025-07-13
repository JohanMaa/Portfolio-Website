"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

export default function BackgroundBlobs() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const yBlob1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const yBlob2 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const yBlob3 = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <div ref={ref}>
      <motion.div
        className="absolute top-0 -left-10 w-[800px] h-[800px] bg-purple-500/10 blur-3xl rounded-full pointer-events-none"
        style={{ y: yBlob1 }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-[300px] h-[300px] bg-blue-400/10 blur-2xl rounded-full pointer-events-none"
        style={{ y: yBlob2 }}
      />
      <motion.div
        className="absolute top-1/2 left-1/3 w-[500px] h-[500px] bg-cyan-500/10 blur-3xl rounded-full pointer-events-none"
        style={{ y: yBlob3 }}
      />
    </div>
  );
}
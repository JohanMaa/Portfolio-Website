"use client";
import { motion } from "framer-motion";
import { FaHome } from "react-icons/fa";
import { useEffect, useState } from "react";
import Head from "next/head";

export default function NotFound() {
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    setHasAnimated(true);
  }, []);

  return (
    <>
      <Head>
        <title>404 - Page Not Found | Johan Maulana</title>
        <meta name="description" content="Oops! The page you are looking for does not exist. Return to the homepage of Johan Maulana's portfolio." />
      </Head>
      <div className="min-h-screen text-white relative overflow-hidden">
        {/* Content */}
        <motion.div
          className="relative z-10 max-w-4xl mx-auto flex items-center justify-center min-h-screen px-6 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div>
            <h1 className="text-6xl md:text-8xl font-extrabold text-teal-300 glow-text mb-4">
              404
            </h1>
            <h2 className="text-3xl md:text-4xl font-semibold text-white mb-6">
              Oops! Page Not Found
            </h2>
          </div>
        </motion.div>
      </div>
    </>
  );
}
'use client';

import { motion } from "framer-motion";
import { Github, Linkedin, Instagram, Phone } from "lucide-react";
import { SparklesCore } from "../ui/sparkles";
import { Tilt } from 'react-tilt';

// Komponen utama Contact
export default function Contact() {
  return (
    // Bagian utama section contact
    <section id="contact" className="relative w-full py-32 px-6">
      {/* Holographic Particle Background */}
      {/* <div className="absolute inset-0 z-0 pointer-events-none">
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1.2}
          particleDensity={200}
          className="w-full h-full"
        />
      </div>  */}

      {/* Judul section*/}
      <motion.h2
        className="text-3xl md:text-5xl font-extrabold bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent text-center bg-clip-text mb-3 animate-pulse"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        Let’s Connect
      </motion.h2>

      {/* Subtitle */}
      <motion.p
        className="text-center text-gray-400 max-w-xl mx-auto mb-16 text-lg"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        Feel free to reach out anytime — let’s create something great together
      </motion.p>

      {/* Contact Cards */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto z-10 relative"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <ContactCard
          icon={<Instagram className="text-pink-500 w-6 h-6" />}
          title="Instagram"
          value="@jhnmlna._"
          href="https://instagram.com/jhnmlna._"
          borderColor="border-pink-500"
        />
        <ContactCard
          icon={<Linkedin className="text-blue-500 w-6 h-6" />}
          title="LinkedIn"
          value="Johan Maulana"
          href="https://www.linkedin.com/in/johan-maulana-26b051305/"
          borderColor="border-blue-500"
        />
        <ContactCard
          icon={<Phone className="text-green-500 w-6 h-6" />}
          title="WhatsApp"
          value="+62 818-0232-8268"
          href="https://wa.me/6281802328268"
          borderColor="border-green-500"
        />
        <ContactCard
          icon={<Github className="text-gray-500 w-6 h-6" />}
          title="GitHub"
          value="@Coming Soon"
          href="https://github.com/"
          borderColor="border-gray-500"
        />
      </motion.div>
    </section>
  );
}

// Komponen kartu kontak dengan efek tilt dan glow
function ContactCard({
  icon,
  title,
  value,
  href,
  borderColor,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
  href: string;
  borderColor: string;
}) {
  // Mapping warna shadow berdasarkan border
  const shadowColorMap: Record<string, string> = {
    "border-pink-500": "hover:shadow-pink-300/70",
    "border-blue-500": "hover:shadow-blue-300/70",
    "border-green-500": "hover:shadow-green-300/70",
    "border-gray-500": "hover:shadow-gray-300/70",
  };

  return (
    // Efek tilt saat hover menggunakan react-tilt
    <Tilt
      options={{
        max: 15,
        scale: 1.05,
        speed: 400,
      }}
    >
      {/* Link ke platform eksternal */}
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`group flex items-center justify-between p-5 rounded-xl border ${borderColor} bg-gradient-to-br from-zinc-900 to-zinc-800 transition-all hover:scale-[1.03] hover:shadow-xl ${shadowColorMap[borderColor]} shadow-md duration-300`}
      >
        <div className="flex items-center gap-4">
          <div className="p-3 rounded-lg bg-zinc-700 group-hover:bg-opacity-80 transition-colors">
            {icon}
          </div>
          <div>
            <p className="text-lg font-semibold text-white">{title}</p>
            <p className="text-sm text-gray-400">{value}</p>
          </div>
        </div>
      </a>
    </Tilt>
  );
}

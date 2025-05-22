"use client";
import { motion } from "framer-motion";
import { SparklesCore } from "../ui/sparkles";
import { FaCode, FaMobileAlt, FaShieldAlt } from "react-icons/fa";
import Tilt from "react-parallax-tilt";
import { TypeAnimation } from "react-type-animation";

export default function AboutMe() {
  return (
    <section id="about" className="relative py-28 overflow-hidden">
      {/* Sparkles Background */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1.2}
          particleDensity={80}
          className="w-full h-full"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-5xl mx-auto bg-white/10 dark:bg-white/5 backdrop-blur-xl p-12 rounded-[2rem] shadow-[0_0_40px_rgba(0,0,0,0.25)] border border-white/10"
        >
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-5xl font-extrabold text-center mb-6 bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-purple-600 text-transparent bg-clip-text"
          >
            About Me
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-300 text-center leading-relaxed"
          >
            Halo! Saya <span className="font-semibold text-blue-400">Johan Maulana</span>, seorang kreator digital yang suka menciptakan aplikasi modern, interaktif, dan aman. Saya percaya teknologi adalah jembatan antara ide dan solusi nyata.
          </motion.p>

          {/* Card Sections */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[ // Reuseable array for cleaner code
              {
                icon: <FaCode className="text-4xl mb-4 text-cyan-400" />,
                title: "Web Development",
                desc: "Membangun website cepat, responsive, dan interaktif dengan React, Next.js, dan Tailwind.",
              },
              {
                icon: <FaMobileAlt className="text-4xl mb-4 text-green-400" />,
                title: "Mobile Apps",
                desc: "Merancang aplikasi mobile intuitif dan performa tinggi menggunakan Flutter & React Native.",
              },
              {
                icon: <FaShieldAlt className="text-4xl mb-4 text-red-400" />,
                title: "Cybersecurity",
                desc: "Mengintegrasikan keamanan dari awal pengembangan serta aktif mendalami dunia ethical hacking.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.2 }}
              >
                <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} scale={1.05} transitionSpeed={600}>
                  <div className="p-6 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl shadow-xl hover:shadow-[0_0_30px_rgba(0,255,255,0.25)] transition-all duration-300 hover:scale-[1.03]">
                    <div className="flex flex-col items-center text-center text-white">
                      {item.icon}
                      <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                      <p className="text-sm text-gray-400">{item.desc}</p>
                    </div>
                  </div>
                </Tilt>
              </motion.div>
            ))}
          </div>

          {/* Animated Quote */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            className="mt-12 text-center text-base text-gray-400"
          >
            <TypeAnimation
              sequence={[
                `"Kreativitas adalah kekuatan saya,"`, 1200,
                `"Teknologi adalah alat saya,"`, 1200,
                `"dan Keamanan adalah fondasinya." – Johan Maulana`, 1500
              ]}
              wrapper="span"
              speed={40}
              repeat={Infinity}
              className="inline-block"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

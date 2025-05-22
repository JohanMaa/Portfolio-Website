'use client';

import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
} from 'react-icons/fa';
import {
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineLocationMarker,
} from 'react-icons/hi';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-[#0f172a] to-[#1e293b] text-gray-300 py-16 px-6 overflow-hidden">
      
      {/* Garis neon animated */}
      <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 animate-pulse z-20" />

      {/* Konten utama */}
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        
        {/* Branding */}
        <div>
          <motion.h1 
            className="text-3xl font-extrabold text-white mb-4 tracking-wide"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text">
              Hannz.
            </span>
          </motion.h1>
          <p className="text-sm text-gray-400 mb-4">My Digital Playground</p>
          <div className="flex space-x-4 text-2xl">
            <GlowIcon href="https://twitter.com/" icon={<FaTwitter />} />
            <GlowIcon href="https://www.linkedin.com/in/johan-maulana-26b051305/" icon={<FaLinkedin />} />
            <GlowIcon href="https://github.com/JohanMaa" icon={<FaGithub />} />
            <GlowIcon href="https://instagram.com/jhnmlna._" icon={<FaInstagram />} />
          </div>
        </div>

        {/* Quick Links */}
        <FooterSection title="Quick Links" items={[
          { label: 'Home', href: '#' },
          { label: 'About', href: '#about' },
          { label: 'Skills', href: '#skills' },
          { label: 'Contact', href: '#contact' },
        ]} />

        {/* Services */}
        <FooterSection title="Services" items={[
          { label: 'Web Development' },
          { label: 'Mobile Apps' },
          { label: 'Penetration Testing' },
          { label: 'Vulnerability Assessment' },
        ]} />

        {/* Contact Info */}
        <div>
          <h3 className="text-white font-semibold mb-4 text-lg">Contact</h3>
          <ul className="space-y-3 text-sm text-gray-400">
            <li className="flex items-center gap-2">
              <HiOutlineMail className="text-xl text-cyan-400" />
              johanemaulana@gmail.com
            </li>
            <li className="flex items-center gap-2">
              <HiOutlinePhone className="text-xl text-green-400" />
              +62 818-0232-8268
            </li>
            <li className="flex items-center gap-2">
              <HiOutlineLocationMarker className="text-xl text-pink-400" />
              Yogyakarta, Indonesia
            </li>
          </ul>
        </div>
      </div>

      {/* Footer bawah */}
      <div className="mt-12 pt-6 border-t border-gray-700 text-sm text-gray-500 text-center">
        <p>&copy; {new Date().getFullYear()} Johan. All rights reserved.</p>
        <div className="mt-4 flex justify-center space-x-6 text-xs">
          <a href="#" className="hover:text-white transition">Privacy Policy</a>
          <a href="#" className="hover:text-white transition">Terms of Service</a>
          <a href="#" className="hover:text-white transition">Cookie Policy</a>
        </div>
      </div>
    </footer>
  );
}

// Komponen reusable: Section Footer
function FooterSection({
  title,
  items,
}: {
  title: string;
  items: { label: string; href?: string }[];
}) {
  return (
    <div>
      <h3 className="text-white font-semibold mb-4 text-lg">{title}</h3>
      <ul className="space-y-2 text-sm text-gray-400">
        {items.map((item, idx) => (
          <li key={idx}>
            {item.href ? (
              <a href={item.href} className="hover:text-white transition">
                {item.label}
              </a>
            ) : (
              <span>{item.label}</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

// Komponen reusable: Icon dengan efek glow
function GlowIcon({
  href,
  icon,
}: {
  href: string;
  icon: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="transition transform hover:scale-110 text-gray-400 hover:text-white hover:drop-shadow-[0_0_6px_#38bdf8]"
    >
      {icon}
    </a>
  );
}

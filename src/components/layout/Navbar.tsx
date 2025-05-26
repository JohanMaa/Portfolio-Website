"use client";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import NavLink from "./Navlink";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Daftar tautan navigasi link utama
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#portfolio", label: "Portfolio" },
    { href: "#contact", label: "Contact" },
  ];

  // Efek samping: mengecek apakah halaman sedagn discroll untuk menerapkan efek visual navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0); // Update state jika user scroll
    };
    window.addEventListener("scroll", handleScroll); // Tambah event listener saat scroll
    handleScroll(); // Jalankan sekali saat komponen dimuat 
    return () => window.removeEventListener("scroll", handleScroll); // Cleanup listener saat komponen unmount
  }, []);

  return (
    <nav
      className={`w-full fixed top-0 z-50 transition-all duration-300 p-5 ${
        isScrolled ? "backdrop-blur-lg bg-black/60 shadow-md border-b border-cyan-500/20" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 relative flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold tracking-wide transition-al text-transparent bg-clip-text"
        >
          <span className=" text-cyan-400">Hannz</span>
        </Link>

        {/* Center Nav */}
        <div className="hidden md:flex items-center gap-8 absolute left-1/2 transform -translate-x-1/2">
          {navLinks.map((link) => (
            <NavLink
              key={link.href}
              href={link.href}
              className={`relative group text-sm font-semibold tracking-wide transition-all ${
                pathname === link.href ? "text-cyan-400" : "text-gray-300"
              }`}
            >
              {link.label}
              <span className="absolute left-0 bottom-[-2px] h-[2px] w-0 bg-gradient-to-r from-cyan-400 to-fuchsia-500 transition-all duration-300 group-hover:w-full" />
            </NavLink>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden ml-auto z-10">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white hover:text-cyan-400 transition-all"
          >
            {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden px-6 pb-6 pt-4 bg-black/80 text-gray-100 animate-slide-down rounded-b-xl shadow-inner border-t border-cyan-500/10 space-y-3">
          {navLinks.map((link) => (
            <NavLink
              key={link.href}
              href={link.href}
              className="block py-2 text-lg font-medium hover:text-cyan-400 transition-all"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
}

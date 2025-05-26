"use client";

import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { ReactNode } from "react";

// Tipe properti yang diterima komponen Navlink
interface NavLinkProps {
  href: string; // Tujuan Link
  children: ReactNode; // Konten dalam Link (biasanya teks)
  className?: string; // Opsional: classname CSS untuk styling 
  onClick?: () => void; // Opsional: fungsi ketika diklik
}

// Fungsi khusus ketika link di klik (untuk navigasi ke elemen dalam halaman)
export default function NavLink({ href, children, className, onClick }: NavLinkProps) {
  const pathname = usePathname(); // Ambil path url saat ini (misalnya "/")
  const router = useRouter(); // Gunakan router untuk navigasi ke halaman lain

  // Fungsi khusus ketika link diklik (untuk navigasi ke elemen dalam halaman)
  const handleClick = (e: React.MouseEvent) => {
        // Tangani link yang mengarah ke bagian dalam halaman (anchor: #about, #contact, dll)
    if (href.startsWith("#")) {
      e.preventDefault(); // Mencegah behavior default browser
      const sectionId = href.replace("#", ""); // Ambil langsung ke elemen

      // Jika saat ini berada di halaman "/" langsung scroll ke elemen
      if (pathname === "/") {
        const section = document.getElementById(sectionId); // Ambil elemen berdasarkan ID
        section?.scrollIntoView({ behavior: "smooth" }); // Scroll halus ke elemen
      } else {
        // Jika bukan di halaman "/", Navigasi ke halaman utama dan tambahkan anchor
        router.push(`/#${sectionId}`);
      }

      onClick?.(); // Jalankan fungsi tambahan jika disediakan
    }

    // Jika klik Home ("/") dari dalam halaman "/" sendiri
    if (href === "/" && pathname === "/") {
      e.preventDefault(); // Cegah reload halaman
      window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll ke atas dengan smooth 
      onClick?.(); // Jalankan fungsi tambahan jika ada
    }
  };

  // Jika link menuju anchor di halaman yang sama atau ke "/" dari halaman "/" sendiri
  if (href.startsWith("#") || (href === "/" && pathname === "/")) {
    return (
      <a href={href} onClick={handleClick} className={className}>
        {children}
      </a>
    );
  }

  // Default: gunakan <Link> Next.js untuk navigasi antar halaman 
  return (
    <Link href={href} className={className} onClick={onClick}>
      {children}
    </Link>
  );
}

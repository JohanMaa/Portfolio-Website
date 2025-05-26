import React from "react";
import clsx from "clsx"; // Pastikan sudah install: npm install clsx

// Type props yang bisa diterima oleh komponen button 
type ButtonProps = {
  children: React.ReactNode; // Isi tombol (bisa teks atau elemen lain)
  onClick?: () => void; // Opsional: Fungsi yang dipanggil saat tombol diklik
  variant?: "default" | "outline"; // Opsional: jenis tampilan tombol
  className?: string; // Opsional: tambahan class CSS dari luar
};

// Komponen button yang reusable dan fleksibel
export function Button({ children, onClick, variant = "default", className }: ButtonProps) {
  // Class dasar yang selalu dipakai oleh tombol
  const baseClass =
    "px-4 py-2 rounded-lg transition font-medium";
  
  // Class tambahan tergantung pada jenis tombol  (variant)
  const variantClass = {
    default: "bg-blue-600 text-white hover:bg-blue-700", // Warna solid biru
    outline: "border border-blue-600 text-blue-600 hover:bg-blue-100", // Tombol border dengan teks biru
  };

  return (
    <button
      className={clsx(baseClass, variantClass[variant], className)}
      onClick={onClick} // Panggil fungsi saat tombol diklik (jika ada)
    >
      {children} {/* Tampilkan isi tombol */}
    </button>
  );
}

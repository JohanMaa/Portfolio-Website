import "@/app/globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { SparklesCore } from "@/components/ui/sparkles";

export const metadata = {
  title: "Johan Portfolio",
  description: "Personal portfolio built with Next.js, Tailwind, and TypeScript",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="relative background-blobs overflow-x-hidden">
        {/* Sparkles Background
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
          <SparklesCore
            background="transparent"
            minSize={0.4}
            maxSize={1.2}
            particleDensity={80}
            className="w-full h-full"
          />
        </div> */}

        {/* Main App Content */}
        <div className="relative z-10">
          <Navbar />
          <main className="pt-20">{children}</main>
          <Footer />
          <ScrollToTop />

          {/* Running Text Fixed Bottom */}
          <div className="fixed bottom-0 left-0 w-full bg-black text-white dark:bg-white dark:text-black py-2 z-50 overflow-hidden">
            <div className="whitespace-nowrap animate-marquee px-4 font-medium text-sm">
              🚧 Website work in progress • Konten, desain, dan fitur dapat berubah sewaktu-waktu • Nantikan versi finalnya! 🚀 Website sedang dalam tahap pengembangan • Konten, desain, dan fitur dapat berubah sewaktu-waktu • Nantikan versi finalnya! 🚀
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}

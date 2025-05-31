import "@/app/globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import SparklesWrapper from "@/components/ui/SparklesWrapper";

// Metadata untuk dokumen HTML, digunakan oleh Next.js untuk SEO
export const metadata = {
  title: "Johan Portfolio",
  description: "Personal portfolio built with Next.js, Tailwind, and TypeScript",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="relative background-blobs overflow-x-hidden">
        {/* Holographic Particle Background */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <SparklesWrapper />
        </div>

        {/* Main App Content */}
        <div className="relative z-10">
          <Navbar />
          <main className="pt-20">{children}</main>
          <Footer />
          <ScrollToTop />
        </div>
      </body>
    </html>
  );
}

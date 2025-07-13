import "@/app/globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import BackgroundBlobs from "@/components/BackgroundBlobs";

export const metadata = {
  title: "Johan Portfolio",
  description: "Personal portfolio built with Next.js, Tailwind, and TypeScript",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="relative background-blobs overflow-x-hidden">
        <BackgroundBlobs />
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
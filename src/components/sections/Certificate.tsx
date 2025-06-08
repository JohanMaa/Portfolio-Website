"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { createPortal } from "react-dom";

// Interface untuk data sertifikat
interface Certificate {
  title: string;
  issuer: string;
  date: string;
  imageUrl: string;
  description?: string;
  driveLink?: string;
}

// Komponen Card untuk Sertifikat
const CertificateCard = ({ title, imageUrl, issuer, date, description, onClick }: Certificate & { onClick: () => void }) => {
  return (
    <div
      onClick={onClick}
      className="group relative cursor-pointer overflow-hidden rounded-xl shadow-xl transition hover:scale-[1.03] hover:shadow-2xl bg-white/10 backdrop-blur-md border border-white/20"
    >
      <div
        className="h-56 bg-cover bg-center"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="p-4 space-y-2 text-white">
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="text-sm text-white/80">{issuer} - {date}</p>
        {description && <p className="text-sm text-white/80 line-clamp-2">{description}</p>}
      </div>
    </div>
  );
};

export default function Certificate() {
  const [selectedCertificateIndex, setSelectedCertificateIndex] = useState<number | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  const certificates: Certificate[] = [
    {
      title: "Internship Completion Certificate",
      issuer: "PT. Gama Multi Usaha Mandiri",
      date: "2024-12-15",
      imageUrl: "/J1.png",
      description: "Successfully completed an internship at PT. Gama Multi Usaha Mandiri, gaining hands-on experience in internship.",
      driveLink: "https://drive.google.com/file/d/1yE8ojCypqCae7PdulVKlgZcu7ntF771j/view?usp=sharing",
    },
    {
      title: "Certificate of Participation",
      issuer: "PT. Gama Multi Usaha Mandiri",
      date: "2024-12-15",
      imageUrl: "/J2.png",
      description: "Awarded for active participation, demonstrating enthusiasm and commitment to continuous learning",
      driveLink: "https://drive.google.com/file/d/1onpH-bj5xeUd4Y1xMK3uEZD4kZPp_0wp/view?usp=sharing",
    },
    {
      title: "Certificate of Appreciation for Contribution in Vulnerability Assessment",
      issuer: "Diskominfo Sulawesi Selatan",
      date: "2024-12-15",
      imageUrl: "/J3.png",
      description: "Awarded a certificate of appreciation for contributing to a vulnerability assessment project, recognizing efforts in identifying and analyzing potential security weaknesses.",
      driveLink: "https://drive.google.com/file/d/19P4tNbCz62rPdd8pjvAesNp18nbf8KBx/view?usp=sharing",
    },
  ];

  // Fokus trap untuk aksesibilitas
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && selectedCertificateIndex !== null) {
        setSelectedCertificateIndex(null);
      }
    };

    const modalElement = modalRef.current;
    if (selectedCertificateIndex !== null && modalElement) {
      const focusableElements = modalElement.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      const firstElement = focusableElements[0] as HTMLElement;
      const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

      const handleTabKey = (e: KeyboardEvent) => {
        if (e.key === "Tab") {
          if (e.shiftKey && document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          } else if (!e.shiftKey && document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      };

      modalElement.addEventListener("keydown", handleTabKey);
      firstElement?.focus();

      return () => {
        modalElement.removeEventListener("keydown", handleTabKey);
      };
    }
  }, [selectedCertificateIndex]);

  // Fungsi untuk navigasi antar sertifikat
  const handlePrevious = () => {
    if (selectedCertificateIndex !== null) {
      setSelectedCertificateIndex((prev) =>
        (prev as number) === 0 ? certificates.length - 1 : (prev as number) - 1
      );
    }
  };

  const handleNext = () => {
    if (selectedCertificateIndex !== null) {
      setSelectedCertificateIndex((prev) =>
        (prev as number) === certificates.length - 1 ? 0 : (prev as number) + 1
      );
    }
  };

  const selectedCertificate = selectedCertificateIndex !== null ? certificates[selectedCertificateIndex] : null;

  // Komponen Modal
  const Modal = () =>
    selectedCertificate && (
      <motion.div
        className="fixed inset-0 bg-black/50 z-[1000] flex items-start justify-center px-4 pt-16 sm:pt-20 md:pt-24 isolate"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        role="dialog"
        aria-labelledby="modal-title"
        ref={modalRef}
        onClick={() => setSelectedCertificateIndex(null)}
      >
        <motion.div
          className="relative bg-gradient-to-br from-[#111827]/80 to-[#1f2937]/80 border border-white/10 rounded-2xl shadow-xl max-w-xl w-full p-6 text-left text-white max-h-[80vh] overflow-y-auto"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 50, opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            className="absolute top-4 right-4 text-white/70 hover:text-white"
            onClick={() => setSelectedCertificateIndex(null)}
            aria-label="Tutup modal"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="w-full h-64 bg-cover bg-center rounded-lg mb-4 border border-white/10 shadow-inner"
            style={{ backgroundImage: `url(${selectedCertificate.imageUrl})` }}
          />
          <h3 id="modal-title" className="text-2xl font-bold mb-2">{selectedCertificate.title}</h3>
          <p className="text-white/80 mb-2">{selectedCertificate.issuer} - {selectedCertificate.date}</p>
          {selectedCertificate.description && <p className="text-white/80 mb-4">{selectedCertificate.description}</p>}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-4">
            <div className="flex justify-between w-full sm:w-auto gap-4">
              <button
                onClick={handlePrevious}
                disabled={selectedCertificateIndex === 0}
                className="flex items-center px-4 py-2 text-white/70 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Sertifikat sebelumnya"
              >
                <ChevronLeft className="w-5 h-5 mr-2" />
                Sebelumnya
              </button>
              <button
                onClick={handleNext}
                disabled={selectedCertificateIndex === certificates.length - 1}
                className="flex items-center px-4 py-2 text-white/70 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Sertifikat berikutnya"
              >
                Berikutnya
                <ChevronRight className="w-5 h-5 ml-2" />
              </button>
            </div>
            {selectedCertificate.driveLink && (
              <a
                href={selectedCertificate.driveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg hover:bg-cyan-700 transition"
                aria-label={`Lihat sertifikat ${selectedCertificate.title} di Google Drive`}
              >
                <ExternalLink className="w-5 h-5 mr-2" />
                Lihat Sertifikat
              </a>
            )}
          </div>
        </motion.div>
      </motion.div>
    );

  return (
    <section
      id="certificates"
      className="w-full flex flex-col items-center justify-center text-center px-4 pt-0 pb-24 relative"
    >
      {/* Grid Certificates with Conditional Blur */}
      <div
        className={`mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-7xl transition-all duration-300 ${
          selectedCertificate ? 'blur-md' : ''
        }`}
      >
        {certificates.map((cert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            viewport={{ once: true }}
          >
            <CertificateCard
              title={cert.title}
              imageUrl={cert.imageUrl}
              issuer={cert.issuer}
              date={cert.date}
              description={cert.description}
              onClick={() => setSelectedCertificateIndex(index)}
            />
          </motion.div>
        ))}
      </div>

      {/* Render Modal menggunakan Portal */}
      {typeof window !== "undefined" && createPortal(<AnimatePresence>{Modal()}</AnimatePresence>, document.body)}
    </section>
  );
}
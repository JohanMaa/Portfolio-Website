"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Link from "next/link";
import { SparklesCore } from "../ui/sparkles";

// Interface untuk data sertifikat
interface Certificate {
  title: string;
  issuer: string;
  date: string;
  imageUrl: string;
  description?: string;
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
  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null);

  const certificates: Certificate[] = [
    {
      title: "Internship Completion Certificate",
      issuer: "PT. Gama Multi Usaha Mandiri",
      date: "2024-12-15",
      imageUrl: "/J1.png",
      description: "Successfully completed an internship at PT. Gama Multi Usaha Mandiri, gaining hands-on experience in internship.",
    },
    {
      title: "Certificate of Participation",
      issuer: "PT. Gama Multi Usaha Mandiri",
      date: "2024-12-15",
      imageUrl: "/J2.png",
      description: "Awarded for active participation, demonstrating enthusiasm and commitment to continuous learning",
    },
    {
      title: "Certificate of Appreciation for Contribution in Vulnerability Assessment",
      issuer: "Diskominfo Sulawesi Selatan",
      date: "2024-12-15",
      imageUrl: "/J3.png",
      description: "Awarded a certificate of appreciation for contributing to a vulnerability assessment project, recognizing efforts in identifying and analyzing potential security weaknesses.",
    },
  ];

  return (
    <section
      id="certificates"
      className="w-full flex flex-col items-center justify-center text-center px-4 pt-0 pb-24 relative"
    >
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

      {/* Grid Certificates */}
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-7xl">
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
              onClick={() => setSelectedCertificate(cert)}
            />
          </motion.div>
        ))}
      </div>

      {/* Modal Detail Certificate */}
      <AnimatePresence>
        {selectedCertificate && (
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] flex items-center justify-center px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative bg-gradient-to-br from-[#111827]/80 to-[#1f2937]/80 backdrop-blur-xl border border-white/10 rounded-2xl shadow-xl max-w-xl w-full p-6 text-left text-white"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <button
                className="absolute top-4 right-4 text-white/70 hover:text-white"
                onClick={() => setSelectedCertificate(null)}
              >
                <X className="w-5 h-5" />
              </button>
              <div className="w-full h-64 bg-cover bg-center rounded-lg mb-4 border border-white/10 shadow-inner"
                style={{ backgroundImage: `url(${selectedCertificate.imageUrl})` }}
              />
              <h3 className="text-2xl font-bold mb-2">{selectedCertificate.title}</h3>
              <p className="text-white/80 mb-2">{selectedCertificate.issuer} - {selectedCertificate.date}</p>
              {selectedCertificate.description && <p className="text-white/80 mb-4">{selectedCertificate.description}</p>}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
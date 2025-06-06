export interface Project {
  title: string;
  imageUrl: string;
  tech: string[];
  description: string;
  slug: string;
  liveLink?: string;
  features?: string[];
  github?: string;
}

const createSlug = (title: string): string => {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
};

export const projects: Project[] = [
  {
    title: "M-Banking Sampah",
    imageUrl: "/project/project1.jpeg",
    tech: ["Next.js", "TensorFlow.js", "TailwindCSS"],
    description: "Aplikasi yang mengonversi sampah anorganik menjadi saldo digital untuk mendorong gaya hidup ramah lingkungan.",
    slug: createSlug("M-Banking Sampah"),
    // liveLink: "https://github.com/JohanMaa/Mbanking_Sampah.git",
    features: ["Konversi sampah ke saldo", "Dashboard real-time", "Notifikasi pengguna"],
    github: "https://github.com/JohanMaa/Mbanking_Sampah.git",
  },
  {
    title: "Personal Portfolio Website",
    imageUrl: "/project/project3.png",
    tech: ["Next.js", "TailwindCSS", "TypeScript"],
    description: "A modern and responsive personal portfolio website showcasing my projects, skills, and achievements.",
    slug: createSlug("Personal Portfolio Website"),
    liveLink: "https://www.hannz.my.id/",
    features: [
      "Responsive design for all devices",
      "Dynamic project showcase",
      "Smooth animations and transitions"
    ],
    github: "https://github.com/JohanMaa/Portfolio-Website",
  },
  {
    title: "Mobile Water Monitor",
    imageUrl: "/project/project2.png",
    tech: ["Flutter", "MQTT", "Firebase"],
    description: "Sistem monitoring kolam berbasis Flutter dan MQTT yang menampilkan data sensor seperti suhu dan pH air secara real-time.",
    slug: createSlug("Mobile Water Monitor"),
    // liveLink: "https://github.com/JohanMaa/Monitoring-Kolam-Ikan.git",
    features: ["Monitoring suhu", "Data pH air", "Notifikasi otomatis"],
    github: "https://github.com/JohanMaa/Monitoring-Kolam-Ikan.git",
  },
  {
    title: "Telnet vs SSH - Secure Protocol Analysis",
    imageUrl: "/project/project5.png",
    tech: ["Wireshark", "Telnet", "SSH"],
    description: "Analisa perbandingan Telnet dan SSH dengan Wireshark untuk menunjukkan perbedaan protokol aman dan tidak aman.",
    slug: createSlug("Telnet vs SSH - Secure Protocol Analysis"),
    // liveLink: "https://github.com/JohanMaa/Cybersecurity-Practical-Lab/tree/main/Secure-vs-Insecure-Protocol",
    features: ["Capture Telnet vs SSH", "Analisa port TCP", "Screenshot perekaman Wireshark"],
    github: "https://github.com/JohanMaa/Cybersecurity-Practical-Lab/tree/main/Secure-vs-Insecure-Protocol"
  },
  {
    title: "Wireless Security with Kismet",
    imageUrl: "/project/project6.png",
    tech: ["Kismet", "Wireshark", "Aircrack-ng"],
    description: "Site survey keamanan WiFi menggunakan Kismet di dua lokasi berbeda dan analisa channel serta perangkat mencurigakan.",
    slug: createSlug("Wireless Security with Kismet"),
    // liveLink: "https://github.com/JohanMaa/Cybersecurity-Practical-Lab/tree/main/Wireless-Security-Kismet",
    features: ["Scan AP & client", "Deteksi WPS aktif", "Identifikasi 4-way handshake"],
    github: "https://github.com/JohanMaa/Cybersecurity-Practical-Lab/tree/main/Wireless-Security-Kismet"
  },
  {
    title: "Mobile Device Management with Flyve MDM",
    imageUrl: "/project/project7.png",
    tech: ["Flyve MDM", "GLPI", "MDM"],
    description: "Eksperimen penggunaan Flyve MDM untuk kontrol dan manajemen perangkat mobile dari jarak jauh.",
    slug: createSlug("Mobile Device Management with Flyve MDM"),
    // liveLink: "https://github.com/JohanMaa/Cybersecurity-Practical-Lab/tree/main/Mobile-Device-Management",
    features: ["Remote wipe", "Push config", "Monitoring device"],
    github: "https://github.com/JohanMaa/Cybersecurity-Practical-Lab/tree/main/Mobile-Device-Management"
  },
  {
    title: "Public Key Infrastructure & Self-Signed Certificate",
    imageUrl: "/project/project8.jpeg",
    tech: ["OpenSSL", "Apache", "HTTPS"],
    description: "Implementasi CA dan sertifikat self-signed untuk dua domain lokal menggunakan OpenSSL.",
    slug: createSlug("Public Key Infrastructure & Self-Signed Certificate"),
    // liveLink: "https://github.com/JohanMaa/Cybersecurity-Practical-Lab/tree/main/Public-Key-Infrastructure",
    features: ["Generate CA", "Setup HTTPS Apache", "Konfigurasi /etc/hosts"],
    github: "https://github.com/JohanMaa/Cybersecurity-Practical-Lab/tree/main/Public-Key-Infrastructure"
  },
  {
    title: "Vulnerability Assessment with Nessus",
    imageUrl: "/project/project9.jpeg",
    tech: ["Nessus", "Vulnerability Scanner"],
    description: "Penggunaan Nessus untuk scanning jaringan lokal dan server web, serta mendeteksi vulnerability tingkat tinggi.",
    slug: createSlug("Vulnerability Assessment with Nessus"),
    // liveLink: "https://github.com/JohanMaa/Cybersecurity-Practical-Lab/tree/main/Nessus-Vulnerability-Assessment",
    features: ["Scan CVE", "Analisa resiko tinggi", "Rekomendasi perbaikan"],
    github: "https://github.com/JohanMaa/Cybersecurity-Practical-Lab/tree/main/Nessus-Vulnerability-Assessment"
  },
  {
    title: "Digital Forensic with Autopsy",
    imageUrl: "/project/project10.png",
    tech: ["Autopsy", "Foremost", "tsk_recovery"],
    description: "Melakukan analisa dan recovery file dari image disk .dd menggunakan tools forensic open-source.",
    slug: createSlug("Digital Forensic with Autopsy & Foremost"),
    // liveLink: "https://github.com/JohanMaa/Cybersecurity-Practical-Lab/tree/main/Digital-Forensic",
    features: ["Recovery file gambar & video", "Analisa deleted files", "Autopsy GUI forensic"],
    github: "https://github.com/JohanMaa/Cybersecurity-Practical-Lab/tree/main/Digital-Forensic"
  },
  {
    title: "SIEM Monitoring with Wazuh",
    imageUrl: "/project/project11.png",
    tech: ["Wazuh", "VirtualBox", "SIEM"],
    description: "Instalasi dan integrasi Wazuh SIEM untuk monitoring dan audit aktivitas sistem dari agent client.",
    slug: createSlug("SIEM Monitoring with Wazuh"),
    // liveLink: "https://github.com/JohanMaa/Cybersecurity-Practical-Lab/tree/main/Wazuh-SIEM",
    features: ["SIEM dashboard", "Log agent", "Security alert"],
    github: "https://github.com/JohanMaa/Cybersecurity-Practical-Lab/tree/main/Wazuh-SIEM"
  }
];
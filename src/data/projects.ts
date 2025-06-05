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
    tech: ["Next.js", "TensorFlow.js", "Framer Motion"],
    description: "Aplikasi yang mengonversi sampah anorganik menjadi saldo digital untuk mendorong gaya hidup ramah lingkungan.",
    slug: createSlug("M-Banking Sampah"),
    liveLink: "https://github.com/JohanMaa/Mbanking_Sampah.git",
    features: ["Konversi sampah ke saldo", "Dashboard real-time", "Notifikasi pengguna"],
    github: "https://github.com/JohanMaa/Mbanking_Sampah.git",
  },
  {
    title: "Cybersecurity Toolkit",
    imageUrl: "/project/project2.jpg",
    tech: ["Linux", "Nmap", "Wireshark"],
    description: "Toolkit untuk penetration testing, network scanning, dan vulnerability assessment.",
    slug: createSlug("Cybersecurity Toolkit"),
    features: ["Network scanning", "Vulnerability detection", "Report generation"],
    github: "Private",
  },
  {
    title: "Mobile Water Monitor",
    imageUrl: "/project/project2.png",
    tech: ["Flutter", "MQTT", "Firebase"],
    description: "Sistem monitoring kolam berbasis Flutter dan MQTT yang menampilkan data sensor seperti suhu dan pH air secara real-time.",
    slug: createSlug("Mobile Water Monitor"),
    liveLink: "https://github.com/JohanMaa/Monitoring-Kolam-Ikan.git",
    features: ["Monitoring suhu", "Data pH air", "Notifikasi otomatis"],
    github: "https://github.com/JohanMaa/Monitoring-Kolam-Ikan.git",
  },
  // {
  //   title: "E-Commerce Platform",
  //   imageUrl: "/project/project3.jpg",
  //   tech: ["React", "Node.js", "MongoDB"],
  //   description: "Platform e-commerce dengan fitur keranjang belanja, pembayaran online, dan manajemen produk.",
  //   slug: createSlug("E-Commerce Platform"),
  //   liveLink: "https://example.com/e-commerce-platform",
  //   features: ["Keranjang belanja", "Pembayaran terintegrasi", "Manajemen inventori"],
  //   github: "https://github.com/johanmaulana/e-commerce-platform",
  // },
  // {
  //   title: "Smart Home Dashboard",
  //   imageUrl: "/project/project4.png",
  //   tech: ["Vue.js", "Express", "IoT"],
  //   description: "Dashboard untuk mengontrol perangkat pintar di rumah seperti lampu dan AC melalui aplikasi web.",
  //   slug: createSlug("Smart Home Dashboard"),
  //   liveLink: "https://example.com/smart-home-dashboard",
  //   features: ["Kontrol real-time", "Jadwal otomatis", "Integrasi IoT"],
  //   github: "Private",
  // },
  // {
  //   title: "Task Management App",
  //   imageUrl: "/project/project5.jpeg",
  //   tech: ["Angular", "Firebase", "Tailwind CSS"],
  //   description: "Aplikasi manajemen tugas dengan fitur kolaborasi tim dan pengingat tenggat waktu.",
  //   slug: createSlug("Task Management App"),
  //   liveLink: "https://example.com/task-management-app",
  //   features: ["Manajemen tugas", "Kolaborasi tim", "Pengingat otomatis"],
  //   github: "https://github.com/johanmaulana/task-management-app",
  // },
];
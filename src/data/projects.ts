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
    title: "Protocol Security Analysis with Wireshark",
    imageUrl: "/project/project5.png",
    tech: ["Wireshark", "TCP/UDP", "Networking"],
    description: "Analisis keamanan berbagai protokol jaringan dengan membandingkan versi aman dan tidak aman menggunakan teknik network sniffing melalui Wireshark.",
    slug: createSlug("Protocol Security Analysis with Wireshark"),
    liveLink: "https://drive.google.com/file/d/1xri3W4-w1Ce9plsOcikW29RvJZKGSUPn/view?usp=sharing",
    features: [
      "Capture traffic protokol Telnet, FTP, HTTP, dan lainnya",
      "Analisis data terenkripsi vs tidak terenkripsi",
      "Identifikasi port default TCP/UDP",
      "Penyadapan komunikasi protokol di jaringan lokal"
    ],
    // github: "https://github.com/JohanMaa/Cybersecurity-Practical-Lab/tree/main/Wireshark-Protocol-Sniffing"
  },
  {
    title: "Wireless Security Site Survey with Kismet",
    imageUrl: "/project/project6.png",
    tech: ["Kismet", "Wireshark", "Aircrack-ng", "Reaver"],
    description: "Melakukan site survey keamanan jaringan nirkabel di dua lokasi berbeda (kampus dan rumah/kost) menggunakan Kismet, Wireshark, dan Aircrack-ng untuk menganalisis kanal, tipe enkripsi, perangkat klien, dan potensi celah keamanan.",
    slug: createSlug("Wireless Security Site Survey with Kismet"),
    features: [
      "Deteksi Wireless AP dan client (SSID, BSSID, encryption)",
      "Identifikasi channel paling padat dan sepi",
      "Analisa protokol keamanan (WEP/WPA/WPA2/OPEN)",
      "Deteksi client mencurigakan (probing/scanning)",
      "Deteksi AP yang mengaktifkan WPS via Reaver",
      "Tangkap 4-Way Handshake WPA2 untuk cracking via Aircrack-ng"
    ],
    github: "https://github.com/JohanMaa/Cybersecurity-Practical-Lab/tree/main/Wireless-Security-Kismet"
  },
  {
    title: "Mobile Device Management with Miradore",
    imageUrl: "/project/project7.png",
    tech: ["Miradore", "MDM", "Mobile Security", "Device Policy", "Goto Resolve"],
    description: "Eksperimen penggunaan platform Miradore sebagai solusi Mobile Device Management (MDM) untuk mengatur, memonitor, dan mengamankan perangkat Android/iOS secara remote. Project dilakukan menggunakan akun trial Miradore Cloud dan perangkat uji.",
    slug: createSlug("Mobile Device Management with Miradore"),
    features: [
      "Device Enrollment via QR Code atau Email",
      "Remote Lock & Wipe Device",
      "App Blacklist/Whitelist",
      "Push Configuration Profiles (Wi-Fi, VPN, Email)",
      "Track Location & Device Info",
      "Security Policies Enforcement (PIN, Encryption, etc)",
      "Inventory perangkat otomatis (Model, OS, IMEI)"
    ],
    github: "https://github.com/JohanMaa/Cybersecurity-Practical-Lab/tree/main/Mobile-Device-Management-Miradore"
  },
  {
    title: "Public Key Infrastructure with OpenSSL (Self-Signed Certificate)",
    imageUrl: "/project/project8.jpeg",
    tech: ["PKI", "OpenSSL", "CA", "HTTPS", "Apache2"],
    description: "Simulasi implementasi Public Key Infrastructure (PKI) dengan membentuk Certificate Authority (CA) sendiri menggunakan OpenSSL, kemudian menerbitkan dan mengimplementasikan sertifikat HTTPS untuk dua domain simulasi pada Apache2 Web Server lokal.",
    slug: createSlug("Public Key Infrastructure with OpenSSL"),
    features: [
      "Generate CA Key & Certificate (ca.key dan ca.crt)",
      "Generate Private Key & CSR untuk 2 domain simulasi",
      "Sign CSR menggunakan CA untuk membentuk SSL Certificate",
      "Implementasi HTTPS di Apache2 dengan VirtualHost",
      "Penggunaan /etc/hosts untuk simulasi DNS internal",
      "Validasi HTTPS pada browser dengan sertifikat self-signed"
    ],
    github: "https://github.com/JohanMaa/Cybersecurity-Practical-Lab/tree/main/Public-Key-Infrastructure"
  },
  {
    title: "Vulnerability Assessment using Nessus",
    imageUrl: "/project/project9.jpeg",
    tech: ["Nessus", "Network Scanning", "Vulnerability Assessment", "CVSS"],
    description: "Melakukan pemindaian keamanan jaringan internal dan web server simulasi menggunakan Nessus Professional (Trial). Project ini bertujuan untuk mengidentifikasi celah keamanan dan potensi risiko dari host atau service yang terdeteksi.",
    slug: createSlug("Vulnerability Assessment using Nessus"),
    features: [
      "Install & aktivasi Nessus Professional (Trial)",
      "Melakukan scanning terhadap jaringan internal rumah/kampus",
      "Melakukan scanning terhadap web server tadi-root.com",
      "Identifikasi celah keamanan dengan level severity (Info, Low, Medium, High, Critical)",
      "Pemberian solusi dan remediation sesuai hasil scan Nessus",
      "Export hasil scan ke dalam format PDF dan HTML"
    ],
    github: "https://github.com/JohanMaa/Cybersecurity-Practical-Lab/tree/main/Nessus-Scan"
  },
  {
    title: "Digital Forensic: File Recovery from RAW Disk Image",
    imageUrl: "/project/project10.png",
    tech: ["Digital Forensic", "Autopsy", "TSK", "Foremost", "FTK Imager", "DMDE"],
    description: "Melakukan proses analisa dan recovery terhadap file yang telah terhapus dari image RAW (File RAW-ImageDrive.dd) menggunakan berbagai tools forensik digital.",
    slug: createSlug("Digital Forensic RAW Image Analysis"),
    features: [
      "Analisis file image .dd menggunakan 5 tools forensik: TSK Recovery, Foremost, DMDE, Autopsy, FTK Imager",
      "Identifikasi dan recovery file yang terhapus: Video, Gambar, Dokumen",
      "Perbandingan efektivitas tools terhadap hasil recovery file",
      "Presentasi hasil dalam bentuk tabel dan screenshot",
      "Pemetaan jenis file berdasarkan extension dan jumlah"
    ],
    github: "https://github.com/JohanMaa/Cybersecurity-Practical-Lab/tree/main/Digital-Forensic-RAW-Recovery"
  },  
  {
    title: "SIEM: Incident Investigation dengan Wazuh",
    imageUrl: "/project/project11.png",
    tech: ["SIEM", "Wazuh", "Incident Response", "Log Monitoring", "VM", "Security Analytics"],
    description: "Melakukan instalasi dan konfigurasi sistem SIEM Wazuh (versi 4.5.3) menggunakan OVA, mempelajari fitur-fitur utama, serta menghubungkan agent untuk memonitor aktivitas dan insiden dari sistem endpoint.",
    slug: createSlug("Wazuh SIEM Incident Monitoring"),
    features: [
      "Install dan setup Wazuh SIEM di VirtualBox menggunakan OVA",
      "Explore fitur-fitur utama Wazuh seperti log monitoring, vulnerabilities, file integrity monitoring",
      "Install dan koneksi Wazuh-Agent pada VM endpoint",
      "Monitoring log dan event security dari endpoint melalui dashboard SIEM",
      "Dokumentasi konfigurasi, menu fitur, dan hasil pengamatan dari agent"
    ],
    github: "https://github.com/JohanMaa/Cybersecurity-Practical-Lab/tree/main/SIEM-Wazuh-Incident-Investigation"
  },
  {
    title: "Web Vulnerability Assessment with Arachni",
    imageUrl: "/project/project12.png",
    tech: ["Arachni", "Web Security", "Penetration Testing"],
    description: "Pengujian dan eksploitasi kelemahan aplikasi web menggunakan Arachni terhadap target vulnweb.rootbrain.com, dilengkapi dengan PoC dan laporan pentest.",
    slug: createSlug("Web Vulnerability Assessment with Arachni"),
    features: [
      "Scan otomatis dengan Arachni",
      "Laporan vulnerability dengan severity",
      "PoC exploitasi XSS dan SQLi",
      "Laporan VAPT profesional"
    ],
    github: "https://github.com/JohanMaa/Cybersecurity-Practical-Lab/tree/main/Web-Vulnerability-Arachni"
  }, 
  {
    title: "Wireless Honeypot using Airgeddon",
    imageUrl: "/project/project13.png",
    tech: ["Airgeddon", "Kali Linux", "Wireless Honeypot"],
    description: "Simulasi honeypot nirkabel dengan Airgeddon untuk menjebak dan menganalisis perangkat klien yang mencoba terhubung ke access point palsu.",
    slug: createSlug("Wireless Honeypot using Airgeddon"),
    features: [
      "Installasi Airgeddon di Kali Linux",
      "Deauthentication attack",
      "Evil Twin access point",
      "Captive portal phishing"
    ],
    github: "https://github.com/JohanMaa/Cybersecurity-Practical-Lab/tree/main/Honeypot-Airgeddon"
  },
  {
    title: "Web Server Hardening & ACL Configuration",
    imageUrl: "/project/project14.png",
    tech: ["Apache2", "Linux", ".htaccess", "ACL"],
    description: "Penerapan hardening pada web server Apache2 dan pengaturan akses kontrol berbasis IP dan otentikasi.",
    slug: createSlug("Web Server Hardening & ACL Configuration"),
    features: [
      "Hide Apache version & OS info",
      "IP-based access control",
      "HTTP Authentication",
      "Custom .htaccess rules"
    ],
    github: "https://github.com/JohanMaa/Cybersecurity-Practical-Lab/tree/main/Webserver-Hardening"
  },
  {
    title: "Daily Backup & Restore with UrBackup",
    imageUrl: "/project/project15.png",
    tech: ["UrBackup", "MySQL", "Incremental Backup"],
    description: "Implementasi backup harian (full & incremental) menggunakan UrBackup pada folder lokal dan database MySQL, serta simulasi restore data setelah kehilangan.",
    slug: createSlug("Daily Backup & Restore with UrBackup"),
    features: [
      "Full & incremental backup",
      "Folder & database backup",
      "Daily scheduled backup",
      "File & database recovery"
    ],
    github: "https://github.com/JohanMaa/Cybersecurity-Practical-Lab/tree/main/Backup-Restore-UrBackup"
  },
  {
    title: "Email Encryption with PGP",
    imageUrl: "/project/project16.png",
    tech: ["Thunderbird", "GnuPG", "PGP"],
    description: "Penerapan kriptografi pada email untuk menjaga kerahasiaan dan integritas pesan dengan tanda tangan digital dan enkripsi menggunakan PGP di Thunderbird.",
    slug: createSlug("Email Encryption with PGP"),
    features: [
      "Generate PGP key (Public & Private)",
      "Upload public key ke keyserver",
      "Mengirim email bertandatangan digital",
      "Mengirim email terenkripsi (teks & lampiran)"
    ],
    github: "https://github.com/JohanMaa/Cybersecurity-Practical-Lab/tree/main/PGP-Email-Encryption"
  }
];
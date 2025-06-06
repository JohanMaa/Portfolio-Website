import { motion } from "framer-motion";
import { FaCode, FaMobileAlt, FaShieldAlt } from "react-icons/fa";
import { TbBinaryTree } from "react-icons/tb";

const skills = [
  {
    name: "Web Development",
    icon: FaCode,
    description:
      "Building responsive and performant web applications.",
    badges: ["React", "Next.js", "Tailwind CSS"],
  },
  {
    name: "Mobile Apps",
    icon: FaMobileAlt,
    description:
      "Creating cross-platform apps with native performance.",
    badges: ["Flutter", "React Native", "Dart"],
  },
  {
    name: "Penetration Testing",
    icon: FaShieldAlt,
    description:
      "Testing and securing applications from vulnerabilities.",
    badges: ["Burp Suite", "Nmap", "Kali Linux"],
  },
  {
    name: "Digital Forensic",
    icon: TbBinaryTree,
    description:
      "Investigating digital evidence and cybercrime cases.",
    badges: ["Autopsy", "Volatility", "Wireshark"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 text-white">
      <div className="container mx-auto px-6 sm:px-10 max-w-6xl">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-cyan-400">
          Skills & Expertise
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.name}
                className="relative p-6 sm:p-7 text-white rounded-2xl border border-purple-500/20 bg-gradient-to-br from-gray-800/70 to-gray-900/50 shadow-[0_0_20px_rgba(128,0,255,0.08)] hover:shadow-[0_0_35px_rgba(0,255,255,0.12)] backdrop-blur-xl transition-transform"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 * index, ease: "easeOut" }}
                whileHover={{ scale: 1.05 }}
                viewport={{ once: true }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-cyan-500/10 opacity-20 rounded-2xl pointer-events-none" />
                <div className="relative z-10 flex flex-col items-center text-center space-y-4">
                  <Icon className="text-5xl text-cyan-400 drop-shadow-md" />
                  <h4 className="text-lg sm:text-xl font-bold text-cyan-300">
                    {skill.name}
                  </h4>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    {skill.description}
                  </p>
                  <div className="flex flex-wrap justify-center gap-2 mt-2">
                    {skill.badges.map((badge, idx) => (
                      <span
                        key={idx}
                        className="bg-cyan-500/10 border border-cyan-500 text-cyan-300 text-xs px-2.5 py-1 rounded-full shadow-sm"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

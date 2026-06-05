import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { certifications } from "../data/portfolioData";

const gradients = [
  "from-violet-500 to-purple-600",
  "from-blue-500 to-cyan-600",
  "from-emerald-500 to-teal-600",
  "from-orange-500 to-amber-600",
  "from-pink-500 to-rose-600",
  "from-indigo-500 to-blue-600",
  "from-teal-500 to-cyan-600",
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 bg-gray-900 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-pink-500 to-transparent opacity-30" />
      <div className="absolute -top-20 -left-20 w-80 h-80 bg-pink-600/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-pink-400 font-mono text-sm font-semibold tracking-widest uppercase mb-3 block">
            Credentials
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Certifications &{" "}
            <span className="bg-gradient-to-r from-pink-400 to-violet-400 bg-clip-text text-transparent">
              Awards
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-violet-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.07 }}
              whileHover={{ y: -8, scale: 1.03 }}
              className="group relative bg-gray-800/50 border border-white/5 rounded-2xl p-6 hover:border-white/10 transition-all duration-300 cursor-default overflow-hidden"
            >
              {/* Background glow */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${gradients[index % gradients.length]} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl`}
              />

              {/* Icon */}
              <div
                className={`w-12 h-12 rounded-xl bg-gradient-to-br ${gradients[index % gradients.length]} flex items-center justify-center text-xl mb-4 shadow-lg`}
              >
                {cert.icon}
              </div>

              {/* Content */}
              <h3 className="text-white font-bold text-sm leading-snug mb-2">{cert.name}</h3>
              <div className="flex items-center gap-1.5">
                <Award size={12} className="text-gray-500" />
                <span className="text-gray-500 text-xs font-medium">{cert.issuer}</span>
              </div>

              {/* Bottom accent */}
              <div
                className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r ${gradients[index % gradients.length]} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
              />
            </motion.div>
          ))}
        </div>

        {/* Stats Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 bg-gradient-to-r from-violet-600/20 via-purple-600/20 to-cyan-600/20 border border-violet-500/20 rounded-2xl p-8"
        >
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {[
              { icon: "🏅", value: "7+", label: "Certifications" },
              { icon: "🏆", value: "1", label: "Hackathon Win" },
              { icon: "🎓", value: "9.7", label: "CGPA" },
              { icon: "💼", value: "2", label: "Internships" },
            ].map((stat) => (
              <motion.div
                key={stat.label}
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="text-3xl font-black text-white mb-1">{stat.value}</div>
                <div className="text-gray-400 text-sm font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

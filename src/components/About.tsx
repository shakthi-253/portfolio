import { motion } from "framer-motion";
import { GraduationCap, BookOpen, Star } from "lucide-react";
import { personalInfo, education } from "../data/portfolioData";

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

export default function About() {
  return (
    <section id="about" className="py-24 bg-gray-900 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-violet-500 to-transparent opacity-30" />
      <div className="absolute -top-20 -right-20 w-80 h-80 bg-violet-600/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div {...fadeInUp} className="text-center mb-16">
          <span className="text-violet-400 font-mono text-sm font-semibold tracking-widest uppercase mb-3 block">
            Get To Know Me
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            About <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-violet-500 to-cyan-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Summary */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="bg-gray-800/50 border border-white/5 rounded-2xl p-8 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center text-lg">
                  👨‍💻
                </div>
                <h3 className="text-white font-bold text-xl">Who I Am</h3>
              </div>
              <p className="text-gray-400 leading-relaxed text-base">
                {personalInfo.summary}
              </p>

              <div className="mt-8 grid grid-cols-2 gap-4">
                {[
                  { label: "Name", value: "V Shakthi Saravanan" },
                  { label: "Location", value: "Puducherry, India" },
                  { label: "Email", value: "shakthi2538@gmail.com" },
                  { label: "Degree", value: "B.Tech CSE @ SRMIST" },
                  { label: "CGPA", value: "9.7 (Current)" },
                  { label: "Status", value: "Open to Work 🟢" },
                ].map((item) => (
                  <div key={item.label} className="p-3 rounded-xl bg-white/3 border border-white/5">
                    <div className="text-xs text-gray-500 font-medium uppercase tracking-wide mb-1">
                      {item.label}
                    </div>
                    <div className="text-sm text-gray-200 font-semibold truncate">{item.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-teal-600 flex items-center justify-center">
                <GraduationCap size={20} className="text-white" />
              </div>
              <h3 className="text-white font-bold text-xl">Education</h3>
            </div>

            <div className="space-y-4">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  className="relative bg-gray-800/50 border border-white/5 rounded-2xl p-6 backdrop-blur-sm hover:border-violet-500/20 transition-all duration-300 group"
                >
                  {/* Gradient accent */}
                  <div className="absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl bg-gradient-to-b from-violet-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        {edu.type === "college" ? (
                          <GraduationCap size={16} className="text-violet-400 flex-shrink-0" />
                        ) : (
                          <BookOpen size={16} className="text-cyan-400 flex-shrink-0" />
                        )}
                        <h4 className="text-white font-bold text-base leading-tight">{edu.degree}</h4>
                      </div>
                      <p className="text-violet-300 text-sm font-medium ml-6">{edu.institution}</p>
                    </div>
                    <div className="flex items-center gap-1 bg-emerald-500/10 border border-emerald-500/20 rounded-lg px-3 py-1.5 flex-shrink-0">
                      <Star size={12} className="text-emerald-400" />
                      <span className="text-emerald-400 font-bold text-sm">{edu.score}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Quick Facts */}
            <div className="mt-8 grid grid-cols-3 gap-4">
              {[
                { icon: "🚀", label: "Fast Learner", desc: "Quick to adapt" },
                { icon: "🤝", label: "Team Player", desc: "Collaborative" },
                { icon: "🎯", label: "Goal-Driven", desc: "Result oriented" },
              ].map((fact) => (
                <motion.div
                  key={fact.label}
                  whileHover={{ scale: 1.05, y: -4 }}
                  className="bg-gray-800/50 border border-white/5 rounded-xl p-4 text-center hover:border-violet-500/20 transition-all duration-300 cursor-default"
                >
                  <div className="text-2xl mb-2">{fact.icon}</div>
                  <div className="text-white font-semibold text-xs">{fact.label}</div>
                  <div className="text-gray-500 text-xs mt-0.5">{fact.desc}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

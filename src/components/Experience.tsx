import { motion } from "framer-motion";
import { Briefcase, CheckCircle } from "lucide-react";
import { experience } from "../data/portfolioData";

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-gray-950 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-30" />
      <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-orange-600/5 rounded-full blur-3xl" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-orange-400 font-mono text-sm font-semibold tracking-widest uppercase mb-3 block">
            Work History
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            My{" "}
            <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-amber-500 mx-auto rounded-full" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-500 via-amber-500 to-transparent opacity-20" />

          <div className="space-y-8">
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative pl-16 sm:pl-20"
              >
                {/* Timeline Dot */}
                <div className="absolute left-3.5 sm:left-5 top-6 w-5 h-5 rounded-full bg-gradient-to-br from-orange-500 to-amber-600 border-2 border-gray-950 shadow-lg shadow-orange-900/50 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-white" />
                </div>

                {/* Card */}
                <div className="group bg-gray-900/80 border border-white/5 rounded-2xl p-6 sm:p-8 hover:border-orange-500/20 transition-all duration-300 relative overflow-hidden">
                  {/* Gradient accent */}
                  <div className="absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl bg-gradient-to-b from-orange-500 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <Briefcase size={16} className="text-orange-400" />
                        <h3 className="text-white font-black text-lg">{exp.company}</h3>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-orange-300 font-semibold text-sm">{exp.role}</span>
                        <span className="w-1 h-1 rounded-full bg-gray-600" />
                        <span className="text-gray-500 text-sm">{exp.description}</span>
                      </div>
                    </div>
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-300 text-xs font-semibold flex-shrink-0">
                      Internship
                    </span>
                  </div>

                  <ul className="space-y-2.5">
                    {exp.points.map((point, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.15 + i * 0.08 }}
                        className="flex items-start gap-3 text-gray-400 text-sm leading-relaxed"
                      >
                        <CheckCircle size={15} className="text-emerald-500 flex-shrink-0 mt-0.5" />
                        {point}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16"
        >
          <h3 className="text-white font-bold text-2xl mb-6 text-center">🏆 Achievements</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {
                icon: "🏆",
                title: "ProtoThon 1.0 Winner",
                desc: "Conducted at SRMIST, TRICHY",
                gradient: "from-yellow-500 to-amber-600",
              },
              {
                icon: "🇮🇳",
                title: "Smart India Hackathon 2025",
                desc: "Participant",
                gradient: "from-orange-500 to-red-600",
              },
            ].map((ach, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.03, y: -4 }}
                className={`bg-gradient-to-br ${ach.gradient} p-0.5 rounded-2xl shadow-lg`}
              >
                <div className="bg-gray-900 rounded-2xl p-6 flex items-center gap-4">
                  <div className="text-4xl">{ach.icon}</div>
                  <div>
                    <div className="text-white font-bold">{ach.title}</div>
                    <div className="text-gray-400 text-sm">{ach.desc}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

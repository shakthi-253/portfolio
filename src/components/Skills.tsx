import { motion } from "framer-motion";
import { skills } from "../data/portfolioData";

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-gray-950 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-30" />
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-cyan-600/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-cyan-400 font-mono text-sm font-semibold tracking-widest uppercase mb-3 block">
            What I Know
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Technical{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-violet-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {skills.map((skillGroup, index) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.07 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="group bg-gray-900/80 border border-white/5 rounded-2xl p-6 backdrop-blur-sm hover:border-white/10 transition-all duration-300 cursor-default relative overflow-hidden"
            >
              {/* Gradient overlay on hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${skillGroup.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl`}
              />

              {/* Icon & Category */}
              <div className="flex items-center gap-3 mb-5">
                <div
                  className={`w-10 h-10 rounded-xl bg-gradient-to-br ${skillGroup.color} flex items-center justify-center text-lg shadow-lg`}
                >
                  {skillGroup.icon}
                </div>
                <h3 className="text-white font-bold text-sm leading-tight">{skillGroup.category}</h3>
              </div>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((item) => (
                  <motion.span
                    key={item}
                    whileHover={{ scale: 1.1 }}
                    className="px-2.5 py-1 rounded-lg text-xs font-medium bg-white/5 border border-white/8 text-gray-300 hover:bg-white/10 hover:text-white transition-all duration-200 cursor-default"
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Skill Bars Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 bg-gray-900/50 border border-white/5 rounded-2xl p-8"
        >
          <h3 className="text-white font-bold text-xl mb-8 text-center">Core Proficiency</h3>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { skill: "Python & Data Science", level: 90, color: "from-blue-500 to-cyan-500" },
              { skill: "Machine Learning / AI", level: 85, color: "from-violet-500 to-purple-600" },
              { skill: "React.js / Web Dev", level: 80, color: "from-cyan-500 to-teal-500" },
              { skill: "SQL & Databases", level: 80, color: "from-orange-500 to-amber-500" },
              { skill: "Data Analysis & BI", level: 75, color: "from-pink-500 to-rose-500" },
              { skill: "IoT & Embedded Systems", level: 70, color: "from-emerald-500 to-green-500" },
            ].map((item, i) => (
              <div key={item.skill}>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-300 text-sm font-medium">{item.skill}</span>
                  <span className="text-gray-500 text-sm">{item.level}%</span>
                </div>
                <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: i * 0.1, ease: "easeOut" }}
                    className={`h-full bg-gradient-to-r ${item.color} rounded-full`}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

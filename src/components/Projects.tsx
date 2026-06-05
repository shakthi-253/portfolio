import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, ChevronDown, ChevronUp } from "lucide-react";
import { projects } from "../data/portfolioData";

export default function Projects() {
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  return (
    <section id="projects" className="py-24 bg-gray-900 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-emerald-500 to-transparent opacity-30" />
      <div className="absolute -top-20 right-0 w-80 h-80 bg-emerald-600/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-emerald-400 font-mono text-sm font-semibold tracking-widest uppercase mb-3 block">
            What I've Built
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Featured{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-cyan-500 mx-auto rounded-full" />
        </motion.div>

        <div className="space-y-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-gray-800/50 border border-white/5 rounded-2xl overflow-hidden hover:border-white/10 transition-all duration-300 backdrop-blur-sm"
            >
              {/* Project Header */}
              <div
                className="p-6 sm:p-8 cursor-pointer"
                onClick={() => setExpandedProject(expandedProject === index ? null : index)}
              >
                <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                  {/* Emoji Icon */}
                  <div
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${project.color} flex items-center justify-center text-2xl flex-shrink-0 shadow-lg`}
                  >
                    {project.emoji}
                  </div>

                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                      <div>
                        <h3 className="text-white font-bold text-lg sm:text-xl leading-tight group-hover:text-white transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-gray-400 text-sm mt-1 leading-relaxed max-w-2xl">
                          {project.description}
                        </p>
                      </div>

                      <div className="flex items-center gap-2 flex-shrink-0">
                        <span className="text-gray-500 text-sm hidden sm:block">
                          {expandedProject === index ? "Show less" : "Show more"}
                        </span>
                        <div
                          className={`w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 flex-shrink-0 transition-transform duration-300 ${
                            expandedProject === index ? "rotate-0" : ""
                          }`}
                        >
                          {expandedProject === index ? (
                            <ChevronUp size={16} />
                          ) : (
                            <ChevronDown size={16} />
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mt-4">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-white/5 border border-white/8 text-gray-400"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Expanded Content */}
              <AnimatePresence>
                {expandedProject === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="border-t border-white/5 px-6 sm:px-8 py-6 sm:pl-28">
                      <h4 className="text-gray-300 font-semibold text-sm uppercase tracking-wide mb-4">
                        Key Highlights
                      </h4>
                      <ul className="space-y-3">
                        {project.points.map((point, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.07 }}
                            className="flex items-start gap-3 text-gray-400 text-sm leading-relaxed"
                          >
                            <span
                              className={`w-1.5 h-1.5 rounded-full bg-gradient-to-br ${project.color} flex-shrink-0 mt-2`}
                            />
                            {point}
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Bottom gradient bar */}
              <div className={`h-0.5 bg-gradient-to-r ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
            </motion.div>
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/shakthi-253"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-800/80 border border-white/10 text-gray-300 font-semibold rounded-xl hover:bg-gray-800 hover:text-white hover:border-white/20 transition-all duration-200"
          >
            <ExternalLink size={16} />
            View All Projects on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}

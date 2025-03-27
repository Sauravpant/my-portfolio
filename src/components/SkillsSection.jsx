import React from "react";
import { motion } from "framer-motion";

const SkillSection = () => {
  return (
    <section id="skills" className="py-20 px-6 bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="text-blue-400">Languages</span>,{" "}
            <span className="text-cyan-300">Frameworks</span> &{" "}
            <span className="text-blue-400">Tools</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-1">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="flex flex-col items-center p-4 w-full sm:w-72 md:w-64 lg:w-56 h-auto min-h-[320px] 
                      bg-gray-700/80 rounded-lg border border-gray-600 hover:border-blue-400/50
                      transition-all shadow-md"
          >
            <h3 className="text-3xl font-semibold mb-4 text-white">
              Languages
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {["c-logo", "cpp-logo", "java-logo", "js-logo", "dart-logo"].map(
                (lang) => (
                  <img
                    key={lang}
                    src={`images/${lang}.png`}
                    alt={lang.split("-")[0].toUpperCase()}
                    className="w-16 h-16 object-contain hover:scale-110 transition-transform"
                  />
                )
              )}
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="flex flex-col items-center p-4 w-full sm:w-72 md:w-64 lg:w-56 h-auto min-h-[320px] 
                      bg-gray-700/80 rounded-lg border border-gray-600 hover:border-cyan-400/50
                      transition-all shadow-md"
          >
            <h3 className="text-3xl font-semibold mb-4 text-white">
              Front-End
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "html-logo",
                "css-logo",
                "bootstrap-logo",
                "tailwind-logo",
                "react-logo",
                "sass-logo",
              ].map((tech) => (
                <img
                  key={tech}
                  src={`images/${tech}.png`}
                  alt={tech.split("-")[0].toUpperCase()}
                  className="w-16 h-16 object-contain hover:scale-110 transition-transform"
                />
              ))}
            </div>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="flex flex-col items-center p-4 w-full sm:w-72 md:w-64 lg:w-56 h-auto min-h-[320px] 
                      bg-gray-700/80 rounded-lg border border-gray-600 hover:border-blue-400/50
                      transition-all shadow-md"
          >
            <h3 className="text-3xl font-semibold mb-4 text-white">Back-End</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {["nodejs-logo", "mysql-logo", "postgresql-logo"].map((tech) => (
                <img
                  key={tech}
                  src={`images/${tech}.png`}
                  alt={tech.split("-")[0].toUpperCase()}
                  className="w-16 h-16 object-contain hover:scale-110 transition-transform"
                />
              ))}
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="flex flex-col items-center p-4 w-full sm:w-72 md:w-64 lg:w-56 h-auto min-h-[320px] 
                      bg-gray-700/80 rounded-lg border border-gray-600 hover:border-cyan-400/50
                      transition-all shadow-md"
          >
            <h3 className="text-3xl font-semibold mb-4 text-white">Tools</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {["git-logo", "github-logo", "vs-logo", "vscode-logo"].map(
                (tool) => (
                  <img
                    key={tool}
                    src={`images/${tool}.png`}
                    alt={tool.split("-")[0].toUpperCase()}
                    className="w-16 h-16 object-contain hover:scale-110 transition-transform"
                  />
                )
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SkillSection;

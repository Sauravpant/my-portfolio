import React from "react";
import { motion } from "framer-motion";

const SkillSection = () => {
  const skillCategories = [
    {
      title: "Languages",
      items: [
        "c-logo",
        "cpp-logo",
        "java-logo",
        "js-logo",
        "dart-logo",
        "typescript-logo",
      ],
      hoverBorder: "hover:border-blue-400/50",
    },
    {
      title: "Front-End",
      items: [
        "html-logo",
        "css-logo",
        "bootstrap-logo",
        "tailwind-logo",
        "react-logo",
        "sass-logo",
      ],
      hoverBorder: "hover:border-cyan-400/50",
    },
    {
      title: "Back-End",
      items: [
        "nodejs-logo",
        "mysql-logo",
        "postgresql-logo",
        "expressjs-logo",
        "mongodb-logo",
      ],
      hoverBorder: "hover:border-blue-400/50",
    },
    {
      title: "Tools",
      items: ["git-logo", "github-logo", "vs-logo", "vscode-logo"],
      hoverBorder: "hover:border-cyan-400/50",
    },
  ];

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
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              className={`flex flex-col items-center p-4 w-full sm:w-72 md:w-64 lg:w-56 h-auto min-h-[320px] 
                        bg-gray-700/20 rounded-lg border border-gray-600/50 ${category.hoverBorder}
                        transition-all shadow-md`}>
              <h3 className="text-3xl font-semibold mb-4 text-white">
                {category.title}
              </h3>
              <div className="flex flex-wrap justify-center gap-3">
                {category.items.map((item) => (
                  <div key={item} className="p-2 bg-gray-700/30 rounded-lg">
                    <img
                      src={`images/${item}.png`}
                      alt={item.split("-")[0].toUpperCase()}
                      className="w-16 h-16 object-contain hover:scale-110 transition-transform"
                    />
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillSection;

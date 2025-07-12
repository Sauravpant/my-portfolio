import React from "react";
import { motion } from "framer-motion";

const ProjectCard = ({ title, description, tech, demoImg, link, reverse }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className={`flex flex-col ${
        reverse ? "lg:flex-row-reverse" : "lg:flex-row"
      } items-center gap-8 mb-24`}>
      <motion.div
        whileHover={{ scale: 1.02 }}
        className="w-full lg:w-1/2 p-8 bg-gray-800/80 backdrop-blur-sm rounded-2xl border border-gray-700 hover:border-blue-400/50 shadow-xl hover:shadow-blue-500/10 transition-all">
        <h3 className="text-2xl md:text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
          {title}
        </h3>
        <p className="mb-8 text-lg md:text-xl text-gray-300 leading-relaxed">
          {description}
        </p>

        <div className="flex flex-wrap gap-4 mb-8">
          {tech.map((techImg, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.1 }}
              className="p-2 bg-gray-700/50 rounded-lg">
              <img
                src={`/images/${techImg}-logo.png`}
                alt={techImg}
                className="w-10 h-10 object-contain"
              />
            </motion.div>
          ))}
        </div>

        <motion.a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg text-white font-medium shadow-lg hover:shadow-blue-500/30 transition-all">
          View Project →
        </motion.a>
      </motion.div>
      <motion.div
        whileHover={{ scale: 1.03 }}
        className="w-full lg:w-1/2 h-full lg:h-full overflow-hidden rounded-2xl border-2 border-gray-700 shadow-xl group">
        <motion.img
          src={demoImg}
          alt={`${title} Demo`}
          className="h-full w-auto object-contain group-hover:scale-110 transition-transform duration-700"
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
        />
      </motion.div>
    </motion.div>
  );
};

const ProjectSection = () => {
  const projects = [
    {
      title: "TechEz",
      description:
        "A web based application that connects technicians with users.",
      tech: [
        "typescript",
        "react",
        "tailwind",
        "nodejs",
        "expressjs",
        "mongodb",
      ],
      demoImg: "/images/techez.png",
      link: "https://github.com/Sauravpant/TechEz",
    },
    {
      title: "Portfolio",
      description:
        "A modern personal portfolio showcasing my projects with responsive design and smooth animations.",
      tech: ["js", "react", "tailwind"],
      demoImg: "/images/project-demo.png",
      link: "https://github.com/Sauravpant/Portfolio",
      reverse: true,
    },
    {
      title: "ShopCart",
      description:
        "ShopCart is a responsive e-commerce web app with dynamic product listings, category-based browsing, and a smooth cart experience",
      tech: ["js", "react", "redux"],
      demoImg: "/images/ecommerce.png",
      link: "https://github.com/Sauravpant/ShopCart",
    },
  ];

  return (
    <section id="Projects" className="py-24 px-6 bg-gray-800">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-6 text-white"
            initial={{ y: -30 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}>
            My <span className="text-blue-400">Projects</span>
          </motion.h2>
          <motion.div
            className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto rounded-full"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          />
        </div>

        <div className="space-y-32">
          {projects.map((project, i) => (
            <ProjectCard key={i} {...project} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ProjectSection;

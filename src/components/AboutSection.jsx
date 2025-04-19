import React from "react";
import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="About" className="py-20 px-6 bg-gray-800">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-4 text-white"
            initial={{ y: -20 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
          >
            About <span className="text-blue-400">Me</span>
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto rounded-full"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          />
        </div>

        <div className="flex flex-col items-center">
          <motion.img
            src="../../images/profile.png
            "
            alt="Profile"
            className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover mb-8 border-4 border-blue-400/30 shadow-lg hover:shadow-blue-400/20 transition-all duration-300"
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
          />

          <motion.div
            className="text-lg md:text-xl text-gray-300 leading-relaxed text-center max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            I am a{" "}
            <span className="text-blue-400 font-semibold">
              Computer Engineering student
            </span>{" "}
            with a strong foundation in{" "}
            <span className="text-cyan-300">programming</span> and{" "}
            <span className="text-cyan-300">web development</span>. With a keen
            interest in{" "}
            <span className="text-blue-400 font-semibold">
              Data Structures and Algorithms (DSA)
            </span>
            , I enjoy solving problems and continuously improving my coding
            abilities. I am learning full-stack web development with a focus on
            building responsive, user-friendly web applications. I enjoy
            tackling new challenges and continuously improving my abilities.{" "}
            <span className="text-blue-400 font-semibold">Let's connect!</span>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;

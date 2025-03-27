import React, { useState, useEffect } from "react";
import { FaLinkedin, FaGithub, FaEnvelope, FaCode } from "react-icons/fa";
import { motion } from "framer-motion";

const Intro = () => {
  const [currentTagIndex, setCurrentTagIndex] = useState(0);
  const tags = ["Programmer", "Web Developer", "An Enthusiast"];
  const fullName = "Saurav Pant";

  const [displayedName, setDisplayedName] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    if (displayedName.length < fullName.length) {
      const timeout = setTimeout(() => {
        setDisplayedName(fullName.substring(0, displayedName.length + 1));
      }, 150);
      return () => clearTimeout(timeout);
    } else {
      setIsTyping(false);
      const blinkInterval = setInterval(() => {
        setShowCursor((prev) => !prev);
      }, 500);
      return () => clearInterval(blinkInterval);
    }
  }, [displayedName]);

  useEffect(() => {
    if (!isTyping) {
      const tagTimeouts = tags.map((_, i) =>
        setTimeout(() => setCurrentTagIndex(i + 1), i * 500)
      );
      return () => tagTimeouts.forEach(clearTimeout);
    }
  }, [isTyping]);

  return (
    <div className="flex flex-col items-center justify-center px-4 text-center">
      <div className="relative mb-4 mt-8 md:mt-12">
        <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent tracking-tight flex items-center">
          {displayedName}
          <span
            className={`ml-1 h-[1em] w-0.5 bg-blue-400 transition-opacity duration-300 ${
              showCursor && !isTyping ? "opacity-100" : "opacity-0"
            }`}
          ></span>
        </h1>
      </div>
      <div className="flex flex-wrap justify-center gap-3 mb-6 md:mb-8 min-h-[2.5rem]">
        {tags.slice(0, currentTagIndex).map((tag, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 10,
              delay: i * 0.3,
            }}
            className="text-base px-4 py-1 rounded-full bg-gray-800/70 backdrop-blur-sm text-white border border-gray-700"
          >
            {tag}
          </motion.span>
        ))}
      </div>
      <motion.div
        className="flex gap-5 mt-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
      >
        {[FaLinkedin, FaGithub, FaEnvelope, FaCode].map((Icon, i) => (
          <motion.a
            key={i}
            whileHover={{ y: -3 }}
            className="p-3 rounded-full bg-gray-800 hover:bg-blue-600 transition-all"
          >
            <Icon className="text-xl text-white" />
          </motion.a>
        ))}
      </motion.div>
      <motion.div
        className="flex gap-5 mt-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3 }}
      >
        <motion.a
          href="#About"
          whileHover={{ scale: 1.05 }}
          className="px-8 py-3 rounded-lg border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white transition-colors font-medium"
        >
          About Me
        </motion.a>
        <motion.a
          href="#Projects"
          whileHover={{ scale: 1.05 }}
          className="px-8 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors font-medium"
        >
          Projects
        </motion.a>
      </motion.div>
    </div>
  );
};

export default Intro;

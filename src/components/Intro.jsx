import React, { useState, useEffect } from "react";
import "../styles/global.css";

function Intro() {
  const [currentTagIndex, setCurrentTagIndex] = useState(0);
  const tags = ["Programmer", "Web Developer", "An Enthusiast"];

  useEffect(() => {
    const nameAnimationDelay = 2000;
    const tagDelay = 1000;

    const timeouts = tags.map((_, index) =>
      setTimeout(() => {
        setCurrentTagIndex(index + 1);
      }, nameAnimationDelay + index * tagDelay)
    );

    return () => timeouts.forEach((timeout) => clearTimeout(timeout));
  }, []);

  return (
    <div className="flex flex-col items-center justify-center space-y-8 px-4 sm:px-8 md:px-16">
      <h1 className="text-5xl sm:whitespace-nowrap sm:text-6xl md:text-8xl font-bold text-white name animated-text">
        Saurav Pant
      </h1>
      <div className="flex flex-wrap items-center justify-center tags-container">
        {tags.slice(0, currentTagIndex).map((tag, index) => (
          <React.Fragment key={index}>
            <span className="tag text-xl sm:text-2xl">{tag}</span>
            {index < currentTagIndex - 1 && <span className="dot">•</span>}
          </React.Fragment>
        ))}
      </div>
      <div className="flex flex-row space-x-6 mt-6 justify-center">
        <a
          href="https://www.linkedin.com"
          target="_blank"
          className="social-icon"
        >
          <i className="fab fa-linkedin fa-2x"></i>
        </a>
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          <i className="fab fa-github fa-2x"></i>
        </a>
        <a href="mailto:sauravpant777@gmail.com" className="social-icon">
          <i className="fas fa-envelope fa-2x"></i>
        </a>
        <a
          href="https://leetcode.com/u/saurav_7/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          <i className="fas fa-code fa-2x"></i>
        </a>
      </div>
      <div className="flex space-x-4 mt-6">
        <a
          href="#About"
          className="px-4 py-2 text-lg font-semibold border rounded-md text-white hover:bg-white hover:text-black transition"
        >
          About Me
        </a>
        <a
          href="#Projects"
          className="px-4 py-2 text-lg font-semibold border rounded-md text-white hover:bg-white hover:text-black transition"
        >
          Projects
        </a>
      </div>
    </div>
  );
}

export default Intro;

import React from "react";

const AboutSection = () => {
  return (
    <div className="p-6 sm:px-10 bg-gray-100" id="About">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-semibold mb-4">About Me</h2>
      </div>

      <div className="flex flex-col items-center justify-center">
        <img
          src="../src/assets/images/your-photo.jpg"
          alt="  Photo"
          className="w-32 h-32 rounded-full object-cover mb-4"
        />
        <p className="text-lg text-center max-w-3xl mx-auto">
          I am a <strong> Computer Engineering student</strong> with a strong
          foundation in programming and web development. With a keen interest in
          <strong> Data Structures and Algorithms (DSA)</strong> , I enjoy
          solving problems and continuously improving my coding abilities. I am
          learning full-stack web development with a focus on building
          responsive, user-friendly web applications. I enjoy tackling new
          challenges and continuously improving my abilities. Let's connect!
        </p>
        <div className="mb-12"></div>
        <div className="text-center mb-8">
          <h2 className="text-4xl font-semibold mb-8">
            Current Focus and Goals
          </h2>
          <p className="text-lg text-center max-w-3xl mx-auto">
            I am currently diving into <strong>Competitive Programming </strong>
            while focusing on the <strong>MERN Stack</strong> (MongoDB, Express,
            React, Node.js) for backend development. Alongside this, I am
            working on a <strong>Data Structure Visualizer Project</strong>{" "}
            using MERN Stack to deepen my understanding of algorithms and improve
            my practical coding skills. My goals include strengthening my
            expertise in the MERN stack and competitive programming.
          </p>
        </div>
      </div>
      <div className="mb-12"></div>
    </div>
  );
};

export default AboutSection;

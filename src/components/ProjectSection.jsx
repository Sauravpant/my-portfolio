import React from "react";

const ProjectSection = () => {
  return (
    <div className="p-4" id="Projects">
      <div className="space-y-12">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-semibold mb-4">Projects</h2>
      </div>
        <div className="flex flex-col sm:flex-row items-center">
          <div className="flex flex-col items-center p-6  w-full sm:w-full md:w-96 lg:w-96 ml-16 mb-6 sm:mb-0">
            <h3 className="text-xl font-semibold mb-4">ATM Management System</h3>
            <p className="mb-4">
              A C++ based ATM management system for handling user transactions
              securely.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <img
                src="../src/assets/images/skills/cpp-logo.png"
                alt="C++"
                className="w-12 h-12 object-contain"
              />
            </div>
            <a
              href="https://github.com/Sauravpant/ATM-Management-System"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 text-blue-500 hover:underline"
            >
              View Project
            </a>
          </div>
          <div className="flex items-center justify-center  w-full sm:w-full md:w-96 lg:w-96 sm:ml-6">
            <div className="w-full h-64 overflow-hidden">
              <img
                src="../src/assets/images/projects/atm-demo.png"
                alt="ATM Management System Demo"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row-reverse items-center">
          <div className="flex flex-col items-center p-6 w-full sm:w-full md:w-96 lg:w-96 mr-16 mb-6 sm:mb-0">
            <h3 className="text-xl font-semibold mb-4">Portfolio</h3>
            <p className="mb-4">
              A personal portfolio to showcase my projects built using JS, React,
              and Tailwind.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <img
                src="../src/assets/images/skills/js-logo.png"
                alt="JavaScript"
                className="w-12 h-12 object-contain"
              />
              <img
                src="../src/assets/images/skills/react-logo.png"
                alt="React"
                className="w-12 h-12 object-contain"
              />
              <img
                src="../src/assets/images/skills/tailwind-logo.png"
                alt="Tailwind"
                className="w-12 h-12 object-contain"
              />
            </div>
            <a
              href="https://github.com/Sauravpant/Portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 text-blue-500 hover:underline"
            >
              View Project
            </a>
          </div>
          <div className="flex items-center justify-center  w-full sm:w-full md:w-96 lg:w-96 sm:mr-6">
            <div className="w-full h-64 overflow-hidden">
              <img
                src="../src/assets/images/projects/project-demo.png"
                alt="Portfolio Demo"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-center">
          <div className="flex flex-col items-center p-6  w-full sm:w-full md:w-96 lg:w-96 ml-16 mb-6 sm:mb-0">
            <h3 className="text-xl font-semibold mb-4">
              Data Structure Visualizer
            </h3>
            <p className="mb-4">
              An interactive visualizer for data structures built using JS, React,
              and Redux.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <img
                src="../src/assets/images/skills/js-logo.png"
                alt="JavaScript"
                className="w-12 h-12 object-contain"
              />
              <img
                src="../src/assets/images/skills/react-logo.png"
                alt="React"
                className="w-12 h-12 object-contain"
              />
              <img
                src="../src/assets/images/skills/redux-logo.png"
                alt="Redux"
                className="w-12 h-12 object-contain"
              />
            </div>
            <a
              href="https://github.com/Sauravpant/Data-Structure-Visualizer"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 text-blue-500 hover:underline"
            >
              View Project
            </a>
          </div>
          <div className="flex items-center justify-center w-full sm:w-full md:w-96 lg:w-96 sm:ml-6">
            <div className="w-full h-64 overflow-hidden">
              <img
                src="../src/assets/images/projects/ds-visualizer.png"
                alt="Data Structure Visualizer Demo"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

      </div>
    </div>
    
  );
};

export default ProjectSection;

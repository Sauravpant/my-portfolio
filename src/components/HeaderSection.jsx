import React from "react";
import ParticleDesign from "./ParticleDesign";
import Intro from "./Intro";

const HeaderSection = () => {
  return (
    <header className="relative w-full h-screen overflow-hidden">
      <ParticleDesign id="particles-js" />
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
        <Intro />
      </div>
    </header>
  );
};

export default HeaderSection;

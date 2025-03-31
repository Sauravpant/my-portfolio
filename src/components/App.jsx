import React from "react";
import HeaderSection from "./HeaderSection";
import "../styles/global.css";
import SkillsSection from "./SkillsSection";
import ProjectSection from "./ProjectSection";
import Footer from "./Footer";
import AboutSection from "./AboutSection";
import Contact from "./Contact";

function App() {
  return (
    <>
    <HeaderSection />
    <AboutSection />
    <SkillsSection  />
    <ProjectSection />
    <Contact/>
    <Footer />
    </>
  );
}

export default App;

import "./App.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

import Navbar from "./components/Navbar/Navbar";
import CustomCursor from "./components/CustomCursor/CustomCursor";
import Home from "./components/Home/Home";
import TechStack from "./TechStack";
import Projects from "./Projects";
import Contact from "./components/Contact/Contact";
import Statistics from "./components/Statistics/Statistics";
import Skills from "./Skills";
import WorkExperience from "./components/WorkExperience/WorkExperience";
import ParticlesBackground from "./components/ParticlesBackground/ParticlesBackground";

function App() {
  useGSAP(() => {
    gsap.to(".scroll-progress-bar", {
      scaleX: 1,
      ease: "none",
      scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      },
    });
  });

  return (
    <div className="App">
      <CustomCursor />
      <div
        className="scroll-progress-bar"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          height: "4px",
          backgroundImage: "linear-gradient(to right, #3379b5, #fffb1c)",
          zIndex: 9999,
          width: "100%",
          transformOrigin: "left",
          transform: "scaleX(0)",
        }}
      />
      <ParticlesBackground />
      <Navbar />
      <Home />
      <WorkExperience />
      <TechStack />
      <Skills />
      <Projects />
      <Statistics />
      <Contact />
    </div>
  );
}

export default App;

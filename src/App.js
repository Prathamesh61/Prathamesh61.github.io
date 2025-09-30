import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import TechStack from "./components/TechStack/TechStack";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Statistics from "./components/Statistics/Statistics";
import Skills from "./components/Skills/Skills";
import WorkExperience from "./components/WorkExperience/WorkExperience";
import ParticlesBackground from "./components/ParticlesBackground/ParticlesBackground";

function App() {
  return (
    <div className="App">
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

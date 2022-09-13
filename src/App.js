import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import TechStack from './TechStack';
import Projects from './Projects';
import Contact from './Contact';
import Statistics from './Statistics';


function App() {

  return (
    <div className='App'>
      <Navbar />
      <Home />
      <TechStack />
      <Projects />
      <Statistics/>
      <Contact />
    </div>
  );
}

export default App;

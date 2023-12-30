import "./App.css";
import About from "./components/About";
import { Home } from "./components/Home";
import Navbar from "./components/Navbar";
import Skill from "./components/Skill";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import GithubStatus from "./components/GithubStatus";
import Education from "./components/Eduaction";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <hr style={{
          width: "70%",
          height: "5px",
          background: "linear-gradient(to right, #007bff, #00ff00, #ff0000)",
          border: "none",
          marginTop:'120px',
          marginLeft:'15%',
          marginBottom:'-120px'
        }}/>
      <About />
      <hr style={{
          width: "70%",
          height: "5px",
          background: "linear-gradient(to right, #007bff, #00ff00, #ff0000)",
          border: "none",
          marginTop:'120px',
          marginLeft:'15%'
        }}/>
      <Skill />
      <hr style={{
          width: "70%",
          height: "5px",
          background: "linear-gradient(to right, #007bff, #00ff00, #ff0000)",
          border: "none",
          marginTop:'120px',
          marginLeft:'15%'
        }}/>
      <Projects />
      <hr style={{
          width: "70%",
          height: "5px",
          background: "linear-gradient(to right, #007bff, #00ff00, #ff0000)",
          border: "none",
          marginTop:'120px',
          marginLeft:'15%'
        }}/>
      <Education />
      <hr style={{
          width: "70%",
          height: "5px",
          background: "linear-gradient(to right, #007bff, #00ff00, #ff0000)",
          border: "none",
          marginTop:'120px',
          marginLeft:'15%'
        }}/>
      <GithubStatus />
      <hr style={{
          width: "70%",
          height: "5px",
          background: "linear-gradient(to right, #007bff, #00ff00, #ff0000)",
          border: "none",
          marginTop:'120px',
          marginLeft:'15%'
        }}/>
      <Contact />
      <Footer/>
    </div>
  );
}

export default App;

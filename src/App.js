import "./App.css";
import About from "./components/About";
import { Home } from "./components/Home";
import NavMenu from "./components/NavMenu";
import  Navbar  from "./components/Navbar";
import Skill from "./components/Skill";

function App() {
  return (
    <div className="App">
      {/* <NavMenu /> */}
      <Navbar/>
      <Home/>
      <hr style={{
          width: "60%",
          height: "2px",
          background: "linear-gradient(to right, #007bff, #00ff00, #ff0000)",
          border: "none",
          marginTop:'50px',
          marginLeft:'20%'
        }}/>
<customElements/>
      <About/>
      <customElements/>
      <Skill/>
      <customElements/>



      <br />
      <br /><br /><br /><br />
    </div>
  );
}

export default App;

import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../style/Nav.css";

function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header id="nav-menu">
      <div><h1>LOGO</h1></div>
      <nav id="nav-header" ref={navRef}>
        {/* <div> */}
        <a className="nav-link home" href="#home">
          Home
        </a>
        <a className="nav-link about" href="#about">
          About
        </a>
        <a className="nav-link skills" href="#skills">
          Skills
        </a>
        <a className="nav-link projects" href="#projects">
          Projects
        </a>
        <a className="nav-link contact" href="#contact">
          Contact
        </a>
        <a className="nav-link resume" href="/#" download target="_blank">
          Resume
        </a>
        {/* </div> */}
        
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>

    </header>
  );
}

export default Navbar;

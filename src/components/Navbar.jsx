import { useRef, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../style/Nav.css";
import { Button, Link, Text } from "@chakra-ui/react";
import Md_Abdul_Qadir_Resume from "../resume/Md Abdul Qadir-Full Stack Web Developer (1).pdf";
import { AiOutlineDownload } from "react-icons/ai";

function Navbar() {
  const navRef = useRef();
  const [Name, setName] = useState("Home");
  const Logo = "< Abdul />";
  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  const openResumeInNewTab = () => {
    window.open(
      "https://drive.google.com/file/d/1kPQzRRLng5ZdCBcira_ARtw0-eWzXYdL/view?usp=sharing",
      "_blank"
    );
  };

  return (
    <header id="nav-menu" style={{ border: "1px solid" }}>
      <div>
        <h1>{Logo}</h1>
      </div>
      <nav id="nav-header" ref={navRef}>
        <Link
          onClick={() => setName("Home")}
          className="nav-link home"
          href="#home"
        >
          home
        </Link>
        <Link
          onClick={() => setName("About")}
          className="nav-link about"
          href="#about"
        >
          about
        </Link>
        <Link
          onClick={() => setName("Skills")}
          className="nav-link skills"
          href="#skills"
        >
          skills
        </Link>
        <Link
          onClick={() => setName("Projects")}
          className="nav-link projects"
          href="#projects"
        >
          projects
        </Link>
        <Link
          onClick={() => setName("Contact")}
          className="nav-link contact"
          href="#contact"
        >
          contact
        </Link>
        {/* <Button
          id="resume-button-1"
          className="nav-link resume"
          onClick={() => {
            window.open("https://drive.google.com/file/d/1kPQzRRLng5ZdCBcira_ARtw0-eWzXYdL/view?usp=sharing","_blank");
          }}
        >
          <a id="resume-link-1" href={Md_Abdul_Qadir_Resume} target="_blank" download="Md_Abdul_Qadir_Resume.pdf"></a>
          Resume
        </Button> */}

        <Button
          id="resume-button-1"
          className="nav-link resume"
          onClick={() => {
            // Open the resume in a new tab
            window.open(
              "https://drive.google.com/file/d/1kPQzRRLng5ZdCBcira_ARtw0-eWzXYdL/view?usp=sharing",
              "_blank"
            );

            // Download the resume
            const link = document.createElement("a");
            link.href = Md_Abdul_Qadir_Resume;
            link.setAttribute("download", "Md_Abdul_Qadir_Resume.pdf");
            link.style.display = "none";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
          }}
        >
          Resume
        </Button>

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

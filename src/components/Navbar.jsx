import { useEffect, useRef, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../style/Nav.css";
import { useColorMode, Button, Link } from "@chakra-ui/react";
import Md_Abdul_Qadir_Resume from "../resume/Md_Abdul_Qadir_Resume.pdf.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";
import { PiSunLight } from "react-icons/pi";

function Navbar() {
  const navRef = useRef();
  const [Name, setName] = useState("Home");
  const Logo = "< Abdul />";
  const { colorMode, toggleColorMode } = useColorMode();
  const isDarkMode = colorMode === "dark";
  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };
  const [showScrollButton, setShowScrollButton] = useState(false);

  const handleScroll = () => {
    if(window.pageYOffset > 400){
      setShowScrollButton(true)
    }
    else{
      setShowScrollButton(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({top: 0, behavior:'smooth'});
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <>
    <header id="nav-menu" data-theme={isDarkMode ? "dark" : "light"}>
      <div>
        <h1
          style={{
            fontSize: "40px",
            fontWeight: "700",
            color: "linear-gradient(to right, #76a8dd, #00ff00, #ff0000)",
          }}
          className="gradient-text"
        >
          {Logo}
        </h1>
      </div>
      <nav id="nav-header" ref={navRef}>
        <Link
          onClick={() => setName("Home")}
          // className="nav-link home"
          className={`nav-link home ${isDarkMode ? "dark-link" : "light-link"}`}
          href="#home"
        >
          home
        </Link>
        <Link
          onClick={() => setName("About")}
          // className="nav-link about"
          className={`nav-link about ${
            isDarkMode ? "dark-link" : "light-link"
          }`}
          href="#about"
        >
          about
        </Link>
        <Link
          onClick={() => setName("Skills")}
          // className="nav-link skills"
          className={`nav-link skills ${
            isDarkMode ? "dark-link" : "light-link"
          }`}
          href="#skills"
        >
          skills
        </Link>
        <Link
          onClick={() => setName("Projects")}
          // className="nav-link projects"
          className={`nav-link projects ${
            isDarkMode ? "dark-link" : "light-link"
          }`}
          href="#projects"
        >
          projects
        </Link>
        <Link
          onClick={() => setName("Contact")}
          // className="nav-link contact"
          className={`nav-link contact ${
            isDarkMode ? "dark-link" : "light-link"
          }`}
          href="#contact"
        >
          contact
        </Link>

        <Button
          id="resume-button-1"
          className="nav-link resume"
          onClick={() => {
            // Open the resume in a new tab
            window.open(
              "https://drive.google.com/file/d/1M-rXFMO-O_nrT32l0ZAJa1H-iU3tI2Ub/view?usp=sharing",
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
          <span>Click !!</span>
          <span>Resume</span>
          <AiOutlineDownload style={{ marginLeft: "8px", fontSize: "20px" }} />
        </Button>

        <Button
          onClick={toggleColorMode}
          className="nav-link theme-toggle"
          border={"1px solid"}
          w={12}
          h={10}
          // backgroundColor={'166, 164, 161'} // 209, 204, 201
          style={{
            border: "none",
            borderRadius: "8px",
            backgroundColor: colorMode === "light" ? 'rgba(218, 227, 237)' : '#1a202c',
          }}
        >
          {colorMode === "light" ? (
            <IoMoonOutline width={"100%"} />
          ) : (
            <PiSunLight boxSize={8} />
          )}
        </Button>

        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>

      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>

    {showScrollButton && (<Button onClick={scrollToTop}
          position="fixed"
          bottom="4"
          right="4"
          backgroundColor="rgb(0, 172, 238)"
          color="white"
          borderRadius="full"
          zIndex="999"
          size="lg"
          p="2"
          fontSize="xl"
          boxShadow="lg">👆</Button>)}
    </>
  );
}

export default Navbar;

// import { useRef } from "react";
// import { FaBars, FaTimes } from "react-icons/fa";
// import "../style/Nav.css";
// import { Button, Link, Text } from "@chakra-ui/react";
// import Md_Abdul_Qadir_Resume from "../assets/Md_Abdul_Qadir_Resume.pdf.pdf"
// import { AiOutlineDownload } from "react-icons/ai";
// function Navbar() {
//   const navRef = useRef();
//   const Logo = "< Abdul />";
//   const showNavbar = () => {
//     navRef.current.classList.toggle("responsive_nav");
//   };

//   return (
//     <header id="nav-menu">
//       <div>
//         <h1>{Logo}</h1>
//       </div>
//       <nav id="nav-header" ref={navRef}>
//         {/* <div> */}
//         <Link className="nav-link home" href="/home">
//           Home
//         </Link>
//         <Link className="nav-link about" href="#about">
//           About
//         </Link>
//         <Link className="nav-link skills" href="#skills">
//           Skills
//         </Link>
//         <Link className="nav-link projects" href="#projects">
//           Projects
//         </Link>
//         <Link className="nav-link contact" href="#contact">
//           Contact
//         </Link>
//         <Button
//           colorScheme={"red"}
//           id="resume-button-1"
//           className="nav-link resume"
//           onClick={() => {
//             window.open(
//               "https://drive.google.com/file/d/1kPQzRRLng5ZdCBcira_ARtw0-eWzXYdL/view?usp=sharing",
//               "_blank"
//             );
//           }}
          
//         >
//           <a href={Md_Abdul_Qadir_Resume} target="_blank" download='Md_Abdul_Qadir_Resume.pdf'>Resume</a>
//         </Button>
//         {/* </div> */}

//         <button className="nav-btn nav-close-btn" onClick={showNavbar}>
//           <FaTimes />
//         </button>
//       </nav>

//       <button className="nav-btn" onClick={showNavbar}>
//         <FaBars />
//       </button>
//     </header>
//   );
// }

// export default Navbar;



import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../style/Nav.css";
import { Button, Link, Text } from "@chakra-ui/react";
import Md_Abdul_Qadir_Resume from "../assets/Md_Abdul_Qadir_Resume.pdf.pdf";
import { AiOutlineDownload } from "react-icons/ai";

function Navbar() {
  const navRef = useRef();
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
    <header id="nav-menu">
      <div>
        <h1>{Logo}</h1>
      </div>
      <nav id="nav-header" ref={navRef}>
        <Link className="nav-link home" href="/home">
          Home
        </Link>
        <Link className="nav-link about" href="#about">
          About
        </Link>
        <Link className="nav-link skills" href="#skills">
          Skills
        </Link>
        <Link className="nav-link projects" href="#projects">
          Projects
        </Link>
        <Link className="nav-link contact" href="#contact">
          Contact
        </Link>
        <Button
          colorScheme={"red"}
          id="resume-button-1"
          className="nav-link resume"
          onClick={openResumeInNewTab}
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

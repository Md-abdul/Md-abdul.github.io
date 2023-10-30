import React from "react";

const NavMenu = () => {
  return (
    <nvb id="nav-menu">
      <div id="nav-logo">Abdul</div>
      <div id="nav-header">
        <ul id="nav-links">
          <li>
            <a class="nav-link home" href="#home">
              Home
            </a>
          </li>
          <li>
            <a class="nav-link about" href="#about">
              About
            </a>
          </li>
          <li>
            <a class="nav-link skills" href="#skills">
              Skills
            </a>
          </li>
          <li>
            <a class="nav-link projects" href="#projects">
              Projects
            </a>
          </li>
          <li>
            <a class="nav-link contact" href="#contact">
              Contact
            </a>
          </li>
          <li>
            <a
              class="nav-link resume"
              id="resume-button-1"
              download
              target="_blank"
              href="assets/resume/Md-Abdul-Qadir-Resume.pdf"
            >
              Resume
            </a>
          </li>
        </ul>
      </div>
    </nvb>
  );
};

export default NavMenu;

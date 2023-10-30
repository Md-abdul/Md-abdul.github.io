import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

const NavContainer = styled.nav`
  background: ${(props) => (props.theme === "dark" ? "#333" : "#f0f0f0")};
  color: ${(props) => (props.theme === "dark" ? "#fff" : "#333")};
  padding: 10px;
`;

const Logo = styled.div`
  h1 {
    margin: 0;
  }
`;

const NavList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NavItem = styled.li`
  margin: 0 10px;
`;

const NavLink = styled.a`
  text-decoration: none;
  color: inherit;

  &.home {
    color: ${(props) => (props.theme === "dark" ? "#ff8c00" : "#007bff")};
  }

  &.dark-mode {
    cursor: pointer;
    color: ${(props) => (props.theme === "dark" ? "#007bff" : "#ff8c00")};
  }
`;

const ThemeToggle = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: ${(props) => (props.theme === "dark" ? "#ff8c00" : "#007bff")};
  font-size: 24px;
`;

const NavMenu = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <NavContainer id="nav-menu">
      <Logo id="nav-logo">
        <h1>Abdul</h1>
      </Logo>
      <NavList id="nav-header">
        <NavItem id="nav-links">
          <NavLink className="nav-link home" href="#home">
            Home
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink className="nav-link about" href="#about">
            About
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink className="nav-link skills" href="#skills">
            Skills
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink className="nav-link projects" href="#projects">
            Projects
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink className="nav-link contact" href="#contact">
            Contact
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={`nav-link resume ${theme === "dark" ? "dark-mode" : ""}`}
            id="resume-button-1"
            download
            target="_blank"
            href="assets/resume/Md-Abdul-Qadir-Resume.pdf"
          >
            Resume
          </NavLink>
        </NavItem>
        <NavItem>
          <ThemeToggle theme={theme} onClick={toggleTheme}>
            {theme === "light" ? (
              <FontAwesomeIcon icon={faMoon} />
            ) : (
              <FontAwesomeIcon icon={faSun} />
            )}
          </ThemeToggle>
        </NavItem>
      </NavList>
    </NavContainer >
  );
};

export default NavMenu;

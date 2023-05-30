import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const Navbar = () => {
  return (
    <DIV>
      <div>
        <h1>Abdul </h1>
      </div>

      <div className="nav-link">
        <Link className="nav-link home" to="/">
          Home
        </Link>
        <Link className="nav-link about" to="/about">
          About
        </Link>
        <Link className="nav-link skills" to="/skill">
          Skills
        </Link>
        <Link className="nav-link projects" to="/project">
          Project
        </Link>
        <Link className="nav-link contact" to="/contact">
          Contact
        </Link>
        <Link className="nav-link resume"> Resume </Link>
      </div>
    </DIV>
  );
};

const DIV = styled.div`

    border: 1px solid;
    display: flex;
    align-items: center;
    margin: auto;
    justify-content: space-between;
    margin-left: 30px;
    margin-right: 30px;


  .nav-link{
    text-decoration: none;
    padding: 10px;
  }
`;

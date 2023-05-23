import React from "react";
import "../styles/header.css";
import resume from "../files/Resume.pdf";

function Header() {
  return (
    <nav className="navbar navbar-fixed-top px-5 justify-content-center justify-content-lg-between">
      <h1 className="px-5">
        <span className="mainAccent">&lt; </span>
        <span>Courtney S</span>
        <span className="mainAccent"> /&gt;</span>
      </h1>

      <a href={resume} target="_blank">
        resume
      </a>
    </nav>
  );
}

export default Header;

import React from "react";
import "../styles/header.css";
import resume from "../files/Resume.pdf";

function NavTabs() {
  return (
    <nav className="navbar navbar-fixed-top px-5 justify-content-center justify-content-lg-between">
      <h1 className="px-5">
        <span className="pink">&lt; </span>
        <span>Courtney S</span>
        <span className="pink"> /&gt;</span>
      </h1>

      <ul>
        <li>
          <a href="#about">about me</a>
        </li>
        {/* <li>
          <a href="#skills">skills</a>
        </li> */}
        <li>
          <a href="#works">works</a>
        </li>
        {/* <li>
          <a href="#contact">contact</a>
        </li> */}
        <li>
          <a href={resume} target="_blank">
            resume
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default NavTabs;

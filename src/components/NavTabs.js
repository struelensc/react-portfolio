import React from "react";
import "../styles/header.css";
import resume from "../files/Resume.pdf";

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <nav className="navbar px-5 nav-extended">
      <h1 className="px-5">
        <span className="pink">&lt; </span>
        <span>Courtney S</span>
        <span className="pink"> /&gt;</span>
      </h1>

      <ul>
        <li>
          <a href="#about">about me</a>
        </li>
        {/* would like to add in skills section */}
        <li>
          <a href="#works">works</a>
        </li>
        <li>
          <a href="#contact">contact</a>
        </li>
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

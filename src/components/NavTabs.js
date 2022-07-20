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
          <a
            href="#about me"
            onClick={() => handlePageChange("About")}
            className={currentPage === "About" ? "orange" : "none"}
          >
            about me
          </a>
        </li>
        {/* would like to add in skills section */}
        <li>
          <a
            href="#portfolio"
            onClick={() => handlePageChange("Portfolio")}
            className={currentPage === "Portfolio" ? "orange" : "none"}
          >
            portfolio
          </a>
        </li>
        <li>
          <a
            href="#contact"
            onClick={() => handlePageChange("Contact")}
            className={currentPage === "Contact" ? "orange" : "none"}
          >
            contact
          </a>
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

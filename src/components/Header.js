import React from "react";
import "../styles/header.css";
import resume from "../files/Resume.pdf";

function Header() {
  return (
    <nav>
      <div className="header-wrapper navbar justify-content-center justify-content-lg-between">
        <h1 className="statement-text">
          <span className="mainAccent">&lt; </span>
          <span>courtney s</span>
          <span className="mainAccent"> /&gt;</span>
        </h1>

        <a href={resume} className="statement-text" target="_blank">
          resume
        </a>
      </div>
    </nav>
  );
}

export default Header;

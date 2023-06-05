import React, { useState, useEffect } from "react";
import "../styles/header.css";
import resume from "../files/Resume.pdf";
import resumeIcon from "../assets/contact-icons/resume.png";

function Header() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsSmallScreen(window.innerWidth < 768);
    }

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav>
      <div
        className={`header-wrapper navbar justify-content-lg-between ${
          isSmallScreen ? "justify-content-left" : ""
        }`}
      >
        <h1 className={`statement-text`}>
          <span className="mainAccent">&lt; </span>
          <span>{isSmallScreen ? "cs" : "courtney s"}</span>
          <span className="mainAccent"> /&gt;</span>
        </h1>

        <a className="icon" href={resume} target="_blank">
          <img src={resumeIcon} alt="Resume icon" />
        </a>
      </div>
    </nav>
  );
}

export default Header;

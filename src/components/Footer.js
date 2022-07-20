import React from "react";
import linkedin from "../assets/Icons/linkedin.png";
import email from "../assets/Icons/email.png";
import github from "../assets/Icons/github.png";
import resume from "../assets/Icons/resume.png";
import "../styles/footer.css";

function Footer() {
  return (
    <footer className="d-flex justify-content-center footer-extended">
      <div className="contactList">
        <ul className="list-group list-group-horizontal-sm py-4 flex-wrap">
          <li className="px-4">
            <a
              className="icon"
              href="https://github.com/struelensc"
              target="_blank"
            >
              Github
              <img src={github} alt="Github icon" />
            </a>
          </li>
          <li className="px-4">
            <a
              className="icon"
              href="https://www.linkedin.com/in/courtney-struelens/"
              target="_blank"
            >
              LinkedIn
              <img src={linkedin} alt="LinkedIn icon" />
            </a>
          </li>
          <li className="px-4">
            <a
              className="icon"
              href="mailto: courtneystruelens@hotmail.com"
              target="_blank"
            >
              Email
              <img src={email} alt="Email icon" />
            </a>
          </li>
          <li className="px-4">
            <a
              className="icon"
              href="./assets/files/Resume 2022.pdf"
              target="_blank"
            >
              Resume
              <img src={resume} alt="Resume icon" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;

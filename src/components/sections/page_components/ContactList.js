import React from "react";
import linkedin from "../../../assets/contact-icons/linkedin.png";
import email from "../../../assets/contact-icons/email.png";
import github from "../../../assets/contact-icons/github.png";
import resume from "../../../assets/contact-icons/resume.png";

function ContactList() {
  return (
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
  );
}

export default ContactList;
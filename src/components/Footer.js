import React from "react";
import "../styles/footer.css";
import ContactList from "./sections/page_components/ContactList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer() {
  return (
    <footer className="footer-extended">
      <div className="container pt-5 d-flex flex-column align-items-center justify-content-center">
        <div className="py-4">
          <h1>
            <span className="tertiaryAccents">&lt; </span>
            <span>CS</span>
            <span className="tertiaryAccents"> /&gt;</span>
          </h1>
        </div>
        <div className="py-5">
          <h1 className="one-liner text-center">
            Curiosity: the secret ingredient behind my caffeinated coding
            sessions.
          </h1>
        </div>
        <div className="py-5">
          <ContactList />
        </div>
        <div className="py-5">
          <h1 className="made-with d-flex align-items-center">
            Made with
            <span>
              <FontAwesomeIcon
                className="px-3 icon"
                icon="fa-brands fa-react"
                size="2x"
              />
            </span>
            React
          </h1>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

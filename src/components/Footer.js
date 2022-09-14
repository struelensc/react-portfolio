import React from "react";
import "../styles/footer.css";
import ContactList from "./sections/page_components/ContactList";

function Footer() {
  return (
    <footer className="d-flex justify-content-center footer-extended">
      <ContactList />
    </footer>
  );
}

export default Footer;

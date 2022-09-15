import React from "react";
import photo from "../../assets/photo.jpg";
import "../../styles/about.css";
import ContactList from "./page_components/ContactList";

export default function About() {
  return (
    <section className="row py-5" id="about">
      <div className="d-flex flex-column-reverse flex-sm-row p-0 align-items-center">
        <div className="col-sm-8 px-5 pt-5" id="aboutContent">
          <h2>Hello!</h2>

          <p>
            I am a physics student that completed a full stack web development
            bootcamp. I'm passionate about the work I do and strive to have a
            career filled with constant opportunities to learn and grow. I enjoy
            helping people and I believe there is something to learn from
            everyone and every opportunity.
          </p>
          <ContactList />
        </div>

        <div className="col-sm-4 px-4 pb-5 profilePhotoContainer">
          <img className="profilePhoto" alt="Photo of Courtney" src={photo} />
        </div>
      </div>
    </section>
  );
}

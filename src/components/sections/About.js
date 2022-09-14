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
            I am a physics student taking a full stack web development bootcamp.
            I thoroughly enjoy problem solving and the balance between
            creativity and functionality web development offers.
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

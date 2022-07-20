import React from "react";
import photo from "../../assets/photo.jpg";
import "../../styles/about.css";

export default function About() {
  return (
    <section class="row py-5" id="about">
      <div class="row d-flex align-items-center">
        <div class="col-sm-8 px-5" id="aboutContent">
          <h2>Hello!</h2>

          <p>
            I am a physics student taking a full stack web development bootcamp.
            I thoroughly enjoy problem solving and the balance between
            creativity and functionality web development offers.
          </p>
        </div>

        <div class="col-sm-4 profilePhotoContainer">
          <img class="profilePhoto" alt="Photo of Courtney" src={photo} />
        </div>
      </div>
    </section>
  );
}

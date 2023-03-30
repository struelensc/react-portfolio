import React from "react";
import photo from "../../assets/photo.jpg";
import "../../styles/about.css";
import ContactList from "./page_components/ContactList";

export default function About() {
  return (
    <section className="row py-5" id="about">
      <div className="d-flex flex-column-reverse flex-sm-row p-0 align-items-center">
        <div className="aboutContainer col-sm-8 p-3">
          <div className="d-flex px-3 row mr-3 pb-3">
            <div className="col-11">
              <div className="row my-2 horizontalLine"></div>
              <div className="row my-2 horizontalLine"></div>
              <div className="row my-2 horizontalLine"></div>
              <div className="row my-2 horizontalLine"></div>
              <div className="row my-2 horizontalLine"></div>
            </div>

            <div className="xBox col text-center">
              <div>x</div>
            </div>
          </div>

          <div className="px-3 py-3" id="aboutContent">
            <h2>Hello!</h2>

            <p>
              I am a <span className="fascinate">physics student</span> who
              holds a certification of completion from University of
              Washington's{" "}
              <span className="notable">Full Stack Web Development</span> boot
              camp. I'm <span className="grandHotel">passionate</span> about the
              work I do and strive to have a career filled with constant
              opportunities to learn and grow. I enjoy helping people and I
              believe there is something to{" "}
              <span className="fascinate">
                learn from everyone and every opportunity
              </span>
              .
            </p>
            <ContactList />
          </div>
        </div>

        <div className="col-sm-4 px-4 pb-5 profilePhotoContainer">
          <img className="profilePhoto" alt="Photo of Courtney" src={photo} />
        </div>
      </div>
    </section>
  );
}

import React from "react";
import "../../styles/about.css";
import ContactList from "./page_components/ContactList";

export default function About() {
  return (
    <section className="p-5" id="about">
      <div className="row">
        <div className="d-flex flex-column-reverse flex-sm-row p-0 align-items-center">
          <div className="aboutContainer col-sm-7">
            <div id="aboutContent">
              <h2>Hello!</h2>

              <p>
                I am a <span className="fascinate">physics student</span> who
                holds a certification of completion from University of
                Washington's{" "}
                <span className="notable">Full Stack Web Development</span> boot
                camp. I'm <span className="grandHotel">passionate</span> about
                the work I do and strive to have a career filled with constant
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
        </div>
      </div>
    </section>
  );
}

import React from "react";
import "../../styles/about.css";

export default function About() {
  return (
    <section className="p-5" id="about">
      <div className="row p-5 justify-content-center">
        <div className="col-sm-7">
          <div id="aboutContent" className="text-center">
            <h2 className="statement-text pb-5">Hello, I'm Courtney!</h2>
            <p>
              I'm a passionate Physics Student turned Full-Stack Web Developer.
              With a background in physics and a certification in Full Stack Web
              Development from the University of Washington, I bring a unique
              blend of scientific curiosity and technical expertise to my work.
              Passionate about continuous learning and growth, I am driven to
              create innovative solutions and embrace new challenges.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

import React from "react";
import { Container } from "react-bootstrap";
import photo from "../../assets/photo.jpg";
import skillsPhoto from "../../assets/skills-theme-photo.png";
import "../../styles/greeting.css";

export default function About() {
  return (
    <section className="p-5 d-flex justify-content-center" id="greeting">
      <Container className="d-flex flex-column align-items-center">
        <div className="text-center">
          <h1>Full Stack Web Developer | Physics Student | Lifelong Learner</h1>
        </div>
        <div className="profilePhotoContainer">
          <img className="profilePhoto" alt="Photo of Courtney" src={photo} />
        </div>
        <div className="col-sm-5 vectorContainer">
          <img src={skillsPhoto} alt="female programmer" />
        </div>
      </Container>
    </section>
  );
}

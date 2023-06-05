import React from "react";
import { Container } from "react-bootstrap";
import photo from "../../assets/photo.jpg";
import "../../styles/greeting.css";

export default function About({ isSmallScreen }) {
  return (
    <section className="p-md-5 p-2 d-flex justify-content-center" id="greeting">
      <Container className="d-flex flex-column align-items-center">
        <div className="text-center">
          <h1 className="statement-text">
            {isSmallScreen ? (
              <>
                Full Stack Web Developer
                <br /> Physics Student
                <br />& Coffee Addict
              </>
            ) : (
              <>
                Full Stack Web Developer, Physics Student,
                <br />& Coffee Addict
              </>
            )}
          </h1>
        </div>
        <div className="profilePhotoContainer">
          <img className="profilePhoto" alt="Photo of Courtney" src={photo} />
        </div>
      </Container>
    </section>
  );
}

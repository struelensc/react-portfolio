import React from "react";
import "../../styles/skills.css";
import skillsPhoto from "../../assets/skills-theme-photo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Skills() {
  return (
    <section
      class="row py-5 d-flex flex-row-reverse align-items-center"
      id="skills"
    >
      <div class="col-sm-7">
        <h2 class="p-5">What I know</h2>

        <div class="px-5">
          <ul class="list-group list-group-horizontal flex-wrap">
            <li class="text-center mx-4">
              <p>html-5</p>
            </li>
            <li class="text-center mx-4">
              <i class="fab fa-css3-alt fa-3x"></i>
              <p>css</p>
            </li>
            <li class="text-center mx-4">
              <i class="fa-brands fa-bootstrap fa-3x"></i>
              <p>bootstrap</p>
            </li>
            <li class="text-center mx-4">
              <i class="fab fab fa-js fa-3x"></i>
              <p>Javascript</p>
            </li>
            <li class="text-center mx-4">
              <i class="fab fab fa-node fa-3x"></i>
              <p>nodejs</p>
            </li>
            <li class="text-center mx-4">
              <i class="fab fab fa-npm fa-3x"></i>
              <p>npm</p>
            </li>
            <li class="text-center mx-4">
              <i class="fab fas fa-database fa-3x"></i>
              <p>sql-database</p>
            </li>
            <li class="text-center mx-4">
              <i class="fa-brands fa-git fa-3x"></i>
              <p>git</p>
            </li>
          </ul>
        </div>
      </div>

      {/* <div class="col-sm-5 vectorContainer">
        <img src={skillsPhoto} alt="female programmer" />
      </div> */}
    </section>
  );
}

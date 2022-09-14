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
              <FontAwesomeIcon icon="fa-brands fa-react" size="3x" />
              <p>react</p>
            </li>
            <li class="text-center mx-4">
              <FontAwesomeIcon icon="fa-brands fa-html5" size="3x" />
              <p>html-5</p>
            </li>
            <li class="text-center mx-4">
              <FontAwesomeIcon icon="fa-brands fa-css3-alt" size="3x" />
              <p>css</p>
            </li>
            <li class="text-center mx-4">
              <FontAwesomeIcon icon="fa-brands fa-bootstrap" size="3x" />
              <p>bootstrap</p>
            </li>
            <li class="text-center mx-4">
              <FontAwesomeIcon icon="fa-brands fa-js" size="3x" />
              <p>javascript</p>
            </li>
            <li class="text-center mx-4">
              <FontAwesomeIcon icon="fa-brands fa-node-js" size="3x" />
              <p>node.js</p>
            </li>
            <li class="text-center mx-4">
              <FontAwesomeIcon icon="fa-solid fa-database" size="3x" />
              <p>sql-database</p>
            </li>
            <li class="text-center mx-4">
              <FontAwesomeIcon icon="fa-brands fa-git" size="3x" />
              <p>git</p>
            </li>
          </ul>
        </div>
      </div>

      <div class="col-sm-5 vectorContainer">
        <img src={skillsPhoto} alt="female programmer" />
      </div>
    </section>
  );
}

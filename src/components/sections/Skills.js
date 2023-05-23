import React from "react";
import "../../styles/skills.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Skills() {
  return (
    <section className="p-5" id="skills">
      <div className="row d-flex flex-row-reverse align-items-center">
        <div className="col-sm-7">
          <h2 className="p-5">Some things I know</h2>

          <div className="px-5">
            <ul className="list-group list-group-horizontal flex-wrap">
              <li className="text-center mx-4">
                <FontAwesomeIcon icon="fa-brands fa-react" size="3x" />
                <p>react</p>
              </li>
              <li className="text-center mx-4">
                <FontAwesomeIcon icon="fa-brands fa-html5" size="3x" />
                <p>html-5</p>
              </li>
              <li className="text-center mx-4">
                <FontAwesomeIcon icon="fa-brands fa-css3-alt" size="3x" />
                <p>css</p>
              </li>
              <li className="text-center mx-4">
                <FontAwesomeIcon icon="fa-brands fa-bootstrap" size="3x" />
                <p>bootstrap</p>
              </li>
              <li className="text-center mx-4">
                <FontAwesomeIcon icon="fa-brands fa-js" size="3x" />
                <p>javascript</p>
              </li>
              <li className="text-center mx-4">
                <FontAwesomeIcon icon="fa-brands fa-node-js" size="3x" />
                <p>node.js</p>
              </li>
              <li className="text-center mx-4">
                <FontAwesomeIcon icon="fa-solid fa-database" size="3x" />
                <p>sql-database</p>
              </li>
              <li className="text-center mx-4">
                <FontAwesomeIcon icon="fa-brands fa-git" size="3x" />
                <p>git</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

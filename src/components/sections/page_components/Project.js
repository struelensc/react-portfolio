import React from "react";
import github from "../../../assets/contact-icons/github.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Project({ data, i }) {
  const tech = data.tech;
  const techList = tech.map((i) => (
    <li className="list-inline-item px-2" key={i}>
      {i}
    </li>
  ));

  return (
    <div id={i} className="project d-flex flex-md-row-reverse flex-column">
      <div className="project-content col-md-6 col-12 justify-content-center">
        <p className="projectType pe-4 m-2">{data.type} Project</p>
        {data?.deployed ? (
          <a href={data?.deployed} className="custom-card-text pe-3">
            <h4 className="mb-4">{data.name}</h4>
          </a>
        ) : (
          <h4 className="mb-4">{data.name}</h4>
        )}
        <div className="project-description p-4">
          <p>{data.description}</p>
        </div>
        <ul className="list-inline">{techList}</ul>
        <div>
          <a className="icon px-2" href={data.github}>
            <FontAwesomeIcon icon="fa-brands fa-github" size="lg" />
          </a>
          {data?.deployed ? (
            <a className="icon px-2" href={data.deployed}>
              <FontAwesomeIcon
                icon="fa-solid fa-arrow-up-right-from-square"
                size="lg"
              />
            </a>
          ) : null}
        </div>
      </div>
      <figure className="projectImage col-md-6 col-12 my-md-auto my-5">
        <img src={data.image} alt={"Screenshot of project"} />
      </figure>
    </div>
  );
}

export default Project;

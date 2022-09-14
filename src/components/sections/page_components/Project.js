import React from "react";
import github from "../../../assets/contact-icons/github.png";

function Project({ data, i }) {
  return (
    <figure className="col-md-6" id={i}>
      <img src={data.image} alt={"Screenshot of project"} />
      <figcaption className="py-3 px-4 d-flex justify-content-between">
        {data?.deployed ? (
          <a href={data?.deployed} className="custom-card-text">
            {data.name}
          </a>
        ) : (
          <p className="m-0">{data.name}</p>
        )}
        <a className="github_icon" href={data.github}>
          <img src={github} alt="Github icon" />
        </a>
      </figcaption>
    </figure>
  );
}

export default Project;

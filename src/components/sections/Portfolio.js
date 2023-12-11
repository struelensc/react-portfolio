import React from "react";
import Project from "./page_components/Project";
import "../../styles/portfolio.css";
import bens_diner from "../../assets/project-screenshots/bens_diner.png";
import mvc_tech_blog from "../../assets/project-screenshots/mvc_tech_blog.png";
import rental_railroad_homepage from "../../assets/project-screenshots/rental_railroad_homepage.png";
import google_scripts from "../../assets/project-screenshots/google_scripts.png";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Work() {
  const projectInfo = [
    {
      name: "Google Sheets Scripts",
      image: google_scripts,
      description:
        "This repository contains a collection of Google Apps Scripts that are designed to run on Google Sheets. These scripts provide automation and custom functionality for various tasks and workflows in our work environment.",
      tech: ["JavaScript", "Google Apps Scripts"],
      github: "https://github.com/struelensc/google-scripts",
      type: "Solo",
    },
    {
      name: "Rental Railroad",
      image: rental_railroad_homepage,
      description:
        "This group projects goal was to create a MERN stack single-page application that delivers a user-driven marketplace where users can rent out their items and rent items from others.",
      tech: [
        "React",
        "GraphQL",
        "Express.js",
        "Node.js",
        "MongoDB",
        "Firebase",
        "Stripe",
      ],
      github: "https://github.com/rkutsel/rental-railroad",
      type: "Group",
    },
    {
      name: "Tech Blog",
      image: mvc_tech_blog,
      description:
        "This solo project was to build a CMS-style blog site where developers can publish their blog posts and comment on other developers’ posts as well. This app follows the MVC paradigm in its architectural structure, using Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication.",
      tech: ["Node.js", "Handlebars.js", "Sequelize", "Express.js", "MySQL"],
      github: "https://github.com/struelensc/mvc-tech-blog",
      deployed: "https://mvc-tech-blog-09493.herokuapp.com/",
      type: "Solo",
    },
    {
      name: "Ben's Diner",
      image: bens_diner,
      description:
        "This group project was to create a full stack web page application that allows restaurant customers to view a digital menu, and order food without a human server interface.",
      tech: [
        "Model-View-Controller Paradigm",
        "Handlebars.JS",
        "Bootstrap",
        "Express.js",
        "Node.JS",
        "MySQL",
        "Sequelize ORM",
      ],
      github: "https://github.com/wonjong2/Bens_Diner",
      deployed: "https://bens-diner.herokuapp.com/",
      type: "Group",
    },
  ];

  return (
    <section id="works">
      <h2 className="py-5 statement-text">Some things I've worked on</h2>
      <div>
        <Row className="row">
          {/* {projectInfo.map((data, i) => (
            <Project data={data} key={i}></Project>
          ))} */}

          {projectInfo.map((data, i) => (
            <Col className="project" sm={6}>
              <figure className="projectImage">
                <a href={data.github}>
                  <img src={data.image} alt={"Screenshot of project"} />
                </a>
              </figure>
              <h4 className="mb-4">{data.name}</h4>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
}

export default Work;

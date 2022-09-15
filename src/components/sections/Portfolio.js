import React from "react";
import Project from "./page_components/Project";
import "../../styles/portfolio.css";
import bens_diner from "../../assets/project-screenshots/bens_diner.png";
import mvc_tech_blog from "../../assets/project-screenshots/mvc_tech_blog.png";
import rental_railroad_homepage from "../../assets/project-screenshots/rental_railroad_homepage.png";
import api_refactor from "../../assets/project-screenshots/api_refactor.png";

function Work() {
  const projectInfo = [
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
      deployed: "https://rental-railroad.herokuapp.com/",
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
      name: "API Refactor",
      image: api_refactor,
      description:
        "This solo project was to refactor a fully fuctioning Google Books API search engine built with a RESTful API to be a GraphQL API built with Apollo Server. This app was created using the MERN stack with a React front end, MongoDB database, and Node.js/Express.js server and API.",
      tech: [
        "Node.js",
        "Express.js",
        "React",
        "MongoDB",
        "GraphQL",
        "Apollo Server",
      ],
      github: "https://github.com/struelensc/book-search-api-refactor",
      deployed: "https://book-search-api-refactor.herokuapp.com/",
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
    <section className="p-5" id="works">
      <h2 className="py-3">What I've been working on</h2>
      <div>
        <div className="row">
          {projectInfo.map((data, i) => (
            <Project data={data} i={i}></Project>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Work;

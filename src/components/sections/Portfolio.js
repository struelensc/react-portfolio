import React from "react";
import Project from "./page_components/Project";
import "../../styles/portfolio.css";
import github from "../../assets/contact-icons/github.png";
import bens_diner from "../../assets/project-screenshots/bens_diner.png";
import mvc_tech_blog from "../../assets/project-screenshots/mvc_tech_blog.png";
import orm_backend from "../../assets/project-screenshots/orm_backend.png";
import starparty from "../../assets/project-screenshots/starparty.png";
import team_generator from "../../assets/project-screenshots/team_generator.png";
import pwa_text_editor from "../../assets/project-screenshots/pwa_text_editor.png";
import express_note_taker from "../../assets/project-screenshots/express_note_taker.png";

function Work() {
  const projectInfo = [
    {
      name: "Tech Blog",
      image: mvc_tech_blog,
      github: "https://github.com/struelensc/mvc-tech-blog",
      deployed: "https://mvc-tech-blog-09493.herokuapp.com/",
    },
    {
      name: "StarParty",
      image: starparty,
      github: "https://github.com/millersg47/StarParty",
      deployed: "https://millersg47.github.io/StarParty/",
    },
    {
      name: "ORM Ecommerce Backend",
      image: orm_backend,
      github: "https://github.com/struelensc/orm-ecomm-backend",
    },
    {
      name: "Team Profile Generator",
      image: team_generator,
      github: "https://github.com/struelensc/team-profile-generator",
    },
    {
      name: "PWA Text Editor",
      image: pwa_text_editor,
      github: "https://github.com/struelensc/pwa-text-editor",
      deployed: "https://pwa-text-editor-71222.herokuapp.com/",
    },
    {
      name: "Express Note Taker",
      image: express_note_taker,
      github: "https://github.com/struelensc/express-note-taker",
      deployed: "https://express-note-taker-7913.herokuapp.com/",
    },
  ];

  return (
    <section className="p-5" id="works">
      <h2 className="py-3">What I've been working on</h2>

      <div className="row d-flex flex-row-reverse">
        <div className="col-lg-4 d-flex justify-content-center align-items-center">
          <div className="container px-3">
            <h3 className="d-block">
              <span className="pe-3">Ben's Diner</span>
              <span>
                <a
                  className="github_icon"
                  href="https://github.com/wonjong2/Bens_Diner"
                >
                  <img src={github} className="github_icon" alt="Github icon" />
                </a>
              </span>
            </h3>

            <p className="d-block">
              Created a full stack web page application that allows restaurant
              customers to view a digital menu, and order food without a human
              server interface. Menu items are displayed and added to a shopping
              cart on click, with routes navigating various button events. The
              temporary shopping cart will save data using local storage. The
              permanent order history will available in a MySQL database.
            </p>
          </div>
        </div>

        <figure className="col-lg-8 highlighted-project">
          <a href="https://github.com/wonjong2/Bens_Diner" target="_blank">
            <img
              className="img"
              src={bens_diner}
              alt="Screenshot of Ben's Diner website"
            />
          </a>
        </figure>
      </div>

      <div>
        <h3 className="pt-5 px-5">Other projects</h3>

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

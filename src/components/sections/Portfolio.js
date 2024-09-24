import React from "react";
import "../../styles/portfolio.css";
import bens_diner from "../../assets/project-screenshots/bens_diner.png";
import google_scripts from "../../assets/project-screenshots/google_scripts.png";
import compliment_bot from "../../assets/project-screenshots/compliment_bot.png";
import javascript_drum_set from "../../assets/project-screenshots/javascript_drum_set.png";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Work() {
  const projectInfo = [
    {
      name: "Compliment-Bot",
      image: compliment_bot,
      description:
        "A Discord bot built with discord.js that uses slash commands to compliment users. This bot is designed to run on Heroku and register commands dynamically.",
      tech: ["JavaScript", "discord.js"],
      github: "https://github.com/struelensc/compliment-bot",
      type: "Solo",
    },
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
      name: "JavaScript Drum Set",
      image: javascript_drum_set,
      description:
        "This project is a simple JavaScript Drum Set that allows users to play different drum sounds by pressing specific keys on their keyboard. Each key corresponds to a different sound, and a visual effect is applied when a sound is played.",
      tech: ["JavaScript", "HTML5", "CSS3"],
      github: "https://github.com/struelensc/javascript-drum-set",
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
                <a href={data.github} target="_blank">
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

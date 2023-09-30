import { allProjectsDB, highlightsDB } from "./db.js";

const highlights = document.querySelector("#highlights");
const allProjects = document.querySelector("#all-projects");

highlights.innerHTML = "";

highlightsDB.forEach((project, i) => {
  `<div href="#" class="project" id="highlights">
    <img src=project.thumb alt=project.title />
    <p>
      project.title

      <span class="project-icon">
        project.icons[0] ? (
          <img src="./assets/img/html-icon.svg" alt="" />
        ) : null
        project.icons[1] ? (
          <img src="./assets/img/css-icon.svg" alt="" />
        ) : null
        project.icons[2] ? (
          <img src="./assets/img/javascript-icon.svg" alt="" />
        ) : null
        project.icons[3] ? (
          <img src="./assets/img/react-icon.svg" alt="" />
        ) : null
      </span>
    </p>
  </div>;`;
});

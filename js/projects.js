import { allProjectsDB, highlightsDB } from "./db.js";
import { language } from "./events.js";

const highlights = document.querySelector("#highlights-container");
const allProjects = document.querySelector("#all-projects-container");

setTimeout(() => {
  language;
}, 10);

let highlightsText = "";
let allProjectsText = "";

highlights.innerHTML = "";
allProjects.innerHTML = "";

highlightsDB.forEach((project) => {
  const html = project.icons.html
    ? '<img src="./assets/img/html-icon.svg" alt="html" />'
    : "";
  const css = project.icons.css
    ? '<img src="./assets/img/css-icon.svg" alt="css" />'
    : "";
  const javascript = project.icons.javascript
    ? '<img src="./assets/img/javascript-icon.svg" alt="javascript" />'
    : "";
  const react = project.icons.react
    ? '<img src="./assets/img/react-icon.svg" alt="react" />'
    : "";

  highlightsText =
    highlightsText +
    `<div href="#" class="project" id="highlights">
        <img src="./assets/img/${project.thumb}" alt="${project.title}" />
        <div class="project-lable">
          <p><span class="title-highlights">${project.title}</span>
            <span class="project-icon">
              ${html}
              ${css}
              ${javascript}
              ${react}
            </span>
          </p>
        </div>
    </div>`;
});

allProjectsDB.forEach((project) => {
  const html = project.icons.html
    ? '<img src="./assets/img/html-icon.svg" alt="html" />'
    : "";
  const css = project.icons.css
    ? '<img src="./assets/img/css-icon.svg" alt="css" />'
    : "";
  const javascript = project.icons.javascript
    ? '<img src="./assets/img/javascript-icon.svg" alt="javascript" />'
    : "";
  const react = project.icons.react
    ? '<img src="./assets/img/react-icon.svg" alt="react" />'
    : "";

  allProjectsText =
    allProjectsText +
    `<div href="#" class="project" id="highlights">
      <img src="./assets/img/${project.thumb}" alt="${project.title}" />
      <div class="project-lable">
        <p><span class="title-all">${project.title}</span>
          <span class="project-icon">
            ${html}
            ${css}
            ${javascript}
            ${react}
          </span>
        </p>
      </div>
    </div>`;
});

const titlesHighlights = document.querySelectorAll(".title-highlights");
const titlesAll = document.querySelectorAll(".title-all");

export const titleChange = () => {
  language === "-pt"
    ? (titlesHighlights.forEach((title, i) => {
        title.innerText = highlightsDB[i].title;
      }),
      titlesAll.forEach((title, i) => {
        title.innerText = allProjectsDB[i].title;
      }))
    : titlesHighlights.forEach((title, i) => {
        title.innerText = highlightsDB[i].titleEn;
      });
  titlesAll.forEach((title, i) => {
    title.innerText = allProjectsDB[i].titleEn;
  });
};

highlights.innerHTML = highlightsText;
allProjects.innerHTML = allProjectsText;

// MORE - PROJECTS
const projects = document.querySelectorAll(".project");

const containerProject = document.querySelector(".project-more-container");

const titleProject = document.querySelector(".right h4");
const descriptionProject = document.querySelector(".right p");

projects.forEach((project, i) => {
  project.id = i + 1;
});

const moreProject = () => {
  // containerProject.classList.remove("hide");

  projects.forEach((project, i) => {
    project.addEventListener("click", (e) => {
      containerProject.classList.remove("hide");
      let db;
      let index;
      const view = '<img src="./assets/img/view-icon.svg" alt="" />';
      const github = '<img src="./assets/img/github-icon.svg" alt="" />';

      e.currentTarget.id <= highlightsDB.length
        ? ((index = i), (db = highlightsDB))
        : ((index = i - highlightsDB.length), (db = allProjectsDB));

      document.getElementById("img-cover").src =
        "./assets/img/" + db[index].thumb;
      document.querySelector(
        "#project-more-buttons button:nth-of-type(1) a"
      ).href = db[index].projectURL;

      document.querySelector(
        "#project-more-buttons button:nth-of-type(2) a"
      ).href = db[index].githubURL;

      language === "-pt"
        ? ((document.querySelector(".right h4").innerText = db[index].title),
          (document.querySelector(".right p").innerText =
            db[index].description),
          (document.querySelector(
            "#project-more-buttons button:nth-of-type(1) a"
          ).innerHTML = view + "Visualizar Projeto"),
          (document.querySelector(
            "#project-more-buttons button:nth-of-type(2) a"
          ).innerHTML = github + "Acessar repositório"))
        : ((document.querySelector(".right h4").innerText = db[index].titleEn),
          (document.querySelector(".right p").innerText =
            db[index].descriptionEn),
          (document.querySelector(
            "#project-more-buttons button:nth-of-type(1) a"
          ).innerHTML = view + "View Project"),
          (document.querySelector(
            "#project-more-buttons button:nth-of-type(2) a"
          ).innerHTML = github + "Access repository"));
    });
  });
};
moreProject();

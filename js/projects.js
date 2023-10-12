import { allProjectsDB, highlightsDB } from "../data/db.js";
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

export const titleChange = () => {
  const titlesHighlights = document.querySelectorAll(".title-highlights");
  const titlesAll = document.querySelectorAll(".title-all");

  language === "-pt"
    ? (titlesHighlights.forEach((title, i) => {
        title.innerText = highlightsDB[i].title;
      }),
      titlesAll.forEach((title, i) => {
        title.innerText = allProjectsDB[i].title;
      }))
    : (titlesHighlights.forEach((title, i) => {
        title.innerText = highlightsDB[i].titleEn;
      }),
      titlesAll.forEach((title, i) => {
        title.innerText = allProjectsDB[i].titleEn;
      }));
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
  projects.forEach((project, i) => {
    project.addEventListener("click", (e) => {
      containerProject.classList.remove("hide");
      let db;
      let index;

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
          (document.querySelector(".right p").innerHTML =
            db[index].description),
          (document.querySelector(
            "#project-more-buttons button:nth-of-type(1) a"
          ).innerHTML = "Visualizar Projeto"),
          (document.querySelector(
            "#project-more-buttons button:nth-of-type(2) a"
          ).innerHTML = "Acessar repositório"))
        : ((document.querySelector(".right h4").innerText = db[index].titleEn),
          (document.querySelector(".right p").innerHTML =
            db[index].descriptionEn),
          (document.querySelector(
            "#project-more-buttons button:nth-of-type(1) a"
          ).innerHTML = "View Project"),
          (document.querySelector(
            "#project-more-buttons button:nth-of-type(2) a"
          ).innerHTML = "Access repository"));
    });
  });
};
moreProject();

const moreClick = () => {
  const viewProject = document.querySelector(
    "#project-more-buttons button:nth-of-type(1) a"
  );
  const viewButton = document.querySelector(
    "#project-more-buttons button:nth-of-type(1)"
  );
  const gitProject = document.querySelector(
    "#project-more-buttons button:nth-of-type(2) a"
  );
  const gitButton = document.querySelector(
    "#project-more-buttons button:nth-of-type(2)"
  );
  const imageThumb = document.getElementById("img-cover");

  imageThumb.addEventListener("click", (e) => {
    viewProject.click();
  });
  viewButton.addEventListener("click", (e) => {
    viewProject.click();
  });
  gitButton.addEventListener("click", (e) => {
    gitProject.click();
  });
};
moreClick();

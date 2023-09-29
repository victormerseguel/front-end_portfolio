// INSTANCES --------------------------------------------

// nav buttons
const buttons = document.querySelectorAll("nav li a ");
const dots = document.querySelectorAll(".dot");

// home
const saibaMaisBtn = document.querySelector(".saiba-mais");

// theme buttons
const lightBtn = document.querySelector("#light");
const lightBtnSpan = document.querySelector("#light span");
const darkBtn = document.querySelector("#dark");
const darkBtnSpan = document.querySelector("#dark span");

// language buttons
const ptBtn = document.querySelector("#pt");
const ptBtnSpan = document.querySelector("#pt span");
const enBtn = document.querySelector("#en");
const enBtnSpan = document.querySelector("#en span");

// sections
const sections = document.querySelectorAll(".section");

// projects
const projectMoreContainer = document.querySelector(".project-more-container");
const projectMoreContent = document.querySelector(".project-more-content");
const closeBtn = document.querySelector(".project-more-close");
const video = document.querySelector(".project-more-content video");

const projects = document.querySelectorAll(".project");

// VARIABLES --------------------------------------------
let theme = true;
let language = "-pt";
let current = "";

// prettier-ignore
const states = [
  { name: "home", status: true },
  { name: "projects", status: false },
  { name: "info", status: false },
  { name: "contact", status: false },
];

// NAVIGATION -------------------------------------------

export const navigate = () => {
  buttons.forEach((button, i) => {
    button.addEventListener("click", (e) => handleNav(e));
  });

  saibaMaisBtn.addEventListener("click", () => {
    buttons[2].click();
  });

  lightBtn.addEventListener("click", (e) => handleTheme(e));
  darkBtn.addEventListener("click", (e) => handleTheme(e));

  ptBtn.addEventListener("click", (e) => handleLanguage(e));
  enBtn.addEventListener("click", (e) => handleLanguage(e));

  projects.forEach((project) => {
    project.addEventListener("click", (e) => {
      projectMoreContainer.classList.remove("hide");
      video.play();
    });
  });
};

const handleNav = (e) => {
  const id = e.target.id;

  states.forEach((state, ind) => {
    state.name + "-btn" + language === id
      ? (sections[ind].classList.remove("hide"),
        buttons.forEach((button, i) => {
          button.id === id
            ? (button.classList.add("hide"),
              button.classList.add("current"),
              dots.forEach((dot) => {
                dot.classList.add("hide");
              }),
              dots[parseInt(i / 2)].classList.remove("hide"),
              dots[parseInt(i / 2)].classList.remove("current"))
            : (button.classList.remove("hide"),
              button.classList.remove("current"));
        }))
      : sections[ind].classList.add("hide");
  });
};

// PROJET WINDOW -----------------------------------------
export const closeProjetMore = () => {
  projectMoreContent.addEventListener("click", (e) => {
    e.stopPropagation();
  });

  closeBtn.addEventListener("click", (e) => {
    projectMoreContainer.classList.add("hide");
    video.pause();
    video.currentTime = 0;
  });

  projectMoreContainer.addEventListener("click", (e) => {
    projectMoreContainer.classList.add("hide");
    video.pause();
    video.currentTime = 0;
  });
};

// LANGUAGE ----------------------------------------------
const languageSelection = () => {
  language === "-pt"
    ? (document.querySelectorAll(".pt").forEach((item) => {
        item.classList.remove("hideLanguage");
      }),
      document.querySelectorAll(".en").forEach((item) => {
        item.classList.add("hideLanguage");
      }))
    : (document.querySelectorAll(".pt").forEach((item) => {
        item.classList.add("hideLanguage");
      }),
      document.querySelectorAll(".en").forEach((item) => {
        item.classList.remove("hideLanguage");
      }));
};

languageSelection();
const handleLanguage = (e) => {
  let currentButton = document.querySelector(".current");
  let currentSliced;

  currentButton
    ? (currentSliced = currentButton.id.slice(0, currentButton.id.length - 3))
    : (currentSliced = "home-btn");

  e.target.id === "pt"
    ? ((language = "-pt"),
      (ptBtnSpan.innerText = "◼"),
      (enBtnSpan.innerText = "◻"),
      (current = currentSliced + language))
    : ((language = "-en"),
      (ptBtnSpan.innerText = "◻"),
      (enBtnSpan.innerText = "◼"),
      (current = currentSliced + language));

  buttons.forEach((button) => {
    button.id === current ? button.classList.add("hide") : null;
  });

  languageSelection();
};

// THEME --------------------------------------------------
const handleTheme = (e) => {
  e.target.id === "light"
    ? ((theme = true),
      document.querySelectorAll(".dark").forEach((item) => {
        item.classList.add("light");
        item.classList.remove("dark");
      }),
      (lightBtnSpan.innerText = "◼"),
      (darkBtnSpan.innerText = "◻"))
    : ((theme = false),
      document.querySelectorAll(".light").forEach((item) => {
        item.classList.add("dark");
        item.classList.remove("light");
      }),
      (lightBtnSpan.innerText = "◻"),
      (darkBtnSpan.innerText = "◼"));
};

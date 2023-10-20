import { titleChange } from "./projects.js";
import { handleTheme } from "./theme.js";

// INSTANCES --------------------------------------------

// nav buttons
const buttons = document.querySelectorAll("nav li a ");
const dots = document.querySelectorAll(".dot");

// home
const learnMoreBtn = document.querySelector("#home .learn-more");
const letsTalkBtn = document.querySelector("#info .learn-more");

// theme buttons
const lightBtn = document.querySelector("#light");
const darkBtn = document.querySelector("#dark");

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
// let theme = true;
export let language = "-pt";
export let current = "";

// prettier-ignore
export const states = [
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

  learnMoreBtn.addEventListener("click", () => {
    language === "-pt" ? buttons[4].click() : buttons[5].click();
  });

  letsTalkBtn.addEventListener("click", () => {
    language === "-pt" ? buttons[6].click() : buttons[7].click();
  });

  lightBtn.addEventListener("click", (e) => handleTheme(e));
  darkBtn.addEventListener("click", (e) => handleTheme(e));

  ptBtn.addEventListener("click", (e) => handleLanguage(e));
  enBtn.addEventListener("click", (e) => handleLanguage(e));
};

const handleNav = (e) => {
  const id = e.target.id;

  states.forEach((state, ind) => {
    if (state.name + "-btn" + language === id) {
      state.status = true;
      sections[ind].classList.remove("hide");
      buttons.forEach((button, i) => {
        if (button.id === id) {
          button.classList.add("hide");
          button.classList.add("current");
          dots.forEach((dot) => {
            dot.classList.add("hide");
          });
          dots[parseInt(i / 2)].classList.remove("hide");
          dots[parseInt(i / 2)].classList.remove("current");
        } else {
          button.classList.remove("hide");
          button.classList.remove("current");
        }
      });
    } else {
      state.status = false;
      sections[ind].classList.add("hide");
    }
  });
};

export const updateNav = () => {
  buttons.forEach((button) => {
    button.id.includes(language)
      ? button.classList.remove("hide")
      : button.classList.add("hide");
  });
  dots.forEach((dot) => {
    dot.classList.add("hide");
  });
  states.forEach((state, i) => {
    if (state.status) {
      dots[i].classList.remove("hide");
      buttons.forEach((button) => {
        if (button.id.includes(state.name) && button.id.includes(language)) {
          button.classList.add("hide");
        }
      });
    }
  });
};

// PROJET WINDOW -----------------------------------------
export const closeProjetMore = () => {
  projectMoreContent.addEventListener("click", (e) => {
    e.stopPropagation();
  });

  closeBtn.addEventListener("click", (e) => {
    projectMoreContainer.classList.add("hide");
  });

  projectMoreContainer.addEventListener("click", (e) => {
    projectMoreContainer.classList.add("hide");
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

const resumeUpdateLanguage = () => {
  const resumeBtn1 = document.querySelector(
    ".nav-buttons button:nth-of-type(3) a"
  );
  const resumeBtn2 = document.querySelector(
    ".contact-buttons button:nth-of-type(3) a"
  );

  const resumeFile = language.includes("pt")
    ? "./assets/resume_front-end.pdf"
    : "./assets/resume_front-end__english.pdf";

  const updateResumeLink = (button) => {
    button.href = resumeFile;
  };

  updateResumeLink(resumeBtn1);
  updateResumeLink(resumeBtn2);
};

export const handleLanguage = (e) => {
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
  titleChange();
  resumeUpdateLanguage();
};

// COPY MAIL -----------------------------------------------------------------
const mailPt = document.querySelector(".mail span:nth-of-type(1)");
const mailEn = document.querySelector(".mail span:nth-of-type(2)");
const mail = "merseguel@gmail.com";

const handleCopy = (e) => {
  navigator.clipboard.writeText(mail);
  e.target.innerText =
    e.target.className === "pt"
      ? "E-mail copiado para a área de transferência"
      : "E-mail copied to clipboard";
  e.target.classList.add("copied");
  setTimeout(() => {
    e.target.innerText = e.target.className.includes("pt")
      ? "Clique para copiar"
      : "Click to copy";
    e.target.classList.remove("copied");
  }, 1500);
};

mailPt.addEventListener("click", (e) => handleCopy(e));
mailEn.addEventListener("click", (e) => handleCopy(e));

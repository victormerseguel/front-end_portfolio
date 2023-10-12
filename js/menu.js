import { closeButtonHTML, buttonsHTML, ulHTML } from "../data/innerHtml.js";
import {
  states,
  language,
  current,
  handleLanguage,
  updateNav,
} from "./events.js";

const nav = document.querySelector("nav ul");
const buttons = document.querySelectorAll(".icons");
const menuBtn = document.querySelector("#nav-menu-icon");
const container = document.querySelector(".sandwich-menu");

let screen, closeBtn, links, dots, linkPt, linkEn;

const sections = document.querySelectorAll(".section");

// FUNCTIONS -----------------------------------------------------------
const createMenuMobile = () => {
  container.innerHTML = closeButtonHTML + ulHTML + buttonsHTML;

  closeBtn = document.querySelector(".close-btn");
  links = document.querySelectorAll(".sandwich-menu li a ");
  dots = document.querySelectorAll(".dotSandwich");
  linkPt = document.querySelectorAll(".sandwich-menu li a:nth-of-type(1)");
  linkEn = document.querySelectorAll(".sandwich-menu li a:nth-of-type(2)");
};
createMenuMobile();

const showHamburgerIcon = () => {
  screen = window.innerWidth;

  if (screen < 768) {
    nav.classList.add("hide");
    buttons.forEach((button) => button.classList.add("hide"));
    menuBtn.classList.remove("hide");
  } else {
    nav.classList.remove("hide");
    buttons.forEach((button) => button.classList.remove("hide"));
    menuBtn.classList.add("hide");
  }
};

showHamburgerIcon();

const showMenuContainer = () => {
  container.style.top = 0;

  let currentLink;

  if (language === "-pt") {
    linkEn.forEach((item) => item.classList.add("hide"));
    linkPt.forEach((item) => item.classList.remove("hide"));
    currentLink = linkPt;
  } else {
    linkEn.forEach((item) => item.classList.remove("hide"));
    linkPt.forEach((item) => item.classList.add("hide"));
    currentLink = linkEn;
  }
  dots.forEach((dot) => dot.classList.add("hide"));

  states.forEach((state, i) => {
    if (state.status) {
      currentLink[i].classList.add("hide");
      dots[i].classList.remove("hide");
    }
  });
};

const hideMenuContainer = () => {
  container.style.top = "-100vh";
};

const navigateMobile = (e) => {
  const id = e.target.id;

  states.forEach((state, i) => {
    if (id.includes(state.name)) {
      state.status = true;
      sections[i].classList.remove("hide");
    } else {
      state.status = false;
      sections[i].classList.add("hide");
    }
  });

  hideMenuContainer();
  updateNav();
};

// EVENTS --------------------------------------------------------------

menuBtn.addEventListener("click", showMenuContainer);
closeBtn.addEventListener("click", hideMenuContainer);
window.onresize = showHamburgerIcon;
links.forEach((link) => {
  link.addEventListener("click", (e) => navigateMobile(e));
});

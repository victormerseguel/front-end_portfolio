// nav buttons
const buttons = document.querySelectorAll("nav li a");
const dots = document.querySelectorAll("nav li span");

// theme buttons
const lightBtn = document.querySelector("#light");
const lightBtnSpan = document.querySelector("#light span");
const darkBtn = document.querySelector("#dark");
const darkBtnSpan = document.querySelector("#dark span");

// sections
const sections = document.querySelectorAll(".section");

let theme = true;

const states = [
  {
    name: "home",
    status: true,
  },
  {
    name: "projects",
    status: false,
  },
  {
    name: "info",
    status: false,
  },
  {
    name: "contact",
    status: false,
  },
];

const handleNav = (e) => {
  const id = e.target.id;

  states.forEach((state, ind) => {
    state.name + "-btn" === id
      ? (sections[ind].classList.remove("hide"),
        buttons.forEach((button, i) => {
          button.id === id
            ? (button.classList.add("hide"), dots[i].classList.remove("hide"))
            : (button.classList.remove("hide"), dots[i].classList.add("hide"));
        }))
      : sections[ind].classList.add("hide");
  });
};

const handleTheme = (e) => {
  e.target.id === "light"
    ? ((theme = true),
      (lightBtnSpan.innerText = "◼"),
      (darkBtnSpan.innerText = "◻"))
    : ((theme = false),
      (lightBtnSpan.innerText = "◻"),
      (darkBtnSpan.innerText = "◼"));
};

export const navigate = () => {
  buttons.forEach((button, i) => {
    button.addEventListener("click", (e) => handleNav(e));
  });

  lightBtn.addEventListener("click", (e) => handleTheme(e));
  darkBtn.addEventListener("click", (e) => handleTheme(e));
};

export const clickInitial = () => buttons[0].click();

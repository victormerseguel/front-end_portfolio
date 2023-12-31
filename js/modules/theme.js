import { sketchColors } from "./sketchAgents.js";

// theme buttons
const lightBtnSpan = document.querySelector("#light span");
const darkBtnSpan = document.querySelector("#dark span");

let theme = true;

export const handleTheme = (e) => {
  e.target.id === "light"
    ? ((theme = true),
      document.querySelectorAll(".dark").forEach((item) => {
        item.classList.add("light");
        item.classList.remove("dark");
      }),
      (lightBtnSpan.innerText = "◼"),
      (darkBtnSpan.innerText = "◻"),
      lightTheme())
    : ((theme = false),
      document.querySelectorAll(".light").forEach((item) => {
        item.classList.add("dark");
        item.classList.remove("light");
      }),
      (lightBtnSpan.innerText = "◻"),
      (darkBtnSpan.innerText = "◼"),
      darkTheme());

  sketchColors();
};

const root = document.querySelector(":root");

const lightTheme = () => {
  root.style.setProperty("--background-color", "#f1f1f1");
  root.style.setProperty("--color", "#b3b3b3");
  root.style.setProperty("--font-color", "#3d3d3d");
  root.style.setProperty("--box-background", "#f3f3f3c1");
  root.style.setProperty("--box-shadow", "0px 0px 25px 5px #dbdbdb");
  root.style.setProperty("--link", "#3084c0");
};

const darkTheme = () => {
  root.style.setProperty("--background-color", "#1b1b1b");
  root.style.setProperty("--color", "#494949");
  root.style.setProperty("--font-color", "#c8c8c8");
  root.style.setProperty("--box-background", "#454545c1");
  root.style.setProperty("--box-shadow", "0px 0px 15px 5px #121212");
  root.style.setProperty("--link", "#3084c0");
};

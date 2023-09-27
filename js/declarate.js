export const declarations = () => {
  // nav buttons
  const buttons = document.querySelectorAll("nav li a");
  const dots = document.querySelectorAll("nav li span");

  // home
  const saibaMaisBtn = document.querySelector(".saiba-mais");

  // theme buttons
  const lightBtn = document.querySelector("#light");
  const lightBtnSpan = document.querySelector("#light span");
  const darkBtn = document.querySelector("#dark");
  const darkBtnSpan = document.querySelector("#dark span");

  // sections
  const sections = document.querySelectorAll(".section");

  // projects
  const projectMoreContainer = document.querySelector(
    ".project-more-container"
  );
  const projectMoreContent = document.querySelector(".project-more-content");
  const closeBtn = document.querySelector(".project-more-close");
};

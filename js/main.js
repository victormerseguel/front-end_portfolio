import { sketch } from "./sketch.js";
import { navigate } from "./events.js";

const title = document.querySelector(".title-mask");
const mask = document.querySelector(".mask");

// functions

const animate = () => {
  sketch();
  requestAnimationFrame(animate);
};

animate();

// Mask start
setTimeout(() => {
  title.style.opacity = "0";
  setTimeout(() => {
    mask.style.opacity = "0";
  }, 1000);
}, 1500);
setTimeout(() => {
  mask.style.display = "none";
}, 3500);

navigate();

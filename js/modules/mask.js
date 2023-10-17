const title = document.querySelector(".title-mask");
const mask = document.querySelector(".mask");

export const initMask = () => {
  setTimeout(() => {
    title.style.opacity = "0";
    setTimeout(() => {
      mask.style.opacity = "0";
    }, 1000);
  }, 2000);

  setTimeout(() => {
    mask.style.display = "none";
  }, 3500);
};

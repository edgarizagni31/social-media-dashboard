import './style.css';

document.addEventListener("DOMContentLoaded", () => {
  let btn = document.getElementById("active-dark");
  btn.checked = false;
  const dataDark = document.querySelectorAll("[data-dark]");
  btn.addEventListener("click", () => {
    for (let i = 0; i < dataDark.length; i++) {
      if (
        dataDark[i].classList[0] === "body" ||
        dataDark[i].classList[0] === "html"
      ) {
        dataDark[i].classList.toggle("bg-dark");
      }
      if (
        dataDark[i].classList[0] === "header__title" ||
        dataDark[i].classList[0] === "description__title" ||
        dataDark[i].classList[0] === "data__type"
      ) {
        dataDark[i].classList.toggle("title-dark");
      }
      if (
        dataDark[i].classList[0] === "dashboard__social-media" ||
        dataDark[i].classList[0] === "description__data"
      ) {
        dataDark[i].classList.toggle("bg-card-dark");
      }
    }
  });
});

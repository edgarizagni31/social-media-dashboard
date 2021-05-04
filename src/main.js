require("./style.css");

document.addEventListener("DOMContentLoaded", () => {
  let btnActiveDark = document.getElementById("active-dark");

  btnActiveDark.checked = false;

  btnActiveDark.addEventListener("click", handleActiveDark);
});

const handleActiveDark = () => {
  const BG_DARK_ATTRIBUTES = document.querySelectorAll('[bg-dark]');
  const TITLE_DARK_ATTRIBUTES = document.querySelectorAll('[title-dark]');
  const BG_CARD_DARK_ATTRIBUTES = document.querySelectorAll('[bg-card-dark]');

  BG_DARK_ATTRIBUTES.forEach( ( value ) => {
    value.classList.toggle('bg-dark');
  })

  TITLE_DARK_ATTRIBUTES.forEach( ( value ) => {
    value.classList.toggle('title-dark')
  })

  BG_CARD_DARK_ATTRIBUTES.forEach( ( value ) => {
    value.classList.toggle('bg-card-dark')
  })
};

const hamburgerBtn = document.querySelector(".hamburger-button");
const bars = document.querySelector(".hamburger-button .fa-bars");
const cross = document.querySelector(".hamburger-button .fa-xmark");
const menu = document.querySelector(".header__menu .nav");

hamburgerBtn.addEventListener("click", menuToggler);
function menuToggler() {
  if (!menu.classList.contains("display-block")) {
    cross.classList.add("display-block");
    bars.classList.add("display-none");
    menu.classList.add("display-block");
  } else {
    cross.classList.remove("display-block");
    bars.classList.remove("display-none");
    menu.classList.remove("display-block");
  }
}

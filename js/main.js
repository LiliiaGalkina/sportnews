const burger = document.querySelector("#burger");
const menu = document.querySelector("#menu");

burger.addEventListener("click", toggleMenu);

function toggleMenu() {
  burger.classList.toggle("active");
  menu.classList.toggle("active");
}

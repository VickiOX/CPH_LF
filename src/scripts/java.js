const burgerMenu = document.querySelector(".burgermenu");
const navMenu = document.querySelector(".burger_nav");
const marginActive = document.querySelector("main");

burgerMenu.addEventListener("click", () => {
  burgerMenu.classList.toggle("active");
  navMenu.classList.toggle("active");
  marginActive.classList.toggle("active");
});

document.querySelector(".nav_link").addEventListener("click", remove);

function remove() {
  burgerMenu.classList.remove("active");
  navMenu.classList.remove("active");
  marginActive.classList.remove("active");
}

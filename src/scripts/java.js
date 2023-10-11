const burgerMenu = document.querySelector(".burgermenu");
const navMenu = document.querySelector(".burger_nav");

burgerMenu.addEventListener("click", () => {
  burgerMenu.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelector(".nav_link").addEventListener("click", remove);

function remove() {
  burgerMenu.classList.remove("active");
  navMenu.classList.remove("active");
}

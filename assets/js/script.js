let openMenu = document.querySelector(".open-menu");
let closeMenu = document.querySelector(".close-menu button");
let closeMenuBack = document.querySelector(".menu .backdrop");

openMenu.addEventListener("click", () => {
  document.querySelector("header .menu").classList.add("open");
});

closeMenu.addEventListener("click", () => {
  document.querySelector("header .menu").classList.remove("open");
});

closeMenuBack.addEventListener("click", () => {
  document.querySelector("header .menu").classList.remove("open");
});

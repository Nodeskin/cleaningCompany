const menu = document.querySelector(".menu-icon");
const close = document.querySelector(".close-icon");
const menuNav = document.querySelector(".one");
const menuDropDown = document.querySelector(".menu-right-nav-bar")

menu.addEventListener("click", () => {
  menu.style.display = "none";
  close.style.display = "flex";
  menuDropDown.style.display = "flex";
});

close.addEventListener("click", () => {
  menu.style.display = "flex";
  close.style.display = "none";
  menuDropDown.style.display = "none";
});

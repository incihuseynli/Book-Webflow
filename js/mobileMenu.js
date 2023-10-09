const mobileMenu = document.querySelector(".sm-header .navbar");
function openMenu() {
  mobileMenu.style.transform = "translateX(0%)";
}
function closeMenu() {
  mobileMenu.style.transform = "translateX(-200%)";
}

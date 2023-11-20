const mobileMenu = document.querySelector(".sm-header .navbar");
function openMenu() {
  mobileMenu.style.transform = "translateX(0%)";
}
function closeMenu() {
  mobileMenu.style.transform = "translateX(-200%)";
}

// ============================= Page Up Function =============================================================

const toTopBtn = document.getElementById("toTop");

window.onscroll = function () {
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    toTop.style.display = "block";
  } else {
    toTop.style.display = "none";
  }
};

function pageUp() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

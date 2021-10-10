console.log("helloooooo");

const navToggleBtn = document.querySelector(".nav__toggle");
const mobileMenu = document.getElementById("mobile-menu");
const closeIcon = document.querySelector(".nav__close");

// OPEN HAMBURGER MENU
navToggleBtn.addEventListener("click", function () {
  console.log("clicked");
  mobileMenu.classList.toggle("open");
  navToggleBtn.classList.toggle("close");
  closeIcon.classList.toggle("open");
});

// CLOSE MOBILE MENU
closeIcon.addEventListener("click", function () {
  console.log("bite me");
  mobileMenu.classList.toggle("open");
  closeIcon.classList.toggle("open");
  navToggleBtn.classList.toggle("close");
});

// OPEN SUBMENUS
var navLinks = document.querySelectorAll(".nav__left");
navLinks.forEach(function (link) {
  const toggleDropDown = () => {
    let nextElement = link.nextElementSibling;
    let status =
      window.getComputedStyle(nextElement).display || nextElement.style.display;
    navLinks.forEach((link) => {
      link.classList.remove("open");
      link.nextElementSibling.classList.remove("open");
    });
    status == "none"
      ? nextElement.classList.add("open") && link.classList.add("open")
      : nextElement.classList.remove("open");
  };
  link.addEventListener("click", toggleDropDown);
});

const navToggleBtn = document.querySelector(".nav__toggle");
const mobileMenu = document.getElementById("mobile-menu");
const closeIcon = document.querySelector(".nav__close");
const body = document.querySelector("body");

// OPEN HAMBURGER MENU
navToggleBtn.addEventListener("click", function () {
  body.classList.add("noscroll");
  mobileMenu.classList.toggle("open");
  navToggleBtn.classList.toggle("close");
  closeIcon.classList.toggle("open");
});

// CLOSE MOBILE MENU
closeIcon.addEventListener("click", function () {
  body.classList.remove("noscroll");
  mobileMenu.classList.toggle("open");
  closeIcon.classList.toggle("open");
  navToggleBtn.classList.toggle("close");
});

// OPEN SUBMENUS
function toggleDropdown(dropdown) {
  if (dropdown.classList.contains("active")) {
    dropdown.classList.remove("active");
    mobileMenu.style.boxShadow = "none";
  } else {
    let activeDropdowns = document.querySelectorAll(".nav__left.active");
    for (let activeDropdown of activeDropdowns) {
      activeDropdown.classList.remove("active");
    }
    dropdown.classList.add("active");
    window.screen.width <= 976
      ? (mobileMenu.style.boxShadow =
          "-9px 36px 20px var(--dropdown-background)")
      : (mobileMenu.style.boxShadow = "none");
  }
}

let dropdowns = document.querySelectorAll(".nav__menu");
for (let dropdown of dropdowns) {
  // Toggle when dropdown toggle clicked:
  let toggle = dropdown.querySelector(".nav__link");
  toggle.addEventListener("click", function () {
    toggleDropdown(dropdown);
  });

  // Deactivate when focus leaves dropdown:
  dropdown.addEventListener(
    "blur",
    function (event) {
      if (!this.contains(event.relatedTarget)) {
        this.classList.remove("active");
      }
    },
    true
  );
}

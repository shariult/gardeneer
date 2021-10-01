//==========================================
// Imports
//==========================================

//==========================================
// Variables
//==========================================
const navbarLinks = document.querySelectorAll(".navbar__link"),
  navbarCheckbox = document.querySelector(".navbar__checkbox");

//==========================================
// Code
//==========================================
Array.from(navbarLinks).forEach((navbarLink) => {
  navbarLink.addEventListener("click", () => {
    navbarCheckbox.checked
      ? (navbarCheckbox.checked = false)
      : (navbarCheckbox.checked = true);
  });
});

//==========================================
// Exports
//==========================================

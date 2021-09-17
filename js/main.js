//==========================================
// Imports
//==========================================

//==========================================
// Variables
//==========================================
const navigationLinks = document.querySelectorAll(".navigation__link"),
  navigationCheckbox = document.querySelector(".navigation__checkbox");

//==========================================
// Code
//==========================================
Array.from(navigationLinks).forEach((navigationLink) => {
  navigationLink.addEventListener("click", () => {
    navigationCheckbox.checked
      ? (navigationCheckbox.checked = false)
      : (navigationCheckbox.checked = true);
  });
});

//==========================================
// Exports
//==========================================

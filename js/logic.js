const darkModeToggle = document.getElementById("darkModeToggle");
const body = document.body;

// Check if dark mode preference is stored in local storage
const isDarkMode = localStorage.getItem("darkMode") === "true";

// Apply initial mode
if (isDarkMode) {
  enableDarkMode();
} else {
  disableDarkMode();
}

// Function to enable dark mode
function enableDarkMode() {
  body.classList.add("dark");
  localStorage.setItem("darkMode", "true");
}

// Function to disable dark mode
function disableDarkMode() {
  body.classList.remove("dark");
  localStorage.setItem("darkMode", "false");
}

// Event listener for dark mode toggle
darkModeToggle.addEventListener("change", () => {
  if (darkModeToggle.checked) {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
});
function showLanguages() {
  $(".dropdown-language").toggleClass("show");
}

window.onclick = function (event) {
  if (!event.target.matches(".lang-drpdwn-btn")) {
    var dropdowns = $(".dropdown-language");
    for (let i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

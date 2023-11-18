document.addEventListener("DOMContentLoaded", function () {
  var themeToggleButton = document.getElementById("themeToggle");
  var themeIcon = document.getElementById("theme-icon");
  var body = document.body;

  themeToggleButton.addEventListener("click", function (e) {
    e.preventDefault();
    body.classList.toggle("light-theme");
    if (body.classList.contains("light-theme")) {
      themeIcon.className = "bx bx-sun"; // Changes the icon to a sun
    } else {
      themeIcon.className = "bx bx-moon"; // Changes the icon to a moon
    }
  });
});

// Hamburger menu toggle
const menuButton = document.getElementById("menu");
const nav = document.querySelector(".navigation");

menuButton.addEventListener("click", () => {
  nav.classList.toggle("open");
  menuButton.textContent = nav.classList.contains("open") ? "✖" : "☰";
});

// Footer dynamic year
document.getElementById("currentyear").textContent = new Date().getFullYear();

// Last modified
document.getElementById("lastModified").textContent = 
  "Last Modified: " + document.lastModified;

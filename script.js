// Cambiar fondo del header al hacer scroll
const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// Menú responsive
const menuToggle = document.getElementById("menuToggle");
const navList = document.querySelector(".nav-list");

menuToggle.addEventListener("click", () => {
  navList.classList.toggle("active");
});

// Botón CTA con efecto
const ctaButton = document.getElementById("ctaButton");

ctaButton.addEventListener("click", () => {
  alert("¡Bienvenido al mundo del desarrollo web!");
});
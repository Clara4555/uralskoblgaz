
  document.querySelectorAll(".nav-item").forEach(link => {
    link.addEventListener("click", function() {
        document.querySelectorAll(".nav-item").forEach(nav => nav.classList.remove("active"));
        this.classList.add("active");
    });
});
document.addEventListener("DOMContentLoaded", function () {
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");a

menuToggle.addEventListener("click", function () {
    navLinks.classList.toggle("active");
});

document.querySelectorAll(".nav-item").forEach(link => {
    link.addEventListener("click", function () {
        document.querySelectorAll(".nav-item").forEach(nav => nav.classList.remove("active"));
        this.classList.add("active");
        navLinks.classList.remove("active"); 
    });
});
});

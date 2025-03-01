document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".nav-link.nl1 a");

    navLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            // Prevent default behavior only if the link is "#"
            if (this.getAttribute("href") === "#") {
                event.preventDefault();
            }

            // Remove 'active' from all links
            navLinks.forEach(nav => nav.classList.remove("active"));

            // Add 'active' to clicked link
            this.classList.add("active");

            // Save to localStorage
            localStorage.setItem("activeNavLink", this.id);
        });
    });
});

var ham = document.querySelector(".hamburger")
var hamMenu = document.querySelector(".nl1")

ham.addEventListener("click", () => {
    ham.classList.toggle("active")
    hamMenu.classList.toggle("active")
})
let currentIndex = 0;
const slides = document.querySelectorAll(".slide");
const counter = document.getElementById("counter");

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle("active", i === index);
    });

    // Update slide counter
    counter.textContent = index + 1;
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
}

// Auto-slide every 5 seconds
setInterval(nextSlide, 5000);
document.addEventListener("DOMContentLoaded", function () {
    const tabs = document.querySelectorAll(".tab");
    const contentSections = document.querySelectorAll(".content");

    // Initially hide all sections except the first one
    contentSections.forEach((section, index) => {
        if (index !== 0) {
            section.style.display = "none";
        }
    });

    tabs.forEach(tab => {
        tab.addEventListener("click", function () {
            // Remove active class from all tabs
            tabs.forEach(t => t.classList.remove("active"));
            this.classList.add("active");

            // Hide all content sections
            contentSections.forEach(section => {
                section.style.display = "none";
            });

            // Show the selected section
            const target = this.getAttribute("data-target");
            document.getElementById(target).style.display = "flex";
        });
    });
});

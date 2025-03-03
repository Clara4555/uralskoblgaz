document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    // Selecting each navigation item individually
    const home = document.querySelector(".itemi");
    const about = document.querySelector(".itemii");
    const services = document.querySelector(".itemiii");
    const inventory = document.querySelector(".itemiv");
    const sustainability = document.querySelector(".itemv");
    const contact = document.querySelector(".itemvi");

    // Function to reset active state
    function resetActive() {
        home.classList.remove("active");
        about.classList.remove("active");
        services.classList.remove("active");
        inventory.classList.remove("active");
        sustainability.classList.remove("active");
        contact.classList.remove("active");
    }

    // Function to set active state
    function setActive(element) {
        resetActive(); // Remove active from all
        element.classList.add("active"); // Set active to clicked item

        // Close mobile menu on selection
        if (navLinks.classList.contains("active")) {
            navLinks.classList.remove("active");
        }
    }

    // Add event listeners to each nav item
    home.addEventListener("click", function () { setActive(home); });
    about.addEventListener("click", function () { setActive(about); });
    services.addEventListener("click", function () { setActive(services); });
    inventory.addEventListener("click", function () { setActive(inventory); });
    sustainability.addEventListener("click", function () { setActive(sustainability); });
    contact.addEventListener("click", function () { setActive(contact); });

    // Mobile menu toggle
    if (menuToggle && navLinks) {
        menuToggle.addEventListener("click", function () {
            navLinks.classList.toggle("active");
        });
    }
});

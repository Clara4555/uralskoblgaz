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

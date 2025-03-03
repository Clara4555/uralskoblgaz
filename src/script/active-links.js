document.addEventListener("DOMContentLoaded", function () {
    const tabs = document.querySelectorAll(".tab");

    const contentSections = {
        contenti: document.querySelectorAll(".contenti"),
        contentii: document.querySelectorAll(".contentii"),
        contentiii: document.querySelectorAll(".contentiii")
    };

    // Hide all sections initially
    Object.values(contentSections).forEach(sections => {
        sections.forEach(section => section.style.display = "none");
    });

    // Show only the first section by default
    if (contentSections.contenti.length > 0) {
        contentSections.contenti[0].style.display = "flex";
    }

    tabs.forEach(tab => {
        tab.addEventListener("click", function () {
            // Remove active class from all tabs
            tabs.forEach(t => t.classList.remove("active"));
            this.classList.add("active");

            // Get target section
            const targetId = this.getAttribute("data-target");

            // Hide all sections
            Object.values(contentSections).forEach(sections => {
                sections.forEach(section => section.style.display = "none");
            });

            // Show the selected section
            document.getElementById(targetId).style.display = "flex";
        });
    });
});

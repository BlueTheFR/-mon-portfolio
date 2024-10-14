document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".collapsible-section");

    sections.forEach(section => {
        const header = section.querySelector(".collapsible-header");

        header.addEventListener("click", function () {
            const content = section.querySelector(".collapsible-content");
            if (content.style.display === "none" || content.style.display === "") {
                content.style.display = "block";
                content.style.maxHeight = content.scrollHeight + "px"; // Coulisser l'ouverture
            } else {
                content.style.display = "none";
                content.style.maxHeight = "0"; // Coulisser la fermeture
            }
        });
    });
});

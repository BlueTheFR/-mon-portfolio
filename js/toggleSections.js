document.addEventListener("DOMContentLoaded", function () {
    const headers = document.querySelectorAll(".collapsible-header");

    headers.forEach(header => {
        header.addEventListener("click", function () {
            const content = this.nextElementSibling;
            if (content.style.display === "none" || content.style.display === "") {
                content.style.display = "block";
                content.style.maxHeight = content.scrollHeight + "px"; // Effet coulissant
            } else {
                content.style.display = "none";
                content.style.maxHeight = "0"; // Effet coulissant de fermeture
            }
        });
    });
});

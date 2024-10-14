document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");

    sections.forEach(section => {
        const link = document.querySelector(`[href="#${section.id}"]`);

        if (link) {
            link.addEventListener("click", function (e) {
                e.preventDefault();
                if (section.style.display === "none") {
                    section.style.display = "block";
                } else {
                    section.style.display = "none";
                }
            });
        }
    });
});

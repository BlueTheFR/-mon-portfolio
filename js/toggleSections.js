document.addEventListener("DOMContentLoaded", function () {
    // Gestion des sections principales
    const mainHeaders = document.querySelectorAll('.main-collapsible');
    const subHeaders = document.querySelectorAll('.sub-collapsible');

    // Fonction pour basculer l'affichage des sections
    function toggleVisibility(header, content) {
        if (content.style.display === "block") {
            content.style.display = "none";  // Cache le contenu
        } else {
            content.style.display = "block";  // Affiche le contenu
        }
    }

    // Application pour les sections principales
    mainHeaders.forEach(header => {
        header.addEventListener('click', function () {
            const content = this.nextElementSibling;
            toggleVisibility(this, content);
        });
    });

    // Application pour les sous-sections
    subHeaders.forEach(header => {
        header.addEventListener('click', function () {
            const content = this.nextElementSibling;
            toggleVisibility(this, content);
        });
    });
});

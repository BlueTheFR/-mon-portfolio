<script>
    document.addEventListener("DOMContentLoaded", function() {
    const subHeaders = document.querySelectorAll('.sub-collapsible');

    subHeaders.forEach(header => {
        header.addEventListener('click', function () {
            const content = this.nextElementSibling;

            // Ferme toutes les autres sections avant d'ouvrir celle-ci
            document.querySelectorAll('.sub-collapsible-content').forEach(item => {
                if (item !== content) {
                    item.classList.remove('active');
                    item.style.display = "none"; // Cache le contenu
                }
            });

            // Toggle l'affichage de la section actuelle
            if (content.classList.contains('active')) {
                content.classList.remove('active');
                content.style.display = "none"; // Cache le contenu
            } else {
                content.classList.add('active');
                content.style.display = "block"; // Affiche le contenu
            }
        });
    });
});
</script>

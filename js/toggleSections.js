<script>
    document.addEventListener("DOMContentLoaded", function() {
    const headers = document.querySelectorAll('.collapsible');
    
    headers.forEach(header => {
        header.addEventListener('click', function () {
            const content = this.nextElementSibling; // La div suivante
            if (content) {
                // Vérifie si le contenu est caché ou non
                if (content.style.display === "none" || content.style.display === "") {
                    content.style.display = "block"; // Affiche le contenu
                } else {
                    content.style.display = "none"; // Cache le contenu
                }
            } else {
                console.error("Le contenu correspondant n'a pas été trouvé.");
            }
        });
    });
});
</script>

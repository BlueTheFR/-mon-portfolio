<script>
    document.addEventListener("DOMContentLoaded", function() {
    const headers = document.querySelectorAll('.collapsible-header');
    
    headers.forEach(header => {
        header.addEventListener('click', function () {
            const content = this.nextElementSibling; // La div suivante
            if (content) {
                // V�rifie si le contenu est cach� ou non
                if (content.style.maxHeight) {
                    content.style.maxHeight = null; // Cache le contenu
                } else {
                    content.style.maxHeight = content.scrollHeight + "px"; // Affiche le contenu
                }
            }
        });
    });
});
</script>

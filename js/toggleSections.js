document.addEventListener("DOMContentLoaded", function() {
    // Gestion des sections principales
    const mainHeaders = document.querySelectorAll('.main-collapsible');
    
    mainHeaders.forEach(header => {
        header.addEventListener('click', function() {
            const content = this.nextElementSibling;
            if (content) {
                if (content.style.maxHeight) {
                    content.style.maxHeight = null;
                } else {
                    content.style.maxHeight = content.scrollHeight + "px";
                }
            }
        });
    });

    // Gestion des sous-sections
    const subHeaders = document.querySelectorAll('.sub-collapsible');
    
    subHeaders.forEach(header => {
        header.addEventListener('click', function() {
            const content = this.nextElementSibling;
            if (content) {
                if (content.style.maxHeight) {
                    content.style.maxHeight = null;
                } else {
                    content.style.max
                }
// Função para abrir o modal e mostrar a imagem clicada como principal
function openGalleryModal(imageSrc) {
    let galleryModal = new bootstrap.Modal(document.getElementById('galleryModal'));
    document.getElementById('mainImage').src = imageSrc; // Definir a imagem principal
    galleryModal.show(); // Abrir o modal
}


// Inicializa o Masonry quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', function() {
    const grid = document.querySelector('.gallery-grid');
    const msnry = new Masonry(grid, {
        // Opções do Masonry
        itemSelector: '.col-sm-6',
        columnWidth: '.col-sm-6',
        percentPosition: true
    });
});
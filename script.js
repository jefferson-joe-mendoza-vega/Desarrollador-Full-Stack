document.addEventListener("DOMContentLoaded", () => {
    // Variables para la visibilidad de las secciones
    const sections = document.querySelectorAll('.section');

    // Función para verificar si las secciones están visibles
    function checkSectionVisibility() {
        sections.forEach(section => {
            if (section.getBoundingClientRect().top < window.innerHeight - 100) {
                section.classList.add('show');
            }
        });
    }

    // Verificar visibilidad al cargar la página y al hacer scroll
    window.addEventListener('load', checkSectionVisibility);
    window.addEventListener('scroll', checkSectionVisibility);

    // Configuración del carrusel
    const carousel = document.querySelector('.carousel');
    const items = document.querySelectorAll('.carousel-item');
    const totalItems = items.length;
    let index = 0;

    // Función para mover el carrusel
    function moveCarousel(direction) {
        index = (index + direction + totalItems) % totalItems;
        carousel.style.transform = `translateX(-${index * 100}%)`;
    }

    // Mover el carrusel automáticamente cada 4 segundos
    setInterval(() => moveCarousel(1), 4000); 

    // Exponer la función para controlar el carrusel manualmente
    window.moveCarousel = moveCarousel;
});

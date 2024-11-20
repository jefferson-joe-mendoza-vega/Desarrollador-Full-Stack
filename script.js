document.addEventListener("DOMContentLoaded", () => {
    // Selección de elementos
    const sections = document.querySelectorAll('.section');
    const carousel = document.querySelector('.carousel');
    const items = document.querySelectorAll('.carousel-item');
    const totalItems = items.length;

    let index = 0; // Índice del carrusel

    // Función para verificar la visibilidad de las secciones
    const checkSectionVisibility = () => {
        sections.forEach(section => {
            const { top } = section.getBoundingClientRect();
            if (top < window.innerHeight - 100) {
                section.classList.add('show');
            }
        });
    };

    // Eventos para verificar visibilidad
    window.addEventListener('load', checkSectionVisibility);
    window.addEventListener('scroll', checkSectionVisibility);

    // Función para mover el carrusel
    const moveCarousel = (direction) => {
        index = (index + direction + totalItems) % totalItems; // Índice cíclico
        carousel.style.transform = `translateX(-${index * 100}%)`;
    };

    // Movimiento automático del carrusel cada 4 segundos
    const autoSlide = setInterval(() => moveCarousel(1), 4000);

    // Exponer función manualmente en el ámbito global para los botones
    window.moveCarousel = (direction) => {
        clearInterval(autoSlide); // Detener el movimiento automático al interactuar
        moveCarousel(direction);
    };
});

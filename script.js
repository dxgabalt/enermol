document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.querySelector('.menu-icon');
    const mobileMenu = document.querySelector('.mobile-menu');

    menuIcon.addEventListener('click', function() {
        mobileMenu.classList.toggle('active');
        menuIcon.classList.toggle('active');
    });

    // Añade este código para cerrar el menú al hacer clic fuera de él
    document.addEventListener('click', function(event) {
        const isClickInsideMenu = mobileMenu.contains(event.target);
        const isClickOnIcon = menuIcon.contains(event.target);

        if (!isClickInsideMenu && !isClickOnIcon) {
            mobileMenu.classList.remove('active');
            menuIcon.classList.remove('active');
        }
    });

    // Ajusta el evento para evitar conflictos con el menú desplegable
    menuIcon.addEventListener('click', function(event) {
        event.stopPropagation();
    });

    // Ajusta el evento para cerrar el menú al hacer clic en los enlaces del menú
    const menuLinks = document.querySelectorAll('.menu a');
    menuLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            mobileMenu.classList.remove('active');
            menuIcon.classList.remove('active');
        });
    });
});

// Detecta cambios en el tamaño de la pantalla para cerrar el menú automáticamente
window.addEventListener('resize', function() {
    if (window.innerWidth > 768) {
        mobileMenu.classList.remove('active');
        menuIcon.classList.remove('active');
    }
});

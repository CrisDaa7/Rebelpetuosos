// Esperar a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", function() {
    // Obtener todos los elementos con la clase 'post-container'
    var postContainers = document.querySelectorAll('.post-container');

    // Agregar un controlador de eventos 'click' a cada contenedor
    postContainers.forEach(function(container) {
        container.addEventListener('click', function() {
            // Obtener la URL de la página a la que se redirigirá
            var url = container.getAttribute('data-url');
            // Redirigir a la URL
            window.location.href = url;
        });
    });
});

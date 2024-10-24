function mostrarHistoria(capitulo) {
    const capitulos = document.querySelectorAll('.capitulo');
    capitulos.forEach(function(c) {
        c.style.display = 'none';
    });
    document.getElementById(capitulo).style.display = 'block';
}

// Mostrar por defecto el primer capítulo
document.addEventListener('DOMContentLoaded', function() {
    mostrarHistoria('capitulo1');
});

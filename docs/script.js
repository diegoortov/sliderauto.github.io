const imagenElemento = document.getElementById('carrusel-imagen');
const imagenes = [
    'imagen1.png',
    'imagen2.png',
    'imagen3.png'
];

let indiceActual = 0; /* variable inicializada en 0 */
function cambiarImagen() { /* función */
    imagenElemento.style.opacity = 0;
    setTimeout(() => {
        indiceActual = (indiceActual + 1) % imagenes.length;  // ciclo
        imagenElemento.src = imagenes[indiceActual];
        imagenElemento.style.opacity = 1;
    }, 500);
}

setInterval(cambiarImagen, 3000); // milisegundos

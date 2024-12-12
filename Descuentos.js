// Descuentos.js
import { productos } from '../productos.js';  // Asegúrate de que la ruta sea correcta

// Productos con descuento
const productosConDescuento = productos.filter(p => p.precioDescuento !== null);
let paginaActual = 0;

// Mostrar productos
function mostrarProductosConDescuento() {
    const descuentosGrid = document.querySelector('.descuentos-grid');
    descuentosGrid.innerHTML = ''; // Limpia el contenido
    const inicio = paginaActual * 5;
    const productosPagina = productosConDescuento.slice(inicio, inicio + 5);

    productosPagina.forEach(producto => {
        const card = document.createElement('div');
        card.classList.add('descuento-card');
        card.innerHTML = `
            <div class="product-card" onclick="location.href='pdp.html?id=${producto.id}'">
                <img src="${producto.imagen}" alt="${producto.nombre}">
                <h3>${producto.nombre}</h3>
                <p class="price">
                    ${producto.precioDescuento ? `<span class="old-price">${producto.precioDescuento}</span>` : ''}
                    ${producto.descuento ? `<span class="discount">${producto.descuento}</span>` : ''}
                </p>
                <p class="final-price">${producto.precio}</p>
            </div>
        `;
        descuentosGrid.appendChild(card);
    });
}

// Cambiar página
function cambiarPaginaDescuentos(direccion) {
    const totalPaginas = Math.ceil(productosConDescuento.length / 5);
    paginaActual = (paginaActual + direccion + totalPaginas) % totalPaginas;
    mostrarProductosConDescuento();
}

// Inicializar
mostrarProductosConDescuento();
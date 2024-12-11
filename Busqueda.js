// Importar los datos de productos desde productos.js
import { productos } from '../productos.js';

// Referencia al contenedor vacío
const container = document.querySelector('.product-grid');

// Función para renderizar los productos
function renderizarProductos(productosFiltrados) {
    // Limpiar el contenedor antes de agregar los nuevos productos
    container.innerHTML = '';

    // Crear las tarjetas HTML para cada producto y agregarlas al contenedor
    productosFiltrados.forEach(producto => {
        const cardHTML = `
            <div class="product-card">
                <img src="${producto.imagen}" alt="${producto.nombre}">
                <h3>${producto.nombre}</h3>
                <p class="price">
                    ${producto.precioDescuento ? `<span class="old-price">${producto.precioDescuento}</span>` : ''}
                    ${producto.descuento ? `<span class="discount">${producto.descuento}</span>` : ''}
                </p>
                <p class="final-price">${producto.precio}</p>
            </div>
        `;
        container.innerHTML += cardHTML;
    });
}

// Llamar a la función para renderizar todos los productos inicialmente
renderizarProductos(productos);

// Evento para el input de búsqueda
const searchInput = document.querySelector('.search-container input');

searchInput.addEventListener('keyup', () => {
    const query = searchInput.value.toLowerCase().trim();

    // Filtrar productos según el nombre
    const productosFiltrados = productos.filter(producto =>
        producto.nombre.toLowerCase().includes(query)
    );

    // Renderizar productos filtrados
    renderizarProductos(productosFiltrados);
});

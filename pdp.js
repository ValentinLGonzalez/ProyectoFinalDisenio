// Importar los datos de productos
import { productos } from './Productos.js';

// Obtener el ID del producto desde la URL
const params = new URLSearchParams(window.location.search);
const productId = parseInt(params.get('id'), 10);

// Encontrar el producto por su ID
const productoSeleccionado = productos.find(producto => producto.id === productId);

// Referencia al contenedor
const productDetailContainer = document.getElementById('product-detail');

// Renderizar el detalle del producto
if (productoSeleccionado) {
    productDetailContainer.innerHTML = `
        <div class="product-detail-card">
            <img src="${productoSeleccionado.imagen}" alt="${productoSeleccionado.nombre}" class="product-image">
            <h1 class="product-name">${productoSeleccionado.nombre}</h1>
            <p class="product-description">${productoSeleccionado.descripcion}</p>
            <p class="price">
                ${productoSeleccionado.precioDescuento ? `<span class="old-price">${productoSeleccionado.precioDescuento}</span>` : ''}
                ${productoSeleccionado.descuento ? `<span class="discount">${productoSeleccionado.descuento}</span>` : ''}
            </p>
            <p class="final-price">${productoSeleccionado.precio}</p>
            <button class="add-to-cart">Añadir al carrito</button>
        </div>
    `;
} else {
    productDetailContainer.innerHTML = '<p>Producto no encontrado</p>';
}
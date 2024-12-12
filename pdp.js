import { productos } from '../Productos.js';

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
        <div class="row">
            <div class="column">
                <div class="product-card">
                    <img src="${productoSeleccionado.imagen}" alt="${productoSeleccionado.nombre}" class="product-image">
                </div>
            </div>
            <div class="column">
                <div class="product-card">
                    <h1 class="product-name">${productoSeleccionado.nombre}</h1>
                    <p class="price">
                        ${productoSeleccionado.precioDescuento ? `<span class="old-price">${productoSeleccionado.precioDescuento}</span>` : ''}
                        ${productoSeleccionado.descuento ? `<span class="discount">${productoSeleccionado.descuento}</span>` : ''}
                    </p>
                    <h2 class="final-price">${productoSeleccionado.precio}</h2>
                    <button class="add-to-cart">
                        <span class="icon-container">
                            <i class="material-icons">add_shopping_cart</i>
                        </span>
                        <h4>Añadir al carrito</h4>
                    </button>   
                </div>
            </div>
            <div class="column">
                <div class="product-card">
                    <h3>Acerca De ${productoSeleccionado.nombre}</h3>
                    <h4></h4>
                    <p class="product-description">${productoSeleccionado.descripcion}</p>
                </div>
            </div>
        </div>
    `;

    // Agregar el producto al carrito
    const addToCartButton = document.querySelector('.add-to-cart');
    addToCartButton.addEventListener('click', () => {
        addToCart(productoSeleccionado);
    });

} else {
    productDetailContainer.innerHTML = '<p>Producto no encontrado</p>';
}

// Función para agregar al carrito y actualizar sessionStorage
function addToCart(product) {
    const cart = JSON.parse(sessionStorage.getItem('cart')) || [];
    const existingProduct = cart.find(item => item.id === product.id);

    if (existingProduct) {
        existingProduct.cantidad += 1;
    } else {
        cart.push({ ...product, cantidad: 1 });
    }

    // Guardar el carrito en sessionStorage
    sessionStorage.setItem('cart', JSON.stringify(cart));
}

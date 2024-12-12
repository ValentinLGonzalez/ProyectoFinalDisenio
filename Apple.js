import { productos } from '/productos.js';

let paginaActual = 0;  // Definir la variable `paginaActual`

const productosApple = productos.filter(p => p.categoria === "Apple");

function mostrarProductos() {
    const appleGrid = document.querySelector('.apple-products-grid');
    appleGrid.innerHTML = '';
    const inicio = paginaActual * 5;
    const productosPagina = productosApple.slice(inicio, inicio + 5);

    productosPagina.forEach(producto => {
        const card = document.createElement('div');
        card.classList.add('apple-product-card');
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
        appleGrid.appendChild(card);
    });
}

// Función para cambiar de página
function cambiarPaginaApple(direccion) {
    const totalPaginas = Math.ceil(productosApple.length / 5);
    paginaActual = (paginaActual + direccion + totalPaginas) % totalPaginas;
    mostrarProductos();
}

// Inicializar la visualización de los productos
mostrarProductos();

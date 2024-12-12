document.addEventListener('DOMContentLoaded', function () {
    const container = document.querySelector('.product-grid');
    container.style.display = 'flex'; // Configura un layout flexible para la disposición horizontal
    container.style.flexWrap = 'nowrap'; // Evita el salto de línea
    container.style.overflowX = 'auto'; // Permite el scroll horizontal si es necesario

    const productos = [
        // Lista de productos (puedes importarlos desde otro archivo o definirlos aquí)
    ];

    productos.forEach(producto => {
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
});
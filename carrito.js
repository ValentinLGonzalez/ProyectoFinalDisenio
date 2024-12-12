// Referencias a los elementos HTML
const productList = document.getElementById('product-list');
const searchBar = document.getElementById('search-bar');
const cartItems = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');
const cartCount = document.getElementById('cart-count');

let cart = [];
let products = []; // Almacenar productos cargados

// Cargar productos desde el archivo JSON
fetch('productos.json')
    .then(response => response.json())
    .then(data => {
        products = data; // Guardar productos cargados
        displayProducts(products); // Mostrar todos los productos inicialmente
    })
    .catch(error => console.error('Error al cargar los productos:', error));

// Mostrar productos filtrados
function displayProducts(filteredProducts) {
    productList.innerHTML = ''; // Limpiar el contenedor de productos

    filteredProducts.forEach(product => {
        createProductCard(product);
    });
}

// Escuchar cambios en la barra de búsqueda
searchBar.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase(); // Convertir entrada a minúsculas
    const filteredProducts = products.filter(product =>
        product.nombre.toLowerCase().includes(searchTerm)
    );
    displayProducts(filteredProducts); // Mostrar solo los productos filtrados
});

// Crear tarjetas de productos dinámicamente
function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'card';

    card.innerHTML = `
        <img src="${product.imagen}" alt="${product.nombre}">
        <h3>${product.nombre}</h3>
        <p>$${product.precio.toFixed(2)}</p>
    `;

    const addButton = document.createElement('button');
    addButton.textContent = 'Agregar al carrito';
    addButton.onclick = () => addToCart(product);
    card.appendChild(addButton);

    productList.appendChild(card);
}

// Agregar producto al carrito
function addToCart(product) {
    const existingProduct = cart.find(item => item.id === product.id);

    if (existingProduct) {
        existingProduct.cantidad += 1;
    } else {
        cart.push({ ...product, cantidad: 1 });
    }

    updateCart();
}

// Actualizar carrito
function updateCart() {
    cartItems.innerHTML = '';
    let total = 0;
    let count = 0;

    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.nombre} - $${item.precio.toFixed(2)} x ${item.cantidad}`;
        cartItems.appendChild(li);

        total += item.precio * item.cantidad;
        count += item.cantidad;
    });

    cartTotal.textContent = total.toFixed(2);
    cartCount.textContent = count;
}

// Guardar el carrito en sessionStorage y redirigir a checkout.html
document.getElementById('checkout-button').addEventListener('click', () => {
    sessionStorage.setItem('cart', JSON.stringify(cart));
    window.location.href = 'carrito.html';
});

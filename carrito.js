// Suponiendo que tienes un array `cart` para almacenar los productos en el carrito
let cart = JSON.parse(sessionStorage.getItem("cart")) || [];

// Función para agregar un producto al carrito
function addToCart(product) {
    // Verificar si el producto ya está en el carrito
    const existingProductIndex = cart.findIndex(item => item.id === product.id);

    if (existingProductIndex !== -1) {
        // Si el producto ya existe, solo aumentar su cantidad
        cart[existingProductIndex].cantidad += 1;
    } else {
        // Si no está en el carrito, agregarlo con cantidad 1
        cart.push({ ...product, cantidad: 1 });
    }

    // Guardar el carrito actualizado en sessionStorage
    sessionStorage.setItem("cart", JSON.stringify(cart));

    // Actualizar la vista del carrito
    updateCart();
}

// Función para actualizar la vista del carrito
function updateCart() {
    const cartSummary = document.getElementById("cart-summary");
    const cartTotalSummary = document.getElementById("cart-total-summary");
    const cartItems = JSON.parse(sessionStorage.getItem("cart")) || [];

    // Limpiar el resumen actual del carrito
    cartSummary.innerHTML = "";

    // Si el carrito está vacío, mostrar el mensaje "No hay productos en carrito."
    if (cartItems.length === 0) {
        const noItemsMessage = document.createElement("p");
        noItemsMessage.textContent = "El carrito está vacío.";
        cartSummary.appendChild(noItemsMessage);
        cartTotalSummary.textContent = "$0.00"; // Asegurarse de que el total sea 0
        return; // Salir de la función si no hay productos
    }

    // Calcular el total
    let total = 0;

    // Mostrar los productos en el carrito con número de posición
    cartItems.forEach((item, index) => {
        const li = document.createElement("li");

        // Mostrar el número de posición, nombre del producto y precio
        li.textContent = `${index + 1}. ${item.nombre} - $${item.precio} (Cantidad: ${item.cantidad})`;

        cartSummary.appendChild(li);
        total += parseFloat(item.precio.replace(/[^\d.-]/g, "")) * item.cantidad; // Asegurarse de quitar el símbolo de moneda

        // Agregar los campos ocultos al formulario
        const nameField = document.createElement("input");
        nameField.type = "hidden";
        nameField.name = `product_${index + 1}_name`;
        nameField.value = item.nombre;

        const quantityField = document.createElement("input");
        quantityField.type = "hidden";
        quantityField.name = `product_${index + 1}_quantity`;
        quantityField.value = item.cantidad;

        const priceField = document.createElement("input");
        priceField.type = "hidden";
        priceField.name = `product_${index + 1}_price`;
        priceField.value = item.precio;

        document.getElementById("cart-form-container").appendChild(nameField);
        document.getElementById("cart-form-container").appendChild(quantityField);
        document.getElementById("cart-form-container").appendChild(priceField);
    });

    // Mostrar el total del carrito
    cartTotalSummary.textContent = `$${total.toFixed(2)}`;
}

// Función para vaciar el carrito
function clearCart() {
    // Vaciar el carrito (limpiar el array y eliminarlo del sessionStorage)
    cart = [];
    sessionStorage.removeItem("cart");

    // Actualizar la vista del carrito
    updateCart();
}

// Asignar la función `clearCart` al botón "Vaciar carrito"
const clearCartButton = document.getElementById("clear-cart");
if (clearCartButton) {
    clearCartButton.addEventListener("click", clearCart);
}

// Ejecuta esta función para cargar el carrito cuando la página se carga
window.onload = updateCart;

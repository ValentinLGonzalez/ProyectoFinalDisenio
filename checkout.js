document.addEventListener("DOMContentLoaded", () => {
    const cartItems = JSON.parse(sessionStorage.getItem("cart")) || [];
    const cartSummary = document.getElementById("cart-summary");
    const cartTotalSummary = document.getElementById("cart-total-summary");
    const cartFormContainer = document.getElementById("cart-form-container");

    let total = 0;

    cartItems.forEach((item, index) => {
        // Mostrar productos en la página
        const li = document.createElement("li");
        li.textContent = `${item.nombre} - $${item.precio} (Cantidad: ${item.cantidad})`;
        cartSummary.appendChild(li);

        total += parseFloat(item.precio.replace(/[^\d.-]/g, "")) * item.cantidad;

        // Agregar campos ocultos al formulario
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
        priceField.value = item.precio.replace(/[^\d.-]/g, "");

        cartFormContainer.appendChild(nameField);
        cartFormContainer.appendChild(quantityField);
        cartFormContainer.appendChild(priceField);
    });

    // Actualizar total en la página
    cartTotalSummary.textContent = total.toFixed(2);

    // Agregar campo oculto para el total
    const totalField = document.createElement("input");
    totalField.type = "hidden";
    totalField.name = "cart_total";
    totalField.value = total.toFixed(2);
    cartFormContainer.appendChild(totalField);

    // Configurar emailjs
    emailjs.init("CLAVE PUBLICA"); // Reemplaza con tu clave pública

    // Función para enviar el formulario por correo
    function sendEmail(event) {
        event.preventDefault();
        emailjs.sendForm('SERVICE_ID', 'TEMPLATE_ID', event.target) // Reemplazar con ID servicio/template
            .then(() => alert("Correo enviado exitosamente"))
            .catch(error => {
                console.error("Error al enviar correo:", error);
                alert("Error al enviar correo: " + JSON.stringify(error));
            });
    }

    // Agregar función sendEmail al evento submit del formulario
    const form = document.getElementById("checkout-form");
    form.addEventListener("submit", sendEmail);
});

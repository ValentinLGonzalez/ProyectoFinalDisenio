// productos.js
export const productos = [
    {
        id: 1,
        categoria: "Printers",
        nombre: "HP MULTIFUNCION LASER COLOR",
        color: "White",
        imagen: "/Imagenes/impresora.png",
        precio: "$869,999.99 ARS",
        precioDescuento: "$909,999 ARS",
        descuento: "5% OFF",
        descripcion: "Imprima a color desde cualquier lugar con velocidades ultrarrápidas y Wi-Fi® con recuperación automática. <br>Ayude a su equipo de trabajo empresarial con esta impresora compacta, de alto rendimiento y a color que es ideal para hasta 10 usuarios. <br>Haga más con las funciones de productividad inteligentes y los sencillos accesos directos, disponibles en cualquier momento y lugar. <br>La mejor aplicación de administración de flujo de trabajo de documentos para las pequeñas y medianas empresas de trabajo flexible de la actualidad.<br>Instale y configure desde un panel de control individual, desde la incorporación hasta el uso continuo. <br>Conecte su flota de impresoras. Las sólidas funciones y las herramientas inteligentes permiten al personal hacer más, no importa donde se realice el trabajo."
    },
    {
        id: 2,
        categoria: "OfficeNotebooks",
        nombre: "DELL INSPIRON 16 2 EN 1",
        color: "Grey",
        imagen: "/Imagenes/dellinspiron.png",
        precio: "$1,194,999 ARS",
        precioDescuento: "$1,290,299 ARS",
        descuento: "8% OFF"
    },
    {
        id: 3,
        categoria: "Apple",
        nombre: "MACBOOK AIR M2 13",
        color: "SPACE",
        imagen: "/Imagenes/macbookpro.png",
        precio: "$1,000 USD",
        precioDescuento: "$1,070 USD",
        descuento: "7% OFF"
    },
    {
        id: 4,
        categoria: "XBox",
        nombre: "XBOX SERIE X",
        color: "Black",
        imagen: "/Imagenes/xboxone.png",
        precio: "$700 USD",
        precioDescuento: null,
        descuento: null
    },
    {
        id: 5,
        categoria: "PS5",
        nombre: "Play Station 5 Digital",
        color: "White",
        imagen: "/Imagenes/PS5.png",
        precio: "$650 USD",
        precioDescuento: "$980 USD",
        descuento: "%50 OFF"
    },
    {
        id: 6,
        categoria: "Apple",
        nombre: "Magic Keyboard Pro 12.9",
        color: "Black",
        imagen: "/Imagenes/magickeyboard.png",
        precio: "$280 USD",
        precioDescuento: "$480 USD",
        descuento: "40% OFF"
    },
    {
        id: 7,
        categoria: "TV",
        nombre: "Smart TV Samsung 55'",
        color: "Black",
        imagen: "/Imagenes/tvcasa.png",
        precio: "$767,999 ARS",
        precioDescuento: null,
        descuento: null
    },
    {
        id: 8,
        categoria: "OfficeNotebooks",
        nombre: "LENOVO FLEX 2 EN 1 RYZEN 7",
        color: "Gray",
        imagen: "/Imagenes/oficina.png",
        precio: "$1,549,999 ARS",
        precioDescuento: null,
        descuento: null
    },
    {
        id: 9,
        categoria: "NotebookGamer",
        nombre: "ASUS ROG STRIX G16",
        color: "ECLIPSE GRAY",
        imagen: "/Imagenes/gamingpc.png",
        precio: "$1,620 USD",
        precioDescuento: null,
        descuento: null
    },
    {
        id: 10,
        categoria: "TV",
        nombre: "Monitor Level UP27'",
        color: "Black",
        imagen: "/Imagenes/tvpubg.png",
        precio: "$325,999 ARS",
        precioDescuento: null,
        descuento: null
    },
    {
        id: 11,
        categoria: "Nintendo",
        nombre: "Nintendo Switch OLED",
        color: "NEON",
        imagen: "/Imagenes/switch.png",
        precio: "$650 USD",
        precioDescuento: "$950 USD",
        descuento: "40% OFF"
    },
    {
        id: 12,
        categoria: "Apple",
        nombre: "iPad 9NA 10.2'",
        color: "Silver, Space",
        imagen: "/Imagenes/ipad.png",
        precio: "$320 USD",
        precioDescuento: null,
        descuento: null
    },
    {
        id: 13,
        categoria: "Apple",
        nombre: "iPad Pro 10.2' 2024",
        color: "Silver, Space",
        imagen: "/Imagenes/ipad.png",
        precio: "$1,020 USD",
        precioDescuento: "$2,010 USD",
        descuento: "40% OFF"
    },
    {
        id: 13,
        categoria: "Apple",
        nombre: "iPad Pro 10.2' 2024",
        color: "Silver, Space",
        imagen: "/Imagenes/ipad.png",
        precio: "$1,020 USD",
        precioDescuento: null,
        descuento: null
    },
    {
        id: 13,
        categoria: "Apple",
        nombre: "iPad 2nd Gen",
        color: "Silver, Space",
        imagen: "/Imagenes/ipad.png",
        precio: "$100 USD",
        precioDescuento: "$250 USD",
        descuento: "40% OFF"
    }
];

document.addEventListener('DOMContentLoaded', function () {
    const container = document.querySelector('.product-grid');

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

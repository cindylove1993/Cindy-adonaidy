// Array para almacenar los productos
const productos = [
  { id: 1, nombre: "Crema Hidratante TimeWise", categoria: "Hidratación", precio: 35.00, imagen: "ruta/a/crema1.jpg" },
  { id: 2, nombre: "Limpiador Facial 3 en 1", categoria: "Limpieza", precio: 25.00, imagen: "ruta/a/limpiador1.jpg" },
  { id: 3, nombre: "Serum Anti-edad", categoria: "Anti-edad", precio: 45.00, imagen: "ruta/a/serum1.jpg" },
  { id: 4, nombre: "Tónico Facial Mary Kay", categoria: "Limpieza", precio: 22.00, imagen: "ruta/a/tonico1.jpg" }
];

// Array para el carrito de compras
let carrito = [];

// Función para mostrar productos
function mostrarProductos(categoria = "todos") {
  const productosFiltrados = categoria === "todos" ? productos : productos.filter(producto => producto.categoria === categoria);
  const contenedorProductos = document.getElementById("productos");
  contenedorProductos.innerHTML = ''; // Limpiar el contenedor antes de mostrar los productos

  productosFiltrados.forEach(producto => {
    const divProducto = document.createElement("div");
    divProducto.classList.add("producto");
    divProducto.innerHTML = `
      <img src="${producto.imagen}" alt="${producto.nombre}" />
      <h3>${producto.nombre}</h3>
      <p>$${producto.precio.toFixed(2)}</p>
      <button onclick="agregarAlCarrito(${producto.id})">Agregar al carrito</button>
    `;
    contenedorProductos.appendChild(divProducto);
  });
}

// Función para filtrar productos por categoría
function filtrarPorCategoria() {
  const categoria = document.getElementById("categoria").value;
  mostrarProductos(categoria);
}

// Función para agregar productos al carrito
function agregarAlCarrito(id) {
  const producto = productos.find(p => p.id === id);
  carrito.push(producto);
  actualizarCarrito();
}

// Función para actualizar la visualización del carrito
function actualizarCarrito() {
  const cantidadCarrito = document.getElementById("cantidad-carrito");
  const listaCarrito = document.getElementById("lista-carrito");
  const totalCarrito = document.getElementById("total");

  cantidadCarrito.textContent = carrito.length;

  listaCarrito.innerHTML = ''; // Limpiar la lista antes de actualizar
  let total = 0;

  carrito.forEach(producto => {
    const li = document.createElement("li");
    li.textContent = `${producto.nombre} - $${producto.precio.toFixed(2)}`;
    listaCarrito.appendChild(li);
    total += producto.precio;
  });

  totalCarrito.textContent = total.toFixed(2);
}

// Función para vaciar el carrito
function vaciarCarrito() {
  carrito = [];
  actualizarCarrito();
}

// Función para finalizar la compra
function finalizarCompra() {
  if (carrito.length === 0) {
    alert("¡Tu carrito está vacío!");
  } else {
    // Aquí podrías integrar un sistema de pago real
    alert("¡Compra finalizada! Gracias por tu compra.");
    vaciarCarrito();
  }
}

// Integración de PayPal
paypal.Buttons({
  createOrder: function(data, actions) {
    return actions.order.create({
      purchase_units: [{
        amount: {
          value: document.getElementById("total").textContent
        }
      }]
    });
  },
  onApprove: function(data, actions) {
    return actions.order.capture().then(function(details) {
      alert("Compra aprobada por " + details.payer.name.given_name);
      vaciarCarrito();
    });
  }
}).render('#paypal-button-container');

// Inicializar la página mostrando todos los productos
mostrarProductos();

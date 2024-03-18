//------------------------------------------------------LISTA DE PRODUCTOS---------------------------------------------------------//

const productos = [
    {
        id: "producto 1",
        tipo: "Mouse Logitech G502 HERO",
        categoria: {
            nombre: "mouse",
            id: "mouse"
        },
        precio: 45000,
        imagen: "../img/producto1.jpg"
    },
    {
        id: "producto 2",
        tipo: "Mouse HyperX Pusefire",
        categoria: {
            nombre: "mouse",
            id: "mouse"
        },
        precio: 25000,
        imagen: "../img/producto2.jpg"
    },
    {
        id: "producto 3",
        tipo: "Mouse Genius NX-7000",
        categoria: {
            nombre: "mouse",
            id: "mouse"
        },
        precio: 10000,
        imagen: "../img/producto3.jpg"
    },
    {
        id: "producto 4",
        tipo: "Monitor LG",
        categoria: {
            nombre: "monitor",
            id: "monitor"
        },
        precio: 50000,
        imagen: "../img/producto4.jpg"
    },
    {
        id: "producto 5",
        tipo: "Monitor Samsung",
        categoria: {
            nombre: "monitor",
            id: "monitor"
        },
        precio: 30000,
        imagen: "../img/producto5.jpg"
    },
    {
        id: "producto 6",
        tipo: "Monitor ASUS",
        categoria: {
            nombre: "monitor",
            id: "monitor"
        },
        precio: 20000,
        imagen: "../img/producto6.jpg"
    },
    {
        id: "producto 7",
        tipo: "Teclado Logitech K120",
        categoria: {
            nombre: "teclado",
            id: "teclado"
        },
        precio: 65000,
        imagen: "../img/producto7.jpg"
    },
    {
        id: "producto 8",
        tipo: "Teclado ReDragon K585",
        categoria: {
            nombre: "teclado",
            id: "teclado"
        },
        precio: 43000,
        imagen: "../img/producto8.jpg"
    },
    {
        id: "producto 9",
        tipo: "Teclado Genius KM-8200",
        categoria: {
            nombre: "teclado",
            id: "teclado"
        },
        precio: 15000,
        imagen: "../img/producto9.jpg"
    },
];

//------------------------------------------------------BUSQUEDA Y FILTRADO DE PRODUCTOS----------------------------------------------//

const contenedorProductos = document.querySelector("#contenedorProductos");
const formularioCarrito = document.querySelector("#formularioCarritoCompras");

formularioCarrito.addEventListener("submit", function (e) {
    e.preventDefault();

    const inputBusqueda = document.querySelector(".buscar");
    const terminoBusqueda = inputBusqueda.value.trim().toLowerCase();

    const productosFiltrados = productos.filter(producto =>
        producto.tipo.toLowerCase().includes(terminoBusqueda)
    );

    mostrarProductosFiltrados(productosFiltrados);
});

function mostrarProductosFiltrados(productosFiltrados) {
    contenedorProductos.innerHTML = "";

    if (productosFiltrados.length === 0) {
        contenedorProductos.innerHTML = '<p></p><p class= "hDosCarrito">Producto no encontrado</p><p></p>';
    } else {
        productosFiltrados.forEach(producto => {
            const div = document.createElement("div");
            div.classList.add("productoCarrito");
            div.innerHTML = `
                <img src="${producto.imagen}" alt="${producto.tipo}">
                <div>
                    <h5 class="my-3 text-center">${producto.tipo}</h5>
                    <div class="d-flex justify-content-center">
                        <p class="mx-2 mt-3">$${producto.precio}</p>
                        <button type="button" id="${producto.id}" class="botonCarritoDos mx-2"><i class="bi bi-cart-plus"></i>
                            Añadir al Carrito</button>
                    </div>
                </div>   
            `;
            contenedorProductos.append(div);
        });

        botonesAgregarProducto();
    }
}


//------------------------------------------------------PRODUCTOS EN PAG PRINCIPAL---------------------------------------------------------//

function cargarProductos() {
    productos.forEach(producto => {
        const div = document.createElement("div");
        div.classList.add("productoCarrito");
        div.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.tipo}">
            <div>
                <h5 class="my-3 text-center">${producto.tipo}</h5>
                <div class="d-flex justify-content-center">
                    <p class="mx-2 mt-3">$${producto.precio}</p>
                    <button type="button" id="${producto.id}" class="botonCarritoDos mx-2"><i class="bi bi-cart-plus"></i>
                        Añadir al Carrito</button>
                </div>
            </div>   
        `;
        contenedorProductos.append(div);
    });
}

cargarProductos();

//------------------------------------------------------AGREGAR PRODUCTOS AL CARRITO LS---------------------------------------------------------//

//CARRITO
let productosEnCarrito = [];

function botonesAgregarProducto() {
    const botonesAgregar = document.querySelectorAll(".botonCarritoDos");

    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito);
    })
}

botonesAgregarProducto();

// AGREGAR PRODUCTOS AL CARRITO LS
function agregarAlCarrito(e) {
    const idBoton = e.currentTarget.id;
    const productoAgregado = productos.find(producto => producto.id === idBoton);

    if (productosEnCarrito.some(producto => producto.id === idBoton)) {
        const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
        productosEnCarrito[index].cantidad++;
    } else {
        productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado);
    }

    localStorage.setItem("productosCarrito", JSON.stringify(productosEnCarrito));
    mostrarCarrito();
}

// CARGAR PRODUCTOS DEL CARRITO DESDE EL LOCAL STORAGE AL CARGAR LA PAGINA
function productosDesdeLS() {
    if (localStorage.getItem("productosCarrito")) {
        productosEnCarrito = JSON.parse(localStorage.getItem("productosCarrito"));
        mostrarCarrito();
    }
}

//------------------------------------------------------AGREGAR PRODUCTOS AL CARRITO DINAMICO---------------------------------------------------------//

const contenedorCarrito = document.querySelector("#contenedorCarrito");
const vaciarCarritoBoton = document.querySelector("#vaciarCarrito");
const comprarAhoraBoton = document.querySelector("#comprarCarrito");
const carritoVacioMensaje = document.querySelector("#carritoVacio");
const totalCarrito = document.querySelector("#totalCarrito");


// MOSTRAR CARRITO Y SU TOTAL
function mostrarCarrito() {
    contenedorCarrito.innerHTML = "";
    if (productosEnCarrito.length === 0) {
        carritoVacioMensaje.style.display = "block";
        totalCarrito.textContent = "Total :$0";
    } else {
        carritoVacioMensaje.style.display = "none";
        contenedorCarrito.innerHTML = '<p class= "hDosCarrito">Productos:</p>';
        productosEnCarrito.forEach(producto => {
            const div = document.createElement("div");
            div.classList.add("divCarritoDos");
            div.innerHTML = `
            <img class="imagenCarrito" src="${producto.imagen}" alt="${producto.tipo}"><p>${producto.tipo} x${producto.cantidad} - $${producto.precio * producto.cantidad}</p>
            `;
            contenedorCarrito.append(div);
        });

        const total = productosEnCarrito.reduce((acc, producto) => acc + producto.precio * producto.cantidad, 0);
        totalCarrito.textContent = `Total: $${total}`;
    }
}

// CARGAR PRODUCTOS DEL CARRITO DESDE EL LOCAL STORAGE AL CARGAR LA PAGINA
productosDesdeLS();

// VACIAR CARRITO
function vaciarCarrito() {
    productosEnCarrito = [];
    localStorage.removeItem("productosCarrito");
    mostrarCarrito();
}

// EVENTO PARA VACIAR CARRITO
vaciarCarritoBoton.addEventListener("click", vaciarCarrito);

// REALIZAR COMPRA
function comprarAhora() {
    if (productosEnCarrito.length == 0) {
        carritoVacioMensaje.style.display = "none";
        contenedorCarrito.innerHTML = '<p class= "carritoVacio my-0">Agrega Productos al Carrito!</p>';
    } else {
        vaciarCarrito();
        carritoVacioMensaje.style.display = "none";
        contenedorCarrito.innerHTML = '<p class= "hTresCarrito">Compra Realizada Con Exito!</p> <p class= "hTresCarrito">Muchas gracias por la visita!</p>';
    }
}

// EVENTO PARA REALIZAR COMPRA
comprarAhoraBoton.addEventListener("click", comprarAhora);

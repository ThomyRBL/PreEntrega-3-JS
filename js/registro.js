//CONSTANTES
const formularioRegistro = document.querySelector("#formRegistrarse"),
    nombre = document.querySelector("#nombre"),
    usuario = document.querySelector("#usuario"),
    email = document.querySelector("#email"),
    contrasena = document.querySelector("#contrasena");

//USUARIOS
let usuariosregistrados = JSON.parse(localStorage.getItem("usuarios")) || [];

//CLASE CONSTRUCTORA DEL USUARIO
class Usuario {
    constructor(nombre, usuario, email, contrasena) {
        this.nombre = nombre;
        this.usuario = usuario;
        this.email = email;
        this.contrasena = contrasena;
    }
}

//GUARDAR EN LOCAL STORAGE
function guardarEnLS(arr) {
    return localStorage.setItem("usuarios", JSON.stringify(arr));
}

//CREAR NUEVO USUARIO
formularioRegistro.addEventListener('submit', (e) => {
    e.preventDefault();
    const newUsuario = new Usuario(nombre.value, usuario.value, email.value, contrasena.value);
    usuariosregistrados.push(newUsuario);
    guardarEnLS(usuariosregistrados);

    nombre.value = "";
    usuario.value = "";
    email.value = "";
    contrasena.value = "";

    document.querySelector('#usuarioRegistrado').innerHTML = "Te has registrado con exito!"
})
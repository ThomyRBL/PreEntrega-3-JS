//CONSTANTES
const formInico = document.querySelector("#formInicio"),
    usuarioDos = document.querySelector("#usuarioDos"),
    contrasenaDos = document.querySelector("#contrasenaDos"),
    p = document.querySelector("#usuarioNoEncontrado");

//TRAER INFORMACION DEL LOCAL STORAGE
function recuperarLS() {
    return JSON.parse(localStorage.getItem("usuarios"));
}

//CONSTANTE LS
const usuarioLS = recuperarLS();

//FUNCION PARA INICIAR SESION
function inicioSesion(user) {
    let usuarioEncontrado = user.find((usuario) => {
        return usuario.usuario == usuarioDos.value && usuario.contrasena == contrasenaDos.value;
    })

    usuarioEncontrado ? location.href = "./carrito.html" : document.querySelector('#usuarioNoEncontrado').innerHTML = "Usuario no encontrado";

}

//INICIAR SESION
formInico.addEventListener("submit", (e) => {
    e.preventDefault();
    inicioSesion(usuarioLS);
});
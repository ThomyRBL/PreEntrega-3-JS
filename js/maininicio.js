//CONSTANTE MAIN
const mainInicio = document.querySelector("#imgFondoInicio");

//CONSTANTE FONDOS
const fondos = ["FondoInicio.jpg", "FondoInicioDos.jpg", "FondoInicioTres.jpg", "FondoInicioCuatro.jpg", "FondoInicioCinco.jpg", "FondoInicioSeis.jpg"];

//CAMBIAMOS FONDOS ALEATORIAMENTE
function cambiarFondo(fondos) {
    let aleatorio = Math.floor(Math.random() * fondos.length)
    mainInicio.setAttribute("src", `../img/${fondos[aleatorio]}`);
}

window.onload = cambiarFondo(fondos)
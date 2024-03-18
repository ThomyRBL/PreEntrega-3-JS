//CONSTANTE MAIN
const mainRegistro = document.querySelector("#imgFondoRegistro");

//CONSTANTE FONDOS
const fondos = ["FondoInicio.jpg", "FondoInicioDos.jpg", "FondoInicioTres.jpg", "FondoInicioCuatro.jpg", "FondoInicioCinco.jpg", "FondoInicioSeis.jpg"];

//CAMBIAMOS FONDOS ALEATORIAMENTE
function cambiarFondoRegistro(fondos) {
    let aleatorio = Math.floor(Math.random() * fondos.length)
    mainRegistro.setAttribute("src", `img/${fondos[aleatorio]}`);
}

window.onload = cambiarFondoRegistro(fondos);
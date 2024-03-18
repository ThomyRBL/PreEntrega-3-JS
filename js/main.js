//CONSTANTE MAIN
const main = document.querySelector(".imgFondoUno");

//CONSTANTE FONDOS
const fondos = ["FondoInicio.jpg", "FondoInicioDos.jpg", "FondoInicioTres.jpg", "FondoInicioCuatro.jpg", "FondoInicioCinco.jpg", "FondoInicioSeis.jpg"];

//CAMBIAMOS FONDOS ALEATORIAMENTE
function cambiarFondo(fondos) {
    let aleatorio = Math.floor(Math.random() * fondos.length)
    main.setAttribute("src", `../img/${fondos[aleatorio]}`);
}

window.onload = cambiarFondo(fondos)
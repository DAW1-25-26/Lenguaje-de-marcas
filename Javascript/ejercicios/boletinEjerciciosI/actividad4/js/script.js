document.addEventListener("DOMContentLoaded", () => {
    let numero = Number(prompt("Introduzca un numero: "));

    if (numero%2 === 0) {
        console.log(numero + " es divisible entre 2")
    } else {
        console.log(numero + "no es divisible por 2")
    }
});
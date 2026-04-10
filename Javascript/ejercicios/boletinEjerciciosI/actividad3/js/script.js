document.addEventListener("DOMContentLoaded", () => {
    let num1 = Number(prompt("Introduzca un numero: "));
    let num2 = Number(prompt("Introduzca otro numero: "));

    if (num1 > num2) {
        console.log(num1 + " 10 es mayor que " + num2);
    } else {
        console.log(num2 + " es mayor que " + num1)
    }
});
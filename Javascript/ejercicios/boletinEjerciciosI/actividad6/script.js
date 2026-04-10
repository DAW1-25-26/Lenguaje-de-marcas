let numero = Number(prompt("Introduzca un numero: "));

if (numero%2 === 0 || numero%3 === 0 || numero%5 === 0 || numero%7 === 0) {
    if(numero%2 === 0){
        console.log("Divisible por 2");
    }
    if(numero%3 === 0){
        console.log("Divisible por 3");
    }
    if (numero%5 === 0) {
        console.log("Divisible por 5");
    }
    if (numero%7 === 0) {
        console.log("Divisible por 7");
    }
}
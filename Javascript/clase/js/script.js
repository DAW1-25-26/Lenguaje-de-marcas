//console.log("Alberto");

// Imprimir por consola los 100 primero números.
/*
let valorMaximo = 100;
for (let i = 1; i <= valorMaximo; i++){
    console.log(i);
}*/

// Solicitar un número al usuario e imprimir por consola si es par o impar.
/*let nuevoNumero = prompt("Introduce el número: ");
if (nuevoNumero % 2 == 0){
    console.log("El número " + nuevoNumero + " es par.");
} else{
    console.log("El número " + nuevoNumero + " es impar.");
}*/

// Solicitar un número e imprimir si es primo
/*let numero = parseInt(prompt("Introduce un número para saber si es primo:"));
let esPrimo = true;

if (numero <= 1) {
    esPrimo = false; 
} else {
    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) {
            esPrimo = false;
            break;
        }
    }
}

if (esPrimo) {
    console.log(numero + " es un número primo.");
    alert(numero + " es un número primo.");
} else {
    console.log(numero + " NO es un número primo.");
    alert(numero + " NO es un número primo.");
}*/

let botonRojo = document.querySelector("#btnrojo");
botonRojo.addEventListener("click", ponerRojo);
function ponerRojo(){
    let parrafos = document.querySelectorAll("p");
    parrafos.forEach(p=>{
        p.classList.add("rojo");
    })
}

let botonVerde = document.querySelector("#btverde");
botonVerde.addEventListener("click", ponerVerde);
function ponerVerde(){
    let parrafos = document.querySelectorAll("p");
    parrafos.forEach(p=>{
        p.classList.add("verde");
    })
}

let botonAzul = document.querySelector("#btnazul");
botonVerde.addEventListener("click", ponerAzul);
function ponerAzul(){
    let parrafos = document.querySelectorAll("p");
    parrafos.forEach(p=>{
        p.classList.add("azul");
    })
}

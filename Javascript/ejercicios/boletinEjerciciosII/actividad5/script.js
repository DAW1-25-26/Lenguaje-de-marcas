let boton = document.querySelector("#btn");


boton.addEventListener("click", AñadirContenido);


function AñadirContenido(){


    let titulo = document.querySelector("#titulo").value;
    let seccion1 = document.querySelector("#seccion1").value;
    let parrafo1 = document.querySelector("#ParrafoSeccion1").value;
    let seccion2 = document.querySelector("#seccion2").value;
    let parrafo2 = document.querySelector("#ParrafoSeccion2").value;


    document.querySelector("#mostrarTitulo").innerHTML = "Título: " + titulo;
    document.querySelector("#mostrarSeccion1").innerHTML = "Sección 1: " + seccion1;
    document.querySelector("#mostrarParrafo1").innerHTML = parrafo1;


    document.querySelector("#mostrarSeccion2").innerHTML = "Sección 2: " + seccion2;
    document.querySelector("#mostrarParrafo2").innerHTML = parrafo2;


}

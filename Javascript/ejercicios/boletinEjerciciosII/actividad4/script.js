function crear(){


    let titulo = document.getElementById("titulo").value;
    let seccion1 = document.getElementById("seccion1").value;
    let seccion2 = document.getElementById("seccion2").value;


    let contenedor = document.getElementById("resultado");


    contenedor.innerHTML = ""; // limpiar antes


    let h1 = document.createElement("h1");
    h1.innerHTML = titulo;


    let p1 = document.createElement("p");
    p1.innerHTML = seccion1;


    let p2 = document.createElement("p");
    p2.innerHTML = seccion2;


    contenedor.appendChild(h1);
    contenedor.appendChild(p1);
    contenedor.appendChild(p2);


}

document.addEventListener("DOMContentLoaded", () => {
    let boton=document.querySelector("#boton");
    boton.addEventListener("click",rellenarTexto);
    let titulot=document.querySelector("#parrafot");
   
    let titulo=document.querySelector("#parrafos");


    function rellenarTexto(){
        let parrafotexto=document.createElement("p");
        parrafotexto.textContent=parrafot.value;
        parrafos.appendChild(parrafotexto);
    }
});

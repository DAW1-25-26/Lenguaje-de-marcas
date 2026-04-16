document.addEventListener("DOMContentLoaded", () => {
    let boton=document.querySelector("#boton");
    boton.addEventListener("click",rellenarTexto);
    let titulot=document.querySelector("#titulot");
   
    let titulo=document.querySelector("#titulo");


    function rellenarTexto(){
        let titulotexto=titulot.value;
        titulo.textContent=titulotexto;
    }
});

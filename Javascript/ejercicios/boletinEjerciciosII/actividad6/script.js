document.addEventListener("DOMContentLoaded", () => {
    let boton = document.querySelector("#boton");
    let listat = document.querySelector("#listat");
    let lista = document.querySelector("#listaA");
    let borrar = document.querySelector("#botonBorrar");

    boton.addEventListener("click", rellenarTexto);
    borrar.addEventListener("click", borrarElemento);

    function rellenarTexto() {
        let texto = listat.value.trim();

        if (texto !== "") {
            let elemento = document.createElement("li");
            elemento.textContent = texto;
            lista.appendChild(elemento);
            listat.value = "";
        }
    }

    function borrarElemento() {
        let texto = listat.value.trim();
        let elementos = lista.querySelectorAll("li");

        elementos.forEach(function(li) {
            if (li.textContent === texto) {
                li.remove();
            }
        });

        listat.value = "";
    }
});
document.addEventListener("DOMContentLoaded", () => {
    const formulario = document.getElementById("formLenguaje");
    const inputLenguaje = document.getElementById("inputLenguaje");
    const inputDescripcion = document.getElementById("inputDescripcion");
    const inputCantidad = document.getElementById("inputCantidad");
    const tabla = document.getElementById("cuerpoTabla");

    formulario.addEventListener("submit", (event) => {
        event.preventDefault(); // evitar recarga

        // Validación
        if (!formulario.checkValidity()) {
            formulario.classList.add("was-validated");
            return;
        }

        // Obtener valores
        const lenguaje = inputLenguaje.value;
        const descripcion = inputDescripcion.value; // opcional mostrar en la tabla
        const cantidad = inputCantidad.value;

        // Crear fila nueva
        const fila = document.createElement("tr");
        const numero = tabla.children.length + 1;
        fila.innerHTML = `
            <td>${numero}</td>
            <td>${lenguaje}</td>
            <td>${cantidad}</td>
        `;

        // Añadir fila a la tabla
        tabla.appendChild(fila);

        // Limpiar formulario y clases de validación
        formulario.reset();
        formulario.classList.remove("was-validated");
    });
});
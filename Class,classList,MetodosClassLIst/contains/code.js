/* classList.contains:
sirve para verificar si hay alguna clase que contage el nombre que buscamos */

const titulo = document.querySelector(".titulo");

let valor = titulo.classList.contains("grandessss");

if (valor) {
    document.write("La clase existe");
} else {
    document.write("La clase NO existe");
}


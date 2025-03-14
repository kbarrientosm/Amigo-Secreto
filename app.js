// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    const inputAmigo = document.getElementById("amigo");
    const nombreAmigo = inputAmigo.value.trim();

    if (nombreAmigo === "") {
        alert("Por favor, inserte un Nombre");
        return;
    }

    amigos.push(nombreAmigo);
    actualizarLista();
    inputAmigo.value = ""; // Corregido: estaba en mayúscula (InputAmigo)
    inputAmigo.focus(); // Corregido: estaba en mayúscula (InputAmigo)
}

function actualizarLista() {
    const listaAmigoUl = document.getElementById("listaAmigos"); // Corregido: estaba en mayúscula (ListaAmigos)
    listaAmigoUl.innerHTML = "";

    amigos.forEach(amigo => {
        const li = document.createElement("li");
        li.textContent = amigo;
        listaAmigoUl.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos para sortear. Agrega nombres primero.");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length); // Corregido: estaba un "=" en lugar de "*"
    const amigoSorteado = amigos[indiceAleatorio]; // Corregido: estaba mal escrito (indiceAletorio)

    const resultadoUl = document.getElementById("resultado");
    resultadoUl.innerHTML = `<li>${amigoSorteado}</li>`; // Corregido: uso de template literals
}

// Event listeners para los botones
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById("btnAdicionar").addEventListener("click", agregarAmigo);
    document.getElementById("btnSortear").addEventListener("click", sortearAmigo);
});

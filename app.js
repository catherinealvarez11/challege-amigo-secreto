// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let lista = [];
let listaAmigos = document.getElementById("listaAmigos");
let resultado = document.getElementById("resultado");
let inputNombre = document.getElementById("agregarAmigo"); 
let btnAgregar = document.getElementById("agregar"); 

// Función para agregar amigos
function agregarAmigo() {
    let nombre = inputNombre.value.trim();

    // Verificar que el nombre no esté vacío
    if (nombre === "") {
        alert("Debe ingresar un nombre");
        return;
    }

    // Verificar que el nombre no contenga números
    if (/[\d]/.test(nombre)) {
        alert("El nombre no puede contener números.");
        inputNombre.value = ""; // Limpiar el input
        return;
    }

    // Formatear el nombre para tener la primera letra en mayúscula y el resto en minúsculas
    nombre = nombre.charAt(0).toUpperCase() + nombre.slice(1).toLowerCase();

    // Agregar el nombre a la lista
    lista.push(nombre);
    inputNombre.value = ""; // Limpiar input
    mostrarAmigos();
}

// Función para mostrar la lista de amigos
function mostrarAmigos() {
    listaAmigos.innerHTML = "";

    if (lista.length === 0) {
        listaAmigos.innerHTML = "<p>No hay amigos agregados en la lista</p>";
    } else {
        let ul = document.createElement("ul");
        lista.forEach((nombre) => {
            let li = document.createElement("li");
            li.textContent = nombre;
            ul.appendChild(li);
        });
        listaAmigos.appendChild(ul);
    }
}

// Función para sortear un amigo
function sortearAmigo() {
    if (lista.length === 0) {
        resultado.innerHTML = "No hay amigos en la lista para sortear.";
        return;
    }

    // Sorteamos un amigo
    let amigoSorteado = lista[Math.floor(Math.random() * lista.length)];

    // Mostramos el amigo sorteado
    resultado.innerHTML = "El amigo sorteado es: " + amigoSorteado;
    console.log("Sorteo:", amigoSorteado);

    // Eliminar el amigo sorteado de la lista para que no se repita
    lista = lista.filter((amigo) => amigo !== amigoSorteado);

    // Actualizar la lista en la interfaz
    mostrarAmigos();
}

// Habilitar el botón de añadir cuando haya texto en el input
inputNombre.addEventListener("input", function () {
    btnAgregar.disabled = inputNombre.value.trim() === "";
});

// Vincular eventos a los botones
btnAgregar.addEventListener("click", agregarAmigo);
document.getElementById("sorteo").addEventListener("click", sortearAmigo);

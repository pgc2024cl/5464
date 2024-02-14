document.getElementById("btnCreditos").addEventListener("click", function() {
    alert("Autor: [Patricia Gómez Cubría ]\nCurso y Grupo: [Nº14 y 2ºB]");
});

function ocultarDiv() {
    document.getElementById("primerDiv").style.display = "none";
}

function mostrarDiv() {
    document.getElementById("primerDiv").style.display = "block";
}

function cambiarColorFondo() {
    var color = prompt("Introduce un color en formato hexadecimal (por ejemplo, #ff0000 para rojo):");
    document.getElementById("primerDiv").style.backgroundColor = color;
}

function obtenerUbicacion() {
    navigator.geolocation.getCurrentPosition(function(position) {
        var latitud = position.coords.latitude;
        var longitud = position.coords.longitude;
        var ubicacion = "Latitud: " + latitud + ", Longitud: " + longitud;
        document.getElementById("ubicacion").innerText = ubicacion;
        initMap(latitud, longitud);
    });
}

function initMap(latitud, longitud) {
    var map = L.map('map').setView([latitud, longitud], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([latitud, longitud]).addTo(map)
        .bindPopup('¡Estás aquí!')
        .openPopup();
}
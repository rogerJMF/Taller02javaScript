function crearFilaConTresCeldas(tabla, contenido1, contenido2, contenido3) {
    var fila = document.createElement("tr");
    var celda1 = document.createElement("td");
    var celda2 = document.createElement("td");
    var celda3 = document.createElement("td");
    celda1.innerHTML = contenido1;
    celda2.innerHTML = contenido2;
    celda3.innerHTML = contenido3;
    fila.appendChild(celda1);
    fila.appendChild(celda2);
    fila.appendChild(celda3);
    tabla.appendChild(fila);
}

function crearTituloDeTabla(tabla, titulo) {
    var fila = document.createElement("tr");
    var celda = document.createElement("td");
    celda.colSpan = 3;
    celda.style.textAlign = "center"; 
    celda.innerHTML = `<h2>${titulo}</h2>`;
    fila.appendChild(celda);
    tabla.appendChild(fila);
}

var tablaCosasFavoritas = document.getElementById("TablaCosasFavoritas");

crearTituloDeTabla(tablaCosasFavoritas, "15 + Web Design Projects With Source Code...!");

crearFilaConTresCeldas(tablaCosasFavoritas, 
    '<img src="Recursos/Perritos.jpg" width="370" height="300"><br> Beagle Ingles &nbsp;&nbsp; <button>Beagle Ingles</button> &nbsp; &nbsp; &nbsp;&nbsp; <button>Beagle Americano</button>',
    '<img src="Recursos/Football.webp" width="390px" height="300px"><br> Microfutbol &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <button>Microfutbol</button>&nbsp;&nbsp;&nbsp; <button>Futbol Profesional</button>',
    '<img src="Recursos/Comida_.jpg" width="385" height="300"><br> Hamburguesa &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <button>Hamburguesa</button>&nbsp;&nbsp;&nbsp;&nbsp; <button>Pastas</button>'
);

crearFilaConTresCeldas(tablaCosasFavoritas, 
    '<img src="Recursos/Caballos.jpg" width="370" height="300"><br> Fino &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <button>Fino</button> &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button>Garrocha</button>',
    '<img src="Recursos/MT09.jpg" width="390px" height="300px"><br> Alto cilindraje &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp; <button>Alto cilindraje</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <button>Bajo cilindraje</button>',
    '<img src="Recursos/Carros.jpeg" width="385" height="300"><br> Deportivos &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; <button>Deportivos</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <button>Carreras</button>'
 );
document.getElementById("bookForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const nombre = document.getElementById("nombre").value.trim();
  const titulo = document.getElementById("titulo").value.trim();

  // Mensaje accesible y dinámico
  const mensaje = document.getElementById("mensaje");
  mensaje.textContent = `¡Gracias, ${nombre}! Hemos recibido tu sugerencia del libro "${titulo}".`;

  this.reset();
});

// --- Efecto visual para el header al hacer scroll ---
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// --- BUSCADOR EN CATÁLOGO CON ESTADO ---
const buscador = document.getElementById("buscador");
const filas = document.querySelectorAll("table tbody tr");
const estado = document.getElementById("estado-busqueda");

buscador.addEventListener("input", function () {
  const texto = this.value.toLowerCase().trim();
  let coincidencias = 0;

  filas.forEach(fila => {
    const visible = fila.textContent.toLowerCase().includes(texto);
    fila.style.display = visible || texto === "" ? "" : "none";
    if (visible) coincidencias++;
  });

  if (texto === "") {
    estado.textContent = "Empieza a escribir...";
    estado.style.color = "#003c6d";
  } else if (coincidencias > 0) {
    estado.textContent = "✅ Sí lo tenemos en stock.";
    estado.style.color = "green";
  } else {
    estado.textContent = "❌ No tenemos este título, ¡sugierelo!";
    estado.style.color = "red";
  }
});




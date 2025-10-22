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

const resultados = document.getElementById("resultados");

buscador.addEventListener("input", function() {
  const texto = this.value.toLowerCase();
  let contador = 0;

  filas.forEach(fila => {
    const visible = fila.textContent.toLowerCase().includes(texto);
    fila.style.display = visible ? "" : "none";
    if (visible) contador++;
  });

  resultados.textContent = `Se encontraron ${contador} resultados.`;
});



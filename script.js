// ==========================================
// 1. Año dinámico en el footer
// ==========================================
document.getElementById("year").textContent = new Date().getFullYear();

// ==========================================
// 2. Menú mobile (toggle)
// ==========================================
const navToggle = document.getElementById("navToggle");
const nav = document.querySelector(".nav");

navToggle.addEventListener("click", () => {
  nav.classList.toggle("open");
});

// ==========================================
// 3. Efecto de "escritura" en la terminal del hero
// ==========================================
const typedOutput = document.getElementById("typedOutput");
const textToType = "developer_junior — aprendiendo cada día ✦";
let charIndex = 0;

function typeWriter() {
  if (charIndex < textToType.length) {
    typedOutput.textContent += textToType.charAt(charIndex);
    charIndex++;
    setTimeout(typeWriter, 45);
  }
}

// Respeta la preferencia de "reduced motion" del usuario
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
if (prefersReducedMotion) {
  typedOutput.textContent = textToType;
} else {
  typeWriter();
}

// ==========================================
// 4. Proyectos: se cargan desde un array de datos
//    (así aprendés a separar datos de presentación,
//    y en el futuro esto podría venir de una API)
// ==========================================
const proyectos = [
  {
    tag: "// vanilla js",
    titulo: "To-Do List",
    descripcion: "Lista de tareas con guardado en localStorage. Agregar, completar y borrar tareas.",
    demo: "#",
    codigo: "#",
  },
  {
    tag: "// api pública",
    titulo: "Buscador de Clima",
    descripcion: "Consulta el clima de cualquier ciudad usando fetch() y una API pública.",
    demo: "#",
    codigo: "#",
  },
  {
    tag: "// css + js",
    titulo: "Calculadora",
    descripcion: "Calculadora funcional con operaciones básicas y teclado numérico.",
    demo: "#",
    codigo: "#",
  },
  {
    tag: "// próximamente",
    titulo: "Tu próximo proyecto",
    descripcion: "Acá vas a sumar el siguiente escalón: React, una API propia, o lo que se te ocurra.",
    demo: null,
    codigo: null,
  },
];

const grid = document.getElementById("projectsGrid");

proyectos.forEach((proyecto) => {
  const card = document.createElement("article");
  card.className = "project-card";

  const links = proyecto.demo
    ? `<div class="project-card__links">
         <a href="${proyecto.demo}" target="_blank" rel="noopener">Ver demo →</a>
         <a href="${proyecto.codigo}" target="_blank" rel="noopener">Código</a>
       </div>`
    : "";

  card.innerHTML = `
    <span class="project-card__tag">${proyecto.tag}</span>
    <h3>${proyecto.titulo}</h3>
    <p>${proyecto.descripcion}</p>
    ${links}
  `;

  grid.appendChild(card);
});

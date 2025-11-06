document.addEventListener("DOMContentLoaded", () => {

  // --- Mostrar / ocultar el panel ---
  const iconoAccesibilidad = document.querySelector("#iconoAccesibilidad");
  const panel = document.querySelector("#panelAccesibilidad");
  const body = document.querySelector("body");

  iconoAccesibilidad.addEventListener("click", () => {
    panel.classList.toggle("oculto");
  });

  // --- Modos de accesibilidad ---
  document.querySelector("#modoOscuro").addEventListener("click", () => {
    body.classList.remove("modo-monocromo", "modo-contraste", "destacar-enlaces");
    body.classList.toggle("modo-oscuro");
  });

  document.querySelector("#modoMonocromo").addEventListener("click", () => {
    body.classList.remove("modo-oscuro", "modo-contraste", "destacar-enlaces");
    body.classList.add("modo-monocromo");
  });

  document.querySelector("#modoContraste").addEventListener("click", () => {
    body.classList.remove("modo-oscuro", "modo-monocromo", "destacar-enlaces");
    body.classList.add("modo-contraste");
  });

  document.querySelector("#destacarEnlaces").addEventListener("click", () => {
    body.classList.remove("modo-oscuro", "modo-monocromo", "modo-contraste");
    body.classList.add("destacar-enlaces");
  });

  document.querySelector("#reiniciar").addEventListener("click", () => {
    body.className = "";
  });
});
  
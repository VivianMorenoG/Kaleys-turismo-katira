
if (typeof document !== "undefined") {
  //TODO código del navegador

  document.querySelectorAll("nav a").forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const destino = document.querySelector(this.getAttribute("href"));

      if (destino) {
        destino.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });
  //BOTON ARRIBA
  const btnTop = document.createElement("button");
  btnTop.id = "btnTop";
  btnTop.innerHTML = "↑";
  btnTop.title = "Volver al inicio";

  document.body.appendChild(btnTop);

  window.addEventListener("scroll", () => {
    btnTop.style.display = window.scrollY > 300 ? "block" : "none";
  });

  btnTop.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  const year = new Date().getFullYear();
  const footer = document.querySelector("footer");

  if (footer) {
    footer.innerHTML += `
            <p>© ${year} Kaley's Turismo en Katira</p>
        `;
  }
}

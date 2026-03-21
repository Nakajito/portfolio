document.addEventListener("DOMContentLoaded", function () {
  // Seleccionamos la columna derecha entera (donde están los posts y la paginación)
  const mainContent = document.querySelector(".blog-main");

  function setupFilters() {
    const checkboxes = document.querySelectorAll(".filter-checkbox");

    checkboxes.forEach((box) => {
      // Removemos eventos previos para evitar duplicados si se recarga el DOM
      box.replaceWith(box.cloneNode(true));
    });

    // Volvemos a seleccionar tras clonar
    document.querySelectorAll(".filter-checkbox").forEach((box) => {
      box.addEventListener("change", function () {
        const checkboxes = document.querySelectorAll(".filter-checkbox");
        const checkedValues = Array.from(checkboxes)
          .filter((i) => i.checked)
          .map((i) => i.value);

        const url = new URL(window.location.href);
        url.searchParams.delete("category");
        url.searchParams.delete("page");

        checkedValues.forEach((val) =>
          url.searchParams.append("category", val),
        );

        // 1. Efecto visual: Desvanecemos un poco los posts actuales
        mainContent.style.opacity = "0.3";

        // 2. Buscamos la nueva información en segundo plano
        fetch(url)
          .then((response) => response.text())
          .then((html) => {
            // 3. Convertimos el texto a HTML real
            const parser = new DOMParser();
            const doc = parser.parseFromString(html, "text/html");

            // 4. Extraemos SOLO la nueva columna derecha y la reemplazamos
            const newMainContent = doc.querySelector(".blog-main").innerHTML;
            mainContent.innerHTML = newMainContent;

            // 5. Devolvemos la opacidad a 1 (Efecto de aparición)
            mainContent.style.opacity = "1";

            // 6. Actualizamos la URL del navegador sin recargar la página
            window.history.pushState({}, "", url);
          })
          .catch((error) => {
            console.error("Error al filtrar:", error);
            mainContent.style.opacity = "1";
          });
      });
    });
  }

  // Inicializamos los filtros la primera vez
  setupFilters();
});

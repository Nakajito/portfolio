document.addEventListener("DOMContentLoaded", () => {
  const themeSwitchBtn = document.querySelector(".theme-switch");
  const htmlElement = document.documentElement;

  // 1. Revisar si hay un tema guardado en localStorage
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    htmlElement.setAttribute("data-theme", savedTheme);
    updateIcon(savedTheme);
  }

  // 2. Lógica de cambio al hacer clic
  themeSwitchBtn.addEventListener("click", () => {
    const currentTheme = htmlElement.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";

    // Aplicar el nuevo tema
    htmlElement.setAttribute("data-theme", newTheme);

    // Guardarlo para futuras visitas
    localStorage.setItem("theme", newTheme);

    // Cambiar el icono (Opcional, ver paso 3)
    updateIcon(newTheme);
  });

  // 3. Función para cambiar el ícono de Luna a Sol
  function updateIcon(theme) {
    if (theme === "dark") {
      // Icono de Sol (Modo Oscuro)
      themeSwitchBtn.innerHTML = `
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="12" cy="12" r="5"></circle>
                    <line x1="12" y1="1" x2="12" y2="3"></line>
                    <line x1="12" y1="21" x2="12" y2="23"></line>
                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                    <line x1="1" y1="12" x2="3" y2="12"></line>
                    <line x1="21" y1="12" x2="23" y2="12"></line>
                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                </svg>`;
    } else {
      // Icono de Luna (Modo Claro - el que ya tenías)
      themeSwitchBtn.innerHTML = `
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                </svg>`;
    }
  }

  // --- Lógica del Menú Hamburguesa ---
  const hamburgerBtn = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");
  const navLinks = document.querySelectorAll(".nav-link");

  if (hamburgerBtn && navMenu) {
    hamburgerBtn.addEventListener("click", () => {
      // Activar/desactivar el menú
      navMenu.classList.toggle("active");

      // Cambiar el icono (Hamburguesa a X y viceversa)
      if (navMenu.classList.contains("active")) {
        // Icono de "X"
        hamburgerBtn.innerHTML = `
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>`;
      } else {
        // Icono de "Hamburguesa"
        hamburgerBtn.innerHTML = `
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <line x1="3" y1="12" x2="21" y2="12"></line>
                        <line x1="3" y1="6" x2="21" y2="6"></line>
                        <line x1="3" y1="18" x2="21" y2="18"></line>
                    </svg>`;
      }
    });

    // Cerrar el menú automáticamente cuando el usuario toca un enlace
    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("active");
        hamburgerBtn.innerHTML = `
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <line x1="3" y1="12" x2="21" y2="12"></line>
                        <line x1="3" y1="6" x2="21" y2="6"></line>
                        <line x1="3" y1="18" x2="21" y2="18"></line>
                    </svg>`;
      });
    });
  }
});

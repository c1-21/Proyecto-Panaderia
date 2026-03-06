// ===============================
// HEADER DINÁMICO (estructura optimizada con enlace en el logo)
// ===============================
const headerContainer = document.getElementById("header-container");

// Detectar si la página está en una subcarpeta
const pathPrefix = location.pathname.includes("/secciones/") ? "../" : "";

if (headerContainer) {
  headerContainer.innerHTML = `
    <header class="header">
      <div class="header-inner">
        <!-- Logo con enlace a index.html -->
        <a href="${pathPrefix}index.html" class="logo-wrapper">
          <img src="${pathPrefix}imagenes/logo.png" alt="Logo Panadería Virgen del Rocío" class="logo-img" />
          <div class="logo-text-wrapper">
            <h1 class="logo-text">Panadería-Pastelería Ntra. Sñra. Virgen del Rocío</h1>
          </div>
        </a>
      </div>
    </header>

    <nav class="main-nav">
      <div class="nav-container">
        <a href="${pathPrefix}index.html#productos-artesanos">Inicio</a>
        <a href="${pathPrefix}secciones/pan.html">Panadería</a>
        <a href="${pathPrefix}secciones/pasteleriaTradicional.html">Pastelería Tradicional</a>
        <a href="${pathPrefix}secciones/pasteleria.html">Pastelería</a>
        <a href="${pathPrefix}index.html#contacto">Contacto</a>
      </div>
    </nav>

    <a href="https://wa.me/34680616522" target="_blank" class="whatsapp-float">
      <i class="fab fa-whatsapp"></i>
    </a>
  `;

  // Parallax hero
  const hero = document.querySelector(".hero");
  if (hero) {
    window.addEventListener("scroll", () => {
      const scrollPos = window.scrollY;
      hero.style.backgroundPosition = `center ${scrollPos * 0.4}px`;
    });
  }

  // Cambio de navbar al hacer scroll
  const navbar = document.querySelector(".main-nav");
  if (navbar) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        navbar.style.background = "#4a2f21";
        navbar.style.boxShadow = "0 4px 12px rgba(0,0,0,0.2)";
      } else {
        navbar.style.background = "#5a3e2b";
        navbar.style.boxShadow = "none";
      }
    });
  }

  // Scroll suave para anclas internas
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });
}

// Cabecera compartida en la página principal y en las secciones.
const headerContainer = document.getElementById("header-container");
const pathPrefix = location.pathname.includes("/secciones/") ? "../" : "";

if (headerContainer) {
  headerContainer.innerHTML = `
    <header class="header">
      <div class="header-inner">
        <a href="${pathPrefix}index.html" class="logo-wrapper" aria-label="Ir al inicio">
          <img src="${pathPrefix}imagenes/logo-transparente.png" alt="Logotipo de Nuestra Señora Virgen del Rocío" class="logo-img" />
          <div class="logo-text-wrapper">
            <span class="logo-kicker">Panadería · Pastelería artesanal</span>
            <span class="logo-text"><span class="logo-name-main">Panadería-Pastelería</span><span class="logo-name-secondary">Nuestra Señora Virgen del Rocío</span></span>
            <span class="logo-subtext">Tradición y sabor en Almargen</span>
          </div>
        </a>
      </div>
    </header>
    <nav class="main-nav" aria-label="Navegación principal">
      <div class="nav-container">
        <a href="${pathPrefix}index.html">Inicio</a>
        <a href="${pathPrefix}secciones/pan.html">Panadería</a>
        <a href="${pathPrefix}secciones/pasteleriaTradicional.html">Pastelería tradicional</a>
        <a href="${pathPrefix}secciones/pasteleria.html">Tartas y encargos</a>
        <a href="${pathPrefix}index.html#contacto">Contacto</a>
      </div>
    </nav>
    <a href="https://wa.me/34680616522" target="_blank" rel="noopener" class="whatsapp-float" aria-label="Contactar por WhatsApp">
      <i class="fab fa-whatsapp" aria-hidden="true"></i>
    </a>
  `;

  // Fija la navegación al llegar a la parte superior de la pantalla.
  // El espacio reservado evita que el contenido dé un salto al fijarse.
  const mainNav = headerContainer.querySelector(".main-nav");
  if (mainNav) {
    const navSpacer = document.createElement("div");
    navSpacer.className = "main-nav-spacer";
    navSpacer.setAttribute("aria-hidden", "true");
    navSpacer.style.display = "none";
    mainNav.parentNode.insertBefore(navSpacer, mainNav);

    let navDocumentTop = mainNav.getBoundingClientRect().top + window.scrollY;
    let isNavFixed = false;

    const updateNavPosition = () => {
      const shouldFix = window.scrollY >= navDocumentTop;
      if (shouldFix === isNavFixed) return;

      isNavFixed = shouldFix;
      if (isNavFixed) {
        navSpacer.style.height = `${mainNav.offsetHeight}px`;
        navSpacer.style.display = "block";
        mainNav.classList.add("nav-is-fixed");
      } else {
        mainNav.classList.remove("nav-is-fixed");
        navSpacer.style.display = "none";
        navSpacer.style.height = "0px";
      }
    };

    const recalculateNavPosition = () => {
      if (!isNavFixed) {
        navDocumentTop = mainNav.getBoundingClientRect().top + window.scrollY;
      } else {
        navSpacer.style.height = `${mainNav.offsetHeight}px`;
      }
      updateNavPosition();
    };

    window.addEventListener("scroll", updateNavPosition, { passive: true });
    window.addEventListener("resize", recalculateNavPosition);
    window.addEventListener("orientationchange", () => {
      window.setTimeout(recalculateNavPosition, 150);
    });
    updateNavPosition();
  }

  document.querySelectorAll('a[href*="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (event) {
      const url = new URL(this.href, location.href);
      if (url.pathname === location.pathname && url.hash) {
        const target = document.querySelector(url.hash);
        if (target) {
          event.preventDefault();
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    });
  });
}

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
        <a href="${pathPrefix}index.html" data-nav="inicio"><span class="nav-label-desktop">Inicio</span><span class="nav-label-mobile">INICIO</span></a>
        <a href="${pathPrefix}secciones/pan.html" data-nav="panaderia"><span class="nav-label-desktop">Panadería</span><span class="nav-label-mobile">PANADERÍA</span></a>
        <a href="${pathPrefix}secciones/pasteleriaTradicional.html" data-nav="pasteleria"><span class="nav-label-desktop">Pastelería tradicional</span><span class="nav-label-mobile">PASTELERÍA</span></a>
        <a href="${pathPrefix}secciones/pasteleria.html" data-nav="encargos"><span class="nav-label-desktop">Tartas y encargos</span><span class="nav-label-mobile">ENCARGOS</span></a>
        <a href="${pathPrefix}index.html#contacto" data-nav="contacto"><span class="nav-label-desktop">Contacto</span><span class="nav-label-mobile">CONTACTO</span></a>
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

  // Resalta la opción correspondiente a la página o apartado visible.
  const navLinks = [...headerContainer.querySelectorAll(".nav-container a[data-nav]")];
  const setActiveNav = (name) => {
    navLinks.forEach((link) => {
      const active = link.dataset.nav === name;
      link.classList.toggle("is-active", active);
      if (active) link.setAttribute("aria-current", "page");
      else link.removeAttribute("aria-current");
    });
  };

  const currentPath = location.pathname;
  if (currentPath.endsWith("/secciones/pan.html")) setActiveNav("panaderia");
  else if (currentPath.endsWith("/secciones/pasteleriaTradicional.html")) setActiveNav("pasteleria");
  else if (currentPath.endsWith("/secciones/pasteleria.html")) setActiveNav("encargos");
  else {
    setActiveNav(location.hash === "#contacto" ? "contacto" : "inicio");
    const homeSections = [
      { selector: ".sobre-nosotros", nav: "inicio" },
      { selector: "#productos-artesanos", nav: "panaderia" },
      { selector: "#especialidades", nav: "pasteleria" },
      { selector: "#contacto", nav: "contacto" }
    ];
    const observedSections = homeSections
      .map((item) => ({ ...item, element: document.querySelector(item.selector) }))
      .filter((item) => item.element);

    if ("IntersectionObserver" in window && observedSections.length) {
      const visibleSections = new Map();
      const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          const item = observedSections.find((section) => section.element === entry.target);
          if (item) visibleSections.set(item.nav, entry.isIntersecting ? entry.intersectionRatio : 0);
        });
        const current = [...visibleSections.entries()]
          .filter(([, ratio]) => ratio > 0)
          .sort((a, b) => b[1] - a[1])[0];
        if (current) setActiveNav(current[0]);
      }, { rootMargin: "-22% 0px -58% 0px", threshold: [0, 0.1, 0.25, 0.5] });
      observedSections.forEach((item) => sectionObserver.observe(item.element));
    }
  }
}

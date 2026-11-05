// ===============================
// PARALLAX HERO
// ===============================
const hero = document.querySelector(".hero");

if (hero) {
  window.addEventListener("scroll", () => {
    const scrollPos = window.scrollY;
    hero.style.backgroundPosition = `center ${scrollPos * 0.4}px`;
  });
}

// ===============================
// NAVBAR EFECTO SCROLL
// ===============================
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

// ===============================
// SCROLL SUAVE PARA ENLACES INTERNOS
// ===============================
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

// ===============================
// ANIMACIÓN DE ENTRADA (Fade-Up Scroll Reveal)
// ===============================
const observerOptions = {
  threshold: 0.2,
  rootMargin: "0px 0px -50px 0px",
};

const fadeUpObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Aplicar clase inicial a secciones, productos y contacto
document
  .querySelectorAll(".section, .card, .contacto-card, .producto")
  .forEach((el) => {
    el.classList.add("fade-up"); // clase inicial
    fadeUpObserver.observe(el);
  });

// ===============================
// BOTÓN VOLVER ARRIBA
// ===============================
const backToTop = document.createElement("div");
backToTop.innerHTML = '<i class="fas fa-chevron-up"></i>';
backToTop.classList.add("back-to-top");
document.body.appendChild(backToTop);

// Estilos dinámicos
Object.assign(backToTop.style, {
  position: "fixed",
  bottom: "180px",
  right: "25px",
  width: "50px",
  height: "50px",
  background: "#8b5e3c",
  color: "#fff8f0",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "50%",
  cursor: "pointer",
  boxShadow: "0 6px 15px rgba(0,0,0,0.3)",
  opacity: "0",
  transition: "all 0.3s ease",
  zIndex: "999",
  fontSize: "22px",
});

// Mostrar u ocultar botón según scroll
window.addEventListener("scroll", () => {
  if (window.scrollY > 400) {
    backToTop.style.opacity = "1";
  } else {
    backToTop.style.opacity = "0";
  }
});

// Acción botón volver arriba
backToTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

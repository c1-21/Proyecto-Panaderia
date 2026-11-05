// Pie de página compartido.
const footerContainer = document.getElementById("footer-container");
const footerPrefix = location.pathname.includes("/secciones/") ? "../" : "";
if (footerContainer) {
  footerContainer.innerHTML = `
    <footer class="footer">
      <div class="footer-inner">
        <a href="${footerPrefix}index.html" class="footer-brand-lockup" aria-label="Volver al inicio">
          <img src="${footerPrefix}imagenes/logo-transparente.png" alt="Logotipo de Nuestra Señora Virgen del Rocío" class="footer-logo" />
          <span class="footer-brand"><strong>Panadería-Pastelería</strong><span class="footer-brand-name">Nuestra Señora Virgen del Rocío</span><small class="footer-tagline">Artesanal, fresco y tradicional · Almargen</small></span>
        </a>
        <div class="footer-contact">
          <a href="https://www.google.com/maps/search/?api=1&query=Calle+San+Andres+12+Almargen+Malaga" target="_blank" rel="noopener"><i class="fas fa-map-marker-alt"></i>Calle San Andrés, 12 · Almargen</a>
          <a href="tel:+34952182615"><i class="fas fa-phone"></i>952 182 615</a>
          <a href="mailto:info@panaderiavirgendelrocio.com"><i class="fas fa-envelope"></i>Contacto por email</a>
        </div>
        <p class="copyright">&copy; 2026 Panadería-Pastelería Ntra. Sra. Virgen del Rocío. Todos los derechos reservados.</p>
        <nav class="footer-legal" aria-label="Información legal">
          <a href="${footerPrefix}aviso-legal.html">Aviso legal</a>
          <a href="${footerPrefix}privacidad.html">Política de privacidad</a>
          <a href="${footerPrefix}cookies.html">Política de cookies</a>
        </nav>
        <p class="footer-credit">Diseño web realizado por <a href="https://icomtec.es/" target="_blank" rel="noopener noreferrer">ICOMTEC</a></p>
      </div>
    </footer>
  `;
}

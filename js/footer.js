// ===============================
// FOOTER DINÁMICO (estructura optimizada)
// ===============================
const footerContainer = document.getElementById("footer-container");

// Asegurar que pathPrefix tiene un valor, por si no está definido
const pathPrefixSafe = typeof pathPrefix !== "undefined" ? pathPrefix : "../";

if (footerContainer) {
  footerContainer.innerHTML = `
    <footer class="footer">
      <div class="footer-inner">
        <!-- Logo con enlace al index -->
        <a href="../index.html">
          <img src="${pathPrefixSafe}imagenes/logo.png" alt="Logo Panadería Virgen del Rocío" class="footer-logo" />
        </a>

        <!-- Texto de derechos -->
        <p>&copy; 2026 Panadería Pastelería Ntra Sñra Virgen del Rocío. Todos los derechos reservados.</p>
        <p class="footer-tagline">Artesanal, fresco y tradicional</p>

        <!-- Redes sociales opcional -->
        <!--
        <div class="footer-social">
          <a href="#" class="social-icon"><i class="fab fa-facebook-f"></i></a>
          <a href="#" class="social-icon"><i class="fab fa-instagram"></i></a>
          <a href="#" class="social-icon"><i class="fab fa-whatsapp"></i></a>
        </div>
        -->
      </div>
    </footer>
  `;
}

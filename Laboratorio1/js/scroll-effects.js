function initScrollReveal() {
  var revealEls = document.querySelectorAll(
    '.card, .galeria-item, .nosotros-texto, .nosotros-imagen, ' +
    '.contacto-info, .mapa-wrapper, .galeria h2, .productos h2, ' +
    '.contacto h2'
  );

  revealEls.forEach(function (el) {
    el.classList.add('reveal');
  });

  // Nosotros: texto desde la izquierda, imagen desde la derecha
  var nosotrosTexto = document.querySelector('.nosotros-texto');
  var nosotrosImg   = document.querySelector('.nosotros-imagen');
  if (nosotrosTexto) nosotrosTexto.classList.add('reveal--left');
  if (nosotrosImg)   nosotrosImg.classList.add('reveal--right');

  // Activar .visible al entrar al viewport
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // solo una vez
      }
    });
  }, { threshold: 0.12 });

  revealEls.forEach(function (el) {
    observer.observe(el);
  });
}

function initHeroParallax() {
  var hero = document.querySelector('.hero');

  if (!hero) return;

  window.addEventListener('scroll', function () {
    var scrollY = window.scrollY;
    hero.style.backgroundPositionY = (scrollY * 0.4) + 'px';
  }, { passive: true });
}
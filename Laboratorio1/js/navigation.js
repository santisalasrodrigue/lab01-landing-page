function initHamburgerMenu() {
  var hamburger = document.getElementById('hamburger');
  var navLinks  = document.querySelector('.nav-links');

  if (!hamburger || !navLinks) return;

  hamburger.addEventListener('click', function () {
    var isOpen = navLinks.classList.toggle('mobile-open');
    hamburger.classList.toggle('open', isOpen);
    hamburger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  // Cerrar menú al hacer clic en cualquier enlace
  navLinks.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      navLinks.classList.remove('mobile-open');
      hamburger.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
    });
  });
}

function initMenuTabs() {
  var tabBtns   = document.querySelectorAll('.tab-btn');
  var tabPanels = document.querySelectorAll('.tab-panel');

  if (tabBtns.length === 0) return;

  tabBtns.forEach(function (btn) {

    btn.addEventListener('click', function () {
      var targetTab = btn.getAttribute('data-tab');

      tabBtns.forEach(function (b) {
        b.classList.remove('tab-btn--active');
        b.setAttribute('aria-selected', 'false');
      });

      tabPanels.forEach(function (p) {
        p.classList.add('tab-panel--hidden');
      });

      btn.classList.add('tab-btn--active');
      btn.setAttribute('aria-selected', 'true');

      var panel = document.getElementById('tab-' + targetTab);
      if (panel) {
        panel.classList.remove('tab-panel--hidden');
      }
    });

    // Accesibilidad: activar con teclado
    btn.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        btn.click();
      }
    });
  });
}
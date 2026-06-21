function initTheme() {
  var toggleBtn = document.getElementById('darkToggle');
  var body = document.body;

  if (!toggleBtn) return;

  var modoGuardado = localStorage.getItem('darkMode');

  if (modoGuardado === 'activado') {
    body.classList.add('dark');
    toggleBtn.textContent = '☀️';
    toggleBtn.setAttribute('aria-pressed', 'true');
    toggleBtn.setAttribute('aria-label', 'Desactivar modo oscuro');
  }

  toggleBtn.addEventListener('click', function () {
    var estaActivo = body.classList.contains('dark');

    if (estaActivo) {
      body.classList.remove('dark');
      toggleBtn.textContent = '🌙';
      toggleBtn.setAttribute('aria-pressed', 'false');
      toggleBtn.setAttribute('aria-label', 'Activar modo oscuro');
      localStorage.setItem('darkMode', 'desactivado');
    } else {
      body.classList.add('dark');
      toggleBtn.textContent = '☀️';
      toggleBtn.setAttribute('aria-pressed', 'true');
      toggleBtn.setAttribute('aria-label', 'Desactivar modo oscuro');
      localStorage.setItem('darkMode', 'activado');
    }
  });
}
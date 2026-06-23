function initFontSizeControls() {
  var btnIncrease = document.getElementById('fontIncrease');
  var btnDecrease = document.getElementById('fontDecrease');
  var htmlEl      = document.documentElement;

  var FONT_KEY  = 'jungleFontSize';
  var FONT_MIN  = 80;   // porcentaje mínimo
  var FONT_MAX  = 150;  // porcentaje máximo
  var FONT_STEP = 10;   // incremento por clic

  function aplicarTamanoFuente(porcentaje) {
    htmlEl.style.fontSize = porcentaje + '%';
    localStorage.setItem(FONT_KEY, porcentaje);
  }

  function obtenerTamanoActual() {
    var guardado = localStorage.getItem(FONT_KEY);
    return guardado ? parseInt(guardado, 10) : 100;
  }

  // Aplicar tamaño guardado al cargar la página
  var tamanoActual = obtenerTamanoActual();
  aplicarTamanoFuente(tamanoActual);

  if (btnIncrease) {
    btnIncrease.addEventListener('click', function () {
      var actual = obtenerTamanoActual();
      var nuevo  = Math.min(actual + FONT_STEP, FONT_MAX);
      aplicarTamanoFuente(nuevo);
    });
  }

  if (btnDecrease) {
    btnDecrease.addEventListener('click', function () {
      var actual = obtenerTamanoActual();
      var nuevo  = Math.max(actual - FONT_STEP, FONT_MIN);
      aplicarTamanoFuente(nuevo);
    });
  }
}
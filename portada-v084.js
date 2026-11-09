/* Gesto móvil de entrada. Reutiliza el botón y su animación existente. */
document.addEventListener('DOMContentLoaded', () => {
  const portada = document.getElementById('portada');
  const entrar = document.getElementById('entrar');
  if (!portada || !entrar) return;
  let inicio = null;
  portada.addEventListener('touchstart', (event) => {
    if (event.touches.length !== 1) return;
    inicio = {x:event.touches[0].clientX,y:event.touches[0].clientY};
  }, {passive:true});
  portada.addEventListener('touchend', (event) => {
    if (!inicio || portada.hidden || portada.classList.contains('saliendo')) return;
    const punto = event.changedTouches[0];
    const dx = punto.clientX - inicio.x;
    const dy = punto.clientY - inicio.y;
    inicio = null;
    if (dy < -85 && Math.abs(dy) > Math.abs(dx) * 1.4) entrar.click();
  }, {passive:true});
  portada.addEventListener('touchcancel', () => { inicio = null; }, {passive:true});
});

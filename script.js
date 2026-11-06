const portada = document.getElementById('portada');
const interior = document.getElementById('interior');
const entrar = document.getElementById('entrar');
const volver = document.getElementById('volver');
const mensaje = document.getElementById('mensaje');
const movimientoReducido = window.matchMedia('(prefers-reduced-motion: reduce)');

entrar.addEventListener('click', () => {
  entrar.disabled = true;
  portada.classList.add('saliendo');
  window.setTimeout(() => {
    portada.hidden = true;
    interior.hidden = false;
    document.getElementById('interior-titulo').setAttribute('tabindex', '-1');
    document.getElementById('interior-titulo').focus();
  }, movimientoReducido.matches ? 0 : 700);
});

volver.addEventListener('click', () => {
  interior.hidden = true;
  portada.hidden = false;
  portada.classList.remove('saliendo');
  entrar.disabled = false;
  entrar.focus();
});

document.querySelectorAll('[data-room]').forEach(boton => {
  boton.addEventListener('click', () => {
    const habitacion = boton.dataset.room;
    mensaje.textContent = habitacion === '315'
      ? 'La habitación 315 permanece cerrada. Volveremos a ella más adelante.'
      : `El contenido de ${habitacion === 'azotea' ? 'la azotea' : 'la habitación 312'} estará disponible próximamente.`;
  });
});

/* Escenografia decorativa: no modifica el comportamiento del hospital. */
document.addEventListener('DOMContentLoaded', () => {
  const pasillo = document.querySelector('#hospital .pasillo');
  if (!pasillo || pasillo.querySelector('.pasillo-escena')) return;
  const escena = document.createElement('div');
  escena.className = 'pasillo-escena';
  escena.setAttribute('aria-hidden', 'true');
  escena.innerHTML = `
    <div class="pasillo-escena__techo"></div>
    <div class="pasillo-escena__fluorescente pasillo-escena__fluorescente--uno"></div>
    <div class="pasillo-escena__fluorescente pasillo-escena__fluorescente--dos"></div>
    <div class="pasillo-escena__suelo"></div>
    <div class="pasillo-escena__pasamanos pasillo-escena__pasamanos--izq"></div>
    <div class="pasillo-escena__pasamanos pasillo-escena__pasamanos--der"></div>
    <div class="pasillo-escena__rojo"></div>
    <div class="pasillo-escena__sombra"></div>
    <div class="pasillo-escena__sombra pasillo-escena__sombra--dos"></div>`;
  pasillo.prepend(escena);
});

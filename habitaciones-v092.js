/* TIERRA DE NADIE v0.9.2 — animación de estancias sin modificar script.js */
(() => {
  'use strict';
  const estancia = document.getElementById('estancia');
  const escena = document.getElementById('estanciaEscena');
  const etiqueta = document.getElementById('estanciaEtiqueta');
  if (!estancia || !escena || !etiqueta) return;
  const nombres = ['fotografia','ambiente','rayo','polvo','sombra','monitor','lampara','nubes'];
  const capas = {};
  for (const nombre of nombres) {
    const div = document.createElement('div');
    div.className = 'tdn92-' + nombre;
    div.setAttribute('aria-hidden','true');
    escena.insertBefore(div, escena.firstChild);
    capas[nombre] = div;
  }
  const tipos = { '312':'312','315':'315',uci:'uci',azotea:'azotea',psicologia:'psicologia' };
  let ultimo = '';
  let contador = 0;
  function actualizar() {
    if (estancia.hidden) { ultimo = ''; return; }
    const fondo = escena.style.backgroundImage;
    const encontrado = fondo.match(/url\(["']?([^"')]+)["']?\)/i);
    const imagen = encontrado && encontrado[1];
    if (!imagen) return;
    const id = imagen.includes('habitacion-312')?'312':imagen.includes('habitacion-315')?'315':imagen.includes('uci.png')?'uci':imagen.includes('azotea.png')?'azotea':imagen.includes('gabinete.png')?'psicologia':'';
    if (!tipos[id]) return;
    const clave = id + '|' + imagen;
    if (clave === ultimo) return;
    ultimo = clave;
    estancia.dataset.tdn92Room = id;
    capas.fotografia.style.setProperty('--tdn92-imagen', `url("${imagen.replace(/"/g,'%22')}")`);
    estancia.classList.remove('tdn92-entrando');
    void estancia.offsetWidth;
    estancia.classList.add('tdn92-entrando');
    contador++;
  }
  const observador = new MutationObserver(actualizar);
  observador.observe(estancia,{attributes:true,attributeFilter:['hidden']});
  observador.observe(escena,{attributes:true,attributeFilter:['style']});
  actualizar();
})();

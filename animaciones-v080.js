/* Tierra de Nadie · v0.8.0 — cargar después de script.js */
(() => {
  'use strict';
  const reducir = window.matchMedia('(prefers-reduced-motion: reduce)');
  const replay = new WeakSet();
  let ocupada = false;

  function escena(tipo, rotulo, continuar, origen = null) {
    if (reducir.matches) { continuar(); return; }
    ocupada = true;
    const capa = document.createElement('div');
    capa.className = `tdn-transicion tdn-transicion--${tipo}`;
    capa.setAttribute('aria-hidden', 'true');
    capa.innerHTML = `<div class="tdn-transicion__fondo"></div><div class="tdn-transicion__rotulo"></div><div class="tdn-transicion__hoja tdn-transicion__hoja--izq"></div><div class="tdn-transicion__hoja tdn-transicion__hoja--der"></div><div class="tdn-transicion__libro"><div class="tdn-transicion__pagina tdn-transicion__pagina--izq"></div><div class="tdn-transicion__pagina tdn-transicion__pagina--der"></div><div class="tdn-transicion__caja"><div class="tdn-transicion__tapa"></div><div class="tdn-transicion__cuerpo"></div></div></div><div class="tdn-transicion__resplandor"></div>`;
    capa.querySelector('.tdn-transicion__rotulo').textContent = rotulo;
    if (tipo === 'zoom' && origen) {
      const rect = origen.getBoundingClientRect();
      const fotografia = document.createElement('div');
      fotografia.className = 'tdn-zoom-fotografia';
      const clon = origen.cloneNode(true);
      clon.removeAttribute('id');
      clon.removeAttribute('data-room');
      clon.removeAttribute('title');
      clon.classList.remove('estancia-bloqueada');
      clon.querySelectorAll('.indicador-bloqueo').forEach(n => n.remove());
      clon.style.cssText = 'width:100%;height:100%;margin:0;pointer-events:none;transform:none!important;filter:none!important;';
      fotografia.appendChild(clon);
      fotografia.style.left = `${rect.left}px`;
      fotografia.style.top = `${rect.top}px`;
      fotografia.style.width = `${rect.width}px`;
      fotografia.style.height = `${rect.height}px`;
      fotografia.style.setProperty('--tdn-dx', `${window.innerWidth / 2 - (rect.left + rect.width / 2)}px`);
      fotografia.style.setProperty('--tdn-dy', `${window.innerHeight / 2 - (rect.top + rect.height / 2)}px`);
      fotografia.style.setProperty('--tdn-escala', Math.max(window.innerWidth / Math.max(rect.width,1), window.innerHeight / Math.max(rect.height,1)) * 1.45);
      capa.appendChild(fotografia);
    }
    if (tipo === 'pasillo') {
      const plano = document.createElement('div');
      plano.className = 'tdn-plano';
      plano.innerHTML = '<div class="tdn-plano__techo"></div><div class="tdn-plano__pared-izq"></div><div class="tdn-plano__pared-der"></div><div class="tdn-plano__suelo"></div><div class="tdn-plano__puerta-marco"><div class="tdn-plano__luz"></div><div class="tdn-plano__puerta"><span class="tdn-plano__placa"></span><span class="tdn-plano__pomo"></span></div></div>';
      const placa = plano.querySelector('.tdn-plano__placa');
      placa.textContent = rotulo.replace('HABITACIÓN ', '');
      capa.appendChild(plano);
      const flash = document.createElement('div');
      flash.className = 'tdn-plano__flash';
      capa.appendChild(flash);
    }
    if (tipo === 'azotea') {
      capa.querySelector('.tdn-transicion__rotulo').textContent = '';
      const ascensor = document.createElement('div');
      ascensor.className = 'tdn-ascensor7';
      ascensor.innerHTML = `<div class="tdn-ascensor7__cabina">
        <div class="tdn-ascensor7__techo"></div>
        <div class="tdn-ascensor7__indicador" aria-label="Planta 3">03</div>
        <div class="tdn-ascensor7__marco">
          <div class="tdn-ascensor7__exterior"></div>
          <div class="tdn-ascensor7__puerta tdn-ascensor7__puerta--izq"></div>
          <div class="tdn-ascensor7__puerta tdn-ascensor7__puerta--der"></div>
        </div>
        <div class="tdn-ascensor7__suelo"></div>
      </div>`;
      capa.appendChild(ascensor);
      const indicador = ascensor.querySelector('.tdn-ascensor7__indicador');
      [3,4,5,6,7].forEach((planta, indice) => {
        setTimeout(() => {
          if (!capa.isConnected) return;
          indicador.textContent = String(planta).padStart(2, '0');
          indicador.setAttribute('aria-label', 'Planta ' + planta);
          if (planta === 7) capa.classList.add('tdn-ascensor7__llegada');
        }, 420 + indice * 580);
      });
    }
    document.body.append(capa);
    document.body.classList.add('tdn-en-transicion');
    requestAnimationFrame(() => requestAnimationFrame(() => capa.classList.add('activa')));
    const duracion = tipo === 'archivo' ? 2300 : tipo === 'azotea' ? 3700 : tipo === 'pasillo' ? 1950 : 1250;
    setTimeout(() => capa.classList.add('abriendo'), tipo === 'azotea' ? 3000 : 120);
    setTimeout(() => {
      try { continuar(); } finally {
        const espera = tipo === 'entrada' ? 650 : tipo === 'pasillo' ? 80 : 100;
        setTimeout(() => {
          capa.classList.add('saliendo');
          setTimeout(() => { capa.remove(); document.body.classList.remove('tdn-en-transicion'); ocupada = false; }, 350);
        }, espera);
      }
    }, duracion);
  }

  function interceptar(boton, tipo, titulo, bloqueado = false) {
    if (!boton) return;
    boton.addEventListener('click', evento => {
      if (replay.has(boton)) { replay.delete(boton); return; }
      if (reducir.matches || bloqueado) return;
      if (ocupada) { evento.stopImmediatePropagation(); evento.preventDefault(); return; }
      evento.stopImmediatePropagation();
      evento.preventDefault();
      escena(tipo, titulo, () => { replay.add(boton); boton.click(); });
    }, true);
  }

  // La entrada y el archivo se interceptan en el propio botón.
  interceptar(document.getElementById('entrar'), 'entrada', 'PLANTA 3');
  interceptar(document.getElementById('abrirArchivo'), 'archivo', 'EL ARCHIVO');

  // La intercepción de las estancias se realiza en fase de captura del documento:
  // así no entra en conflicto con el listener original de script.js.
  document.addEventListener('click', evento => {
    const boton = evento.target.closest?.('[data-room]');
    if (!boton) return;
    if (replay.has(boton)) { replay.delete(boton); return; }
    const id = boton.dataset.room;
    const bloqueada = (typeof estaEstanciaBloqueada === 'function' && estaEstanciaBloqueada(id)) || boton.classList.contains('estancia-bloqueada');
    if (bloqueada || reducir.matches) return;
    if (ocupada) { evento.stopPropagation(); evento.preventDefault(); return; }
    const nombres = {azotea:['azotea','LA AZOTEA'], psicologia:['psicologia','GABINETE DE PSICOLOGÍA'], uci:['pasillo','UCI'], '312':['pasillo','HABITACIÓN 312'], '315':['pasillo','HABITACIÓN 315']};
    if (!nombres[id]) return;
    evento.stopPropagation(); evento.preventDefault();
    escena(nombres[id][0], nombres[id][1], () => { replay.add(boton); boton.click(); }, boton);
  }, true);
})();

/* v0.8.0 · Indicador de sueño Zzz en todas las estancias bloqueadas */
(() => {
  'use strict';
  function prepararZzz() {
    document.querySelectorAll('.indicador-bloqueo__circulo').forEach(circulo => {
      if (circulo.dataset.tdnZzz === 'si') return;
      circulo.dataset.tdnZzz = 'si';
      circulo.setAttribute('aria-hidden', 'true');
      circulo.replaceChildren();
      ['Z', 'z', 'z'].forEach((letra, i) => {
        const span = document.createElement('span');
        span.className = 'tdn-zzz__letra tdn-zzz__letra--' + (i + 1);
        span.textContent = letra;
        circulo.appendChild(span);
      });
    });
  }
  prepararZzz();
  // El script original puede reconstruir indicadores al desbloquear habitaciones.
  const observador = new MutationObserver(prepararZzz);
  observador.observe(document.body, {childList: true, subtree: true});
})();

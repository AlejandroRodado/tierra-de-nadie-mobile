/* TIERRA DE NADIE v0.8.2 · Acceso administrador desde portada.
   Vista previa de interfaz, no autorización de contenido sensible del servidor. */
(() => {
  'use strict';
  const portada = document.getElementById('portada');
  const entrar = document.getElementById('entrar');
  const salir = document.getElementById('salirAdmin');
  if (!portada || !entrar || !salir || typeof db === 'undefined' ||
      typeof estaEstanciaBloqueada !== 'function') return;

  // Sustituye el antiguo admin-preview-v081.js; no cargar ambos.
  const bloqueoOriginal = estaEstanciaBloqueada;
  let vistaPrevia = false;
  estaEstanciaBloqueada = function (id) {
    return vistaPrevia && esAdministrador === true ? false : bloqueoOriginal(id);
  };

  const boton = document.createElement('button');
  boton.type = 'button';
  boton.className = 'tdn-acceso-admin';
  boton.textContent = 'ACCESO ADMINISTRADOR';
  entrar.insertAdjacentElement('afterend', boton);

  const estado = document.createElement('div');
  estado.className = 'tdn-admin-estado';
  estado.hidden = true;
  estado.innerHTML = '<span>● MODO ADMINISTRADOR</span><button type="button">CERRAR SESIÓN</button>';
  boton.insertAdjacentElement('afterend', estado);

  const modal = document.createElement('div');
  modal.className = 'tdn-admin-modal';
  modal.hidden = true;
  modal.innerHTML = `
    <div class="tdn-admin-modal__fondo" data-cerrar></div>
    <section class="tdn-admin-modal__panel" role="dialog" aria-modal="true" aria-labelledby="tdn-admin-titulo">
      <button class="tdn-admin-modal__cerrar" type="button" data-cerrar aria-label="Cerrar">×</button>
      <p>TIERRA DE NADIE · PERSONAL AUTORIZADO</p>
      <h2 id="tdn-admin-titulo">Acceso administrador</h2>
      <form id="tdn-admin-login">
        <label>Correo electrónico<input type="email" name="email" autocomplete="username" required></label>
        <label>Contraseña<input type="password" name="password" autocomplete="current-password" required></label>
        <button type="submit">INICIAR SESIÓN</button>
      </form>
      <p class="tdn-admin-modal__mensaje" role="status" aria-live="polite"></p>
    </section>`;
  document.body.appendChild(modal);
  const formulario = modal.querySelector('form');
  const mensaje = modal.querySelector('[role="status"]');
  const submit = formulario.querySelector('[type="submit"]');
  let focoPrevio = null;

  function sincronizar() {
    const activo = esAdministrador === true;
    if (!activo) vistaPrevia = false;
    boton.hidden = activo;
    estado.hidden = !activo;
    if (typeof actualizarBloqueosEstancias === 'function') actualizarBloqueosEstancias();
  }
  function cerrar() {
    modal.hidden = true;
    document.body.classList.remove('tdn-admin-modal-abierto');
    formulario.reset();
    mensaje.textContent = '';
    focoPrevio?.focus?.();
  }
  boton.addEventListener('click', () => {
    focoPrevio = document.activeElement;
    modal.hidden = false;
    document.body.classList.add('tdn-admin-modal-abierto');
    formulario.elements.email.focus();
  });
  modal.querySelectorAll('[data-cerrar]').forEach(el => el.addEventListener('click', cerrar));
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && !modal.hidden) cerrar();
  });

  formulario.addEventListener('submit', async e => {
    e.preventDefault();
    submit.disabled = true;
    mensaje.textContent = 'Comprobando credenciales...';
    try {
      const { error } = await db.auth.signInWithPassword({
        email: formulario.elements.email.value.trim(),
        password: formulario.elements.password.value
      });
      if (error) throw error;
      // Reutiliza la función y RPC es_admin_comentarios de script.js.
      const autorizado = await comprobarAdministrador();
      if (!autorizado) {
        await db.auth.signOut();
        esAdministrador = false;
        throw new Error('Esta cuenta no tiene permisos de administrador.');
      }
      vistaPrevia = true;
      sincronizar();
      cerrar();
    } catch (error) {
      mensaje.textContent = error.message === 'Esta cuenta no tiene permisos de administrador.'
        ? error.message : 'No se ha podido iniciar sesión. Revisa tus datos.';
      sincronizar();
    } finally { submit.disabled = false; }
  });

  estado.querySelector('button').addEventListener('click', async () => {
    await db.auth.signOut();
    esAdministrador = false;
    // Refresca también el estado de administración de comentarios.
    await comprobarAdministrador();
    sincronizar();
  });

  // Mantiene sincronizado el acceso si se inicia/cierra sesión desde comentarios.
  new MutationObserver(() => {
    if (salir.hidden) { vistaPrevia = false; }
    else if (esAdministrador === true) { vistaPrevia = true; }
    sincronizar();
  }).observe(salir, { attributes: true, attributeFilter: ['hidden'] });

  // Recupera sesiones válidas al recargar. La consulta de rol se hace en Supabase.
  (async () => {
    try {
      const { data: { user } } = await db.auth.getUser();
      if (user) {
        const autorizado = await comprobarAdministrador();
        vistaPrevia = autorizado === true;
      }
    } catch (e) { console.warn('No se pudo recuperar la sesión de administrador.', e); }
    sincronizar();
  })();
})();

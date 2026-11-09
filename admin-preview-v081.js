/* Tierra de Nadie · Previsualización de administrador v0.8.1
   IMPORTANTE: es una comodidad de interfaz, NO un sistema de seguridad.
   Los contenidos confidenciales deben protegerse en Supabase (RLS/API). */
(() => {
  'use strict';
  const salir = document.getElementById('salirAdmin');
  if (!salir || typeof estaEstanciaBloqueada !== 'function') return;
  let vistaPrevia = false;
  const comprobacionOriginal = estaEstanciaBloqueada;
  estaEstanciaBloqueada = function(id) {
    if (vistaPrevia && typeof esAdministrador !== 'undefined' && esAdministrador === true) return false;
    return comprobacionOriginal(id);
  };
  const boton = document.createElement('button');
  boton.type = 'button';
  boton.className = 'tdn-admin-preview';
  boton.hidden = true;
  boton.textContent = 'Activar vista previa de estancias';
  salir.insertAdjacentElement('afterend', boton);
  function sincronizar() {
    const autorizado = typeof esAdministrador !== 'undefined' && esAdministrador === true && !salir.hidden;
    if (!autorizado) vistaPrevia = false;
    boton.hidden = !autorizado;
    boton.textContent = vistaPrevia ? 'Desactivar vista previa de estancias' : 'Activar vista previa de estancias';
    boton.setAttribute('aria-pressed', String(vistaPrevia));
    if (typeof actualizarBloqueosEstancias === 'function') actualizarBloqueosEstancias();
  }
  boton.addEventListener('click', () => { vistaPrevia = !vistaPrevia; sincronizar(); });
  new MutationObserver(sincronizar).observe(salir, {attributes:true, attributeFilter:['hidden']});
  sincronizar();
})();

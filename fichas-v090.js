/* TIERRA DE NADIE v0.9.0 — Solo animación de las fichas existentes. */
document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('modal');
  if (!modal) return;
  const extra = document.getElementById('modalExtra');
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
  const assignStagger = () => {
    if (!extra) return;
    [...extra.children].forEach((node, i) => node.style.setProperty('--tdn90-i', Math.min(i, 14)));
  };
  assignStagger();
  if (extra) new MutationObserver(assignStagger).observe(extra, {childList:true});
  // Dejar que el script original controle abrir/cerrar, foco y contenido.
  // Retrasamos SOLO los cierres por clic para permitir una despedida suave.
  let replay = false;
  modal.addEventListener('click', event => {
    if (replay || reduce.matches || modal.hidden) return;
    const closeButton = event.target.closest?.('#cerrar, .modal__cerrar, [data-close="true"]');
    if (!closeButton || !modal.contains(closeButton)) return;
    event.preventDefault(); event.stopImmediatePropagation();
    if (modal.classList.contains('tdn90-saliendo')) return;
    modal.classList.add('tdn90-saliendo');
    setTimeout(() => {
      modal.classList.remove('tdn90-saliendo');
      if (modal.hidden) return;
      replay = true;
      try {closeButton.click();} finally {replay = false;}
    }, 310);
  }, true);
  new MutationObserver(() => {
    if (modal.hidden) modal.classList.remove('tdn90-saliendo');
    else assignStagger();
  }).observe(modal,{attributes:true,attributeFilter:['hidden']});
});

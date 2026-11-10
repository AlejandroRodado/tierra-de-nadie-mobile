/* TIERRA DE NADIE 0.8.9 — solo presentacion, sin modificar la logica de la web */
document.addEventListener('DOMContentLoaded', () => {
  const pasillo = document.querySelector('#hospital .pasillo');
  if (pasillo && !pasillo.querySelector('.tdn-senales')) {
    const senales = document.createElement('div');
    const luz = document.createElement('div');
    luz.className = 'tdn-linterna';
    luz.setAttribute('aria-hidden', 'true');
    pasillo.append(senales, luz);
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)');
    pasillo.addEventListener('pointermove', e => {
      if (!fine.matches || e.pointerType !== 'mouse') return;
      const r = pasillo.getBoundingClientRect();
      pasillo.style.setProperty('--tdn-cursor-x', `${e.clientX - r.left}px`);
      pasillo.style.setProperty('--tdn-cursor-y', `${e.clientY - r.top}px`);
      pasillo.classList.add('tdn-cursor-activo');
    }, {passive:true});
    pasillo.addEventListener('pointerleave', () => pasillo.classList.remove('tdn-cursor-activo'));
  }
  const modal = document.getElementById('modal');
  const estancia = document.getElementById('estancia');
  const pantallas = document.querySelectorAll('.pantalla');
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
  function syncFocus() {
    document.body.classList.toggle('tdn-ficha-abierta', !!(modal && !modal.hidden && estancia && !estancia.hidden));
  }
  if (modal && estancia) {
    new MutationObserver(syncFocus).observe(modal,{attributes:true,attributeFilter:['hidden']});
    new MutationObserver(syncFocus).observe(estancia,{attributes:true,attributeFilter:['hidden']});
    syncFocus();
  }
  pantallas.forEach(p => {
    let wasHidden = p.hidden;
    p.addEventListener('animationend', e => {if(e.animationName === 'tdn089Pantalla') p.classList.remove('tdn089-entrando');});
    new MutationObserver(() => {
      const nowHidden = p.hidden;
      if (wasHidden && !nowHidden && !reduce.matches) {
        p.classList.remove('tdn089-entrando');
        void p.offsetWidth;
        p.classList.add('tdn089-entrando');
      }
      if (nowHidden) p.classList.remove('tdn089-entrando');
      wasHidden = nowHidden;
    }).observe(p,{attributes:true,attributeFilter:['hidden']});
  });
});

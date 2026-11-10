/* Tierra de Nadie v0.9.1: mejoras exclusivamente visuales. */
document.addEventListener('DOMContentLoaded', () => {
  const modal=document.getElementById('modal');
  const panel=modal?.querySelector('.modal__panel');
  const estancia=document.getElementById('estancia');
  const titulo=document.getElementById('estanciaTitulo');
  if(modal && panel){
    const borde=document.createElement('div');
    borde.className='tdn91-borde';borde.setAttribute('aria-hidden','true');
    modal.appendChild(borde);
    let raf=0, frames=0;
    const ajustar=()=>{
      if(modal.hidden)return;
      const r=panel.getBoundingClientRect();
      borde.style.left=r.left+'px';borde.style.top=r.top+'px';
      borde.style.width=r.width+'px';borde.style.height=r.height+'px';
    };
    const seguirApertura=()=>{
      cancelAnimationFrame(raf);frames=0;
      const tick=()=>{ajustar();if(++frames<85&&!modal.hidden)raf=requestAnimationFrame(tick);};
      raf=requestAnimationFrame(tick);
    };
    new MutationObserver(()=>{if(!modal.hidden)seguirApertura();else cancelAnimationFrame(raf);})
      .observe(modal,{attributes:true,attributeFilter:['hidden']});
    if(!modal.hidden)seguirApertura();
    window.addEventListener('resize',ajustar,{passive:true});
    window.addEventListener('scroll',ajustar,{passive:true});
    panel.addEventListener('scroll',ajustar,{passive:true});
    if(window.ResizeObserver)new ResizeObserver(ajustar).observe(panel);
  }
  if(estancia && titulo){
    const reducir=window.matchMedia('(prefers-reduced-motion: reduce)');
    const actualizar=()=>{
      const esUci=!estancia.hidden && titulo.textContent.trim().toUpperCase()==='UCI';
      estancia.classList.remove('tdn91-uci');
      if(esUci && !reducir.matches){void estancia.offsetWidth;estancia.classList.add('tdn91-uci');}
    };
    new MutationObserver(()=>{if(!estancia.hidden)actualizar();else estancia.classList.remove('tdn91-uci');})
      .observe(estancia,{attributes:true,attributeFilter:['hidden']});
    if(!estancia.hidden)actualizar();
  }
});

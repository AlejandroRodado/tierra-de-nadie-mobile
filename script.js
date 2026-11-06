const portada=document.getElementById('portada');
const hospital=document.getElementById('hospital');
const entrar=document.getElementById('entrar');
const volver=document.getElementById('volver');
const modal=document.getElementById('modal');
const modalTitulo=document.getElementById('modalTitulo');
const modalTexto=document.getElementById('modalTexto');
const modalEtiqueta=document.getElementById('modalEtiqueta');
const modalExtra=document.getElementById('modalExtra');
const reducir=window.matchMedia('(prefers-reduced-motion: reduce)');
let focoAnterior=null;
const contenido={
 '312':{etiqueta:'EXPEDIENTE · 312',titulo:'Habitación 312',texto:'Toda historia empieza en algún lugar. Aquí, una habitación puede convertirse en mucho más que cuatro paredes.',extra:'Primer expediente disponible. Próximamente aparecerán objetos y nuevos fragmentos.'},
 '315':{etiqueta:'ACCESO RESTRINGIDO',titulo:'Habitación 315',texto:'Esta puerta todavía permanece cerrada. Su historia se revelará cuando llegue el momento.',extra:'🔒 Contenido bloqueado'},
 'azotea':{etiqueta:'LOCALIZACIÓN · AZOTEA',titulo:'La azotea',texto:'Hay atardeceres que parecen detener el tiempo. Y lugares donde una conversación puede cambiarlo todo.',extra:'☼ Primer vistazo disponible · Próximamente, nuevas imágenes.'},
 'enfermeria':{etiqueta:'ACCESO RESTRINGIDO',titulo:'Control de enfermería',texto:'Entre los pasillos también existen historias que merecen ser contadas.',extra:'🔒 Próxima revelación'},
 'novedades':{etiqueta:'TABLÓN DEL HOSPITAL',titulo:'Novedades',texto:'Bienvenido a la tercera planta. Esta es la primera apertura del hospital interactivo.',extra:'VERSIÓN 0.2.0 · Puedes explorar la habitación 312 y la azotea. Las demás zonas se irán desbloqueando.'}
};
entrar.addEventListener('click',()=>{entrar.disabled=true;portada.classList.add('saliendo');setTimeout(()=>{portada.hidden=true;hospital.hidden=false;hospital.classList.add('entrando');document.getElementById('hospital-titulo').focus();window.scrollTo(0,0);},reducir.matches?0:600);});
volver.addEventListener('click',()=>{hospital.hidden=true;portada.hidden=false;portada.classList.remove('saliendo');hospital.classList.remove('entrando');entrar.disabled=false;window.scrollTo(0,0);entrar.focus();});
function abrir(id){const item=contenido[id];if(!item)return;focoAnterior=document.activeElement;modalEtiqueta.textContent=item.etiqueta;modalTitulo.textContent=item.titulo;modalTexto.textContent=item.texto;modalExtra.textContent=item.extra;modal.hidden=false;document.body.classList.add('modal-abierto');document.getElementById('cerrar').focus();}
function cerrar(){modal.hidden=true;document.body.classList.remove('modal-abierto');if(focoAnterior)focoAnterior.focus();}
document.querySelectorAll('[data-room]').forEach(b=>b.addEventListener('click',()=>abrir(b.dataset.room)));
document.getElementById('novedadesBtn').addEventListener('click',()=>abrir('novedades'));
document.getElementById('cerrar').addEventListener('click',cerrar);
document.getElementById('cerrarAbajo').addEventListener('click',cerrar);
modal.querySelector('[data-close]').addEventListener('click',cerrar);
document.addEventListener('keydown',e=>{if(modal.hidden)return;if(e.key==='Escape')cerrar();if(e.key==='Tab'){const els=[...modal.querySelectorAll('button:not([disabled])')];const first=els[0],last=els[els.length-1];if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus();}else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus();}}});

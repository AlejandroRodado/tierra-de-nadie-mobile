/* Tierra de Nadie · Contenido de cajas 0.9.3 */
(() => {
  const root='contenido-cajas/';
  const content={
    2:{kind:'gallery',kicker:'ÁLBUM DE RECUERDOS',title:'Lo que quedó de nosotros',intro:'Cuatro fragmentos de una historia. Toca cada recuerdo para verlo con detalle.',items:[['caja02-foto-01.png','Fotografía I'],['caja02-foto-02.png','Fotografía II'],['caja02-chat-01.jpeg','Conversación · 8 de abril de 2023'],['caja02-chat-02.jpeg','Conversación · 23 de mayo de 2023']]},
    5:{kind:'audio',kicker:'UNA VOZ EN EL TIEMPO',title:'Una grabación',intro:'Hay cosas que permanecen en la voz mucho después de haber sido dichas.',file:'caja05-audio.mp3'},
    6:{kind:'video',kicker:'FRAGMENTOS EN MOVIMIENTO',title:'Dos instantes',intro:'Dos recuerdos que todavía conservan su movimiento.',items:[['caja06-video-01.mp4','Vídeo I'],['caja06-video-02.mp4','Vídeo II']]},
    8:{kind:'spotify',kicker:'BANDA SONORA',title:'Escucha Tierra de Nadie',intro:'Una selección musical para acompañar la lectura de la novela.',url:'https://open.spotify.com/playlist/6q50X466UmPHsURf2ACqvT'},
    12:{kind:'gallery',kicker:'PALABRAS QUE COSTÓ ESCRIBIR',title:'Pedir ayuda',intro:'Tres mensajes. Una conversación que también forma parte de esta historia.',items:[['caja12-mensaje-01.jpeg','Mensaje I'],['caja12-mensaje-02.jpeg','Mensaje II'],['caja12-mensaje-03.jpeg','Respuesta']]}
  };
  const el=(tag,cls,text)=>{const e=document.createElement(tag);if(cls)e.className=cls;if(text!==undefined)e.textContent=text;return e;};
  const a=(src,alt,cls)=>{const i=el('img',cls);i.src=root+src;i.alt=alt;i.loading='lazy';i.decoding='async';return i;};
  function lightbox(items,start){
    let index=start;
    const overlay=el('div','tdn-lightbox');overlay.setAttribute('role','dialog');overlay.setAttribute('aria-modal','true');overlay.setAttribute('aria-label','Visor de recuerdos');
    const panel=el('div','tdn-lightbox__panel');const head=el('div','tdn-lightbox__head');const count=el('span','tdn-lightbox__count');const close=el('button','tdn-lightbox__close','Cerrar ×');close.type='button';head.append(count,close);
    const picture=a(items[index][0],items[index][1],'tdn-lightbox__image');const caption=el('p','tdn-lightbox__caption');
    const nav=el('div','tdn-lightbox__nav');const prev=el('button','','← Anterior');const next=el('button','','Siguiente →');prev.type=next.type='button';nav.append(prev,next);panel.append(head,picture,caption,nav);overlay.append(panel);document.body.append(overlay);
    const prior=document.activeElement;
    const update=()=>{picture.src=root+items[index][0];picture.alt=items[index][1];count.textContent=`${index+1} / ${items.length}`;caption.textContent=items[index][1];prev.disabled=index===0;next.disabled=index===items.length-1;};
    const dismiss=()=>{document.removeEventListener('keydown',key);overlay.remove();if(prior?.isConnected)prior.focus();};
    const key=e=>{if(e.key==='Escape')dismiss();if(e.key==='ArrowLeft'&&index>0){index--;update();}if(e.key==='ArrowRight'&&index<items.length-1){index++;update();}};
    close.addEventListener('click',dismiss);overlay.addEventListener('click',e=>{if(e.target===overlay)dismiss();});prev.addEventListener('click',()=>{if(index>0){index--;update();}});next.addEventListener('click',()=>{if(index<items.length-1){index++;update();}});document.addEventListener('keydown',key);
    let startX=null;picture.addEventListener('touchstart',e=>{startX=e.changedTouches[0].clientX},{passive:true});picture.addEventListener('touchend',e=>{if(startX===null)return;const d=e.changedTouches[0].clientX-startX;if(Math.abs(d)>45){index=Math.max(0,Math.min(items.length-1,index+(d<0?1:-1)));update();}startX=null},{passive:true});update();close.focus();
  }
  window.tdnRenderCaja=(caja,target)=>{
    const data=content[Number(caja.numero)];if(!data)return false;
    target.replaceChildren();const card=el('section','tdn-caja-contenido');card.append(el('p','tdn-caja-kicker',data.kicker),el('h3','tdn-caja-title',data.title),el('p','tdn-caja-intro',data.intro));
    if(data.kind==='gallery'){
      const grid=el('div','tdn-caja-grid');data.items.forEach(([file,label],i)=>{const b=el('button','tdn-caja-photo');b.type='button';b.setAttribute('aria-label','Ampliar '+label);b.append(a(file,label,''),el('span','',label),el('small','','↗'));b.addEventListener('click',()=>lightbox(data.items,i));grid.append(b);});card.append(grid);
    }
    if(data.kind==='audio'){
      const visual=el('div','tdn-caja-audio-art');visual.innerHTML='<span aria-hidden="true">◖</span><div class="tdn-caja-wave" aria-hidden="true">'+Array.from({length:31},(_,i)=>`<i style="--i:${i}"></i>`).join('')+'</div>';card.append(visual);
      const audio=el('audio','tdn-caja-player');audio.controls=true;audio.preload='metadata';audio.src=root+data.file;audio.setAttribute('aria-label','Grabación de la Caja 05');card.append(audio);
      const tools=el('div','tdn-caja-audio-actions');for(const [label,delta] of [['↶ 10 s',-10],['10 s ↷',10]]){const b=el('button','',label);b.type='button';b.addEventListener('click',()=>{if(Number.isFinite(audio.duration))audio.currentTime=Math.max(0,Math.min(audio.duration,audio.currentTime+delta));});tools.append(b);}card.append(tools);
      audio.addEventListener('play',()=>visual.classList.add('playing'));audio.addEventListener('pause',()=>visual.classList.remove('playing'));
    }
    if(data.kind==='video'){
      const stack=el('div','tdn-caja-videos');data.items.forEach(([file,label],i)=>{const item=el('article','tdn-caja-video');item.append(el('div','tdn-caja-video-label',`0${i+1} / 02 · ${label}`));const video=el('video','');video.controls=true;video.preload='metadata';video.playsInline=true;video.src=root+file;video.setAttribute('aria-label',label);video.addEventListener('play',()=>stack.querySelectorAll('video').forEach(v=>{if(v!==video)v.pause();}));item.append(video);stack.append(item);});card.append(stack);
    }
    if(data.kind==='spotify'){
      const music=el('div','tdn-caja-spotify');music.append(el('div','tdn-caja-record','♫'),el('div','tdn-caja-spotify-label','PLAYLIST PERSONALIZADA DE LA NOVELA'));const link=el('a','tdn-caja-spotify-link','PULSA AQUÍ PARA ACCEDER A LA PLAYLIST ↗');link.href=data.url;link.target='_blank';link.rel='noopener noreferrer';music.append(link);card.append(music);
    }
    target.append(card);return true;
  };
})();

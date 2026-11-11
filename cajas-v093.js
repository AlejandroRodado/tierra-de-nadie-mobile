/* Tierra de Nadie · Contenido de cajas 0.9.3 */
(() => {
  const root='contenido-cajas/';
  const content={
    1:{kind:'notebook',kicker:'UN TESTIMONIO PERSONAL',title:'Cronología de un empeoramiento de salud mental',intro:'Escrito durante un atardecer.',file:'caja01-cronologia.jpeg'},
    3:{kind:'diary',kicker:'PÁGINAS DE UN CUADERNO',title:'Diario',intro:'Las primeras pesadillas, sueños conscientes y tonterías.',items:[['caja03-diario-01.jpeg','Página 01 del diario'],['caja03-diario-02.jpeg','Página 02 del diario'],['caja03-diario-03.jpeg','Página 03 del diario'],['caja03-diario-04.jpeg','Página 04 del diario'],['caja03-diario-05.jpeg','Página 05 del diario'],['caja03-diario-06.jpeg','Página 06 del diario'],['caja03-diario-07.jpeg','Página 07 del diario']]},
    4:{kind:'gallery',kicker:'CONVERSACIONES GUARDADAS',title:'Conversaciones',intro:'Dos conversaciones conservadas en capturas de pantalla. Pulsa para leerlas en grande.',items:[['caja02-chat-01.jpeg','Conversación · 8 de abril de 2023'],['caja02-chat-02.jpeg','Conversación · 23 de mayo de 2023']]},
    10:{kind:'gallery',kicker:'ÁLBUM DE RECUERDOS',title:'Lo que quedó de nosotros',intro:'Dos fotografías de una historia. Toca cada recuerdo para verlo con detalle.',items:[['caja02-foto-01.png','Fotografía I'],['caja02-foto-02.png','Fotografía II']]},
    5:{kind:'audio',kicker:'UNA VOZ EN EL TIEMPO',title:'Una grabación',intro:'Hay cosas que permanecen en la voz mucho después de haber sido dichas.',file:'caja05-audio.mp3'},
    6:{kind:'video',kicker:'FRAGMENTOS EN MOVIMIENTO',title:'Dos instantes',intro:'Dos recuerdos que todavía conservan su movimiento.',items:[['caja06-video-01.mp4','Vídeo I'],['caja06-video-02.mp4','Vídeo II']]},
    7:{kind:'letters',kicker:'ARCHIVO DE CORRESPONDENCIA · 2017—ACTUALIDAD',title:'La huella que dejó enamorarme',intro:'Cartas recibidas desde 2017 hasta la actualidad.',items:[['caja07-carta-01.jpeg','Carta · Documento 01'],['caja07-carta-02.jpeg','Carta · Documento 02'],['caja07-carta-04.jpeg','Carta · Documento 04'],['caja07-carta-05.jpeg','Carta · Documento 05'],['caja07-carta-06.jpeg','Carta · Documento 06'],['caja07-carta-07.jpeg','Carta · Documento 07'],['caja07-carta-08.jpeg','Carta · Documento 08']]},
    8:{kind:'spotify',kicker:'BANDA SONORA',title:'Escucha Tierra de Nadie',intro:'Una selección musical para acompañar la lectura de la novela.',url:'https://open.spotify.com/playlist/6q50X466UmPHsURf2ACqvT'},
    9:{kind:'external',kicker:'ANÁLISIS LITERARIO · CUATRO OBRAS',title:'Análisis literario de ChatGPT de mis cuatro libros',intro:'Acceder al enlace para descubrir qué esconden las historias sin necesidad de leerlas enteras.',url:'https://chatgpt.com/s/t_6af4aed67d088191aac69a10dd1bd5de'},
    12:{kind:'gallery',kicker:'PALABRAS QUE COSTÓ ESCRIBIR',title:'Pedir ayuda',intro:'Tres mensajes. Una conversación que también forma parte de esta historia.',items:[['caja12-mensaje-01.jpeg','Mensaje I'],['caja12-mensaje-02.jpeg','Mensaje II'],['caja12-mensaje-03.jpeg','Respuesta']]},
    13:{kind:'sketches',kicker:'TRES LUGARES · TRES MOMENTOS',title:'Lugares dibujados a mano',intro:'Tres páginas de un cuaderno. Tres lugares que guardan su propia historia.',items:[['caja13-solagua.jpeg','Solagua','Las pistas de fútbol','Solagua · Leganés'],['caja13-zarzaquemada.jpeg','Zarzaquemada','Mi habitación por las noches','Zarzaquemada · Leganés'],['caja13-castizo.jpeg','Castizo','Cuando voy a tomarme los dobles solo','Castizo']]},
    14:{kind:'notebook',kicker:'UNA PÁGINA PERSONAL',title:'problemas',intro:'Preparandome para saber qué decirle a la psicóloga.',file:'caja14-problemas.jpeg'},
    15:{kind:'album',kicker:'CAJA 15 · EPÍLOGO',title:'Álbum de recuerdos',intro:'Treinta y seis fotografías. Una historia que se recorre página a página.'}
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
    if(data.kind==='diary'){
      const gallery=el('div','tdn-caja-diario');
      data.items.forEach(([file,label],i)=>{
        const entry=el('article','tdn-caja-diario__page');
        const button=el('button','tdn-caja-diario__image');button.type='button';
        button.setAttribute('aria-label',`Ampliar página ${i+1} del diario`);
        button.append(a(file,label));
        button.addEventListener('click',()=>lightbox(data.items,i));
        const footer=el('div','tdn-caja-diario__footer');
        footer.append(el('span','',`PÁGINA ${String(i+1).padStart(2,'0')} / 07`),el('span','','AMPLIAR ↗'));
        entry.append(button,footer);gallery.append(entry);
      });card.append(gallery);
    }
    if(data.kind==='letters'){
      const gallery=el('div','tdn-caja-cartas');
      data.items.forEach(([file,label],i)=>{
        const entry=el('article','tdn-caja-carta');
        const button=el('button','tdn-caja-carta__preview');button.type='button';
        button.setAttribute('aria-label',`Abrir documento ${i+1} de ${data.items.length}`);
        button.append(a(file,label));
        button.addEventListener('click',()=>lightbox(data.items,i));
        const details=el('div','tdn-caja-carta__details');
        details.append(el('span','tdn-caja-carta__number',`DOCUMENTO ${String(i+1).padStart(2,'0')} / ${String(data.items.length).padStart(2,'0')}`),el('span','tdn-caja-carta__action','EXAMINAR CARTA ↗'));
        entry.append(button,details);gallery.append(entry);
      });
      card.append(gallery);
    }
    if(data.kind==='sketches'){
      const grid=el('div','tdn-caja-bocetos');
      const gallery=data.items.map(([file,place,description])=>[file,`${place} · ${description}`]);
      data.items.forEach(([file,place,description,location],i)=>{
        const entry=el('article','tdn-caja-boceto');
        const button=el('button','tdn-caja-boceto__image');button.type='button';button.setAttribute('aria-label',`Ampliar dibujo de ${place}`);
        button.append(a(file,`Dibujo original de ${place}`));
        button.addEventListener('click',()=>lightbox(gallery,i));
        const info=el('div','tdn-caja-boceto__info');
        info.append(el('span','tdn-caja-boceto__index',`DIBUJO ${String(i+1).padStart(2,'0')} / 03`),el('h4','',place),el('p','',description));
        const loc=el('p','tdn-caja-boceto__location');loc.append(el('span','', '⌖  UBICACIÓN · '),document.createTextNode(location));info.append(loc);
        entry.append(button,info);grid.append(entry);
      });card.append(grid);
    }
    if(data.kind==='notebook'){
      const sheet=el('div','tdn-caja-cuaderno');
      const picture=el('button','tdn-caja-cuaderno__photo');picture.type='button';picture.setAttribute('aria-label','Ampliar página manuscrita');
      picture.append(a(data.file,'Página manuscrita del cuaderno con una lista de preocupaciones personales'));
      picture.addEventListener('click',()=>lightbox([[data.file,'Página original del cuaderno']],0));
      const note=el('p','tdn-caja-cuaderno__hint','PULSA SOBRE LA PÁGINA PARA AMPLIARLA');
      sheet.append(picture,note);card.append(sheet);
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
    if(data.kind==='album'){
      const total=36, sheets=18;
      let spread=0, opened=false, busy=false;
      const wrap=el('div','tdn-album');
      const cover=el('div','tdn-album-cover');
      const coverButton=el('button','tdn-album-cover-button');coverButton.type='button';
      coverButton.append(el('span','tdn-album-cover-mark','TIERRA DE NADIE'),el('strong','','Álbum de recuerdos'),el('span','','36 fotografías · 18 dobles páginas'),el('span','tdn-album-open-hint','ABRIR ÁLBUM  ↗'));
      cover.append(coverButton);
      const book=el('div','tdn-album-book');book.hidden=true;book.setAttribute('role','dialog');book.setAttribute('aria-modal','true');book.setAttribute('aria-label','Álbum de recuerdos de Judith');book.tabIndex=-1;
      const leaves=el('div','tdn-album-leaves');
      const left=el('article','tdn-album-page tdn-album-page--left');
      const right=el('article','tdn-album-page tdn-album-page--right');
      leaves.append(left,right);
      const nav=el('div','tdn-album-nav');
      const prev=el('button','','← Anterior');const status=el('span','tdn-album-status');const next=el('button','','Siguiente →');
      const close=el('button','tdn-album-close','Cerrar álbum');
      for(const b of [prev,next,close])b.type='button';
      nav.append(prev,status,next);book.append(leaves,nav,close);wrap.append(cover,book);card.append(wrap);
      const descriptions=["Nuestra primera conversación.", "Nuestra primera foto juntos, y creo (no me mates), que es cuando nos conocimos.", "En la plaza tomando algo con nuestros mejores amigos (hijos de puta).", "En la piscina de Pablo (la nuestra estaba averiada).", "Tu primer cumpleaños juntos (de aquella tarde solo recuerdo a la tiesa de Silvia).", "Literalmente tengo una foto igual con Pablo y Jorge de la misma forma y me hizo gracia.", "Warner, no me quiero acordar con quiénes fuimos.", "Por lo que sea, nuestras piscinas seguían averiadas.", "En el X-Madrid, pero con la gente adecuada (solos).", "Parquesur.", "En el mirador de El Corte Inglés de Callao, parecía que no teníamos problemas.", "El Niño, la Pinta y la Santa María.", "En el mirador de Moncloa, muy random la verdad.", "Aquellas tardes... Ojalá volver. ¿Te imaginas? Ahí todavía no había aparecido Veronika, parecía que podía pasar.", "Descubrimos la sede.", "Ikea, ahí la idea fue cogiendo forma. Aquella época supuso un antes y un después.", "Ya bien maduritos los críos volviendo a la sede a emborracharse para decirse la verdad.", "Sede, baños, vino.", "Nuestra primera copa de vino.", "To guapos para ver las luces.", "Sé que no te mola la Navidad, pero aquel día los dos lo necesitábamos.", "Muy random.", "Volviste a mi casa después de todo.", "Cubata.", "Ahí con la peña.", "No nos podíamos imaginar en qué situación nos íbamos a volver a ver los tres en el futuro.", "Bingo. Aquella tarde nos tocó una línea.", "Gandía, putos.", "Lo único que lucía en la oscuridad del Mediterráneo.", "Previa de la previa en Gandía Palace, después seguiríamos la previa en el TikiTiki.", "Matías.", "No la subí porque no supe qué coño estaba haciendo con la boca.", "Otra Navidad sin saber lucir por dentro.", "La sede subió los precios y apareció el Castizo. Lo mejor que nos pudo pasar a nivel gastronómico y económico.", "Llevaba meses sin saber sonreír.", "En el escondite. Viendo cómo el sol huye de nosotros. Perdidos en el dolor ambos. En tierra de nadie."];
      const page=(container,index)=>{
        container.replaceChildren();
        const figure=el('button','tdn-album-picture');figure.type='button';figure.setAttribute('aria-label',`Ampliar fotografía ${index+1}`);
        const photo=el('img','');photo.src=`${root}album-15/${String(index+1).padStart(2,'0')}.jpeg`;
        photo.alt=`Fotografía ${index+1} del álbum`;photo.loading=index<2?'eager':'lazy';photo.decoding='async';
        figure.append(photo);figure.addEventListener('click',()=>lightbox(Array.from({length:total},(_,i)=>[`album-15/${String(i+1).padStart(2,'0')}.jpeg`,`Fotografía ${i+1}`]),index));
        const description=el('p','tdn-album-description',descriptions[index] || ' ');
        if(!descriptions[index])description.setAttribute('aria-label','Descripción pendiente');
        container.append(figure,description,el('span','tdn-album-page-number',String(index+1).padStart(2,'0')));
      };
      const update=()=>{
        page(left,spread*2);page(right,spread*2+1);
        status.textContent=`${spread+1} / ${sheets} · Fotografías ${spread*2+1}–${spread*2+2}`;
        prev.disabled=spread===0;next.disabled=spread===sheets-1;
      };
      const flip=direction=>{
        if(busy || spread+direction<0 || spread+direction>=sheets)return;
        if(window.matchMedia('(prefers-reduced-motion: reduce)').matches){spread+=direction;update();return;}
        busy=true;prev.disabled=next.disabled=true;
        const turning=el('div',`tdn-album-turn ${direction>0?'tdn-album-turn--forward':'tdn-album-turn--back'}`);
        const face=el('div','tdn-album-turn-face');
        const img=el('img','');img.src=`${root}album-15/${String(spread*2+(direction>0?2:1)).padStart(2,'0')}.jpeg`;img.alt='';
        face.append(img);turning.append(face);leaves.append(turning);
        turning.addEventListener('animationend',()=>{spread+=direction;update();turning.remove();busy=false;},{once:true});
      };
      const oldOverflow=()=>document.body.style.overflow;
      let savedOverflow='';
      const openAlbum=()=>{opened=true;cover.hidden=true;update();savedOverflow=oldOverflow();document.body.style.overflow='hidden';document.body.appendChild(book);book.hidden=false;book.focus();};
      const closeAlbum=()=>{opened=false;book.hidden=true;wrap.appendChild(book);cover.hidden=false;document.body.style.overflow=savedOverflow;coverButton.focus();};
      coverButton.addEventListener('click',openAlbum);
      close.addEventListener('click',closeAlbum);
      prev.addEventListener('click',()=>flip(-1));next.addEventListener('click',()=>flip(1));
      let touchX=null;
      leaves.addEventListener('touchstart',e=>{touchX=e.changedTouches[0].clientX;},{passive:true});
      leaves.addEventListener('touchend',e=>{if(touchX===null)return;const delta=e.changedTouches[0].clientX-touchX;if(Math.abs(delta)>65)flip(delta<0?1:-1);touchX=null;},{passive:true});
      book.addEventListener('keydown',e=>{if(e.key==='ArrowLeft')flip(-1);if(e.key==='ArrowRight')flip(1);if(e.key==='Escape'){e.stopPropagation();closeAlbum();}});
    }
    if(data.kind==='external'){
      const panel=el('div','tdn-caja-spotify');
      panel.append(el('div','tdn-caja-record','✦'),el('div','tdn-caja-spotify-label','ANÁLISIS LITERARIO DE LAS CUATRO OBRAS'));
      const link=el('a','tdn-caja-spotify-link','ACCEDER AL ANÁLISIS LITERARIO ↗');
      link.href=data.url;link.target='_blank';link.rel='noopener noreferrer';
      panel.append(link);card.append(panel);
    }
    if(data.kind==='spotify'){
      const music=el('div','tdn-caja-spotify');music.append(el('div','tdn-caja-record','♫'),el('div','tdn-caja-spotify-label','PLAYLIST PERSONALIZADA DE LA NOVELA'));const link=el('a','tdn-caja-spotify-link','PULSA AQUÍ PARA ACCEDER A LA PLAYLIST ↗');link.href=data.url;link.target='_blank';link.rel='noopener noreferrer';music.append(link);card.append(music);
    }
    target.append(card);return true;
  };
})();

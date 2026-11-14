/* Tierra de Nadie · Contenido de cajas 0.9.3 */
(() => {
  const root='contenido-cajas/';
  const content={
    1:{kind:'notebook',kicker:'UN TESTIMONIO PERSONAL',title:'Cronología de un empeoramiento de salud mental',intro:'Escrito durante un atardecer.',file:'caja01-cronologia.jpeg'},
    2:{kind:'video-solo',kicker:'UNA PROSA POÉTICA · CAJA 02',title:'EL AGUJERO',intro:'Ponte los cascos, túmbate y prepárate para entrar a mi cabeza.',file:'caja02-el-agujero.mp4'},
    3:{kind:'diary',kicker:'PÁGINAS DE UN CUADERNO',title:'Diario',intro:'Las primeras pesadillas, sueños conscientes y tonterías.',items:[['caja03-diario-01.jpeg','Página 01 del diario'],['caja03-diario-02.jpeg','Página 02 del diario'],['caja03-diario-03.jpeg','Página 03 del diario'],['caja03-diario-04.jpeg','Página 04 del diario'],['caja03-diario-05.jpeg','Página 05 del diario'],['caja03-diario-06.jpeg','Página 06 del diario'],['caja03-diario-07.jpeg','Página 07 del diario']]},
    4:{kind:'gallery',kicker:'CONVERSACIONES GUARDADAS',title:'Conversaciones',intro:'Dos conversaciones conservadas en capturas de pantalla. Pulsa para leerlas en grande.',items:[['caja02-chat-01.jpeg','Conversación · 8 de abril de 2023'],['caja02-chat-02.jpeg','Conversación · 23 de mayo de 2023']]},
    10:{kind:'gallery',kicker:'ÁLBUM DE RECUERDOS',title:'Lo que quedó de nosotros',intro:'Dos fotografías de una historia. Toca cada recuerdo para verlo con detalle.',items:[['caja02-foto-01.png','Fotografía I'],['caja02-foto-02.png','Fotografía II']]},
    5:{kind:'audio',kicker:'UNA VOZ EN EL TIEMPO',title:'Una grabación',intro:'Hay cosas que permanecen en la voz mucho después de haber sido dichas.',file:'caja05-audio.mp3'},
    6:{kind:'video',kicker:'FRAGMENTOS EN MOVIMIENTO',title:'Dos instantes',intro:'Dos recuerdos que todavía conservan su movimiento.',items:[['caja06-video-01.mp4','Vídeo I'],['caja06-video-02.mp4','Vídeo II']]},
    7:{kind:'letters',kicker:'ARCHIVO DE CORRESPONDENCIA · 2017—ACTUALIDAD',title:'La huella que dejó enamorarme',intro:'Cartas recibidas desde 2017 hasta la actualidad.',items:[['caja07-carta-01.jpeg','Carta · Documento 01'],['caja07-carta-02.jpeg','Carta · Documento 02'],['caja07-carta-04.jpeg','Carta · Documento 04'],['caja07-carta-05.jpeg','Carta · Documento 05'],['caja07-carta-06.jpeg','Carta · Documento 06'],['caja07-carta-07.jpeg','Carta · Documento 07'],['caja07-carta-08.jpeg','Carta · Documento 08']]},
    8:{kind:'spotify',kicker:'BANDA SONORA',title:'Escucha Tierra de Nadie',intro:'Una selección musical para acompañar la lectura de la novela.',url:'https://open.spotify.com/playlist/6q50X466UmPHsURf2ACqvT'},
    9:{kind:'external',kicker:'ANÁLISIS LITERARIO · CUATRO OBRAS',title:'Análisis literario de ChatGPT de mis cuatro libros',intro:'Acceder al enlace para descubrir qué esconden las historias sin necesidad de leerlas enteras.',url:'https://chatgpt.com/s/t_6af4aed67d088191aac69a10dd1bd5de'},
    11:{"kind": "friends", "kicker": "UN ARCHIVO DE PERSONAS IMPORTANTES", "title": "Las personas que me han hecho ser quien soy", "intro": "Quince nombres. Quince formas distintas de acompañarme. Un pequeño homenaje a quienes han dejado huella en mi vida.", "items": [["Judith", "Es una de las personas más importantes de mi vida. Cuando mis amigos me dejaron de lado ella fue la primera en estar conmigo sin ni siquiera conocerme. Ha estado en todos los momentos. Habéis pasado por mucho. No me imagino una vida sin ella. Es lo más fiel y cercano a un hermano que he tenido. Le cae muy bien a mis padres. Con ella literalmente no tengo secretos. No me puedo permitir dejarla ir. Te quiero mucho."], ["Espinosa", "De las personas más importantes de mi vida. En su momento hablábamos mucho más. Me ha enseñado mucho a cómo vivir. Es muy maduro, muy diferente y muy especial. Tiene una forma de expresarse muy única. Le quiero mucho. Echo mucho de menos ser tan amigo suyo como antes. Le cuesta mucho hablar de sus cosas, pero es quien mejor escucha de todos. Polivalente. Puedo hacer cualquier broma con él. Me inspiré mucho en él para crear el personaje de el chico de Tierra de nadie. A veces siento que le molesto o que no quiere estar conmigo. Tiene un perro que se llama Lukas. A veces tiene miedo de querer, pero cuando lo hace lo hace muy bien. Tiene mucho que dar. Espero no perderle nunca."], ["Fara", "Aunque nuestra relación no empezó muy bien por llamarle negro eligiendo equipo, es una persona que pone mucho interés por lo que haces y eres. Tiene un humor muy bueno. Y una pecera. Echo de menos jugar con él y con Espinosa a la play. Echo de menos verle más a menudo. Pero a pesar de que ahora no nos veamos con tanta frecuencia, cuando lo hacemos parece que no ha pasado tanto tiempo sin vernos. Va a acabar gustándole el vino, lo tengo claro. Me gusta tener conversaciones profundas con él. Tiene mucho que decir."], ["Juan", "Simplemente Juan. Es único. Su forma de ser es muy llamativa. Admiro la forma que tiene de afrontar sus problemas y los de los demás. Tiene muchas soluciones a los problemas. Es un tío sincero. Muy cercano. Madridista hijo de puta. No le gusta hablar por wasap. Está muy pendiente de mí. No le da vergüenza preguntarme si estoy mal. Tiene un perro que se llama Pepe y una hermana de puta madre. Le tengo mucho aprecio."], ["Rubén", "Un tío honrado. Siempre ha estado conmigo. Me ha ayudado mucho. Es la primera persona que supo lo que me pasaba cuando nadie lo sabía. No me esperaba tener tanta confianza en él. A veces me escribe para preguntarme qué tal estoy. Es un tío muy bueno. Tiene muchas facetas. Es un muy buen amigo. Pero es de La Fortuna."], ["Unai", "Impresionante. De las personas más maravillosas que he conocido nunca. Una putísima caja de sorpresas. Se quedó conmigo y con Óscar durante cuatro horas esperando a que viniesen mis padres a Benidorm tras una crisis. No esconde sus heridas. Le admiro mucho. Me gustaría ser más amigo suyo. Tiene una calma que envidio. No me hace sentir raro."], ["Vidal", "Un osito de peluche. Muy cercano. Sabe cuándo estar. Sabe cómo hacer que no me sienta diferente. Es imposible no sonreír con él. Comí un bocadillo de oreja por primera vez con él. Sabe acompañarme. Muchas vueltas a casa en patín desde solagua juntos. Le tengo mucho aprecio. Me gustaría verle y escucharle más veces a la semana, ayudaría mucho a mi sonrisa a ser más estable."], ["Óscar", "Ha estado en momentos importantes y duros. Me hizo conocer a gente muy importante en mi vida. En clase me ponía muy nervioso. Lo que le pasa a él no le pasa a nadie. Las cosas con él son más simples. Le gusta la cerveza como a mí. Ahora le veo menos, pero tengo su ubicación y un día de estos, cuando se me cruce el cable, le asalto por la calle."], ["Mateo", "Muy especial. Con él perdí el miedo y la vergüenza a dar abrazos. Un tío parcial, objetivo y sincero. Se parece mucho a mí. Con él no me siento diferente. No hay ansiedad. Solo hay soluciones. No sería quien soy ahora si no le hubiera conocido. Bondad, honestidad, responsabilidad. Sabe mucho de mí. Es una persona vitamina. Mucha admiración a su madre. Si necesitas una hora para hablar con él te da dos. Gracias."], ["Caro", "Conocerle fue totalmente aleatorio. Un evento canónico de mi vida fue confiar en él. Antes me quejaba mucho porque no sabía estar cuando le contaba un problema, ahora sigue siendo igual. Pero al menos no se ríe cuando le digo que se ha muerto alguien. Hijo puta. Cabrón. Le cuesta decir te quiero. Vueltas nocturnas. Llamadas. Es un friki de los bichos. Nunca he temblado por estar en su casa o quedarme a dormir. Literalmente con él los problemas dejan de ser problemas. Tiene un punto de inteligencia raro, a veces me cuesta pillarle. Tiene un problema con las mujeres. Mucha confianza. De los mejores amigos que tengo."], ["Navares", "“No estás solo bro”. Frase enmarcada en mi memoria para siempre. Es un tío con dos cojones bien puestos. Sabe estar y no estar. Sabe hablar y escuchar. Un tío de confianza que ha sabido dar abrazos en momentos donde hacerlo costaba. Sé que siempre va a estar ahí, aunque a mis ojos les cueste encontrarle."], ["Rostoll", "Fue mi primer amigo en el instituto. Al principio me enfadaba mazo que se riese tanto de mí por la play por ser malo en los juegos. Me iba mazo rallado. Pero con el tiempo lo llevé mejor y empecé a conseguir conocerle de verdad. Tiene muy buen corazón y me da mucha tranquilidad, orden y seguridad. Mi tutor en el gym."], ["Samu", "Fui el primero en decir al grupo de hablar con él cuando llegó nuevo al instituto. El resto de trabajo lo llevó Navares y Caro. Aunque no hablamos mucho, lo poco que hablamos siempre merece la pena tener espacio en mi vida. Tiene una forma muy diferente de ver la vida."], ["Rodri", "Aunque ahora no hablemos tanto, es una persona muy especial por su forma de hablar y su punto de vista. Le conocí por Instagram, a través de un juego que le preparé para que intentara descubrir quién era. En aquellos momentos necesitaba su ayuda, aunque ni siquiera le conocía. Lo vi en su mirada. Qué forma de vivir tiene."], ["Marina", "Literalmente mi hermana mayor de otros padres. Me regaló momentos en el pasado que maquillaban los momentos duros en partidas al fifa o momentos locos. Nos vemos muy poco porque la vida ha querido que fuese así. Durante mi infancia la única amiga que he tenido era ella. Me enseñó en parte a crecer y a disfrutar como un niño."]]},
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
    if(data.kind==='video-solo'){
      if(!document.getElementById('tdn-caja02-style')){
        const style=el('style');style.id='tdn-caja02-style';style.textContent=`
          .tdn-agujero{max-width:960px;margin:1.8rem auto 0}
          .tdn-agujero__frame{overflow:hidden;border:1px solid rgba(215,153,145,.38);border-radius:15px;background:#08070b;box-shadow:0 18px 55px rgba(0,0,0,.45)}
          .tdn-agujero__video{display:block;width:100%;height:auto;aspect-ratio:16/9;background:#08070b;object-fit:contain}
          .tdn-agujero__note{text-align:center;color:#cbaaa7;font-size:.88rem;letter-spacing:.035em;margin:1rem 0;line-height:1.65}
        `;document.head.append(style);
      }
      const wrap=el('div','tdn-agujero');const frame=el('div','tdn-agujero__frame');
      const video=el('video','tdn-agujero__video');video.controls=true;video.preload='metadata';video.playsInline=true;
      video.setAttribute('aria-label','EL AGUJERO, cortometraje de la Caja 02');
      const source=el('source');source.src=root+data.file;source.type='video/mp4';video.append(source);
      video.append(document.createTextNode('Tu navegador no admite la reproducción de vídeo.'));
      frame.append(video);wrap.append(frame,el('p','tdn-agujero__note','Una experiencia para escuchar con calma. Reproducción bajo tu control.'));
      card.append(wrap);
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
    if(data.kind==='friends'){
      if(!document.getElementById('tdn-caja11-style')){
        const style=el('style');style.id='tdn-caja11-style';style.textContent=`
          .tdn-amigos{margin-top:1.6rem;display:grid;gap:12px;grid-template-columns:repeat(auto-fit,minmax(min(100%,265px),1fr));align-items:start}
          .tdn-amigo{background:linear-gradient(150deg,rgba(106,50,57,.30),rgba(24,19,26,.92));border:1px solid rgba(215,158,145,.26);border-radius:16px;overflow:hidden;box-shadow:0 8px 24px rgba(0,0,0,.16)}
          .tdn-amigo[open]{border-color:rgba(224,158,140,.6);box-shadow:0 14px 35px rgba(0,0,0,.24)}
          .tdn-amigo summary{display:flex;align-items:center;gap:13px;cursor:pointer;padding:18px 16px;list-style:none;color:#f9eae3;font-weight:650;letter-spacing:.03em}
          .tdn-amigo summary::-webkit-details-marker{display:none}
          .tdn-amigo summary:focus-visible{outline:2px solid #e9aa9b;outline-offset:-3px}
          .tdn-amigo__num{font-family:Georgia,serif;font-size:1.45rem;color:#dca08f;opacity:.9}
          .tdn-amigo__name{flex:1;font-size:1.08rem}
          .tdn-amigo__arrow{color:#db9c90;transition:transform .2s}
          .tdn-amigo[open] .tdn-amigo__arrow{transform:rotate(45deg)}
          .tdn-amigo__text{margin:0;padding:0 18px 20px;color:#f0dfd8;line-height:1.8;font-size:.98rem;white-space:pre-line}
          .tdn-amigos-intro{font-family:Georgia,serif;font-style:italic;color:#e9b6aa;text-align:center;margin:1.4rem 0 .3rem;line-height:1.6}
          .tdn-amigos-end{text-align:center;color:#d7a69d;font-family:Georgia,serif;font-style:italic;margin:1.8rem 0 .4rem}
          @media(prefers-reduced-motion:reduce){.tdn-amigo__arrow{transition:none}}
        `;document.head.append(style);
      }
      card.append(el('p','tdn-amigos-intro','«Hay personas que, sin saberlo, se convierten en parte de nuestra historia».'));
      const grid=el('div','tdn-amigos');
      data.items.forEach(([name,description],i)=>{
        const item=el('details','tdn-amigo');const heading=el('summary');
        heading.append(el('span','tdn-amigo__num',String(i+1).padStart(2,'0')),el('span','tdn-amigo__name',name),el('span','tdn-amigo__arrow','+'));
        item.append(heading,el('p','tdn-amigo__text',description));grid.append(item);
      });
      card.append(grid,el('p','tdn-amigos-end','Gracias por formar parte de mi historia.'));
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

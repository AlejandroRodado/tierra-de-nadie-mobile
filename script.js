/* ==========================================
   CONEXIÓN CON SUPABASE
========================================== */

const SUPABASE_URL = 'https://xahzdkklnrfdrphwdxzo.supabase.co';

const SUPABASE_PUBLIC_KEY = 'sb_publishable_hzZqLiatGxCcFKcNnmMH0g_2gT7nJ3C';

const db = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_PUBLIC_KEY
);

let fichaOpinionesActual = null;
let esAdministrador = false;
let ultimaPublicacion = 0;
let solicitudOpiniones = 0;




/* ==========================================
   TIERRA DE NADIE
   Archivo: script.js
   Versión: 0.4.0
========================================== */


/* ==========================================
   1. ELEMENTOS DEL DOM
========================================== */

const portada = document.getElementById('portada');
const hospital = document.getElementById('hospital');
const estancia = document.getElementById('estancia');

const entrar = document.getElementById('entrar');
const volver = document.getElementById('volver');
const volverPasillo = document.getElementById('volverPasillo');

const estanciaEscena = document.getElementById('estanciaEscena');
const estanciaEtiqueta = document.getElementById('estanciaEtiqueta');
const estanciaTitulo = document.getElementById('estanciaTitulo');
const estanciaFrase = document.getElementById('estanciaFrase');
const estanciaBotones = document.getElementById('estanciaBotones');

const modal = document.getElementById('modal');
const modalTitulo = document.getElementById('modalTitulo');
const modalTexto = document.getElementById('modalTexto');
const modalEtiqueta = document.getElementById('modalEtiqueta');
const modalExtra = document.getElementById('modalExtra');

const reducir = window.matchMedia(
    '(prefers-reduced-motion: reduce)'
);

let focoAnterior = null;
let temporizadorEntrada = null;


/* ==========================================
   2. CONFIGURACIÓN DE LAS ESTANCIAS
========================================== */

const estancias = {

    
/* ==========================================
   UNIDAD DE CUIDADOS INTENSIVOS
========================================== */

'uci': {
    etiqueta: 'HOSPITAL · CUIDADOS INTENSIVOS',
    titulo: 'UCI',
    frase: 'Unidad de Cuidados Intensivos.',
    imagen: 'img/uci.png',

    opciones: [
        {
            texto: 'Conocer fecha de publicación',
            ficha: 'publicacion'
        }
    ]
},


    '312': {
        etiqueta: 'HOSPITAL · HABITACIÓN 312',
        titulo: 'Habitación 312',
        frase: 'Habitación del chico.',
        imagen: 'img/habitacion-312.png',

        opciones: [
            {
                texto: 'Conocer al chico',
                ficha: 'chico'
            }
        ]
    },

    '315': {
        etiqueta: 'HOSPITAL · HABITACIÓN 315',
        titulo: 'Habitación 315',
        frase: 'Habitación del niño.',
        imagen: 'img/habitacion-315.png',

        opciones: [
            {
                texto: 'Conocer al niño',
                ficha: 'nino'
            }
        ]
    },

    'azotea': {
        etiqueta: 'HOSPITAL · AZOTEA',
        titulo: 'La azotea',
        frase: 'Donde el sol huye de la oscuridad.',
        imagen: 'img/azotea.png',

        opciones: [
            {
                texto: 'Conocer el nombre de los capítulos',
                ficha: 'capitulos'
            },
            {
                texto: 'Conocer de qué van los capítulos',
                ficha: 'sinopsis'
            }
        ]
    },

    'psicologia': {
        etiqueta: 'HOSPITAL · GABINETE DE PSICOLOGÍA',
        titulo: 'Gabinete de psicología',
        frase: 'Dr. Mikel.',
        imagen: 'img/gabinete.png',

        opciones: [
            {
                texto: 'Conocer al psicólogo',
                ficha: 'psicologo'
            }
        ]
    }

};


/* ==========================================
   3. TARJETAS DE PRESENTACIÓN
========================================== */

const fichas = {

    
/* ==========================================
   FECHA DE PUBLICACIÓN
========================================== */

publicacion: {
    etiqueta: 'TIERRA DE NADIE · PUBLICACIÓN',
    titulo: 'Fecha de publicación',
    texto: 'Conoce la fecha de publicación el Martes 15 de diciembre de 2026 a las 21:00.',
    extra: [
        'xx/xx/2026'
    ]
},


    chico: {
        etiqueta: 'EXPEDIENTE · PERSONAJE',
        titulo: 'El chico',
        texto: 'El de las chanclas con calcetines. Pequeño. Misterioso. Callado.',
        extra: [
            'Nombre: ???',
            'Edad: 12 años.',
            'Su historia: consumido por el miedo, la aceptación social y manías absurdas, el chico tendrá que luchar por esconder su verdad todo lo que pueda. Intentando demostrar así que, a veces, los silencios pueden gritarnos más que las palabras.'
        ]
    },

    nino: {
        etiqueta: 'EXPEDIENTE · PERSONAJE',
        titulo: 'El niño',
        texto: 'El rubio. Mayor. Ansioso. Protagonista.',
        extra: [
            'Nombre: "El niño".',
            'Edad: 16 años.',
            'Su historia: tras enfrentarse durante 7 noches al pintor, el niño ahora debe anclarse a la realidad enfrentándose a sus días de estancia en la tercera planta de un hospital.'
        ]
    },

    psicologo: {
        etiqueta: 'EXPEDIENTE · PERSONAJE',
        titulo: 'El psicólogo',
        texto: 'El señor con gabardina. El de las gafas. El de la voz calmada. El que intenta escuchar',
        extra: [
            'Nombre: Mikel.',
            'Gabardina y gafas redondas.',
            'Su historia: durante sus sesiones de terapia, el psicólogo intenta comprender las complejidades de sus pacientes dando voz y camino a una alternativa diferente para conocer a las personas.'
        ]
    },

    capitulos: {
        etiqueta: 'ARCHIVO · ÍNDICE',
        titulo: 'Los capítulos',
        texto: 'Cada capítulo contiene una parte narrativa, un poema y un código QR.',
        extra: [
            'PRÓLOGO — NO ME HABLEN.',
            'Capítulo 1 — La carta.',
            'Capítulo 2 — Volver a escribirte.',
            'Capítulo 3 — Volver a quererte.',
            'Capítulo 4 — Mmm.',
            'Capítulo 5 — VHS.',
            'Capítulo 6 — Corazón temblando.',
            'Capítulo 7 — SI ESTUVIÉRAMOS JUNTOS (Interludio).',
            'Capítulo 8 — Escritor.',
            'Capítulo 9 — Enamorado.',
            'Capítulo 10 — Exagerado.',
            'Capítulo 11 — Diferente.',
            'Capítulo 12 — Saudade.',
            'Capítulo 13 — El monstruo.',
            'EPÍLOGO — TIERRA DE NADIE.',
        ]
    },

    sinopsis: {
        etiqueta: 'ARCHIVO · HISTORIA',
        titulo: 'Detrás de cada capítulo',
        texto: '¿Qué esconde cada poema?',
        extra: [
            '0. NO ME HABLEN: Sobre la ansiedad, el aislamiento y la necesidad de estar solo sin querer sentirse olvidado.',
            '1. La carta: Sobre el miedo a confesar lo que sentimos y perder a alguien que queremos.',
            '2. Volver a escribirte: Sobre el arrepentimiento de haber perdido a alguien y las ganas de recuperar lo que hubo.',
            '3. Volver a quererte: Sobre las dificultades de volver a confiar y querer después de haber sufrido.',
            '4. Mmm: Sobre el miedo a dormir, las pesadillas y los monstruos que aparecen por la noche, en formato de nana.',
            '5. VHS: Sobre la nostalgia de la infancia y los recuerdos de una felicidad que ya no existe.',
            '6. Corazón temblando: Sobre el dolor de perder a alguien que queríamos y el miedo a no poder olvidarlo.',
            '7. SI ESTUVIÉRAMOS JUNTOS (Interludio): Sobre imaginar una relación imposible y sufrir por aquello que nunca llegará a ocurrir.',
            '8. Escritor: Sobre utilizar la escritura para expresar aquello que nunca hemos sabido contar. PERSONAL.',
            '9. Enamorado:  Sobre el miedo a enamorarse, mostrarse vulnerable y volver a salir herido. PERSONAL.',
            '10. Exagerado: Sobre sentirse incomprendido cuando los demás minimizan nuestros problemas y emociones. PERSONAL.',
            '11. Diferente: Sobre sentirse distinto a los demás y no conseguir entender lo que nos está pasando. PERSONAL.',
            '12. Saudade: Sobre echar de menos nuestra antigua vida y desear volver a sentirnos como antes.',
            '13. El monstruo: ???',
            '14. TIERRA DE NADIE: ???',
        ]
    },

    novedades: {
        etiqueta: 'TABLÓN DEL HOSPITAL',
        titulo: 'Novedades',
        texto: 'El hospital sigue cambiando.',
        extra: [
            'VERSIÓN 0.4.0',
            'Nuevas estancias para explorar.',
            'Tarjetas de personajes y capítulos preparadas.',
            'Nuevo gabinete de psicología.'
        ]
    }

};


/* ==========================================
   4. CAMBIO ENTRE PANTALLAS
========================================== */

function mostrarPantalla(pantalla) {
    portada.hidden = pantalla !== portada;
    hospital.hidden = pantalla !== hospital;
    estancia.hidden = pantalla !== estancia;
    archivo.hidden = pantalla !== archivo;

    window.scrollTo(0, 0);
}


/* ==========================================
   5. ENTRAR AL HOSPITAL
========================================== */

entrar.addEventListener('click', () => {

    entrar.disabled = true;
    portada.classList.add('saliendo');

    temporizadorEntrada = setTimeout(() => {

        mostrarPantalla(hospital);

        hospital.classList.add('entrando');
        document.getElementById('hospital-titulo').focus();

        temporizadorEntrada = null;

    }, reducir.matches ? 0 : 600);

});


/* ==========================================
   6. VOLVER A LA PORTADA
========================================== */

volver.addEventListener('click', () => {

    if (temporizadorEntrada !== null) {
        clearTimeout(temporizadorEntrada);
        temporizadorEntrada = null;
    }

    mostrarPantalla(portada);

    portada.classList.remove('saliendo');
    hospital.classList.remove('entrando');

    entrar.disabled = false;
    entrar.focus();

});


/* ==========================================
   7. ABRIR UNA ESTANCIA
========================================== */


/* ==========================================
   V0.7.0 · BLOQUEOS TEMPORALES
========================================== */

const fechasAperturaEstancias = {
    '312': '2026-11-20T21:00:00+01:00',
    '315': '2026-11-27T21:00:00+01:00',
    'uci': null,
    'psicologia': '2026-12-04T21:30:00+01:00',
    'azotea': '2026-12-11T21:00:00+01:00'
};

function estaEstanciaBloqueada(id) {
    const fecha = fechasAperturaEstancias[id];

    if (!fecha) return false;

    return Date.now() < new Date(fecha).getTime();
}

function formatearAperturaEstancia(id) {
    const fecha = new Date(fechasAperturaEstancias[id]);

    return new Intl.DateTimeFormat('es-ES', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        timeZone: 'Europe/Madrid'
    }).format(fecha);
}

function mostrarAvisoBloqueo(id) {
    const aviso = document.getElementById('avisoBloqueo');
    const titulo = document.getElementById('avisoBloqueoTitulo');
    const fecha = document.getElementById('avisoBloqueoFecha');

    titulo.textContent = estancias[id].titulo;
    fecha.textContent = formatearAperturaEstancia(id);

    aviso.hidden = false;
    document.body.classList.add('bloqueo-abierto');

    document.getElementById('cerrarAvisoBloqueo').focus();
}

function cerrarAvisoBloqueo() {
    document.getElementById('avisoBloqueo').hidden = true;
    document.body.classList.remove('bloqueo-abierto');
}
    
function actualizarBloqueosEstancias() {

    document.querySelectorAll('[data-room]').forEach(boton => {

        const id = boton.dataset.room;
        const bloqueada = estaEstanciaBloqueada(id);

        // Aplicar o retirar el estado bloqueado.
        boton.classList.toggle('estancia-bloqueada', bloqueada);
        boton.setAttribute('aria-disabled', String(bloqueada));

        // Buscar el indicador dentro del botón.
        let indicador = boton.querySelector('.indicador-bloqueo');

        if (bloqueada) {

            // Crear el indicador una sola vez.
            if (!indicador) {

                indicador = document.createElement('span');
                indicador.className = 'indicador-bloqueo';

                const circulo = document.createElement('span');
                circulo.className = 'indicador-bloqueo__circulo';
                circulo.setAttribute('aria-hidden', 'true');

                const texto = document.createElement('span');
                texto.className = 'indicador-bloqueo__texto';
                texto.textContent = 'DURMIENDO...';

                indicador.append(circulo, texto);
                boton.appendChild(indicador);
            }

            boton.setAttribute(
                'title',
                'Disponible el ' + formatearAperturaEstancia(id)
            );

        } else {

            // Retirar el indicador cuando llegue la fecha.
            if (indicador) {
                indicador.remove();
            }

            boton.removeAttribute('title');
        }
    });
}


function abrirEstancia(id) {

    const datos = estancias[id];

    if (!datos) {
        return;
    }

    
    // Comprobar si la estancia ya está disponible.
    if (estaEstanciaBloqueada(id)) {
        mostrarAvisoBloqueo(id);
        return;
    }

    // Actualizar los estados visuales.
    actualizarBloqueosEstancias();


    // Actualizar los textos de la estancia
    estanciaEtiqueta.textContent = datos.etiqueta;
    estanciaTitulo.textContent = datos.titulo;
    estanciaFrase.textContent = datos.frase;

    // Establecer su fotografía de fondo
    estanciaEscena.style.backgroundImage = `
        linear-gradient(
            180deg,
            rgba(12, 8, 9, .20) 0%,
            rgba(12, 8, 9, .12) 35%,
            rgba(12, 8, 9, .85) 100%
        ),
        url("${datos.imagen}")
    `;

    // Limpiar los botones anteriores
    estanciaBotones.replaceChildren();

    // Crear las pestañas correspondientes
    datos.opciones.forEach(opcion => {

        const boton = document.createElement('button');

        boton.type = 'button';
        boton.className = 'estancia__boton';
        boton.textContent = opcion.texto;

        boton.addEventListener('click', () => {
            abrirFicha(opcion.ficha);
        });

        estanciaBotones.appendChild(boton);

    });

    // Cambiar de pantalla
    mostrarPantalla(estancia);

    estanciaTitulo.focus();

}


/* ==========================================
   8. VOLVER AL PASILLO
========================================== */

volverPasillo.addEventListener('click', () => {

    mostrarPantalla(hospital);

    document.getElementById('hospital-titulo').focus();

});


/* ==========================================
   9. ABRIR TARJETA DE PRESENTACIÓN
========================================== */

function abrirFicha(id) {

    const ficha = fichas[id];

    if (!ficha) {
        return;
    }

    // Guardar el elemento que tenía el foco
    focoAnterior = document.activeElement;

    // Insertar información
    modalEtiqueta.textContent = ficha.etiqueta;
    modalTitulo.textContent = ficha.titulo;
    modalTexto.textContent = ficha.texto;

    // Limpiar el contenido anterior
    modalExtra.replaceChildren();

    // Crear las líneas de la tarjeta
    ficha.extra.forEach(linea => {

        const parrafo = document.createElement('p');
        parrafo.textContent = linea;

        modalExtra.appendChild(parrafo);

    });

    // Mostrar tarjeta
    modal.hidden = false;

    document.body.classList.add('modal-abierto');

    document.getElementById('cerrar').focus();

    // Cargar las opiniones de esta ficha
seleccionarFichaOpiniones(id);

document.getElementById('opiniones').hidden = id === 'novedades';

}


/* ==========================================
   10. CERRAR TARJETA
========================================== */

function cerrarFicha() {

    modal.hidden = true;

    document.body.classList.remove('modal-abierto');

    if (focoAnterior && focoAnterior.isConnected) {
        focoAnterior.focus();
    }

    focoAnterior = null;

}


/* ==========================================
   11. EVENTOS DE LAS PUERTAS Y DESTINOS
========================================== */

document.querySelectorAll('[data-room]').forEach(boton => {

    boton.addEventListener('click', () => {

        abrirEstancia(boton.dataset.room);

    });

});



/* ==========================================
   13. EVENTOS PARA CERRAR LAS TARJETAS
========================================== */

document.getElementById('cerrar')
    .addEventListener('click', cerrarFicha);

document.getElementById('cerrarAbajo')
    .addEventListener('click', cerrarFicha);

modal.querySelector('[data-close]')
    .addEventListener('click', cerrarFicha);


/* ==========================================
   14. ACCESIBILIDAD DEL MODAL
========================================== */

document.addEventListener('keydown', (evento) => {

    if (modal.hidden) {
        return;
    }

    // Cerrar con Escape
    if (evento.key === 'Escape') {

        evento.preventDefault();
        cerrarFicha();
        return;

    }

    // Mantener el foco dentro del modal
    if (evento.key === 'Tab') {

        const elementos = [
    ...modal.querySelectorAll(
        'button:not([disabled]):not([hidden]), input:not([disabled]), textarea:not([disabled])'
    )
].filter(elemento => elemento.getClientRects().length > 0);

        if (elementos.length === 0) {
            return;
        }

        const primero = elementos[0];
        const ultimo = elementos[elementos.length - 1];

        if (
            evento.shiftKey &&
            document.activeElement === primero
        ) {

            evento.preventDefault();
            ultimo.focus();

        } else if (
            !evento.shiftKey &&
            document.activeElement === ultimo
        ) {

            evento.preventDefault();
            primero.focus();

        }

    }

});



/* ==========================================
   TIERRA DE NADIE
   SISTEMA DE OPINIONES
========================================== */


/* ==========================================
   1. ELEMENTOS DEL FORMULARIO
========================================== */

const formOpinion = document.getElementById('formOpinion');
const opinionNombre = document.getElementById('opinionNombre');
const opinionMensaje = document.getElementById('opinionMensaje');
const publicarOpinion = document.getElementById('publicarOpinion');

const listaOpiniones = document.getElementById('listaOpiniones');
const opinionEstado = document.getElementById('opinionEstado');

const accesoAdmin = document.getElementById('accesoAdmin');
const formAdmin = document.getElementById('formAdmin');
const adminEmail = document.getElementById('adminEmail');
const adminPassword = document.getElementById('adminPassword');
const salirAdmin = document.getElementById('salirAdmin');
const adminEstado = document.getElementById('adminEstado');


/* ==========================================
   2. SELECCIONAR FICHA
========================================== */

async function seleccionarFichaOpiniones(id) {

    fichaOpinionesActual = id;
    opinionEstado.textContent = '';

    await cargarOpiniones();

}


/* ==========================================
   3. CONSULTAR OPINIONES
========================================== */

async function cargarOpiniones() {

    const ficha = fichaOpinionesActual;

    if (!ficha) {
        return;
    }

    const solicitud = ++solicitudOpiniones;

    listaOpiniones.replaceChildren();
    listaOpiniones.textContent = 'Cargando opiniones...';

    const { data, error } = await db
        .from('comentarios')
        .select('id, nombre, mensaje, creado_en')
        .eq('ficha', ficha)
        .order('creado_en', { ascending: false })
        .limit(100);

    // Evitar mostrar resultados de otra ficha
    if (
        solicitud !== solicitudOpiniones ||
        ficha !== fichaOpinionesActual
    ) {
        return;
    }

    listaOpiniones.replaceChildren();

    if (error) {
        listaOpiniones.textContent =
            'No se han podido cargar las opiniones.';
        console.error(error);
        return;
    }

    if (data.length === 0) {

        const vacio = document.createElement('p');

        vacio.className = 'opiniones__vacio';
        vacio.textContent =
            'Todavía no hay opiniones. Puedes escribir la primera.';

        listaOpiniones.appendChild(vacio);
        return;
    }

    data.forEach(comentario => {

        const tarjeta = crearTarjetaOpinion(comentario);

        listaOpiniones.appendChild(tarjeta);

    });

}


/* ==========================================
   4. CREAR TARJETA DE OPINIÓN
========================================== */

function crearTarjetaOpinion(comentario) {

    const tarjeta = document.createElement('article');
    tarjeta.className = 'opinion';

    const cabecera = document.createElement('div');
    cabecera.className = 'opinion__cabecera';

    const datos = document.createElement('div');

    const autor = document.createElement('strong');
    autor.className = 'opinion__autor';
    autor.textContent = comentario.nombre;

    const fecha = document.createElement('time');
    fecha.className = 'opinion__fecha';

    const fechaReal = new Date(comentario.creado_en);

    fecha.dateTime = comentario.creado_en;

    fecha.textContent = fechaReal.toLocaleDateString(
        'es-ES',
        {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        }
    );

    datos.append(autor, fecha);
    cabecera.appendChild(datos);

    // El botón solo aparece para el administrador
    if (esAdministrador) {

        const eliminar = document.createElement('button');

        eliminar.type = 'button';
        eliminar.className = 'opinion__eliminar';
        eliminar.textContent = 'Eliminar';

        eliminar.addEventListener('click', () => {
            eliminarOpinion(comentario.id);
        });

        cabecera.appendChild(eliminar);

    }

    const mensaje = document.createElement('p');

    mensaje.className = 'opinion__mensaje';
    mensaje.textContent = comentario.mensaje;

    tarjeta.append(cabecera, mensaje);

    return tarjeta;

}


/* ==========================================
   5. PUBLICAR UNA OPINIÓN
========================================== */

formOpinion.addEventListener('submit', async (evento) => {

    evento.preventDefault();

    if (!fichaOpinionesActual) {
        return;
    }

    const nombre = opinionNombre.value.trim();
    const mensaje = opinionMensaje.value.trim();

    if (
        nombre.length < 2 ||
        nombre.length > 40 ||
        mensaje.length < 3 ||
        mensaje.length > 1000
    ) {
        opinionEstado.textContent =
            'Revisa la longitud del nombre y del comentario.';
        return;
    }

    // Pequeña protección local contra envíos repetidos
    if (Date.now() - ultimaPublicacion < 15000) {

        opinionEstado.textContent =
            'Espera unos segundos antes de volver a publicar.';

        return;

    }

    publicarOpinion.disabled = true;
    opinionEstado.textContent = 'Publicando...';

    const fichaPublicada = fichaOpinionesActual;

    const { error } = await db
        .from('comentarios')
        .insert({
            ficha: fichaPublicada,
            nombre: nombre,
            mensaje: mensaje
        });

    publicarOpinion.disabled = false;

   if (error) {

    opinionEstado.textContent =
        'Error al publicar: ' + error.message;

    console.error('ERROR SUPABASE:', error);
    return;

}

    ultimaPublicacion = Date.now();

    opinionMensaje.value = '';

    opinionEstado.textContent =
        'Tu opinión se ha publicado correctamente.';

    if (fichaOpinionesActual === fichaPublicada) {
        await cargarOpiniones();
    }

});


/* ==========================================
   6. COMPROBAR ADMINISTRADOR
========================================== */

async function comprobarAdministrador() {

    const { data: usuario, error: errorUsuario } =
        await db.auth.getUser();

    if (errorUsuario || !usuario.user) {
        esAdministrador = false;
    } else {

        const { data, error } = await db
            .rpc('es_admin_comentarios');

        esAdministrador = !error && data === true;

    }

    accesoAdmin.hidden = esAdministrador;
    salirAdmin.hidden = !esAdministrador;

    return esAdministrador;

}


/* ==========================================
   7. ABRIR ACCESO DE ADMINISTRACIÓN
========================================== */

accesoAdmin.addEventListener('click', () => {

    formAdmin.hidden = !formAdmin.hidden;

    adminEstado.textContent = '';

    if (!formAdmin.hidden) {
        adminEmail.focus();
    }

});


/* ==========================================
   8. INICIAR SESIÓN DE ADMINISTRADOR
========================================== */

formAdmin.addEventListener('submit', async (evento) => {

    evento.preventDefault();

    adminEstado.textContent = 'Comprobando acceso...';

    const { error } = await db.auth.signInWithPassword({
        email: adminEmail.value.trim(),
        password: adminPassword.value
    });

    // No conservar la contraseña en el formulario
    adminPassword.value = '';

    if (error) {

        adminEstado.textContent =
            'No se ha podido iniciar sesión.';

        return;

    }

    await comprobarAdministrador();

    if (!esAdministrador) {

        await db.auth.signOut();

        adminEstado.textContent =
            'Esta cuenta no tiene permisos de administrador.';

        return;

    }

    formAdmin.hidden = true;
    adminEstado.textContent =
        'Sesión de administrador iniciada.';

    await cargarOpiniones();

});


/* ==========================================
   9. ELIMINAR OPINIONES
========================================== */

async function eliminarOpinion(id) {

    if (!esAdministrador) {
        return;
    }

    const confirmar = window.confirm(
        '¿Quieres eliminar definitivamente esta opinión?'
    );

    if (!confirmar) {
        return;
    }

    adminEstado.textContent = 'Eliminando comentario...';

    const { data, error } = await db
        .from('comentarios')
        .delete()
        .eq('id', id)
        .select('id');

    if (error || !data || data.length === 0) {

        adminEstado.textContent =
            'No se ha podido eliminar el comentario.';

        console.error(error);
        return;

    }

    adminEstado.textContent = 'Comentario eliminado.';

    await cargarOpiniones();

}


/* ==========================================
   10. CERRAR SESIÓN
========================================== */

salirAdmin.addEventListener('click', async () => {

    const { error } = await db.auth.signOut();

    if (error) {
        adminEstado.textContent =
            'No se ha podido cerrar la sesión.';
        return;
    }

    esAdministrador = false;

    formAdmin.hidden = true;
    accesoAdmin.hidden = false;
    salirAdmin.hidden = true;

    adminEstado.textContent = 'Sesión cerrada.';

    await cargarOpiniones();

});


/* ==========================================
   11. RECUPERAR SESIÓN EXISTENTE
========================================== */

async function iniciarSistemaOpiniones() {

    await comprobarAdministrador();

}

iniciarSistemaOpiniones();


// Eliminar espacios iniciales de los campos de opinión
document.getElementById('opinionNombre').value =
    document.getElementById('opinionNombre').value.trim();

document.getElementById('opinionMensaje').value =
    document.getElementById('opinionMensaje').value.trim();

    /* ==========================================
   CORRECCIÓN HOVER HABITACIÓN 315
========================================== */



/* ==========================================
   V0.6.0 · ARCHIVO DE LAS 14 CAJAS
========================================== */

// ELEMENTOS

const archivo = document.getElementById('archivo');
const abrirArchivo = document.getElementById('abrirArchivo');
const volverArchivo = document.getElementById('volverArchivo');

const archivoCajas = document.getElementById('archivoCajas');
const archivoDetalle = document.getElementById('archivoDetalle');
const archivoCajaTitulo = document.getElementById('archivoCajaTitulo');
const archivoCajaDescripcion =
    document.getElementById('archivoCajaDescripcion');

const cerrarCaja = document.getElementById('cerrarCaja');
const archivoFormClave = document.getElementById('archivoFormClave');
const archivoClave = document.getElementById('archivoClave');
const archivoMensaje = document.getElementById('archivoMensaje');
const archivoRevelacion =
    document.getElementById('archivoRevelacion');


// DATOS DE LAS CAJAS
// Contraseñas y contenido de DEMOSTRACIÓN.
// No introducir aquí recuerdos privados reales.


/* ==========================================
   CONTRASEÑAS PERSONALIZADAS
   TIERRA DE NADIE · 15 CAJAS
========================================== */

const cajasArchivo = [
    {
        numero: 1,
        clave: 'contar',  //Qué hace el niño para relajarse y calmar su ansiedad (Verbo).
        tipo: 'texto',
        titulo: 'Caja PRÓLOGO',
        contenido: 'Próximamente.'
    },
    {
        numero: 2,
        clave: 'culpa',  //Qué siente el niño al ver el daño que él mismo se ha causado (Sustantivo).
        tipo: 'texto',
        titulo: 'Caja 01',
        contenido: 'Próximamente.'
    },
    {
        numero: 3,
        clave: 'UCI',  //Lugar donde se hospitalizan a la chica (Sustantivo propio en mayúsculas).
        tipo: 'texto',
        titulo: 'Caja 02',
        contenido: 'Próximamente.'
    },
    {
        numero: 4,
        clave: 'silencio',  //Herramienta del chico para esconderse de la verdad (Sustantivo).
        tipo: 'texto',
        titulo: 'Caja 03',
        contenido: 'Próximamente.'
    },
    {
        numero: 5,
        clave: 'cartas',  //Lo que esconde el niño en su caja (Sustantivo), 
        tipo: 'texto',
        titulo: 'Caja 04',
        contenido: 'Próximamente.'
    },
    {
        numero: 6,
        clave: 'gabardina',  //Lo que caracteriza a Mikel, el psicólogo del hospital (Sustantivo).
        tipo: 'texto',
        titulo: 'Caja 05',
        contenido: 'Próximamente.'
    },
    {
        numero: 7,
        clave: 'jacuzzi',  //Lugar donde se entretienen el chico y el niño (Sustantivo).
        tipo: 'texto',
        titulo: 'Caja 06',
        contenido: 'Próximamente.'
    },
    {
        numero: 8,
        clave: 'calcetines',  //A pesar de llevar chanclas, el chico también los lleva (Sustantivo).
        tipo: 'texto',
        titulo: 'Caja 07',
        contenido: 'Próximamente.'
    },
    {
        numero: 9,
        clave: 'cumpleaños',  //Celebración que a veces cuesta celebrar (Sustantivo).
        tipo: 'texto',
        titulo: 'Caja 08',
        contenido: 'Próximamente.'
    },
    {
        numero: 10,
        clave: 'vino',  //A veces es de oro, otras veces es de sangre (Sustantivo).
        tipo: 'texto',
        titulo: 'Caja 9',
        contenido: 'Próximamente.'
    },
    {
        numero: 11,
        clave: 'Almagro',  //Pueblo de Castilla La Mancha que tiene una plaza verde y blanca y un teatro muy reconocido (Sustantivo propio).
        tipo: 'texto',
        titulo: 'Caja 10',
        contenido: 'Próximamente.'
    },
    {
        numero: 12,
        clave: 'pelota',  //Objeto con el que le gusta jugar al chico (Sustantivo).
        tipo: 'texto',
        titulo: 'Caja 11',
        contenido: 'Próximamente.'
    },
    {
        numero: 13,
        clave: 'despedida',  //A lo que se tiene que enfrentar el niño con el chico (Sustantivo).
        tipo: 'texto',
        titulo: 'Caja 12',
        contenido: 'Próximamente.'
    },
    {
        numero: 14,
        clave: 'AIMAR',  //Nombre del chico (Sustantivo propio en mayúsculas).
        tipo: 'texto',
        titulo: 'Caja 14',
        contenido: 'Próximamente.'
    },
    {
        numero: 15,
        clave: 'trauma',  //Experiencia que cambia a las personas, generalmente trayendo sensaciones negativas y tristes (Sustantivo).
        tipo: 'texto',
        titulo: 'Caja EPÍLOGO',
        contenido: 'Próximamente.'
    }
];



// ESTADO

let cajaSeleccionada = null;
const cajasAbiertas = new Set();


// DIBUJAR LAS 14 CAJAS

function dibujarCajas() {

    archivoCajas.replaceChildren();

    cajasArchivo.forEach(caja => {

        const boton = document.createElement('button');
        boton.type = 'button';
        boton.className = 'archivo__caja';

        const numero = document.createElement('span');
        numero.className = 'archivo__caja-numero';
        numero.textContent =
            String(caja.numero).padStart(2, '0');

        const estado = document.createElement('span');
        estado.className = 'archivo__caja-estado';

        estado.textContent = cajasAbiertas.has(caja.numero)
            ? 'ABIERTA'
            : 'BLOQUEADA';

        boton.append(numero, estado);

        boton.setAttribute(
            'aria-label',
            `Caja ${caja.numero}, ${estado.textContent}`
        );

        boton.addEventListener('click', () => {
            seleccionarCaja(caja.numero);
        });

        archivoCajas.appendChild(boton);

    });

}


// ENTRAR AL ARCHIVO


/* ==========================================
   V0.8.3 · BLOQUEO DEL ARCHIVO
========================================== */

async function puedeAbrirArchivo() {
    const { data: disponible, error } =
        await db.rpc('archivo_disponible');

    if (error) {
        console.error('Error al consultar el Archivo:', error);
        return false;
    }

    if (disponible === true) return true;

    // Acceso anticipado del administrador.
    const { data: admin, error: errorAdmin } =
        await db.rpc('es_admin_comentarios');

    return !errorAdmin && admin === true;
}

function mostrarArchivoBloqueado() {
    window.alert('CONTENIDO NO DISPONIBLE');
}

abrirArchivo.addEventListener('click', async () => {
    const permitido = await puedeAbrirArchivo();

    if (!permitido) {
    return;
}

    dibujarCajas();
    archivoDetalle.hidden = true;
    mostrarPantalla(archivo);

    document.getElementById('archivoTitulo').focus({
        preventScroll: true
    });
});



// VOLVER AL HOSPITAL

volverArchivo.addEventListener('click', () => {

    // Quitar el parámetro del QR al volver al pasillo.
    const url = new URL(window.location.href);
    url.searchParams.delete('caja');
    window.history.replaceState({}, '', url);

    mostrarPantalla(hospital);
    abrirArchivo.focus();

});


// SELECCIONAR CAJA

let consultaCajaActual = 0;

async function seleccionarCaja(numero) {
    const consulta = ++consultaCajaActual;
    cajaSeleccionada = cajasArchivo.find(caja => caja.numero === numero);
    if (!cajaSeleccionada) return;

    const caja = cajaSeleccionada;
    archivoDetalle.hidden = false;
    archivoMensaje.textContent = '';
    archivoClave.value = '';
    archivoCajaTitulo.textContent = `Caja ${String(numero).padStart(2, '0')}`;
    archivoCajaDescripcion.textContent =
        'Introduce la contraseña que has descubierto al leer el capítulo.';

    // Mostrar el formulario por defecto: nunca conceder acceso basándose
    // únicamente en un estado local o en un botón oculto.
    archivoFormClave.hidden = false;
    archivoRevelacion.hidden = true;
    archivoRevelacion.replaceChildren();

    if (cajasAbiertas.has(numero)) {
        revelarCaja(caja);
    } else {
        archivoMensaje.textContent = 'Comprobando acceso de administrador…';
        try {
            // RPC existente en el proyecto, validada por Supabase.
            const { data: admin, error } = await db.rpc('es_admin_comentarios');
            if (consulta !== consultaCajaActual || cajaSeleccionada !== caja) return;
            if (!error && admin === true) {
                archivoCajaDescripcion.textContent = 'Vista previa de administrador · sin contraseña.';
                archivoMensaje.textContent = '';
                revelarCaja(caja);
            } else {
                archivoMensaje.textContent = '';
            }
        } catch (error) {
            if (consulta === consultaCajaActual) {
                console.warn('No se pudo comprobar el acceso de administrador:', error);
                archivoMensaje.textContent = '';
            }
        }
    }

    archivoDetalle.scrollIntoView({
        behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches
            ? 'instant' : 'smooth',
        block: 'start'
    });
}


// COMPROBAR CONTRASEÑA

archivoFormClave.addEventListener('submit', evento => {

    evento.preventDefault();

    if (!cajaSeleccionada) return;

    const introducida = archivoClave.value.trim();

if (
    introducida.toLocaleLowerCase('es-ES') !==
    cajaSeleccionada.clave.toLocaleLowerCase('es-ES')
) {
        archivoMensaje.textContent =
            'La contraseña no es correcta. Inténtalo de nuevo.';

        archivoClave.value = '';
        archivoClave.focus();

        return;
    }

    cajasAbiertas.add(cajaSeleccionada.numero);

    archivoMensaje.textContent =
        'La caja se ha abierto.';

    dibujarCajas();
    revelarCaja(cajaSeleccionada);

});


// MOSTRAR CONTENIDO DESBLOQUEADO

function revelarCaja(caja) {

    archivoFormClave.hidden = true;
    archivoRevelacion.hidden = false;
    archivoRevelacion.replaceChildren();

    const titulo = document.createElement('h3');
    titulo.textContent = caja.titulo;

    archivoRevelacion.appendChild(titulo);

    if (window.tdnRenderCaja && window.tdnRenderCaja(caja, archivoRevelacion)) return;

    if (caja.tipo === 'texto') {

        const parrafo = document.createElement('p');
        parrafo.textContent = caja.contenido;

        archivoRevelacion.appendChild(parrafo);

    } else if (caja.tipo === 'imagen') {

        const imagen = document.createElement('img');

        imagen.src = caja.archivo;
        imagen.alt = caja.descripcion || caja.titulo;
        imagen.loading = 'lazy';

        archivoRevelacion.appendChild(imagen);

    } else if (caja.tipo === 'audio') {

        const audio = document.createElement('audio');

        audio.controls = true;
        audio.preload = 'none';
        audio.src = caja.archivo;

        archivoRevelacion.appendChild(audio);

    }

}


// CERRAR DETALLE Y VOLVER A LAS CAJAS

cerrarCaja.addEventListener('click', () => {
    archivoRevelacion.querySelectorAll('audio,video').forEach(m => m.pause());

    archivoDetalle.hidden = true;
    archivoClave.value = '';
    archivoMensaje.textContent = '';

    cajaSeleccionada = null;

    archivoCajas.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });

});


// INICIALIZAR

dibujarCajas();



/* ==========================================
   INICIALIZACIÓN DE BLOQUEOS
========================================== */

actualizarBloqueosEstancias();

// Actualizar automáticamente cada minuto.
setInterval(actualizarBloqueosEstancias, 60000);

// Actualizar cuando el usuario regrese a la pestaña.
document.addEventListener('visibilitychange', () => {
    if (!document.hidden) {
        actualizarBloqueosEstancias();
    }
});

// Cerrar el aviso.
document.getElementById('cerrarAvisoBloqueo')
    .addEventListener('click', cerrarAvisoBloqueo);

// Cerrar pulsando fuera del contenido.
document.getElementById('avisoBloqueo')
    .addEventListener('click', evento => {
        if (evento.target.id === 'avisoBloqueo') {
            cerrarAvisoBloqueo();
        }
    });

// Cerrar con Escape.
document.addEventListener('keydown', evento => {
    if (
        evento.key === 'Escape' &&
        !document.getElementById('avisoBloqueo').hidden
    ) {
        cerrarAvisoBloqueo();
    }
});

    
async function actualizarEstadoArchivo() {
    const permitido = await puedeAbrirArchivo();
    abrirArchivo.disabled = !permitido;

    // Localizar el panel completo que contiene
    // el botón de acceso a las quince cajas.
    const panel = abrirArchivo.parentElement;

    if (!panel) return;

    // Eliminar el bloqueo anterior del botón.
    abrirArchivo.classList.remove('archivo-bloqueado');

    let overlay = panel.querySelector(
        ':scope > .archivo-bloqueo-overlay'
    );

    if (permitido) {
        panel.classList.remove('archivo-panel-bloqueado');

        if (overlay) overlay.remove();
        return;
    }

    panel.classList.add('archivo-panel-bloqueado');

    if (!overlay) {
        overlay = document.createElement('div');
        overlay.className = 'archivo-bloqueo-overlay';

        overlay.innerHTML = `
            <div class="archivo-bloqueo-indicador">
                <span class="archivo-bloqueo-zzz"
                      aria-hidden="true">
                    <span>Z</span>
                    <span>z</span>
                    <span>z</span>
                </span>
                <span>DURMIENDO...</span>
            </div>
        `;
        panel.appendChild(overlay);
    }
}

actualizarEstadoArchivo();

setInterval(actualizarEstadoArchivo, 60000);

document.addEventListener('visibilitychange', () => {
    if (!document.hidden) {
        actualizarEstadoArchivo();
    }
});

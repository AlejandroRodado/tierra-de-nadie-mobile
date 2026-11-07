
/* ==========================================
   CONEXIÓN CON SUPABASE
========================================== */

const SUPABASE_URL = 'https://xahzdkklnrfdrphwdxzo.supabase.co/rest/v1/';

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
    texto: 'Próxima actualización el xx de xxxx de 2026 a las 21:30.',
    extra: [
        'xx/xx/xxxx'
    ]
},


    chico: {
        etiqueta: 'EXPEDIENTE · PERSONAJE',
        titulo: 'El chico',
        texto: 'El de las chanclas con calcetines. El pequeño. El misterioso. El callado.',
        extra: [
            'Nombre: ???',
            'Edad: 12 años.',
            'Su historia: consumido por el miedo, la aceptación social y manías absurdas, el chico tendrá que luchar por esconder su verdad todo lo que pueda. Intentando demostrar así que, a veces, los silencios pueden gritarnos más que las palabras.'
        ]
    },

    nino: {
        etiqueta: 'EXPEDIENTE · PERSONAJE',
        titulo: 'El niño',
        texto: 'El rubio. El mayor. El ansioso. El protagonista.',
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

function abrirEstancia(id) {

    const datos = estancias[id];

    if (!datos) {
        return;
    }

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
   12. TABLÓN DE NOVEDADES
========================================== */

document.getElementById('novedadesBtn')
    .addEventListener('click', () => {

        abrirFicha('novedades');

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
            'No se ha podido publicar. Inténtalo de nuevo.';

        console.error(error);
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

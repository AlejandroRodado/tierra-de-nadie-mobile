
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
    frase: 'Hay días que lo cambian todo.',
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
        frase: 'Aquí empezó todo.',
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
        frase: 'Hay cosas que todavía no se cuentan.',
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
        frase: 'Desde aquí, todo parecía más pequeño.',
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
        frase: 'Hay silencios que también hablan.',
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
    texto: 'Todo tiene un principio.',
    extra: [
        'xx/xx/xxxx'
    ]
},


    chico: {
        etiqueta: 'EXPEDIENTE · PERSONAJE',
        titulo: 'El chico',
        texto: 'Hay historias que empiezan sin querer.',
        extra: [
            'Nombre: pendiente de revelar.',
            'Edad: pendiente de revelar.',
            'Su historia: próximamente.'
        ]
    },

    nino: {
        etiqueta: 'EXPEDIENTE · PERSONAJE',
        titulo: 'El niño',
        texto: 'No todos los niños tienen la misma infancia.',
        extra: [
            'Nombre: pendiente de revelar.',
            'Edad: pendiente de revelar.',
            'Su historia: próximamente.'
        ]
    },

    psicologo: {
        etiqueta: 'EXPEDIENTE · PERSONAJE',
        titulo: 'El psicólogo',
        texto: 'Escuchar también tiene consecuencias.',
        extra: [
            'Nombre: pendiente de revelar.',
            'Gabardina y gafas redondas.',
            'Su historia: próximamente.'
        ]
    },

    capitulos: {
        etiqueta: 'ARCHIVO · ÍNDICE',
        titulo: 'Los capítulos',
        texto: 'Cada capítulo guarda algo.',
        extra: [
            'Capítulo 1 — Pendiente de revelar.',
            'Capítulo 2 — Pendiente de revelar.',
            'Capítulo 3 — Pendiente de revelar.',
            'El índice completo llegará después.'
        ]
    },

    sinopsis: {
        etiqueta: 'ARCHIVO · HISTORIA',
        titulo: 'Detrás de cada capítulo',
        texto: 'No todo sucede dentro de una habitación.',
        extra: [
            'Capítulo 1 — Sinopsis pendiente.',
            'Capítulo 2 — Sinopsis pendiente.',
            'Capítulo 3 — Sinopsis pendiente.',
            'Próximamente se publicarán las descripciones.'
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
                'button:not([disabled])'
            )
        ];

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

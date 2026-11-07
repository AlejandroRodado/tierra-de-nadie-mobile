
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

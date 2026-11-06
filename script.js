
/* ==========================================
   TIERRA DE NADIE
   Archivo: script.js
========================================== */


/* ==========================================
   1. ELEMENTOS DEL DOM
========================================== */

// Pantallas principales
const portada = document.getElementById('portada');
const hospital = document.getElementById('hospital');

// Botones de navegación
const entrar = document.getElementById('entrar');
const volver = document.getElementById('volver');

// Ventana modal
const modal = document.getElementById('modal');
const modalTitulo = document.getElementById('modalTitulo');
const modalTexto = document.getElementById('modalTexto');
const modalEtiqueta = document.getElementById('modalEtiqueta');
const modalExtra = document.getElementById('modalExtra');

// Preferencias de accesibilidad
const reducir = window.matchMedia(
    '(prefers-reduced-motion: reduce)'
);

// Elemento que tenía el foco antes de abrir el modal
let focoAnterior = null;


/* ==========================================
   2. CONTENIDOS DEL HOSPITAL
========================================== */

const contenido = {

    // HABITACIÓN 312
    '312': {
        etiqueta: 'EXPEDIENTE · 312',
        titulo: 'Habitación 312',
        texto: 'Aquí empezó todo.',
        extra: 'Primer expediente abierto. Lo demás llegará después.'
    },

    // HABITACIÓN 315
    '315': {
        etiqueta: 'ACCESO RESTRINGIDO',
        titulo: 'Habitación 315',
        texto: 'De esta habitación todavía no se habla.',
        extra: '🔒 Acceso cerrado'
    },

    // AZOTEA
    'azotea': {
        etiqueta: 'LOCALIZACIÓN · AZOTEA',
        titulo: 'La azotea',
        texto: 'Aquí arriba, el tiempo era distinto.',
        extra: 'Primer acceso disponible. Aún queda mucho por ver.'
    },

    // CONTROL DE ENFERMERÍA
    'enfermeria': {
        etiqueta: 'ACCESO RESTRINGIDO',
        titulo: 'Control de enfermería',
        texto: 'Alguien tenía que quedarse.',
        extra: '🔒 Acceso cerrado'
    },

    // NOVEDADES
    'novedades': {
        etiqueta: 'TABLÓN',
        titulo: 'Novedades',
        texto: 'El hospital sigue cambiando.',
        extra: 'VERSIÓN 0.3.0 · Habitación 312 y azotea abiertas.'
    }

};


/* ==========================================
   3. ENTRAR AL HOSPITAL
========================================== */

entrar.addEventListener('click', () => {

    // Evitar pulsaciones repetidas
    entrar.disabled = true;

    // Iniciar animación de salida
    portada.classList.add('saliendo');

    // Esperar a que termine la animación
    setTimeout(() => {

        // Ocultar portada
        portada.hidden = true;

        // Mostrar hospital
        hospital.hidden = false;

        // Iniciar animación de entrada
        hospital.classList.add('entrando');

        // Situar el foco en el título
        document.getElementById('hospital-titulo').focus();

        // Volver al inicio de la página
        window.scrollTo(0, 0);

    }, reducir.matches ? 0 : 600);

});


/* ==========================================
   4. VOLVER A LA PORTADA
========================================== */

volver.addEventListener('click', () => {

    // Ocultar hospital
    hospital.hidden = true;

    // Mostrar portada
    portada.hidden = false;

    // Reiniciar animaciones
    portada.classList.remove('saliendo');
    hospital.classList.remove('entrando');

    // Reactivar botón de entrada
    entrar.disabled = false;

    // Volver al inicio
    window.scrollTo(0, 0);

    // Devolver el foco al botón
    entrar.focus();

});


/* ==========================================
   5. ABRIR VENTANA MODAL
========================================== */

function abrir(id) {

    // Buscar el contenido solicitado
    const item = contenido[id];

    // Comprobar que existe
    if (!item) {
        return;
    }

    // Guardar el elemento que tenía el foco
    focoAnterior = document.activeElement;

    // Introducir la información
    modalEtiqueta.textContent = item.etiqueta;
    modalTitulo.textContent = item.titulo;
    modalTexto.textContent = item.texto;
    modalExtra.textContent = item.extra;

    // Mostrar modal
    modal.hidden = false;

    // Bloquear desplazamiento de fondo
    document.body.classList.add('modal-abierto');

    // Situar foco en el botón de cerrar
    document.getElementById('cerrar').focus();

}


/* ==========================================
   6. CERRAR VENTANA MODAL
========================================== */

function cerrar() {

    // Ocultar modal
    modal.hidden = true;

    // Restaurar desplazamiento
    document.body.classList.remove('modal-abierto');

    // Devolver el foco al elemento anterior
    if (focoAnterior) {
        focoAnterior.focus();
    }

}


/* ==========================================
   7. EVENTOS DE LAS HABITACIONES
========================================== */

// Asignar eventos a todos los elementos con data-room
document.querySelectorAll('[data-room]').forEach(boton => {

    boton.addEventListener('click', () => {

        abrir(boton.dataset.room);

    });

});


/* ==========================================
   8. EVENTO DEL TABLÓN DE NOVEDADES
========================================== */

document.getElementById('novedadesBtn').addEventListener('click', () => {

    abrir('novedades');

});


/* ==========================================
   9. EVENTOS PARA CERRAR EL MODAL
========================================== */

// Botón superior de cerrar
document.getElementById('cerrar').addEventListener('click', cerrar);

// Botón inferior de volver al pasillo
document.getElementById('cerrarAbajo').addEventListener('click', cerrar);

// Cerrar pulsando sobre el fondo oscuro
modal.querySelector('[data-close]').addEventListener('click', cerrar);


/* ==========================================
   10. ACCESIBILIDAD DEL MODAL
========================================== */

document.addEventListener('keydown', (e) => {

    // No intervenir si el modal está cerrado
    if (modal.hidden) {
        return;
    }

    // Cerrar con Escape
    if (e.key === 'Escape') {
        cerrar();
    }

    // Controlar la navegación con Tab
    if (e.key === 'Tab') {

        // Obtener botones disponibles
        const els = [
            ...modal.querySelectorAll('button:not([disabled])')
        ];

        const first = els[0];
        const last = els[els.length - 1];

        // Shift + Tab desde el primero
        if (e.shiftKey && document.activeElement === first) {

            e.preventDefault();
            last.focus();

        }

        // Tab desde el último
        else if (!e.shiftKey && document.activeElement === last) {

            e.preventDefault();
            first.focus();

        }

    }

});

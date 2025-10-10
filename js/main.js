    
let banner = document.getElementById("banner__header");
let titulo = document.getElementById("banner__titulo");
let parrafo = document.getElementById("banner__parrafo");
let boton = document.getElementById("banner__boton");
let diapositivas = [
    {
    colorFondo: "#2E81F4",
    titulo: "Welcome To My Website",
    texto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in risus eget lectus suscipit malesuada.",
    botonTexto: "Enter",

    },
    {
    colorFondo: "#24B6BB",
    titulo: "We Are Here To Help",
    texto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in risus eget lectus suscipit malesuada.",
    botonTexto: "Enter",

    }
];

let primero = 0;

document.getElementById("clic__derecha").addEventListener("click", () => {
    primero = (primero + 1) % diapositivas.length;
    actualizarDiapositiva();
});

document.getElementById("clic__izquierda").addEventListener("click", () => {
    primero = (primero - 1 + diapositivas.length) % diapositivas.length;
    actualizarDiapositiva();
    });


function actualizarDiapositiva() {
    let contenido = diapositivas[primero];
    banner.style.backgroundColor = contenido.colorFondo;
    titulo.textContent = contenido.titulo;
    parrafo.textContent = contenido.texto;
    boton.textContent = contenido.botonTexto;
    }


actualizarDiapositiva();

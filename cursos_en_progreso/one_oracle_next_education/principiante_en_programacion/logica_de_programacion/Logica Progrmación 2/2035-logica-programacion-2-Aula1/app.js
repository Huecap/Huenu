
// Trabajando con selectores en JS

// Creamos una variable titulo y le asignamos el valor del objeto h1
let titulo = document.querySelector('h1');

// Asignamos texto al objeto h1
titulo.innerHTML = 'Juego adivina el Numero';

// Query selector por clases 
/* Los query selector por clases se indican con '.clase' */ 
let parrafo = document.querySelector('.texto__parrafo');

parrafo.innerHTML = 'Indica un numero del 1 al 10';




// Definiendo funcion que modifica el contenido de un elemento html

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
};

// Funcion que limpia el contenido de un campo 
function limpiarCampo(){
    document.getElementById('numeroUsuario').value = '' ;
}

// Creamos una funcion que genere un numero aleatorio del 1 al numero indicado 
function generarNumeroAleatorio(max){
    numeroSecreto = Math.floor(Math.random() * max )+1
    return numeroSecreto
}




let secretNumber = generarNumeroAleatorio(10);
console.log(secretNumber);
let cantidadIntentos = 0;
let intentosPermitidos = 5;
// Definimos una funcion 
function verificarIntento(){
    let numeroUsuario = document.getElementById('numeroUsuario').value;
    if (intentosPermitidos > cantidadIntentos) {
        cantidadIntentos += 1 
        if (secretNumber == parseInt(numeroUsuario)) {
            asignarTextoElemento('.texto__parrafo', `Acertaste el numero secreto en ${cantidadIntentos === 1 ? cantidadIntentos+' intento' : cantidadIntentos+' intentos' }`)
        } else {
            if (secretNumber > parseInt(numeroUsuario)) {
                asignarTextoElemento('.texto__parrafo', `El Numero secreto es mayor te quedan ${intentosPermitidos - cantidadIntentos} intentos`)
            }
            else {
                asignarTextoElemento('.texto__parrafo', `El Numero secreto es menor te quedan ${intentosPermitidos - cantidadIntentos} intentos`)
            }
            limpiarCampo()
    }
}
    else{ 
        asignarTextoElemento('.texto__parrafo', `Lo siento alcanzaste el maximo de ${intentosPermitidos} intentos`)
        document.getElementById('reiniciar').removeAttribute('disabled');}
};

function nuevoJuego(){
    secretNumber = generarNumeroAleatorio(10);
    cantidadIntentos = 0
    console.log(secretNumber);
    asignarTextoElemento('p', 'Indica un numero del 1 al 10')
    document.getElementById('reiniciar').setAttribute('disabled', 'disabled');
}
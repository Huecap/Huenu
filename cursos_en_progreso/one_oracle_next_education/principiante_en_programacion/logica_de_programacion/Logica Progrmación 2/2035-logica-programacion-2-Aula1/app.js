let secretNumber = generarNumeroAleatorio(10);
let cantidadIntentos = 0;
let intentosPermitidos = 5;
let cantidadJuegosPermitidos = 2;

// Trabajando con selectores en JS

// Creamos una variable titulo y le asignamos el valor del objeto h1
let titulo = document.querySelector('h1');

// Asignamos texto al objeto h1
titulo.innerHTML = 'Juego adivina el Numero';

// Query selector por clases 
/* Los query selector por clases se indican con '.clase' */ 
let parrafo = document.querySelector('.texto__parrafo');

parrafo.innerHTML = 'Indica un numero del 1 al 10';

asignarTextoElemento('h4', `Juegos Restantes: ${cantidadJuegosPermitidos}`)

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


// Definimos una funcion 
function verificarIntento(){
    let numeroUsuario = document.getElementById('numeroUsuario').value;
    if (intentosPermitidos > cantidadIntentos) {
        cantidadIntentos += 1 
        if (secretNumber == parseInt(numeroUsuario)) {
            asignarTextoElemento('.texto__parrafo', `Acertaste el numero secreto en ${cantidadIntentos === 1 ? cantidadIntentos+' intento' : cantidadIntentos+' intentos' }`)
            document.getElementById('reiniciar').removeAttribute('disabled');
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
    if (cantidadJuegosPermitidos != 0){
        cantidadJuegosPermitidos--
        // Nuevo numero aleatorio
        secretNumber = generarNumeroAleatorio(10);
        // Limpiar al caja
        limpiarCampo()
        // Reseteamos los intentos
        cantidadIntentos = 0
        console.log(secretNumber);
        asignarTextoElemento('p', `Indica un numero del 1 al 10`)
        asignarTextoElemento('h4', `Juegos Restantes: ${cantidadJuegosPermitidos}`)
        // Setear un atributo (recibe 2 parametros, el primero es el atributo en cuesion y el segundo es el valor del atributo)
        document.getElementById('reiniciar').setAttribute('disabled', 'disabled');
    }
    else{
        asignarTextoElemento('p', `Alcanzaste el maximo de juegos permitidos`)
        document.getElementById('reiniciar').setAttribute('disabled', 'disabled')
    }
}
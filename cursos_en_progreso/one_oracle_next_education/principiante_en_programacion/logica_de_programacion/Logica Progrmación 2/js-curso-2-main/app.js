
// Descarga otro proyecto haciendo clic en este enlace y ábrelo en Visual Studio Code.

//Cambia el contenido de la etiqueta h1 con document.querySelector y asigna el siguiente texto: "Hora del Desafío".
let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora del desafio';

// Crea una función que muestre en la consola el mensaje "El botón fue clicado" siempre que se presione el botón "Console".
function botonConsole() {
    alert('El boton fue clicado');
}
// Crea una función que se ejecute cuando se haga clic en el botón "prompt", preguntando el nombre de una ciudad de Brasil. 
// Luego, muestra una alerta con el mensaje concatenando la respuesta con el texto: "Estuve en {ciudad} y me acordé de ti".
function botonPrompt(){
    let valorPrompt = prompt('Ingrese el nombre de una ciudad de Brasil');
    alert(`Estuve en ${valorPrompt} y me acorde de ti`);
}

// Crea una función que muestre una alerta con el mensaje: "Yo amo JS" siempre que se presione el botón "Alerta".
function botonAlert(){
    alert('Yo amo JS')
}
// Al hacer clic en el botón "suma", pide 2 números y muestra el resultado de la suma en una alerta.
function suma(a , b){
    return(parseInt(a)+parseInt(b));
}

function botonSuma(){
    let valorA = prompt('Ingrese el numero A');
    let valorB = prompt('Ingrese el numero B');
    alert(suma(valorA, valorB));
}


// Obtener texto encriptado 

texto = 'gato'

// Encriptar texto
/* La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"
*/

function encriptar(texto){
    // Recorremos la cadena de caracteres, caracter por caracter
    let cadenaAnterior = ""
    let cadenaPosterior = ""
    for (let x=texto.length-1; x >= 0; x--){
        //console.log(texto[x])
        switch(texto[x]){
            case 'e': 
                //console.log('enter');
                cadenaAnterior = texto.slice(0,x)
                cadenaPosterior = texto.slice(x+1)
                texto = cadenaAnterior + 'enter' + cadenaPosterior
                break;
            case 'i': 
                //console.log('imes');
                cadenaAnterior = texto.slice(0,x)
                cadenaPosterior = texto.slice(x+1)
                texto = cadenaAnterior + 'imes' + cadenaPosterior
                break;
            case 'a': 
                //console.log('ai');
                cadenaAnterior = texto.slice(0,x)
                cadenaPosterior = texto.slice(x+1)
                texto = cadenaAnterior + 'ai' + cadenaPosterior
                //console.log(texto)
                break;
            case 'o': 
                //console.log('ober');
                cadenaAnterior = texto.slice(0,x)
                cadenaPosterior = texto.slice(x+1)
                texto = cadenaAnterior + 'ober' + cadenaPosterior
                //console.log(texto)
                break;
            case 'u': 
                //console.log('ufat');
                cadenaAnterior = texto.slice(0,x)
                cadenaPosterior = texto.slice(x+1)
                texto = cadenaAnterior + 'ufat' + cadenaPosterior
                break;

        }
    }
    return texto
}

console.log(encriptar(texto))
// Des encriptar texto

// Mostrar texto 


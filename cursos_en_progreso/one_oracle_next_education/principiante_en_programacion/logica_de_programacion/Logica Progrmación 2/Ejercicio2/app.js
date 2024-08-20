function obtenerElemento(identificador){
    return document.getElementById(identificador)
}

function mostrarMensajeEnId(identificador, mensaje){
    obtenerElemento(identificador).innerHTML = mensaje
}

/* Crea una función que calcule el índice de masa corporal (IMC) de una persona a partir de su altura en metros 
y peso en kilogramos, que se recibirán como parámetros. */

function calcularIMC(altura, pesoKg) {
    let imc = pesoKg / ((altura)**2)
    return imc
}

console.log(calcularIMC(1.93 , 102))
mostrarMensajeEnId('resultado1', `Resultado ${calcularIMC(1.93 , 102)}`)


// Crea una función que calcule el valor del factorial de un número pasado como parámetro.
function factorial(valor) {
    let numero = 1
    while (valor >= 1) {
        numero = numero * valor
        valor--
    }
    return numero
    }
console.log(factorial(0))
mostrarMensajeEnId('resultado2', `El Factorial del numero es ${factorial(9)}`)

/* Crea una función que convierta un valor en dólares, pasado como parámetro, y 
devuelva el valor equivalente en reales(moneda brasileña,si deseas puedes hacerlo con el 
valor del dólar en tu país). Para esto, considera la cotización del dólar igual a R$4,80. */

function conversorMoneda(dolares){
    let valorReal = 4.80;
    return dolares*valorReal
}
console.log(conversorMoneda(10))
mostrarMensajeEnId('resultado3', `La Conversion a reales de ${10} dolares es ${conversorMoneda(10).toFixed(2)}`)


/* Crea una función que muestre en pantalla el área y el perímetro de una sala rectangular, 
utilizando la altura y la anchura que se proporcionarán como parámetros. */

function perimetroRectangular(altura, anchura){
    return (altura*anchura)
}
console.log(`El perimetro de la sala es de ${perimetroRectangular(8, 10)} metros`)
mostrarMensajeEnId('resultado4', `El perimetro de una sala de ${8} * ${10} metros  es ${perimetroRectangular(8,10).toFixed(2)} metros`)

/* Crea una función que muestre en pantalla el área y el perímetro de una sala circular,
 utilizando su radio que se proporcionará como parámetro. Considera Pi = 3,14. */

function areaCircular(radio){
    // Truncar un numero flotante a x cantidad de decimales  .toFixed(x)
    return (radio*3.14).toFixed(2)
}
console.log(`El area del circulo es de ${areaCircular(10)} metros`)
mostrarMensajeEnId('resultado5', `El area de una sala de radio ${10}m  es ${areaCircular(10)} m^2`)

// Crea una función que muestre en pantalla la tabla de multiplicar de un número dado como parámetro
function tablaMultiplicar(numero){
    let cantidad = 0;
    let tabla = ` Tabla de Multiplicar \n`;
    // Mientras la cantidad de iteraciones sea menor o igual a 10, nos suma al string una fila con la operacion correspondiente
    while (cantidad <= 10){
        tabla += `${cantidad} * ${numero} = ${numero* cantidad} \n`;
        cantidad++;
    }
    return tabla;
}

console.log(tablaMultiplicar(9))
mostrarMensajeEnId('resultado6', `La tabla de multiplicar de ${9} es ${tablaMultiplicar(9)}`)


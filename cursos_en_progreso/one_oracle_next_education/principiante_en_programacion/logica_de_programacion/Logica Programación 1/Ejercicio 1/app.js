
alert("¡Bienvenida y bienvenido a nuestro sitio web!");

let nombre = "Luna";
let edad = 25;
let numeroDeVentas = 50;
let saldoDisponible = 1000;
let mensajeError =  "¡Error! Completa todos los campos";

/* alert(mensajeError) */

nombreUsuario = prompt("Ingrese su nombre")
edadUsuario = prompt("Ingrese su edad")

if (edadUsuario >= 18) {
    alert("Puedes obtener tu licencia de conducir")
}
else {
    alert("Error no puede obtener su licencia porque es menor de edad")
}
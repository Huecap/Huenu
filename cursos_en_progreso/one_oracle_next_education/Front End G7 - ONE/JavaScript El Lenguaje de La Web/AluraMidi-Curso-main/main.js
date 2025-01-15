
class Boton {
    constructor(claseBoton, idSonido) {
        this.claseBoton = claseBoton;
        this.idSonido = idSonido;
    }
    reproducirSonido(){
        document.querySelector(this.claseBoton).onclick = () => document.querySelector(this.idSonido).play()
    }
    
}
    
/*
const listaSonidos = ['pom', 'clap', 'tim', 'puff', 'splash', 'toim', 'psh', 'tic', 'tom']
var listaBotones = []
for (const sonido of listaSonidos) {
    const boton = new Boton(`.tecla_${sonido}`, `#sonido_tecla_${sonido}`)
    boton.reproducirSonido()
    listaBotones.push(boton)
}
*/

/* Creación de una lista con todos los elementos que tienene la clases .tecla
const listaDeTeclas = document.querySelectorAll('.tecla');
console.log(listaDeTeclas);
*/
var listaBotones = [];
const listaTeclas = document.querySelectorAll('.tecla');
for (const tecla of listaTeclas) {
    const boton = new Boton(`.${tecla.classList[1]}` , `#sonido_${tecla.classList[1]}`);
    boton.reproducirSonido();
    listaBotones.push(boton);
    tecla.onkeydown = function(event){
        if (event.key == 'Enter' || event.key == 'Space') { // Evitar que la tecla Tab active la clase
            tecla.classList.add('activa');
        }
    }
    tecla.onkeyup = function(event){
        if (event.key == 'Enter' || event.key == 'Space') { // Evitar que la tecla Tab desactive la clase
            tecla.classList.remove('activa');
        }
    }
}



/* Reproducir el audio */ 
/*
  Es importante el hecho de donde coloquemos la etiqueta script del HTML
    Porque en caso que lo pongamos al principio nos va a tirar un error
*/

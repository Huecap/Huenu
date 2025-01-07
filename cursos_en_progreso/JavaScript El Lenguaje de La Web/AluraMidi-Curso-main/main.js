
class Boton {
    constructor(claseBoton, idSonido) {
        this.claseBoton = claseBoton;
        this.idSonido = idSonido;
    }
    reproducirSonido(){
        document.querySelector(this.claseBoton).onclick = () => document.querySelector(this.idSonido).play()
    }
    
}

sonidos = ['pom', 'clap', 'tim', 'puff', 'splash', 'toim', 'psh', 'tic', 'tom']
botones = []
for (const sonido of sonidos) {
    const boton = new Boton(`.tecla_${sonido}`, `#sonido_tecla_${sonido}`)
    boton.reproducirSonido()
    botones.push(boton)
}

/* Reproducir el audio */ 
/*
  Es importante el hecho de donde coloquemos la etiqueta script del HTML
    Porque en caso que lo pongamos al principio nos va a tirar un error
*/

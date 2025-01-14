
const html = document.querySelector('html')


const botonEnfoque = document.querySelector('.app__card-button--enfoque')
const botonCorto = document.querySelector('.app__card-button--corto')
const botonLargo = document.querySelector('.app__card-button--largo')


/* Imagenes */
const imagenPersona = document.querySelector('.app__image');

const iconoBotonComenzarPausa = document.querySelector('.app__card-primary-butto-icon')

/* Textos */
const titulo = document.querySelector('.app__title')

/* Musica */ 
const toggleMusic = document.querySelector('#alternar-musica')

const musica = new Audio('./sonidos/luna-rise-part-one.mp3')

musica.loop = true

const playMusic = new Audio('./sonidos/play.wav')
const pauseMusic = new Audio('./sonidos/pause.mp3')
const sixSecondsMusic = new Audio('./sonidos/beep.mp3')

/* Timer*/
const timer = document.querySelector('#timer')

const botonComenzar = document.querySelector('#start-pause')

let tiempoTranscurridoEnSegundos = 1500;

let idIntervalo = null

let flag = true 
function mostrarTiempo(){
    const tiempo = new Date(tiempoTranscurridoEnSegundos*1000)
    formattedTieme = tiempo.toLocaleTimeString('es-AR', {minute: '2-digit', second: '2-digit'})
    timer.innerHTML =  `${formattedTieme}`
}

mostrarTiempo()

toggleMusic.addEventListener('change', ()=> {
    if(musica.paused){
        musica.play()

    }else {
        musica.pause()
    }
})

/* Contador*/

const cuentaRegresiva = () => {
    if(tiempoTranscurridoEnSegundos<=0){
        reiniciar()
        alert('Tiempo Final')
        alternarTexto(false)
        flag = !flag
        tiempoTranscurridoEnSegundos = 1500
        return
    } else if(tiempoTranscurridoEnSegundos == 6){
        sixSecondsMusic.play()
    }
    tiempoTranscurridoEnSegundos -= 1;
    console.log("Temporizador:", tiempoTranscurridoEnSegundos)
    mostrarTiempo()
}

function alternarTexto(valor){
    const texto = document.querySelector('#start-pause span')
    if(valor){
        texto.textContent = `Pausa`
        iconoBotonComenzarPausa.setAttribute('src', './imagenes/pause.png')
        playMusic.play()
    } else {
        texto.textContent = 'Comenzar'
        iconoBotonComenzarPausa.setAttribute('src', './imagenes/play_arrow.png')
        if (tiempoTranscurridoEnSegundos <= 6){
            sixSecondsMusic.pause()
        }
        pauseMusic.play()
    }
}

function iniciarPausar(){
    alternarTexto(flag)
    flag = !flag
    if(idIntervalo){
        reiniciar()
        return
    } 
    idIntervalo = setInterval(cuentaRegresiva, 1000)
}

function reiniciar(){
    clearInterval(idIntervalo)
    idIntervalo = null 
}

botonComenzar.addEventListener('click', iniciarPausar)

function cambiarEstadoHover(boton){
    const actual = document.querySelector('.active')
    actual.classList.remove('active')
    boton.classList.add('active')
}

function cambiarContexto(contexto){
    html.setAttribute('data-contexto', contexto)
    imagenPersona.setAttribute('src', `imagenes/${contexto}.png`)
    
    switch(contexto){
        case "enfoque":
            titulo.innerHTML = `
            Optimiza tu productividad,<br>
            <strong class="app__title-strong">sumérgete en lo que importa.</strong>
                `
            tiempoTranscurridoEnSegundos = 1500;
            break;
            case "descanso-corto":
                titulo.innerHTML = `
                ¿Qué tal tomar un respiro? <br>
                <strong class="app__title-strong">¡Haz una pausa corta!</strong>
                `
            tiempoTranscurridoEnSegundos = 300;
            break;
            case "descanso-largo":
                titulo.innerHTML = `
                Hora de volver a la superficie <br>
                <strong class="app__title-strong">Haz una pausa</strong>
                `
                tiempoTranscurridoEnSegundos = 900; 
            
    }
    mostrarTiempo()
}

botonEnfoque.addEventListener('click', () => {
    cambiarContexto('enfoque')
    cambiarEstadoHover(botonEnfoque)
})
botonCorto.addEventListener('click', () => {
    cambiarContexto('descanso-corto')
    cambiarEstadoHover(botonCorto)
})
botonLargo.addEventListener('click', () => {
    cambiarContexto('descanso-largo')
    cambiarEstadoHover(botonLargo);
})


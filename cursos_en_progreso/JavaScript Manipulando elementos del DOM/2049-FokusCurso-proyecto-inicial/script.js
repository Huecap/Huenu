
const html = document.querySelector('html')


const botonEnfoque = document.querySelector('.app__card-button--enfoque')
const botonCorto = document.querySelector('.app__card-button--corto')
const botonLargo = document.querySelector('.app__card-button--largo')


/* Imagenes */
const imagenPersona = document.querySelector('.app__image');

/* Textos */
const titulo = document.querySelector('.app__title')

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
            break;
        case "descanso-corto":
            titulo.innerHTML = `
            ¿Qué tal tomar un respiro? <br>
            <strong class="app__title-strong">¡Haz una pausa corta!</strong>
                `
            break;
        case "descanso-largo":
            titulo.innerHTML = `
            Hora de volver a la superficie <br>
            <strong class="app__title-strong">Haz una pausa</strong>
                `
            
    }
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
let ancho = 800;
let alto = 400;
let jugadorX = 10;
let jugadorY;
let jugadorAncho = 10;
let jugadorAlto = 70;

let computadoraX;
let computadoraY;
let computadoraAncho = 10;
let computadoraAlto = 70;

let pelotaX;
let pelotaY;
let pelotaDiametro = 15;
let pelotaVelX = 4;
let pelotaVelY = 4;
let directionRight = true;

let puntajeUsuario = 0;
let puntajeMaquina = 0;

let gameStarted = false;  // Variable para controlar el inicio del juego
let gamePaused = false;  // Variable para controlar la pausa del juego
let playButton;

let resultadoPartido = 'jugando'

// Variable para la imagen de fondo
let fondo;

function preload() {
    // Cargar la imagen de fondo
    fondo = loadImage('cancha.jpg');
}

function setup() {
    createCanvas(ancho, alto);
    jugadorY = (alto / 2) - (jugadorAlto / 2);
    computadoraX = ancho - computadoraAncho - 10;
    computadoraY = (alto / 2) - (computadoraAlto / 2);
    pelotaX = ancho / 2;
    pelotaY = alto / 2;

    // Crear el botón de "Play"
    playButton = createButton('Play');
    playButton.position(ancho - ancho/4 , alto);  // Centrar el botón
    playButton.size(100, 50);
    playButton.mousePressed(startGame);  // Llamar a startGame cuando el botón sea presionado
}

function startGame() {
    gameStarted = true;  // Activar el inicio del juego
    resultadoPartido = "jugando"
    playButton.hide();  // Ocultar el botón después de presionar
    playButton = null
}

function keyPressed() {
    // Pausar o reanudar el juego al presionar Escape
    if (keyCode === ESCAPE) {
        gamePaused = !gamePaused;  // Cambiar el estado de pausa
    }
}

function restartGame() {
    // Reiniciar el juego
    resultadoPartido = 'jugando';
    puntajeUsuario = 0;
    puntajeMaquina = 0;
    playButton.hide();  // Ocultar el botón de volver a jugar
    playButton = null;  // Eliminar la referencia al botón
    gameStarted = true;
}

function draw() {
    // Dibujar la imagen de fondo
    background(10);
    image(fondo, 0, 0, ancho, alto);  // Dibuja la imagen de fondo en el lienzo

    if (!gameStarted) {
        // Mostrar instrucciones mientras el juego no haya comenzado
        fill([0, 0, 0]);
        textSize(32);
        textAlign(CENTER, CENTER);
        text('¡Presiona Play para comenzar!', ancho / 2, alto / 2);
        return;  // Detener la ejecución del juego hasta que se presione el botón
    }

    if (gamePaused) {
        // Mostrar un mensaje de "Pausado" cuando el juego está en pausa
        fill(255, 0, 0);  // Color rojo para indicar pausa
        textSize(32);
        textAlign(CENTER, CENTER);
        text('PAUSADO', ancho / 2, alto / 2);
        return;  // Detener la ejecución del juego hasta que se reanude
    }

    if (resultadoPartido == 'gano' || resultadoPartido == 'perdio') {
        // Mostrar un mensaje de "Ganaste" o "Perdiste"
        fill(resultadoPartido == 'gano' ? [0, 100,0] : [100, 0,0]);  // Color verde si ganó, rojo si perdió
        textSize(32);
        textAlign(CENTER, CENTER);
        text(resultadoPartido === 'gano' ? '¡Ganaste!' : 'Perdiste', ancho / 2, alto / 2);

        // Verificar si el botón "Volver a jugar" ya existe
        if (!playButton) {
            playButton = createButton('Volver A Jugar');
            playButton.position(ancho - ancho/4 , alto );  // Centrar el botón debajo del mensaje
            playButton.size(100, 50);
            playButton.mousePressed(restartGame);  // Llamar a restartGame cuando el botón sea presionado
        } 
        
        return;  // Detener la ejecución del juego hasta que se presione el botón
    }

    // Mostrar el puntaje
    fill(0);
    textSize(32);
    textAlign(CENTER, TOP);
    text(`${puntajeUsuario} - ${puntajeMaquina}`, ancho / 2, 20);
    
    // Dibujar jugadores
    rect(jugadorX, jugadorY, jugadorAncho, jugadorAlto);
    rect(computadoraX, computadoraY, computadoraAncho, computadoraAlto);

    // Dibujar pelota
    fill(0)
    ellipse(pelotaX, pelotaY, pelotaDiametro);

    // Movimiento de la pelota
    pelotaX += pelotaVelX;
    pelotaY += pelotaVelY;

    // Rebote en la parte superior e inferior
    if (pelotaY <= 0 || pelotaY >= alto) {
        pelotaVelY *= -1;
    }

    // Colisión con la raqueta del jugador
    if (
        pelotaX - (pelotaDiametro / 2) <= jugadorX + jugadorAncho &&
        pelotaY >= jugadorY &&
        pelotaY <= jugadorY + jugadorAlto
    ) {
        pelotaVelX *= -1;
        pelotaVelX ++;
        directionRight = true;
    }

    // Colisión con la raqueta de la computadora
    if (
        pelotaX + (pelotaDiametro / 2) >= computadoraX &&
        pelotaY >= computadoraY &&
        pelotaY <= computadoraY + computadoraAlto
    ) {
        pelotaVelX *= -1;
        pelotaVelX --;
        directionRight = false;
    }

    // Movimiento de la computadora (IA básica)
    if (pelotaY < computadoraY + (computadoraAlto / 2)) {
        computadoraY -= 5;
    } else if (pelotaY > computadoraY + (computadoraAlto / 2)) {
        computadoraY += 5;
    }

    // Mantener la raqueta de la computadora dentro de los límites
    computadoraY = constrain(computadoraY, 0, alto - computadoraAlto);

    // Movimiento del jugador
    if (keyIsDown(UP_ARROW)) {
        jugadorY -= 5;
    }
    if (keyIsDown(DOWN_ARROW)) {
        jugadorY += 5;
    }

    // Mantener la raqueta del jugador dentro de los límites
    jugadorY = constrain(jugadorY, 0, alto - jugadorAlto);

    // Reiniciar la pelota si se sale de los límites
    if (pelotaX <= 0 || pelotaX >= ancho) {
        if (pelotaX <= 0) {
            puntajeMaquina++;  // Incrementar puntaje de la computadora
            if (puntajeMaquina >= 1) {
                resultadoPartido = 'perdio'
            }
        } else {
            puntajeUsuario++;  // Incrementar puntaje del jugador
            if (puntajeUsuario >= 1) {
                resultadoPartido = 'gano'
            }
        }
        
        // Reiniciar la pelota
        pelotaX = ancho / 2;
        pelotaY = alto / 2;
        pelotaVelX = 4;  // Velocidad inicial de la pelota
        pelotaVelY = 4;
        // Cambiar la dirección de la pelota
        pelotaVelX *= directionRight ? 1 : -1;
    }
}

window.addEventListener('keydown', function(e) {
    if (e.key === "ArrowUp" || e.key === "ArrowDown") {
        e.preventDefault();
    }
});
